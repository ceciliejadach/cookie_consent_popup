const AcceptButton = ({ ...props }) => {
  return (
    <button
      className="bg-white dark:bg-black px-8 py-1 rounded-lg"
      onClick={() => {
        props.setCookieAccepted(!props.isCookieAccepted);
      }}
    >
      <span className="text-black dark:text-white">I like Cookies!</span>
    </button>
  );
};

export default AcceptButton;
