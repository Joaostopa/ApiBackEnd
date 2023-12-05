import User from '../models/Usuario';

class AcessoControle{
  async store(req,res){
    const { nome } = req.body;

      let user = await User.create({ nome });

      return res.json(user);
  }
}

export default new AcessoControle();