import Note from '../models/note.model.js';

export const createNote = async (req, res, next) => {
  try {
    const { title, body } = req.body;

    const existingTitle = await Note.findOne({ title });

    if (existingTitle) {
      return res.status(400).json({
        success: false,
        message: 'Note with this title already exists',
      });
    }

    const newNote = await Note.create({ title: title, body: body });

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
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
