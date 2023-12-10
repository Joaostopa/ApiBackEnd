import User from '../models/User';

class UserControle{
  async store(req, res){

    const userExists = await User.findOne({
      where: { email: req.body.email}
    })

    if(userExists){
      return res.status(400).json({ error: 'Usuario já existente'});
    }

    const {id, name, email} = await User.create(req.body);

    return res.json({ 
      id,
      name,
      email,
    });
  }

  async update(req, res){

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if(email !== user.email){
      const userExists = await User.findOne({
        where: { email }
      })
  
      if(userExists){
        return res.status(400).json({ error: 'Usuario já existente.'});
      }
    }

    if(oldPassword && !(await user.checkPassword(oldPassword))){
      return res.status(401).json({ error: 'Senha inexistente.'});
    }

    const {id, name} = await user.update(req.bod);

    return res.json({ 
      id,
      name,
      email,
    });

  }
}

export default new UserControle();