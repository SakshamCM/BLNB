let mongoose = require("mongoose");
let bcpnpSchema = mongoose.Schema(
  {
    Heading: {
      type: String,
      default: "British Columbia Provincial Nominee Program (BC PNP)",
    },
    Description1: {
      type: String,
      default:
        "British Columbia (BC) is a beautiful province in Canada with stunning scenery, exciting cities, and lots of job opportunities. If you want to move to BC, the BC Provincial Nominee Program (BCPNP) can help you make it happen.",
    },
    Description2: {
      type: String,
      default:
        "The British Columbia Provincial Nominee Program (BC PNP) is an economic immigration program that allows British Columbia to select skilled workers, business people, and international graduates who will contribute to the province's economy. If you are nominated by BC PNP, you and your family can apply to IRCC for permanent residence in Canada.",
    },
    fiveStreamsHeading: {
      type: String,
      default:
        "There are five streams under British Columbia Provincial Nominee Program (BC PNP):",
    },
    fiveStreamsNote: {
      type: String,
      default:
        "Note: BCPNP issues targeted invitations to apply for select occupations called priority occupations.",
    },

    //
    ApplyHeading: {
      type: String,
      default: "How to Apply for BCPNP?",
    },

    ApplyList1: {
      type: String,
      default:
        "Create an online profile and provide information about your skills, experience, education, and work experience. Or, for a stress-free solution,",
    },
    ApplyList2: {
      type: String,
      default:
        "Submit an expression of interest (EOI) in the program and rank your choices of streams.",
    },
    ApplyList3: {
      type: String,
      default:
        "Complete and submit a detailed application package, including all the relevant and supporting documents.",
    },
    ApplyList4: {
      type: String,
      default:
        "Once your application is approved, you will be nominated by B.C. and can apply for permanent residence to IRCC.",
    },

    RefusalHeading: {
      type: String,
      default: "Common Reasons for Refusals in BCPNP",
    },

    RefusalList1: {
      type: String,
      default: "You shared incorrect information.",
    },
    RefusalList2: {
      type: String,
      default:
        "You couldn’t meet the minimum qualifications for BC PNP including having the required skills, experience, education, and language proficiency.",
    },
    RefusalList3: {
      type: String,
      default: "Your occupation is not in demand.",
    },
    RefusalList4: {
      type: String,
      default:
        "You couldn’t demonstrate your family ties to that particular province.",
    },

    //
    EligibilityHeading: {
      type: String,
      default:
        "Eligibility criteria for British Columbia Provincial Nominee Program (BC PNP)",
    },

    EligibilitySubHead: {
      type: String,
      default: "Candidate’s Criteria",
    },
    EligibilityReviewLine: {
      type: String,
      default:
        "Please review the eligibility criteria for each stream, as it varies from one stream to another.",
    },
    EligibilityCriteriaHeading: {
      type: String,
      default: "Eligibility Criteria for Employer Supporting BCPNP Application",
    },
    EligibilityList1: {
      type: String,
      default: "Employer Eligibility Criteria:",
    },
    EligibilityList1NestedList1: {
      type: String,
      default: "Employer must be established in BC with a physical presence.",
    },
    EligibilityList1NestedList2: {
      type: String,
      default: "Business structures accepted:",
    },
    EligibilityList1NestedList2Nested1: {
      type: String,
      default: "Incorporated in B.C. or extra-provincially registered.",
    },
    EligibilityList1NestedList2Nested2: {
      type: String,
      default:
        "Registered as a general, limited, or limited liability partnership in B.C.",
    },
    EligibilityList1NestedList3: {
      type: String,
      default:
        "Accepts applications from public sector or non-profit organizations in B.C., including:",
    },
    EligibilityList1NestedList3Nested1: {
      type: String,
      default: "Health authorities and agencies.",
    },
    EligibilityList1NestedList3Nested2: {
      type: String,
      default: "Public post-secondary education institutions.",
    },
    EligibilityList1NestedList3Nested3: {
      type: String,
      default: "Public school districts.",
    },
    EligibilityList1NestedList3Nested4: {
      type: String,
      default: "Accredited private non-profit post-secondary institutions.",
    },
    EligibilityList1NestedList3Nested5: {
      type: String,
      default: "Research institutions supported by government.",
    },
    EligibilityList1NestedList3Nested6: {
      type: String,
      default: "Government organizations and agencies.",
    },
    EligibilityList1NestedList3Nested7: {
      type: String,
      default: "Registered non-profit groups.",
    },

    EligibilityList2: {
      type: String,
      default: "Operational Requirements:",
    },
    EligibilityList2NestedList1: {
      type: String,
      default: "Must have a valid municipal business licence.",
    },
    EligibilityList2NestedList2: {
      type: String,
      default:
        "Must have operated in B.C. for at least one year (two years for BC Entry Level and Semi-Skilled Worker Stream).",
    },
    EligibilityList2NestedList3: {
      type: String,
      default: "Minimum employee requirements:",
    },
    EligibilityList2NestedList3Nested1: {
      type: String,
      default: "Metro Vancouver: 5 full-time employees.",
    },
    EligibilityList2NestedList3Nested2: {
      type: String,
      default: "Outside Metro Vancouver: 3 full-time employees.",
    },

    EligibilityList3: {
      type: String,
      default: "Compliance and Legal Considerations:",
    },
    EligibilityList3NestedList1: {
      type: String,
      default: "Application may be refused if employer or owner/director:",
    },
    EligibilityList3NestedList1Nested1: {
      type: String,
      default: "Received penalties or fines within past two years.",
    },
    EligibilityList3NestedList1Nested2: {
      type: String,
      default:
        "Under investigation or charged with criminal offence related to immigration or business operation.",
    },
    EligibilityList3NestedList2: {
      type: String,
      default: "Genuine recruitment efforts must be demonstrated.",
    },

    EligibilityList4: {
      type: String,
      default: "Disqualifications:",
    },
    EligibilityList4NestedList1: {
      type: String,
      default:
        "Employers involved in certain businesses (e.g., pornographic products, employment agencies).",
    },
    EligibilityList4NestedList2: {
      type: String,
      default: "Businesses bringing BC PNP or BC government into disrepute.",
    },

    EligibilityList5: {
      type: String,
      default: "Company Ownership Restrictions:",
    },
    EligibilityList5NestedList1: {
      type: String,
      default:
        "Applicant and family members must not have held more than 10% ownership in the BC company in past 5 years.",
    },
    EligibilityList5NestedList2: {
      type: String,
      default:
        "Family members include spouse, parents, siblings, children, and others.",
    },

    EligibilityList6: {
      type: String,
      default: "Discretionary Consideration:",
    },
    EligibilityList6NestedList1: {
      type: String,
      default:
        "BC PNP may consider applications not meeting minimum requirements based on various factors like business structure, length of operation, and employee count.",
    },
    //

    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have got approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    StillNotSurePara2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa.",
    },
  },
  {
    timeStamps: true,
  }
);

let bcPNPPageSection = mongoose.model("BC - PNP Page", bcpnpSchema);
module.exports = bcPNPPageSection;
