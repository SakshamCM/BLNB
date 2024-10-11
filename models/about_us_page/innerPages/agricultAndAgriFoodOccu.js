let mongoose = require("mongoose");
let agricultAndAgriFoodOccuSchema = mongoose.Schema(
  {
    agricultAndAgriFoodOccuHeading: {
      type: String,
      default: "Category-Based Express Entry Selection Draws: Agriculture and agri-food occupations",
    },
    agricultAndAgriFoodOccuPara: {
      type: String,
      default:
        "Exploring the Agriculture and Agri-Food Occupations Category offers access to abundant opportunities within Canada's thriving agricultural sector. Whether your skills lie in crop production, livestock farming, agricultural research, or any other agri-food occupation, this program paves the way for a rewarding career path in Canada.",
    },

//


 FirstEligibleHeading: {
    type: String,
    default: "First you must be eligible with Express Entry",
  },
  FirstEligSubHead: {
    type: String,
    default: "Before you can participate in a STEM-specific draw through Canada's Express Entry system, you need to be eligible. Here's how you can get started:",
  },
e1: {
  type: String,
  default: " Join the Express Entry Pool: The first step towards becoming a candidate for a STEM-specific draw is to get into the Express Entry pool.",
},
e2: {
  type: String,
  default: "2. Choose Your Program: There are three programs you can be eligible for to join the Express Entry pool:",
},
e2SubLi1: {
    type: String,
    default: "Federal Skilled Worker Program (FSW): This program is ideal for tech workers who have the necessary work experience, education, and language ability.",
  },
  e2SubLi2: {
    type: String,
    default: "Canadian Experience Class (CEC): Similar to the FSW program, the CEC is also suitable for tech workers who have gained Canadian work experience.",
  },
  e2SubLi3: {
    type: String,
    default: "Federal Skilled Agriculture and agri-food occupations s Program (FSTP): If you're a Agriculture and agri-food occupations s worker, this program is designed for you. It requires proof of relevant work experience, education, and language proficiency.",
  },
  FirstEligPara: {
    type: String,
    default: "Remember, each program has its own set of eligibility requirements. So, make sure to review these carefully and ensure you meet all the necessary criteria before applying.",
  },
///


EligCriHeading: {
    type: String,
    default: "Eligibility Criteria for Agriculture and Agri-Food Occupations Category",
  },
  EligCriSubHead: {
    type: String,
    default: "Once you have met eligibility for one of the Express Entry programs, now you need to meet eligibility for Agriculture and agri-food occupations criteria:",
  },

ec1: {
  type: String,
  default: "At least 6 months of full-time, continuous work experience (or an equivalent amount of part-time work experience) in an agriculture or agri-food occupation.",
},
ec2: {
  type: String,
  default: "A valid Express Entry profile.",
},

//
EligEntryHeading: {
    type: String,
    default: "Express Entry Agriculture and agri-food occupations draws history",
  },
  EligCriSubHead: {
    type: String,
    default: "The first ever Express Entry draw for Agriculture and agri-food occupations workers was held on September, 2023. Express Entry draw 267 saw a CRS score of 354 and invited 600 candidates eligible for category-based selection in Agriculture and agri-food occupations.",
  },


  /////
  HereEligTabHeading: {
      type: String,
      default: "Here is the list of eligible NOCs for Agriculture and agri-food occupations category:",
    },
    HereEligTableHead1: {
        type: String,
        default: "Occupations",
      },
      HeT1Po1: {
        type: String,
        default: "Contractors and supervisors, landscaping, grounds maintenance and horticulture services	",
      },
      HeT1Po2: {
        type: String,
        default: "Agricultural service contractors and farm supervisors",
      },
      HeT1Po3: {
        type: String,
        default: "Butchers- retail and wholesale",
      },

      //
      HereEligTableHead2: {
        type: String,
        default: "2021 NOC Code",
      },

      HeT2Po1: {
        type: String,
        default: "82031",
      },
      HeT2Po2: {
        type: String,
        default: "82030",
      },
      HeT2Po3: {
        type: String,
        default: "63201",
      },
      HeT3Po1: {
        type: String,
        default: "1",
      },
      HeT3Po2: {
        type: String,
        default: "2",
      },
      HeT3Po3: {
        type: String,
        default: "3",
      },
      //
  
//
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs are near to 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
      },
      s2: {
        type: String,
        default:
          "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.",
      },
      //

  },
  {
    timeStamps: true,
  }
);

let agricultAndAgriFoodOccuSection = mongoose.model(
  "Agriculture and agri-food occupations Program",
  agricultAndAgriFoodOccuSchema
);
module.exports = agricultAndAgriFoodOccuSection;
