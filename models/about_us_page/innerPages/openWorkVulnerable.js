let mongoose = require("mongoose");
let openWorkVulnerableSchema = mongoose.Schema(
  {
    OpenWorkVulHeading: {
      type: String,
      default: "Open Work Permit for Vulnerable Workers",
    },
    OpenWorkVulPara: {
      type: String,
      default:
        "Every employer in Canada is entitled to a safe and healthy work environment. Those being exploited at their workplaces can acquire an open work permit for vulnerable workers.",
    },
   

    //
    BenifitsHeading: {
        type: String,
        default: "Benefits of Open Work Permit for Vulnerable Workers",
      },
 
      BenifitsList1: {
        type: String,
        default: "Flexibility: Work with nearly any employer across Canada.",
      }, 
      BenifitsList2: {
        type: String,
        default: "Remedy for Abusive Environments: Provides a way to flee an abusive work environment and seek another job.",
      }, 
      BenifitsList3: {
        type: String,
        default: "No Application Fee: There is no fee for applying.",
      }, 
      BenifitsList4: {
        type: String,
        default: "Temporary Permit: Allows enough time to secure alternative employment and apply for a new work permit.",
      }, 
    //

        //
        EligibilityHeading: {
            type: String,
            default: "Eligibility for Open Work Permit for Vulnerable Workers",
          },

          EligibilityList1: {
            type: String,
            default: "You are inside Canada and hold a specific employer's work permit, such as a Labour Market Impact Assessment (LMIA)-based work permit or under the Seasonal Agricultural Worker Program.",
          }, 
          EligibilityList2: {
            type: String,
            default: "You are facing or at risk of job-related abuse in Canada.",
          }, 
          HowIRCCHead: {
            type: String,
            default: "How IRCC Defines Abuse",
          }, 
          HowIRCCSubHead1: {
            type: String,
            default: "Any behavior that scares, controls, or isolates you could be abuse.",
          }, 
          HowIRCCSubHead2: {
            type: String,
            default: "Abuse can be physical, sexual, financial, or mental and can include:",
          }, 
          HowIRCCList1: {
            type: String,
            default: "Physical abuse, including assault and forcible confinement.",
          }, 
          HowIRCCList2: {
            type: String,
            default: "Sexual abuse, including sexual contact without consent.",
          }, 

          HowIRCCList3: {
            type: String,
            default: "Psychological abuse, including threats and intimidation.",
          },
          HowIRCCList4: {
            type: String,
            default: "Financial abuse, including fraud and extortion.",
          },
          HowIRCCList5: {
            type: String,
            default: "Reprisals, such as disciplinary measures, demotions, dismissals, or threats of such actions.",
          },

          TypesEvidenceHeading: {
            type: String,
            default: "You should also include as much evidence as you can with your application.",
          }, 
          TypesEvidenceSubHead: {
            type: String,
            default: "Evidence could include:",
          }, 
          TypesEvidenceList1: {
            type: String,
            default: "Letter, statement, or report from an abuse support organization, medical doctor, or health care professional",
          }, 
          TypesEvidenceList2: {
            type: String,
            default: "Sworn statement (affidavit) from yourself",
          }, 
          TypesEvidenceList3: {
            type: String,
            default: "Copy of an official report to an enforcement agency (e.g., police or Canada Border Services Agency)",
          }, 
          TypesEvidenceList4: {
            type: String,
            default: "Official complaint to a provincial government enforcement agency (e.g., employment standards branch)",
          }, 
          TypesEvidenceList5: {
            type: String,
            default: "Victim impact statement",
          }, 
          TypesEvidenceList6: {
            type: String,
            default: "Email or text messages",
          }, 
          TypesEvidenceList7: {
            type: String,
            default: "Pay stubs or bank statements",
          }, 
          TypesEvidenceList8: {
            type: String,
            default: "Witness testimonys",
          }, 
          TypesEvidenceList9: {
            type: String,
            default: "Photos showing injuries or working conditions",
          }, 

          TypesEvidencePara: {
            type: String,
            default: "The list above includes examples of evidence. You may have other types of evidence.",
          }, 
          //

       

    HowApplyHeading: {
      type: String,
      default: "How to Apply",
    },

    ha1: {
      type: String,
      default:
        "Collect extensive documents to provide evidence to IRCC.",
    },
    ha2: {
      type: String,
      default:
        "Draft a mandatory letter describing the abuse, along with a sworn statement by the applicant.",
    },
    ha3: {
      type: String,
      default:
        "Apply to IRCC and wait for processing, usually within a week.",
    },
    ha4: {
      type: String,
      default:
        "The IRCC officer may request additional documents or, in rare cases, interview the applicant.",
    },
    ha5: {
        type: String,
        default:
          "Once approved, IRCC sends a work permit by mail, which is valid for 1 year.",
      },

    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can certainly assist you if you have a job offer. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
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

let openWorkVulnerableSection = mongoose.model(
  "Open Work Permit for Vulnerable Workers Section",
  openWorkVulnerableSchema
);
module.exports = openWorkVulnerableSection;
