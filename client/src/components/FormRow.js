const FormRow = ({ type, name, value, handleChange, labelText,list }) => {
  if (type === 'text') {
    return (
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
      />
    );
  } else if (type === 'select') {
    return (
      <select name={name} value={value} onChange={handleChange}>
        {list.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    );
  }
};

export default FormRow;

