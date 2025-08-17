import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NoteFormSchema, type NoteFormData } from '../schema/noteSchema';
import { useNote } from '../hooks/queries/useNotes';
import { useUpdateNote } from '../hooks/mutations/useNotes';
import { useDebounce } from '../hooks/useDebounce';
import { formatDateTime } from '../utils/formatDate';
import { Save, X, Edit3 } from 'lucide-react';
import { toast } from 'react-toastify';

const ViewAndEditNote = ({ NoteId }: { NoteId: string }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  // Fetch the note data
  const { data: note, isLoading } = useNote(NoteId);
  const {
    mutate: updateNote,
    isPending,
    // isError: isUpdateNoteError,
    // error: upDateError,
  } = useUpdateNote(NoteId);

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

  // Reset form values when note data is loaded
  useEffect(() => {
    if (note?.note) {
      reset({
        title: note.note.title,
        body: note.note.body,
      });
    }
  }, [note, reset]);

  // Watch and debounce form values
  const watchedBody = watch('body');
  const debouncedBody = useDebounce(watchedBody, 1000);

  // Auto-save effect for the body only
  useEffect(() => {
    if (
      isEditing &&
      !isPending &&
      note?.note &&
      debouncedBody &&
      debouncedBody !== note.note.body
    ) {
      updateNote({
        title: note.note.title,
        body: debouncedBody,
      });
      console.log('Auto-saving body:', debouncedBody);
    }
  }, [debouncedBody, isEditing, isPending, note?.note, updateNote]);

  const handleNoteUpdate = async (data: NoteFormData) => {
    updateNote(data, {
      onSuccess: (data) => {
        setIsEditing(false);
        setIsEditingTitle(false);
        toast.success(data.message);
        console.log(`Updating note ${NoteId} with data:`, data);
      },
      onError: (error) => {
        console.log(error.message);
        setIsEditing(true);
        setIsEditingTitle(true);
        toast.error(error.message);
      },
    });
    // setIsEditing(false);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex flex-col gap-6 justify-between items-start md:flex-row mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            {isEditing ? 'Edit Note' : note?.note?.title}
          </h1>
          {!isEditing && (
            <div>
              <p className="text-sm text-gray-500">
                Created On:{' '}
                {note?.note?.createdAt
                  ? formatDateTime(note?.note.createdAt)
                  : 'N/A'}
              </p>
              <p className="text-sm text-gray-500">
                Last updated:{' '}
                {note?.note?.updatedAt
                  ? formatDateTime(note?.note.updatedAt)
                  : 'N/A'}
              </p>
            </div>
          )}
        </div>

        <button
          onClick={() => {
            setIsEditing(!isEditing);
            setIsEditingTitle(false);
          }}
          className="btn-edit"
        >
          {isEditing ? (
            <>
              <X className="icon-size" />
              Cancel
            </>
          ) : (
            <>
              <Edit3 className="icon-size" />
              Edit Note
            </>
          )}
        </button>
      </div>

      <div className="w-full">
        <form onSubmit={handleSubmit(handleNoteUpdate)}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700"
            >
              Title
              {isEditing && !isEditingTitle && (
                <button
                  type="button"
                  onClick={() => setIsEditingTitle(true)}
                  className="btn-edit"
                >
                  <Edit3 className="icon-size" />
                  Edit Title
                </button>
              )}
            </label>
            <input
              id="title"
              className="w-full px-0 py-4 text-xl font-medium bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-colors"
              placeholder="Enter note title..."
              disabled={!isEditingTitle}
              {...register('title')}
            />
            {errors.title && (
              <p className="text-red-500 text-sm font-medium flex items-center gap-1 mt-2">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="">
            <label
              htmlFor="body"
              className="block text-sm font-semibold text-gray-700"
            >
              Body
            </label>
            <textarea
              id="body"
              rows={6}
              placeholder="Start writing your note..."
              disabled={!isEditing}
              className="w-full px-0 py-4 text-base bg-transparent border-0 focus:outline-none placeholder-gray-400 resize-none leading-relaxed"
              {...register('body')}
            />
            {errors.body && (
              <p className="text-red-500 text-sm font-medium flex items-center gap-1 mt-2">
                {errors.body.message}
              </p>
            )}
          </div>

          {isEditing && (
            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Changes are automatically saved as you type Auto-save enabled{' '}
                {isPending && '• Saving...'}
              </p>
              <button
                type="submit"
                disabled={isPending}
                className="btn-primary"
              >
                <Save className="w-4 h-4" />
                {isPending ? 'Saving...' : 'Save Note'}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ViewAndEditNote;
