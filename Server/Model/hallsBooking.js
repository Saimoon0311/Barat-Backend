const mongoose = require("mongoose");

const schema = mongoose.Schema;

const hallBookingSchema = new schema(
  {
    Date: {
      type: String,
      required: true,
    },
    GuestsQuantity: {
      type: Number,
      required: true,
    },
    EventPlaner: {
      type: Boolean,
      required: true,
      default: false,
    },
    CateringServices: {
      type: Boolean,
      required: true,
      default: false,
    },
    TotalPaynment: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const hallsBookdb = mongoose.model("hallsBookdb", hallBookingSchema);
module.exports = hallsBookdb;
