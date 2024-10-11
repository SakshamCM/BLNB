let mongoose = require("mongoose");
let pilotProgramSchema = mongoose.Schema(
  {
    pilotProgramHeading: {
      type: String,
      default: "Canada’s Pilot Programs",
    },
    pilotProgramPara1: {
      type: String,
      default:
        "The diverse economy of Canada offers various opportunities to advance your career in fields such as agriculture and more.",
    },
    pilotProgramPara2: {
        type: String,
        default:
          "Canada's Pilot Programs are temporary immigration programs designed to address the specific needs of certain Canadian regions or communities. These programs aim to attract skilled, semi-skilled, and unskilled workers to fill labor shortages in various sectors and contribute to the economic growth and development of those areas. Many times, these programs become permanent, providing more PR opportunities.",
      },

    //
    HereHeading: {
        type: String,
        default: "Here is one of the Pilot Programs",
      },
//
    WhyChooseUsHeading: {
        type: String,
        default: "Why Choose Us",
      },
      wc: {
        type: String,
        default:
          "At Brightlight Immigration, we provide expert guidance through Canada’s various immigration programs, including Pilot Programs. Our team of experienced consultants is dedicated to helping you navigate the complexities of immigration, ensuring that you have the best chance of success. We tailor our services to meet your unique needs and provide a high level of personalized support throughout the application process.",
      },
      wc: {
        type: String,
        default: "Our success rate speaks for itself, with a near-perfect approval rate for our clients. By choosing us, you benefit from our extensive knowledge, commitment to your case, and proven track record. Let us help you make your Canadian immigration journey a smooth and successful one.",
      },
  },
  {
    timeStamps: true,
  }
);

let pilotProgramSection = mongoose.model(
  "Canada’s Pilot Program",
  pilotProgramSchema
);
module.exports = pilotProgramSection;
