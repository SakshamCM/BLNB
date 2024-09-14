let mongoose = require("mongoose");
let permanentResidencySchema = mongoose.Schema(
  {
    heading: {
      type: String,
    },
    description: {
      type: String,
    },
    aboutDescription: {
      type: String,
    },
    extraHeading: {
      type: String,
    },
    aboutImage: {
      type: String,
    },
    pathHeading: {
      type: String,
    },
    pathDescription: {
      type: String,
    },
    p1SVG: {
      type: String,
    },
    p1Heading: {
      type: String,
    },
    p2SVG: {
      type: String,
    },
    p2Heading: {
      type: String,
    },
    p3SVG: {
      type: String,
    },
    p3Heading: {
      type: String,
    },
    p4SVG: {
      type: String,
    },
    p4Heading: {
      type: String,
    },
    p5SVG: {
      type: String,
    },
    p5Heading: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let permanentResidencySection = mongoose.model(
  "Permanent Residency Section",
  permanentResidencySchema
);
module.exports = permanentResidencySection;
