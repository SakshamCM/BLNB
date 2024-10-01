let mongoose = require("mongoose");
let  workPermitSchema = mongoose.Schema(
  {
    WorkPerHeading: {
      type: String,
      default: "Work Permit",
    },

    ConsideringHeading : {
      type: String,
      default:"Are you considering a rewarding career and professional growth in Canada?",
    },
    ConsideringSubHeading : {
        type: String,
        default:"The Canadian Work Permit is your key to accessing these exciting professional opportunities.Canada is a top choice for people worldwide looking to advance their careers. To work in Canada, international workers need a temporary document called a work permit. This permit allows them to legally take on employment in the country, and it's available for a broad range of occupations, skill levels, and immigration statuses.",
      },

    PathwaysHeading: {
        type: String,
        default:"Pathways to Get a Work Permit",
      },
      PathwaysSubHeading1: {
        type: String,
        default:"An open work permit allows you to work for any employer in Canada. Learn more about the eligibility criteria and application process.",
      },
      PathwaysSubHeading2: {
        type: String,
        default:"This permit is employer-specific and requires a positive LMIA. Discover the steps involved in obtaining this permit.",
      },


   
    HowWeHelpHeading: {
      type: String,
      default:"Here’s How We Can Help You",
    },
    HowWeHelpSubHeading: {
      type: String,
      default:"Our experienced team can assist you throughout the work permit application process, ensuring that all requirements are met and your application stands the best chance of approval.",
    },

  },
  {
    timeStamps: true,
  }
);

let workPermitSection = mongoose.model(
  "Work Permit Section",
  workPermitSchema
);
module.exports = workPermitSection;
