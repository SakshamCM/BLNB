let mongoose = require("mongoose");
let spouseOutlandSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default:
        "Outland Spousal and Common-Law Partner Sponsorship",
    },
    description: {
      type: String,
      default:
        "Outland sponsorship provides an opportunity for Canadians and permanent residents to sponsor their spouse or common-law partner for permanent residence in Canada. Outland sponsorship allows foreign nationals residing abroad to be sponsored by their Canadian spouse or partner for permanent resident (PR) status in Canada. Unlike the Inland spousal sponsorship, which requires couples to live together within Canada, the Outland process accommodates situations where partners are separated by geographical boundaries.",
    },


    IsOutlandSponHeading: {
        type: String,
        default: "Is Outland Sponsorship Right for You?",
      },
      IsOutlandSponSubHead: {
        type: String,
        default: "Consider Outland sponsorship if:",
      },
      os1: {
        type: String,
        default: "You cannot apply for spousal sponsorship from within Canada.",
      },
      os2: {
        type: String,
        default: "Your loved one is not legally residing in Canada during the application process.",
      },
      IsOutlandSponSubPara: {
        type: String,
        default: "Even applicants currently in Canada can choose the Outland sponsorship route. It permits travel to and from Canada while the application is underway, making it suitable for those with work or personal commitments that require international mobility.",
      },

      ApprovalProcessHeading: {
        type: String,
        default: "Approval Process",
      },

      ApprovalProcessPara: {
        type: String,
        default: "For the sponsored person to obtain Canadian PR through Outland sponsorship, both the Canadian citizen or permanent resident and the foreign national must receive approval from Immigration, Refugees and Citizenship Canada (IRCC).",
      },
   
   
    eligCritHeading: {
      type: String,
      default: "Eligibility Criteria",
    },
    eligCritSubHead: {
        type: String,
        default: "To sponsor a loved one under the Outland application category, both the sponsor and sponsored person must meet specific requirements:",
      },

    e1: {
      type: String,
      default: "The sponsor must be a Canadian citizen or permanent resident.",
    },

    e2: {
      type: String,
      default: "Both parties must be at least 18 years old.",
    },

    e3: {
      type: String,
      default: "The relationship can fall into one of the following categories:",
    },
    e3Sub1: {
        type: String,
        default: "<strong>Spouse:</strong> Legally married with a valid marriage recognized by the jurisdiction where registered and under Canadian law.",
      },
      e3Sub2: {
        type: String,
        default: "<strong>Common-law:</strong> Cohabiting or having cohabited for at least 12 consecutive months in a marriage-like relationship.",
      },
      e3Sub3: {
        type: String,
        default: "<strong>Conjugal partnership*:</strong> In an ongoing committed relationship for at least 12 months, despite legal constraints preventing physical cohabitation (e.g., immigration barriers or marital status).",
      },

      e4: {
        type: String,
        default: "The sponsor must not have sponsored a spouse in Canada within the five years preceding the application.",
      }, 
      e5: {
        type: String,
        default: "Neither spouse should be incarcerated, charged with a serious offense, or bankrupt.",
      }, 
      eNote: {
        type: String,
        default: "Note: If you are in a conjugal relationship, submit an Outland sponsorship application, as this type of relationship is not eligible under Inland sponsorship.",
      }, 


      HowToApplyOutlSponHeading: {
        type: String,
        default: "How to apply for Outland Sponsorship in Canada?",
      }, 
      HowToApplyOutlSponPara: {
        type: String,
        default: "Outland sponsorship is a specialized application process designed to facilitate the sponsorship of a loved one under Canada’s Family Class immigration program. If you are a Canadian citizen or a permanent resident, this process allows you to sponsor your foreign spouse or partner for permanent residence.",
      }, 
      HowToApplyOutlSponProcHeading: {
        type: String,
        default: "Outland Sponsorship Process:",
      }, 
      osp1: {
        type: String,
        default: "<strong>Eligibility Verification:</strong> Begin by confirming your eligibility as a sponsor. Ensure that you meet the necessary criteria to support your loved one’s immigration application.",
      },
      osp2: {
        type: String,
        default: "<strong>Document Collection: </strong>Gather all relevant supporting documents. These may include proof of your relationship, financial stability, and other required paperwork.",
      },
      osp3: {
        type: String,
        default: "<strong>Form Completion:</strong> Fill out the necessary forms accurately. Pay attention to any country-specific forms that may be applicable based on your spouse or partner’s country of residence.",
      },
      osp4: {
        type: String,
        default: "<strong>Submission:</strong> Submit your completed application package to the appropriate visa office in Canada. Follow the instructions provided in the official guide available on the government website.",
      },
      

      //
      QueSpecConsidHeading: {
      type: String,
      default: "Quebec-Specific Considerations:",
    },
    qsc1: {
        type: String,
        default: "<strong>Sponsorship in Quebec:</strong> If you reside in the province of Quebec, additional requirements apply. Quebec sponsors must commit to a financial undertaking to support their sponsored family members. The duration of this commitment varies based on the relationship type. For spousal sponsorship, the sponsor commits to financially supporting their spouse, common-law partner, or conjugal partner for three years.",
      },
      qsc2: {
        type: String,
        default: "<strong>Processing Time:</strong> Outland sponsorship applications in Quebec may take up to 24 months to process.",
      },


      ProcTimeHeading: {
      type: String,
      default: "Processing Timeline:",
    },
    ProcTimePara1: {
        type: String,
        default: "<strong>IRCC’s Targeted Processing Period:</strong> Generally, spousal sponsorships are processed within approximately 12-14 months. This timeline includes the time required for biometrics collection and the review of both the sponsor’s eligibility and the sponsored person’s application for permanent residence.",
      },
    pt1: {
        type: String,
        default: "Acknowledgment of Receipt (AOR): After submitting your application, you will receive an acknowledgment of receipt from IRCC.",
      },
      pt2: {
        type: String,
        default: "Eligibility Assessment: IRCC assesses the sponsor’s eligibility, which typically takes 4-5 months.",
      },
      pt3: {
        type: String,
        default: "Evaluation of Permanent Residence Application: The final step involves evaluating the sponsored person’s application for permanent residence, which may take approximately 6-8 months.",
      },
      pt4: {
        type: String,
        default: "Quebec-Specific Processing: As mentioned earlier, Quebec-based sponsorships may take up to 10-12 months to process.",
      },
      ptNote: {
        type: String,
        default: "Remember that these timelines are approximate and subject to change based on individual circumstances and processing volumes.",
      },

      DualIntVisaOutSpouHeading: {
      type: String,
      default:
        "Dual Intent Visa for Outland Spouse",
    },
    DualIntVisaOutSpouPara: {
        type: String,
        default:
          "Navigating the waiting period during spousal sponsorship applications can be challenging for newly married couples. These applications often take a considerable amount of time to process. However, there is an alternative: the Dual Intent Visitor Visa. In most cases, this visa is approved within 30 days and boasts a remarkable success rate of over 90%.",
      },
    WhatisDualIntVisaHeading: {
      type: String,
      default: "What is a Dual Intent Visa?",
    },
    wd1: {
      type: String,
      default:
        "The concept of Dual Intent involves simultaneously pursuing two pathways: applying for permanent residence and seeking temporary status. Essentially, it demonstrates an intention to both reside in Canada permanently and stay temporarily. For temporary residents, this can be a complex process. They must convincingly express their desire to leave Canada at the end of their authorized stay while also aiming to become permanent residents.",
    },

    wd2: {
      type: String,
      default: "At Brightlight Immigration, we understand that correctly demonstrating Dual Intent can be challenging. With over 12 years of experience, we strive to simplify this process for you.",
    },
   

    SpousesPartnersHeading: {
        type: String,
        default: "Spouses and Partners",
      },
      SpousesPartnerPara1: {
        type: String,
        default: "When assessing foreign nationals sponsored for permanent residence as spouses or common-law partners, officers take individual circumstances into account. Factors considered include:",
      },

      sp1: {
        type: String,
        default: "Approval status of the sponsorship application",
      },
      sp2: {
        type: String,
        default: "Stage one approval for permanent residence",
      },
      sp3: {
        type: String,
        default: "Retention of ties in the applicant’s home country",
      },
      sp4: {
        type: String,
        default: "Contingency plans in case the permanent residence application is refused",
      },
      spousesPartnerPara2: {
        type: String,
        default: "If a spouse or partner can convincingly demonstrate that they will leave Canada at the end of their authorized stay, even if their permanent residence application is rejected, officers may issue a temporary resident visa (TRV).",
      },
    
  },
  {
    timestamps: true,
  }
);

let spouseOutlandSection = mongoose.model(
  "spouse Outland Page",
  spouseOutlandSchema
);
module.exports =spouseOutlandSection;
