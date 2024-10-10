let mongoose = require("mongoose");
let temporaryResidencySchema = mongoose.Schema(
  {
    temporaryResidencyHeading: {
      type: String,
      default: "Temporary Residency",
    },
    temporaryResidencyPara1: {
      type: String,
      default:
        "Temporary residency in Canada is a status granted by Canadian immigration officers to foreign nationals, permitting them to reside there for a limited period. Individuals who enter Canada on a temporary residency basis legally and for various purposes, including visiting relatives, joining a family member who holds permanent residency, working, or starting a business.",
    },
    temporaryResidencyPara2: {
        type: String,
        default:
          "When granted temporary residency status, foreign nationals become temporary residents of Canada. This status differs from permanent residency, Pr Renewal which allows individuals to stay in Canada indefinitely.",
      },
      temporaryResidencyPara3: {
        type: String,
        default:
          "Canada warmly welcomes visitors, workers, and entrepreneurs from across the globe. This option might be perfect for you if you're considering a temporary stay in Canada.",
      },
////

VisaCategHeading: {
    type: String,
    default: "Visa Categories under Temporary Residency",
  },


  ////
  /////

      WhyChooseUsHeading: {
        type: String,
        default: "Why Choose Us?",
      },
      WhyChooseUsPara: {
        type: String,
        default:
          "At Brightlight Immigration, we are committed to providing you with expert assistance throughout your immigration journey. Our experienced team is dedicated to achieving the best possible outcomes for our clients.",
      },
  },
  {
    timeStamps: true,
  }
);

let temporaryResidencySection = mongoose.model(
  "Temporary Residency program",
  temporaryResidencySchema
);
module.exports = temporaryResidencySection;
