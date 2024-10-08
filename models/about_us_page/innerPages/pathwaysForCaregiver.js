let mongoose = require("mongoose");
let pathwaySchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "Pathways for Caregivers",
    },
    description: {
      type: String,
      default:
        "The Canadian government is actively welcoming foreign residents with the right skills and experience to fill the country's critical need for caregivers. IRCC defines caregivers as the workers who provide care for children, seniors, or people with disabilities or illness.",
    },
    benefitsHeading: {
      type: String,
      default: "Benefits of Pathways for Caregivers:",
    },
    b1: {
      type: String,
      default:
        "Canadian families can hire a full-time dedicated caregiver for the person in need, thereby creating a less stressful environment when caring for individuals with high needs.",
    },
    b2: {
      type: String,
      default:
        "Caregiver pathways provide you with an opportunity to apply for permanent residence, after gaining 12 months of experience in Canada.",
    },
    b3: {
      type: String,
      default:
        "The permanent residence applications do not have any points system like Express Entry or provincial nomination programs. It is based on a first-come, first-served basis.",
    },
    b4: {
      type: String,
      default:
        "The language requirements for both work permit and permanent residency application are very low.",
    },
    b5: {
      type: String,
      default:
        "The spouse and dependent children can accompany you throughout the process.",
    },
    temporaryHeading: {
      type: String,
      default:
        "Here are the temporary residence pathways available for caregivers:",
    },
    temporaryl1: {
      type: String,
      default:
        "Work permit applications received with Labour Market Impact Assessment (LMIA).",
    },
    permanentHeading: {
      type: String,
      default:
        "Here are the permanent residence pathways available for caregivers:",
    },
    permanentl1: {
      type: String,
      default:
        "For Home Child-Care Provider and Home Support Worker without Canadian Experience",
    },
    permanentl2: {
      type: String,
      default:
        "For Home Child-Care Provider and Home Support Worker with Canadian Experience",
    },
    applyHeading: {
      type: String,
      default: "How to apply for Pathways for Caregivers?",
    },
    a1: {
      type: String,
      default:
        "Select the right NOC occupation as per your qualifications - HCCP or HSWP",
    },
    a2: {
      type: String,
      default:
        "Choose the right pathway for yourself – temporary pathway is only available to individuals who are already on a work permit or study permit. Permanent pathways are available to all.",
    },
    a3: {
      type: String,
      default:
        "Check each pathway page for eligibility criteria and application process.",
    },
  },
  {
    timeStamps: true,
  }
);

let pathwaysForCaregiverSection = mongoose.model(
  "Pathways For Caregiver",
  pathwaySchema
);
module.exports = pathwaysForCaregiverSection;
