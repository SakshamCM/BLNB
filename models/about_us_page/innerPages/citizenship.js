let mongoose = require("mongoose");
let citizenshipSchema = mongoose.Schema(
  {
    CitizenshipHeading: {
      type: String,
      default: "Citizenship - The highest form of legal status in Canada",
    },
    CongratulationsHeading : {
      type: String,
      default:"Congratulations on your PR Journey!",
    },
    CongratulationsPara : {
      type: String,
      default:"After completing your 3 years (or staying physically in Canada for at least 1,095 days) of PR journey in Canada, you are now officially going to become a Canadian Citizen. Congratulations. All you are left to do is complete the Canadian Citizenship application through IRCC and enjoy the highest form of legal status in Canada. This is the last step for you to become a Canadian.",
    },
    BenifitHeading: {
        type: String,
        default:"Benefits of becoming a Canadian Citizen:",
    },
    b1: {
      type: String,
      default:"You now have the right to vote and hold office",
    },
    b2: {
        type: String,
        default:"You now have the right to travel internationally with a Canadian passport",
      },
      b3: {
        type: String,
        default:"You can access Canadian social programs and benefits",
      },
      b4: {
        type: String,
        default:"You can now work and live in Canada indefinitely",
      },
      b5: {
        type: String,
        default:"You also have the right to apply for Canadian citizenship for your children",
      },
    EligibilityHeading: {
      type: String,
      default:"Eligibility criteria for Canadian Citizenship",
    },
    EligibilitySubHeading: {
      type: String,
      default:"Are you eligible to file your Canadian Citizenship? Let's find out.",
    },
    e1: {
        type: String,
        default:"You need to be a permanent resident of Canada and have lived in Canada for 3 years out of the past 5 years. You must be present physically in Canada for at least 1,095 days out of the past 5 years.",
      },
      e2: {
        type: String,
        default:"You have filed your taxes in Canada for at least three years during the five years before applying.",
      }, 
         e3: {
        type: String,
        default:"You have to pass a citizenship test. This test is made to assess your knowledge of Canadian history, geography, values, and government.",
      }, 
         e4: {
        type: String,
        default:"Show your skills and proficiency in English or French",
      },
      EligibilityNote:{
        type : String,
        default:"Note that there are some exceptions to these requirements, such as for spouses of Canadian citizens and for individuals who have served in the Canadian Armed Forces.",
      },
      HowApplyHeading: {
        type: String,
        default:"How to apply for Canadian Citizenship?",
      },
      ha1: {
        type: String,
        default:"Before you apply, make sure you meet the eligibility requirements. These include being a permanent resident of Canada, having lived in Canada for at least 3 out of the past 5 years, filing your taxes in Canada for at least three years during the five years before applying, passing a citizenship test, and showing your ability to speak either English or French.",
      },
      ha2: {
        type: String,
        default:"To apply, you'll need to complete the necessary forms, provide supporting documents, and pay the applicable fees.",
      },
      ha3: {
        type: String,
        default:"If you're approved, you'll attend a citizenship ceremony to take the Oath of Citizenship, where you will officially become a Canadian citizen. You will also receive your Canadian citizenship certificate.",
      },
      ha4: {
        type: String,
        default:"We know what it means to you to become a Canadian citizen. We would be honored to help you through the application process and to get you ready for your citizenship ceremony.Click here",
      },
    RefusalHeading: {
      type: String,
      default:"Reasons for refusal of Canadian Citizenship:",
    },
    r1: {
      type: String,
      default:"Non-compliance with residency requirements: To be eligible for Canadian citizenship, you must have lived in Canada for at least 1,095 days (3 years) during the five years before applying. You must also have maintained your permanent resident status throughout this time. If you have not met these residency requirements, your application may be refused.",
    },
    r2: {
      type: String,
      default:"Failure to pass the citizenship test: The citizenship test assesses your knowledge of Canadian history, geography, values, and government. You must achieve a score of 75% or higher to pass the test. If you do not pass the test, you will be required to retake it.",
    },
    r3: {
      type: String,
      default:"Your Inability to Show Language Proficiency: To be eligible for Canadian citizenship, you must showcase your proficiency in either English or French. You can do this by passing a language test. If you do not pass the language test, you may be required to take additional language classes.",
    },
    r4: {
      type: String,
      default:"Misrepresentation or fraud: If you have misrepresented or falsified any information on your citizenship application, or if you have provided false or misleading information to a Canadian immigration officer, your application may be refused.",
    },
    r5: {
        type: String,
        default:"Criminal record: If you have a criminal record, it may affect your eligibility for Canadian citizenship. In some cases, a criminal record may be a bar to citizenship",
      },
      r6: {
        type: String,
        default:"Security concerns: If there are any security concerns about your application, your application may be refused. This could include concerns about your involvement in organized crime, terrorism, or other criminal activities.",
      },
      r7: {
        type: String,
        default:"Failure to attend a citizenship ceremony: If you are invited to a citizenship ceremony, you must attend to take the Oath of Citizenship. If you do not attend the ceremony, your application may be refused.",
      },
    StillNotHeading: {
      type: String,
      default:"Still not sure?",
    },
    s1: {
      type: String,
      default:"If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have got approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    s2: {
        type: String,
        default:"At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
      },

  },
  {
    timeStamps: true,
  }
);

let citizenshipSection = mongoose.model(
  "Citizenship Section",
  citizenshipSchema
);
module.exports = citizenshipSection;
