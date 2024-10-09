let mongoose = require("mongoose");
let nonSdsSchema = mongoose.Schema(
  {
    nonSdsHeading: {
      type: String,
      default: "Non-Student Direct Stream (Non-SDS) / General Student Visa",
    },
    nonSdsPara1: {
      type: String,
      default:
        "While the Student Direct Stream (SDS) program offers a streamlined application process for select countries, the Non-SDS Canada Student Visa program extends this opportunity to students from all corners of the globe.",
    },
    nonSdsPara2: {
      type: String,
      default:"The Non-SDS or General Student Visa is an option for international students who do not meet the eligibility requirements for the Student Direct Stream (SDS) program. The SDS program offers a streamlined visa application process with faster processing times for certain eligible students from India and Brazil. Non-SDS applicants, on the other hand, must undergo a more comprehensive application process, which may take longer to process."
    },
    nonSdsPara3: {
        type: String,
        default:"While Non-SDS or General Student Visa offers greater flexibility in terms of nationality and program selection, it also entails a lengthier application process and more stringent documentation requirements. Let's look into the pros and cons of this visa to help you make an informed decision."
      },

    //

    
    ProsConsHeading: {
        type: String,
        default: "Pros and Cons",
      },

    ProsHeading: {
        type: String,
        default: "Pros:",
      },
      ProsLi1: {
        type: String,
        default: "No specific nationality requirements",
      },
      ProsLi2: {
        type: String,
        default: "Allows students from all countries to apply",
      },
      ProsLi3: {
        type: String,
        default: "More flexibility in choosing a DLI",
      },
      ProsLi4: {
        type: String,
        default: "No language score requirements for certain programs",
      },
//
    ConsHeading: {
        type: String,
        default: "Cons:",
      },
      ConsLi1: {
        type: String,
        default: "Longer application process",
      },
      ConsLi2: {
        type: String,
        default: "Processing times can be unpredictable.",
      },
      ConsLi3: {
        type: String,
        default: "Higher funds are required.",
      },
      ConsLi4: {
        type: String,
        default: "More strict documentation requirements",
      },

    //

      EligibilityHeading: {
      type: String,
      default: "Eligibility for Non-SDS Program",
    },

    e1: {
      type: String,
      default: "You need to have a valid offer of admission from a designated learning institution (DLI) in Canada.",
    },
    e2: {
      type: String,
      default:
        "Hold a provincial attestation letter (PAL) from the province or territory where you plan to study.",
    },
    e3: {
        type: String,
        default:
          "Demonstrate adequate English language proficiency, typically with an IELTS score of 6.0 for undergraduate studies and 6.5 for postgraduate studies. See Chart Below for Other Accepted Language tests and its requirements.",
      },
      e4: {
        type: String,
        default:
          "Show sufficient funds to support yourself during your studies in Canada. This may include personal savings, parental support, or external scholarships.",
      },
      e5: {
        type: String,
        default: "Also, you should meet all other Canadian immigration requirements, such as criminal background checks and medical exams.",
      },


  //
  eligibTabHeading: {
    type: String,
    default: "Minimum language test scores required:",
  },
  eligibTabEnglanTestHead1: {
    type: String,
    default: "English Language Test",
  },

  eligibTab1Value1: {
    type: String,
    default: "IELTS Academic (Grade 12)",
  },
  eligibTab1Value2: {
    type: String,
    default: "IELTS Academic (Graduation)",
  },
  eligibTab1Value3: {
    type: String,
    default: "CELPIP General",
  },
  eligibTab1Value4: {
    type: String,
    default: "PTE Academic",
  },
  eligibTab1Value5: {
    type: String,
    default: "TOEFL iBT",
  },
  eligibTab1Value6: {
    type: String,
    default: "CAEL",
  },
  eligibTab1Value7: {
    type: String,
    default: "NIVEAUX DE compétence linguistique canadiens",
  },

///

  eligibTabMinScReqSDSHead2: {
    type: String,
    default: "Minimum Score Required for SDS",
  },
  eligibTab2Value1: {
    type: String,
    default: "Overall 6.0 - 5.5 acceptable in one of the modules",
  },
  eligibTab2Value2: {
    type: String,
    default: "Overall 6.5 - no less than 6 in any of the modules",
  },
  eligibTab2Value3: {
    type: String,
    default: "7 in each module",
  },
  eligibTab2Value4: {
    type: String,
    default: "60",
  },
  eligibTab2Value5: {
    type: String,
    default: "83",
  },
  eligibTab2Value6: {
    type: String,
    default: "60",
  },
  eligibTab2Value7: {
    type: String,
    default: "Score of at least 7 for French*",
  },
  //
  CheckCLBHeading: {
    type: String,
    default: "Check what CLB score you need to achieve to meet CLB criteria.",
  },

    AppProcesHeading: {
      type: String,
      default: "Application Process (how to apply)",
    },
    AppProcesSubHeading: {
        type: String,
        default: "The application process for a Non-SDS Canada or General Student Visa involves you submitting your complete application package to the Canadian government. This package should typically include:",
      },

    ap1: {
      type: String,
      default:
        "Your completed application forms.",
    },
    ap2: {
      type: String,
      default:
        "Your passport or travel document.",
    },
    ap3: {
      type: String,
      default:
        "Proof of identity.",
    },
    ap4: {
        type: String,
        default:
          "Hold a Provincial attestation letter (PAL) from the province or territory where you plan to study.",
      },
      ap5: {
        type: String,
        default:
          "Proof of funds. (See Chart Below)",
      },
      ap6: {
        type: String,
        default:
          "Your letter of acceptance from a DLI.",
      },
      ap7: {
        type: String,
        default:
          "English language proficiency test results.",
      },
      ap8: {
        type: String,
        default:
          "Medical exam results.",
      },
      ap9: {
        type: String,
        default:
          "Police certificates from your home country and any other country you have lived in for more than six months.",
      },

//

   ProofFundHeading: {
      type: String,
      default: "Proof of Funds Chart updated as per new guidelines Jan 2024",
    },

    ProofFundTable1Head1: {
        type: String,
        default: "Single Applicant",
      },

      ProofFund1Table11: {
        type: String,
        default: "Tuition Fees",
      },
      ProofFund1Table12: {
        type: String,
        default: "Living Expense",
      },
      ProofFund1Table13: {
        type: String,
        default: "Transportation",
      },
      ProofFund1Table14: {
        type: String,
        default: "Minimum Funds Required",
      },

      ProofFundTable1Head2: {
        type: String,
        default: "Cost",
      },

      ProofFund1Table21: {
        type: String,
        default: "$20,000.00",
      },
      ProofFund1Table22: {
        type: String,
        default: "$20,636.00",
      },
      ProofFund1Table23: {
        type: String,
        default: "$2,000.00",
      },
      ProofFund1Table24: {
        type: String,
        default: "$42,636.00",
      },

//
      ProofFundTable2Head1: {
        type: String,
        default: "Family of 2",
      },

      ProofFund2Table11: {
        type: String,
        default: "Tuition Fees",
      },
      ProofFund2Table12: {
        type: String,
        default: "Living Expense",
      },
      ProofFund2Table13: {
        type: String,
        default: "Transportation",
      },
      ProofFund2Table14: {
        type: String,
        default: "Minimum Funds Required",
      },


      ProofFundTable2Head2: {
        type: String,
        default: "Cost",
      },

      ProofFund2Table21: {
        type: String,
        default: "$20,000.00",
      },
      ProofFund2Table22: {
        type: String,
        default: "$25,691.00",
      },
      ProofFund2Table23: {
        type: String,
        default: "$4,000.00",
      },
      ProofFund2Table24: {
        type: String,
        default: "$49,691.00",
      },
//
/////

//
ProofFundTable3Head1: {
    type: String,
    default: "Family of 4",
  },

  ProofFund3Table11: {
    type: String,
    default: "Tuition Fees",
  },
  ProofFund3Table12: {
    type: String,
    default: "Living Expense",
  },
  ProofFund3Table13: {
    type: String,
    default: "Transportation",
  },
  ProofFund3Table14: {
    type: String,
    default: "Minimum Funds Required",
  },


  ProofFundTable3Head2: {
    type: String,
    default: "Cost",
  },

  ProofFund3Table21: {
    type: String,
    default: "$20,000.00",
  },
  ProofFund3Table22: {
    type: String,
    default: "$38,346.00",
  },
  ProofFund3Table23: {
    type: String,
    default: "$8,000.00",
  },
  ProofFund3Table24: {
    type: String,
    default: "$66,346.00",
  },
//
ProofFundTableOpenPermitHeading: {
    type: String,
    default: "I am an international student. Is my spouse, common law partner, eligible for an Open Work Permit?",
  },
  ProofFundTableOpenPermitPara: {
    type: String,
    default: "As of March 19, 2024, to be eligible to apply for a Spousal Open Work Permit as an international student, you must be enrolled in one of the following programs:",
  },
//////////
GradProgHeading:{
    type: String,
    default: "Graduate Programs:",
  },
  GradProgPara:{
    type: String,
    default: "Graduate programs encompass master’s and doctorate degrees granted by universities or polytechnic institutions.",
  },

///
//////////
ProfDegProgHeading:{
    type: String,
    default: "Professional Degree Programs:",
  },
  ProfDegProgSubHead:{
    type: String,
    default: "Professional degree programs include the following:",
  },
  ProfDegProgList1:{
    type: String,
    default: "Doctor of Dental Surgery (DDS, DMD)",
  },
  ProfDegProgList2:{
    type: String,
    default: "Bachelor of Law or Juris Doctor (LLB, JD, BCL)",
  },
  ProfDegProgList3:{
    type: String,
    default: "Doctor of Medicine (MD)",
  },
  ProfDegProgList4:{
    type: String,
    default: "Doctor of Optometry (OD)",
  },
  ProfDegProgList5:{
    type: String,
    default: "Pharmacy (PharmD, BS, BSc, BPharm)",
  },
  ProfDegProgList6:{
    type: String,
    default: "Doctor of Veterinary Medicine (DVM)",
  },
  ProfDegProgList7:{
    type: String,
    default: "Bachelor of Science in Nursing (BScN, BSN, BNSc)",
  },
  ProfDegProgList8:{
    type: String,
    default: "Bachelor of Education (BEd)",
  },
  ProfDegProgList9:{
    type: String,
    default: "Bachelor of Engineering (BEng, BE, BASc) (only)",

  },
///
    RefusalHeading: {
      type: String,
      default: "Don’t forget to avoid these common Non-SDS or General Student Visa refusal reasons and increase your chances of approval.",
    },
    r1: {
      type: String,
      default:
        "Your application is incomplete, and you did not share all the required documentation.",
    },
    r2: {
      type: String,
      default:
        "You do not have enough money to support yourself during your stay in the country.",
    },
    r3: {
      type: String,
      default:
        "Your health condition poses a risk to public health.",
    },
    r4: {
        type: String,
        default:
          "You submitted fraudulent documents in your application.",
      },
  
      r5: {
        type: String,
        default:
          "You may have violated the terms of your previous visa, such as overstaying or working illegally.",
      },

    //
  
    InCaseHeading: {
      type: String,
      default: "In Case,",
    },
    inCase1: {
      type: String,
      default:
        "If you have faced a refusal for any of the reasons mentioned above, don't worry. With over 10 years of experience, we specialize in handling previously refused cases. We have successfully secured approval for students who have had multiple refusals, long gaps in education, and are of mature age.",
    },
    inCase2: {
      type: String,
      default:
        "We achieve this by tailoring our approach to your specific case and addressing each concern raised by the officer in previous refusals. Using case law, we identify similar cases with positive outcomes and apply them as precedents in the cases we handle. This is why we have a high success rate, with over 90% approval in such cases. At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
    },
  },
  {
    timeStamps: true,
  }
);

let nonSdsSection = mongoose.model(
  "Non-Student Direct Stream (Non-SDS)  Program",
  nonSdsSchema
);
module.exports = nonSdsSection;
