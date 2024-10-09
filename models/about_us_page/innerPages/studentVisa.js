let mongoose = require("mongoose");
let studentVisaSchema = mongoose.Schema(
  {
    StudVisaHeading: {
      type: String,
      default: "Student Visa",
    },
    StudVisaPara: {
      type: String,
      default: "Canada ranks as one of the top choices worldwide for students. Its uniqueness lies not only in offering opportunities for academic pursuit but also in inviting exploration of its diverse cultures and the enjoyment of a safe, high-quality life. With its comprehensive healthcare system and stunning natural landscapes, this destination becomes an attractive prospect for pursuing your academic aspirations. Whether your passion lies in STEM (Science, Technology, Engineering, Math) fields, healthcare, humanities, social sciences, or creative pursuits, Canada's diverse educational system has something to offer everyone. As a student in Canada, you have the privilege of learning at some of the world's top-rated universities and colleges.. They're like the foundation of our lives, helping us become who we are today. Many dream of bringing their parents and grandparents from their native countries to be together in Canada. The Family Reunification and Sponsorship program makes this possible.",
    },

   
//

      PathwaysHeading: {
      type: String,
      default: "Pathways to Study Abroad",
    },
    PathwaysCard1Head: {
        type: String,
        default: "Outside Canada",
      },
      PathwaysCard1Para: {
        type: String,
        default: "Explore study options and visa requirements for students planning to study in Canada from abroad.",
      },
      PathwaysCard2Head: {
        type: String,
        default: "inside Canada",
      },
      PathwaysCard2Para: {
        type: String,
        default: "Discover the options available for students already in Canada or planning to transfer from one institution to another.",
      },
      PathwaysCard3Head: {
        type: String,
        default: "Study Permit for Minor",
      },
      PathwaysCard3Para: {
        type: String,
        default: "Learn about the specific requirements and process for obtaining a study permit for minors.",
      },

  
  //
      
      StartJourHeading: {
        type: String,
        default: "Start Your Journey",
      },
      StartPara: {
        type: String,
        default:
          "Ready to take the next step in your educational journey? Whether you’re planning to study from abroad or already in Canada, our expert team can guide you through the process and ensure you meet all the requirements for a successful student visa application.",
      },
  },
  
  {
    timeStamps: true,
  }
);

let studentVisaSection = mongoose.model(
  "Student Visa",
  studentVisaSchema
);
module.exports = studentVisaSection;
