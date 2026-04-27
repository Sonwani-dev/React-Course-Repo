import { useState } from "react";

export default function InputGroup({ heading }) {
  const [inputs, setInputs] = useState({});
  let name = "";
  let data;
  function handleChange(event) {
    name = event.target.name;
    data = event.target.value;

    setInputs((values) => ({ ...values, [name]: data }));
    console.log(inputs);
  }
  return (
    <div>
      <p>
        <label htmlFor={heading}>{heading}</label>
        <input
          type="number"
          value={data}
          name={heading}
          onChange={handleChange}
        />
      </p>
    </div>
  );
}
