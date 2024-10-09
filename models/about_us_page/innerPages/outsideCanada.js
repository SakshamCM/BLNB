let mongoose = require("mongoose");
let outsideCanadaSchema = mongoose.Schema(
  {
    outsideCanadaHeading: {
      type: String,
      default: "Student Visa: Outside Canada",
    },
    outsideCanadatPara1: {
      type: String,
      default:
        "Your Study Permit from Outside Canada",
    },
    outsideCanadatPara2: {
        type: String,
        default:
          "So, you've set your sights on pursuing higher education in the vibrant and diverse world of Canada, where you'll be surrounded by fellow students from all corners of the globe, your mind buzzing with intellectual discussions and creative endeavors. Read on then.",
      },
      outsideCanadatPara3: {
        type: String,
        default:
          "Studying in Canada is an excellent option for international students seeking quality education and a vibrant cultural experience. To pursue studies in Canada, you will require a valid study permit. This permit will allow you to legally live and study in the country while attending a designated learning institution (DLI).",
      },


    //

    TwoMainHeading: {
      type: String,
      default: "Two Main Programs to Consider",
    },

    
    WhyChooseUsHeading: {
      type: String,
      default: "Why Choose Us",
    },
    WhyChooseUsPara: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of experts ready to assist you through every step of your study permit application process. Our extensive experience and success rate ensure that your application is handled with the utmost care and professionalism. Whether you are applying under the Student Direct Stream or the Non-Student Direct Stream, we provide personalized services to meet your unique needs.",
    },

  },
  {
    timeStamps: true,
  }
);

let outsideCanadaSection = mongoose.model(
  "Student Visa: Outside Canada progam",
  outsideCanadaSchema
);
module.exports = outsideCanadaSection;
