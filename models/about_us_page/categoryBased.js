let mongoose = require("mongoose");
let categoryBasedSchema = mongoose.Schema(
  {
    heading: {
      type: String,
    },
    description: {
      type: String,
    },
    aboutHeading: {
      type: String,
    },
    aboutDescription: {
      type: String,
    },
    aboutImage: {
      type: String,
    },
    drawsHeading: {
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
    draw4: {
      type: String,
    },
    draw5: {
      type: String,
    },
    draw6: {
      type: String,
    },
    draw7: {
      type: String,
    },
    draw8: {
      type: String,
    },
    workHeading: {
      type: String,
    },
    workDescription: {
      type: String,
    },
    eligibilityHeading: {
      type: String,
    },
    eligibilitySubHeading: {
      type: String,
    },
    eligibilityDescription: {
      type: String,
    },
    e1: {
      type: String,
    },
    e2: {
      type: String,
    },
    e3: {
      type: String,
    },
    e4: {
      type: String,
    },
    benefitsHeading: {
      type: String,
    },
    b1: {
      type: String,
    },
    b2: {
      type: String,
    },
    b3: {
      type: String,
    },
    b4: {
      type: String,
    },
    applyHeading: {
      type: String,
    },
    applyDescription: {
      type: String,
    },
    a1: {
      type: String,
    },
    a1l: {
      type: String,
    },
    a2: {
      type: String,
    },
    a2l: {
      type: String,
    },
    a3: {
      type: String,
    },
    a3l: {
      type: String,
    },
    a4: {
      type: String,
    },
    a4l: {
      type: String,
    },
    a5: {
      type: String,
    },
    a5l: {
      type: String,
    },
    a6: {
      type: String,
    },
    a6l: {
      type: String,
    },
    refusalHeading: {
      type: String,
    },
    refusalDescription: {
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
    drawHeadingBottom: {
      type: String,
    },
    drawHeadingLink: {
      type: String,
    },
    bookHeading: {
      type: String,
    },
    bookSubHeading: {
      type: String,
    },
    bookDescription: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let categoryBasedSchemaSection = mongoose.model(
  "Category Based Draws",
  categoryBasedSchema
);
module.exports = categoryBasedSchemaSection;
