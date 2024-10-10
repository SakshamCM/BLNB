let mongoose = require("mongoose");
let pnpSchema = mongoose.Schema(
  {
    Heading: {
      type: String,
      default: "Provincial Nominee Program",
    },
    Description1: {
      type: String,
      default:
        "While the federal Express Entry system remains a popular pathway to Canadian permanent residence, the Provincial Nominee Program (PNP) offers a unique and often faster track for individuals interested in settling in a specific province or territory.",
    },
    Description2: {
      type: String,
      default:
        "Unlike the federal Express Entry, which considers applicants based on a standardized set of criteria, PNPs provide a more personalized approach to selecting immigrants. Each province and territory has its own set of PNP streams, each tailored to meet their specific needs. This flexibility allows skilled workers, entrepreneurs, and investors to find a PNP stream that aligns with their qualifications and aspirations.",
    },
    Description3: {
      type: String,
      default:
        "The PNP's diverse streams cater to a wide range of skills and experiences. For skilled workers, various streams prioritize professionals with specific occupations, such as healthcare workers, engineers, and IT experts. Entrepreneurs can explore PNP streams that support business creation and investment opportunities. And for those seeking a more direct path to Canadian residency, the PNP offers streams for international graduates and individuals with family ties to Canada.",
    },
    bcpnpHeading: {
      type: String,
      default: "BC Provincial Nominee Program (BC PNP)",
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
      default: "How to apply for PNP?",
    },

    ApplyList1: {
      type: String,
      default:
        "Firstly, choose the province or territory you are interested in living in. Each province and territory has its own set of PNP programs and eligibility criteria, so it is important to research your options carefully. Or, for a stress free solution, let us handle your case for you.",
    },
    ApplyList2: {
      type: String,
      default:
        "Submit all of the required documents for that particular province.",
    },
    ApplyList3: {
      type: String,
      default:
        "You may be required to attend an interview as part of your application process.",
    },
    ApplyList4: {
      type: String,
      default:
        "If your application is successful, the province or territory will nominate you for permanent residence.",
    },

    RefusalHeading: {
      type: String,
      default: "Common Reasons for Refusals in PNP",
    },

    RefusalList1: {
      type: String,
      default: "You shared incorrect information.",
    },
    RefusalList2: {
      type: String,
      default:
        "You couldn’t meet the minimum qualifications for the PNP program you are applying to including having the required skills, experience, education, and language proficiency.",
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

    EligibilityList1: {
      type: String,
      default:
        "You must be between 18 and 67 years old and have a high school diploma or equivalent, or post-secondary education that is relevant to the job you intend to work in Canada.",
    },
    EligibilityList2: {
      type: String,
      default:
        "You must prove your proficiency in English or French, as required by the province you are applying to.",
    },
    EligibilityList3: {
      type: String,
      default:
        "You should have the skills and experience required for the job you intend to work in Canada.",
    },
    EligibilityList4: {
      type: String,
      default:
        "If you are applying through an Express Entry-linked PNP, you should also meet the eligibility criteria for the Express Entry program you are applying under (Federal Skilled Worker Program, Federal Skilled Trades Program, or Canadian Experience Class).",
    },

    AdditionalReqHeading: {
      type: String,
      default: "Additional Eligibility Requirements for Specific PNP Programs",
    },

    AdditionalReqDesc: {
      type: String,
      default:
        "In addition to the general eligibility requirements, each province has its own set of eligibility criteria for specific PNP programs. These criteria may include:",
    },

    AdditonalReqList1: {
      type: String,
      default:
        "Your experience in an occupation that is in-demand in the province or territory.",
    },
    AdditonalReqList2: {
      type: String,
      default:
        "Have a job offer from a Canadian employer in the province or territory.",
    },
    AdditonalReqList3: {
      type: String,
      default:
        "Show your family connections if you have family members living in the province or territory.",
    },

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
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
    },
  },
  {
    timeStamps: true,
  }
);

let PNPPageSection = mongoose.model("PNP Page", pnpSchema);
module.exports = PNPPageSection;
