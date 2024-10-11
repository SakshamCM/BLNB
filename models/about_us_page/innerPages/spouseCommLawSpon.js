let mongoose = require("mongoose");
let spouseCommLawSponSchema = mongoose.Schema(
  {
    spouseCommLawSponHeading: {
      type: String,
      default: "Spouse and Common-Law Partner Sponsorship Program",
    },
    spouseCommLawSponPara1: {
      type: String,
      default:
        "The Canadian government understands the importance of bringing loved ones together, and its Family reunification and sponsorship program plays a vital role in reuniting spouses, and common-law partners with their families in Canada.",
    },
    spouseCommLawSponPara2: {
        type: String,
        default:
          "As a Canadian citizen or permanent resident , you may be eligible to sponsor your spouse or common-law partner to become a permanent resident and build a life together in this vibrant nation. Whether you've met your partner abroad or have been separated by distance, Canada's Family Class sponsorship program offers a pathway to reunite with your loved ones and create a fulfilling future together. If you are eligible to sponsor your spouse or common-law partner, you will be responsible for their financial well-being for quite some time after they become permanent residents. This means that you will need to be able to provide them with basic needs. You will also need to be able to show that you can support yourself and your family financially.",
      },
  
//


 PathwaysHeading: {
    type: String,
    default: "3 main pathways for sponsoring a Spouse or Common-law Partner:",
  },
  
p1: {
  type: String,
  default: "It enables your spouse or common-law partner to accompany you to Canada and reside with you.",
},
p2: {
  type: String,
  default: "It permits your spouse or common-law partner to work, alleviating financial strain on you while you are in school full-time.",
},
p3: {
    type: String,
    default: "It provides your spouse or common-law partner with the opportunity to gain Canadian work experience and enhance their skills.",
  },
  p4: {
    type: String,
    default: "Through the Canadian work experience gained, they may become eligible for permanent residency programs.",
  },
  p5: {
    type: String,
    default: "They have the flexibility to work for any employer and in any position.",
  },
  p6: {
    type: String,
    default: "They can also establish their own business if desired.",
  },
  p7: {
    type: String,
    default: "Unlike visitors, they are allowed to stay in Canada for longer than six months, with multiple entries allowed.",
  },
  p8: {
    type: String,
    default: "It also offers a chance to immerse oneself in Canadian society.",
  },
///




EligibilityHeading: {
    type: String,
    default: "Eligibility criteria for sponsoring your Spouse or Common-law Partner for Permanent Residence in Canada:",
  },

e1: {
  type: String,
  default: "You must be a Canadian citizen or permanent resident.",
},
e2: {
  type: String,
  default: "You must show that you have the financial means to support your spouse or partner financially after they arrive in Canada.",
},
e3: {
    type: String,
    default: "You must provide evidence to prove that your relationship with your spouse or partner is genuine and that it meets the definition of a spousal or common-law partnership under Canadian immigration law.",
  },



  
  /////
  HowApplyHeading: {
      type: String,
      default: "How to apply to sponsoring your Spouse or Common-law Partner?",
    },

      ha1:{
        type: String,
        default: "You will need to submit a comprehensive application package to IRCC, including marriage certificates, proof of cohabitation (such as lease agreements, joint bank statements, or utility bills), photographs of you and your spouse or partner together, letters from friends and family testifying to your relationship, etc.",
      },
      ha2:{
        type: String,
        default: "IRCC will review your application to ensure you meet all eligibility requirements and assess the genuineness of your relationship.",
      },
      ha3:{
        type: String,
        default: "You might be required to get a medical exam and police clearance certificates if applying from outside Canada.",
      },
      ha4:{
        type: String,
        default: "If your application is approved, your spouse or partner will receive an invitation to apply for permanent residence. Once they complete the application and meet all requirements, they will be granted permanent residency status.",
      },
     
//
     RefusalHeading: {
       type: String,
       default: "Common reasons for refusals of sponsoring a Spouse or Common-law Partner",
  },

  RefusalSubHead: {
    type: String,
    default: "Missing or incomplete documentation.",
},
r1: {
    type: String,
    default: "IRCC is highly cautious against marriage of convenience arrangements, where a relationship is entered into primarily for immigration purposes. If IRCC suspects that this is the case, your application will be refused.",
},

r2: {
    type: String,
    default: "You fail to show your ability to financially support yourself, your spouse, or your partner.",
},
r3: {
    type: String,
    default: "If either you or your sponsored person has a criminal record, they may be inadmissible to Canada.",
},

//
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have obtained approvals for clients who had multiple previous refusals.",
      },
      s2: {
        type: String,
        default:
          "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.",
      },
      //

  },
  {
    timeStamps: true,
  }
);

let spouseCommLawSponSection = mongoose.model(
  "Spouse and Common-Law Partner Sponsorship Program",
  spouseCommLawSponSchema
);
module.exports = spouseCommLawSponSection;
