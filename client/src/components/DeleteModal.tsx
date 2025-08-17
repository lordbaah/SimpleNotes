interface DeleteModalProps {
  onConfirm: () => void;
  onCancel?: () => void;
  title: string;
}

const DeleteModal = ({ onConfirm, onCancel, title }: DeleteModalProps) => {
  return (
    <div className="fixed inset-0 z-50 grid place-content-center bg-black/50 backdrop-blur-xs p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">
          Delete Note
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Are you sure you want to delete "
          <span className="font-medium text-gray-900">{title}</span>"? This
          action cannot be undone.
        </p>

        <div className="mt-6 flex justify-end gap-2">
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
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
