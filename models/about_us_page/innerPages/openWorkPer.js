let mongoose = require("mongoose");
let openWorkPermitSchema = mongoose.Schema(
  {
    openWorkPermitHeading: {
      type: String,
      default: "Open Work Permit",
    },

    WhatIsPara : {
        type: String,
        default:"A Canadian Open Work Permit is a temporary document that allows foreign nationals to work in Canada without being tied to a specific employer. This type of permit offers flexibility and opens up a wide range of job opportunities for eligible individuals.",
      },

      CategoriesHeading : {
      type: String,
      default:"Categories Under Open Work Permit",
    },


    HowWeHelpHeading: {
      type: String,
      default:"Here’s How We Can Help You",
    },
    HowWeHelpSubHeading: {
        type: String,
        default:"Our process is designed to assist you from start to finish, ensuring you have the support you need to obtain your Open Work Permit. We follow a structured approach that includes:",
      },
    hh1: {
      type: String,
      default:"Initial Consultation: Understanding your needs and eligibility.",
    },
    hh2: {
        type: String,
        default:"Document Preparation: Assisting with gathering and preparing necessary documents.",
      },
      hh3: {
        type: String,
        default:"Application Submission: Filing your application accurately and on time.",
      },
      hh4: {
        type: String,
        default:"Follow-Up: Monitoring the progress of your application and addressing any issues.",
      },
      hh5: {
        type: String,
        default:"Support Throughout: Providing guidance and support throughout the entire process.",
      },

  },
  {
    timeStamps: true,
  }
);

let openWorkPermitSection = mongoose.model(
  "Open Work Permit Section ",
  openWorkPermitSchema
);
module.exports = openWorkPermitSection;
