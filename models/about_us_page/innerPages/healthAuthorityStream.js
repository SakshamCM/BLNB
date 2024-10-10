let mongoose = require("mongoose");
let hasSchema = mongoose.Schema(
  {
    Heading: {
      type: String,
      default: "British Columbia Health Authority Stream",
    },
    Description: {
      type: String,
      default:
        "The British Columbia Health Authority Stream is one of the specialized immigration streams within the British Columbia Provincial Nominee Program (BCPNP), operated by the province of British Columbia. This stream aims to attract skilled immigrants who can contribute significantly to the healthcare infrastructure in BC.",
    },

    topSectionNote: {
      type: String,
      default:
        "Note: This stream is different from healthcare priority occupations applying under BCPNP Skilled Worker or International Graduate streams.",
    },

    //
    BenifitsHeading: {
      type: String,
      default: "Benefits of British Columbia Health Authority Stream",
    },

    BenifitsList1: {
      type: String,
      default:
        "<strong>Job Offer:</strong> The job offer can fall under any NOC tier, ranging from 0 to 5. It does not have to be a high-skilled occupation or related to healthcare.",
    },
    BenifitsList2: {
      type: String,
      default:
        "<strong>No Draws:</strong> The BC Health Authority stream operates without draws. All you need to do is meet the eligibility criteria for this program.",
    },
    BenifitsList3: {
      type: String,
      default:
        "<strong>Nomination Priority:</strong> Successful candidates nominated through the BC Health Authority Program receive an invitation to apply for Canadian permanent residence.",
    },
    BenifitsList4: {
      type: String,
      default:
        "<strong>No Express Entry Profile Required:</strong> Unlike other immigration streams, applicants for this program do not need an Express Entry profile to be eligible.",
    },
    BenifitsList5: {
      type: String,
      default:
        "<strong>Accelerated Processing:</strong> While Express Entry is not mandatory, candidates with an active profile may choose to apply through the Express Entry system for faster processing.",
    },
    //

    //
    EligibilityHeading: {
      type: String,
      default: "Eligibility for the British Columbia Health Authority Stream",
    },

    EligibilitySubHead: {
      type: String,
      default:
        "To qualify for this stream, applicants must meet the following requirements:",
    },
    EligibilityList1: {
      type: String,
      default:
        "Hold an indeterminate (no defined end date), full-time job offer in ANY occupation from one of B.C. public health authorities listed below:",
    },
    EligibilityList1NestedList1: {
      type: String,
      default: "Provincial Health Services Authority",
    },
    EligibilityList1NestedList2: {
      type: String,
      default: "First Nations Health Authority",
    },
    EligibilityList1NestedList3: {
      type: String,
      default: "Fraser Health",
    },
    EligibilityList1NestedList4: {
      type: String,
      default: "Interior Health",
    },
    EligibilityList1NestedList5: {
      type: String,
      default: "Island Health",
    },

    EligibilityList1NestedList6: {
      type: String,
      default: "Northern Health",
    },
    EligibilityList1NestedList7: {
      type: String,
      default: "Vancouver Coastal Health",
    },
    EligibilityList1NestedList8: {
      type: String,
      default: "Providence Health Care",
    },

    EligibilityList1Point2: {
      type: String,
      default:
        "Alternatively, possess a letter from a health authority or midwife practice group confirming your role as a physician, nurse practitioner, or midwife in British Columbia.",
    },

    EligibilityList2: {
      type: String,
      default: "Education and Qualifications",
    },
    EligibilityList2NestedList1: {
      type: String,
      default:
        "Satisfy the education, training, experience, and qualification criteria specified by the public health authority.",
    },

    EligibilityList3: {
      type: String,
      default: "Health Authority Support",
    },
    EligibilityList3NestedList1: {
      type: String,
      default:
        "The health authority must provide recommendation and support your application.",
    },

    EligibilityList4: {
      type: String,
      default: "Language",
    },
    EligibilityList4NestedList1: {
      type: String,
      default:
        "If the Job Offer's NOC code is of TEER Category 0 or 1, you do not need language results to be eligible (BCPNP can still ask you to pass a language test at their own discretion).",
    },
    EligibilityList4NestedList2: {
      type: String,
      default:
        "If the Job Offer's NOC code is of TEER Category 2, 3, 4 or 5, you will need to have a Canadian Language Benchmark (CLB) score of at least 4 to be eligible.",
    },

    EligibilityList5: {
      type: String,
      default: "Financial Capability",
    },
    EligibilityList5NestedList1: {
      type: String,
      default:
        "Demonstrate that you can support yourself and your dependents during your stay in British Columbia.",
    },

    ExpEntryOptionHeading: {
      type: String,
      default: "Express Entry BC (EEBC) Option:",
    },

    ExpEntryOptionPara1: {
      type: String,
      default:
        "Applicants who meet the eligibility criteria can also explore the Express Entry BC (EEBC) option for accelerated processing.",
    },
    ExpEntryOptionPara2: {
      type: String,
      default:
        "Please note*** that if your job offer falls within a priority technology occupation, it does not need to be indeterminate.",
    },
    ApplyHeading: {
      type: String,
      default: "How to Apply for BC Health Authority Stream?",
    },
    ApplyList1: {
      type: String,
      default:
        "The BC Health Authority stream accepts new applications at any time.",
    },
    ApplyList2: {
      type: String,
      default:
        "Specify whether you are applying through the Express Entry system or non-Express Entry system.",
    },
    ApplyList3: {
      type: String,
      default:
        "Provide resume, job description, recommendation letter, and BC PNP Employer Declaration Form from one of the health authorities.",
    },
    ApplyList4: {
      type: String,
      default:
        "Upon approval, candidates receive a provincial nomination for permanent residence from BC.",
    },
    ApplyList5: {
      type: String,
      default:
        "Candidates can also request a work permit support letter if their work permit is expiring or if they do not have a work permit at all. This allows them to work in Canada while their permanent residence application is processed.",
    },
    ApplyList6: {
      type: String,
      default:
        "If applying through Express Entry, candidates receive a nomination notification on their IRCC online account. Accepting the nomination boosts their Comprehensive Ranking System (CRS) score by 600 points, and hence guarantees an Invitation to Apply (ITA) for permanent residence.",
    },
    ApplyList7: {
      type: String,
      default:
        "If applying through the non-Express Entry system, candidates must prepare a paper-based application and submit it online.",
    },
    //

    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling BCPNP Health Authority Program. Our approval rate for these programs is nearly 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    StillNotSurePara2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your PR. Start your process now.",
    },
  },
  {
    timeStamps: true,
  }
);

let healthAuthorityStreamSection = mongoose.model(
  "Health Authority Stream Page",
  hasSchema
);
module.exports = healthAuthorityStreamSection;
