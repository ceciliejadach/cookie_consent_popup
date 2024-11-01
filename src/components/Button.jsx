const Button = ({ ctatext }) => {
  return (
    <button className="bg-white dark:bg-black text-black dark:text-white px-8 py-1 rounded-lg" onClick={() => setCookieAccepted(!isCookieAccepted)}>
      {ctatext}
    </button>
  );
};

export default Button;
