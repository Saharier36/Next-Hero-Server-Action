'use client'
import { addNewTask } from "@/lib/actions";
import {
  Input,
  Label,
  ListBox,
  TextField,
  Select,
  Button,
  Form,
  FieldError,
} from "@heroui/react";

const NewTask = () => {
  return (
    <div>
      <div className="w-1/2 mx-auto space-y-4 border-2 border-primary p-6 rounded-lg mt-10">
        <h2 className="text-3xl mt-5">Create a New Task</h2>
        <Form action={addNewTask} className="flex flex-col gap-4">
          <TextField
            isRequired
            minLength={8}
            validate={(value) => {
              if (value.length < 8) {
                return "Title must be at least 8 characters or longer";
              }
            }}
            className="w-full"
            name="title"
            type="text"
          >
            <Label>Title</Label>
            <Input placeholder="Enter your task title" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            className="w-full"
            name="description"
            type="text"
          >
            <Label>Description</Label>
            <Input placeholder="Enter your task description" />
          </TextField>
          <Select
            name="priority"
            className="w-[256px]"
            placeholder="Select one"
          >
            <Label>Priority</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="low" textValue="low">
                  Low
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="medium" textValue="medium">
                  Medium
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="high" textValue="high">
                  High
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <Select name="status" className="w-[256px]" placeholder="Select one">
            <Label>Status</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="pending" textValue="pending">
                  Pending
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="in-progress" textValue="in-progress">
                  In-progress
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="done" textValue="done">
                  one
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <TextField className="w-full" name="assignedTo">
            <Label>Assigned To</Label>
            <Input placeholder="Task Assigned To" />
          </TextField>
          <div className="flex justify-end gap-4 mt-4">
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button slot="close" type="submit">
              Submit Task
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NewTask;
