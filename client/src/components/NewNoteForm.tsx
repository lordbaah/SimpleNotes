import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NoteFormSchema, type NoteFormData } from '../schema/noteSchema';
import { toast } from 'react-toastify';
import { useCreateNote } from '../hooks/mutations/useNotes';

const NewNoteForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<NoteFormData>({
    resolver: zodResolver(NoteFormSchema),
    defaultValues: { title: '', body: '' },
  });

  const titleValue = watch('title') || '';
  const bodyValue = watch('body') || '';

  const bodyMaxLength = 1000;
  const titleMaxLength = 50;

  const { mutate: createNote, isPending } = useCreateNote();

  const onSubmit = async (data: NoteFormData) => {
    createNote(data, {
      onSuccess: () => {
        reset(); // ✅ reset form fields only on success
        toast.success('Note created successfully!');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title
          </label>
          <input
            className="w-full px-0 py-4 text-xl font-medium bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-colors"
            placeholder="Note title"
            {...register('title', {})}
          />
          <p className="text-red-500">{errors.title?.message}</p>
          <span className="text-xs text-gray-400">
            {titleValue.length} / {titleMaxLength}
          </span>
        </div>

        <div>
          <label
            htmlFor="body"
            className="block text-sm font-medium text-gray-700 mb-2 mt-2"
          >
            Body
          </label>
          <textarea
            rows={8}
            placeholder="Start writing..."
            className="w-full px-0 py-4 text-base bg-transparent border-0 focus:outline-none placeholder-gray-400 resize-none leading-relaxed"
            {...register('body', {})}
            maxLength={bodyMaxLength}
          />
          <p className="text-red-500">{errors.body?.message}</p>
          <span className="text-xs text-gray-400">
            {bodyValue.length} / {bodyMaxLength}
          </span>
        </div>

        <button type="submit" className="btn-primary">
          {isPending ? 'Adding...' : 'Add Note'}
        </button>
      </form>
    </div>
  );
};

export default NewNoteForm;
