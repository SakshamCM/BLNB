let mongoose = require("mongoose");
let canadianExperienceClassSchema = mongoose.Schema(
  {
    CecHeading: {
      type: String,
      default: "The Canadian Experience Class (CEC) is a permanent residency immigration program designed for skilled foreign workers who have gained Canadian work experience. It is one of the fastest and most popular pathways to Canadian permanent residency, with processing times typically taking 3-4 months.",
    },
    CecPara: {
      type: String,
      default:
        "A Dual Intent Visa allows you to have two different reasons for visiting Canada. This means you can come to Canada temporarily with the option of considering permanent residence in the future or vice versa. Typically, these applications are made by individuals who already have a temporary resident visa and have either applied or are planning to apply for permanent resident status in Canada. This flexibility is what makes this visa type unique and called Dual Intent.",
    },

    //
   //
        EligibilityHeading: {
            type: String,
            default: "Eligibility Criteria for Canadian Experience Class (CEC)",
          },

          EligPara: {
            type: String,
            default: "To be eligible for the CEC, you must meet the following requirements:",
          },

          e1: {
            type: String,
            default: "Have at least one year of paid skilled work experience in Canada. This means you must have worked in a job that is categorized as skilled in the National Occupational Classification (NOC). You must also have worked for at least 1,560 hours (30 hours per week for 52 weeks) over a 12-month period.",
          }, 
         e2: {
            type: String,
            default: "Have gained your work experience while authorized to work in Canada. You must have been legally permitted to work in Canada while you were employed.",
          }, 

         e3: {
            type: String,
            default: "You cannot count the work experience that you gained while you were a visitor or student.",
          }, 

          e4: {
            type: String,
            default: "Have performed the main duties of your job and have been able to perform most of the duties listed in the lead statement of the occupational description for your job.",
          }, 
         e5: {
            type: String,
            default: "A valid language test score for English or French is required, depending on the occupation.",
          }, 
          e6: {
            type: String,
            default: "You should meet the minimum Canadian Experience Class Comprehensive Ranking System (CRS) score in the Express Entry system",
          }, 

          //
          ExpressEntryHead: {
            type: String,
            default: "Express Entry FSWP Draws History",
          }, 

         
  //    

  HowToApplyHeading: {
    type: String,
    default: "How to Apply for the Canadian Experience Class (CEC) Program",
  },

ha1: {
    type: String,
    default: "Create an Express Entry profile and submit your information, including your work experience, language skills, and education. Or even better and stress-free solution, let us handle your case for you. ",
  },
  ha2: {
    type: String,
    default: "Next, receive an invitation to apply from IRCC. Note that only the highest-ranked candidates receive an invitation to apply for permanent residence",
  },
  ha3: {
    type: String,
    default: "Once you receive the ITA, submit your complete application, including supporting documents and fees, within 60 days.",
  },
  ha4: {
    type: String,
    default: "Wait for processing. IRCC will assess your application and decide whether to grant you permanent residence.",
  },
  //
      RefusalHeading: {
        type: String,
        default: "Common Reasons for Refusals of Canadian Experience Class (CEC) Program",
      },

      r1: {
        type: String,
        default: "Your application is incomplete and has inaccurate information.",
      },
      r2: {
        type: String,
        default: "You did not include the essential paperwork, like work experience letters, language test results, and your passport.",
      },
      r3: {
        type: String,
        default: "Your profile may not be strong enough if it doesn't meet the minimum requirements for factors like age, education, work experience, language skills, and job offer.",
      },
      r4: {
        type: String,
        default: "If you have any criminal convictions or health conditions that could make you inadmissible to Canada, check your admissibility status with the Canadian government to avoid any surprises. Or let us handle it for you.",
      },
      r5: {
        type: String,
        default: "You are a refugee claimant in Canada.",
      },
      r6: {
        type: String,
        default: "Gained your work experience in Canada without temporary resident status",
      },
      r7: {
        type: String,
        default: "You are working in Canada without authorization",
      },
  //


  StillNotSureHeading: {
    type: String,
    default: "Still Not Sure?",
  },

  s1: {
    type: String,
    default:
      "If you have received a refusal or have doubts regarding your case and application, don't worry. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs is nearly 100%, achieved through a tailored approach to your specific case and using similar successful cases as precedents.",
  },
  s2: {
    type: String,
    default:
      "At Brightlight Immigration, our dedicated team of visa application specialists will assist you from the start of the application process all the way to obtaining your PR. Start your process now.",
  },

  s3: {
    type: String,
    default:
      "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
  },
//
    WhyChooseUsHeading: {
      type: String,
      default: "Why Choose Us?",
    },

    WhyChooseUsPara: {
      type: String,
      default:
        "At Brightlight Immigration, we provide expert guidance and support throughout your immigration journey. Our dedicated team is committed to achieving the best possible outcomes for our clients.",
    },

  },
  {
    timeStamps: true,
  }
);

let canadianExperienceClassSection = mongoose.model(
  "Canadian Experience Class (CEC) program",
  canadianExperienceClassSchema
);
module.exports = canadianExperienceClassSection;
