import { useState } from "react";

export default function TextChange() {
  const [text, setText] = useState("");

  function handleChange(e: any) {
    setText(e.target.value);
  }

  return (
    <div className="mt-3">
      <label className="me-2" htmlFor="text">
        Input
      </label>
      <input onChange={handleChange} id="text" type="text" value={text} />
      <button onClick={() => setText("")} className="btn ms-2 btn-primary">
        Reset
      </button>
      <span className="ms-2">{text}</span>
    </div>
  );
}
