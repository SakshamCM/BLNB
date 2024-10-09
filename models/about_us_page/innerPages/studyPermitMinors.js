let mongoose = require("mongoose");
let studyPermitMinorsSchema = mongoose.Schema(
  {
    StudyPerMinHeading: {
      type: String,
      default: "Canadian Study Permit for Minors",
    },
    StudyPerMinPara1: {
      type: String,
      default:
        "As parents, we all aspire to provide our children with the best possible foundation for their future. Canada offers a unique and enriching educational experience that can set your child on a path to success and global citizenship. A study permit for minors allows a child under the age of 18 to attend any type of educational institution in Canada, including elementary schools, secondary schools, vocational schools, colleges, and universities. Minors who want to study in Canada for more than 6 months must apply for a study permit before they enter the country.",
    },
    StudyPerMinLiHead: {
        type: String,
        default:
          "In general, minors who intend to study in Canada for six months or more will need to apply for a study permit. However, there are a few exceptions to this rule:",
      },
      StudyPerMinLi1: {
        type: String,
        default:
          "Minors who are refugees or refugee claimants do not need a study permit if they are accompanied by their parents or if they have a custodian in Canada who is a Canadian citizen or permanent resident.",
      },
      StudyPerMinLi2: {
        type: String,
        default:
          "Minors who are children of Canadian citizens or permanent residents do not need a study permit.",
      },
      StudyPerMinLi3: {
        type: String,
        default:
          "Minors who are attending preschool, primary school, or secondary school in Canada and are accompanied by a parent who has authorization to study or work in Canada do not need a study permit.",
      },
//

      EligibilityHeading: {
      type: String,
      default: "Eligibility for the Program",
    },
    
  e1: {
    type: String,
    default: "Be between the ages of 12 and 17",
  },
  e2: {
    type: String,
    default: "Have a valid acceptance letter from a designated learning institution (DLI) in Canada",
  },
  e3: {
      type: String,
      default: "Be able to show that you or your child have enough money to support themselves in Canada",
    },
    e4: {
      type: String,
      default: "Do not pose a risk to public safety or security",
    },
    e5: {
      type: String,
      default: "Be able to speak and understand at least one of Canada's official languages (English or French)",
    },

  //
    AppProcHeading: {
      type: String,
      default: "Application Process",
    },
    AppProcSubHead: {
        type: String,
        default: "Meet the eligibility criteria? Let's see how you or your child can apply for a Study Permit for minors. The application process is similar to the application process for an adult, refer to the student visa page. However, some additional documents are required, such as:",
      },

    ap1: {
      type: String,
      default:
        "A letter of acceptance from the educational institution in Canada that the minor is going to.",
    },
    ap2: {
      type: String,
      default:
        "Proof of financial support, such as bank statements, letters of support from family members, or proof of scholarships or financial aid.",
    },
    ap3: {
      type: String,
      default:
        "A medical certificate from a doctor in the minor's home country.",
    },
    ap4: {
        type: String,
        default:
          "A police certificate from the minor's home country.",
      },

      ap5: {
        type: String,
        default:
          "Proof of travel documents (passport or travel document number).",
      },

      ap6: {
        type: String,
        default:
          "A recent photograph of the minor.",
      },

      RefusalHeading: {
        type: String,
        default: "Reasons for Refusal",
      },

      r1: {
        type: String,
        default: "The nature of the minor's program of study is irrelevant.",
      },
      r2: {
        type: String,
        default: "The minor's age is not between 12 and 17.",
      },
      r3: {
        type: String,
        default: "The minors does not have sufficient funds to support themselves during their studies, including tuition fees, accommodation, food, and other living expenses.",
      },
      r4: {
        type: String,
        default: "The IRCC officer is not convinced with the minor's academic record, language proficiency, and other factors to determine if they are likely to succeed in their studies.",
      },
      r5: {
        type: String,
        default: "The minor does not have the intention to return to their home country.",
      },
    
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you or your child have faced a refusal for any of the reasons mentioned above, don't worry. With over 10 years of experience, we specialize in handling previously refused cases. We have successfully secured approval for students who have had multiple refusals, long gaps in education, and are of mature age. We achieve this by tailoring our approach to your specific case and addressing each concern raised by the officer in previous refusals. Using case law, we identify similar cases with positive outcomes and apply them as precedents in the cases we handle. This is why we have a high success rate, with over 90% approval in such cases. At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
      },
      //
      WhyChooseUsHeading: {
        type: String,
        default: "Why Choose Us?",
      },
      WhyChooseUsPara: {
        type: String,
        default:
          "We offer personalized service and expert advice to ensure your application stands the best chance of approval. Our dedicated team of professionals will guide you through every step of the process, addressing all your concerns and providing you with peace of mind.",
      },
  },
  {
    timeStamps: true,
  }
);

let studyPermitMinorsSection = mongoose.model(
  "Canadian Study Permit for Minors",
  studyPermitMinorsSchema
);
module.exports = studyPermitMinorsSection;
