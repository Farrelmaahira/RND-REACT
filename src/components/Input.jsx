const Input = (props) => {
  const { type, name, classname, title, placeholder } = props;
  return (
    <div className="mb-6">
      <label
        htmlFor="email"
        className="block text-slate-700 text-sm font-bold mb-2 mt-5"
      >
        {title}
      </label>
      <input
        type={type}
        name={name}
        className={classname}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
