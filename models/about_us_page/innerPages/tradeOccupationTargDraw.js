let mongoose = require("mongoose");
let tradeOccupationTargDrawSchema = mongoose.Schema(
  {
    tradeOccupationTargDrawHeading: {
      type: String,
      default: "Category-Based Express Entry Selection Draws: Trade Occupations",
    },
    tradeOccupationTargDrawPara: {
      type: String,
      default:
        "Canada’s Express Entry system for Trades is tailored to meet the rising demand for skilled workers in various trade sectors. This streamlined system simplifies immigration, targeting skilled trades professionals directly. Through Express Entry, meticulous evaluation of international candidates' profiles occurs, emphasizing their trade expertise, work experience, and language proficiency. Exceptional candidates, demonstrating excellence in their trades with significant experience and language skills, receive Invitations to Apply (ITAs) for permanent residency. This process is central to Canada's strategy to strengthen its skilled trade workforce, demonstrating a dedicated commitment to improving its trade infrastructure.",
    },


    //

      EligibilityFirstHeading: {
      type: String,
      default: "First You Must Be Eligible with Express Entry",
    },

    EligFirstSubHead: {
        type: String,
        default: "Before you can participate in a STEM-specific draw through Canada's Express Entry system, you need to be eligible. Here's how you can get started:",
      },
      EligPara1: {
        type: String,
        default: "Join the Express Entry Pool: The first step towards becoming a candidate for a STEM-specific draw is to get into the Express Entry pool.",
      },
      EligPara2: {
        type: String,
        default: "Choose Your Program: There are three programs you can be eligible for to join the Express Entry pool:",
      },
      
      EligPara2Li1: {
        type: String,
        default: "This program is ideal for tech workers who have the necessary work experience, education, and language ability.",
      },
      EligPara2Li2: {
        type: String,
        default: "Similar to the FSW program, the CEC is also suitable for tech workers who have gained Canadian work experience.",
      },
      EligPara2Li3: {
        type: String,
        default: "If you're a trades worker, this program is designed for you. It requires proof of relevant work experience, education, and language proficiency.",
      },

      EligPara3: {
        type: String,
        default: "Remember, each program has its own set of eligibility requirements. So, make sure to review these carefully and ensure you meet all the necessary criteria before applying.",
      },

      ///

    //
    EligCritHeading: {
        type: String,
        default:
          "Eligibility Criteria for Trade Occupations Category",
      },
      EligCritSubHead: {
        type: String,
        default:
          "Once you have met eligibility for one of the Express Entry programs, now you need to meet eligibility for Trade specific criteria:",
      },

      ec1: {
        type: String,
        default:
          "You must have a Red Seal or other recognized trade certification.",
      },
      ec2: {
        type: String,
        default:
          "Within the last 3 years, you have at least 6 months of full-time, continuous work experience (or an equivalent amount of part-time work experience) in a single eligible trade occupation.",
      },
      ec3: {
        type: String,
        default:
          "A valid Express Entry profile.",
      },

         //


         ///



      EligTradeOccuTableHeading: {
        type: String,
        default:
          "Eligible Trade Occupations",
      },

      etoT1h1: {
        type: String,
        default:
          "Occupations",
      },
      etoT1Li1: {
        type: String,
        default:
          "Carpenters",
      },
      etoT1Li2: {
        type: String,
        default:
          "Construction millwrights and industrial mechanics",
      },
      etoT1Li3: {
        type: String,
        default:
          "Contractors and supervisors, other construction trades, installers, repairers, and servicers",
      },
      etoT1Li4: {
        type: String,
        default:
          "Electricians (except industrial and power system)",
      },
      etoT1Li5: {
        type: String,
        default:
          "Elevator constructors and mechanics",
      },
      etoT1Li6: {
        type: String,
        default:
          "Heating, refrigeration, and air conditioning mechanics",
      },
      etoT1Li7: {
        type: String,
        default:
          "Machine fitters",
      },
      etoT1Li8: {
        type: String,
        default:
          "Plumbers",
      },
      etoT1Li9: {
        type: String,
        default:
          "Residential and commercial installers and servicers",
      },
      etoT1Li10: {
        type: String,
        default:
          "Welders and related machine operators",
      },
     
      //
      etoT2h2: {
        type: String,
        default:
          "2021 NOC Code",
      },
      etoT2Li1: {
        type: String,
        default:
          "72310",
      },
      etoT2Li2: {
        type: String,
        default:
          "72400",
      },
      etoT2Li3: {
        type: String,
        default:
          "72014",
      },
      etoT2Li4: {
        type: String,
        default:
          "72200",
      },
      etoT2Li5: {
        type: String,
        default:
          "72406",
      },
      etoT2Li6: {
        type: String,
        default:
          "72402",
      },
      etoT2Li7: {
        type: String,
        default:
          "72405",
      },
      etoT2Li8: {
        type: String,
        default:
          "72300",
      },
      etoT2Li9: {
        type: String,
        default:
          "73200",
      },
      etoT2Li10: {
        type: String,
        default:
          "72106",
      },
     
      //
      etoT3h3: {
        type: String,
        default:
          "2021 TEER Category",
      },
      etoT3Li1: {
        type: String,
        default:
          "2",
      },
      etoT3Li2: {
        type: String,
        default:
          "2",
      },
      etoT3Li3: {
        type: String,
        default:
          "2",
      },
      etoT3Li4: {
        type: String,
        default:
          "2",
      },
      etoT3Li5: {
        type: String,
        default:
          "2",
      },
      etoT3Li6: {
        type: String,
        default:
          "2",
      },
      etoT2Li7: {
        type: String,
        default:
          "2",
      },
      etoT3Li8: {
        type: String,
        default:
          "2",
      },
      etoT3Li9: {
        type: String,
        default:
          "2",
      },
      etoT3Li10: {
        type: String,
        default:
          "2",
      },      

  //
  ExpressEntryHeading: {
    type: String,
    default:
      "Express Entry Trade Occupations Draw History",
  },

  ExpressEntryPara: {
    type: String,
    default:
      "The first-ever Express Entry draw for Trade occupation workers was held in August 2023. Express Entry draw #261 saw a CRS score of 388 and invited 1500 candidates eligible for category-based selection in Trade occupations.",
  },
///

      //
   
    StillNotHeading: {
      type: String,
      default: "Still not sure?",
    },
    s1: {
      type: String,
      default:
        "Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs is nearly 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    s2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
    },
//
    WhyChooseUsHeading: {
        type: String,
        default: "Why Choose Us",
      },
      wc: {
        type: String,
        default:
          "Here is where you can describe why clients should choose your services over others. Highlight your unique selling points, such as personalized service, high success rates, and expert knowledge.",
      },
  },
  {
    timeStamps: true,
  }
);

let tradeOccupationTargDrawSection = mongoose.model(
  "Category-Based Express Entry Selection Draws: Trade Occupations Program",
  tradeOccupationTargDrawSchema
);
module.exports = tradeOccupationTargDrawSection;
