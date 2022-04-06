const hallBookDetailsdb = require('../Model/hallsBooking');

// Book Hall

exports.bookHall = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: 'Please Complete All Information' });
    return;
  }
  const hallBooking = new hallBookDetailsdb({
    Data: req.body.Data,
    Time: req.body.Time,
    GuestsQuantity: req.body.GuestsQuantity,
    EventPlaner: req.body.EventPlaner,
    CateringServices: req.body.CateringServices,
    TotalPaynment: req.body.TotalPaynment,
    userId: req.body.userId,
  });
  hallBooking
    .save(hallBooking)
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      res.status(400).send({ data: err });
    });
};
