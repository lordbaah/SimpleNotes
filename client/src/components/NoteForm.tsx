import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createNewNote } from '../api/api';
import { NoteFormSchema, type NoteFormData } from '../schema/noteSchema';

const NoteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<NoteFormData>({ resolver: zodResolver(NoteFormSchema) });

  const onSubmit = async (data: NoteFormData) => {
    // await createNewNote(data);
    try {
      await createNewNote(data);
    } catch (err: any) {
      alert(err.message); // Or set error state
    }
  };

  const onChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const currentTitle = watch('title');
    const currentBody = watch('body');

    console.log({
      title: currentTitle,
      body: currentBody,
    });
    console.log(e.target.value);
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <h2 className="text-2xl font-bold mb-4">Create Note</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-b-slate-900 dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          {...register('title', {
            onChange,
          })}
        />
        <p className="text-red-500">{errors.title?.message}</p>

        <textarea
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          {...register('body', {
            onChange,
          })}
        />
        <p className="text-red-500">{errors.body?.message}</p>

        <button
          type="submit"
          className="w-full rounded border  bg-blue-600 p-3 text-white transition hover:bg-opacity-90"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
