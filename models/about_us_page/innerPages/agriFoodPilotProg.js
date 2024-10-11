let mongoose = require("mongoose");
let  agriFoodPilotSchema = mongoose.Schema(
  {
    AgriFoodPilotHeading: {
      type: String,
      default: "Agri-Food Pilot Program",
    },
    AgriFoodPilotPara1: {
      type: String,
      default:
        "The Agri-Food Pilot is strategically designed to address labor shortages, particularly in critical areas like meat processing and mushroom production, within Canada's agri-food sector, while also supporting the nation's ambitious export objectives. As a cornerstone of Canada's economic growth, the agriculture and agri-food industry sustains approximately one-in-eight jobs across the country.",
    },
   
    AgriFoodPilotPara2: {
      type: String,
      default:
        "This initiative aims to assist the agri-food sector in recruiting full-time, non-seasonal foreign workers essential for filling expanding labor gaps. By offering a pathway to permanent residency after an initial two-year term on a temporary work permit, the pilot program seeks to attract and retain skilled workers, eliminating the need for repetitive work permit renewals.",
    },
    AgriFoodPilotPara3: {
      type: String,
      default:
        "In each calendar year, a maximum of 2,750 principal applicants, along with their accompanying family members, will be considered for processing under this pilot program.",
    },
    //

    EligCritHeading: {
      type: String,
      default: "Eligibility Criteria for Agri-Food Immigration Pilot",
    },
    EligCritSubHead1: {
      type: String,
      default: "Who Qualifies for Canada’s Agri-Food Immigration Pilot?",
    },
    EligCritPara1: {
      type: String,
      default: "To be eligible for Canada’s Agri-Food Immigration Pilot, foreign workers need to meet specific criteria:",
    },

//

    EligCritPoH2: {
      type: String,
      default: "2. Qualifying Job Offer",
    },  
    EligCritPoPara1: {
      type: String,
      default: "If you are living in Canada at the time of application, you have the option to fulfill either the job offer requirement or the educational requirement.",
    },  
    EligCritPoPara2: {
      type: String,
      default: "However, if you are living outside of Canada when you apply, you must meet both the job offer and the educational requirement.",
    },  
    EligCritPoPara3: {
      type: String,
      default: "The job offer you receive must be genuine and satisfy all of the following criteria:",
    },  

    EligCritPo2Li1: {
      type: String,
      default: "The job must be in an eligible occupation under one of the eligible industries.",
    }, 

    EligCritPo2Li2: {
      type: String,
      default: "The job must be full-time, implying that you work a minimum of 30 paid hours per week.",
    },
    EligCritPo2Li3: {
      type: String,
      default: "The job must be non-seasonal, meaning you have consistent and regularly scheduled paid employment throughout the year.",
    },
    EligCritPo2Li4: {
      type: String,
      default: "The job must be permanent, showing there is no predetermined end date.",
    },
    EligCritPo2Li5: {
      type: String,
      default: "The job must be located in Canada, excluding Quebec.",
    },


    EligCritPo2Para2: {
      type: String,
      default: "For positions that are unionized, the wage must be determined by the relevant collective agreement. For non-unionized positions, the wage must meet or exceed the prevailing (median) wage for the occupation listed on your job offer in the province of employment (or at the national level if no provincial rate is available).",
    },

    //

    EligCritPoH3: {
      type: String,
      default: "3. Minimum Language Requirements",
    },  
    EligCritPo3Para: {
      type: String,
      default: "Achieve a minimum Canadian Language Benchmark (CLB) of Level 4 on an approved language test in either English or French.",
    },  
  //
  EligCritPoH4: {
    type: String,
    default: "4. Minimum Education Requirements",
  },  
  EligCritPo4Para: {
    type: String,
    default: "The education requirement for the agri-food pilot program depends on whether you are residing in Canada or outside of Canada when you apply:",
  },  
  EligCritPo4Li1: {
    type: String,
    default: "If you are residing in Canada:",
  }, 

  EligCritPo4SubLi1: {
    type: String,
    default: "You may choose to meet either the educational requirement or the job offer requirement.",
  },

  EligCritPo4Li2: {
    type: String,
    default: "If you are residing outside of Canada:",
  },
  EligCritPo2SubLi: {
    type: String,
    default: "You must meet both the educational requirement and the job offer.",
  },
  EligCritPo4Li3: {
    type: String,
    default: "The educational requirement entails having at least one of the following:",
  },
  EligCritPo3SubLi1: {
    type: String,
    default: "A Canadian high school diploma, or",
  },
  EligCritPo3SubLi2: {
    type: String,
    default: "An Educational Credential Assessment (ECA) report from a designated organization or professional body, demonstrating the completion of a foreign credential at the secondary school level or higher.",
  },

//

EligCritPoH5: {
  type: String,
  default: "5. Settlement Funds Requirement",
},  
EligCritPo5Para: {
  type: String,
  default: "Demonstrate sufficient funds to support yourself and your family upon settling in Canada. If you're already employed in Canada with a valid work permit, no proof of funds is necessary. For those not currently employed in Canada, specific settlement funds are required:",
},  

EligCritPo5Head1: {
  type: String,
  default: "Number of family members",
},  
EligCritPo5Head1Po1: {
  type: String,
  default: "1 (single applicant)",
},  
EligCritPo5Head1Po2: {
  type: String,
  default: "2",
},  

EligCritPo5Head1Po3: {
  type: String,
  default: "3",
},  

EligCritPo5Head1Po4: {
  type: String,
  default: "For each additional family member, add",
},  


EligCritPo5Head2Po1: {
  type: String,
  default: "$13,757",
},  
EligCritPo5Head2Po2: {
  type: String,
  default: "$17,127",
},  
EligCritPo5Head2Po3: {
  type: String,
  default: "$21,055",
},  
EligCritPo5Head2Po4: {
  type: String,
  default: "$3,706",
},  

//

HowToApplyHeading: {
  type: String,
  default: "How to Apply for Canada’s Agri-Food Immigration Pilot",
},
ha1: {
  type: String,
  default: "If you meet the program requirements listed above, then you can submit your application for permanent resident status directly to IRCC.",
},
ha2: {
  type: String,
  default: "Once you have completed your application, you will be required to submit the application in hard copy by mail.",
},
//
    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara: {
      type: String,
      default:
        "Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs is nearly 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },

  },
  {
    timeStamps: true,
  }
);

let  agriFoodPilotSection = mongoose.model(
  "Agri-Food Pilot Program ",
  agriFoodPilotSchema
);
module.exports =  agriFoodPilotSection;
