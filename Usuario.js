import { Schema, model } from "mongoose"; 

const UserSchema = new Schema({
  nome: String,
  senha: String,
});

export default model('Usuario',UserSchema);
