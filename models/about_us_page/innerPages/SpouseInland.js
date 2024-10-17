let mongoose = require("mongoose");
let SpouseInlandSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default:
        "Inland Spousal and Common-Law Partner Sponsorship",
    },
    description: {
      type: String,
      default:
        "nland sponsorship enables Canadians and permanent residents to sponsor their spouse or common-law partner for permanent resident status when the couple is already living together in Canada. This comprehensive guide outlines the key components of Inland sponsorship, helping you determine if this spousal sponsorship category aligns with your needs.",
    },


    KeyPointsHeading: {
        type: String,
        default: "Key Points about Inland Sponsorship:",
      },
      kp1: {
        type: String,
        default: "<strong>Eligibility: </strong>Canadians and permanent residents can sponsor their loved ones, provided they legally cohabit in Canada.",
      },
      kp2: {
        type: String,
        default: "<strong>Temporary Status Requirement:</strong> The foreign spouse or common-law partner does not need to hold valid temporary status in Canada (e.g., as a worker, student, or visitor).",
      },
      kp3: {
        type: String,
        default: "<strong>Continued Living and Working:</strong> During the Inland sponsorship application process, the sponsored person can continue living, working, or studying in Canada.",
      },
      kp4: {
        type: String,
        default: "<strong>PR Visa Approval: </strong>Both the Canadian citizen or permanent resident and the foreign national must be approved by Immigration, Refugees and Citizenship Canada (IRCC) for the sponsored person to receive a Canadian PR visa through Inland sponsorship.",
      },
      BenefitHeading: {
        type: String,
        default: "Benefits of Inland Spousal Sponsorship",
      },
      b1: {
        type: String,
        default: "<strong>Open Work Permit (OWP):</strong> Applicants may qualify for an open work permit, allowing full-time employment while their permanent residence application is processed.",
      },
      b2: {
        type: String,
        default: "<strong>Economic and Emotional Relief:</strong> An OWP eases financial and emotional burdens during the potentially lengthy application process.",
      },
      b3: {
        type: String,
        default: "<strong>Staying in Canada:</strong> Inland sponsorship applicants are generally expected to remain in Canada throughout processing.",
      },

    eligibleCriteriaHeading: {
      type: String,
      default: "Eligibility Criteria for Inland Spousal Sponsorship",
    },

    e1: {
      type: String,
      default: "Your spouse or partner must live with you in Canada.",
    },

    e2: {
      type: String,
      default: "Your spouse or partner must have temporary resident status in Canada.",
    },

    e3: {
      type: String,
      default: "Both the sponsor and sponsored person must meet the basic requirements for immigration to Canada:",
    },
    e3Sub1: {
        type: String,
        default: "The sponsor must be a Canadian citizen or permanent resident.",
      },
      e3Sub2: {
        type: String,
        default: "Both parties must be at least 18 years old.",
      },
      eligRelHeading: {
        type: String,
        default: "The relationship must fall into one of the following categories:",
      }, 
      er1: {
        type: String,
        default: "<strong>Spouse:</strong> Legally married with a valid marriage certificate recognized under Canadian law.",
      },
      er2: {
        type: String,
        default: "<strong>Common Law:</strong> Cohabiting in a marriage-like relationship for at least 12 consecutive months.",
      },
      er3: {
        type: String,
        default: "The sponsored person cannot have been sponsored by their spouse in Canada within the past five years.",
      },
      er4: {
        type: String,
        default: "Neither spouse must be in prison, charged with a serious offense, or bankrupt.",
      },
      er5: {
        type: String,
        default: "Please note that conjugal partnerships (where religious or marital status barriers prevent living together or marriage) are not eligible for Inland sponsorship.",
      },

      //
      HowInlaSpoSponWorkHeading: {
      type: String,
      default: "How does Inland Spousal Sponsorship work?",
    },
    HowInlaSpoSponWorkPara: {
        type: String,
        default: "Inland sponsorship is a specialized application process designed to sponsor a loved one under Canada’s Spouse or Common-Law Partner in Canada Class immigration program.",
      },


      AppCompHeading: {
      type: String,
      default: "Application Components:",
    },
    ac1: {
        type: String,
        default: "The Canadian citizen or permanent resident applies to become a sponsor.",
      },
      ac2: {
        type: String,
        default: "The foreign spouse or partner applies for permanent residence.",
      },

      HowAppInlSpoSponHeading: {
      type: String,
      default:
        "How to apply for Inland Spousal Sponsorship?",
    },

    ha1: {
      type: String,
      default: "Verify eligibility for both sponsor and sponsored person.",
    },
    ha2: {
      type: String,
      default:
        "Pay the required fees online.",
    },

    ha3: {
      type: String,
      default: "Collect supporting documents.",
    },
    ha4: {
      type: String,
      default:
        "Complete and submit the necessary forms to the appropriate visa office.",
    },

   

    RemainingCanadaHeading: {
        type: String,
        default: "Remaining in Canada:",
      },
      RemainingCanadaPara: {
        type: String,
        default: "Inland sponsorship applicants are generally expected to stay in Canada during processing. If the spouse or common-law partner needs to travel outside the country, Outland sponsorship may be a better option.",
      },

      HowLongProcInlAppHeading: {
        type: String,
        default: "How long does it take to process Inland applications?",
      },
      HowLongProcInlAppPara: {
        type: String,
        default: "Current approval times for Inland spousal sponsorship applications are approximately 12-14 months. Quebec residents or those planning to settle in Quebec may experience up to 24 months.",
      },
      InlSpouSponHeading: {
        type: String,
        default: "Inland Spousal Sponsorship - Spousal Open Work Permit",
      },
      InlSpouSponPara: {
        type: String,
        default: "The Spousal Open Work Permit Pilot Program (OWPP) allows spouses or common-law partners to work in Canada while awaiting spousal sponsorship application outcomes. Applicants can apply for an open work permit any time after applying for permanent residence in the Spouse or Common-Law Partner in Canada (SCLPC) class. The open work permit is not job-specific and allows work for any Canadian employer. These permits are typically valid for two years or until the passport expiry date.",
      },

      EligOpenWorkHeading: {
        type: String,
        default: "Eligibility for Open Work Permit under the Pilot Program",
      },
         eow1: {
        type: String,
        default: "<strong>Residency in Canada: </strong>You must currently reside in Canada.",
      },
      eow2: {
        type: String,
        default: "<strong>Sponsorship Category:</strong> You need to be sponsored under the Spouse or Common-Law Partner in Canada (SCLPC) Class.",
      },
      eow3: {
        type: String,
        default: "<strong>Valid Temporary Resident Status:</strong> Hold a valid temporary resident status, such as a visitor, student, or worker.",
      },
      eow4: {
        type: String,
        default: "<strong>Same Address as Sponsor: </strong>You must live at the same address as your sponsor.",
      },


      AppSpouHeading: {
        type: String,
        default: "Applying for a Spousal or Partner Work Permit",
      },
      AppSpouPara: {
        type: String,
        default: "New spousal or partner work permit applications can be submitted along with your sponsorship application. These applications may also be submitted concurrently with an application for permanent residence. Ensure you include the appropriate fees and send the application by mail or courier.",
      },

   ////
   ConjPartReqDocSponHeading: {
    type: String,
    default: "Common Law: Required Documents for Sponsorship",
  },
  ConjPartReqDocSponPara: {
      type: String,
      default: "When applying, submit at least two of the following documents to validate your common-law relationship:",
    },
  cprd1: {
    type: String,
    default: "Completed application forms.",
  },
  cprd2: {
    type: String,
    default:
      "Proof of status in Canada",
  },
  cprd3: {
    type: String,
    default:
      "Identity documents",
  },

  cprd4: {
    type: String,
    default: "Marriage certificate",
  },
  cprd5: {
    type: String,
    default:
      "Police certificates from countries where your spouse lived for six months or longer after turning 18.",
  },
  cprd6: {
    type: String,
    default:
      "Medical certificate for your spouse",
  },

  cprd7: {
    type: String,
    default: "Proof of payment for government fees",
  },
  cprd8: {
    type: String,
    default:
      "Digital photo",
  },
  cprd9: {
    type: String,
    default: "Relationship information and sponsorship evaluation questionnaire",
  },
  cprd10: {
    type: String,
    default: "Wedding invitations and photos",
  },
  cprd11: {
    type: String,
    default: "Birth certificates or adoption records for shared children.",
  },
   
  cprd12: {
    type: String,
    default: "Proof of marriage registration with a government authority",
  },
   
   
   ///
    StillNotHeading: {
      type: String,
      default: "Still not Sure?",
    },
    StillNotPara: {
      type: String,
      default:
        "Are you facing challenges in bringing your same-sex spouse or conjugal partner to Canada? Look no further than Brightlight Immigration. With over 12 years of expertise, we specialize in creating robust same-sex sponsorship applications, ensuring your spouse, common-law partner, or conjugal partner can join you in Canada.",
    },
   
   
  },
  {
    timestamps: true,
  }
);

let SpouseInlandSection = mongoose.model(
  "Spouse Inland Page",
  SpouseInlandSchema
);
module.exports = SpouseInlandSection;
