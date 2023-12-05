import { Schema, model } from "mongoose"; 

const UserSchema = new Schema({
  nome: String,
  email: String,
  cpf: Number,
});

export default model('Usuario',UserSchema);
