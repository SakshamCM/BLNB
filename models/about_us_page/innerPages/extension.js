let mongoose = require("mongoose");
let extensionSchema = mongoose.Schema(
  {
    extensionHeading: {
      type: String,
      default: "Extension of Temporary Status",
    },
    extensionPara: {
      type: String,
      default:
        "The plans can change, and you may need to extend your stay in Canada for various reasons. Let us guide you to maintain your legal status in Canada.If you are visiting Canada for leisure, work, family visits, studies, or temporary employment, your circumstances may change, and you may need to extend your stay beyond the initially specified duration in your visa. In such cases, you typically need to apply for an extension to maintain valid legal status in Canada.",
    },

//


BenifitHeading: {
    type: String,
    default: "Benefits of Extending Your Temporary Status",
  },
  
b1: {
  type: String,
  default: "You can stay longer in Canada after applying for an extension, without having to leave Canada and come back.",
},
b2: {
  type: String,
  default: "By not needing to travel outside of Canada, you save money on travel expenses such as flights, accommodation, and other associated costs.",
},
b3: {
    type: String,
    default: "Applying for an extension ensures that you adhere to Canadian immigration laws and regulations, avoiding any potential penalties or issues with future visa applications.",
  },

  //
    HowToApplyHeading: {
      type: String,
      default: "How to Apply for an Extension of Temporary Status?",
    },
    HowToApplySubHead: {
        type: String,
        default: "To extend your visitor status in Canada, you'll need to gather the following documents. Please note that this is a general list, and you may be required to provide additional documents depending on your specific circumstances.",
      },

    ha1: {
      type: String,
      default:
        "Complete the appropriate visitor record extension application forms.",
    },
    ha2: {
      type: String,
      default:
        "Pay the applicable application fee.",
    },
    ha3: {
      type: String,
      default:
        "Submit a copy of your valid passport.",
    },
    ha4: {
        type: String,
        default:
          "Provide evidence of sufficient financial funds to support yourself.",
      },

      ha5: {
        type: String,
        default:
          "Provide a strong reason why you want to continue to live in Canada.",
      },

      ha6: {
        type: String,
        default:
          "Provide compelling reasons about why you will leave Canada after the end of the proposed stay.",
      },
//
  
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you have received a refusal for any reason, do not worry. With over a decade of experience, we specialize in previously refused cases. We have secured approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
      },
      s2: {
        type: String,
        default:
          "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
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

let extensionSection = mongoose.model(
  "Extension of Temporary Status",
  extensionSchema
);
module.exports = extensionSection;
