const ErrorMessage = ({ message }) => {
  return (
    <div
      className="
        bg-red-500/10
        border
        border-red-500/20
        text-red-300
        p-4
        rounded-2xl
        text-center
      "
    >
      {message}
    </div>
  );
};

export default ErrorMessage;