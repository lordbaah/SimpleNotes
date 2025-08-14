import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 3,
      maxLength: 100,
    },
    body: {
      type: String,
      required: true,
      trim: true,
      minLength: 10,
      maxLength: 500,
    },
  },
  { timestamps: true }
);

const Note = model('Note', noteSchema);

export default Note;
