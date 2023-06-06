import jwt from 'jsonwebtoken'
const tfdsfu_lfz = process.env.SECRET_KEY

const generateToken = (userId, name, email) => {
    const payload = {
      userId: userId,
      name:name,
      email:email
    };
    const options = {
      expiresIn: '1h'
    };
    const token = jwt.sign(payload, tfdsfu_lfz, options);
    return token;
};
 


const verifyToken = (req, res, next) => {

  const token = req.session.token
  
  if (!token) {
    return res.status(401).json({ message: 'Token non fourni' });
  }

  try {
    const decoded = jwt.verify(token, tfdsfu_lfz);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token invalide' });
  }
  console.log("Token Conforme")
};


export { generateToken, verifyToken};