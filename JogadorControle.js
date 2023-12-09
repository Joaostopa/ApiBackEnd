import Jogador from "../models/Jogador";
import Usuario from "../models/Usuario";

class JogadorControle{

  async index(req,res){
    const { numerocamisa } = req.query;

    const jogadores =await Jogador.find({ numerocamisa });

    return res.json(jogadores);
  }

  async store(req, res){
    console.log(req.body);
    const { nome, idade, altura, peso, numerocamisa, lesao, descricao} = req.body;
    const { user_id } = req.headers; 

    const jogadores = await Jogador.create({
      usuario: user_id,
      nome,
      idade,
      peso,
      numerocamisa,
      lesao,
      descricao,
    });



    return res.json({jogadores});

  }

  async update(req, res){
    const {jogador_id} = req.parms;
    const { nome, idade, altura, peso, numerocamisa, lesao, descricao} = req.body;
    const { user_id } = req.headers; 


    const usuario = await Usuario.findById(user_id);
    const jogadores = await Jogador.findById(jogador_id);
    
    if(String(user._id) !== String(jogadores.usuario)){
      return res.status(401).json({ erro: 'Não autorizado.'});
    }

    const jogador = await Jogador.updateOne({_id: jogador_id },{
      usuario: user_id,
      nome,
      idade,
      peso,
      numerocamisa,
      lesao,
      descricao,
    });

    return res.send();
  }

  async destroy(req,res){

    const {jogador_id} = req.body;
    const {user_id} = req.header;

    await Jogador.findByIdAndDelete({_id: jogador_id})

    return res.json({mensagem: "Jogador excluido."});
  }
}
export default new JogadorControle();
