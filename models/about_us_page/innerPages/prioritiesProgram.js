let mongoose = require("mongoose");
let prioritiesProgSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default:
        "British Columbia Provincial Nominee Program Targeted Draws for Program Priorities Occupations",
    },
    description: {
      type: String,
      default:
        "British Columbia has a significant demand in essential sectors of the care economy, including healthcare, childcare, and veterinary care, as well as in the construction and technology sectors",
    },
    benefitsHeading: {
      type: String,
      default: "Benefits of Priority Occupations List",
    },
    b1: {
      type: String,
      default:
        "The draws held in these Priority Occupations are generally targeted occupations, and the cut-off is much lower than the non-priority occupation.",
    },
    b2: {
      type: String,
      default:
        "Priority Program candidates receive additional rounds of invitations to apply on a weekly basis.",
    },
    b3: {
      type: String,
      default:
        "PNP applications are processed at an expedited rate for Priority Program applicants.",
    },
    b4: {
      type: String,
      default:
        "Some employers can access Priority Program “concierge services” to facilitate the hiring of foreign nationals.",
    },
    eligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for BCPNP Targeted Draws",
    },
    elibilityP1: {
      type: String,
      default:
        "You must fulfill the eligibility requirements for one of the following BCPNP streams:",
    },
    elibilityP2: {
      type: String,
      default:
        "Additionally, you must satisfy the eligibility criteria specific to your BCPNP Program Priorities Occupations.",
    },
    s1Heading: {
      type: String,
      default: "Step 1: Labour Market Impact Assessment (LMIA) Process",
    },
    s1Desc: {
      type: String,
      default:
        "For the employer considering hiring a foreign worker on a caregiver LMIA, here is the eligibility check:",
    },
    pOL: {
      type: String,
      default: "Priority Occupations List",
    },
    construction: {
      type: String,
      default: "Construction",
    },
    constuctionDesc: {
      type: String,
      default:
        "Individuals working in the construction sector can take advantage of targeted invitations to apply by meeting the following requirements:",
    },
    cd1: {
      type: String,
      default:
        "The job offer must be for an indeterminate, full-time position within one of the priority construction occupations.",
    },
    cd2: {
      type: String,
      default:
        "You must hold a valid trade certificate issued by, or have an apprenticeship registered with SkilledTradesBC.",
    },
    cd3: {
      type: String,
      default:
        "Your trade certificate must align with the specific job you’ve been offered.",
    },
    cd4: {
      type: String,
      default:
        "Remember that meeting these eligibility criteria does not guarantee an invitation to apply; invitations are based on threshold scores during draws. If your score meets or exceeds the threshold, you’ll receive an invitation to apply from the BCPNP.",
    },
    hpHeading: {
      type: String,
      default: "Healthcare Professionals",
    },
    hpl1: {
      type: String,
      default:
        "Individuals who are direct employees of a provincial health authority or are physicians, nurse practitioners, or midwives with the endorsement of a provincial health authority can directly submit an application through the Health Authority stream.",
    },
    hpl2: {
      type: String,
      default:
        "For those not employed by a health authority (and therefore need to register through an alternative stream), targeted invitations to apply may be available if they have a job offer in one of the following occupations.",
    },
    hpl3: {
      type: String,
      default:
        "Remember that meeting these eligibility criteria does not guarantee an invitation to apply; invitations are based on threshold scores during draws. If your score meets or exceeds the threshold, you’ll receive an invitation to apply from the BCPNP.",
    },
    tsoHeading: {
      type: String,
      default: "Technology Sector Opportunities",
    },
    tsoDesc1: {
      type: String,
      default:
        "The British Columbia Provincial Nominee Program (BC PNP) provides a pathway to permanent residence for skilled workers in specific, high-demand technology occupations. To cater to the unique requirements of B.C.'s thriving technology sector, priority technology occupations do not necessitate a permanent job offer.",
    },
    tsoDesc2: {
      type: String,
      default:
        "For individuals working in the technology sector, the following criteria must be met to qualify for targeted invitations to apply:",
    },
    tsol1: {
      type: String,
      default:
        "The job offer should fall within one of the priority technology occupations..",
    },
    tsol2: {
      type: String,
      default:
        "The job offer must have a minimum duration of one year (365 days).",
    },
    tsol3: {
      type: String,
      default:
        "At the time of application, there should be at least 120 calendar days remaining on the job offer.",
    },
    tsol4: {
      type: String,
      default:
        "Remember that meeting these eligibility criteria does not guarantee an invitation to apply; invitations are based on threshold scores during draws. If your score meets or exceeds the threshold, you’ll receive an invitation to apply from the BCPNP.",
    },
    vcHeading: {
      type: String,
      default: "Veterinary Care",
    },
    vcDesc1: {
      type: String,
      default:
        "Veterinary Care Workers with job offers in one of the following occupations may benefit from targeted invitations to apply.",
    },
    vcDesc2: {
      type: String,
      default:
        "Remember that meeting these eligibility criteria does not guarantee an invitation to apply; invitations are based on threshold scores during draws. If your score meets or exceeds the threshold, you’ll receive an invitation to apply from the BCPNP.",
    },
    vsDesc3: {
      type: String,
      default:
        "For a comprehensive list of eligible National Occupational Classification (NOC) codes, please refer to the NOC list below:",
    },
    applicationHeading: {
      type: String,
      default: "Application Procedure for British Columbia Priorities Program:",
    },
    a1: {
      type: String,
      default:
        "Register online on the BCPNP website and submit your BCPNP profile:",
    },
    a1l1: {
      type: String,
      default:
        "Begin by choosing the appropriate program, which typically aligns with BC's Skills Immigration programs, such as the BC Skilled Worker or BC International Graduate programs.",
    },
    a1l2: {
      type: String,
      default:
        "Ensure eligibility by verifying that you meet the National Occupation Classification (NOC) code requirements for one of the in-demand occupations, categorized into streams like Childcare, Healthcare, Construction, Technology, and Veterinary-care.",
    },
    a1l3: {
      type: String,
      default:
        "Once confirmed eligible, initiate the application process by registering a profile with BCPNP Online.",
    },
    a2: {
      type: String,
      default: "Check your score:",
    },
    a2l1: {
      type: String,
      default:
        "Upon registration, applicants should assess their score based on the provided criteria.",
    },
    a3: {
      type: String,
      default: "Improve your score if necessary:",
    },
    a3l1: {
      type: String,
      default:
        "If your score falls below the cutoff set by the last draw conducted by BCPNP for your occupation, take steps to enhance your score to increase your chances of receiving an invitation to apply (ITA).",
    },
    a4: {
      type: String,
      default: "Receive an Invitation to Apply (ITA):",
    },
    a4l1: {
      type: String,
      default:
        "If you meet or exceed the cutoff score from the last draw conducted by BCPNP for your occupation, you will receive an ITA to proceed with your application.",
    },
    a5: {
      type: String,
      default: "Prepare and submit your BCPNP application within 30 days:",
    },
    a5l1: {
      type: String,
      default:
        "Upon receiving an ITA, applicants must diligently prepare and submit their BCPNP application within the specified timeframe of 30 days.",
    },

    childcareHeading: {
      type: String,
      default: "Childcare Professionals",
    },

    t1h1: {
      type: String,
      default: "Occupation",
    },
    t1h2: {
      type: String,
      default: "NOC Code",
    },

    table2Heading: {
      type: String,
      default:
        "For a comprehensive list of eligible National Occupational Classification (NOC) codes, please refer to the NOC list below:",
    },

    t1r1t1: {
      type: String,
      default: "Early Childhood Educators and Assistants",
    },
    t1r1t1: {
      type: String,
      default: "42202",
    },

    StillNotHeading: {
      type: String,
      default: "Still not Sure?",
    },
    s1: {
      type: String,
      default:
        "Still not sure? Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream.",
    },
    s2: {
      type: String,
      default: "",
    },
  },
  {
    timeStamps: true,
  }
);

let prioritiesProgramSection = mongoose.model(
  "Program Priorities Latest Page",
  prioritiesProgSchema
);
module.exports = prioritiesProgramSection;
