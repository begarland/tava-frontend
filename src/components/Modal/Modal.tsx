type OwnProps = {
  title: string;
  message: string;
  cancelCallback?: () => void;
  successCallback?: () => void;
  successText?: string;
};
const Modal: React.FC<OwnProps> = ({
  title,
  message,
  cancelCallback,
  successCallback,
  successText,
}) => {
  return (
    <div
      className="fixed top-0 left-0 flex w-screen h-screen bg-transparent justify-center items-center"
      style={{ zIndex: 2000 }}
    >
      <div className="w-96 h-96 bg-white dark:bg-gray-950 border border-1 p-4">
        <h1 className="text-2xl">{title}</h1>
        <div className="m-8 h-48">
          <p>{message}</p>
        </div>
        <div className="flex w-100 gap-3 justify-center">
          {cancelCallback ? (
            <button
              className="p-4 rounded border border-1 border-red-700 text-red-700"
              onClick={() => cancelCallback()}
            >
              Cancel
            </button>
          ) : null}
          {successCallback ? (
            <button
              onClick={() => successCallback()}
              className="p-4 rounded border border-1 bg-red-700 text-white"
            >
              {successText ? successText : "Okay"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;
