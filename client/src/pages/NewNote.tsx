import NewNoteForm from '../components/NewNoteForm';

const NewNote = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-xl mb-8">Create New Note</h1>
        <NewNoteForm />
      </div>
    </section>
  );
};

export default NewNote;
