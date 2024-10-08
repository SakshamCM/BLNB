let mongoose = require("mongoose");
let prRenewalSchema = mongoose.Schema(
  {
    EligibleHeading: {
      type: String,
      default: "Eligibility for Permanent Residency Renewal",
    },
    e1: {
      type: String,
      default: "You should be a permanent resident of Canada.",
    },
    e2: {
      type: String,
      default:
        "You have lived in Canada for at least 2 years out of the last 5 years.",
    },
    e3: {
      type: String,
      default:
        "You can apply for renewal up to 90 days before your current PR card expires.",
    },
    e4: {
      type: String,
      default:
        "You shouldn’t be under an active removal order by a Canadian immigration judge.",
    },
    e5: {
      type: String,
      default:
        "If you have already become a Canadian citizen, you do not need to renew your PR car",
    },
    HowApplyHeading: {
      type: String,
      default: "How to Apply for Permanent Residency Renewal",
    },
    HowApplyPara: {
      type: String,
      default:
        "Renewing your PR card is a straightforward process that can be done online through the Government of Canada's website or by mail. You will need to fill out the necessary forms, provide supporting documents, and pay the applicable fees. However, this is a golden ticket for you and you shouldn’t risk it if you are not sure about it. Let us take care of this for you and get your renewal at the earliest.",
    },
    RefusalHeading: {
      type: String,
      default: "Reasons for Refusal of Permanent Residency Renewal",
    },
    r1: {
      type: String,
      default: "You did not complete two years out of the last five years.",
    },
    r2: {
      type: String,
      default:
        "You are not physically present in Canada when you apply for renewal.",
    },
    r3: {
      type: String,
      default:
        "You got convicted of an offense related to the misuse of a PR card.",
    },
    r4: {
      type: String,
      default:
        "You gave false or misleading information on your PR card renewal application.",
    },
    BookAppHeading: {
      type: String,
      default: "Book Appointment",
    },
    BookAppPara: {
      type: String,
      default:
        "Still not sure? If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have got approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. This is why we have a high success rate. At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your PR Card renewal process now.",
    },
  },
  {
    timeStamps: true,
  }
);

let prRenewalSection = mongoose.model("Pr Renewal Section", prRenewalSchema);
module.exports = prRenewalSection;
