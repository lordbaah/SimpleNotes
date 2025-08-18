import { z } from 'zod';

export const NoteFormSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters.')
    .max(50, 'Title must be at most 50 characters long'),
  body: z
    .string()
    .min(10, 'Body must be at least 10 characters.')
    .max(1000, 'Body must be at most 1000 characters long'),
});

export type NoteFormData = z.infer<typeof NoteFormSchema>;
