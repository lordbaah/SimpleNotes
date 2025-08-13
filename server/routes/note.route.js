import { Router } from 'express';
import {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
} from '../controllers/post.controller.js';

const noteRouter = Router();

noteRouter.post('/notes', createNote);

noteRouter.get('/notes', getNotes);

noteRouter.get('/notes/:id', getNoteById);

noteRouter.put('/notes/:id', updateNote);

noteRouter.delete('/notes/:id', deleteNote);

export default noteRouter;
