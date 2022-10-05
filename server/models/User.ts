import { Schema, model, connect } from "mongoose";

export interface Task {
  title: string;
  content: string;
  date: string;
  time: string;
}

export interface List {
  title: string;
  listItems: { id: string; content: string }[];
}

interface IUser {
  username: string;
  tasks: Task[];
  lists: List[];
}

const userSchema = new Schema<IUser>({
  username: { type: String, require: true },
  tasks: [
    {
      title: String,
      content: String,
      date: String,
      time: String,
    },
  ],
  lists: [
    {
      title: String,
      listItems: [{ id: String, content: String }],
    },
  ],
});
const User = model<IUser>("User", userSchema);

export default User;
