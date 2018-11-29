import React, { useState } from "react";

const handleInputFields = () => {
  const [value, setValue] = useState("");
  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};

export default ({ onSubmit }) => {
  const { resetValue, ...text } = handleInputFields();
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (text.value !== "") {
            onSubmit(text.value);
          }
          resetValue();
        }}
      >
        <input type="text" placeholder="Press enter after typing your Todo" {...text} />
      </form>
    </div>
  );
};
