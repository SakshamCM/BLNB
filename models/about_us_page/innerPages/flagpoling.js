let mongoose = require("mongoose");
let flagpolingSchema = mongoose.Schema(
  {
    flagpolingHeading: {
      type: String,
      default: "Flagpoling",
    },
    flagpolingPara1: {
      type: String,
      default:
        "Flagpoling is a legal process of exiting Canada and re-entering the country without physically crossing into the USA to obtain, change, or extend a valid status in Canada. It is commonly used to obtain a new temporary residence status, such as renewing a study permit, applying for a work permit, or finalizing the permanent residency (PR) process.",
    },
    flagpolingPara2: {
        type: String,
        default:
          "Typically, temporary resident visa holders have the option to apply through online or paper applications. However, these applications can take weeks or even months to process. Therefore, sometimes people choose to save time by going to the port of entry (aka border). This allows for quick processing, which can be helpful for people who need their application processed quickly.",
      },
  
//


BenifitHeading: {
    type: String,
    default: "Benefits of Flagpoling",
  },
  
b1: {
  type: String,
  default: "Flagpoling is a time-saving alternative to applying for a work or study permit through online or paper applications, where processing times can take weeks or even months or longer than what is mentioned on the IRCC website.",
},
b2: {
  type: String,
  default: "You do not need to gather extensive documentation, complete complex and lengthy forms, etc. Instead, candidates can present their passport and supporting documents directly to a Canada Border Services Agency (CBSA) officer, attend the interview, and obtain the new permit on the spot.",
},
b3: {
    type: String,
    default: "Many times, CBSA officers follow a more humane approach than IRCC officers and consider humanitarian and compassionate grounds in approving the application.",
  },
///


EligibilityHeading: {
    type: String,
    default: "Eligibility Criteria for Flagpoling",
  },
  EligibilitySubHead: {
    type: String,
    default: "The eligibility criteria for flagpoling are as follows:",
  },
e1: {
  type: String,
  default: "You must be currently holding a valid visitor, study, or work permit.",
},
e2: {
  type: String,
  default: "If your current status has expired, you must have applied for an extension online and have proof of application submission and receipt.",
},
e3: {
    type: String,
    default: "Do not attempt flagpoling if you are out of status or have applied for restoration of status.",
  },
  e4: {
    type: String,
    default: "You meet the requirements of the new permit that you are requesting as per IRCC guidelines.",
  },
  e5: {
    type: String,
    default: "It is recommended that you carry original documents with you at the time when the CBSA officer interviews you.",
  },
  //
  DoNotForgetHeading: {
      type: String,
      default: "Don’t Forget This Important Tip",
    },
    DoNotForgetSubHead: {
        type: String,
        default: "While flagpoling can be a helpful tool when used under the right circumstances, it's important to approach it with careful preparation and the right documentation. We strongly advocate for thorough preparation to maximize the benefits of this process. However, it's crucial to remember that flagpoling also comes with inherent risks. Potential denial of entry at both US and Canadian borders could lead to forced removal from Canada back to your home country. Additionally, flagpoling typically involves a detailed interview with a US immigration officer or CBSA border officer.",
      },

   
//
  
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "To avoid these risks and ensure a smooth flagpoling experience, we highly recommend hiring representation from a Regulated Canadian Immigration Consultant (RCIC). An RCIC can not only guide you on the necessary documents for flagpoling but also effectively prepare you for the Port of Entry and border interviews conducted by immigration officers.",
      },
      s2: {
        type: String,
        default:
          "Brightlight Immigration is available to represent you at any Point of Entry in the Lower Mainland, British Columbia. Our experienced consultants will ensure you have the necessary documentation, provide tailored guidance, and assist you in effectively communicating your case to immigration officers.",
      },
      //
      WhyChooseUsHeading: {
        type: String,
        default: "Why Choose Us?",
      },
      WhyChooseUsPara: {
        type: String,
        default:
          "We offer personalized service and expert advice to ensure your application stands the best chance of approval. Our dedicated team of professionals will guide you through every step of the process, addressing all your concerns and providing you with peace of mind.",
      },
  },
  {
    timeStamps: true,
  }
);

let flagpolingSection = mongoose.model(
  "Flagpoling program",
  flagpolingSchema
);
module.exports = flagpolingSection;
