let mongoose = require("mongoose");
let frenchTargetedDrawSchema = mongoose.Schema(
  {
    frenchHeading: {
      type: String,
      default: "Category-Based Express Entry Selection Draws: French Language Proficiency",
    },
    frenchPara1: {
      type: String,
      default:
        "If you are interested in applying under the French-language proficiency category in the Express Entry program, there are specific eligibility criteria that you need to fulfill. These criteria have been put in place to ensure that candidates possess the necessary language skills to contribute effectively to the Canadian workforce and society.",
    },

  
    //
   //
     BenefitsHeading: {
            type: String,
            default: "Benefits of French Language Proficiency",
          },

          BenefitsPara: {
            type: String,
            default: "Discover the significance of strong French language skills in Canadian permanent residency (PR) applications:",
          },

          b1: {
            type: String,
            default: "<strong>Leverage Targeted Draws by IRCC:</strong>The Immigration, Refugees, and Citizenship Canada (IRCC) has been conducting specialized draws for French language proficiency. These draws typically feature significantly lower competition compared to general draw categories. For instance, the latest draw, held on February 29, 2024 (Draw #287), saw the lowest score at only 336, inviting 2500 eligible candidates.",
          }, 
         b2: {
            type: String,
            default: "<strong>Increase Your CRS Score: </strong> A robust command of French can substantially enhance your Comprehensive Ranking System (CRS) score, boosting your chances of obtaining permanent residency. A higher CRS score improves your likelihood of receiving invitations from Express Entry draws.",
          }, 
 
         b3: {
            type: String,
            default: "<strong>Accelerate PR with Advanced French Proficiency: </strong>Scoring well on a French language test can elevate your CRS score, expediting your path to PR. A strong CRS score increases your chances of receiving invitations from Express Entry draws, thereby facilitating permanent residency.",
          }, 

          b4: {
            type: String,
            default: "<strong>Access Diverse Job Opportunities:</strong> In Canada, proficiency in both English and French is often a prerequisite for numerous job positions. As the demand for French-speaking professionals rises, so do the prospects for skilled workers fluent in French. Strengthening your French language abilities expands your job market opportunities.",
          }, 

          b5: {
            type: String,
            default: "<strong>Pursue Federal Government Roles: </strong>Proficiency in both French and English can make you an appealing candidate for various federal government positions. Many government jobs in Canada require bilingual proficiency, making French language proficiency a valuable asset for securing employment opportunities.",
          }, 

          b6: {
            type: String,
            default: "<strong>Seamlessly Integrate into Canadian Society:</strong>With a significant segment of the Canadian population being French speakers, mastering French facilitates your integration into Canadian society. Fluency in French enhances communication and cultural assimilation, easing your settlement and adaptation within the community.",
          },
          //
          FirstEligibleHeading: {
            type: String,
            default: "First You Must Be Eligible with Express Entry",
          }, 
          FirstEligiblePara: {
            type: String,
            default: "Before you can participate in a French-language-specific draw through Canada's Express Entry system, you need to be eligible. Here's how you can get started:",
          }, 
          fe1: {
            type: String,
            default: "Join the Express Entry Pool: The first step towards becoming a candidate for a French-language-specific draw is to get into the Express Entry pool.",
          }, 
          fe2: {
            type: String,
            default: "Choose Your Program: There are three programs you can be eligible for to join the Express Entry pool",
          },
          fe2Sub1: {
            type: String,
            default: " This program is ideal for tech workers who have the necessary work experience, education, and language ability.",
          },
          fe2Sub2: {
            type: String,
            default: "Similar to the FSW program, the CEC is also suitable for tech workers who have gained Canadian work experience.",
          },
          fe2Su3: {
            type: String,
            default: "If you're a trades worker, this program is designed for you. It requires proof of relevant work experience, education, and language proficiency.",
          },
          feLastPara: {
            type: String,
            default: "Remember, each program has its own set of eligibility requirements. So, make sure to review these carefully and ensure you meet all the necessary criteria before applying.",
          },
          //
          EligCritHead: {
            type: String,
            default: "Eligibility Criteria for French Language Proficiency Category",
          }, 

          EligCritSubHead: {
            type: String,
            default: "Once you have met eligibility for one of the programs of Express Entry now you need to be eligible for the French-language proficiency category:",
          },     

          EligCritLi1: {
            type: String,
            default: "You have CLB level 7 or higher in French.",
          },   
          EligCritLi2: {
            type: String,
            default: "A valid Express Entry profile.",
          },   
          EligCritPara1: {
            type: String,
            default: "In addition to meeting the language requirements, it is crucial to fulfill all the requirements outlined in the instructions for the specific round you are applying for. These instructions provide detailed information about the eligibility criteria, documentation, and any additional requirements that must be met in order to be considered for the French-language proficiency category. We will be providing information for each round as soon as IRCC provides any update.",
          }, 
          EligCritPara2: {
            type: String,
            default: "To obtain complete eligibility details for the French-language proficiency category, it is essential to review the instructions for each round. These instructions provide comprehensive information about the specific requirements that must be met in order to be eligible for this category.",
          }, 
  //    

  ExpressEntryFrenchHeading: {
    type: String,
    default: "Express Entry French-Language Proficiency Draws History",
  },
  ExpressEntryFrenchPara: {
    type: String,
    default: "The first-ever Express Entry draw targeted for the French language was held in February 2024. Express Entry draw 282 saw a CRS score of 365 and invited 7000 candidates eligible for French language.",
  },
 //
     
  StillNotSureHeading: {
    type: String,
    default: "Still Not Sure?",
  },

  s1: {
    type: String,
    default:
      "Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs is nearly 100%. We achieve this with a tailored approach to your specific case, using similar successful cases as precedents.",
  },
  s2: {
    type: String,
    default:
      "At Brightlight Immigration, our dedicated team of visa application specialists will assist you from the start of the application process all the way to obtaining your PR. Start your process now.",
  },

 
//
    WhyChooseUsHeading: {
      type: String,
      default: "Why Choose Us?",
    },

    WhyChooseUsPara: {
      type: String,
      default:
        "At Brightlight Immigration, we provide expert guidance and support throughout your immigration journey. Our dedicated team is committed to achieving the best possible outcomes for our clients.",
    },

  },
  {
    timeStamps: true,
  }
);

let frenchTargetedDrawSection = mongoose.model(
  "French Language Proficiency program",
  frenchTargetedDrawSchema
);
module.exports = frenchTargetedDrawSection;
