let mongoose = require("mongoose");
let temporaryResidentPermSchema = mongoose.Schema(
  {
    temporaryResidentPermrHeading: {
      type: String,
      default: "Temporary Resident Permit (TRP)",
    },
    temporaryResidentPermPara: {
      type: String,
      default:
        "It is a legal document issued by Citizenship and Immigration Canada (CIC) that allows individuals who are inadmissible to Canada to temporarily visit and stay in the country under very specific circumstances.",
    },


////

EligibilityHeading: {
    type: String,
    default: "Eligibility Criteria for Temporary Resident Permit",
  },
  EligibilityPara: {
    type: String,
    default: "The TRP is only granted when the individual's reasons for visiting Canada are compelling enough to outweigh the potential risks their presence may pose. For example, someone might receive a TRP for a work-related visit if their expertise is deemed beneficial to the Canadian economy or society, despite the reasons that initially made them inadmissible.",
  },

  ///
  ////
  /////
  HowApplyHeading: {
      type: String,
      default: "How to Apply for a Temporary Resident Permit",
    },
    HowApplyPara: {
        type: String,
        default: "To obtain a Temporary Resident Permit requires you to show a compelling purpose for your intended visit to Canada. The application process can vary depending on your country of origin. For specific country-specific requirements, kindly connect with our office at 604 503 3734.",
      },
      

//
 RefusalHeading: {
     type: String,
     default: "Common Reasons for Refusals of Temporary Resident Permit (TRP)",
  },

  RefusalSubHead: {
    type: String,
    default: "To increase your chances of securing a Temporary Resident Permit (TRP), it's crucial to be mindful of common reasons for rejection. By understanding these, you can make your application to address any potential concerns and boost your chances of approval.",
},
r1: {
    type: String,
    default: "When an individual is deemed inadmissible to Canada, it means they are prohibited from entering the country, often due to medical or criminal history issues.",
},

r2: {
    type: String,
    default: "Individuals linked to terrorism, espionage, or other threats to national security may be considered inadmissible.",
},
r3: {
    type: String,
    default: "Convictions for serious crimes, including murder, manslaughter, drug trafficking, and organized crime offenses, can lead to a refusal.",
},
r4: {
    type: String,
    default: "Involvement in criminal organizations or gangs can render an individual refusal.",
},
r5: {
    type: String,
    default: "Providing false or misleading information during the application process or any previous immigration interactions can result in a refusal.",
},
r6: {
    type: String,
    default: "Failure to comply with Canadian immigration laws, such as overstaying a visa, can make an individual inadmissible.",
},
//
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you have received a refusal or are inadmissible for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
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

let temporaryResidentPermSection = mongoose.model(
  "Temporary Resident Permit (TRP) program",
  temporaryResidentPermSchema
);
module.exports = temporaryResidentPermSection;
