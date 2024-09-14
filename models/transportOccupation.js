let mongoose = require("mongoose");
let transportOccupationSchema = mongoose.Schema(
  {
    heading: {
      type: String,
    },
    subHeading: {
      type: String,
    },
    description: {
      type: String,
    },
    eligibleHeading: {
      type: String,
    },
    eligibleDescription: {
      type: String,
    },
    eh1: {
      type: String,
    },
    ed1: {
      type: String,
    },
    eh2: {
      type: String,
    },
    ed2: {
      type: String,
    },
    eh3: {
      type: String,
    },
    ed3: {
      type: String,
    },
    chooseHeading: {
      type: String,
    },
    chooseDescription: {
      type: String,
    },
    ch1: {
      type: String,
    },
    cd1: {
      type: String,
    },
    cl1: {
      type: String,
    },
    ch2: {
      type: String,
    },
    cd2: {
      type: String,
    },
    cl2: {
      type: String,
    },
    ch3: {
      type: String,
    },
    cd3: {
      type: String,
    },
    cl3: {
      type: String,
    },
    chooseEnding: {
      type: String,
    },
    criteriaHeading: {
      type: String,
    },
    criteriaDescription: {
      type: String,
    },
    criteriaPoint1: {
      type: String,
    },
    criteriaPoint2: {
      type: String,
    },
    criteriaPoint3: {
      type: String,
    },
    criteriaPoint4: {
      type: String,
    },
    criteriaPoint5: {
      type: String,
    },
    drawHeading: {
      type: String,
    },
    drawDescription: {
      type: String,
    },
    contactHeading: {
      type: String,
    },
    contactDescription1: {
      type: String,
    },
    contactDescription2: {
      type: String,
    },
    appointmentLinkName: {
      type: String,
    },
    appointmentLink: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let transportOccupationSection = mongoose.model(
  "Transport Occupation Section",
  transportOccupationSchema
);
module.exports = transportOccupationSection;
