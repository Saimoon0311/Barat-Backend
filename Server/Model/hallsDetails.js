const mongoose = require("mongoose");

const schema = mongoose.Schema;

const hallsDetailsSchema = new schema(
  {
    images: {
      type: Array,
    },
    OwnerName: {
      type: String,
      required: true,
    },
    hallName: {
      type: String,
      require: true,
    },
    OxweContact: {
      type: Number,
      required: true,
    },
    OwnerEmail: {
      type: String,
    },
    HallAddress: {
      type: String,
      required: true,
    },
    HallCapacity: {
      type: Number,
      required: true,
    },
    PricePerHead: {
      type: Number,
      required: true,
    },
    CateringPerHead: {
      type: Number,
    },
    EventPlanner: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const hallsDetailsSchemadb = mongoose.model(
  "hallsDetailsSchemadb",
  hallsDetailsSchema
);
module.exports = hallsDetailsSchemadb;
