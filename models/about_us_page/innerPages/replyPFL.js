let mongoose = require("mongoose");
let replyPFlSchema = mongoose.Schema(
  {
    PFLHeading: {
      type: String,
      default: "Procedural Fairness Letter (PFL)",
    },
    RedFlagHeading : {
      type: String,
      default:"Did You Get a Red Flag from Canadian Immigration - PFL?",
    },
    RedFlagPara1 : {
      type: String,
      default:"Don't panic! We'll help you through the PFL process and turn that flag into a welcome mat.",
    },
    RedFlagPara2 : {
        type: String,
        default:"Responding to a Procedural Fairness Letter (PFL) is a crucial step in addressing concerns raised by IRCC about your immigration application. It's your chance to clear things up, provide more proof, and possibly prevent a negative decision/refusal.",
      },
      RedFlagPara3 : {
        type: String,
        default:"These letters often come up when an officer from IRCC is unsure about the information given in your application. For example, they might suspect something's not quite right, like providing false or misleading details, which could lead to issues with the Immigration Refugees and Protection Act (IRPA).",
      },
      RedFlagPara4 : {
        type: String,
        default:"Typically, you'll get a letter outlining the concerns, and you usually have around 30 days to respond. This is a serious matter, as not addressing it properly might keep you from entering Canada for at least 5 years. So, it's crucial to respond with detailed answers, covering all the officer's concerns, even the ones you might not know about.",
      },

    ReasonReceivedHeading: {
        type: String,
        default:"Here Are a Few Reasons You Might Have Received a PFL",
    },
    r1: {
      type: String,
      default:"IRCC or PNP officer might have found discrepancies in your application or supporting documents.",
    },
    rr2: {
        type: String,
        default:"You might have missed providing the necessary information or documentation.",
      },
    rr3: {
       type: String,
       default:"There may be concerns about your criminal history, health, or financial status that could affect your admissibility to Canada.",
      },
    rr4: {
      type: String,
     default:"If you are sponsoring family members, IRCC may have questions about the genuineness of the relationship.",
      },

   
    StillNotHeading: {
      type: String,
      default:"Still not Sure?",
    },
    s1: {
      type: String,
      default:"If you have received a PFL, don't panic. We can help you with your application. With over a decade of experience, we have successfully cleared many applications that faced PFL.",
    },
    s2: {
        type: String,
        default:"At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Just reach out to us, and we'll handle the rest. You focus on your Canadian ambition, and we'll focus on making it happen smoothly",
      },

  },
  {
    timeStamps: true,
  }
);

let replyPFlSection = mongoose.model(
  "Reply to PFl Section",
  replyPFlSchema
);
module.exports = replyPFlSection;
