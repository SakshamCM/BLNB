let mongoose = require("mongoose");
let restorationStatusDraftSchema = mongoose.Schema(
  {
    restorationStatusDraftHeading: {
      type: String,
      default: "Restoration of Status",
    },
    restorationStatusDraftPara1: {
      type: String,
      default:
        "Are you a temporary resident in Canada who has lost status? Don't despair! There is a way to regain your legal standing in Canada.",
    },
    restorationStatusDraftPara2: {
        type: String,
        default:
          "The restoration of status is a process that provides temporary residents with a second chance to maintain their legal presence in Canada. If your temporary status (student visa, visitor permit, or work permit) lapses or expires and you did not apply for an extension before the expiry date, you will be considered out of status. At this point, you have a few options. You can either depart Canada immediately or apply to restore your temporary status. You have a maximum of 90 days from the date your status expires to apply for restoration of your status.",
      },
      restorationStatusDraftPara3: {
        type: String,
        default:
          "This is a very serious situation that should be handled with the utmost importance, as any further delay could have a negative impact on any future applications you may submit. If you meet specific eligibility requirements, you can apply to reinstate your status and continue enjoying the advantages of living and working in Canada.",
      },
      restorationStatusDraftPara4: {
        type: String,
        default:
          "Important things to know: If you're a student or worker on temporary status, you're not allowed to work or study while your restoration application is under review.",
      },
//


HowToCheckHeading: {
    type: String,
    default: "How to Check if Your Immigration Status is Valid",
  },
  HowToCheckSubHead: {
    type: String,
    default: "To check if your stay in Canada is still allowed, look for the expiration date printed on your permits. These dates provide an indication of your temporary permission to remain in Canada until that point.",
  },
hc1: {
  type: String,
  default: "If you are visiting Canada as a tourist, your stay is typically valid for 6 months from the date you entered the country.",
},
hc2: {
  type: String,
  default: "It is illegal to stay in Canada beyond the authorized period. If your stay expires and you have not applied for an extension, you must apply for restoration of status within 90 days.",
},

///


WhatAreRequHeading: {
    type: String,
    default: "What Are the Requirements for Restoration of Your Status?",
  },
  WhatAreRequSubHead: {
    type: String,
    default: "To regain your legal status in Canada, you must meet the following requirements:",
  },
  WRLi1: {
    type: String,
    default: "Apply for restoration of status within 90 days (3 months) of your status expiration.",
  },
  WRLi2: {
  type: String,
  default: "Maintain the initial requirements and conditions of your stay, whether it is for study, work, or visiting Canada.",
},
WRLi3: {
  type: String,
  default: "Adhere to all conditions imposed on your stay, including not engaging in unauthorized work.",
},
WrNote: {
    type: String,
    default: "Important Tip: Restoration of status cannot be granted at any Canadian port of entry, so you must apply while you are still in the country.",
  },

  //
  HowToApplyHeading: {
      type: String,
      default: "How to Apply for Restoration of Status",
    },

    HowToApplySubHead: {
      type: String,
      default: "To apply for status restoration, you will need to provide specific documents and information to Immigration, Refugees and Citizenship Canada (IRCC). The specific requirements vary based on the type of restoration you are seeking, whether it's for a visitor, student, or worker. It is crucial to complete the correct forms for your restoration type and submit the necessary documents to increase the chances of your application being approved. Here are a few general guidelines:",
    },

    haLi1: {
      type: String,
      default: "Provide a compelling reason why your previous status expired.",
    },
    haLi2: {
      type: String,
      default: "Submit photocopies of all valid pages of your passport.",
    },
    haLi3: {
      type: String,
      default: "Attach a photocopy of your last valid immigration document, such as a visitor visa, work permit, or study permit.",
    },
    haLi4: {
      type: String,
      default: "If you are applying for restoration as a spouse, provide a copy of your marriage certificate or license (if applicable).",
    },
    haLi5: {
      type: String,
      default: "Showcase sufficient financial means to support yourself during your extended stay in Canada.",
    },
//

RefusalHeading: {
  type: String,
  default: "Common Reasons for Refusal of Restoration of Status Applications",
},

r1: {
  type: String,
  default: "Missed the deadline to submit the restoration application within 90 days of the expiry of status.",
},
r2: {
  type: String,
  default: "Missed the deadline to submit the restoration application within 90 days of the expiry of status.",
},
r3: {
  type: String,
  default: "Did not answer the questions in the application form correctly, completely, and truthfully.",
},
r4: {
  type: String,
  default: "Applied for the wrong type of intent along with the restoration application.",
},
r5: {
  type: String,
  default: "Paid insufficient fees to IRCC.",
},
//
  
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you have received a refusal for any reason, do not worry. With over a decade of experience, we specialize in previously refused cases. We have obtained approvals for clients who had multiple previous refusals.",
      },
      s2: {
        type: String,
        default:
          "We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in the cases we work on. This is why we have a high success rate.",
      },
      s3: {
        type: String,
        default:
          "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
      },
      //

  },
  {
    timeStamps: true,
  }
);

let restorationStatusDraftSection = mongoose.model(
  "Restoration of Status program",
  restorationStatusDraftSchema
);
module.exports = restorationStatusDraftSection;
