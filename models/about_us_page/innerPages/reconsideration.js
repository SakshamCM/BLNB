let mongoose = require("mongoose");
let reconsiderationSchema = mongoose.Schema(
  {
    ReconsiderationHeading: {
      type: String,
      default: "Reconsideration for Refusal Decision",
    },
    DonotWorryHeading : {
      type: String,
      default:"Don't Worry, There's Still Hope!",
    },
    DonotWorryPara1 : {
        type: String,
        default:"Are you a Canadian immigrant who has recently received a rejection for your visa application? If so, you're not alone. Many people experience this setback on their journey to becoming a Canadian resident.",
      },
      DonotWorryPara2 : {
        type: String,
        default:"Firstly, don’t worry. There's still hope!",
      },
      DonotWorryPara3 : {
        type: String,
        default:"IRCC offers a Reconsideration of Refusal Decision program, which gives you the chance to appeal the decision and potentially secure the visa you deserve. A reconsideration of a refusal decision, also known as a request for reconsideration, is a formal process that allows you to ask IRCC to review your case again. The Reconsideration of Refusal program allows you to challenge the refusal decision of your application based on new information or arguments that were not previously considered. This is a great opportunity to present additional evidence or address any misunderstandings that may have led to the initial rejection.",
      },
      RequestReconsiderationHeading : {
      type: String,
      default:"Requests for reconsideration can be made for:",
    },
    rr1 :{
        type:String,
        default:"Permanent residence",
    },
    rr1 :{
        type:String,
        default:"Temporary residence",
    },
    rr1 :{
        type:String,
        default:"Citizenship",
    },
    rr1 :{
        type:String,
        default:"Humanitarian and compassionate considerations",
    },
    rrPara :{
        type:String,
        default:"You can request reconsideration within 30 days of the date of the refusal letter. However, there are some exceptions to this rule. For example, if you have new information that you did not submit with your original application, you may be able to request reconsideration more than 90 days after the refusal letter.",
    },
    EligibilityHeading: {
        type: String,
        default:"Eligibility for Reconsideration",
    },
    EligibilitySubHeading: {
        type: String,
        default:"Are you considering reconsideration requests? See if you meet the eligibility.",
    },
    er1 :{
        type:String,
        default:"You must have received a letter saying your application was rejected or refused by IRCC. This letter will tell you why.",
    },
    er2 :{
        type:String,
        default:"Your initial application must have been turned down because of a mistake. This means the officer who looked at your case made an error in understanding your circumstances.",
    },
    er3 :{
        type:String,
        default:"You must have new info or reasons that weren't considered before. This new info should relate to why your application was rejected and be enough to change the decision.",
    },

    RefusalHeading: {
      type: String,
      default:"Reasons for Refusal After Reconsideration",
    },
    RefusalReasonSubHeading: {
        type: String,
        default:"Don’t forget to avoid these common reconsideration request refusal reasons and increase your chances of approval.",
      },
    r1: {
      type: String,
      default:"Failing to provide enough new evidence to counter the initial refusal reasons.",
    },
    r2: {
      type: String,
      default:"Submitting new evidence that is irrelevant or unconvincing.",
    },
    r3: {
      type: String,
      default:"Not addressing the legal basis for the initial refusal adequately.",
    },
    r4: {
      type: String,
      default:"Making procedural errors in the reconsideration request itself.",
    },
    r5: {
        type: String,
        default:"Providing contradictory or inconsistent information compared to the original application.",
      },
      r6: {
        type: String,
        default:"Failing to articulate a persuasive case for reconsidering the decision.",
      },
      r7: {
        type: String,
        default:"Not proving why you should be granted the visa despite the initial refusal.",
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

let reconsiderationSection = mongoose.model(
  "Reconsideration Section",
  reconsiderationSchema
);
module.exports = reconsiderationSection;
