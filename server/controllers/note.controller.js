import Note from '../models/note.model.js';
import joi from 'joi';

const noteScheme = joi.object({
  title: joi.string().min(3).max(100).required().messages({
    'string.base': 'Title must be a string',
    'string.empty': 'Title is required',
    'string.min': 'Title must be at least 3 characters long',
    'string.max': 'Title must be at most 100 characters long',
  }),
  body: joi.string().min(10).max(500).required().messages({
    'string.base': 'Body must be a string',
    'string.empty': 'Body is required',
    'string.min': 'Body must be at least 10 characters long',
    'string.max': 'Body must be at most 500 characters long',
  }),
});

export const createNote = async (req, res, next) => {
  try {
    const { title, body } = req.body;

    //validate with joi
    const { error, value } = noteScheme.validate(req.body);

    console.log(value);

    if (error) {
      res.status(400).json({
        success: false,
        message: error.details.map((err) => err.message),
      });
    }

    const checkExistingTitle = await Note.findOne({ title });

    if (checkExistingTitle) {
      return res.status(400).json({
        success: false,
        message: 'Note with this title already exists',
      });
    }

    const newNote = await Note.create(value);

    res.status(201).json({
      success: true,
      data: newNote,
    });
  } catch (error) {
    next(error);
  }
};

export const getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res
      .status(200)
      .json({ message: 'Notes Retrieved Successfully', data: notes });
  } catch (error) {
    next(error);
  }
};

export const getNoteById = async (req, res, next) => {
  try {
    const { id } = req.params;

    console.log(id);

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: 'Note not fond',
      });
    }

    res.status(200).json({
      success: true,
      data: note,
    });
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;

    const { error, value } = noteScheme.validate(req.body);
    if (error) {
      res.status(400).json({
        success: false,
        message: error.details.map((err) => err.message),
      });
    }

    // Check if another note with the same title exists (excluding current)
    const checkExistingTitle = await Note.findOne({ title, _id: { $ne: id } });

    if (checkExistingTitle) {
      return res.status(400).json({
        success: false,
        message: 'Note with this title already exists',
      });
    }

    const updatedNote = await Note.findByIdAndUpdate(id, value);

    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: 'Note not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Note updated successfully',
      data: updatedNote,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      res.status(404).json({
        success: false,
        message: 'Note not found',
      });
    }

    res.status(200).json({
      success: true,
      messages: 'Note deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
