import { z } from 'zod';

export const NoteFormSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters.')
    .max(50, 'Title must be at most 100 characters long'),
  body: z
    .string()
    .min(10, 'Body must be at least 10 characters.')
    .max(500, 'Body must be at most 500 characters long'),
});

export type NoteFormData = z.infer<typeof NoteFormSchema>;
