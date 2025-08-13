import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
  },

  updatedAt: {
    type: Date,
  },
});

const Note = model('Note', noteSchema);

export default Note;
