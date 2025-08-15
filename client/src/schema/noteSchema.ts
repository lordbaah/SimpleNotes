import { z } from 'zod';

export const NoteFormSchema = z.object({
  title: z
    .string()
    .min(3, 'Title is too short')
    .max(100, 'Title must be at most 100 characters long'),
  body: z
    .string()
    .min(10, 'Body is required')
    .max(1000, 'Body must be at most 1000 characters long'),
});

export type NoteFormData = z.infer<typeof NoteFormSchema>;
