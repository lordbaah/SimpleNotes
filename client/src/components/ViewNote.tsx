import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NoteFormSchema, type NoteFormData } from '../schema/noteSchema';
import { useNote } from '../hooks/queries/useNotes';
import { useUpdateNote } from '../hooks/mutations/useNotes';
import { useDebounce } from '../hooks/useDebounce';
import { formatDateTime } from '../utils/formatDate';

const ViewNote = ({ NoteId }: { NoteId: string }) => {
  const [isEditing, setIsEditing] = useState(false);

  //fetch note by id
  const { data: note, isLoading } = useNote(NoteId);

  const { mutate: updateNote, isPending } = useUpdateNote(NoteId);

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

  // Watch and debounce form values
  const watchedTitle = watch('title');
  const watchedBody = watch('body');
  const debouncedFormData = useDebounce({
    title: watchedTitle,
    body: watchedBody,
  });

  // Auto-save effect
  useEffect(() => {
    if (
      isEditing &&
      note?.note &&
      debouncedFormData.title &&
      debouncedFormData.body &&
      (debouncedFormData.title !== note.note.title ||
        debouncedFormData.body !== note.note.body)
    ) {
      updateNote({
        title: debouncedFormData.title,
        body: debouncedFormData.body,
      });
      console.log('Auto-saving:', debouncedFormData);
    }
  }, [debouncedFormData, isEditing, note?.note, updateNote]);

  // Reset form values when note data is loaded
  useEffect(() => {
    if (note?.note) {
      reset({
        title: note.note.title,
        body: note.note.body,
      });
    }
  }, [note, reset]);

  const handleNoteUpdate = async (data: NoteFormData) => {
    updateNote(data);
    setIsEditing(false);
    console.log(`Updating note ${NoteId} with data:`, data);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-1">
            {isEditing ? 'Edit Note' : note?.note?.title || 'Untitled Note'}
          </h1>
          {!isEditing && (
            <p className="text-sm text-gray-500">Last updated {}</p>
          )}
        </div>

        {/* <h1 className="text-3xl font-light text-gray-900">
          {isEditing ? 'Edit Note' : 'View Note'}
        </h1> */}
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
        >
          {isEditing ? 'Cancel' : 'Edit Note'}
        </button>
      </div>

      <div className="w-full">
        <form onSubmit={handleSubmit(handleNoteUpdate)}>
          <div className="space-y-2">
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              className={`w-full px-0 py-4 text-2xl font-semibold bg-transparent border-0 border-b-2 transition-all duration-200 placeholder-gray-400 ${
                isEditing
                  ? 'border-gray-200 focus:outline-none focus:border-blue-500 text-gray-900'
                  : 'border-transparent text-gray-800 cursor-default'
              }`}
              placeholder="Enter note title..."
              disabled={!isEditing}
              {...register('title')}
            />
            {errors.title && (
              <p className="text-red-500 text-sm font-medium flex items-center gap-1 mt-2">
                <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-xs">
                  !
                </span>
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="body"
              className="block text-sm font-semibold text-gray-700"
            >
              Content
            </label>
            <textarea
              id="body"
              rows={6}
              placeholder="Start writing your note..."
              disabled={!isEditing}
              className={`w-full px-0 py-4 text-base bg-transparent border-0 resize-none leading-relaxed transition-all duration-200 placeholder-gray-400 ${
                isEditing
                  ? 'focus:outline-none text-gray-900'
                  : 'text-gray-700 cursor-default'
              }`}
              {...register('body')}
            />
            {errors.body && (
              <p className="text-red-500 text-sm font-medium flex items-center gap-1 mt-2">
                <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-xs">
                  !
                </span>
                {errors.body.message}
              </p>
            )}
          </div>

          {isEditing && (
            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <div className="text-sm text-gray-500">
                Changes are automatically saved as you type
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                {/* <Save className="w-4 h-4" /> */}
                {isPending ? 'Saving...' : 'Save Note'}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ViewNote;
