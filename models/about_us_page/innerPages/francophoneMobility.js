let mongoose = require("mongoose");
let francophoneMobilitySchema = mongoose.Schema(
  {
    FrancophoneHeading: {
      type: String,
      default: "Francophone Mobility Program – NO LMIA Required",
    },
    FrancophonePara: {
      type: String,
      default:
        "This type of LMIA allows employers to hire foreign workers to fill jobs in farms, nurseries, or greenhouses. It can involve the operation of agricultural machinery, caring for and breeding of animals, and planting & harvesting various crops, trees, sods, etc.",
    },
   

    //
    BenifitsHeading: {
        type: String,
        default: "Benefits of Francophone Mobility Program",
      },
      BenifitsSubHeading: {
        type: String,
        default: "The Francophone Mobility Program offers an exciting pathway for foreign workers seeking employment in Canada. Designed to promote French-speaking talent, this program operates outside of Quebec and provides unique advantages. Let’s explore the key details:",
      },
 
      BenifitsList1: {
        type: String,
        default: "No LMIA Required: Unlike traditional work permits, the Mobilité Francophone stream operates under the International Mobility Program. Employers can hire foreign nationals without the need for a Labour Market Impact Assessment (LMIA). This means no recruitment efforts or training requirements for Canadian citizens or permanent residents. Additionally, the $1,000 LMIA application fee is waived.",
      }, 
      BenifitsList2: {
        type: String,
        default: "Eligibility Without Borders: The Mobilité Francophone programMobilité Francophone is open to workers of any nationality and age. Unlike the International Experience Canada (IEC) Program, there are no nationality-based restrictions.",
      }, 
      BenifitsList3: {
        type: String,
        default: "Language Flexibility: While the program aims to promote French-speaking workers, the language of work does not need to be French. Employers are not required to communicate in French.",
      }, 
      BenifitsList4: {
        type: String,
        default: "TEER Skill Levels: All TEER skill level occupations (0-5) are eligible to apply, except for primary agricultural work.",
      }, 
      BenifitsList5: {
        type: String,
        default: "Stream Evolution: The program’s eligibility is now tied to public policy reasons related to Canada’s academic institutions or economy, rather than cultural, social, or economic benefits.",
      }, 
    //

        //
        EligibilityHeading: {
            type: String,
            default: "Eligibility Criteria for Francophone Mobility Program",
          },

          EligibilitySubHead: {
            type: String,
            default: "To qualify for Mobilité Francophone, applicants must meet the following conditions:",
          },
          EligibilityList1: {
            type: String,
            default: "Job Offer: Must be from outside Quebec (anywhere else in Canada). Primary agricultural work is not covered.",
          }, 
          EligibilityList2: {
            type: String,
            default: "French Language Proficiency: You must demonstrate a CLB 5 equivalent in speaking and listening (not reading and writing) through a French language exam. Alternatively, proof of previous French study or work experience is acceptable.",
          }, 
          EligibilityList3: {
            type: String,
            default: "TEF Assessment: If language proficiency is unclear in the initial application, the Test d’Evaluation Du Français (TEF) may be required. A result of Canadian Language Benchmark (CLB) 5 or higher is the threshold.",
          }, 


          EmpReqHeading: {
            type: String,
            default: "Employer Requirements for the Francophone Mobility Program",
          },

          EmpReqList1: {
            type: String,
            default: "Job Offer: Issue a job offer at a reasonable wage rate within the province of work",
          }, 
          EmpReqList2: {
            type: String,
            default: "LMIA Exempt Code: Request the LMIA exempt code for the job offer and work permit application. Employer compliance fee is $230.",
          }, 
          EmpReqList3: {
            type: String,
            default: "Proof of Operations: Provide evidence of operations, payroll, and income to justify the hire and the position.",
          }, 
          EmpReqList4: {
            type: String,
            default: "Work Location Identification: Identify the work location for the job offer and the foreign worker.",
          }, 
          //


          WorkPerDurHeading: {
            type: String,
            default: "Work Permit Duration for Francophone Mobility Program",
          }, 
          WorkPerDurSubHead: {
            type: String,
            default: "Work Permit Duration for Francophone Mobility Program Under the C16 LMIA exempt permit code, the work permit duration is determined by whichever of the following dates comes earlier:",
          }, 
          WorkPerDurList1: {
            type: String,
            default: "The expiration date of the foreign worker’s passport OR",
          }, 
          WorkPerDurList2: {
            type: String,
            default: "The duration specified in the job offer issued by the employer.",
          }, 
          //
          FamilyMemHeading: {
            type: String,
            default: "Family Members and Dependents for Francophone Mobility Program",
          }, 
          FamilyMemSubHead: {
            type: String,
            default: "For the Francophone Mobility Program , family members and dependents have specific options:",
          }, 
          FamilyMemList1: {
            type: String,
            default: "Dependent Children: Can apply for study permits.",
          },  
          FamilyMemList2: {
            type: String,
            default: "Spouses and Common-Law Partners: Eligible for a spousal open work permit, valid for the duration of the main applicant’s work permit.",
          },  
          //
          AppProHeading: {
            type: String,
            default: "Application Process for Francophone Mobility Program",
          }, 
          AppProSubHead1: {
            type: String,
            default: "Job Search:",
          }, 
          AppProSubHead1List1: {
            type: String,
            default: "Identify opportunities: Utilize specialized job platforms and the LinkedIn network to find job offers that align with your profile in regions outside Quebec.",
          }, 
          AppProSubHead1List2: {
            type: String,
            default: "Tip: Customize your search by applying filters for TEER 0 to TEER 5 positions and specifying your preference for French. Remember agriculture jobs are not covered under this program.",
          }, 

          AppProSubHead2: {
            type: String,
            default: "Preparing Your Application:",
          }, 
          AppProSubHead2List1: {
            type: String,
            default: "CV and Cover Letter: Adapt your CV and cover letter to the Canadian format, emphasizing your fluency in French and relevant professional experience.",
          }, 
          AppProSubHead2List2: {
            type: String,
            default: "Tip: Highlight concrete examples of professional achievements to showcase your value to potential Canadian employers.",
          }, 

          AppProSubHead3: {
            type: String,
            default: "File Submission:",
          }, 


          AppProSubHead3List1: {
            type: String,
            default: "Eligibility Criteria: Ensure that you meet all eligibility criteria before submitting your application.",
          }, 
          AppProSubHead3List2: {
            type: String,
            default: "Necessary Documents: Compile essential documents, including proof of language skills, professional qualifications, and a valid job offer.",
          }, 
          AppProSubHead3List3: {
            type: String,
            default: "Tip: Review your application thoroughly to avoid errors or omissions that could delay or jeopardize the process.",
          }, 
//

          WorkPerRenHeading: {
            type: String,
            default: "Work Permit Renewals for the Mobilité Francophone Stream",
          }, 
          WorkPerRenSubHead: {
            type: String,
            default: "If you currently hold a work permit issued through the Mobilité Francophone stream, you can easily renew it. Here’s how:",
          }, 
          WorkPerRenList: {
            type: String,
            default: "Submission Options: Renewals can be submitted by mail or online. Existing permits under the discontinued “Significant benefit – Francophone destined to work outside of Quebec” category can be renewed through Mobilité Francophone.",
          }, 
          //


    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can certainly assist you if you have a job offer. We have obtained approvals for clients who had multiple previous refusals with a tailored approach, addressing each concern listed in previous refusals. We use case law and similar cases as precedents to achieve a high success rate.",
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

let francophoneMobilitySection = mongoose.model(
  "Francophone Mobility Section Section",
  francophoneMobilitySchema
);
module.exports = francophoneMobilitySection;
