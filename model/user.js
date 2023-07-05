import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  avatar: String,
  email: String,
  salary: Number,
  date: String,
  status: String,
});

const Users = models.user || model("user", userSchema);
console.log(Users, "------users modell");

export default Users;
