let mongoose = require("mongoose");
let comLawPartTempSchema = mongoose.Schema(
  {
    comLawPartTempHeading: {
      type: String,
      default: "The spouses or common-law partners of authorized workers coming to Canada or working in Canada may apply for an open work permit without having an offer of employment.",
    },
    comLawPartTemprPara1: {
      type: String,
      default:
        "The processing time for a PR application can be longer than usually expected. There are various reasons for this to happen. The common scenarios for application delays are applications stuck in background checks, requests for additional medical examinations, poor staffing at the country of citizenship, security clearance delays, etc. The good thing is you can apply for authorization to work while waiting for your permanent residency application to be processed.",
    },
    comLawPartTempPara2: {
        type: String,
        default:
          "They are usually classified into the following two categories:",
      },

      comLawPartTempLi1: {
        type: String,
        default:
          "Family members of foreign nationals authorized to work in high-skilled occupations (TEER 0, 1, 2, or 3) – [C41 and C46]",
      },
      
      comLawPartTempLi2: {
        type: String,
        default:
          "Family members of foreign nationals authorized to work in low-skilled occupations (TEER 4 or 5) – [C47 and C48]",
      },  

      comLawPartTempPara3: {
        type: String,
        default:
          "Both the applicant and their spouse must fulfill their respective sets of requirements to reunite and work in Canada.",
      },  
  
//


BenifitHeading: {
    type: String,
    default: "Benefits of Open Work Permit for Spouse or Common-law Partner of a Temporary Foreign Worker",
  },
  
b1: {
  type: String,
  default: "It enables your spouse or common-law partner to accompany you to Canada and reside with you.",
},
b2: {
  type: String,
  default: "It permits your spouse or common-law partner to work, alleviating financial strain on you.",
},
b3: {
    type: String,
    default: "It provides your spouse or common-law partner with the opportunity to gain Canadian work experience.",
  },
  b4: {
    type: String,
    default: "Through the Canadian work experience gained, they may become eligible for permanent residency programs.",
  },
  b5: {
    type: String,
    default: "They have the flexibility to work for any employer and in any position.",
  },
  b6: {
    type: String,
    default: "They can also establish their own business if desired.",
  },
  b7: {
    type: String,
    default: "Unlike visitors, they are allowed to stay in Canada for longer than six months, with multiple entries allowed.",
  },

  b8: {
    type: String,
    default: "Your dependent child (yours or your spouse's), or the dependent child of a dependent child (your grandchild or your spouse's grandchild) can also qualify for an open work permit.",
  },


///

////

EligibilityHeading: {
    type: String,
    default: "Eligibility Criteria for Applying for Open Work Permit of Spouse or Common-law Partner of a Temporary Foreign Worker",
  },
  EligSubHead: {
    type: String,
    default: "The requirements for the principal applicant or temporary foreign worker differ for both categories. However, the requirements are the same for the accompanying spouse or common-law partner.",
  },
e1h1: {
  type: String,
  default: "1. For High-Skilled Occupations (TEER 0, 1, 2, or 3)",
},
eh1: {
    type: String,
    default: "Requirements and Descriptions",
  },
  es1h1Lih: {
    type: String,
    default: "Valid Work Authorization",
  },
  es1h1Li1: {
    type: String,
    default: "A valid work permit, subject to certain exceptions.",
  },
  es1h1Li2: {
    type: String,
    default: "An approved work permit that has not yet been issued (indicated by a port of entry letter of introduction).",
  },
  es1h1Li3: {
    type: String,
    default: "Authorization to work without a permit.",
  },
  //
  es1h2Lih: {
    type: String,
    default: "Work Permit Validity",
  },
  es1h2Li1: {
    type: String,
    default: "Your work permit or authorized work status must be valid for at least six months beyond the date you submit your family member's open work permit application.",
  },
//
es1h3Lih: {
    type: String,
    default: "High-Skilled Occupation",
  },
  es1h3Li1: {
    type: String,
    default: "Must be employed or have a confirmed offer of employment in a high-skilled occupation (TEER 0, 1, 2, or 3).",
  },
//
//
es1h4Lih: {
    type: String,
    default: "Canadian Residence",
  },
  es1h4Li1: {
    type: String,
    default: "Must be living in Canada or have plans to move to Canada to work.",
  },
//
//
es1h5Lih: {
    type: String,
    default: "Not Eligible Currently",
  },
  es1h5Li1: {
    type: String,
    default: "Made a refugee claim referred to the Immigration and Refugee Board.",
  },
  es1h5Li2: {
    type: String,
    default: "Subject to an unenforceable removal order.",
  },
  es1h5Li3: {
    type: String,
    default: "International student working in a co-op program without a work permit.",
  },
  es1h5Li4: {
    type: String,
    default: "International student working off-campus without a work permit.",
  },
  es1h5Li5: {
    type: String,
    default: "Applied for a post-graduation work permit (PGWP) but have not yet received a positive decision.",
  },
  es1h5Li6: {
    type: String,
    default: "Holds a spousal open work permit.",
  },
//
e2h2: {
    type: String,
    default: "2. For Low-Skilled Occupations (TEER 4 or 5)",
  },
  eh2: {
      type: String,
      default: "Valid Work Authorization",
    },
    es2h6Lih: {
      type: String,
      default: "Must possess one of the following:",
    },
    es2h6Li1: {
      type: String,
      default: "A valid work permit, subject to certain exceptions.",
    },
    es2h6Li2: {
        type: String,
        default: "An approved work permit that has not yet been issued (indicated by a port of entry letter of introduction).",
      },
      es2h6Li3: {
        type: String,
        default: "Authorization to work without a permit.",
      },
///

es2h7Lih: {
    type: String,
    default: "Work Permit Validity",
  },
  es2h7Li1: {
    type: String,
    default: "Your work permit or authorized work status must be valid for at least six months beyond the date you submit your family member's open work permit application.",
  },
///

es2h8Lih: {
    type: String,
    default: "Low-Skilled Occupation",
  },
  es2h8Li1: {
    type: String,
    default: "Must be employed or have a confirmed offer of employment in a low-skilled occupation (TEER 4 or 5).",
  },

///
///

es2h9Lih: {
    type: String,
    default: "Wages",
  },
  es2h9Li1: {
    type: String,
    default: "If employed in a low-skilled occupation, your wage rate must be at or above the median hourly wages set by the province or territory of your location of work.",
  },

///
es2h10Lih: {
    type: String,
    default: "Canadian Residence",
  },
  es2h10Li1: {
    type: String,
    default: "Must be living in Canada or have plans to move to Canada to work.",
  },

///
///
es2h11Ph: {
    type: String,
    default: "If Work Permit Holder is Under the Agri-Food Pilot",
  },
  es2h11P1: {
    type: String,
    default: "Must hold a labour market impact assessment (LMIA)-based work permit in the agriculture or low-wage stream of the Agri-Food Pilot and must have received an acknowledgment of receipt (AOR) letter from IRCC confirming that your application for permanent residence is complete.",
  },

///

es2h12Lih: {
    type: String,
    default: "Not Eligible Currently",
  },
  es2h12Li1: {
    type: String,
    default: "Holds a work permit under the low-wage stream of the Temporary Foreign Worker Program.",
  },
  es2h12Li2: {
    type: String,
    default: "Holds a work permit under the Seasonal Agricultural Worker Program.",
  },
  es2h12Li3: {
    type: String,
    default: "Holds a work permit under the agricultural stream of the Temporary Foreign Worker Program.",
  },
  es2h12Li4: {
    type: String,
    default: "Made a refugee claim referred to the Immigration and Refugee Board.",
  },
  es2h12Li5: {
    type: String,
    default: "Subject to an unenforceable removal order.",
  },
  es2h12Li6: {
    type: String,
    default: "International student in a co-op program.",
  },
  es2h12Li7: {
    type: String,
    default: "International student working off-campus without a work permit.",
  },
  es2h12Li8: {
    type: String,
    default: "Applying for a Post-Graduation Work Permit (PGWP) and haven't received a positive decision on your application yet.",
  },


///
FamMembHeading: {
  type: String,
  default: "Family Member Requirements for Open Work Permits:",
},
FamMembSubHead: {
    type: String,
    default: "Your family member must meet 3 requirements:",
  },
  FamMembSubLi1: {
    type: String,
    default: "General Eligibility: They must meet the general work permit eligibility criteria such as police clearances, medical clearance and not inadmissible to Canada.",
  },
  FamMembSubLi2: {
    type: String,
    default: "Relationship: You must be in a genuine relationship with each other.",
  },
  FamMembSubLi3: {
    type: String,
    default: "Temporary Residency: If in Canada, they must have valid temporary resident status, have applied to extend their status before it expired (maintained status), or be eligible for restoration of their status as a visitor, worker, or student.",
  },

  ////
  /////
  HowApplyHeading: {
      type: String,
      default: "How to apply for Open Work Permit of Spouse or Common-law Partner of a Temporary Foreign Worker?",
    },

      ha1:{
        type: String,
        default: "Identify the principal applicant’s occupation in TEER category 0, 1, 2, 3, 4, or 5 of the National Occupation Classification system.",
      },
      ha2:{
        type: String,
        default: "Gather documents to prove the above-mentioned eligibility criteria.",
      },
      ha3:{
        type: String,
        default: "Gather documents to prove that your relationship is genuine.",
      },
      ha4:{
        type: String,
        default: "You might be required to get a medical exam and police clearance certificates if applying from outside Canada.",
      },
      ha5:{
        type: String,
        default: "Submit a complete application to IRCC.",
      },
      ha6:{
        type: String,
        default: "After receiving the Biometric Collection Instruction letter, make an appointment for biometrics within 30 days of receiving the letter.",
      },
      ha7:{
        type: String,
        default: "Wait for IRCC to process your application.",
      },
///

     RefusalHeading: {
       type: String,
       default: "Common reasons for refusal of Open Work permit of Spouse or Common-law Partner of a Temporary Foreign Worker",
  },

r1: {
    type: String,
    default: "Lack of documentation verifying the National Occupational Classification (NOC) of the principal applicant.",
},

r2: {
    type: String,
    default: "Inadequate evidence demonstrating the genuineness of the relationship.",
},
r3: {
    type: String,
    default: "The principal applicant is employed in a low-skill occupation under the low-wage stream of LMIA.",
},
r4: {
    type: String,
    default: "The principal applicant's work permit is nearing expiration, and there has been no application filed to extend their stay.",
},
//
      NeedAssisHeading: {
        type: String,
        default: "Need Assistance?",
      },
      NeedAssisPara: {
        type: String,
        default: "If you need help with your application or have questions, feel free to contact us. Our team at Brightlight Immigration is here to assist you every step of the way.",
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

let comLawPartTempSection = mongoose.model(
  "Common-law Partner of a Temporary  Resident program",
  comLawPartTempSchema
);
module.exports = comLawPartTempSection;
