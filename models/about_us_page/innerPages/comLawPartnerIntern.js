let mongoose = require("mongoose");
let comLawPartnerInternSchema = mongoose.Schema(
  {
    comLawPartnerInternHeading: {
      type: String,
      default: "Open Work Permit for Spouse or Common-law Partner of an International Student",
    },
    comLawPartnerInternPara1: {
      type: String,
      default:
        "Canada allows spouses and common-law partners to accompany their partners who are international students. Over the years, IRCC has made drastic changes to this program, allowing only certain international students to invite their partners. It is crucial to understand the program eligibility before initiating your immigration process to avoid any long period of separation between you and your partner.",
    },
    comLawPartnerInternPara2: {
        type: String,
        default:
          "Both the applicant and their spouse must fulfill their respective sets of requirements to reunite and work in Canada.",
      },

     
  
//


BenifitHeading: {
    type: String,
    default: "Benefits of Open Work Permit for Spouse or Common-law Partner of an International Student:",
  },
  
b1: {
  type: String,
  default: "It enables your spouse or common-law partner to accompany you to Canada and reside with you.",
},
b2: {
  type: String,
  default: "It permits your spouse or common-law partner to work, alleviating financial strain on you while you are in school full-time.",
},
b3: {
    type: String,
    default: "It provides your spouse or common-law partner with the opportunity to gain Canadian work experience and enhance their skills.",
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
    default: "It also offers a chance to immerse oneself in Canadian society.",
  },
///

////

EligCritHeading: {
    type: String,
    default: "Eligibility criteria for Open Work Permit for Spouse or Common-law Partner of an International Student:",
  },
  EligCritPara: {
    type: String,
    default: "The requirements for principal applicant (international student) differ for both the categories (Before March 19, 2024, applicants and After March 19, 2024 applicants). However, the requirements are same for the accompanying spouse or common-law partner.",
  },
  EligReqHeading: {
    type: String,
    default: "Eligibility Requirements of the international student:",
  },
  EligReqSubHead1: {
    type: String,
    default: "Applications submitted before March 19, 2024",
  },
  EligReqSubHead1Para1: {
    type: String,
    default: "For the international student to be eligible to apply for their partner under administrative code C42, they must meet all of the following requirements:",
  },

er1li1: {
  type: String,
  default: "Proof that the international student is attending a designated learning institution (DLI)",
},
er1li2: {
    type: String,
    default: "The international student must be actively studying full-time in a post-graduation work permit-eligible program at one of the following:",
  },
  er1li21: {
    type: String,
    default: "A Canadian public post-secondary institution (college, trade/technical school, university, or CEGEP in Quebec).",
  },
  er1li22: {
    type: String,
    default: "A private post-secondary institution in Quebec operating under the same rules as public institutions.",
  },
  er1li23: {
    type: String,
    default: "A private or public secondary or post-secondary institution in Quebec offering qualifying programs of 900 hours or longer leading to a Diploma of Vocational Studies (DVS) or an Attestation of Vocational Specialization (AVS).",
  },
  er1li24: {
    type: String,
    default: "A Canadian private institution authorized by provincial statute to confer degrees (e.g., bachelor’s, master’s, or doctorate) if the study permit holder is enrolled in a degree program authorized by the province.",
  },
  er1li3Head: {
    type: String,
    default: "<strong>The international student is not eligible to apply if:</strong>",
  },
  er1li31: {
    type: String,
    default: "Not enrolled while residing in Canada.",
  },
  er1li32: {
    type: String,
    default: "Enrolled in part-time studies.",
  },
  er1li33: {
    type: String,
    default: "Enrollment in a private post-secondary program or institution not meeting specified eligibility criteria.",
  },


  EligReqSubHead2: {
    type: String,
    default: "Applications submitted on or after March 19, 2024",
  },
  EligReqSubHead2Para2: {
    type: String,
    default: "For the international graduate to be eligible to apply for their partner under administrative code C42, they must meet all of the following requirements:",
  },

  er2li1: {
    type: String,
    default: "hold a valid study permit AND must be physically residing in Canada while studying or be approved for a study permit, if applying as a family group outside of Canada AND provide proof that they plan to physically reside in Canada while studying",
  },
  er2li2: {
    type: String,
    default: "be studying on a full-time basis in a graduate program (master’s and doctorate) in a university or polytechnic institution, or a professional degree-granting program in a university (e.g., medicine, dentistry, law, etc.)",
  },

  er2li2Head: {
    type: String,
    default: "Graduate programs are defined as follows:",
  },
  er2li3: {
    type: String,
    default: "master’s and doctorate degrees granted by universities or polytechnic institutions",
  },



  EligReqSubHead3: {
    type: String,
    default: "<strong>Professional degree programs are identified under the following:</strong>",
  },
  er3li1: {
    type: String,
    default: "Doctor of Dental Surgery (DDS, DMD)",
  },
  er3li2: {
    type: String,
    default: "Bachelor of Law or Juris Doctor (LLB, JD, BCL)",
  },
  er3li3: {
    type: String,
    default: "Doctor of Medicine (MD)",
  },
  er3li4: {
    type: String,
    default: "Doctor of Optometry (OD)",
  },
  er3li5: {
    type: String,
    default: "Pharmacy (PharmD, BS, BSc, BPharm)",
  },
  er3li6: {
    type: String,
    default: "Doctor of Veterinary Medicine (DVM)",
  },
  er3li7: {
    type: String,
    default: "Bachelor of Science in Nursing (BScN, BSN, BNSc)",
  },
  er3li8: {
    type: String,
    default: "Bachelor of Education (BEd)",
  },
  er3li9: {
    type: String,
    default: "Bachelor of Engineering (BEng, BE, BASc) only",
  },



  
  EligReqSubHead4: {
    type: String,
    default: "The international student is not eligible to apply if:",
  },
  er4li1: {
    type: String,
    default: "Not enrolled while residing in Canada.",
  },
  er4li2: {
    type: String,
    default: "Enrolled in part-time studies.",
  },
  er4li3: {
    type: String,
    default: "Not enrolled in a private post-secondary program/institution other than those listed",
  },


  EligReqAccomHeading: {
    type: String,
    default: "Eligibilty Requirements for accompanying spouse or common-law partner:",
  },
  EligReqAccomSubHead: {
    type: String,
    default: "Your family member must meet following requirements:",
  },
  erali1: {
    type: String,
    default: "<strong>General Eligibility:</strong> The applicant must meet general work permit criteria, including police and medical clearances, and not be inadmissible to Canada.",
  },
  erali2: {
    type: String,
    default: "<strong>Relationship:</strong> A genuine relationship between the applicant and the study permit holder is required.",
  },
  erali3: {
    type: String,
    default: "<strong>Proof of Spousal Relationship:</strong>Evidence must demonstrate the applicant's genuine status as the spouse or common-law partner of a valid study permit holder.",
  },
  erali4: {
    type: String,
    default: "<strong>Additional Documentation:</strong> Supplementary proof is necessary to satisfy IRCC that the relationship was not primarily for status acquisition or is not genuine.",
  },
  erali5: {
    type: String,
    default: "<strong>Applicants in Canada:</strong> They must possess valid temporary resident status, have applied for an extension before its expiry (maintained status), or be eligible for restoration of status as a visitor, worker, or student. They must also be eligible to apply for a work permit from within Canada.",
  },
  ////

  WhenToApplyHeading: {
    type: String,
    default: "How to apply for Open Work Permit for Spouse or Common-law Partner of an International Student?",
  },

    wa1:{
      type: String,
      default: "You can choose to apply together for a Study Permit and Spousal Open Work Permit before traveling to Canada. If the applications are approved, study and work permits will be issued upon arrival in Canada, allowing the spouse to begin working immediately.",
    },
    wa2:{
      type: String,
      default: "Foreign nationals exempt from the Temporary Resident Visa (TRV) requirement can apply for the Spousal Open Work Permit (SOWP) upon arrival in Canada, with immediate issuance upon approval by CBSA officer.",
    },
    wa3:{
      type: String,
      default: "Some spouses/common-law partners may enter Canada as visitors and apply for the work permit later. In such cases, the application can be submitted at any time, ensuring the visitor status remains valid during the application process.",
    },
   

  /////
  HowApplyHeading: {
      type: String,
      default: "How to apply for Open Work Permit for Spouse or Common-law Partner of an International Student?",
    },

      ha1:{
        type: String,
        default: "Gather documents to prove above-mentioned eligibility criteria for internation student.",
      },
      ha2:{
        type: String,
        default: "Gather documents to prove the relationship is genuine.",
      },
      ha3:{
        type: String,
        default: "You might be required to get a medical exam and police clearance certificates, if applying from outside Canada.",
      },
      ha4:{
        type: String,
        default: "Submit complete application to IRCC",
      },
      ha5:{
        type: String,
        default: "After receiving, Biometric Collection Instruction letter, make an appointment for biometrics within 30 days of receiving the letter.",
      },
      ha6:{
        type: String,
        default: "Wait for IRCC to process your application.",
      },

///
     RefusalHeading: {
       type: String,
       default: "Common reasongs for refusal of Open Work Permit for Spouse or Common-law Partner of an International Student:",
  },

r1: {
    type: String,
    default: "Lack of documentation verifying the enrollment status of the international student.",
},

r2: {
    type: String,
    default: "Inadequate evidence demonstrating the genuineness of the marriage.",
},
r3: {
    type: String,
    default: "The principal applicant's study permit is nearing expiration, and there has been no application filed to extend their stay.",
},
r4: {
    type: String,
    default: "The principal applicant's work permit is nearing expiration, and there has been no application filed to extend their stay.",
},
//
       },
  {
    timeStamps: true,
  }
);

let comLawPartnerInternSection = mongoose.model(
  "Common-law Partner International Student program",
  comLawPartnerInternSchema
);
module.exports = comLawPartnerInternSection;
