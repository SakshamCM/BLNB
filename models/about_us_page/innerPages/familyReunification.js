let mongoose = require("mongoose");
let familyReunificationSchema = mongoose.Schema(
  {
    FamilyHeading: {
      type: String,
      default: "Family Reunification and Sponsorship",
    },
    FamilyPara1: {
      type: String,
      default:
        "Canada is renowned for its welcoming spirit and commitment to diversity, making it a haven for immigrants looking for a better life. When it comes to family reunification, Canada has established a comprehensive program that allows Canadian citizens and permanent residents to bring their loved ones to the country.",
    },
    FamilyPara2: {
      type: String,
      default:"Canada's Family Reunification Program is one of the three main pathways to permanent residency in Canada, alongside economic immigration and refugee protection. It allows Canadian citizens and permanent residents to sponsor certain relatives to immigrate to Canada as permanent residents."
    },

    CategoriesHeading: {
        type: String,
        default: "Categories Who Can Be Sponsored",
      },


      EligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for Family Reunification and Sponsorship Program",
    },
    EligibilitySubHeading: {
        type: String,
        default: "The requirements for this program can vary depending on the relationship between the sponsor and the person being sponsored. However, if you’re the sponsor, you must meet the following general requirements:",
      },
    e1: {
      type: String,
      default: "Age: Should be at least 18 years old.",
    },
    e2: {
      type: String,
      default:
        "Residency: Should be a Canadian citizen or permanent resident.",
    },
    e3: {
      type: String,
      default: "Support: Should be physically and financially able to support the person being sponsored.",
    },
    e4: {
      type: String,
      default: "Criminal Record: Have a clean criminal record.",
    },
    e5: {
      type: String,
      default:
        "Housing: Should be able to provide adequate housing for the person being sponsored.",
    },
  
    HowApplyHeading: {
      type: String,
      default: "How to Apply for the Family Reunification and Sponsorship Program",
    },
    ha1: {
      type: String,
      default:
        "Complete a comprehensive application form, providing detailed information about yourself, your relationship to the person being sponsored, and your financial and housing arrangements.",
    },
    ha2: {
      type: String,
      default:
        "Pay the application fee for sponsorship, which is currently CAD$1,080 for spousal sponsorship and CAD$1,080 for parent and grandparent sponsorship.",
    },
    ha3: {
      type: String,
      default:
        "If the sponsorship application is approved, the person you are sponsoring will receive an invitation to apply for permanent residence.",
    },
    ha4: {
      type: String,
      default:
        "Ensure the person you are sponsoring completes a separate permanent residence application, providing details about their education, work experience, and language skills.",
    },
    RefusalHeading: {
      type: String,
      default: "Reasons for Refusals of Family Reunification and Sponsorship",
    },
    r1: {
      type: String,
      default:
        "It is crucial to provide complete and accurate information in your application. Missing or incorrect details can raise red flags and lead to a refusal.",
    },
    r2: {
      type: String,
      default:
        "Sponsors must demonstrate their ability to financially support the family members they are sponsoring. This means having sufficient income and assets to meet their basic needs",
    },
    r3: {
      type: String,
      default:
        "The immigration authorities may need to verify the genuineness of the relationship between the sponsor and the person being sponsored. This may involve providing documentation such as marriage certificates, birth certificates, or joint financial records. Failure to do so will lead to refusal.",
    },
  
    StillNotHeading: {
      type: String,
      default: "Still not sure?",
    },
    s1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have got approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
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

let familyReunificationSection = mongoose.model(
  "Family Reunification and Sponsorship",
  familyReunificationSchema
);
module.exports = familyReunificationSection;
