let mongoose = require("mongoose");
let pgwpSchema = mongoose.Schema(
  {
    PgwpHeading: {
      type: String,
      default: "Canada’s Post-Graduate Work Permit (PGWP)",
    },
    PgwpPara1: {
      type: String,
      default:
        "If you are an international student who has graduated from a designated learning institution (DLI) in Canada, you may be eligible for a PGWP.",
    },
    PgwpPara2: {
        type: String,
        default:
          "The Post-Graduation Work Permit (PGWP) is a temporary work permit that allows international students who have graduated from a Canadian Designated Learning Institution (DLI) to work in Canada after they graduate for up to 3 years. The PGWP is a valuable opportunity for international students to gain valuable Canadian work experience, which can help them qualify for Canadian Permanent Residence.",
      },
     
   

    //
    BenifitsHeading: {
        type: String,
        default: "Benefits of a Post-Graduate Work Permit (PGWP)",
      },
 
      BenifitsList1: {
        type: String,
        default: "Valuable Canadian Work Experience: Enhance your career prospects and increase your chances of obtaining permanent residency in Canada.",
      }, 
      BenifitsList2: {
        type: String,
        default: "Professional Networking: Build your network and explore new career opportunities that can help you establish yourself in the Canadian job market.",
      }, 
      BenifitsList3: {
        type: String,
        default: "Career Exploration: Explore different career options and find a job that aligns with your skills and interests.",
      }, 

    //

        //
        EligibilityHeading: {
            type: String,
            default: "Eligibility Criteria for Post-Graduate Work Permit (PGWP)",
          },

          EligibilitySubHead: {
            type: String,
            default: "Are you eligible for a PGWP? Let's find out.",
          },

          EligibilityList1: {
            type: String,
            default: "Graduation from a Qualifying DLI: Be a foreign national who has graduated from a qualifying DLI and qualifying program.",
          }, 
          EligibilityList2: {
            type: String,
            default: "No Previous PGWP: Must never have held a PGWP before.",
          }, 

          EligibilityList3: {
            type: String,
            default: "Study Authorization: Had authorization to study in Canada that expired in the 180 days immediately preceding the PGWP application.",
          }, 

          EligibilityList4: {
            type: String,
            default: "Program Duration: Must have completed a full-time program of at least eight months, leading to a diploma, certificate, or degree.",
          }, 
          EligibilityList5: {
            type: String,
            default: "Full-Time Status: Maintained full-time student status throughout the program of study.",
          }, 
          EligibilityList6: {
            type: String,
            default: "Passing Grades: Achieved a minimum passing grade in courses.",
          }, 
          EligibilityList7: {
            type: String,
            default: "Clean Record: No criminal convictions.",
          }, 
         
        //
  

    HowApplyHeading: {
      type: String,
      default: "How to Apply for Post-Graduate Work Permit (PGWP)",
    },

    HowApplyPara1: {
        type: String,
        default: "Meet the eligibility criteria? Here’s how you can apply for PGWP:",
      },
      HowApplyPara2: {
        type: String,
        default: "You can apply for a PGWP from inside or outside Canada.",
      },
      HowApplyPara3: {
        type: String,
        default: "Here’s what you will need to provide when you apply for a PGWP",
      },

    ha1: {
      type: String,
      default:
        "Application Location: You can apply for a PGWP from inside or outside Canada.",
    },
    ha2SubHead: {
      type: String,
      default:
        "Required Documents:",
    },
    ha3: {
      type: String,
      default:
        "A copy of your study permit.",
    },
    ha4: {
      type: String,
      default:
        "A copy of your final academic transcripts OR a letter from your school confirming your graduation.",
    },
    ha5: {
        type: String,
        default:
          "A copy of your passport.",
      },

      
      RefusalHeading: {
        type: String,
        default: "Common Reasons for Refusal of Post-Graduate Work Permit (PGWP)",
      },


      RefusalSubHeading: {
        type: String,
        default: "Don’t forget to avoid these common PGWP refusal reasons and increase your chances of approval.",
      },

      refList1: {
        type: String,
        default: "Failure to meet the eligibility criteria set by IRCC.",
      },
      refList2: {
        type: String,
        default: "Not completing a full-time program of at least eight months at a qualifying DLI.",
      },
      refList3: {
        type: String,
        default: "Studying part-time during any period other than the final semester.",
      },
      refList4: {
        type: String,
        default: "Study permit expired before graduation without applying for an extension or restoration of status.",
      },
      

    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },

    StillNotSurePara1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have successfully obtained approvals for clients with multiple previous refusals through a tailored approach, addressing each concern listed in previous refusals and using case law as precedents. This high success rate is why our clients trust us.",
    },
    StillNotSurePara2: {
        type: String,
        default: "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.",
      },
  },
  {
    timeStamps: true,
  }
);

let pgwpSection = mongoose.model(
  "Post-Graduate Work Permit (PGWP) Section",
  pgwpSchema
);
module.exports = pgwpSection;
