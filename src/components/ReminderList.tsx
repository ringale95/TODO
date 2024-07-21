import Reminder from "../models/Reminder";

type ReminderListProps = {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
};

export function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}{" "}
          <button
            onClick={() => onRemoveReminder(item.id)}
            className="btn btn-outline-danger mx-2 rounded-pill"
          >
            Danger
          </button>
        </li>
      ))}
    </ul>
  );
}

// export default ReminderList;
