import NewNoteForm from '../components/NewNoteForm';

const NewNote = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto bg-gray-50 py-12 px-6">
        <h1 className="text-3xl font-light text-gray-900 mb-8">
          Create New Note
        </h1>
        <NewNoteForm />
      </div>
    </section>
  );
};

export default NewNote;
