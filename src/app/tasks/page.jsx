import TasksCard from "@/components/TasksCard";
import { getTasks } from "@/lib/task";
import React from "react";

const TasksPage = async () => {
  const tasks = await getTasks();
  return (
    <div>
      <div className="max-w-6xl py-10 mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
