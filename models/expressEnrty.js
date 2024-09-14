let mongoose = require("mongoose");
let expressEntrySchema = mongoose.Schema(
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
        type: String
    },
    aboutImage: {
      type: String,
    },
    eligibilityHeading: {
      type: String,
    },
    eligibilityDescription: {
      type: String,
    },
    er1: {
      type: String,
    },
    er2: {
      type: String,
    },
    er3: {
      type: String,
    },
    drawHeading: {
      type: String,
    },
    drawDescription: {
      type: String,
    },
    draw1: {
      type: String,
    },
    draw2: {
      type: String,
    },
    draw3: {
      type: String,
    },
    advantageHeading: {
      type: String,
    },
    advantageDescription: {
      type: String,
    },
    a1: {
      type: String,
    },
    a2: {
      type: String,
    },
    a3: {
      type: String,
    },
    a4: {
      type: String,
    },
    a5: {
      type: String,
    },
    a6: {
      type: String,
    },
    refusalHeading: {
      type: String,
    },
    r1: {
      type: String,
    },
    r2: {
      type: String,
    },
    r3: {
      type: String,
    },
    r4: {
      type: String,
    },
    r5: {
      type: String,
    },
    r6: {
      type: String,
    },
    r7: {
      type: String,
    },
    r8: {
      type: String,
    },
    appointmentHeading: {
      type: String,
    },
    appointmentDescription: {
      type: String,
    },
    appointmentLink: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let expressEntrySection = mongoose.model(
  "Express Entry Section",
  expressEntrySchema
);
module.exports = expressEntrySection;
