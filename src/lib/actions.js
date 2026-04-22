"use server";
import { revalidatePath } from "next/cache";
import { postTasks } from "./task";
import { redirect } from "next/navigation";

export const CreateATask = async (formData) => {
  "use server";
  // const title = formData.get('title');
  // const description = formData.get('description');
  // const priority = formData.get('priority');
  // const status = formData.get('status');
  // const assignedTo = formData.get('assignedTo');

  // const newTask = { title, description, priority, status, assignedTo };

  const newTask = Object.fromEntries(formData.entries());

  console.log("Adding a task with title", newTask);

  const res = await postTasks(newTask);
  if (res.success) {
    revalidatePath("/tasks");
  }
  return res;
};

export const addNewTask = async (formData) => {
  const newTask = Object.fromEntries(formData.entries());
  console.log("Adding a task with name:", newTask);

  const res = await postTasks(newTask);
  if (res.success) {
    revalidatePath("/tasks");
    redirect("/tasks");
  }
  return res;
};
