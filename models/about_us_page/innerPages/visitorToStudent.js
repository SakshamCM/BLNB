let mongoose = require("mongoose");
let visitorToStudentSchema = mongoose.Schema(
  {
    visitorToStudentHeading: {
      type: String,
      default: "Visitor to Student progam",
    },
    visitorToStudentPara: {
      type: String,
      default:
        "Transitioning from visitor status to student status (also known as a change of status) can be an option for you if you have been staying in Canada as a visitor and wish to pursue full-time studies in a recognized academic institution. This program, known as the Visitor to Student Program (VTS), allows you to extend your stay and pursue studies at a designated learning institution (DLI). This process involves you applying for a student visa or changing your current visa to a student visa.",
    },


    //

      EligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for the Student Permit Program",
    },

    e1: {
      type: String,
      default: "You are already in Canada legally with a valid status, such as a valid study permit, work permit, or visitor record.",
    },
    e2: {
      type: String,
      default: "You have taken a prerequisite course inside Canada.",
    },
    e3: {
        type: String,
        default: "You are enrolled in a full-time program at a designated learning institution (DLI).",
      },
      e4: {
        type: String,
        default: "You have sufficient funds to support yourself while you study in Canada, including tuition, living expenses, and return transportation..",
      },
      e5: {
        type: String,
        default: "You have no criminal record.",
      },
      EligibilityListHead: {
        type: String,
        default: "In addition, you should meet at least one of the following conditions:",
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
        default: "You are a minor, and your parents or guardian are planning to send you to primary or secondary school.",
      },
      e10: {
        type: String,
        default: "You are an exchange student or a visiting student.",
      },
      e11: {
        type: String,
        default: "You have sponsorship for immigration and your permanent residency profile is already in the pool.",
      },
      e12: {
        type: String,
        default: "You are completing a short-term course aimed at making you eligible to be accepted at a designated learning institute.",
      },

      HowtoApplyHeading: {
        type: String,
        default: "How to Apply for a Study Permit When Applying as a Visitor",
      },
      HowtoApplySubHead: {
        type: String,
        default: "You will need to provide the same documents as you would if you were applying from outside Canada. This includes your passport, letter of acceptance from your DLI, proof of financial support, and police certificates. Here are 5 easy steps we help you follow to process your application:",
      },   
      ha1: {
        type: String,
        default: "Contact Bright Light Immigration.",
      },
      ha2: {
        type: String,
        default: "Apply to a prerequisite course (Mandatory).",
      },
      ha3: {
        type: String,
        default: "Apply to a Public/Private College..",
      },
      ha4: {
        type: String,
        default: "Get your documents and submit your application.",
      },
      ha5: {
        type: String,
        default: "Obtain your Study Permit.",
      },


  //


    RefusalHeading: {
      type: String,
      default: "Reasons for Refusals of Study Permit When Applying as a Visitor",
    },
    RefusalSubHead: {
        type: String,
        default: "You should have a Letter of Acceptance (LOA) from a DLI. If you do not have a LOA, your application will be refused.",
      },
    r1: {
      type: String,
      default:
        "You do not have a Letter of Acceptance (LOA) from a DLI.",
    },
    r2: {
      type: String,
      default:
        "If you do not have strong ties to your home country, such as a job offer or property ownership.",
    },
    r3: {
      type: String,
      default:
        "You do not have enough money to cover tuition, living expenses, and return transportation.",
    },
    r4: {
        type: String,
        default:
          "You provided false or misleading information on your application.",
      },
      r5: {
        type: String,
        default:
          "You have a history of immigration violations, such as overstaying a visa or working without authorization.",
      },
      r6: {
        type: String,
        default:
          "You have a criminal record, depending on the nature of the crime.",
      },
      r7: {
        type: String,
        default:
          "You submitted incomplete or incorrect documentation with your application.",
      },
      r8: {
        type: String,
        default:
          "You did not provide sufficient evidence to show your genuine intent to study.",
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

let visitorToStudentSection = mongoose.model(
  "Visitor to Student progam",
  visitorToStudentSchema
);
module.exports = visitorToStudentSection;
