let mongoose = require("mongoose");
let additionalDocumentSchema = mongoose.Schema(
  {
    AdditionalDocumentHeading: {
      type: String,
      default: "Reply to Additional Document Request",
    },
    DonotWorryHeading : {
      type: String,
      default:"Don't Worry, There's Still Hope!",
    },
    DonotWorryPara1 : {
        type: String,
        default:"If you’re here, that means IRCC has already requested you to submit additional documents for your Canadian Immigration application. Don’t worry. This can happen at any stage of the application process, and the specific documents requested will vary depending on your case and program.",
      },
      DonotWorryPara2 : {
        type: String,
        default:"We know these requests can be stressful. Especially if you’ve applied your application yourself. It's easy to forget something or accidentally upload the wrong document. No worries, though! We can help you out.",
      },
      DonotWorryPara3 : {
        type: String,
        default:"If you already got that Acknowledgement of Receipt (AOR) letter with your application number and the Unique Client Identifier (UCI) – you can just use IRCC's online form to upload the right document.",
      },
      DonotWorryPara4 : {
        type: String,
        default:"Make sure you know what they need and why. Follow their instructions to the letter, label your documents clearly, and get them uploaded in the right format. The faster you get that missing document submitted, the sooner things can keep moving along.",
      },
      KeyPointsHeading : {
      type: String,
      default:"Key Points to Keep in Mind",
    },
    k1 :{
        type:String,
        default:"Submit the requested document ASAP. Failure to do so can negatively impact your application.",
    },
    k2 :{
        type:String,
        default:"Only submit requested documents. Don't include irrelevant information.",
    },
    k3 :{
        type:String,
        default:"The documents should be clear, legible, and translated if necessary.",
    },
    k4 :{
        type:String,
        default:"If you're unsure about any aspect of the process, let us handle your case for you.",
    },


    StillNotHeading: {
      type: String,
      default:"Still not Sure?",
    },
    s1: {
      type: String,
      default:"If you have received a Request for an additional document, do not worry. We can help you with your application. With over a decade of experience, we have guided many when it comes to providing additional documents..",
    },
    s2: {
        type: String,
        default:"At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Just reach out to us, and we'll handle the rest. You keep your focus on your Canadian ambition, and we'll focus on making it happen smoothly.",
      },

  },
  {
    timeStamps: true,
  }
);

let additionalDocumentSection = mongoose.model(
  "Additional Document Section",
  additionalDocumentSchema
);
module.exports = additionalDocumentSection;
