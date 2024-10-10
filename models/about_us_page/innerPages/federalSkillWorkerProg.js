let mongoose = require("mongoose");
let federalSkillWorkerProgSchema = mongoose.Schema(
  {
    WorkProgHeading: {
      type: String,
      default: "Federal Skilled Worker Program (FSWP)",
    },
    WorkProgPara1: {
      type: String,
      default:
        "Elevate your career with Canada's FSWP, a pathway to skilled professionals.",
    },
    WorkProgPara2: {
        type: String,
        default:
          "The Federal Skilled Worker Program (FSWP) is one of Canada's most popular immigration programs, designed to attract skilled workers from around the world who have the skills and experience to contribute to the Canadian economy. The program is managed through Express Entry, a streamlined system that allows eligible candidates to apply for Canadian permanent residency.",
      },
  
    //
   //
        EligibilityHeading: {
            type: String,
            default: "Eligibility Criteria for Federal Skilled Worker Program (FSWP)",
          },

          EligPara: {
            type: String,
            default: "To meet the eligibility requirements for the Federal Skilled Worker Program FSWP, you must meet the following requirements:",
          },

          e1: {
            type: String,
            default: "You must be between 18 and 45 years old.",
          }, 
         e2: {
            type: String,
            default: "You must have at least one year of full-time post-secondary education or an equivalent qualification, assessed through an Educational Credential Assessment (ECA) for immigration purposes.",
          }, 
 
         e3: {
            type: String,
            default: "A minimum level of approved language tests in English or French for writing, reading, listening, and speaking is essential.",
          }, 

          e4: {
            type: String,
            default: "Must have at least 1 year of continuous work experience in a skilled occupation listed in NOC TEER categories 0, 1, 2, or 3. The work experience must be in the same type of job as the one you want to use for your immigration application.",
          }, 
          //
          EligTableHeading: {
            type: String,
            default: "TEER Categories and Examples of Jobs",
          }, 
          EligTableHead1: {
            type: String,
            default: "TEER",
          }, 
          EligTable1HeadLi1: {
            type: String,
            default: "TEER 0",
          }, 
          EligTable1HeadLi2: {
            type: String,
            default: "TEER 1",
          }, 
          EligTable1HeadLi3: {
            type: String,
            default: "TEER 02",
          }, 
          EligTable1HeadLi4: {
            type: String,
            default: "TEER 03",
          }, 
          EligTable1HeadLi5: {
            type: String,
            default: "TEER 04",
          }, 
          EligTable1HeadLi6: {
            type: String,
            default: "TEER 05",
          }, 
          //
          EligTableHead2: {
            type: String,
            default: "Occupation Types",
          }, 

          EligTable2HeadLi1: {
            type: String,
            default: "Management occupations",
          }, 
          EligTable2HeadLi2: {
            type: String,
            default: "Occupations that usually require a university degree",
          }, 
          EligTable2HeadLi3: {
            type: String,
            default: "Occupations that usually require: a college diploma apprenticeship training of 2 or more years supervisory occupations",
          }, 
          EligTable2HeadLi4: {
            type: String,
            default: "Occupations that usually require:a college diploma apprenticeship training of less than 2 yearsmore than 6 months of on-the-job training",
          }, 
          EligTable2HeadLi5: {
            type: String,
            default: "Occupations that usually require: a high school diploma several weeks of on-the-job training",
          }, 
          EligTable2HeadLi6: {
            type: String,
            default: "Occupations that usually need short-term work demonstration and no formal education",
          }, 



          //
          EligTableHead3: {
            type: String,
            default: "Examples",
          }, 
          EligTable3HeadLi1: {
            type: String,
            default: "Advertising, marketing and public relations managers, Financial managers",
          }, 
          EligTable3HeadLi2: {
            type: String,
            default: "Financial advisors, Software engineers",
          }, 
          EligTable3HeadLi3: {
            type: String,
            default: "Computer network and web technicians, Medical laboratory technologists",
          }, 
          EligTable3HeadLi4: {
            type: String,
            default: "Bakers, Dental assistants and dental laboratory assistants",
          }, 
          EligTable3HeadLi5: {
            type: String,
            default: "Home child care providers, Retail salespersons and visual merchandisers",
          }, 
          EligTable3HeadLi6: {
            type: String,
            default: "Landscaping and grounds maintenance labourers, Delivery service drivers and door-to-door distributors",
          }, 


          EligLastPara: {
            type: String,
            default: "You do not need a job offer to apply for the FSWP, but having a valid job offer from a Canadian employer may increase your chances of receiving an invitation to apply for permanent residency.",
          },
          //
          AssessmentHeading: {
            type: String,
            default: "Assessment through a Federal Skilled Worker Program (FSWP) Calculator",
          }, 
          AssessmentPara: {
            type: String,
            default: "Once you have met the minimum requirements for the FSWP, you will be assessed based on the Comprehensive Ranking System (CRS). The CRS is a points-based system that evaluates candidates on factors such as their age, education, language skills, work experience, and adaptability.",
          }, 
          //
          ExpressEntryHead: {
            type: String,
            default: "Express Entry Federal Skilled Worker Program (FSWP) Draws History",
          }, 

         
  //    

  HowToApplyHeading: {
    type: String,
    default: "How to Apply for Federal Skilled Worker Program (FSWP)",
  },

ha1: {
    type: String,
    default: "Create your profile on the Immigration, Refugees and Citizenship Canada (IRCC) website, or for a stress-free solution, let us handle your case for you",
  },
  ha2: {
    type: String,
    default: "Collect all required documentation to support your application, such as education certificates, language test results, work experience letters, and any other relevant documents.",
  },
  ha3: {
    type: String,
    default: "Place your profile in the Express Entry pool. Your CRS score will determine your position in the pool.",
  },
  ha4: {
    type: String,
    default: "You will receive an ITA if your CRS score is high enough and meets the requirements.",
  },
  ha5: {
    type: String,
    default: "A complete application for permanent residency submission will be required within 60 days of receiving the ITA.",
  },
  ha6: {
    type: String,
    default: "Provide additional documentation and undergo medical examinations as required. Your application will be processed, and a decision will be made.",
  },
  //
      RefusalHeading: {
        type: String,
        default: "Common Reasons for Refusals of Federal Skilled Worker Program (FSWP)",
      },

      r1: {
        type: String,
        default: "You don’t have a Canadian high school diploma or equivalent, language proficiency in English or French, and skilled work experience in a NOC-listed occupation.",
      },
      r2: {
        type: String,
        default: "Your Comprehensive Ranking System (CRS) score isn’t high enough.",
      },
      r3: {
        type: String,
        default: "Criminal convictions, health issues, or security concerns may make you inadmissible. Exceptions and waivers may apply.",
      },
      r4: {
        type: String,
        default: "You did not submit all the required documents and provided inaccurate information.",
      },
      r5: {
        type: String,
        default: "You failed to provide sufficient proof of funds to support yourself or your family in Canada.",
      },
    
  //


  StillNotSureHeading: {
    type: String,
    default: "Still Not Sure?",
  },

  s1: {
    type: String,
    default:
      "If you have received a refusal for any of the reasons mentioned above or have doubts regarding your case and application, do not worry. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs is nearly 100%, achieved through a tailored approach to your specific case and using similar successful cases as precedents.",
  },
  s2: {
    type: String,
    default:
      "At Brightlight Immigration, our dedicated team of visa application specialists will assist you from the start of the application process all the way to obtaining your PR. Start your process now.",
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

let federalSkillWorkerProgSection = mongoose.model(
  "Federal Skilled Worker Program (FSWP)",
  federalSkillWorkerProgSchema
);
module.exports = federalSkillWorkerProgSection;
