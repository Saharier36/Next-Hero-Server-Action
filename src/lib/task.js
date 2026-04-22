import tasks from "@/data/tasks.json";
export const getTasks = async () => {
  return tasks.tasks;
};
export const postTasks = async (newTask) => {
  newTask.id = tasks.tasks.length + 1;
  tasks.tasks.push(newTask);
  return { success: true, message: "Task added successfully" };
}
