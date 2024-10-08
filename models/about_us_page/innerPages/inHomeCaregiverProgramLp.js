let mongoose = require("mongoose");
let inHomeSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "In Home Caregiver Program",
    },
    description: {
      type: String,
      default:
        "The Canadian government provides a remedy to Canadian families to hire full-time caregivers to provide care to their children, seniors, or persons with certified medical needs. You can use this opportunity to seek work permit and permanent residency in Canada.",
    },
    benefitsHeading: {
      type: String,
      default: "Benefits of In Home Caregiver Program",
    },
    b1: {
      type: String,
      default:
        "The employers can hire a full-time dedicated caregiver for the person in need, thereby creating a less stressful environment when caring for individuals with high needs.",
    },
    b2: {
      type: String,
      default:
        "The work permit provides you with an opportunity to gain qualifying experience in Canada to apply for permanent residence.",
    },
    b3: {
      type: String,
      default:
        "These permanent residence applications do not have any points system like Express Entry or provincial nomination programs. It is based on a first-come, first-served basis.",
    },
    b4: {
      type: String,
      default:
        "The language requirements for both work permit and permanent residency application are very low.",
    },
    b5: {
      type: String,
      default:
        "The spouse and dependent children may accompany you throughout the work permit duration depending on your wage rate and National Occupational Classification (NOC) level.",
    },
    eligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for In Home Caregiver Program",
    },
    eligibilityDescription: {
      type: String,
      default: "In home Caregiver program is a two-step process:",
    },
    elibilityS1: {
      type: String,
      default:
        "Step 1: Your employer applies for Labour Market Impact Assessment (LMIA).",
    },
    elibilityS2: {
      type: String,
      default: "Step 2: You apply for work permit.",
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
    s1l1: {
      type: String,
      default: "Have a valid payroll account with Canada Revenue Agency (CRA).",
    },
    s1l2: {
      type: String,
      default:
        "Provide proof of individual requiring care such as a long form birth certificate, passport or physician’s note, depending on the type of care required.",
    },
    s1l3: {
      type: String,
      default:
        "Must demonstrate their financial ability to pay the caregiver’s wages.",
    },
    s1l4: {
      type: String,
      default: "Pay the foreign worker the prevailing wage for the position.",
    },
    s1discalmier: {
      type: String,
      default:
        "Your employer is required to apply for a Labour Market Impact Assessment (LMIA). The application is submitted online by the employer on LMIA portal.",
    },
    foreignHeading: {
      type: String,
      default:
        "The employers in Canada can hire a foreign worker for one of the two categories:",
    },
    foreign1: {
      type: String,
      default: "1. Caregivers for children",
    },
    foreign1Desc: {
      type: String,
      default:
        "This category includes positions such as childcare provider, live-in caregiver, nanny that fall under NOC 44100. The children to whom care will be provided should be under 18 years of age.",
    },
    foreign2: {
      type: String,
      default: "2. Caregivers for people with high medical needs",
    },
    foreign2Desc: {
      type: String,
      default:
        "This category includes workers who provide care to people with the age of 65 years or over, people with disabilities, a chronic or terminal illness. The positions included are as follows:",
    },
    f2l1: {
      type: String,
      default: "Registered nurse or registered psychiatric nurse (NOC 31301)",
    },
    f2l2: {
      type: String,
      default: "Licensed practical nurse (NOC 32101)",
    },
    f2l3: {
      type: String,
      default:
        "Attendant for persons with disabilities, home support worker, live-in caregiver, personal care attendant (NOC 44101)",
    },
    proofHeading: {
      type: String,
      default: "Proof of Individual Requiring Care",
    },
    proofDesc1: {
      type: String,
      default:
        "At the time of LMIA application, the employer is required to provide proof to Service Canada to prove that they or their dependant is in need of care by a full-time caregiver.",
    },
    proofDesc2: {
      type: String,
      default:
        "For age and parentage for each child under the age of 18, they can provide one of the following documents:",
    },
    under18l1: {
      type: String,
      default: "Long form birth certificate",
    },
    under18l2: {
      type: String,
      default: "Adoption order",
    },
    under18l3: {
      type: String,
      default: "Official guardianship, or",
    },
    under18l4: {
      type: String,
      default:
        "Medical doctor's note confirming the pregnancy and the due date",
    },
    seniorHeading: {
      type: String,
      default:
        "For age for each senior, 65 years or older, they can provide one of the following documents:",
    },
    seniorl1: {
      type: String,
      default: "Birth certificate",
    },
    seniorl2: {
      type: String,
      default: "Passport, or",
    },
    seniorl3: {
      type: String,
      default: "Old Age Security (OAS) identification card",
    },
    disabilityHeading: {
      type: String,
      default:
        "For disability, chronic or terminal illness for each disabled, chronically or terminally ill person, they can provide:",
    },
    disabilityl1: {
      type: String,
      default:
        "Completed Schedule H - Medical disability, chronic or terminal illness certificate (EMP5600) form, signed and dated by the physician, or",
    },
    disabilityl2: {
      type: String,
      default:
        "Physician's note attesting that the patient has a disability, chronic or terminal illness and that they require access to a live-in caregiver",
    },
    step2Heading: {
      type: String,
      default: "Step 2: You Apply for Work Permit",
    },
    step2Desc: {
      type: String,
      default:
        "If you are a foreign national residing within Canada on a work permit or study permit, you can apply for a work permit under Temporary Foreign Worker Program after your employer obtains a positive Labour Market Impact Assessment (LMIA). You cannot apply for a work permit with caregiver LMIA if you are not currently already authorized to work or study (whether you are physically within or outside Canada). You must have a valid passport, be fluent in English or French and meet the minimum education and experience requirements for the job.",
    },
    applyHeading: {
      type: String,
      default: "How to Apply for In Home Caregiver Program?",
    },
    asEmployer: {
      type: String,
      default: "As an Employer:",
    },
    emp1: {
      type: String,
      default:
        "Have an initial assessment performed by us to verify if the employer is eligible to apply for LMIA.",
    },
    emp2: {
      type: String,
      default:
        "We will provide you checklist of documents and information required to start the initial process.",
    },
    emp3: {
      type: String,
      default:
        "Perform recruitment efforts as per ESDC program requirements for each LMIA type – high wage or low wage occupation LMIA. (Hyperlink)",
    },
    emp4: {
      type: String,
      default: "Screen and interview local candidates.",
    },
    emp5: {
      type: String,
      default:
        "Prepare and submit LMIA application to Service Canada ESDS department.",
    },
    emp6: {
      type: String,
      default: "Pay the fees when requested, within 2 business days.",
    },
    emp7: {
      type: String,
      default: "LMIA fees exemptions:",
    },
    emp7l1: {
      type: String,
      default:
        "If applying for LMIA to provide care for an individual requiring assistance with medical needs, the LMIA processing fee of $1000.00 is not required. A medical certificate attesting to the individual’s incapacity to care for themselves will have to be provided.",
    },
    emp7l2: {
      type: String,
      default:
        "If applying for LMIA to provide care for a child under 13 years of age and the employer’s gross annual income is $150,000 or less, the LMIA processing fee of $1000.00 is not required.",
    },
    emp8: {
      type: String,
      default:
        "Wait for LMIA processing time, which can range from 30 to 90 business days. If the Service Canada officer has any questions or concerns or requires any further information, the employer might be contacted for an interview.",
    },
    emp9: {
      type: String,
      default:
        "You will receive a positive LMIA by email or in the inbox section of LMIA portal.",
    },
    asForiegn: {
      type: String,
      default: "As a Foreign Worker:",
    },
    asF1: {
      type: String,
      default: "Apply for a work permit as per guidelines set by IRCC.",
    },
    asF2: {
      type: String,
      default:
        "IRCC will assess your application to check if you meet the requirements.",
    },
    asF3: {
      type: String,
      default:
        "If your application is approved, IRCC will issue you a work permit.",
    },
    asF4: {
      type: String,
      default:
        "Begin working with your employer to gain qualifying work experience for permanent residency pathways.",
    },
    StillNotHeading: {
      type: String,
      default: "Still not Sure?",
    },
    s1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can certainly assist you if you have a job offer. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    s2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.",
    },
    whyChooseHeading: {
      type: String,
      default: "Why Choose Us",
    },
    whuChooseDescription: {
      type: String,
      default:
        "Discover why Brightlight Immigration is the right choice for your immigration needs. Our experienced team offers personalized services to ensure the best possible outcome for your application.",
    },
  },
  {
    timeStamps: true,
  }
);

let inHomeCaregiverSection = mongoose.model(
  "In home caregiver program lp",
  inHomeSchema
);
module.exports = inHomeCaregiverSection;
