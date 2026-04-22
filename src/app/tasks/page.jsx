import { AddTask } from "@/components/AddTask";
import TasksCard from "@/components/TasksCard";
import { CreateATask } from "@/lib/actions";
import { getTasks } from "@/lib/task";
import React from "react";

const TasksPage = async () => {
  const tasks = await getTasks();
  return (
    <div className="max-w-6xl mx-auto py-10">
      <AddTask createATask={CreateATask} />
      <div className=" pt-8 mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
