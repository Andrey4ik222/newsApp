import { useState } from "react";

const ControlledInput = (props) => {
  const [inputValue, setInputValue] = useState();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  // eslint-disable-next-line react/prop-types
  const { inputType, placeholder } = props;
  return (
    <>
      <input
        type={inputType}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>{inputValue}</p>
    </>
  );
};

export default ControlledInput;
