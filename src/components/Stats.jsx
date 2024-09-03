export const Stats = ({ totalTasks = 0, completedTasks = 0, unstartedTasks = 0, inProgressTasks = 0 }) => {
    return (
      <div className="stats">
        <h2>Task Statistics</h2>
        <p>Completed: {completedTasks}/{totalTasks}</p>
        <p>In Progress: {inProgressTasks}/{totalTasks}</p>
        <p>Unstarted: {unstartedTasks}/{totalTasks}</p>
      </div>
    );
 }
  