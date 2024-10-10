let mongoose = require("mongoose");
let superVisaSchema = mongoose.Schema(
  {
    superVisaHeading: {
      type: String,
      default: "Super Visa",
    },
    superVisaPara: {
      type: String,
      default:
        "The Super Visa is a temporary visa program offered to parents and grandparents of Canadian citizens or permanent residents.",
    },


    //
    BenifitsHeading: {
        type: String,
        default: "Benefits of Super Visa",
      },
 
      BenifitsList1: {
        type: String,
        default: "It allows them to visit their children or grandchildren in Canada for up to five continuous years from their first arrival, with no requirement to extend their status during this five-year stay.",
      }, 
      BenifitsList2: {
        type: String,
        default: "This is a multiple-entry visa option, granting multiple entries over up to 10 years or until the passport expires.",
      }, 

    //

        //
        EligibilityHeading: {
            type: String,
            default: "Eligibility Criteria for Super Visa",
          },

          EligibilitySubHead: {
            type: String,
            default: "To meet the eligibility requirements for a Super Visa, you as the sponsor (child or grandchild in Canada) must:",
          },

          EligibilityList1: {
            type: String,
            default: "Be a Canadian citizen or permanent resident of Canada.",
          }, 
          EligibilityList2: {
            type: String,
            default: "Provide proof of your relationship with your parents or grandparents.",
          }, 

          EligibilityList3: {
            type: String,
            default: "Meet the income requirements set by the Government of Canada. Check the income requirement in the chart below:",
          }, 

          EligibilityList4: {
            type: String,
            default: "Provide proof that you have medical insurance for your parents/grandparents from a Canadian insurance company. The insurance must meet the following criteria:",
          }, 
          EligibilitySub4List1: {
            type: String,
            default: "Valid for at least one year from the date of entry.",
          }, 
          EligibilitySub4List2: {
            type: String,
            default: "Coverage of at least $100,000.",
          }, 
          EligibilityList5: {
            type: String,
            default: "Proof that the medical insurance has been paid in full or that monthly payments have been set up.",
          }, 

          ApartHeading: {
            type: String,
            default: "Apart from these basic requirements",
          },
          ApartSubHead: {
            type: String,
            default: "there are some additional requirements that your parents/grandparents will need to meet:",
          },

          ApartLi1: {
            type: String,
            default: "Their Super Visa application must be submitted from outside Canada.",
          },
          ApartLi2: {
            type: String,
            default: "They must pass the immigration medical exam to qualify.",
          },
          ApartLi3: {
            type: String,
            default: "They must meet the requirement to pass a security and health eligibility check.",
          },
          ApartLi4: {
            type: String,
            default: "If they are inadmissible to Canada, they do not qualify for this program.",
          },
        //
        SuperVisaTabHeading: {
            type: String,
            default: "Super Visa Income Table",
          },
          SuperVisaTabSubHead: {
            type: String,
            default: "Minimum necessary income requirements Updated as of June 3, 2024:",
          },
          SuperVisaTabSubHead2: {
            type: String,
            default: "Low Income Cut-Off (LICO):",
          },  

          SupVTabHead1: {
            type: String,
            default: "Size of Family Unit",
          }, 
          SupVTabHead1P1: {
            type: String,
            default: "1 person (your child or grandchild)",
          }, 
          SupVTabHead1P2: {
            type: String,
            default: "2 persons",
          }, 
          SupVTabHead1P3: {
            type: String,
            default: "3 persons",
          }, 
          SupVTabHead1P4: {
            type: String,
            default: "4 persons",
          }, 
          SupVTabHead1P5: {
            type: String,
            default: "5 persons",
          }, 
          SupVTabHead1P6: {
            type: String,
            default: "6 persons",
          }, 
          SupVTabHead1P7: {
            type: String,
            default: "7 or more",
          }, 
          SupVTabHead1P8: {
            type: String,
            default: "More than 7 persons, for each additional person, add",
          }, 
//

          SupVTabHead2: {
            type: String,
            default: "Minimum Necessary Gross Income",
          }, 
          SupVTabHead2P1: {
            type: String,
            default: "$29,380",
          }, 
          SupVTabHead2P2: {
            type: String,
            default: "$36,576",
          }, 
          SupVTabHead2P3: {
            type: String,
            default: "$44,966",
          }, 
          SupVTabHead2P4: {
            type: String,
            default: "$54,594",
          }, 
          SupVTabHead2P5: {
            type: String,
            default: "$61,920",
          }, 
          SupVTabHead2P6: {
            type: String,
            default: "$69,834",
          }, 
          SupVTabHead2P7: {
            type: String,
            default: "$77,750",
          }, 
          SupVTabHead2P8: {
            type: String,
            default: "$7,916",
          }, 
//
   
HowtoApplyHeading: {
    type: String,
    default: "How to Apply",
  },
  HowtoApplySubHead: {
    type: String,
    default: "To start the application process, there are several forms and steps that you, as the applicant, will need to complete. The steps are as follows:",
  },

 ha1: {
    type: String,
    default: "Check your income requirements to ensure you meet the latest standards.",
  },
  ha2: {
    type: String,
    default: "Obtain upfront medical clearance from a doctor authorized by IRCC.",
  },
  ha3: {
    type: String,
    default: "Secure medical insurance that complies with IRCC guidelines.",
  },
  ha4: {
    type: String,
    default: "Complete all required documents for the Super Visa application.",
  },
  ha5: {
    type: String,
    default: "Submit your Super Visa application.",
  },
  //    
      RefusalHeading: {
        type: String,
        default: "Common Reasons for Refusal",
      },

      r1: {
        type: String,
        default: "Sponsor does not have sufficient financial support based on family size. This is a common reason for refusal because you may have miscalculated your funds based on the income chart and family size.",
      },
      r2: {
        type: String,
        default: "Immigration officer feels that your ties to your home country are not strong. This means you have not demonstrated strong connections to your home country, such as a job, family, and property.",
      },
      r3: {
        type: String,
        default: "Immigration officer feels that you will not leave Canada at the end of your stay. This means the officer believes you have intentions to immigrate to Canada permanently.",
      },
      r4: {
        type: String,
        default: "You have previous refusals from IRCC that have not been explained in the current application submission. This means you have prior applications that were denied and you have not provided a satisfactory explanation for those refusals.",
      },
      r5: {
        type: String,
        default: "Your medical insurance coverage was inadequate according to the set requirements. This means the insurance policy you provided does not meet the minimum coverage standards required for Super Visa holders.",
      },
      r6: {
        type: String,
        default: "Documents you provided were either incomplete or inaccurate. This means the documents you submitted were not complete or contained errors, which may lead to refusal and even misrepresentation charges.",
      },  

      rPara1: {
        type: String,
        default: "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have got approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
      },  

      rPara2: {
        type: String,
        default: "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
      },  

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

let superVisaSection = mongoose.model(
  "Super Visa program",
  superVisaSchema
);
module.exports = superVisaSection;
