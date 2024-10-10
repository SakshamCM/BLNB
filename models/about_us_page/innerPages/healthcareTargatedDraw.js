let mongoose = require("mongoose");
let healthcareTargatedDrawSchema = mongoose.Schema(
  {
    healthcareTargatedDrawHeading: {
      type: String,
      default: "Category-Based Express Entry Selection Draws: Healthcare Draw",
    },
    healthcareTargatedDrawPara: {
      type: String,
      default:
        "In 2023, the Canadian Government launched the Express Entry healthcare draws, a strategic initiative aimed at attracting and retaining crucial healthcare professionals like nurses, physicians, and dentists. This program fast-tracks immigration applications, significantly reducing the time between application and approval for permanent residency. The process, managed by Canada's Immigration, Refugees, and Citizenship Canada (IRCC), aims to process the majority of applications within six months. However, it's important to note that this is not a guaranteed timeline. The urgent need for additional healthcare workers in Canada is evident, and the Express Entry healthcare draws are a crucial tool in addressing this issue.",
    },


    //

      EligibilityCriteriaHeading: {
      type: String,
      default: "Eligibility Criteria for Express Entry Healthcare Draws",
    },
      EligPara1: {
        type: String,
        default: "Understanding the process of becoming eligible for Express Entry healthcare draws requires a comprehensive understanding of the Express Entry system itself.",
      },
      EligPara2: {
        type: String,
        default: "Express Entry is not an immigration program but a system used to manage several Canadian immigration programs. It operates on an expression of interest intake model, where you submit your profile into a pool of candidates and wait for an invitation to apply for permanent residency.",
      },
      EligPara2Li1: {
        type: String,
        default: " No Canadian experience required",
      },
      EligPara2Li2: {
        type: String,
        default: "Canadian experience required",
      },
      EligPara2Li3: {
        type: String,
        default: "Dedicated to trades workers",
      },
      EligPara3: {
        type: String,
        default: "To be eligible for Express Entry, you must meet the criteria for one of the following programs:",
      },
      EligPara4: {
        type: String,
        default: "Once you've submitted your profile, your eligibility for each program is evaluated based on your work experience, education, age, and language proficiency. This evaluation is conducted using the Comprehensive Ranking System (CRS), which assigns a score to your profile.",
      },
      EligPara5: {
        type: String,
        default: "Your CRS score is crucial as it determines whether you receive an invitation to apply (ITA) in a round of invitations, also known as a draw. In an all-program draw, the highest-scoring candidates are invited, while in a category-based draw, the top-scoring candidates who meet the draw's category eligibility criteria are invited.",
      },
      EligPara6: {
        type: String,
        default: "Healthcare Express Entry draws are category-based draws. To be eligible for the health worker category, you must have at least six months of full-time work experience in an eligible healthcare occupation within the past three years.",
      },
      ///


      EligibleOccupationsHeading: {
        type: String,
        default: "Eligible Occupations for Express Entry Healthcare Draws",
      },
      EligibleOccupationsPara: {
        type: String,
        default: "In order to be eligible for Express Entry Healthcare draws, you must have at least six months of full-time (or the equivalent in part-time) paid work experience within the three years preceding the issuance of an ITA and when IRCC receives your application for Canadian permanent residency.",
      },
    eo1: {
      type: String,
      default: "Within the last 3 years, you have at least 6 months of full-time, continuous work experience (or an equivalent amount of part-time work experience) in a single eligible National Occupational Classification (NOC) in the healthcare sector.",
    },
    eo2: {
      type: String,
      default:
        "A valid Express Entry profile.",
    },
    //
    EligibleOccupTableHeading: {
        type: String,
        default:
          "**The following table contains the most up-to-date list of eligible occupations. Remember that Canada may change these occupations in response to labor market conditions.",
      },

      EligibleOccupTableHead1: {
        type: String,
        default:
          "Occupation",
      },
      eoT1Li1: {
        type: String,
        default:
          "Audiologists and speech language pathologists",
      },
      eoT1Li2: {
        type: String,
        default:
          "Chiropractors",
      },
      eoT1Li3: {
        type: String,
        default:
          "Dentists",
      },
      eoT1Li4: {
        type: String,
        default:
          "Dieticians and nutritionists",
      },
      eoT1Li5: {
        type: String,
        default:
          "Education counsellors",
      },
      eoT1Li6: {
        type: String,
        default:
          "General practitioners and family physicians",
      },
      eoT1Li7: {
        type: String,
        default:
          "Instructors of persons with disabilities",
      },
      eoT1Li8: {
        type: String,
        default:
          "Kinesiologists and other professional occupations in therapy and assessment",
      },
      eoT1Li9: {
        type: String,
        default:
          "Licensed practical nurses",
      },
      eoT1Li10: {
        type: String,
        default:
          "Massage therapists",
      },
      eoT1Li11: {
        type: String,
        default:
          "Medical laboratory assistants and related technical occupations",
      },
      eoT1Li12: {
        type: String,
        default:
          "Medical laboratory technologists",
      },
      eoT1Li13: {
        type: String,
        default:
          "Medical radiation technologists",
      },
      eoT1Li14: {
        type: String,
        default:
          "Medical sonographers",
      },
      eoT1Li15: {
        type: String,
        default:
          "Nurse aides, orderlies, and patient service associates",
      },
      eoT1Li16: {
        type: String,
        default:
          "Nurse practitioners",
      },
      eoT1Li17: {
        type: String,
        default:
          "Nursing coordinators and supervisors",
      },
      eoT1Li18: {
        type: String,
        default:
          "Occupational therapists",
      },
      eoT1Li19: {
        type: String,
        default:
          "Optometrists",
      },
      eoT1Li20: {
        type: String,
        default:
          "Other assisting occupations in support of health services",
      },
      eoT1Li21: {
        type: String,
        default:
          "Other practitioners of natural healing",
      },
      eoT1Li22: {
        type: String,
        default:
          "Other professional occupations in health diagnosing and treating",
      },

      eoT1Li23: {
        type: String,
        default:
          "Other technical occupations in therapy and assessment",
      },
      eoT1Li24: {
        type: String,
        default:
          "Paramedical occupations",
      },  
        eoT1Li25: {
        type: String,
        default:
          "Pharmacy technical assistants and pharmacy assistants",
      },
      eoT1Li26: {
        type: String,
        default:
          "Physician assistants, midwives, and allied health professionals",
      },
      eoT1Li27: {
        type: String,
        default:
          "Physiotherapists",
      },
      eoT1Li28: {
        type: String,
        default:
          "Psychologists",
      },
      eoT1Li29: {
        type: String,
        default:
          "Registered nurses and registered psychiatric nurses",
      },
      eoT1Li30: {
        type: String,
        default:
          "Respiratory therapists, clinical perfusionists, and cardiopulmonary technologists",
      },
      
      eoT1Li31: {
        type: String,
        default:
          "Specialists in clinical and laboratory medicine",
      },
      eoT1Li32: {
        type: String,
        default:
          "Specialists in surgery",
      },

      eoT1Li33: {
        type: String,
        default:
          "Therapists in counselling and related specialized therapies",
      },
      eoT1Li34: {
        type: String,
        default:
          "Traditional Chinese medicine practitioners and acupuncturists",
      },
      eoT1Li35: {
        type: String,
        default:
          "Veterinarians",
      },
      
      //
      EligibleOccupTableHead2: {
        type: String,
        default:
          "2021 NOC Code",
      },
      eoT2Li1: {
        type: String,
        default:
          "31112",
      },
      eoT2Li2: {
        type: String,
        default:
          "31201",
      },
      eoT2Li3: {
        type: String,
        default:
          "31121",
      },
      eoT2Li4: {
        type: String,
        default:
          "31110",
      },
      eoT2Li5: {
        type: String,
        default:
          "31121",
      },
      eoT2Li6: {
        type: String,
        default:
          "41320",
      },
      eoT2Li7: {
        type: String,
        default:
          "31102",
      },
      eoT2Li8: {
        type: String,
        default:
          "42203",
      },
      eoT2Li9: {
        type: String,
        default:
          "31204",
      },
      eoT2Li10: {
        type: String,
        default:
          "32101",
      },
      eoT2Li11: {
        type: String,
        default:
          "33101",
      },
      eoT2Li12: {
        type: String,
        default:
          "32120",
      },
      eoT2Li13: {
        type: String,
        default:
          "32121",
      },
      eoT2Li14: {
        type: String,
        default:
          "32122",
      },
      eoT2Li15: {
        type: String,
        default:
          "33102",
      },
      eoT2Li16: {
        type: String,
        default:
          "31302",
      },
      eoT2Li17: {
        type: String,
        default:
          "31300",
      },
      eoT2Li18: {
        type: String,
        default:
          "31203",
      },
      eoT2Li19: {
        type: String,
        default:
          "31111",
      },
      eoT2Li20: {
        type: String,
        default:
          "33109",
      },
      eoT2Li21: {
        type: String,
        default:
          "32209",
      },
      eoT2Li22: {
        type: String,
        default:
          "31209",
      },

      eoT2Li23: {
        type: String,
        default:
          "32109",
      },
      eoT2Li24: {
        type: String,
        default:
          "32102",
      },  
        eoT2Li25: {
        type: String,
        default:
          "31303",
      },
      eoT2Li26: {
        type: String,
        default:
          "33103",
      },
      eoT2Li27: {
        type: String,
        default:
          "31202",
      },
      eoT2Li28: {
        type: String,
        default:
          "31200",
      },
      eoT2Li29: {
        type: String,
        default:
          "31301",
      },
      eoT2Li30: {
        type: String,
        default:
          "32103",
      },
      
      eoT2Li31: {
        type: String,
        default:
          "31100",
      },
      eoT2Li32: {
        type: String,
        default:
          "31101",
      },

      eoT2Li33: {
        type: String,
        default:
          "41301",
      },
      eoT2Li34: {
        type: String,
        default:
          "32200",
      },
      eoT2Li35: {
        type: String,
        default:
          "31103",
      },
      
      //
      EligibleOccupTableHead3: {
        type: String,
        default:
          "2021 TEER Category",
      },
      eoT3Li1: {
        type: String,
        default:
          "1",
      },
      eoT3Li2: {
        type: String,
        default:
          "1",
      },
      eoT3Li3: {
        type: String,
        default:
          "1",
      },
      eoT3Li4: {
        type: String,
        default:
          "1",
      },
      eoT3Li5: {
        type: String,
        default:
          "1",
      },
      eoT3Li6: {
        type: String,
        default:
          "1",
      },
      eoT3Li7: {
        type: String,
        default:
          "2",
      },
      eoT3Li8: {
        type: String,
        default:
          "1",
      },
      eoT3Li9: {
        type: String,
        default:
          "2",
      },
      eoT3Li10: {
        type: String,
        default:
          "2",
      },
      eoT3Li11: {
        type: String,
        default:
          "3",
      },
      eoT3Li12: {
        type: String,
        default:
          "2",
      },
      eoT3Li13: {
        type: String,
        default:
          "2",
      },
      eoT3Li14: {
        type: String,
        default:
          "2",
      },
      eoT3Li15: {
        type: String,
        default:
          "3",
      },
      eoT3Li16: {
        type: String,
        default:
          "1",
      },
      eoT3Li17: {
        type: String,
        default:
          "1",
      },
      eoT3Li18: {
        type: String,
        default:
          "1",
      },
      eoT3Li19: {
        type: String,
        default:
          "1",
      },
      eoT3Li20: {
        type: String,
        default:
          "3",
      },
      eoT3Li21: {
        type: String,
        default:
          "2",
      },
      eoT3Li22: {
        type: String,
        default:
          "1",
      },

      eoT3Li23: {
        type: String,
        default:
          "2",
      },
      eoT3Li24: {
        type: String,
        default:
          "2",
      },  
        eoT3Li25: {
        type: String,
        default:
          "3",
      },
      eoT3Li26: {
        type: String,
        default:
          "1",
      },
      eoT3Li27: {
        type: String,
        default:
          "1",
      },
      eoT3Li28: {
        type: String,
        default:
          "1",
      },
      eoT3Li29: {
        type: String,
        default:
          "1",
      },
      eoT3Li30: {
        type: String,
        default:
          "2",
      },
      
      eoT3Li31: {
        type: String,
        default:
          "1",
      },
      eoT3Li32: {
        type: String,
        default:
          "1",
      },

      eoT3Li33: {
        type: String,
        default:
          "1",
      },
      eoT3Li34: {
        type: String,
        default:
          "2",
      },
      eoT3Li35: {
        type: String,
        default:
          "1",
      },
  //
///
  ExpressEntryHealthcareHeading: {
    type: String,
    default: "Express Entry Healthcare Draws History",
  },
  hehc1: {
    type: String,
    default:
      "The first-ever Express Entry draw for targeted healthcare occupation workers was held in February 2024. Express Entry draw #284 saw a CRS score of 422 and invited 3500 candidates eligible for category-based selection in healthcare occupations.",
  },
  //
    HowApplyHeading: {
      type: String,
      default: "How to Apply for Express Entry Healthcare Draws",
    },
    ha1: {
      type: String,
      default:
        "Submit your profile to the Express Entry pool",
    },
    ha2: {
      type: String,
      default:
        "Prove that you have at least six months of eligible work experience in healthcare (within the three years preceding the issuance of an ITA and receipt of your application by IRCC).",
    },
    ha3: {
      type: String,
      default:
        "Await an ITA (or take steps to improve your CRS score to increase your chances of receiving an ITA)",
    },
    ha4: {
        type: String,
        default:
          "Respond to the ITA by submitting your application for permanent residency",
      },
      ha5: {
        type: String,
        default:
          "Wait for a decision from an IRCC officer. If approved, you can become a permanent resident of Canada.",
      },
      haRemb: {
        type: String,
        default:
          "Remember, the key to success in the Express Entry system is to ensure you meet all the eligibility requirements and continuously work on improving your CRS score.",
      },
      //
   
    StillNotHeading: {
      type: String,
      default: "Still not sure?",
    },
    s1: {
      type: String,
      default:
        "Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs is nearly 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    s2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
    },

    WhyChooseUsHeading: {
        type: String,
        default: "Why Choose Us",
      },
      wc: {
        type: String,
        default:
          "Brightlight Immigration offers personalized services to maximize your chances of success. Our experienced team provides dedicated support throughout the immigration process, ensuring a smooth and efficient experience.",
      },
  },
  {
    timeStamps: true,
  }
);

let healthcareTargatedDrawSection = mongoose.model(
  "Healthcare Draw Program",
  healthcareTargatedDrawSchema
);
module.exports = healthcareTargatedDrawSection;
