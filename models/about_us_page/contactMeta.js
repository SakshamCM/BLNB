let mongoose = require("mongoose");
let contactMetaSchema = mongoose.Schema(
  {
    metaTitle: {
      type: String,
    },
    metaDesc: {
      type: String,
    },
    metaOgTitle: {
      type: String,
    },
    metaOgDesc: {
      type: String,
    },
    metaKeywords: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

let contactMetaSection = mongoose.model("Contact Us Meta", contactMetaSchema);
module.exports = contactMetaSection;
