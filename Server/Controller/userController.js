const bcrypt = require('bcrypt');
const userdb = require('../Model/UserModal');
const express = require('express');
const app = express();
const SECRET_KEY =
  'sk_test_51LI9HwEE1bl5YY9CFNAbViwRWdJffMxWTiwbkGsqxToWS27sYHwGxopht0RmYTVF3gSe19k10qEYBuKr2ZNRwUWT00IUl0ZBqo';
// 'sk_test_51JzIR5EyPVCLsOYzX6JdaoGzwDsLLuUuzVqfZGATJEz1pppFLebzrmcEyvPK1BWPZO6L3g9KVlNobhZD2w93lFLz00Q6xtyEJ1';
const Stripe = require('stripe');
//Confirm the API version from your stripe dashboard
const stripe = Stripe(SECRET_KEY, { apiVersion: '2020-08-27' });
// Register User

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
    userRoll: req.body.userRoll,
  });
  CreateUser.save(CreateUser)
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      res.status(400).send({ data: err });
    });
};

// Login User

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

//  Get Hall Owner Details

exports.getHallOwner = async (req, res) => {
  const userRoll = req.params.userRoll;
  if (userRoll == '2') {
    userdb
      .find({ userRoll: userRoll })
      .then((data) => {
        if (!data) {
          res.status(200).send({ data: data });
        } else {
          res.status(200).send({ data: 'Hall Owner Not found' });
        }
      })
      .catch((err) => {
        res.status(400).send({ data: err });
      });
  } else {
    userdb
      .find()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((err) => {
        res.status(400).send({ data: err });
      });
  }
};

exports.StripePayIntent = async (req, res) => {
  const paynmentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: 'usd',
    payment_method_types: ['card'],
  });
  res.json(paynmentIntent);
};

exports.SocketIo = async (req, res) => {};
