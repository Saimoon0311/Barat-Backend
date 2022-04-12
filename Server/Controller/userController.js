const bcrypt = require('bcrypt');
const userdb = require('../Model/UserModal');

exports.UserSignUp = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: 'Please Complete All Information' });
    return;
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const CreateUser = userdb({
    UserName: req.body.UserName,
    FullName: req.body.UserEmail,
    password: hashedPassword,
    UserEmail: req.body.UserEmail,
    phoneNumber: req.body.phoneNumber,
  });
  CreateUser.save(CreateUser)
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      res.status(400).send({ data: err });
    });
};
exports.LoginUser = async (req, res) => {
  try {
    const user = await userdb.findOne({ UserName: req.body.UserName });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, data: 'User Name not found!' });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({ success: false, data: 'wrong password!' });
    }
    res.status(200).send({ data: user });
  } catch (err) {
    res.status(400).send({ data: err });
  }
};
