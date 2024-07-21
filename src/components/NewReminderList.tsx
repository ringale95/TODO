import React, { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}
function NewReminderList<T extends NewReminderProps>({
  onAddReminder,
}: T): JSX.Element {
  // by annotating the return value of function component the typescript compiler ensures we only have to return a jsx
  const [title, setTitle] = useState(() => "");
  const submitForm = (e: React.FormEvent) => {
    if (!title) return;
    e.preventDefault();
    onAddReminder(title);
    setTitle("");
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary my-3 rounded-fill">
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminderList;
