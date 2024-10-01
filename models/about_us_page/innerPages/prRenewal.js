let mongoose = require("mongoose");
let prRenewalSchema = mongoose.Schema(
  {
    EligibleHeading: {
      type: String,
    },
    e1: {
      type: String,
    },
    e2: {
      type: String,
    },
    e3: {
        type: String
    },
    e4: {
      type: String,
    },
    e5: {
        type: String,
      },
    HowApplyHeading: {
      type: String,
    },
    HowApplyPara: {
      type: String,
    },
    RefusalHeading: {
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
    BookAppHeading: {
      type: String,
    },
    BookAppPara: {
      type: String,
    },

  },
  {
    timeStamps: true,
  }
);

let prRenewalSection = mongoose.model(
  "Pr Renewal Section",
  prRenewalSchema
);
module.exports = prRenewalSection;
