let mongoose = require("mongoose");
let igpSchema = mongoose.Schema(
  {
    Heading: {
      type: String,
      default:
        "British Columbia Provincial Nominee Program International Graduate stream",
    },
    Description: {
      type: String,
      default:
        "The British Columbia International Graduate stream is one of the immigration pathways offered within the British Columbia Provincial Nominee Program (BC PNP). Operated by the province of British Columbia, the BC PNP aims to nominate skilled immigrants for permanent residence in Canada. The BC International Graduate stream prioritizes candidates who have completed post-secondary education in Canada and have received an offer for skilled employment.",
    },

    //
    BenifitsHeading: {
      type: String,
      default: "Benefits of BCPNP International Graduate Stream",
    },

    BenifitsList1: {
      type: String,
      default:
        "Nomination Priority: Successful candidates receive an invitation to apply for Canadian permanent residence.",
    },
    BenifitsList2: {
      type: String,
      default:
        "No Express Entry Profile Required: No need for an Express Entry profile.",
    },
    BenifitsList3: {
      type: String,
      default:
        "Accelerated Processing: Option to apply through Express Entry for faster processing.",
    },

    //
    EligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for International Graduate Stream",
    },

    EligibilitySubHead: {
      type: String,
      default: "First you must be eligible with BCPNP Skilled Worker Program",
    },
    EligibilityList1: {
      type: String,
      default: "1. Job Offer",
    },
    EligibilityList1NestedList1: {
      type: String,
      default:
        "You must hold an indeterminate, full-time job offer from an eligible BC employer.",
    },
    EligibilityList1NestedList2: {
      type: String,
      default:
        "The job offer should fall under NOC TEER Categories 1, 2, or 3.",
    },
    EligibilityList1NestedList3: {
      type: String,
      default:
        "If the job offer is in an eligible tech occupation or falls under NOC 41200 (university professors and lecturers), it does not need to be indeterminate.",
    },
    EligibilityList1NestedList4: {
      type: String,
      default:
        "The wage must be at market rate and comparable to similar roles in BC.",
    },
    EligibilityList1NestedList5: {
      type: String,
      default:
        "Additional qualification requirements may apply based on the NOC code of the job offer.",
    },

    EligibilityList2: {
      type: String,
      default: "2. Education",
    },
    EligibilityList2NestedList1: {
      type: String,
      default:
        "You need a degree, diploma, or certificate from an eligible Canadian post-secondary institution.",
    },
    EligibilityList2NestedList2: {
      type: String,
      default:
        "The degree or diploma program completion date should be within the last three years from the date on your official transcript.",
    },
    EligibilityList2NestedList3: {
      type: String,
      default:
        "Undergraduate or graduate degrees must be from authorized institutions that can grant degrees.",
    },
    EligibilityList2NestedList4: {
      type: String,
      default:
        "Diplomas and certificates must be from public post-secondary institutions in Canada (private institutions are not eligible).",
    },
    EligibilityList2NestedList5: {
      type: String,
      default:
        "Language training and programs shorter than 8 months (excluding internships and co-op terms) do not qualify.",
    },

    EligibilityList3: {
      type: String,
      default: "3. Language Proficiency",
    },
    EligibilityList3NestedList1: {
      type: String,
      default:
        "If the job offer’s NOC code is TEER Category 1, language results are not mandatory for eligibility (although BCPNP may still request a language test).",
    },
    EligibilityList3NestedList2: {
      type: String,
      default:
        "For TEER Categories 2 or 3, you need a Canadian Language Benchmark (CLB) score of at least 4.",
    },

    EligibilityList4: {
      type: String,
      default: "4. Minimum Income Requirements",
    },
    EligibilityList4NestedList1: {
      type: String,
      default:
        "You must demonstrate that your gross annual wage in the job offer meets minimum income requirements.",
    },
    EligibilityList4NestedList2: {
      type: String,
      default:
        "These requirements vary based on your location of residence in BC and the number of dependents.",
    },
    EligibilityList4Remember: {
      type: String,
      default:
        "Remember that meeting these eligibility criteria does not guarantee an invitation to apply; invitations are based on threshold scores during draws. If your score meets or exceeds the threshold, you’ll receive an invitation to apply from the BCPNP.",
    },

    ReqExpressHeading: {
      type: String,
      default: "Requirements for the Express Entry Category",
    },
    ReqExpressDesc: {
      type: String,
      default:
        "To be eligible for the International Graduates (IG) stream, you must qualify under one of the three federal programs. To understand the eligibility criteria for these programs, click on either the:",
    },
    EmpRequirementsHeading: {
      type: String,
      default: "Employer’s Eligibility Requirements",
    },

    EmpRequirementsDescription: {
      type: String,
      default:
        "As a British Columbia employer participating in the BC Skilled Worker program, ensure you:",
    },
    EmpRequirementsList1: {
      type: String,
      default: "Established in B.C.",
    },
    EmpRequirementsList2: {
      type: String,
      default: "Comply with domestic labor market recruitment.",
    },
    EmpRequirementsList3: {
      type: String,
      default: "At least 1 year in operation in BC.",
    },
    EmpRequirementsList4: {
      type: String,
      default:
        "Minimum full-time employees: Metro Vancouver (5), Outside Metro Vancouver (3).",
    },
    EmpRequirementsList5: {
      type: String,
      default: "Offer full-time, permanent employment.",
    },
    EmpRequirementsList6: {
      type: String,
      default: "Align wages with industry standards.",
    },
    EmpRequirementsList7: {
      type: String,
      default: "Submit required documentation and forms.",
    },
    EmpRequirementsList8: {
      type: String,
      default: "Adhere to all relevant laws and regulations.",
    },

    ApplicationHeading: {
      type: String,
      default:
        "Application Process for British Columbia Provincial Nominee Program International Graduate Stream application",
    },
    ApplyPoint1: {
      type: String,
      default: "Expression of Interest (EOI) System:",
    },
    ApplyPoint1List1: {
      type: String,
      default:
        "The British Columbia International Graduate stream operates on an Expression of Interest (EOI) system.",
    },
    ApplyPoint1List2: {
      type: String,
      default:
        "Candidates who meet the minimum stream requirements can register a profile using the BC’s online immigration portal.",
    },

    ApplyPoint2: {
      type: String,
      default: "Profile Registration:",
    },
    ApplyPoint2List1: {
      type: String,
      default:
        "Candidates must indicate on their BC profile whether they are applying through:",
    },
    ApplyPoint2List1Nested1: {
      type: String,
      default: "The accelerated Express Entry system, or",
    },
    ApplyPoint2List1Nested2: {
      type: String,
      default: "The regular non- Express Entry Skills Immigration system.",
    },
    ApplyPoint2List2: {
      type: String,
      default:
        "Once the profile has been submitted, candidates will be assigned a score and ranked against one another using the BC Skills Immigration Ranking System.",
    },

    ApplyPoint3: {
      type: String,
      default: "Invitation to Apply (ITA):",
    },
    ApplyPoint3List1: {
      type: String,
      default:
        "The highest ranking candidates will be invited to apply to the stream in one of the stream’s periodic intakes.",
    },
    ApplyPoint3List2: {
      type: String,
      default:
        "Candidates must submit a complete application to the stream within 30 days from when they receive the invitation to apply.",
    },

    ApplyPoint4: {
      type: String,
      default: "Application Fee:",
    },
    ApplyPoint4List1: {
      type: String,
      default:
        "The BC International Graduate stream charges a $1,475 CAD application fee per applicant.",
    },

    ApplyPoint5: {
      type: String,
      default: "Provincial Nomination:",
    },
    ApplyPoint5List1: {
      type: String,
      default:
        "If the application is approved, the candidate will be issued a provincial nomination for permanent residence from BC.",
    },
    ApplyPoint5List2: {
      type: String,
      default:
        "Candidates can also request to receive a letter of support for a temporary work permit, allowing them to begin working in Canada while their application for permanent residence is processed.",
    },
    ApplyPoint5List3: {
      type: String,
      default:
        "Applying for a work permit with a letter of support from a province represents a separate application to IRCC.",
    },

    ApplyPoint6: {
      type: String,
      default: "Express Entry Stream:",
    },
    ApplyPoint6List1: {
      type: String,
      default:
        "If the applicant indicated on their BC profile that they were applying to the BC Skilled Worker stream through Express Entry, they will receive a notification of nomination on their IRCC online account.",
    },
    ApplyPoint6List2: {
      type: String,
      default:
        "After accepting the provincial nomination, the applicant’s Comprehensive Ranking System (CRS) score will increase by 600 points, virtually guaranteeing they will receive an Invitation to Apply (ITA) for permanent residence in the next Express Entry draw.",
    },
    ApplyPoint6List3: {
      type: String,
      default:
        "After receiving an ITA, the applicant must prepare and submit an official application for Canadian permanent residence within the designated timeframe. Applications for permanent residence submitted through Express Entry are generally processed within six months.",
    },

    ApplyPoint7: {
      type: String,
      default: "Regular Skills Immigration System:",
    },
    ApplyPoint7List1: {
      type: String,
      default:
        "If the applicant indicated on their BC profile that they were applying to the BC International Graduate stream through the regular Skills Immigration system, the applicant has six months to submit an official application for permanent residence online.",
    },

    //

    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "Contact Brightlight Immigration to assess your profile and start your journey towards Canadian permanent residence. With a high approval rate and a tailored approach, we handle BCPNP International Post-Graduate Stream cases with expertise.",
    },
    StillNotSurePara2: {
      type: String,
      default: "",
    },
  },
  {
    timeStamps: true,
  }
);

let internationalGraduateProgramSection = mongoose.model(
  "International Graduate Program Page",
  igpSchema
);
module.exports = internationalGraduateProgramSection;
