let mongoose = require("mongoose");
let lowHighWageSchema = mongoose.Schema(
  {
    LowWageHeading: {
      type: String,
      default: "Low-wage/High-wage LMIA",
    },
    LowWagePara: {
      type: String,
      default:
        "Low-wage/High-wage LMIAs are used by the employer to fill the immediate labor shortage in their business. Whether to apply for low-wage or high-wage LMIA, you must understand the following three key aspects related to wages in Canada.",
    },

    LowWageSubHeadList1: {
      type: String,
      default:
        "National Occupation Classification Code",
    },
    LowWageSubHeadList2: {
      type: String,
      default: "Prevailing median wage",
    },
    LowWageSubHeadList3: {
        type: String,
        default: "Provincial median wage",
      },

    //
    
    NationalHeading: {
        type: String,
        default: "1. National Occupation Classification NOC Code:",
      },
      NationalPara: {
        type: String,
        default: "The National Occupational Classification is a database developed by the Government of Canada categorizing all types of possible occupations in the Canadian labor market according to their skill level.",
      },

    
      PrevailingHeading: {
        type: String,
        default: "2. Prevailing Median Wage",
      },
      PrevailingPara: {
        type: String,
        default: "Government of Canada’s official Job Bank website lists the prevailing median wage, for each NOC TEER Code, which is specific to the NOC code and location of work being offered by the Canadian employer. One of the most important LMIA requirements is to match this wage with what the employer will offer to their foreign worker.",
      },

    
      ProvincialHeading: {
        type: String,
        default: "3. Provincial Median Wage",
      },
      ProvincialPara1: {
        type: String,
        default: "Employment and Social Development Canada (ESDC) department updates the Median hourly wages for each province and territory every year in April. This median hourly wage is called the Provincial/territorial Median Hourly Wage.",
      },
    
      
     ProvTeriTableHeading: {
        type: String,
        default: "Province/territory",
      },
      ProvTeriTable1: {
        type: String,
        default: "Alberta",
      },

      ProvTeriTable2: {
        type: String,
        default: "British Columbia",
      },

      ProvTeriTable3: {
        type: String,
        default: "Manitoba",
      },

      ProvTeriTable4: {
        type: String,
        default: "New Brunswick",
      },

      ProvTeriTable5: {
        type: String,
        default: "Newfoundland and Labrador	",
      },

      ProvTeriTable6: {
        type: String,
        default: "Northwest Territories",
      },

      ProvTeriTable7: {
        type: String,
        default: "Nova Scotia",
      },

      ProvTeriTable8: {
        type: String,
        default: "Nunavut",
      },

      ProvTeriTable9: {
        type: String,
        default: "Ontario",
      },

      ProvTeriTable10: {
        type: String,
        default: "Prince Edward Island",
      },

      ProvTeriTable11: {
        type: String,
        default: "Quebec",
      },

      ProvTeriTable12: {
        type: String,
        default: "Saskatchewan",
      },

      ProvTeriTable13: {
        type: String,
        default: "Yukon",
      },



      MediHouTableHeading: {
        type: String,
        default: "Median hourly wages as of April 2, 2024",
      },

      MediHouTable1: {
        type: String,
        default: "$29.50",
      },
      MediHouTable2: {
        type: String,
        default: "$28.85",
      },
      MediHouTable3: {
        type: String,
        default: "$25.00",
      },
      MediHouTable4: {
        type: String,
        default: "$24.04",
      },
      MediHouTable5: {
        type: String,
        default: "$26.00",
      },
      MediHouTable6: {
        type: String,
        default: "$39.24",
      },
      MediHouTable7: {
        type: String,
        default: "$24.00",
      },
      MediHouTable8: {
        type: String,
        default: "$35.00",
      },
      MediHouTable9: {
        type: String,
        default: "$28.39",
      },
      MediHouTable10: {
        type: String,
        default: "$24.00",
      },
      MediHouTable11: {
        type: String,
        default: "$27.47",
      },
      MediHouTable12: {
        type: String,
        default: "$27.00",
      },
      MediHouTable13: {
        type: String,
        default: "$36.00",
      },

      ProvincialPara2: {
        type: String,
        default: "See the latest median hourly wages at :",
      },
    
      HighWageHeading: {
        type: String,
        default: "High-wage LMIA",
      },
      HighWagePara: {
        type: String,
        default: "This LMIA is for occupations that pay an hourly wage equal to or exceeding the Provincial/territorial Median Hourly Wage. It can be of any NOC TEER Code. There is no cap on how many foreign workers an employer can hire on high-wage LMIA. However, a transition plan must be submitted to satisfy that the employer will continue to hire Canadians/PR.",
      },
    
      LowWageHeading: {
        type: String,
        default: "Low-wage LMIA",
      },
    
      LowWagePara: {
        type: String,
        default: "This LMIA is for occupations that pay an hourly wage that is below the Provincial/territorial Median Hourly Wage. It can be of any NOC TEER Code. There is a cap on how many foreign workers an employer can hire on low-wage LMIAs.",
      },
    
      BenefitsHeading: {
        type: String,
        default: "Benefits of Low-wage/High-wage LMIA:",
      },
      BenList1: {
        type: String,
        default: "The employer can apply for low-wage/high-wage LMIA to immediately meet the labor shortage.",
      },
      BenList2: {
        type: String,
        default: "Even the employers whose incorporation is fairly new (less than one year in operation), can apply for one of these types of LMIA, provided they can justify that the business is actively providing goods or services and they can meet the financial obligation related to hiring and paying the foreign worker.",
      },
 
      BenList3: {
        type: String,
        default: "The employer can hire anyone qualified for the job from anywhere in the world or within Canada.",
      },
 
      BenList4: {
        type: String,
        default: "The employer can apply for an unnamed LMIA and then add the name of the finalized workers to the LMIA later on after the LMIA is approved.",
      },


      HowtoApplyHeading: {
        type: String,
        default: "How to Apply for Low-wage/High-wage LMIA:",
      },

      HowAppList1: {
        type: String,
        default: "Have an initial assessment performed by us to verify if the employer is eligible to apply for LMIA for a specific position and how many positions are allowed.",
      },
      HowAppList2: {
        type: String,
        default: "We will provide you with a checklist of documents and information required to start the initial process.",
      },
 
      HowAppList3: {
        type: String,
        default: "Perform recruitment efforts as per ESDC program requirements for each LMIA type. Job advertisement postings (All advertisements must be active for 4 weeks before submission). Your LMIA job posting must include the following information:",
      },
      HowAppList3Sub1: {
        type: String,
        default: "Company name and business address",
      },
      HowAppList3Sub2: {
        type: String,
        default: "Job title",
      },
      HowAppList3Sub3: {
        type: String,
        default: "Job duties (if advertising for multiple vacancies, specify duties for each). Do not just copy/paste duties from the NOC occupation classification.",
      },
      HowAppList3Sub4: {
        type: String,
        default: "Employment terms (e.g., permanent, project-based)",
      },
      HowAppList3Sub5: {
        type: String,
        default: "Language requirements",
      },
      HowAppList3Sub6: {
        type: String,
        default: "Wage details (including any raises, performance pay, or bonuses): A wage range can be provided, but the minimum wage must meet prevailing standards",
      },
      HowAppList3Sub7: {
        type: String,
        default: "Benefits offered (if applicable)",
      },
      HowAppList3Sub8: {
        type: String,
        default: "Work location(s) (local area, city, or town)",
      },
      HowAppList3Sub9: {
        type: String,
        default: "Number of positions",
      },
      HowAppList3Sub10: {
        type: String,
        default: "Contact details of the employer: email address, fax number, or mailing address",
      },
      HowAppList3Sub11: {
        type: String,
        default: "Skill requirements (including education and work experience)",
      },

 
      HowAppList4: {
        type: String,
        default: "Screen and interview local candidates.",
      },
 
      HowAppList5: {
        type: String,
        default: "Prepare and submit an LMIA application to the Service Canada ESDS department. Pay the fees when requested, within 2 business days.",
      },
 
      HowAppList6: {
        type: String,
        default: "Wait for LMIA processing time, which can range from 30 to 90 business days. If the Service Canada officer has any questions or concerns or requires any further information, the employer might be contacted for an interview.",
      },
 
      HowAppList7: {
        type: String,
        default: "Once LMIA is received, the employer can add or remove the name of the foreign worker.",
      },
 
      DifferencesHeading: {
        type: String,
        default: "Differences Between High-Wage and Low-Wage Positions",
      },
      DiffTableInnerHead1: {
        type: String,
        default: "Position Type",
      },
      DiffTable1Inner1: {
        type: String,
        default: "Wage Offered",
      },
      DiffTable1Inner2: {
        type: String,
        default: "LMIA Stream",
      },
      DiffTable1Inner3: {
        type: String,
        default: "Median Hourly Wage",
      },
      DiffTable1Inner4: {
        type: String,
        default: "Application Requirements",
      },
      DiffTable1Inner5: {
        type: String,
        default: "Intended Use",
      },
      DiffTable1Inner6: {
        type: String,
        default: "Program Requirements",
      },
      DiffTable1Inner7: {
        type: String,
        default: "Duration of Employment Allowed",
      },
      DiffTable1Inner8: {
        type: String,
        default: "Impact on the Canadian Labour Market",
      },
      DiffTable1Inner9: {
        type: String,
        default: "Transition Period",
      },

      DiffTableInnerHead2: {
        type: String,
        default: "High-Wage Position",
      },
      DiffTable2Inner1: {
        type: String,
        default: "At or above the provincial/territorial median hourly wage",
      },
      DiffTable2Inner2: {
        type: String,
        default: "High-wage stream LMIA application",
      },
      DiffTable2Inner3: {
        type: String,
        default: "Ontario: $28.39 per hour (or above)British Columbia: $28.85",
      },
      DiffTable2Inner4: {
        type: String,
        default: "Maybe more stringent in terms of recruitment efforts. May have different or additional requirements for transportation, housing, and healthcare of workers.Generally aimed at skilled positions.",
      },
      DiffTable2Inner5: {
        type: String,
        default: " For filling short-term skills and labor shortages when no Canadians or permanent residents are available for skilled positions.",
      },
      DiffTable2Inner6: {
        type: String,
        default: "Must comply with high-wage position requirements from Employment and Social Development Canada, which may involve minimum recruitment efforts, providing certain benefits, etc.",
      },
      DiffTable2Inner7: {
        type: String,
        default: "Up to 3 years as of April 4, 2022, and potentially longer in exceptional circumstances with adequate rationale.",
      },
      DiffTable2Inner8: {
        type: String,
        default: "An LMIA will determine if hiring a TFW will have a positive or negative impact on the Canadian labor market.",
      },
      DiffTable2Inner9: {
        type: String,
        default: "Employers may experience a change in classification due to updated median wages and need to adjust their applications accordingly.",
      },

      DiffTableInnerHead3: {
        type: String,
        default: "Low-Wage Position",
      },

      DiffTable3Inner1: {
        type: String,
        default: "Below the provincial/territorial median hourly wage",
      },
      DiffTable3Inner2: {
        type: String,
        default: "Low-wage stream LMIA application",
      },
      DiffTable3Inner3: {
        type: String,
        default: "Below $27.50 as of May 31, 2023",
      },
      DiffTable3Inner4: {
        type: String,
        default: "Typically less stringent recruitment requirements.May involve caps on the number of TFWs or restrictions based on the sector or region. Generally aimed at lower-skilled, lower-paid positions.",
      },
      DiffTable3Inner5: {
        type: String,
        default: "For jobs that do not require high levels of skills and training and where there is a shortage of available Canadian workers.",
      },
      DiffTable3Inner6: {
        type: String,
        default: "Must comply with low-wage position requirements from Employment and Social Development Canada, which may include different standards for recruitment, housing, and other factors.",
      },
      DiffTable3Inner7: {
        type: String,
        default: "Typically shorter durations, align with the lower skill level and pay rate of the position.",
      },
      DiffTable3Inner8: {
        type: String,
        default: "An LMIA will determine if hiring a TFW will have a positive or negative impact on the Canadian labor market.",
      },
      DiffTable3Inner9: {
        type: String,
        default: "Employers may experience a change in classification due to updated median wages and need to adjust their applications accordingly.",
      },
 
    RefusalHeading: {
      type: String,
      default: "Common Reasons for Refusal of High-Wage and Low-Wage Positions:",
    },
    RefusalSubHeading1: {
      type: String,
      default:
        "Over the years, Service Canada officers have become very strict about the employers meeting the requirements of the program.",
    },
    RefusalSubHeading2: {
      type: String,
      default: "Please see below the common reasons for refusals:",
    },
    r1: {
      type: String,
      default: "Failure to perform or document minimum recruitment requirements.",
    },
    r2: {
      type: String,
      default:
        "Failure to use the Job Match service, i.e., invite applicant profiles in the job bank according to their rating.",
    },
    r3: {
      type: String,
      default:
        "Not able to provide housing inspection report.",
    },
    r4: {
      type: String,
      default:
        "Using the wrong methods of recruitment",
    },
    r5: {
      type: String,
      default: "Failure to keep at least 1 of the 3 recruitment activities to seek qualified Canadians and permanent residents ongoing until the date a positive or negative LMIA has been issued.",
    },
    r6: {
      type: String,
      default: "Listing wage rate less than median wage rate mentioned on Job Bank for that specific NOC.",
    },
    r7: {
      type: String,
      default: "The job requirements mentioned in the job postings and LMIA application are way too high than the Employment Requirements mentioned on the NOC website.",
    },
    r8: {
      type: String,
      default: "Provided false, misleading, or inaccurate information in the LMIA application.",
    },

      r9: {
        type: String,
        default: "Have been found non-compliant as a result of an employer compliance review.",
      },
      r10: {
        type: String,
        default: "Have been banned from the Temporary Foreign Worker Program because non-compliance was discovered during an inspection.",
      },
      r11: {
        type: String,
        default: "Are in default of payment of an administrative monetary penalty.",
      },
      r12: {
        type: String,
        default: "Regularly offer services in the sex industry (striptease, erotic dance, escort services, or erotic massage)",
      },
    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can certainly assist you if you have a job offer. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    StillNotSurePara2: {
        type: String,
        default: "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.",
      },
  },
  {
    timeStamps: true,
  }
);

let lowHighWageSection = mongoose.model(
  "Low/High-wage LMIA Section",
  lowHighWageSchema
);
module.exports = lowHighWageSection;
