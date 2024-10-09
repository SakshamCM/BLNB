let mongoose = require("mongoose");
let parentsGrandParSchema = mongoose.Schema(
  {
    ParGrHeading: {
      type: String,
      default: "Parents and Grandparents Program (PGP)",
    },
    ParGrPara1: {
      type: String,
      default:
        "Parents and grandparents are incredibly important in one’s life. They're like the foundation of our lives, helping us become who we are today. Many dream of bringing their parents and grandparents from their native countries to be together in Canada. The Family Reunification and Sponsorship program makes this possible.",
    },
    ParGrPara2: {
        type: String,
        default:
          "The Parents and Grandparents Program (PGP) allows Canadian citizens and permanent residents to sponsor their parents and grandparents to immigrate to Canada.",
      },
   
//

      EligibilityHeading1: {
      type: String,
      default: "Eligibility criteria for Sponsor of Parents and Grandparents Program (PGP):",
    },
      EligibilityPara: {
        type: String,
        default: "You can sponsor your parents and grandparents, related by blood or adoption. This includes your mother, father, step-parents, and grandparents. However, you cannot sponsor your parents' or grandparents' siblings, unless they are dependent children.",
      },
  
  //
  EligibilityHeading2: {
    type: String,
    default: "Eligibility criteria for Parents and Grandparents Program (PGP) PR Sponsorship:",
  },
    EligibilitySubHead: {
      type: String,
      default: "Are you eligible to sponsor your parents or grandparents? Let's find out.",
    },
  e1: {
    type: String,
    default: "You should be a Canadian citizen or permanent resident.",
  },
  e2: {
    type: String,
    default: "You must be at least 18 years old.",
  },
  e3: {
      type: String,
      default: "You should be living in Canada.",
    },
    e4: {
      type: String,
      default: "You are able to financially support your parents or grandparents.",
    },
    e5: {
      type: String,
      default: "You do not have any criminal record.",
    },
    e6: {
      type: String,
      default: "Meet income requirement for the past 3 years.",
    },
    EligFormatHead: {
      type: String,
      default: "Make following table in format approved:",
    },

  //
    HowApplyHeading: {
      type: String,
      default: "How to apply for the Parents and Grandparents Program (PGP)?",
    },
    HowApplySubHead: {
        type: String,
        default: "Meet the eligibility criteria? Let's see how you can sponsor your parents or grandparents",
      },

    ha1: {
      type: String,
      default:
        "The first step is to submit an Interest to Sponsor form on the IRCC website. This form allows you to express your interest in sponsoring your parents or grandparents and will help IRCC determine if you are eligible for the program.",
    },
    ha2: {
      type: String,
      default:
        "If your Interest to Sponsor form is approved, you will be invited to apply for the program.",
    },
    ha3: {
      type: String,
      default:
        "Once you get the ITA, complete the pending form that asks about you, your parents or grandparents, and your financial situation. Show proof of your income, like tax papers, etc.",
    },
    ha4: {
        type: String,
        default:
          "If your application is approved, your parents or grandparents need to apply for permanent residence.",
      },

      ha5: {
        type: String,
        default:
          "Wait for the revert. It takes 12 to 24 months, depending on how many applications they receive, for your application to process.",
      },


      RefusalHeading: {
        type: String,
        default: "Common reasons for refusal of Parents and Grandparents Program (PGP)",
      },
      RefusalSubHead: {
        type: String,
        default: "Don’t forget to avoid these common PGP refusal reasons and increase your chances of approval.",
      },

      r1: {
        type: String,
        default: "If you can't show you have enough money to support your parents or grandparents without help, your application will be refused. The minimum income needed is CAD 43,082 for a single sponsor and CAD 52,965 for a married or common-law couple. This income is for the year 2022 if you are applying for 2023/2024.",
      },
      r2: {
        type: String,
        default: "Not meeting the income requirement for the previous 3 years.",
      },
      r3: {
        type: String,
        default: "The parent or grandparent you're sponsoring failed to pass a medical check. They need to be healthy without serious conditions that could cost a lot for Canadian health care",
      },
      r4: {
        type: String,
        default: "The sponsored person couldn’t show they can fit into Canadian life. This means being willing to learn English or French and respecting Canadian rules.",
      },
      r5: {
        type: String,
        default: "Giving incorrect information in your application could also lead to rejection.",
      },
    
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have achieved approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate..",
      },
      s2: {
        type: String,
        default:
          "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
      },
  },
  {
    timeStamps: true,
  }
);

let parentsGrandParSection = mongoose.model(
  "Parents and Grandparents Program (PGP)",
  parentsGrandParSchema
);
module.exports = parentsGrandParSection;
