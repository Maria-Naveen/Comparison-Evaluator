const Input = ({ id, label, type, onChange, className }) => {
  return (
    <div>
      <label className="font-bold px-2" htmlFor={id}>
        {label}
      </label>
      <input type={type} onChange={onChange} className={className} />
    </div>
  );
};

export default Input;
