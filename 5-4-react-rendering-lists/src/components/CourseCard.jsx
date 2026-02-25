// src/components/CourseCard.jsx
import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {

  /* ==============================
     TASK 4 — Toggle task
  ============================== */
  function toggleTask(id) {
    onMutateCourse(index, (tasks) =>
      tasks.map((t) =>
        t.id === id ? { ...t, isDone: !t.isDone } : t
      )
    );
  }

  /* ==============================
     TASK 4 — Delete task
  ============================== */
  function deleteTask(id) {
    onMutateCourse(index, (tasks) =>
      tasks.filter((t) => t.id !== id)
    );
  }

  /* ==============================
     TASK 3 helpers
  ============================== */
  const hasTasks = course.tasks.length > 0;
  const allDone = hasTasks && course.tasks.every(t => t.isDone);

  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>

        {/* TASK 3 — All caught up badge */}
        {allDone && <span className="badge ok">All caught up</span>}
      </header>

      <section className="tasksSection">

        {/* TASK 3 — show when no tasks */}
        {course.tasks.length === 0 && (
          <p className="muted">No tasks yet.</p>
        )}

        {/* TASK 2 — render tasks */}
        <ul className="tasks">
          {course.tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>

      </section>
    </article>
  );
}