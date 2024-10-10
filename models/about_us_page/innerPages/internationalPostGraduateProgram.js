let mongoose = require("mongoose");
let ipgpSchema = mongoose.Schema(
  {
    Heading: {
      type: String,
      default:
        "British Columbia Provincial Nominee Program BC PNP International Post- Graduate (IPG) Stream",
    },
    Description: {
      type: String,
      default:
        "The British Columbia International Post-Graduate stream is part of the British Columbia Provincial Nominee Program (BC PNP), which is administered by the province of British Columbia. This stream focuses on nominating immigrants who have recently graduated from an eligible British Columbia institution at the post-graduate level.",
    },

    //
    BenifitsHeading: {
      type: String,
      default: "Benefits of BCPNP International Post-Graduate Stream",
    },

    BenifitsList1: {
      type: String,
      default:
        "No Job Offer Required: Candidates do not need a job offer to apply.",
    },
    BenifitsList2: {
      type: String,
      default:
        "Nomination Priority: Successful candidates receive an invitation to apply for Canadian permanent residence.",
    },
    BenifitsList3: {
      type: String,
      default:
        "No Express Entry Profile Required: No need for an Express Entry profile.",
    },
    BenifitsList4: {
      type: String,
      default:
        "Accelerated Processing: Option to apply through Express Entry for faster processing.",
    },

    //
    EligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for International Post-Graduate Stream",
    },

    EligibilitySubHead: {
      type: String,
      default: "First you must be eligible with BCPNP Skilled Worker Program",
    },
    EligibilityList1: {
      type: String,
      default: "1. Educational Qualifications",
    },
    EligibilityList1NestedList1: {
      type: String,
      default:
        "Must hold a master’s or doctoral (PhD) degree obtained within the past three years.",
    },
    EligibilityList1NestedList2: {
      type: String,
      default:
        "Degree must be from an eligible program at a post-secondary institution in British Columbia.",
    },
    EligibilityList1NestedList3: {
      type: String,
      default:
        "Doctoral degrees are accepted from any field of study at a public BC institution.",
    },
    EligibilityList1NestedList4: {
      type: String,
      default:
        "Master’s degrees must be in natural, applied, or health sciences fields.",
    },
    EligibilityList1NestedList5: {
      type: String,
      default: "Distance education programs are not eligible.",
    },

    EligibilityList2: {
      type: String,
      default: "2. Intent to Live and Work in British Columbia",
    },
    EligibilityList2NestedList1: {
      type: String,
      default:
        "Applicants must demonstrate their commitment to residing and working in British Columbia.",
    },
    EligibilityList2NestedList2: {
      type: String,
      default: "Evidence of this intent can include",
    },
    EligibilityList2NestedList2NestedList1: {
      type: String,
      default: "Previous or current periods of residence in BC.",
    },
    EligibilityList2NestedList2NestedList2: {
      type: String,
      default: "Connections to BC through work, study, or family.",
    },
    EligibilityList2NestedList2NestedList3: {
      type: String,
      default:
        "Actions taken to permanently settle in BC, such as job search efforts or finding accommodation.",
    },
    EligibilityList2NestedList2NestedList4: {
      type: String,
      default: "Community involvement.",
    },
    EligibilityList2NestedList2NestedList5: {
      type: String,
      default: "Financial capacity to support oneself in BC.",
    },
    EligibilityList2NestedList2NestedList6: {
      type: String,
      default:
        "A plan to obtain or maintain legal authorization to work in BC.",
    },

    EligibilityList3: {
      type: String,
      default: "3. Connection to British Columbia",
    },
    EligibilityList3NestedList1: {
      type: String,
      default:
        "Candidates must have completed a master’s or doctorate degree from one of BC’s eligible institutions in one of BC’s eligible programs.",
    },
    EligibilityList3Note: {
      type: String,
      default:
        "Note: After graduating from an IPG eligible program, candidates are expected to continue residing in BC. Exceptions may be considered in extenuating circumstances where leaving BC was necessary after graduation.",
    },
    EligibilityList3Remember: {
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
        "To be eligible for the International Post Graduates (IG) stream, you must qualify under one of the three federal programs. To understand the eligibility criteria for these programs, click on either the:",
    },
    EmpRequirementsHeading: {
      type: String,
      default: "Employer Requirements",
    },

    EmpRequirementsDescription: {
      type: String,
      default:
        "You do not need a job offer from an employer to apply to this stream.",
    },

    ApplicationHeading: {
      type: String,
      default:
        "Application Procedure for British Columbia Provincial Nominee Program BC PNP International Post-Graduate (IPG) Stream",
    },
    ApplyPoint1: {
      type: String,
      default: "Eligibility and Application Submission:",
    },
    ApplyPoint1List1: {
      type: String,
      default: "The stream is open to new applications at any time.",
    },
    ApplyPoint1List2: {
      type: String,
      default:
        "Eligible candidates must submit an application through BC’s online immigration portal.",
    },
    ApplyPoint1List3: {
      type: String,
      default:
        "Candidates must specify whether they are applying through the accelerated Express Entry system or the regular Skills Immigration system.",
    },
    ApplyPoint1List4: {
      type: String,
      default:
        "The BC International Post-Graduate stream charges a $1,475 CAD application fee per applicant.",
    },

    ApplyPoint2: {
      type: String,
      default: "Approval and Provincial Nomination:",
    },
    ApplyPoint2List1: {
      type: String,
      default: "The stream is open to new applications at any time.",
    },
    ApplyPoint2List2: {
      type: String,
      default:
        "If the application is approved, the candidate receives a provincial nomination for permanent residence from BC.",
    },
    ApplyPoint2List3: {
      type: String,
      default:
        "Candidates can also request a letter of support for a temporary work permit. This allows them to work in Canada while their permanent residence application is processed.",
    },
    ApplyPoint2List4: {
      type: String,
      default:
        "Applying for a work permit with provincial support represents a separate application to IRCC.",
    },

    ApplyPoint3: {
      type: String,
      default: "Express Entry Applicants:",
    },
    ApplyPoint3List1: {
      type: String,
      default:
        "If the applicant indicated Express Entry on their BC application:",
    },
    ApplyPoint3List1Nested1: {
      type: String,
      default:
        "They receive a nomination notification on their IRCC online account.",
    },
    ApplyPoint3List1Nested2: {
      type: String,
      default:
        "Accepting the provincial nomination increases their Comprehensive Ranking System (CRS) score by 600 points.",
    },
    ApplyPoint3List1Nested3: {
      type: String,
      default:
        "This virtually guarantees an Invitation to Apply (ITA) for permanent residence in the next Express Entry draw.",
    },
    ApplyPoint3List1Nested4: {
      type: String,
      default:
        "After receiving an ITA, the applicant must submit an official application for Canadian permanent residence within the designated timeframe.",
    },
    ApplyPoint3List1Nested5: {
      type: String,
      default:
        "Express Entry applications are generally processed within six months.",
    },

    ApplyPoint4: {
      type: String,
      default: "Skills Immigration Applicants:",
    },
    ApplyPoint4List1: {
      type: String,
      default:
        "If the applicant indicated the regular non-Express Entry Skills Immigration system on their BC profile, they have six months to submit an online application for permanent residence.",
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
    whyChooseHeading: {
      type: String,
      default: "Why Choose Us?",
    },
    whyChoosePoint1: {
      type: String,
      default:
        "<strong>Experienced Team:</strong> Over a decade of experience in handling BCPNP applications with a high success rate.",
    },
    whyChoosePoint2: {
      type: String,
      default:
        "<strong>Tailored Approach:</strong> Personalized services and strategies based on your specific case.",
    },
    whyChoosePoint3: {
      type: String,
      default:
        "<strong>High Success Rate:</strong> Proven track record using case law and precedents for positive results.",
    },
    whyChoosePoint4: {
      type: String,
      default:
        "<strong>Comprehensive Support:</strong> Assistance from the start of the application process to obtaining your PR.",
    },
  },
  {
    timeStamps: true,
  }
);

let internationalPostGraduateProgramSection = mongoose.model(
  "International Post Graduate Program Page",
  ipgpSchema
);
module.exports = internationalPostGraduateProgramSection;
