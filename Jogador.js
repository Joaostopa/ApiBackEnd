import { Schema, model } from "mongoose"; 

const JogadorSchema = new Schema({
  nome: String,
  idade: Number,
  altura: Number,
  peso: Number,
  numerocamisa: Number,
  lesao: String,
  posicao: String,
});

export default model('Jogador',UserSchema);
