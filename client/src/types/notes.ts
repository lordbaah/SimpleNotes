export interface Note {
  _id: string;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface createNoteData {
  title: string;
  body: string;
}

export interface updateNoteData {
  title: string;
  body: string;
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

export interface updateNoteResponse {
  message: string;
  data: Note[];
  success: boolean;
}

export interface fetchNoteByIdResponse {
  // message: string;
  note: Note;
  success: boolean;
}

export interface deleteNoteResponse {
  message: string;
  success: boolean;
}
