let mongoose = require("mongoose");
let federalSkilledSchema = mongoose.Schema(
  {
    heading: {
      type: String,
    },
    description: {
      type: String,
    },
    description2: {
      type: String,
    },
    firstSectionHeading: {
      type: String,
    },
    fsq1: {
      type: String,
    },
    fsq1o1: {
      type: String,
    },
    fsq1o1p: {
      type: String,
    },
    fsq1o2: {
      type: String,
    },
    fsq1o2p: {
      type: String,
    },
    fsq1o3: {
      type: String,
    },
    fsq1o3p: {
      type: String,
    },
    fsq1o4: {
      type: String,
    },
    fsq1o4p: {
      type: String,
    },

    fsq2: {
      type: String,
    },
    fsq2o1: {
      type: String,
    },
    fsq2o1p: {
      type: String,
    },
    fsq2o2: {
      type: String,
    },
    fsq2o2p: {
      type: String,
    },
    fsq2o3: {
      type: String,
    },
    fsq2o3p: {
      type: String,
    },
    fsq2o4: {
      type: String,
    },
    fsq2o4p: {
      type: String,
    },

    fsq3: {
      type: String,
    },
    fsq3o1: {
      type: String,
    },
    fsq3o1p: {
      type: String,
    },
    fsq3o2: {
      type: String,
    },
    fsq3o2p: {
      type: String,
    },
    fsq3o3: {
      type: String,
    },
    fsq3o3p: {
      type: String,
    },
    fsq3o4: {
      type: String,
    },
    fsq3o4p: {
      type: String,
    },
    fsq4: {
      type: String,
    },
    fsq4o1: {
      type: String,
    },
    fsq4o1p: {
      type: String,
    },
    fsq4o2: {
      type: String,
    },
    fsq4o2p: {
      type: String,
    },
    fsq4o3: {
      type: String,
    },
    fsq4o3p: {
      type: String,
    },
    fsq4o4: {
      type: String,
    },
    fsq4o4p: {
      type: String,
    },

    secondSectionHeading: {
      type: String,
    },

    ssq1: {
      type: String,
    },
    ssq1o1: {
      type: String,
    },
    ssq1o1p: {
      type: String,
    },
    ssq1o2: {
      type: String,
    },
    ssq1o2p: {
      type: String,
    },

    thirdSectionHeading: {
      type: String,
    },

    tsq1: {
      type: String,
    },
    tsq1o1: {
      type: String,
    },
    tsq1o1p: {
      type: String,
    },
    tsq1o2: {
      type: String,
    },
    tsq1o2p: {
      type: String,
    },

    tsq1o3: {
      type: String,
    },
    tsq1o3p: {
      type: String,
    },
    tsq1o4: {
      type: String,
    },
    tsq1o4p: {
      type: String,
    },

    tsq1o5: {
      type: String,
    },
    tsq1o5p: {
      type: String,
    },
    tsq1o6: {
      type: String,
    },
    tsq1o6p: {
      type: String,
    },

    tsq1o7: {
      type: String,
    },
    tsq1o7p: {
      type: String,
    },

    fourthSectionHeading: {
      type: String,
    },

    fosq1: {
      type: String,
    },
    fosq1o1: {
      type: String,
    },
    fosq1o1p: {
      type: String,
    },

    fosq1o2: {
      type: String,
    },
    fosq1o2p: {
      type: String,
    },

    fosq1o3: {
      type: String,
    },
    fosq1o3p: {
      type: String,
    },

    fosq1o4: {
      type: String,
    },
    fosq1o4p: {
      type: String,
    },

    fosq1o5: {
      type: String,
    },
    fosq1o5p: {
      type: String,
    },

    fifthSectionHeading: {
      type: String,
    },

    ffsq1: {
      type: String,
    },
    ffsq1o1: {
      type: String,
    },
    ffsq1o1p: {
      type: String,
    },

    ffsq1o2: {
      type: String,
    },
    ffsq1o2p: {
      type: String,
    },

    sixthSectionHeading: {
      type: String,
    },

    sxsq1: {
      type: String,
    },
    sxsq1o1: {
      type: String,
    },
    sxsq1o1p: {
      type: String,
    },

    sxsq1o2: {
      type: String,
    },
    sxsq1o2p: {
      type: String,
    },

    sxsq1o3: {
      type: String,
    },
    sxsq1o3p: {
      type: String,
    },

    sxsq1o4: {
      type: String,
    },
    sxsq1o4p: {
      type: String,
    },

    seventhSectionHeading: {
      type: String,
    },

    svsq1: {
      type: String,
    },
    svsq1o1: {
      type: String,
    },
    svsq1o1p: {
      type: String,
    },

    svsq1o2: {
      type: String,
    },
    svsq1o2p: {
      type: String,
    },

    svsq1o3: {
      type: String,
    },
    svsq1o3p: {
      type: String,
    },

    svsq1o4: {
      type: String,
    },
    svsq1o4p: {
      type: String,
    },

    svsq1o5: {
      type: String,
    },
    svsq1o5p: {
      type: String,
    },

    svsq1o6: {
      type: String,
    },
    svsq1o6p: {
      type: String,
    },

    svsq1o7: {
      type: String,
    },
    svsq1o7p: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let federalSkilledSection = mongoose.model(
  "Federal Skilled Worker Program Calculator",
  federalSkilledSchema
);
module.exports = federalSkilledSection;
