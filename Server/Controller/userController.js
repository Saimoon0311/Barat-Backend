const bcrypt = require("bcrypt");
const userdb = require('../Model/UserModal');


exports.UserSignUp =(req,res)=>{
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
      })
      CreateUser
      .save(CreateUser)
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((err) => {
        res.status(400).send({ data: err });
      });
}