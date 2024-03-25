function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="submit-Btn">
      {children}
    </button>
  );
}

export default Button;
