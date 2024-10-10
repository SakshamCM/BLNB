let mongoose = require("mongoose");
let buisinessVisitorVisaSchema = mongoose.Schema(
  {
    buisinessVisitorVisaaHeading: {
      type: String,
      default: "Business Visitor Visa",
    },
    buisinessVisitorVisaSubHead: {
        type: String,
        default:
          "Business Visitors in Canada: Meetings, Events, and Conferences.",
      },
    buisinessVisitorVisaPara: {
      type: String,
      default:
        "Business Visa is a great option for business owners who want to travel to Canada for purposes of exploring business opportunities. The best part about this program is that you do not require any sponsorship.",
    },

    ActivitiesHeading: {
        type: String,
        default: "As a business visitor, you may engage in the following activities:",
      },

      a1: {
        type: String,
        default: "Purchasing Canadian goods or services for a foreign business or government.",
      },
      a2: {
        type: String,
        default: "Accepting orders for goods or services.",
      },
      a3: {
        type: String,
        default: "Attending meetings, conferences, conventions, or trade fairs.",
      },
      a4: {
        type: String,
        default: "Providing after-sales service related to warranties or sales agreements.",
      },
      a5: {
        type: String,
        default: "Receiving training from a Canadian parent company (while employed outside Canada).",
      },
      a6: {
        type: String,
        default: "Training employees of a Canadian branch of a foreign company.",
      },
      a7: {
        type: String,
        default: "Receiving training from a Canadian company that sold you equipment or services.",
      },

      ActivitiesSubHead: {
        type: String,
        default: "Additional Considerations",
      },
      ActivitiesSubPara: {
        type: String,
        default: "<strong>Canada-United States-Mexico Agreement (CUSMA):</strong>  U.S. or Mexican nationals may participate in other activities such as research, marketing, and general services. Refer to the Global Affairs Canada website for details.",
      },
       

////

EligibilityHeading: {
    type: String,
    default: "Eligibility criteria for a Business Visitor Visa?",
  },
  EligibilityPara: {
    type: String,
    default: "Before proceeding, learn whether you qualify as a business visitor or if you need to apply for a work permit instead. Business visitors typically stay in Canada for a few days or weeks to attend meetings or events, with a maximum stay of up to 6 months. A separate application can be filed to extend the stay.",
  },
  EligLiHead: {
    type: String,
    default: "To qualify as a business visitor, you must meet the following requirements:",
  },


  e1: {
    type: String,
    default: "<strong>Duration of Stay:</strong>Your planned stay is less than 6 months.",
  },
  e2: {
    type: String,
    default: "<strong>Non-Engagement in Canadian Labor Market: </strong> You do not intend to enter the Canadian labor market.",
  },
  e3: {
    type: String,
    default: "<strong>Business Ties Outside Canada: </strong>Your primary business operations, income, and profits are outside Canada.",
  },
  e4: {
    type: String,
    default: "<strong>Documentary Support:</strong>You possess documents supporting your application.",
  },
  e5: {
    type: String,
    default: "<strong>Basic Entry Requirements: </strong>You meet Canada’s basic entry criteria, including:",
  },
  e5SubLi1: {
    type: String,
    default: "Valid travel document (e.g., passport)",
  },
  e5SubLi2: {
    type: String,
    default: "Adequate funds for your stay and return",
  },
  e5SubLi3: {
    type: String,
    default: "Intent to leave Canada at the end of your stay",
  },
  e5SubLi4: {
    type: String,
    default: "No criminal, security, or health risks to Canadians",
  },

  EligLastPara: {
    type: String,
    default: "If your stay exceeds 6 months or involves working in Canada, you may be considered a temporary worker and need to apply for a work permit.",
  },
  ///
  ////
  /////
 EventCodeHeading: {
      type: String,
      default: "Event Code (if Applicable)",
    },

      e1: {
        type: String,
        default: "If you require a business visitor visa for Canada and your meeting, event, or conference is registered with Immigration, Refugees and Citizenship Canada (IRCC), your organizer will provide an event code.",
      },      
      e2: {
        type: String,
        default: "Include this event code on your visa application form to indicate your participation in a registered event.",
      },      
    //
    EssenDocuHeading: {
    type: String,
    default: "Essential Documents for Entry",
 },
 EssenDocuPara: {
    type: String,
    default: "Upon arrival at the border, ensure you have the following documents:",
 },

 ed1: {
    type: String,
    default: "Valid passport or travel document for the entire stay.",
 },
 ed2: {
    type: String,
    default: "Visitor visa (if applicable).",
 },
 ed3: {
    type: String,
    default: "Same passport used in your eTA application (if applicable).",
 },
 ed4: {
    type: String,
    default: "For U.S. lawful permanent residents (green card holders), a valid green card and passport from your country of nationality (or equivalent document).",
 },
 ed5: {
    type: String,
    default: "Letters of support from your parent company.",
 },
 ed6: {
    type: String,
    default: "Letter of invitation from the Canadian host business or recognition letter from the Canada Border Services Agency.",
 },
 ed7: {
    type: String,
    default: "Relevant documents such as warranty or service agreements.",
 },
 ed8: {
    type: String,
    default: "24-hour contact details of your business host in Canada.",
 },
 ed9: {
    type: String,
    default: "Proof of sufficient funds to cover your stay and return journey.",
 },

////
 
//
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you have received a refusal or have doubts regarding your case and application, do not worry. With over a decade of experience, we specialize in handling previous refusals. Our approval rate for these programs is nearly 100%. We have achieved this with a tailored approach to your specific case, using case law and finding similar cases with positive results as precedents.",
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
          "At Brightlight Immigration, we are committed to providing you with expert assistance throughout your immigration journey. Our experienced team is dedicated to achieving the best possible outcomes for our clients.",
      },
  },
  {
    timeStamps: true,
  }
);

let buisinessVisitorVisaSection = mongoose.model(
  "Business Visitor Visa program",
  buisinessVisitorVisaSchema
);
module.exports = buisinessVisitorVisaSection;
