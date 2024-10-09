let mongoose = require("mongoose");
let insideCanadaSchema = mongoose.Schema(
  {
    InsideCanHeading: {
      type: String,
      default: "Study Permit: Inside Canada",
    },
    InsideCanPara1: {
      type: String,
      default:
        "While the standard procedure for obtaining a Canadian student visa is to apply from outside Canada, there are exceptions. You may be eligible to apply for a student visa while already residing in Canada or if you wish to change your college or program.",
    },
    InsideCan2: {
      type: String,
      default:"The processing time for a student visa application from inside Canada can vary depending on individual circumstances. If you need to extend your stay, you can apply for an extension from inside Canada. For the most up-to-date processing times and information on your study permit extension, please contact our office at 604-503-3734."
    },


    //

      EligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for Student Visa - Inside Canada",
    },
      EligibilitySubHead1: {
        type: String,
        default: "You can only apply for a student visa from inside Canada if you meet all of the following criteria:",
      },
    e1: {
      type: String,
      default: "You are already in Canada legally with valid status (study permit, work permit, or visitor record).",
    },
    e2: {
      type: String,
      default:
        "You have completed a prerequisite course inside Canada.",
    },
    e3: {
        type: String,
        default:
          "You are enrolled in a full-time program at a designated learning institution (DLI).",
      },
      e4: {
        type: String,
        default: "You have sufficient funds to support yourself while studying in Canada.",
      },
      e5: {
        type: String,
        default: "You have no criminal record.",
      },
      EligibilitySubHead2: {
        type: String,
        default: "Additionally, you must meet at least one of the following conditions:",
      },
      e6: {
        type: String,
        default: "Your work permit or study permit is still valid.",
      },
      e7: {
        type: String,
        default: "You are the parent, spouse, or common-law partner of someone with a valid work or study permit.",
      },
      e8: {
        type: String,
        default: "You are the parent, spouse, or common-law partner of someone with a valid Temporary Resident Permit with a validity of 6 months or more.",
      },
      e9: {
        type: String,
        default: "You are a minor and your parents or guardian are planning to send you to primary or secondary school.",
      },
      e10: {
        type: String,
        default: "You are an exchange student.",
      },
      e11: {
        type: String,
        default: "You are a visiting student.",
      },
      e12: {
        type: String,
        default: "You have sponsorship for immigration and your permanent residency profile is already in the pool.",
      },
      e13: {
        type: String,
        default: "You are completing a short-term course aimed at making you eligible to be accepted at a designated learning institute.",
      },
      EligibilityNote: {
        type: String,
        default: "If none of the above applies, you must submit your study permit application as though you were outside Canada, but you will not need to physically leave the country. You will be required to apply for a Provincial Attestation Letter (PAL) in this situation.",
      },

  //


  //
    HowApplyHeading: {
      type: String,
      default: "How to Apply for a Study Permit from Inside Canada",
    },
    HowApplySubHead: {
        type: String,
        default: "You will need to provide the same documents as you would if you were applying from outside Canada. This includes your passport, letter of acceptance from your DLI, proof of financial support, and police certificates. Here are 5 easy steps we help you follow to process your application.",
      },
    ha1: {
      type: String,
      default:
        "Contact Bright Light Immigration.",
    },
    ha2: {
      type: String,
      default:
        "Apply to a prerequisite course (Mandatory).",
    },
    ha3: {
      type: String,
      default:
        "Apply to a Public/Private College.",
    },
    ha4: {
        type: String,
        default:
          "Gather your documents and submit your application.",
      },
    ha5: {
     type: String,
     default:
        "Receive your Study Permit.",
      },

    RefusalHeading: {
      type: String,
      default: "Common Reasons for Refusals",
    },
    r1: {
      type: String,
      default:
        "Lack of proof of funds to afford living and studying in Canada.",
    },
    r2: {
      type: String,
      default:
        "Failure to demonstrate reasons for returning home after studies.",
    },
    r3: {
      type: String,
      default:
        "Unclear study purpose and how it will benefit you.",
    },
    r4: {
        type: String,
        default:
          "Failed to meet required language test scores.",
      },
      r5: {
        type: String,
        default:
          "Not accepted into a recognized educational institution or submitting fraudulent documents.",
      },
  
    StillNotHeading: {
      type: String,
      default: "Still not sure?",
    },
    s1: {
      type: String,
      default:
        "If you have faced a refusal for any of the reasons mentioned above, don't worry. With over 10 years of experience, we specialize in handling previously refused cases. We have successfully secured approval for students who have had multiple refusals, long gaps in education, and are of mature age.",
    },
    s2: {
      type: String,
      default:
        "We achieve this by tailoring our approach to your specific case and addressing each concern raised by the officer in previous refusals. Using case law, we identify similar cases with positive outcomes and apply them as precedents. This is why we have a high success rate, with over 90% approval in such cases. At Brightlight Immigration, we have a dedicated team of visa application specialists ready to assist you from the start of the application process to obtaining your visa. Start your process now.",
    },
  },
  {
    timeStamps: true,
  }
);

let insideCanadaSection = mongoose.model(
  "Study Permit: Inside Canada",
  insideCanadaSchema
);
module.exports = insideCanadaSection;
