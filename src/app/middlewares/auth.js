import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) =>{
  const authHeader = req.header.authorization;

  if(!authHeader){
    return res.status(401).json({ erro: 'Token inexistente.'});
  }

const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

  }catch(erro){
    return res.status(401).json({ erro: 'Token invalido.'});
  }

  return next();
};