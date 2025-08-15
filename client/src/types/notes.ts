export interface Note {
  _id: string;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface createNote {
  title: string;
  body: string;
}

export interface updateNote {
  title?: string;
  body?: string;
}

export interface getNotesResponse {
  message: string;
  notes: Note[];
  success: boolean;
}

export interface createNoteResponse {
  message: string;
  data: Note[];
  success: boolean;
}

export interface fetchNoteByIdResponse {
  // message: string;
  note: Note;
  success: boolean;
}
