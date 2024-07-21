import { useState } from "react";

export default function Liked() {
  const [checked, setChecked] = useState(true);
  return (
    <div className="mb-4">
      <label>
        <input
          onChange={() => setChecked(!checked)}
          className="me-2"
          type="checkbox"
          checked={checked}
        />
        I liked this
      </label>
      <div>
        <span className="ms-2">
          You {checked ? "liked" : "did not like"} this
        </span>
      </div>
    </div>
  );
}
