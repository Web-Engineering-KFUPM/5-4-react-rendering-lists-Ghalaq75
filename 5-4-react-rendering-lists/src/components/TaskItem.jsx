// src/components/TaskItem.jsx
import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task">
      <label className="taskMain">
        {/* TASK 4 */}
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onToggle(task.id)}
        />

        {/* TASK 3 */}
        {!task.isDone && <DueBadge dueDate={task.dueDate} />}

        {/* TASK 2 */}
        <span className="title">{task.title}</span>
      </label>

      {/* TASK 4 */}
      <button
        className="ghost"
        aria-label="Delete task"
        onClick={() => onDelete(task.id)}
        type="button"
      >
        ✕
      </button>
    </li>
  );
}