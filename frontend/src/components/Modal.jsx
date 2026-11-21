function Modal({ title, description, onClose, children }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-4 top-4 text-xl leading-none text-slate-400 hover:text-slate-600"
        >
          ×
        </button>
        {title && <h2 className="text-lg font-bold text-slate-900">{title}</h2>}
        {description && (
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        )}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
