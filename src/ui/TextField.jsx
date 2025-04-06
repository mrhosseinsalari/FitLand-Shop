export default function TextField({
  label,
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="text-sm font-medium lg:text-base">
      <label className="mb-2 block text-neutral-700" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        className="textField__input"
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
