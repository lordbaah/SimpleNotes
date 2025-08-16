import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NoteFormSchema, type NoteFormData } from '../schema/noteSchema';
import { toast } from 'react-toastify';
import { useCreateNote } from '../hooks/mutations/useNotes';

const NewNoteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NoteFormData>({ resolver: zodResolver(NoteFormSchema) });

  const {
    mutate: createNote,
    isSuccess,
    isPending,
    isError,
    error,
    data,
  } = useCreateNote();

  const onSubmit = async (data: NoteFormData) => {
    createNote(data);
  };

  if (isError) {
    console.log(error);
    toast.error(error.message);
  }

  if (isSuccess) {
    toast.success(data.message);
  }

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
            className="w-full px-0 py-4 text-xl font-medium bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:border-gray-900 placeholder-gray-400 transition-colors"
            placeholder="Note title"
            {...register('title', {})}
          />
          <p className="text-red-500">{errors.title?.message}</p>
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
          />
          <p className="text-red-500">{errors.body?.message}</p>
        </div>

        <button
          type="submit"
          className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200"
        >
          Save Note
        </button>
      </form>
    </div>
  );
};

export default NewNoteForm;
