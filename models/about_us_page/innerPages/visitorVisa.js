let mongoose = require("mongoose");
let visitorVisaSchema = mongoose.Schema(
  {
    visitorVisaHeading: {
      type: String,
      default: "Visitor Visa",
    },
    visitorVisaPara: {
      type: String,
      default:
        "A Visitor Visa, also known as a Temporary Resident Visa (TRV), allows people from other countries to visit Canada for a short period. Are you planning to visit Canada and need to apply for a Visitor Visa? There are several different options through which you can apply for a Visitor Visa, each with its own specific requirements. You can visit Canada for various purposes, all of which are generally covered by the Visitor Visa umbrella. For some visa-exempt countries, a simple Electronic Travel Authorisation (eTA) application can be submitted. However, if you're from a country that requires a visa, you'll need to obtain authorization to enter and stay in Canada for a specific period, which is a Temporary Resident Visa, also commonly known as Visitor Visa.",
    },

    ChooseApplHeading: {
        type: String,
        default: "Choose Your Application of Interest:",
      },
////

EligibilityHeading: {
    type: String,
    default: "Eligibility Criteria",
  },
  EligibilityPara: {
    type: String,
    default: "To obtain a visitor visa, you must meet essential requirements, which may vary depending on your individual circumstances and country of citizenship and residence.",
  },
  EligLiHead: {
    type: String,
    default: "Essential requirements include:",
  },
  e1: {
    type: String,
    default: "A passport that is valid for 6 months or more",
  },
  e2: {
    type: String,
    default: "No criminal or immigration-related convictions",
  },
  e3: {
    type: String,
    default: "Proof of strong ties to your home country",
  },
  e4: {
    type: String,
    default: "Proof of your intention to leave Canada at the end of your visit",
  },
  e5: {
    type: String,
    default: "Proof that you have enough funds to cover your stay",
  },
  e6: {
    type: String,
    default: "The amount of money you will need depends on the purpose of your visit, how long you plan to stay, and whether you will stay in a hotel or with friends or relatives.",
  },
  ///
  ////
  /////
  HowApplyHeading: {
      type: String,
      default: "How to Apply for a Visitor Visa",
    },
    HowApplyPara: {
        type: String,
        default: "To start the process of obtaining a Canadian visitor visa, you, as the applicant, must follow a series of steps and complete specific requirements, as outlined below:",
      },

      ha1: {
        type: String,
        default: "Assess your eligibility for a Canadian visitor visa.",
      },      
      ha2: {
        type: String,
        default: "Gather the necessary documents and complete the required application forms.",
      },      
      ha3: {
        type: String,
        default: "Submit your Canadian visitor visa application in accordance with IRCC guidelines and our recommendations.",
      },      
      ha4: {
        type: String,
        default: "Wait for the processing of your application and respond promptly to any additional inquiries from the authorities (if any).",
      },      
      ha5: {
        type: String,
        default: "Send your passport for the stamping of your Temporary Resident Visa (TRV).",
      },      

//
TourismVisaHeading: {
    type: String,
    default: "Tourism Visa",
 },
 TourismVisaPara: {
    type: String,
    default: "Canadian immigration allows you to visit Canada for tourism purposes and explore various tourist destinations, which are world-renowned. To apply for a visitor visa for tourism purposes, you don’t need an invitation from a Canadian citizen, permanent resident, or Canadian business. However, you must satisfy Immigration, Refugees and Citizenship Canada (IRCC) that you have sufficient funds to support your trip to Canada. If dependents are accompanying you, you’ll need to provide additional proof of funds. Furthermore, you’ll need to provide convincing reasons why you will return to your home country or country of residence after your trip is completed.",
 },

//
EmergencyVisaHeading: {
    type: String,
    default: "Emergency Visa",
 },
 EmergencyVisaPara: {
    type: String,
    default: "Canada Immigration allows for the application of an emergency visa in situations that necessitate an immediate visit to Canada. This could be due to unexpected circumstances such as emergency medical care, sudden illness, to be present during the final moments of life, end-of-life care, or the death or funeral of a family member, close relative, or friend who is residing in Canada.",
 },

////
 RefusalHeading: {
     type: String,
     default: "Common Reasons for Refusals of Visitor Visa",
  },

  RefusalSubHead: {
    type: String,
    default: "When applying for a visitor visa, visa officers often look for signs that you'll return home after your trip. They want to be sure you have the means to support yourself financially and strong reasons to stay put. Here’s how to increase your chances of approval:",
},

r1: {
    type: String,
    default: "Prove that you can afford your trip. Address any concerns about your financial ability to cover your expenses. Show your bank statements, employment contracts, or pay stubs to demonstrate a steady income, etc.",
},

r2: {
    type: String,
    default: "Highlight your attachment to home. Visa officers want to see why you're not eager to abandon your home life. Showcase your commitments to your home country.",
},
r3: {
    type: String,
    default: "Clearly express your visit's purpose and explain in detail the reason for your visit, whether it's business, tourism, medical treatment, etc.",
},
r4: {
    type: String,
    default: "Showcase your travel experience and that you intend to return home.",
},

//
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case laws and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
      },
      s2: {
        type: String,
        default:
          "We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in the cases we work on. This is why we have a high success rate.At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
      },
      //
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

let visitorVisaSection = mongoose.model(
  "Visitor Visa program",
  visitorVisaSchema
);
module.exports = visitorVisaSection;
