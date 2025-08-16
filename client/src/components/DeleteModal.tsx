interface DeleteModalProps {
  onConfirm: () => void;
  onCancel?: () => void;
  title: string;
}

const DeleteModal = ({ onConfirm, onCancel, title }: DeleteModalProps) => {
  return (
    <div className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2>Are you sure you want to delete Note with tille: {title}?</h2>

        <footer className="mt-6 flex justify-end gap-2">
          <button
            onClick={onCancel}
            type="button"
            className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
          >
            Cancel
          </button>

          <button onClick={onConfirm} type="button" className="btn-delete">
            Delete
          </button>
        </footer>
      </div>
    </div>
  );
};

export default DeleteModal;
