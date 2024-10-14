require("dotenv").config();
let express = require("express");
let cors = require("cors");
let nodemailer = require("nodemailer");
let app = express();
let mongoose = require("mongoose");
let multer = require("multer");
let aboutUsAchievementsSection = require("./models/about_us_page/aboutUsAchievementsSection");
let aboutUsBestChoiceSection = require("./models/about_us_page/aboutUsBestChoice");
let aboutUsFoundationSection = require("./models/about_us_page/aboutUsFoundationSection");
let aboutUsMapSection = require("./models/about_us_page/aboutUsMap");
let aboutUsPillarsSection = require("./models/about_us_page/aboutUsPillarsSection");
let aboutUsTopSection = require("./models/about_us_page/aboutUsTopSection");
let aboutUsGloballySection = require("./models/about_us_page/aboutUsServingGloballySection");
let aboutUsSocialPresenceSection = require("./models/about_us_page/aboutUsSocialPresence");
let aboutUsVisionSection = require("./models/about_us_page/aboutUsVisionSection");
let ourFoundationSchemaSection = require("./models/about_us_page/images/ourFoundation");
let ourVisionSchemaSection = require("./models/about_us_page/images/ourVision");
let ourPillarsSchemaSection = require("./models/about_us_page/images/ourPillars");
let aboutUsDirectorsSection = require("./models/about_us_page/aboutusDirectors");
let aboutUsWeAreSection = require("./models/about_us_page/weAre");
let bestChoice = require("./models/about_us_page/images/bectChoice");
let plane = require("./models/about_us_page/images/plane");
let socialMedia = require("./models/about_us_page/images/socialMedia");
let globallySchemaSection = require("./models/about_us_page/images/globally");
let mapSchemaSection = require("./models/about_us_page/map");
let blogsSection = require("./models/about_us_page/homepage/blogs");
let achievementsSection = require("./models/about_us_page/homepage/achievements");
let faqSection = require("./models/about_us_page/homepage/faq");
let TestimonialsSection = require("./models/about_us_page/homepage/testimonials");
let videosSection = require("./models/about_us_page/homepage/testimonialsVideos");
let homepageTopSection = require("./models/about_us_page/homepage/topSection");
let memberOfSection = require("./models/about_us_page/homepage/memberOf");
let featureSection = require("./models/about_us_page/homepage/features");
let ourProcessSection = require("./models/about_us_page/homepage/ourProcess");
let weAreSmallSection = require("./models/about_us_page/images/weAre");
let loveneetBgSection = require("./models/about_us_page/images/loveneetBg");
let servicesSection = require("./models/about_us_page/homepage/services");
let expressEntrySection = require("./models/expressEnrty");
let contactSection = require("./models/contact");
let permanentResidencySection = require("./models/permanentResidency");
let transportOccupationSection = require("./models/transportOccupation");
let privacyPolicySection = require("./models/about_us_page/privacyPolicy");
let termsConditionsSection = require("./models/about_us_page/termsConditions");
let categoryBasedSchemaSection = require("./models/about_us_page/categoryBased");
let federalSkilledSection = require("./models/about_us_page/federalSkilled");
let CLBSection = require("./models/about_us_page/clb");
let bcpnpSection = require("./models/about_us_page/bcpnp");
let swsSection = require("./models/about_us_page/sws");
let ppSection = require("./models/about_us_page/programPriorities");
let ipgSection = require("./models/about_us_page/iPG");
let igpSection = require("./models/about_us_page/iGP");
let addingBlogSection = require("./models/about_us_page/addingBlog");
const newsSection = require("./models/about_us_page/news");
const newsSectionData = require("./models/about_us_page/newsSection");
const homeMetaSection = require("./models/about_us_page/homepageMeta");
const aboutMetaSection = require("./models/about_us_page/aboutMeta");
const contactMetaSection = require("./models/about_us_page/contactMeta");
const permanentMetaSection = require("./models/about_us_page/permanentMeta");
const bcpnpMetaSection = require("./models/about_us_page/bcpnpMeta");
const categoryBasedMetaSection = require("./models/about_us_page/categoryBasedMeta");
const clbMetaSection = require("./models/about_us_page/clbMeta");
const federalMetaSection = require("./models/about_us_page/federalMeta");
const igpMetaSection = require("./models/about_us_page/igpMeta");
const ipgMetaSection = require("./models/about_us_page/ipgMeta");
const blogsMetaSection = require("./models/about_us_page/blogsMeta");
const newsMetaSection = require("./models/about_us_page/newsMeta");
const entryMetaSection = require("./models/about_us_page/expressMeta");
const transportMetaSection = require("./models/about_us_page/transportMeta");
const bpMetaSection = require("./models/about_us_page/bcpnpPageMeta");
const workMetaSection = require("./models/about_us_page/workMeta");
const pflMetaSection = require("./models/about_us_page/pflMeta");
const visitorMetaSection = require("./models/about_us_page/visitorMeta");
const studyMetaSection = require("./models/about_us_page/studyMeta");
const familyMetaSection = require("./models/about_us_page/familyMeta");
const prRenewalSection = require("./models/about_us_page/innerPages/prRenewal");
const citizenshipSection = require("./models/about_us_page/innerPages/citizenship");
const reconsiderationSection = require("./models/about_us_page/innerPages/reconsideration");
const additionalDocumentSection = require("./models/about_us_page/innerPages/additionalDocument");
const replyPFlSection = require("./models/about_us_page/innerPages/replyPFL");
const LmiaSection = require("./models/about_us_page/innerPages/Lmia");
const openWorkPermitSection = require("./models/about_us_page/innerPages/openWorkPer");
const workPermitSection = require("./models/about_us_page/innerPages/workPermit");
const agricultureStreamLmiaSection = require("./models/about_us_page/innerPages/agricultureStreamLmia");
const globalTalentStreamLmiaSection = require("./models/about_us_page/innerPages/globalStreamLmia");
const lowHighWageSection = require("./models/about_us_page/innerPages/lowWageLmia");
const prPathwaysCaregiver = require("./models/about_us_page/innerPages/prPathwaysCaregiverLp");
const pathwaysForCaregiverSection = require("./models/about_us_page/innerPages/pathwaysForCaregiver");
const inHomeCaregiverSection = require("./models/about_us_page/innerPages/inHomeCaregiverProgramLp");
const skilledWorkerStreamSection = require("./models/about_us_page/innerPages/skilledWorkerStream");

const bridgingOpenSection = require("./models/about_us_page/innerPages/bridgingOpenWork");
const francophoneMobilitySection = require("./models/about_us_page/innerPages/francophoneMobility");
const openWorkVulnerableSection = require("./models/about_us_page/innerPages/openWorkVulnerable");
const openWorkDependentChildSection = require("./models/about_us_page/innerPages/openWorkDependentChild");
const pgwpSection = require("./models/about_us_page/innerPages/pgwp");
const familyReunificationSection = require("./models/about_us_page/innerPages/familyReunification");
const adoptionSection = require("./models/about_us_page/innerPages/adoption");
const DependentChildrenSection = require("./models/about_us_page/innerPages/dependentChild");
const humanitarianComSection = require("./models/about_us_page/innerPages/humanitarianCom");
const lonelyCanadianSection = require("./models/about_us_page/innerPages/lonelyCanadian");
const parentsGrandParSection = require("./models/about_us_page/innerPages/parentsGrandPar");
const studentVisaSection = require("./models/about_us_page/innerPages/studentVisa");
const orphanSection = require("./models/about_us_page/innerPages/orphan");
const insideCanadaSection = require("./models/about_us_page/innerPages/insideCanada");
const changeCollegeProgSection = require("./models/about_us_page/innerPages/changeCollegeProg");
const visitorToStudentSection = require("./models/about_us_page/innerPages/visitorToStudent");
const outsideCanadaSection = require("./models/about_us_page/innerPages/outsideCanada");
const nonSdsSection = require("./models/about_us_page/innerPages/nonSds");
const sdsSection = require("./models/about_us_page/innerPages/sds");
const studyPermitMinorsSection = require("./models/about_us_page/innerPages/studyPermitMinors");
const extensionSection = require("./models/about_us_page/innerPages/extension");
const flagpolingSection = require("./models/about_us_page/innerPages/flagpoling");
const restorationStatusDraftSection = require("./models/about_us_page/innerPages/restorationStatusDraft");
const spousalOpenWokPerSection = require("./models/about_us_page/innerPages/spousalOpenWokPer");
const comLawPartPermanSection = require("./models/about_us_page/innerPages/comLawPartPerman");
const comLawPartTempSection = require("./models/about_us_page/innerPages/comLawPartTemp");
const superVisaSection = require("./models/about_us_page/innerPages/superVisa");
const prioritiesProgramSection = require("./models/about_us_page/innerPages/prioritiesProgram");
const temporaryResidentPermSection = require("./models/about_us_page/innerPages/temporaryResidentPerm");
const temporaryResidencySection = require("./models/about_us_page/innerPages/temporaryResidency");
const visitorVisaSection = require("./models/about_us_page/innerPages/visitorVisa");
const buisinessVisitorVisaSection = require("./models/about_us_page/innerPages/buisinessVisitorVisa");
const dualintentVisaSection = require("./models/about_us_page/innerPages/dualintentVisa");
const canadianExperienceClassSection = require("./models/about_us_page/innerPages/canadianExperienceClass");
const federalSkillTradesProgSection = require("./models/about_us_page/innerPages/federalSkillTradesProg");
const federalSkillWorkerProgSection = require("./models/about_us_page/innerPages/federalSkillWorkerProg");
const frenchTargetedDrawSection = require("./models/about_us_page/innerPages/frenchTargetedDraw");

const healthAuthorityStreamSection = require("./models/about_us_page/innerPages/healthAuthorityStream");
const entryLevelSemiSkilledSection = require("./models/about_us_page/innerPages/entryLevelSemiSkilled");
const internationalPostGraduateProgramSection = require("./models/about_us_page/innerPages/internationalPostGraduateProgram");
const internationalGraduateProgramSection = require("./models/about_us_page/innerPages/internationalGraduateProgram");
const bcPNPPageSection = require("./models/about_us_page/innerPages/bcPNP");
const healthcareTargatedDrawSection = require("./models/about_us_page/innerPages/healthcareTargatedDraw");
const PNPPageSection = require("./models/about_us_page/innerPages/pNP");
const stemTargetedDrawSection = require("./models/about_us_page/innerPages/stemTargetedDraw");
const tradeOccupationTargDrawSection = require("./models/about_us_page/innerPages/tradeOccupationTargDraw");
const pilotProgramSection = require("./models/about_us_page/innerPages/pilotProgram");
const agriFoodPilotSection = require("./models/about_us_page/innerPages/agriFoodPilotProg");

const rNIPSection = require("./models/about_us_page/innerPages/rNIP");
const spouseCommLawSponSection = require("./models/about_us_page/innerPages/spouseCommLawSpon");
const agricultAndAgriFoodOccuSection = require("./models/about_us_page/innerPages/agricultAndAgriFoodOccu");
const additionalDocumentMetaSection = require("./models/about_us_page/innerPages/metas/additionalDocumentMeta");
const adoptionMetaSection = require("./models/about_us_page/innerPages/metas/adoptionMeta");
const agricultAndAgriFoodOccuMetaSection = require("./models/about_us_page/innerPages/metas/agricultAndAgriFoodOccuMeta");
const agriFoodPilotProgMetaSection = require("./models/about_us_page/innerPages/metas/agriFoodPilotProgMeta");
const bcPNPMetaSection = require("./models/about_us_page/innerPages/metas/bcPNPMeta");
const bridgingOpenWorkMetaSection = require("./models/about_us_page/innerPages/metas/bridgingOpenWorkMeta");
const buisinessVisitorVisaMetaSection = require("./models/about_us_page/innerPages/metas/buisinessVisitorVisaMeta");
const canadianExperienceClassMetaSection = require("./models/about_us_page/innerPages/metas/canadianExperienceClassMeta");
const changeCollegeProgMetaSection = require("./models/about_us_page/innerPages/metas/changeCollegeProgMeta");
const citizenshipMetaSection = require("./models/about_us_page/innerPages/metas/citizenshipMeta");
const comLawPartPermanMetaSection = require("./models/about_us_page/innerPages/metas/comLawPartPermanMeta");
const comLawPartTempMetaSection = require("./models/about_us_page/innerPages/metas/comLawPartTempMeta");
const dependentChildMetaSection = require("./models/about_us_page/innerPages/metas/dependentChildMeta");
const dualintentVisaMetaSection = require("./models/about_us_page/innerPages/metas/dualintentVisaMeta");
const entryLevelSemiSkilledMetaSection = require("./models/about_us_page/innerPages/metas/entryLevelSemiSkilledMeta");
const extensionMetaSection = require("./models/about_us_page/innerPages/metas/extensionMeta");
const familyReunificationMetaSection = require("./models/about_us_page/innerPages/metas/familyReunificationMeta");
const federalSkillTradesProgMetaSection = require("./models/about_us_page/innerPages/metas/federalSkillTradesProgMeta");
const federalSkillWorkerProgMetaSection = require("./models/about_us_page/innerPages/metas/federalSkillWorkerProgMeta");
const flagpolingMetaSection = require("./models/about_us_page/innerPages/metas/flagpolingMeta");
const francophoneMobilityMetaSection = require("./models/about_us_page/innerPages/metas/francophoneMobilityMeta");
const frenchTargetedDrawMetaSection = require("./models/about_us_page/innerPages/metas/frenchTargetedDrawMeta");
const globalStreamLmiaMetaSection = require("./models/about_us_page/innerPages/metas/globalStreamLmiaMeta");
const healthAuthorityStreamMetaSection = require("./models/about_us_page/innerPages/metas/healthAuthorityStreamMeta");
const healthcareTargatedDrawMetaSection = require("./models/about_us_page/innerPages/metas/healthcareTargatedDrawMeta");
const humanitarianComMetaSection = require("./models/about_us_page/innerPages/metas/humanitarianComMeta");
const inHomeCaregiverProgramLpMetaSection = require("./models/about_us_page/innerPages/metas/inHomeCaregiverProgramLpMeta");
const insideCanadaMetaSection = require("./models/about_us_page/innerPages/metas/insideCanadaMeta");
const internationalGraduateProgMetaSection = require("./models/about_us_page/innerPages/metas/internationalGraduateProgMeta");
const internationalPostGraduateProgMetaSection = require("./models/about_us_page/innerPages/metas/internationalPostGraduateProgMeta");
const LmiaMetaSection = require("./models/about_us_page/innerPages/metas/LmiaMeta");
const lonelyCanadianMetaSection = require("./models/about_us_page/innerPages/metas/lonelyCanadianMeta");
const nonSdsMetaSection = require("./models/about_us_page/innerPages/metas/nonSdsMeta");
const openWorkDependentChildMetaSection = require("./models/about_us_page/innerPages/metas/openWorkDependentChildMeta");
const openWorkPerMetaSection = require("./models/about_us_page/innerPages/metas/openWorkPerMeta");
const openWorkVulnerableMetaSection = require("./models/about_us_page/innerPages/metas/openWorkVulnerableMeta");
const orphanMetaSection = require("./models/about_us_page/innerPages/metas/orphanMeta");
const outsideCanadaMetaSection = require("./models/about_us_page/innerPages/metas/outsideCanadaMeta");
const parentsGrandParMetaSection = require("./models/about_us_page/innerPages/metas/parentsGrandParMeta");
const pathwaysForCaregiverMetaSection = require("./models/about_us_page/innerPages/metas/pathwaysForCaregiverMeta");
const pgwpMetaSection = require("./models/about_us_page/innerPages/metas/pgwpMeta");
const pilotProgramMetaSection = require("./models/about_us_page/innerPages/metas/pilotProgramMeta");
const pNPMetaSection = require("./models/about_us_page/innerPages/metas/pNPMeta");
const prioritiesProgramMetaSection = require("./models/about_us_page/innerPages/metas/prioritiesProgramMeta");
const prPathCareLpMetaSection = require("./models/about_us_page/innerPages/metas/prPathCareLpMeta");
const prRenewalMetaSection = require("./models/about_us_page/innerPages/metas/prRenewalMeta");
const reconsiderationMetaSection = require("./models/about_us_page/innerPages/metas/reconsiderationMeta");
const replyPFLMetaSection = require("./models/about_us_page/innerPages/metas/replyPFLMeta");
const restorationStatusDraftMetaSection = require("./models/about_us_page/innerPages/metas/restorationStatusDraftMeta");
const rNIPMetaSection = require("./models/about_us_page/innerPages/metas/rNIPMeta");
const sdsMetaSection = require("./models/about_us_page/innerPages/metas/sdsMeta");
const skilledWorkerStreamMetaSection = require("./models/about_us_page/innerPages/metas/skilledWorkerStreamMeta");
const spousalOpenWokPerMetaSection = require("./models/about_us_page/innerPages/metas/spousalOpenWokPerMeta");
const spouseCommLawSponMetaSection = require("./models/about_us_page/innerPages/metas/spouseCommLawSponMeta");
const stemTargetedDrawMetaSection = require("./models/about_us_page/innerPages/metas/stemTargetedDrawMeta");
const studentVisaMetaSection = require("./models/about_us_page/innerPages/metas/studentVisaMeta");
const studyPermitMinorsMetaSection = require("./models/about_us_page/innerPages/metas/studyPermitMinorsMeta");
const superVisaMetaSection = require("./models/about_us_page/innerPages/metas/superVisaMeta");
const temporaryResidencyMetaSection = require("./models/about_us_page/innerPages/metas/superVisaMeta");
const temporaryResidentPermMetaSection = require("./models/about_us_page/innerPages/metas/temporaryResidentPermMeta");
const tradeOccupationTargDrawMetaSection = require("./models/about_us_page/innerPages/metas/tradeOccupationTargDrawMeta");
const transportOccuptionTargDrawMetaSection = require("./models/about_us_page/innerPages/metas/transportOccuptionTargDrawMeta");
const visitorToStudentMetaSection = require("./models/about_us_page/innerPages/metas/visitorToStudentMeta");
const visitorVisaMetaSection = require("./models/about_us_page/innerPages/metas/visitorVisaMeta");
const workPermitMetaSection = require("./models/about_us_page/innerPages/metas/workPermitMeta");

let port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

let storage = multer.memoryStorage();
let upload = multer({
  storage: storage,
  limits: { fileSize: 30 * 1024 * 1024 },
});

app.get("/", (request, response) => {
  response.send("Hello Brighlight Immigration");
});

app.get("/aboutUsAchievementsSection", async (request, response) => {
  try {
    let data = await aboutUsAchievementsSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/aboutUsAchievementsSection", async (request, response) => {
  try {
    let data = await aboutUsAchievementsSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/aboutUsAchievementsSection/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await aboutUsAchievementsSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/aboutUsBestChoiceSection", async (request, response) => {
  try {
    let data = await aboutUsBestChoiceSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/aboutUsBestChoiceSection/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await aboutUsBestChoiceSection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/contact-page", async (request, response) => {
  try {
    let data = await contactSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.get("/contact-page", async (request, response) => {
  try {
    let data = await contactSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/contact-page/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await contactSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/aboutUsBestChoiceSection", async (request, response) => {
  try {
    let data = await aboutUsBestChoiceSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.get("/aboutUsFoundationSection", async (request, response) => {
  try {
    let data = await aboutUsFoundationSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/aboutUsFoundationSection", async (request, response) => {
  try {
    let data = await aboutUsFoundationSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/aboutUsFoundationSection/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await aboutUsFoundationSection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/aboutUsMapSection", async (request, response) => {
  try {
    let data = await aboutUsMapSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/aboutUsMapSection", async (request, response) => {
  try {
    let data = await aboutUsMapSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.get("/aboutUsPillarsSection", async (request, response) => {
  try {
    let data = await aboutUsPillarsSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/aboutUsPillarsSection", async (request, response) => {
  try {
    let data = await aboutUsPillarsSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/aboutUsPillarsSection/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await aboutUsPillarsSection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/aboutUsTopSection", async (request, response) => {
  try {
    let data = await aboutUsTopSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/aboutUsTopSection", async (request, response) => {
  try {
    let data = await aboutUsTopSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/aboutUsTopSection/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await aboutUsTopSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/aboutUsGloballySection", async (request, response) => {
  try {
    let data = await aboutUsGloballySection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/aboutUsGloballySection", async (request, response) => {
  try {
    let data = await aboutUsGloballySection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/aboutUsGloballySection/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await aboutUsGloballySection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/aboutUsSocialPresenceSection", async (request, response) => {
  try {
    let data = await aboutUsSocialPresenceSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/aboutUsSocialPresenceSection", async (request, response) => {
  try {
    let data = await aboutUsSocialPresenceSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/aboutUsSocialPresenceSection/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await aboutUsSocialPresenceSection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/aboutUsVisionSection", async (request, response) => {
  try {
    let data = await aboutUsVisionSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/aboutUsVisionSection", async (request, response) => {
  try {
    let data = await aboutUsVisionSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/aboutUsVisionSection/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await aboutUsVisionSection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/map", async (request, response) => {
  try {
    let data = await mapSchemaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/map", async (request, response) => {
  try {
    let data = await mapSchemaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/map/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await mapSchemaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/home-top", async (request, response) => {
  try {
    let data = await homepageTopSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/home-top", async (request, response) => {
  try {
    let data = await homepageTopSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/home-top/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await homepageTopSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// DELETE endpoint to delete data
app.delete("/home-top/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deletedData = await homepageTopSection.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/privacy-policy", async (request, response) => {
  try {
    let data = await privacyPolicySection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/privacy-policy", async (request, response) => {
  try {
    let data = await privacyPolicySection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/privacy-policy/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await privacyPolicySection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/terms-conditions", async (request, response) => {
  try {
    let data = await termsConditionsSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/terms-conditions", async (request, response) => {
  try {
    let data = await termsConditionsSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/terms-conditions/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await termsConditionsSection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post(
  "/member-of",
  upload.fields([
    { name: "heading1Img", maxCount: 1 },
    { name: "heading2Img", maxCount: 1 },
    { name: "heading3Img", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      let formData = req.body;
      let files = req.files;

      // Convert file buffers to base64
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      // Save the data to MongoDB
      let data = await memberOfSection.create(formData);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.get("/member-of", async (request, response) => {
  try {
    let data = await memberOfSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.patch(
  "/member-of/:id",
  upload.fields([
    { name: "heading1Img", maxCount: 1 },
    { name: "heading2Img", maxCount: 1 },
    { name: "heading3Img", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      let { id } = req.params;
      let formData = req.body;
      let files = req.files;

      // Update file paths if new files are uploaded
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      let updatedFeature = await memberOfSection.findByIdAndUpdate(
        id,
        formData,
        { new: true }
      );

      if (!updatedFeature) {
        return res.status(404).json({ message: "Feature not found" });
      }

      res.json(updatedFeature);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.post(
  "/features",
  upload.fields([
    { name: "feature1SVG", maxCount: 1 },
    { name: "feature2SVG", maxCount: 1 },
    { name: "feature3SVG", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      let formData = req.body;
      let files = req.files;

      // Convert file buffers to base64
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      // Save the data to MongoDB
      let data = await featureSection.create(formData);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.get("/features", async (request, response) => {
  try {
    let data = await featureSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/features/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let formData = req.body;

    let updatedFeature = await featureSection.findByIdAndUpdate(id, formData, {
      new: true,
    });

    if (!updatedFeature) {
      return res.status(404).json({ message: "Feature not found" });
    }

    res.json(updatedFeature);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.get("/blog-section", async (request, response) => {
  try {
    let data = await blogsSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/blog-section", async (request, response) => {
  try {
    let data = await blogsSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/blog-section/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await blogsSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/our-process", async (request, response) => {
  try {
    let data = await ourProcessSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/our-process", async (request, response) => {
  try {
    let data = await ourProcessSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/our-process/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await ourProcessSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/our-process", async (request, response) => {
  try {
    let data = await ourProcessSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/our-process", async (request, response) => {
  try {
    let data = await ourProcessSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/our-process/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await ourProcessSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// DELETE endpoint to delete data
app.delete("/our-process/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deletedData = await ourProcessSection.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/videos-section", async (request, response) => {
  try {
    let data = await videosSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/videos-section", async (request, response) => {
  try {
    let data = await videosSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/videos-section/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await videosSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/transport-occupation", async (request, response) => {
  try {
    let data = await transportOccupationSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/transport-occupation", async (request, response) => {
  try {
    let data = await transportOccupationSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/transport-occupation/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await transportOccupationSection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post(
  "/achievements-section",
  upload.fields([
    { name: "heading", maxCount: 1 },
    { name: "description", maxCount: 1 },
    { name: "achievement1SVG", maxCount: 1 },
    { name: "achievement2SVG", maxCount: 1 },
    { name: "achievement3SVG", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      let formData = req.body;
      let files = req.files;

      // Convert file buffers to base64
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      // Save the data to MongoDB
      let data = await achievementsSection.create(formData);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.get("/achievements-section", async (request, response) => {
  try {
    let data = await achievementsSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/achievements-section/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let formData = req.body;

    let updatedFeature = await achievementsSection.findByIdAndUpdate(
      id,
      formData,
      {
        new: true,
      }
    );

    if (!updatedFeature) {
      return res.status(404).json({ message: "Feature not found" });
    }

    res.json(updatedFeature);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.post(
  "/testimonials-section",
  upload.fields([
    { name: "review1img", maxCount: 1 },
    { name: "review2img", maxCount: 1 },
    { name: "review3img", maxCount: 1 },
    { name: "review4img", maxCount: 1 },
    { name: "review5img", maxCount: 1 },
    { name: "review6img", maxCount: 1 },
    { name: "review7img", maxCount: 1 },
    { name: "review8img", maxCount: 1 },
    { name: "review9img", maxCount: 1 },
    { name: "review10img", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      let formData = req.body;
      let files = req.files;

      // Convert file buffers to base64
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      // Save the data to MongoDB
      let data = await TestimonialsSection.create(formData);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.get("/testimonials-section", async (request, response) => {
  try {
    let data = await TestimonialsSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.get("/testimonials-section/:id", async (req, res) => {
  try {
    let blogId = req.params.id;
    let data = await TestimonialsSection.findById(blogId);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.patch(
  "/testimonials-section/:id",
  upload.fields([
    { name: "review1img", maxCount: 1 },
    { name: "review2img", maxCount: 1 },
    { name: "review3img", maxCount: 1 },
    { name: "review4img", maxCount: 1 },
    { name: "review5img", maxCount: 1 },
    { name: "review6img", maxCount: 1 },
    { name: "review7img", maxCount: 1 },
    { name: "review8img", maxCount: 1 },
    { name: "review9img", maxCount: 1 },
    { name: "review10img", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      let { id } = req.params;
      let formData = req.body;
      let files = req.files;

      // Update file paths if new files are uploaded
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      let updatedFeature = await TestimonialsSection.findByIdAndUpdate(
        id,
        formData,
        { new: true }
      );

      if (!updatedFeature) {
        return res.status(404).json({ message: "Feature not found" });
      }

      res.json(updatedFeature);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.post(
  "/services-section",
  upload.fields([
    { name: "service1svg", maxCount: 1 },
    { name: "service2svg", maxCount: 1 },
    { name: "service3svg", maxCount: 1 },
    { name: "service4svg", maxCount: 1 },
    { name: "service5svg", maxCount: 1 },
    { name: "service6svg", maxCount: 1 },
    { name: "service7svg", maxCount: 1 },
    { name: "service8svg", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      let formData = req.body;
      let files = req.files;

      // Convert file buffers to base64
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      // Save the data to MongoDB
      let data = await servicesSection.create(formData);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.get("/services-section", async (request, response) => {
  try {
    let data = await servicesSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.patch(
  "/services-section/:id",
  upload.fields([
    { name: "service1svg", maxCount: 1 },
    { name: "service2svg", maxCount: 1 },
    { name: "service3svg", maxCount: 1 },
    { name: "service4svg", maxCount: 1 },
    { name: "service5svg", maxCount: 1 },
    { name: "service6svg", maxCount: 1 },
    { name: "service7svg", maxCount: 1 },
    { name: "service8svg", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      let { id } = req.params;
      let formData = req.body;
      let files = req.files;

      // Update file paths if new files are uploaded
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      let updatedFeature = await servicesSection.findByIdAndUpdate(
        id,
        formData,
        { new: true }
      );

      if (!updatedFeature) {
        return res.status(404).json({ message: "Feature not found" });
      }

      res.json(updatedFeature);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.post(
  "/express-entry",
  upload.fields([{ name: "aboutImage", maxCount: 1 }]),
  async (req, res) => {
    try {
      let formData = req.body;
      let files = req.files;

      // Convert file buffers to base64
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      // Save the data to MongoDB
      let data = await expressEntrySection.create(formData);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.get("/express-entry", async (request, response) => {
  try {
    let data = await expressEntrySection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/express-entry/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await expressEntrySection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post(
  "/permanent-residency",
  upload.fields([
    { name: "aboutImage", maxCount: 1 },
    { name: "p1SVG", maxCount: 1 },
    { name: "p2SVG", maxCount: 1 },
    { name: "p3SVG", maxCount: 1 },
    { name: "p4SVG", maxCount: 1 },
    { name: "p5SVG", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      let formData = req.body;
      let files = req.files;

      // Convert file buffers to base64
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      // Save the data to MongoDB
      let data = await permanentResidencySection.create(formData);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.get("/permanent-residency", async (request, response) => {
  try {
    let data = await permanentResidencySection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post(
  "/category-based",
  upload.fields([{ name: "aboutImage", maxCount: 1 }]),
  async (req, res) => {
    try {
      let formData = req.body;
      let files = req.files;

      // Convert file buffers to base64
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      // Save the data to MongoDB
      let data = await categoryBasedSchemaSection.create(formData);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.get("/category-based", async (request, response) => {
  try {
    let data = await categoryBasedSchemaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/category-based/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await categoryBasedSchemaSection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/federal-skilled", async (request, response) => {
  try {
    let data = await federalSkilledSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/federal-skilled", async (request, response) => {
  try {
    let data = await federalSkilledSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/federal-skilled/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await federalSkilledSection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/clb-calculator", async (request, response) => {
  try {
    let data = await CLBSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/clb-calculator", async (request, response) => {
  try {
    let data = await CLBSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/clb-calculator/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await CLBSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/bcpnp", async (request, response) => {
  try {
    let data = await bcpnpSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/bcpnp", async (request, response) => {
  try {
    let data = await bcpnpSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/bcpnp/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await bcpnpSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/faq-section", async (req, res) => {
  try {
    let {
      heading,
      q1,
      a1,
      q2,
      a2,
      q3,
      a3,
      q4,
      a4,
      q5,
      a5,
      q6,
      a6,
      q7,
      a7,
      q8,
      a8,
    } = req.body;

    let faq = new faqSection({
      heading,
      q1,
      a1,
      q2,
      a2,
      q3,
      a3,
      q4,
      a4,
      q5,
      a5,
      q6,
      a6,
      q7,
      a7,
      q8,
      a8,
    });

    await faq.save();
    res.status(201).send(faq);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/faq-section", async (request, response) => {
  try {
    let data = await faqSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/faq-section/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await faqSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/ourFoundationSection", upload.single("file"), async (req, res) => {
  try {
    let file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Convert file buffer to base64
    let imgBase64 = file.buffer.toString("base64");
    let imgDataUri = `data:${file.mimetype};base64,${imgBase64}`;

    // Save the data to the MongoDB collection
    let data = await ourFoundationSchemaSection.create({
      image: imgDataUri, // Store base64 data
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.get("/ourFoundationSection", async (request, response) => {
  try {
    let data = await ourFoundationSchemaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/ourFoundationSection/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await ourFoundationSchemaSection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/loveneetBg", upload.single("file"), async (req, res) => {
  try {
    let file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Convert file buffer to base64
    let imgBase64 = file.buffer.toString("base64");
    let imgDataUri = `data:${file.mimetype};base64,${imgBase64}`;

    // Save the data to the MongoDB collection
    let data = await loveneetBgSection.create({
      image: imgDataUri, // Store base64 data
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.get("/loveneetBg", async (request, response) => {
  try {
    let data = await loveneetBgSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/loveneetBg/:id", upload.single("file"), async (req, res) => {
  try {
    let { id } = req.params;
    let { image, ...updateData } = req.body;
    let file = req.file;

    // Prepare update data
    if (file) {
      // Convert file buffer to base64
      let imgBase64 = file.buffer.toString("base64");
      let imgDataUri = `data:${file.mimetype};base64,${imgBase64}`;
      updateData.image = imgDataUri;
    } else if (image) {
      // Use the base64 image from the request body if file is not provided
      updateData.image = image;
    }

    // Find and update the existing record
    let updatedData = await loveneetBgSection.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.delete("/loveneetBg/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deletedData = await loveneetBgSection.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/weAreSmall", upload.single("file"), async (req, res) => {
  try {
    let file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Convert file buffer to base64
    let imgBase64 = file.buffer.toString("base64");
    let imgDataUri = `data:${file.mimetype};base64,${imgBase64}`;

    // Save the data to the MongoDB collection
    let data = await weAreSmallSection.create({
      image: imgDataUri, // Store base64 data
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.get("/weAreSmall", async (request, response) => {
  try {
    let data = await weAreSmallSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/weAreSmall/:id", upload.single("file"), async (req, res) => {
  try {
    let { id } = req.params;
    let { image, ...updateData } = req.body;
    let file = req.file;

    // Prepare update data
    if (file) {
      // Convert file buffer to base64
      let imgBase64 = file.buffer.toString("base64");
      let imgDataUri = `data:${file.mimetype};base64,${imgBase64}`;
      updateData.image = imgDataUri;
    } else if (image) {
      // Use the base64 image from the request body if file is not provided
      updateData.image = image;
    }

    // Find and update the existing record
    let updatedData = await weAreSmallSection.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/ourVisionSection", upload.single("file"), async (req, res) => {
  try {
    let file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Convert file buffer to base64
    let imgBase64 = file.buffer.toString("base64");
    let imgDataUri = `data:${file.mimetype};base64,${imgBase64}`;

    // Save the data to the MongoDB collection
    let data = await ourVisionSchemaSection.create({
      image: imgDataUri, // Store base64 data
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.get("/ourVisionSection", async (request, response) => {
  try {
    let data = await ourVisionSchemaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/ourVisionSection/:id", upload.single("file"), async (req, res) => {
  try {
    let { id } = req.params;
    let { image, ...updateData } = req.body;
    let file = req.file;

    // Prepare update data
    if (file) {
      // Convert file buffer to base64
      let imgBase64 = file.buffer.toString("base64");
      let imgDataUri = `data:${file.mimetype};base64,${imgBase64}`;
      updateData.image = imgDataUri;
    } else if (image) {
      // Use the base64 image from the request body if file is not provided
      updateData.image = image;
    }

    // Find and update the existing record
    let updatedData = await ourVisionSchemaSection.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/ourPillarsSection", async (request, response) => {
  try {
    let data = await ourPillarsSchemaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/ourPillarsSection", upload.single("file"), async (req, res) => {
  try {
    let file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Convert file buffer to base64
    let imgBase64 = file.buffer.toString("base64");
    let imgDataUri = `data:${file.mimetype};base64,${imgBase64}`;

    // Save the data to the MongoDB collection
    let data = await ourPillarsSchemaSection.create({
      image: imgDataUri, // Store base64 data
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.put("/ourPillarsSection/:id", upload.single("file"), async (req, res) => {
  try {
    let { id } = req.params;
    let { image, ...updateData } = req.body;
    let file = req.file;

    // Prepare update data
    if (file) {
      // Convert file buffer to base64
      let imgBase64 = file.buffer.toString("base64");
      let imgDataUri = `data:${file.mimetype};base64,${imgBase64}`;
      updateData.image = imgDataUri;
    } else if (image) {
      // Use the base64 image from the request body if file is not provided
      updateData.image = image;
    }

    // Find and update the existing record
    let updatedData = await ourPillarsSchemaSection.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/bestChoice", upload.single("file"), async (req, res) => {
  try {
    let file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Convert file buffer to base64
    let imgBase64 = file.buffer.toString("base64");
    let imgDataUri = `data:${file.mimetype};base64,${imgBase64}`;

    // Save the data to the MongoDB collection
    let data = await bestChoice.create({
      image: imgDataUri, // Store base64 data
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.get("/bestChoice", async (request, response) => {
  try {
    let data = await bestChoice.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/plane", upload.single("file"), async (req, res) => {
  try {
    let file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Convert file buffer to base64
    let imgBase64 = file.buffer.toString("base64");
    let imgDataUri = `data:${file.mimetype};base64,${imgBase64}`;

    // Save the data to the MongoDB collection
    let data = await plane.create({
      image: imgDataUri, // Store base64 data
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.get("/plane", async (request, response) => {
  try {
    let data = await plane.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/socialMedia", upload.single("file"), async (req, res) => {
  try {
    let file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Convert file buffer to base64
    let imgBase64 = file.buffer.toString("base64");
    let imgDataUri = `data:${file.mimetype};base64,${imgBase64}`;

    // Save the data to the MongoDB collection
    let data = await socialMedia.create({
      image: imgDataUri, // Store base64 data
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.get("/socialMedia", async (request, response) => {
  try {
    let data = await socialMedia.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/globally", upload.single("file"), async (req, res) => {
  try {
    let file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Convert file buffer to base64
    let imgBase64 = file.buffer.toString("base64");
    let imgDataUri = `data:${file.mimetype};base64,${imgBase64}`;

    // Save the data to the MongoDB collection
    let data = await globallySchemaSection.create({
      image: imgDataUri, // Store base64
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.get("/globally", async (request, response) => {
  try {
    let data = await globallySchemaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post(
  "/directors",
  upload.fields([
    { name: "img", maxCount: 1 },
    { name: "d1image", maxCount: 1 },
    { name: "d2image", maxCount: 1 },
    { name: "d3image", maxCount: 1 },
    { name: "d4image", maxCount: 1 },
    { name: "d5image", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      let formData = req.body;
      let files = req.files;

      // Convert file buffers to base64
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      // Save the data to MongoDB
      let data = await aboutUsDirectorsSection.create(formData);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.get("/directors", async (request, response) => {
  try {
    let data = await aboutUsDirectorsSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/directors/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let formData = req.body;

    let updatedFeature = await aboutUsDirectorsSection.findByIdAndUpdate(
      id,
      formData,
      {
        new: true,
      }
    );

    if (!updatedFeature) {
      return res.status(404).json({ message: "Feature not found" });
    }

    res.json(updatedFeature);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.post("/we-are", upload.single("img"), async (req, res) => {
  try {
    let { heading } = req.body;
    let file = req.file;

    // Prepare form data
    let formData = { heading };

    if (file) {
      // Convert file buffer to base64
      let imgBase64 = file.buffer.toString("base64");
      formData.img = `data:${file.mimetype};base64,${imgBase64}`;
    }

    // Save the data to MongoDB
    let data = await aboutUsWeAreSection.create(formData);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

// Endpoint to fetch existing data
app.get("/we-are", async (req, res) => {
  try {
    let data = await aboutUsWeAreSection.find(); // Assuming single document
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.put("/we-are/:id", upload.single("file"), async (req, res) => {
  try {
    let { id } = req.params;
    let { image, ...updateData } = req.body;
    let file = req.file;

    // Prepare update data
    if (file) {
      // Convert file buffer to base64
      let imgBase64 = file.buffer.toString("base64");
      let imgDataUri = `data:${file.mimetype};base64,${imgBase64}`;
      updateData.image = imgDataUri;
    } else if (image) {
      // Use the base64 image from the request body if file is not provided
      updateData.image = image;
    }

    // Find and update the existing record
    let updatedData = await aboutUsWeAreSection.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.patch("/aboutUsVisionSection/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updates = req.body;

    let data = await aboutUsVisionSection.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

function formatDate(date) {
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");
  let year = String(date.getFullYear()).slice(-2);
  return `${month}/${day}/${year}`;
}

let schema = new mongoose.Schema({
  image: String,
  blog_heading: String,
  blog_content: String,
  tag_1: String,
  tag_2: String,
  tag_3: String,
  date: String,
  metaTitle: String,
  metaDescription: String,
});
let ImageModel = mongoose.model("All Blogs", schema);

app.get("/blogs", async (request, response) => {
  try {
    let data = await ImageModel.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.get("/blogs/:id", async (req, res) => {
  try {
    let blogId = req.params.id;
    let data = await ImageModel.findById(blogId);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post(
  "/adding-blog",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    try {
      let formData = req.body;
      let files = req.files;

      // Convert file buffers to base64
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      // Function to format date to MM/DD/YY
      function formatDate(date) {
        let month = String(date.getMonth() + 1).padStart(2, "0");
        let day = String(date.getDate()).padStart(2, "0");
        let year = String(date.getFullYear()).slice(-2);
        return `${month}/${day}/${year}`;
      }

      // Format the date field
      if (formData.date) {
        // Convert to date and format
        let date = new Date(formData.date);
        formData.date = formatDate(date);
      } else {
        // Set default date if none provided
        formData.date = formatDate(new Date());
      }

      // Save the data to MongoDB
      let data = await addingBlogSection.create(formData);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.get("/adding-blog/:id", async (req, res) => {
  try {
    let blogId = req.params.id;
    let data = await addingBlogSection.findById(blogId);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.patch(
  "/adding-blog/:id",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    try {
      let { id } = req.params;
      let formData = req.body;
      let files = req.files;

      // Update file paths if new files are uploaded
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      let updatedFeature = await addingBlogSection.findByIdAndUpdate(
        id,
        formData,
        { new: true }
      );

      if (!updatedFeature) {
        return res.status(404).json({ message: "Feature not found" });
      }

      res.json(updatedFeature);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.delete("/adding-blog/:id", async (req, res) => {
  try {
    let blogId = req.params.id;
    let data = await addingBlogSection.findByIdAndDelete(blogId);

    if (!data) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

let loveneetSchema = new mongoose.Schema({
  image: String,
  name: String,
  post: String,
  tagline: String,
  linkedin: String,
  instagram: String,
  RCIC: String,
});

let LoveneetModel = mongoose.model("Loveneet", loveneetSchema);

app.get("/loveneet", async (request, response) => {
  try {
    let data = await LoveneetModel.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/loveneet", async (request, response) => {
  try {
    let { img1, name, post, tagline, linkedin, instagram, RCIC } = request.body;
    let loveneetData = new LoveneetModel({
      image: img1,
      name: name,
      post: post,
      tagline: tagline,
      linkedin: linkedin,
      instagram: instagram,
      RCIC: RCIC,
    });
    await loveneetData.save();
    response.send({ message: "Image Upload Successfully!" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.get("/sws", async (request, response) => {
  try {
    let data = await swsSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/sws", async (request, response) => {
  try {
    let data = await swsSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/sws/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await swsSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/pp", async (request, response) => {
  try {
    let data = await ppSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/pp", async (request, response) => {
  try {
    let data = await ppSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/pp/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await ppSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/ipg", async (request, response) => {
  try {
    let data = await ipgSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/ipg", async (request, response) => {
  try {
    let data = await ipgSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/ipg/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await ipgSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/igp", async (request, response) => {
  try {
    let data = await igpSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/igp", async (request, response) => {
  try {
    let data = await igpSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/igp/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await igpSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post(
  "/adding-blog",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    try {
      let formData = req.body;
      let files = req.files;

      // Convert file buffers to base64
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      // Format the date to 'YYYY-MM-DD'
      if (formData.date) {
        // Convert to date and format to 'YYYY-MM-DD'
        let date = new Date(formData.date);
        formData.date = date.toISOString().split("T")[0];
      } else {
        // Set default date if none provided
        formData.date = new Date().toISOString().split("T")[0];
      }

      // Save the data to MongoDB
      let data = await addingBlogSection.create(formData);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.get("/adding-blog", async (request, response) => {
  try {
    let data = await addingBlogSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/adding-blog/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let formData = req.body;

    let updatedFeature = await addingBlogSection.findByIdAndUpdate(
      id,
      formData,
      {
        new: true,
      }
    );

    if (!updatedFeature) {
      return res.status(404).json({ message: "Feature not found" });
    }

    res.json(updatedFeature);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.post(
  "/news",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    try {
      let formData = req.body;
      let files = req.files;

      // Convert file buffers to base64
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      // Format the date to 'YYYY-MM-DD'
      if (formData.date) {
        // Convert to date and format to 'YYYY-MM-DD'
        let date = new Date(formData.date);
        formData.date = date.toISOString().split("T")[0];
      } else {
        // Set default date if none provided
        formData.date = new Date().toISOString().split("T")[0];
      }

      // Save the data to MongoDB
      let data = await newsSection.create(formData);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.get("/news", async (request, response) => {
  try {
    let data = await newsSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.patch(
  "/news/:id",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    try {
      let { id } = req.params;
      let formData = req.body;
      let files = req.files;

      // Update file paths if new files are uploaded
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      let updatedFeature = await newsSection.findByIdAndUpdate(id, formData, {
        new: true,
      });

      if (!updatedFeature) {
        return res.status(404).json({ message: "Feature not found" });
      }

      res.json(updatedFeature);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.delete("/news/:id", async (req, res) => {
  try {
    let blogId = req.params.id;
    let data = await newsSection.findByIdAndDelete(blogId);

    if (!data) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json({ message: "News deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post(
  "/news",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    try {
      let formData = req.body;
      let files = req.files;

      // Convert file buffers to base64
      for (let key in files) {
        if (files[key]) {
          let imgBase64 = files[key][0].buffer.toString("base64");
          formData[key] = `data:${files[key][0].mimetype};base64,${imgBase64}`;
        }
      }

      // Function to format date to MM/DD/YY
      function formatDate(date) {
        let month = String(date.getMonth() + 1).padStart(2, "0");
        let day = String(date.getDate()).padStart(2, "0");
        let year = String(date.getFullYear()).slice(-2);
        return `${month}/${day}/${year}`;
      }

      // Format the date field
      if (formData.date) {
        // Convert to date and format
        let date = new Date(formData.date);
        formData.date = formatDate(date);
      } else {
        // Set default date if none provided
        formData.date = formatDate(new Date());
      }

      // Save the data to MongoDB
      let data = await newsSection.create(formData);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

app.get("/news/:id", async (req, res) => {
  try {
    let blogId = req.params.id;
    let data = await newsSection.findById(blogId);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.put("/news/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updates = req.body;

    let data = await newsSection.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: "team.creativemonk@gmail.com",
    pass: "nnqi lymc hgsi hudt",
  },
});

app.post("/send-email", (req, res) => {
  const { from, to, subject, text } = req.body;

  const mailOptions = {
    from,
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).json({ message: "Email sent successfully", info });
  });
});

app.get("/news-section", async (request, response) => {
  try {
    let data = await newsSectionData.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/news-section", async (request, response) => {
  try {
    let data = await newsSectionData.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/news-section/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await newsSectionData.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/home-meta", async (request, response) => {
  try {
    let data = await homeMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/home-meta", async (request, response) => {
  try {
    let data = await homeMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/home-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await homeMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/about-meta", async (request, response) => {
  try {
    let data = await aboutMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/about-meta", async (request, response) => {
  try {
    let data = await aboutMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/about-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await aboutMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/contact-meta", async (request, response) => {
  try {
    let data = await contactMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/contact-meta", async (request, response) => {
  try {
    let data = await contactMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/contact-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await contactMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/permanent-meta", async (request, response) => {
  try {
    let data = await permanentMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/permanent-meta", async (request, response) => {
  try {
    let data = await permanentMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/permanent-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await permanentMetaSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/bcpnp-meta", async (request, response) => {
  try {
    let data = await bcpnpMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/bcpnp-meta", async (request, response) => {
  try {
    let data = await bcpnpMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/bcpnp-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await bcpnpMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/category-meta", async (request, response) => {
  try {
    let data = await categoryBasedMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/category-meta", async (request, response) => {
  try {
    let data = await categoryBasedMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/category-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await categoryBasedMetaSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/clb-meta", async (request, response) => {
  try {
    let data = await clbMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/clb-meta", async (request, response) => {
  try {
    let data = await clbMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/clb-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await clbMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/federal-meta", async (request, response) => {
  try {
    let data = await federalMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/federal-meta", async (request, response) => {
  try {
    let data = await federalMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/federal-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await federalMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/igp-meta", async (request, response) => {
  try {
    let data = await igpMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/igp-meta", async (request, response) => {
  try {
    let data = await igpMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/igp-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await igpMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/ipg-meta", async (request, response) => {
  try {
    let data = await ipgMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/ipg-meta", async (request, response) => {
  try {
    let data = await ipgMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/ipg-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await ipgMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/blogs-meta", async (request, response) => {
  try {
    let data = await blogsMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/blogs-meta", async (request, response) => {
  try {
    let data = await blogsMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/blogs-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await blogsMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/news-meta", async (request, response) => {
  try {
    let data = await newsMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/news-meta", async (request, response) => {
  try {
    let data = await newsMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/news-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await newsMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/express-meta", async (request, response) => {
  try {
    let data = await entryMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/express-meta", async (request, response) => {
  try {
    let data = await entryMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/express-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await entryMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/transport-meta", async (request, response) => {
  try {
    let data = await transportMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/transport-meta", async (request, response) => {
  try {
    let data = await transportMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/transport-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await transportMetaSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/bp-meta", async (request, response) => {
  try {
    let data = await bpMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/bp-meta", async (request, response) => {
  try {
    let data = await bpMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/bp-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await bpMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/work-meta", async (request, response) => {
  try {
    let data = await workMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/work-meta", async (request, response) => {
  try {
    let data = await workMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/work-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await workMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/pfl-meta", async (request, response) => {
  try {
    let data = await pflMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/pfl-meta", async (request, response) => {
  try {
    let data = await pflMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/pfl-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await pflMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/visitor-meta", async (request, response) => {
  try {
    let data = await visitorMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/visitor-meta", async (request, response) => {
  try {
    let data = await visitorMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/visitor-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await visitorMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/study-meta", async (request, response) => {
  try {
    let data = await studyMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/study-meta", async (request, response) => {
  try {
    let data = await studyMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/study-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await studyMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/family-meta", async (request, response) => {
  try {
    let data = await familyMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/family-meta", async (request, response) => {
  try {
    let data = await familyMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/family-meta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await familyMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/pr-renewal", async (request, response) => {
  try {
    let data = await prRenewalSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/pr-renewal", async (request, response) => {
  try {
    let data = await prRenewalSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/pr-renewal/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await prRenewalSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

/////

app.get("/citizenship", async (request, response) => {
  try {
    let data = await citizenshipSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/citizenship", async (request, response) => {
  try {
    let data = await citizenshipSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/citizenship/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await citizenshipSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/reconsideration", async (request, response) => {
  try {
    let data = await reconsiderationSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/reconsideration", async (request, response) => {
  try {
    let data = await reconsiderationSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/reconsideration/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await reconsiderationSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/additionalDocument", async (request, response) => {
  try {
    let data = await additionalDocumentSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/additionalDocument", async (request, response) => {
  try {
    let data = await additionalDocumentSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/additionalDocument/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await additionalDocumentSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

////

app.get("/replyPFl", async (request, response) => {
  try {
    let data = await replyPFlSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/replyPFl", async (request, response) => {
  try {
    let data = await replyPFlSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/replyPFl/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await replyPFlSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/Lmia", async (request, response) => {
  try {
    let data = await LmiaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/Lmia", async (request, response) => {
  try {
    let data = await LmiaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/Lmia/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await LmiaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/openWorkPer", async (request, response) => {
  try {
    let data = await openWorkPermitSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/openWorkPer", async (request, response) => {
  try {
    let data = await openWorkPermitSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/openWorkPer/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await openWorkPermitSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/workPermit", async (request, response) => {
  try {
    let data = await workPermitSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/workPermit", async (request, response) => {
  try {
    let data = await workPermitSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/workPermit/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await workPermitSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/agricultureStreamLmia", async (request, response) => {
  try {
    let data = await agricultureStreamLmiaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/agricultureStreamLmia", async (request, response) => {
  try {
    let data = await agricultureStreamLmiaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/agricultureStreamLmia/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await agricultureStreamLmiaSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/in-home-caregiver", async (request, response) => {
  try {
    let data = await inHomeCaregiverSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/in-home-caregiver", async (request, response) => {
  try {
    let data = await inHomeCaregiverSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/in-home-caregiver/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await inHomeCaregiverSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/globalStreamLmia", async (request, response) => {
  try {
    let data = await globalTalentStreamLmiaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/globalStreamLmia", async (request, response) => {
  try {
    let data = await globalTalentStreamLmiaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/globalStreamLmia/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await globalTalentStreamLmiaSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/lowWageLmia", async (request, response) => {
  try {
    let data = await lowHighWageSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/lowWageLmia", async (request, response) => {
  try {
    let data = await lowHighWageSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/lowWageLmia/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await lowHighWageSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//

app.get("/pr-pathways-caregiver-lp", async (request, response) => {
  try {
    let data = await prPathwaysCaregiver.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/pr-pathways-caregiver-lp", async (request, response) => {
  try {
    let data = await prPathwaysCaregiver.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/pr-pathways-caregiver-lp/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await prPathwaysCaregiver.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//

app.get("/pathway-for-caregiver", async (request, response) => {
  try {
    let data = await pathwaysForCaregiverSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/pathway-for-caregiver", async (request, response) => {
  try {
    let data = await pathwaysForCaregiverSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/pathway-for-caregiver/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await pathwaysForCaregiverSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//

app.get("/skilled-worker-stream", async (request, response) => {
  try {
    let data = await skilledWorkerStreamSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/skilled-worker-stream", async (request, response) => {
  try {
    let data = await skilledWorkerStreamSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/skilled-worker-stream/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await skilledWorkerStreamSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/bridgingOpenWork", async (request, response) => {
  try {
    let data = await bridgingOpenSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/bridgingOpenWork", async (request, response) => {
  try {
    let data = await bridgingOpenSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/bridgingOpenWork/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await bridgingOpenSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);  
    res.status(500).json({ message: error.message }); 
  }
});




////

app.get("/francoMob", async (request, response) => {
  try {
    let data = await francophoneMobilitySection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/francoMob", async (request, response) => {
  try {
    let data = await francophoneMobilitySection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/francoMob/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await francophoneMobilitySection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);  
    res.status(500).json({ message: error.message }); 
  }
});





////

app.get("/openWorkVulnerable", async (request, response) => {
  try {
    let data = await openWorkVulnerableSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/openWorkVulnerable", async (request, response) => {
  try {
    let data = await openWorkVulnerableSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/openWorkVulnerable/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await openWorkVulnerableSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);  
    res.status(500).json({ message: error.message }); 
  }
});


///



app.get("/openWorkDependentChild", async (request, response) => {
  try {
    let data = await openWorkDependentChildSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/openWorkDependentChild", async (request, response) => {
  try {
    let data = await openWorkDependentChildSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/openWorkDependentChild/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await openWorkDependentChildSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);  
    res.status(500).json({ message: error.message }); 
  }
});


///



app.get("/pgwp", async (request, response) => {
  try {
    let data = await pgwpSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/pgwp", async (request, response) => {
  try {
    let data = await pgwpSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/pgwp/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await pgwpSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);  
    res.status(500).json({ message: error.message }); 
  }
});


///



app.get("/familyReunification", async (request, response) => {
  try {
    let data = await familyReunificationSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/familyReunification", async (request, response) => {
  try {
    let data = await familyReunificationSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/familyReunification/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await familyReunificationSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);  
    res.status(500).json({ message: error.message }); 
  }
});


///

///

app.get("/adoption", async (request, response) => {
  try {
    let data = await adoptionSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/adoption", async (request, response) => {
  try {
    let data = await adoptionSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/adoption/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await adoptionSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);  
    res.status(500).json({ message: error.message }); 
  }
});

////


app.get("/dependentChildren", async (request, response) => {
  try {
    let data = await DependentChildrenSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/dependentChildren", async (request, response) => {
  try {
    let data = await DependentChildrenSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/dependentChildren/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await DependentChildrenSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);  
    res.status(500).json({ message: error.message }); 
  }
});


///


app.get("/priorities-program-page", async (request, response) => {
  try {
    let data = await prioritiesProgramSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/priorities-program-page", async (request, response) => {
  try {
    let data = await prioritiesProgramSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/priorities-program-page/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await prioritiesProgramSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//
app.get("/humanitarian-compassionate", async (request, response) => {
  try {
    let data = await humanitarianComSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/humanitarian-compassionate", async (request, response) => {
  try {
    let data = await humanitarianComSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/humanitarian-compassionate/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await humanitarianComSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//

app.get("/lonelyCanadian", async (request, response) => {
  try {
    let data = await lonelyCanadianSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/lonelyCanadian", async (request, response) => {
  try {
    let data = await lonelyCanadianSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/lonelyCanadian/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await lonelyCanadianSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//


app.get("/ParentsGrandparents", async (request, response) => {
  try {
    let data = await parentsGrandParSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/ParentsGrandparents", async (request, response) => {
  try {
    let data = await parentsGrandParSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/ParentsGrandparents/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await parentsGrandParSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//


app.get("/studentVisa", async (request, response) => {
  try {
    let data = await studentVisaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/studentVisa", async (request, response) => {
  try {
    let data = await studentVisaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/studentVisa/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await studentVisaSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



//


app.get("/orphan", async (request, response) => {
  try {
    let data = await orphanSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/orphan", async (request, response) => {
  try {
    let data = await orphanSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/orphan/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await orphanSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//


app.get("/insideCanada", async (request, response) => {
  try {
    let data = await insideCanadaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/insideCanada", async (request, response) => {
  try {
    let data = await insideCanadaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/insideCanada/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await insideCanadaSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//


//


app.get("/changeCollegeProgram", async (request, response) => {
  try {
    let data = await changeCollegeProgSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/changeCollegeProgram", async (request, response) => {
  try {
    let data = await changeCollegeProgSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/changeCollegeProgram/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await changeCollegeProgSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//

//


app.get("/visitorToStudent", async (request, response) => {
  try {
    let data = await visitorToStudentSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/visitorToStudent", async (request, response) => {
  try {
    let data = await visitorToStudentSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/visitorToStudent/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await visitorToStudentSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//
//


app.get("/outsideCanada", async (request, response) => {
  try {
    let data = await outsideCanadaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/outsideCanada", async (request, response) => {
  try {
    let data = await outsideCanadaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/outsideCanada/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await outsideCanadaSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//

//


app.get("/nonSds", async (request, response) => {
  try {
    let data = await nonSdsSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/nonSds", async (request, response) => {
  try {
    let data = await nonSdsSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/nonSds/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await nonSdsSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//
//


app.get("/sds", async (request, response) => {
  try {
    let data = await sdsSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/sds", async (request, response) => {
  try {
    let data = await sdsSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/sds/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await sdsSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//
///
app.get("/studyPermitMinors", async (request, response) => {
  try {
    let data = await studyPermitMinorsSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/studyPermitMinors", async (request, response) => {
  try {
    let data = await studyPermitMinorsSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/studyPermitMinors/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await studyPermitMinorsSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//

///
app.get("/extensionsDraft", async (request, response) => {
  try {
    let data = await extensionSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/extensionsDraft", async (request, response) => {
  try {
    let data = await extensionSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/extensionsDraft/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await extensionSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//




///
app.get("/flagpoling", async (request, response) => {
  try {
    let data = await flagpolingSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/flagpoling", async (request, response) => {
  try {
    let data = await flagpolingSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/flagpoling/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await flagpolingSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//


///
app.get("/restorationStatus", async (request, response) => {
  try {
    let data = await restorationStatusDraftSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/restorationStatus", async (request, response) => {
  try {
    let data = await restorationStatusDraftSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/restorationStatus/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await restorationStatusDraftSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//
/////
///
app.get("/spousalOpenWorkPermit", async (request, response) => {
  try {
    let data = await spousalOpenWokPerSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/spousalOpenWorkPermit", async (request, response) => {
  try {
    let data = await spousalOpenWokPerSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/spousalOpenWorkPermit/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await spousalOpenWokPerSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//
/////
///
app.get("/commonLawPartnerPermanent", async (request, response) => {
  try {
    let data = await comLawPartPermanSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/commonLawPartnerPermanent", async (request, response) => {
  try {
    let data = await comLawPartPermanSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/commonLawPartnerPermanent/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await comLawPartPermanSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//
/////
///
app.get("/commonLawPartnerTemporary", async (request, response) => {
  try {
    let data = await comLawPartTempSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/commonLawPartnerTemporary", async (request, response) => {
  try {
    let data = await comLawPartTempSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/commonLawPartnerTemporary/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await comLawPartTempSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//
/////
///
app.get("/superVisa", async (request, response) => {
  try {
    let data = await superVisaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/superVisa", async (request, response) => {
  try {
    let data = await superVisaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/superVisa/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await superVisaSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//
///
app.get("/temporaryResidentPermit", async (request, response) => {
  try {
    let data = await temporaryResidentPermSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/temporaryResidentPermit", async (request, response) => {
  try {
    let data = await temporaryResidentPermSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/temporaryResidentPermit/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await temporaryResidentPermSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//
/////
///
app.get("/temporaryResidency", async (request, response) => {
  try {
    let data = await temporaryResidencySection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/temporaryResidency", async (request, response) => {
  try {
    let data = await temporaryResidencySection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/temporaryResidency/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await temporaryResidencySection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//
/////
///
app.get("/visitorVisa", async (request, response) => {
  try {
    let data = await visitorVisaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/visitorVisa", async (request, response) => {
  try {
    let data = await visitorVisaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/visitorVisa/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await visitorVisaSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//
///
app.get("/buisinessVisitorVisa", async (request, response) => {
  try {
    let data = await buisinessVisitorVisaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/buisinessVisitorVisa", async (request, response) => {
  try {
    let data = await buisinessVisitorVisaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/buisinessVisitorVisa/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await buisinessVisitorVisaSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//
///
app.get("/dualIntetVisa", async (request, response) => {
  try {
    let data = await dualintentVisaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/dualIntetVisa", async (request, response) => {
  try {
    let data = await dualintentVisaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/dualIntetVisa/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await dualintentVisaSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//

///
app.get("/canadianExperienceClass", async (request, response) => {
  try {
    let data = await canadianExperienceClassSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/canadianExperienceClass", async (request, response) => {
  try {
    let data = await canadianExperienceClassSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/canadianExperienceClass/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await canadianExperienceClassSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
//

///
app.get("/federalSkilledTradedProgam", async (request, response) => {
  try {
    let data = await federalSkillTradesProgSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/federalSkilledTradedProgam", async (request, response) => {
  try {
    let data = await federalSkillTradesProgSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/federalSkilledTradedProgam/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await federalSkillTradesProgSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})

///
app.get("/federalSkilledWorkerProgam", async (request, response) => {
  try {
    let data = await federalSkillWorkerProgSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/federalSkilledWorkerProgam", async (request, response) => {
  try {
    let data = await federalSkillWorkerProgSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/federalSkilledWorkerProgam/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await federalSkillWorkerProgSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})
////


app.get("/frenchTargatedDraw", async (request, response) => {
  try {
    let data = await frenchTargetedDrawSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/frenchTargatedDraw", async (request, response) => {
  try {
    let data = await frenchTargetedDrawSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/frenchTargatedDraw/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await frenchTargetedDrawSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})


//
app.get("/health-authority-stream", async (request, response) => {
  try {
    let data = await healthAuthorityStreamSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/health-authority-stream", async (request, response) => {
  try {
    let data = await healthAuthorityStreamSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/health-authority-stream/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await healthAuthorityStreamSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//

app.get("/entry-level-semi-skilled", async (request, response) => {
  try {
    let data = await entryLevelSemiSkilledSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/entry-level-semi-skilled", async (request, response) => {
  try {
    let data = await entryLevelSemiSkilledSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/entry-level-semi-skilled/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await entryLevelSemiSkilledSection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//

app.get(
  "/international-post-graduate-program-page",
  async (request, response) => {
    try {
      let data = await internationalPostGraduateProgramSection.find();
      response.status(200).json(data);
    } catch (error) {
      console.log(error);
      response.status(500).json({ message: error });
    }
  }
);

app.post(
  "/international-post-graduate-program-page",
  async (request, response) => {
    try {
      let data = await internationalPostGraduateProgramSection.create(
        request.body
      );
      response.status(200).json(data);
    } catch (error) {
      console.log(error);
      response.status(500).json({ message: error });
    }
  }
);

app.put("/international-post-graduate-program-page/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData =
      await internationalPostGraduateProgramSection.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
        }
      );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/international-graduate-program-page", async (request, response) => {
  try {
    let data = await internationalGraduateProgramSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/international-graduate-program-page", async (request, response) => {
  try {
    let data = await internationalGraduateProgramSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/international-graduate-program-page/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData =
      await internationalGraduateProgramSection.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
        }
      );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//
app.get("/bc-pnp-page", async (request, response) => {
  try {
    let data = await bcPNPPageSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/bc-pnp-page", async (request, response) => {
  try {
    let data = await bcPNPPageSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/bc-pnp-page/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await bcPNPPageSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
//

app.get("/healthcareTargatedDraw", async (request, response) => {
  try {
    let data = await healthcareTargatedDrawSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/healthcareTargatedDraw", async (request, response) => {
  try {
    let data = await healthcareTargatedDrawSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/healthcareTargatedDraw/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await healthcareTargatedDrawSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/pnp-page", async (request, response) => {
  try {
    let data = await PNPPageSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/pnp-page", async (request, response) => {
  try {
    let data = await PNPPageSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/pnp-page/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await PNPPageSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/stemTagatedDraw", async (request, response) => {
  try {
    let data = await stemTargetedDrawSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/stemTagatedDraw", async (request, response) => {
  try {
    let data = await stemTargetedDrawSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/stemTagatedDraw/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await stemTargetedDrawSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/tradeOccupationTargetedDraw", async (request, response) => {
  try {
    let data = await tradeOccupationTargDrawSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/tradeOccupationTargetedDraw", async (request, response) => {
  try {
    let data = await tradeOccupationTargDrawSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/tradeOccupationTargetedDraw/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await tradeOccupationTargDrawSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


///

app.get("/transportOccupaationTargetedDraw", async (request, response) => {
  try {
    let data = await transportOccupationSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/transportOccupaationTargetedDraw", async (request, response) => {
  try {
    let data = await transportOccupationSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/transportOccupaationTargetedDraw/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await transportOccupationSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/pilotProgram", async (request, response) => {
  try {
    let data = await pilotProgramSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/pilotProgram", async (request, response) => {
  try {
    let data = await pilotProgramSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/pilotProgram/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await pilotProgramSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


///

app.get("/agiFoodPilotProgram", async (request, response) => {
  try {
    let data = await agriFoodPilotSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/agiFoodPilotProgram", async (request, response) => {
  try {
    let data = await agriFoodPilotSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/agiFoodPilotProgram/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await agriFoodPilotSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/rnip-page", async (request, response) => {
  try {
    let data = await rNIPSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/rnip-page", async (request, response) => {
  try {
    let data = await rNIPSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/rnip-page/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await rNIPSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


///

app.get("/spouseCommomlawSponsership", async (request, response) => {
  try {
    let data = await spouseCommLawSponSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/spouseCommomlawSponsership", async (request, response) => {
  try {
    let data = await spouseCommLawSponSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/spouseCommomlawSponsership/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await spouseCommLawSponSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


///

app.get("/agricultureAgriFoodOccupation", async (request, response) => {
  try {
    let data = await agricultAndAgriFoodOccuSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/agricultureAgriFoodOccupation", async (request, response) => {
  try {
    let data = await agricultAndAgriFoodOccuSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/agricultureAgriFoodOccupation/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await agricultAndAgriFoodOccuSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///

app.get("/addDocMeta", async (request, response) => {
  try {
    let data = await additionalDocumentMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/addDocMeta", async (request, response) => {
  try {
    let data = await additionalDocumentMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/addDocMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await additionalDocumentMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///

app.get("/adopMeta", async (request, response) => {
  try {
    let data = await adoptionMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/adopMeta", async (request, response) => {
  try {
    let data = await adoptionMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/adopMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await adoptionMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});




///

app.get("/agricultAndAgriFoodOccuMeta", async (request, response) => {
  try {
    let data = await agricultAndAgriFoodOccuMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/agricultAndAgriFoodOccuMeta", async (request, response) => {
  try {
    let data = await agricultAndAgriFoodOccuMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/agricultAndAgriFoodOccuMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await agricultAndAgriFoodOccuMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


///

app.get("/agriFoodPilotProgMeta", async (request, response) => {
  try {
    let data = await agriFoodPilotProgMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/agriFoodPilotProgMeta", async (request, response) => {
  try {
    let data = await agriFoodPilotProgMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/agriFoodPilotProgMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await agriFoodPilotProgMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///

app.get("/bcPNPMeta", async (request, response) => {
  try {
    let data = await bcPNPMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/bcPNPMeta", async (request, response) => {
  try {
    let data = await bcPNPMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/bcPNPMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await bcPNPMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///

app.get("/bridgingOpenWorkMeta", async (request, response) => {
  try {
    let data = await bridgingOpenWorkMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/bridgingOpenWorkMeta", async (request, response) => {
  try {
    let data = await bridgingOpenWorkMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/bridgingOpenWorkMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await bridgingOpenWorkMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


///


app.get("/buisinessVisitorVisaMeta", async (request, response) => {
  try {
    let data = await buisinessVisitorVisaMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/buisinessVisitorVisaMeta", async (request, response) => {
  try {
    let data = await buisinessVisitorVisaMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/buisinessVisitorVisaMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await buisinessVisitorVisaMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


///


app.get("/canadianExperienceClassMeta", async (request, response) => {
  try {
    let data = await canadianExperienceClassMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/canadianExperienceClassMeta", async (request, response) => {
  try {
    let data = await canadianExperienceClassMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/canadianExperienceClassMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await canadianExperienceClassMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});




///


app.get("/changeCollegeProgMeta", async (request, response) => {
  try {
    let data = await changeCollegeProgMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/changeCollegeProgMeta", async (request, response) => {
  try {
    let data = await changeCollegeProgMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/changeCollegeProgMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await changeCollegeProgMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});





///


app.get("/citizenshipMeta", async (request, response) => {
  try {
    let data = await citizenshipMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/citizenshipMeta", async (request, response) => {
  try {
    let data = await citizenshipMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/citizenshipMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await citizenshipMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///


app.get("/comLawPartPermanMeta", async (request, response) => {
  try {
    let data = await comLawPartPermanMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/comLawPartPermanMeta", async (request, response) => {
  try {
    let data = await comLawPartPermanMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/comLawPartPermanMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await comLawPartPermanMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///


app.get("/comLawPartTempMeta", async (request, response) => {
  try {
    let data = await comLawPartTempMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/comLawPartTempMeta", async (request, response) => {
  try {
    let data = await comLawPartTempMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/comLawPartTempMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await comLawPartTempMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


///


app.get("/dependentChildMeta", async (request, response) => {
  try {
    let data = await dependentChildMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/dependentChildMeta", async (request, response) => {
  try {
    let data = await dependentChildMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/dependentChildMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await dependentChildMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///


app.get("/dualintentVisaMeta", async (request, response) => {
  try {
    let data = await dualintentVisaMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/dualintentVisaMeta", async (request, response) => {
  try {
    let data = await dualintentVisaMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/dualintentVisaMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await dualintentVisaMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///


app.get("/entryLevelSemiSkilledMeta", async (request, response) => {
  try {
    let data = await entryLevelSemiSkilledMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/entryLevelSemiSkilledMeta", async (request, response) => {
  try {
    let data = await entryLevelSemiSkilledMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/entryLevelSemiSkilledMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await entryLevelSemiSkilledMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///


app.get("/extensionMeta", async (request, response) => {
  try {
    let data = await extensionMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/extensionMeta", async (request, response) => {
  try {
    let data = await extensionMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/extensionMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await extensionMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///


app.get("/familyReunificationMeta", async (request, response) => {
  try {
    let data = await familyReunificationMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/familyReunificationMeta", async (request, response) => {
  try {
    let data = await familyReunificationMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/familyReunificationMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await familyReunificationMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///


app.get("/federalSkillTradesProgMeta", async (request, response) => {
  try {
    let data = await federalSkillTradesProgMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/federalSkillTradesProgMeta", async (request, response) => {
  try {
    let data = await federalSkillTradesProgMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/federalSkillTradesProgMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await federalSkillTradesProgMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});




///


app.get("/federalSkillWorkerProgMeta", async (request, response) => {
  try {
    let data = await federalSkillWorkerProgMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/federalSkillWorkerProgMeta", async (request, response) => {
  try {
    let data = await federalSkillWorkerProgMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/federalSkillWorkerProgMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await federalSkillWorkerProgMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///


app.get("/flagpolingMeta", async (request, response) => {
  try {
    let data = await flagpolingMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/flagpolingMeta", async (request, response) => {
  try {
    let data = await flagpolingMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/flagpolingMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await flagpolingMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///


app.get("/francophoneMobilityMeta", async (request, response) => {
  try {
    let data = await francophoneMobilityMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/francophoneMobilityMeta", async (request, response) => {
  try {
    let data = await francophoneMobilityMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/francophoneMobilityMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await francophoneMobilityMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///


app.get("/frenchTargetedDrawMeta", async (request, response) => {
  try {
    let data = await frenchTargetedDrawMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/frenchTargetedDrawMeta", async (request, response) => {
  try {
    let data = await frenchTargetedDrawMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/frenchTargetedDrawMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await frenchTargetedDrawMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///


app.get("/globalStreamLmiaMeta", async (request, response) => {
  try {
    let data = await globalStreamLmiaMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/globalStreamLmiaMeta", async (request, response) => {
  try {
    let data = await globalStreamLmiaMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/globalStreamLmiaMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await globalStreamLmiaMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///


app.get("/healthAuthorityStreamMeta", async (request, response) => {
  try {
    let data = await healthAuthorityStreamMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/healthAuthorityStreamMeta", async (request, response) => {
  try {
    let data = await healthAuthorityStreamMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/healthAuthorityStreamMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await healthAuthorityStreamMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});




///


app.get("/healthcareTargatedDrawMeta", async (request, response) => {
  try {
    let data = await healthcareTargatedDrawMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/healthcareTargatedDrawMeta", async (request, response) => {
  try {
    let data = await healthcareTargatedDrawMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/healthcareTargatedDrawMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await healthcareTargatedDrawMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


///


app.get("/humanitarianComMeta", async (request, response) => {
  try {
    let data = await humanitarianComMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/humanitarianComMeta", async (request, response) => {
  try {
    let data = await humanitarianComMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/humanitarianComMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await humanitarianComMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


///


app.get("/inHomeCaregiverProgramLpMeta", async (request, response) => {
  try {
    let data = await inHomeCaregiverProgramLpMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/inHomeCaregiverProgramLpMeta", async (request, response) => {
  try {
    let data = await inHomeCaregiverProgramLpMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/inHomeCaregiverProgramLpMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await inHomeCaregiverProgramLpMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///


app.get("/insideCanadaMeta", async (request, response) => {
  try {
    let data = await insideCanadaMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/insideCanadaMeta", async (request, response) => {
  try {
    let data = await insideCanadaMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/insideCanadaMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await insideCanadaMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


///


app.get("/internationalGraduateProgMeta", async (request, response) => {
  try {
    let data = await internationalGraduateProgMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/internationalGraduateProgMeta", async (request, response) => {
  try {
    let data = await internationalGraduateProgMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/internationalGraduateProgMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await internationalGraduateProgMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///


app.get("/internationalPostGraduateProgMeta", async (request, response) => {
  try {
    let data = await internationalPostGraduateProgMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/internationalPostGraduateProgMeta", async (request, response) => {
  try {
    let data = await internationalPostGraduateProgMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/internationalPostGraduateProgMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await internationalPostGraduateProgMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///


app.get("/LmiaMeta", async (request, response) => {
  try {
    let data = await LmiaMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/LmiaMeta", async (request, response) => {
  try {
    let data = await LmiaMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/LmiaMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await LmiaMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



///


app.get("/lonelyCanadianMeta", async (request, response) => {
  try {
    let data = await lonelyCanadianMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/lonelyCanadianMeta", async (request, response) => {
  try {
    let data = await lonelyCanadianMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/lonelyCanadianMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await lonelyCanadianMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


///


app.get("/nonSdsMeta", async (request, response) => {
  try {
    let data = await nonSdsMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/nonSdsMeta", async (request, response) => {
  try {
    let data = await nonSdsMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/nonSdsMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await nonSdsMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


//

app.get("/openWorkDependentChildMeta", async (request, response) => {
  try {
    let data = await openWorkDependentChildMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/openWorkDependentChildMeta", async (request, response) => {
  try {
    let data = await openWorkDependentChildMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/openWorkDependentChildMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await openWorkDependentChildMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



//

app.get("/openWorkPerMeta", async (request, response) => {
  try {
    let data = await openWorkPerMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/openWorkPerMeta", async (request, response) => {
  try {
    let data = await openWorkPerMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/openWorkPerMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await openWorkPerMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



//

app.get("/openWorkVulnerableMeta", async (request, response) => {
  try {
    let data = await openWorkVulnerableMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/openWorkVulnerableMeta", async (request, response) => {
  try {
    let data = await openWorkVulnerableMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/openWorkVulnerableMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await openWorkVulnerableMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



//

app.get("/orphanMeta", async (request, response) => {
  try {
    let data = await orphanMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/orphanMeta", async (request, response) => {
  try {
    let data = await orphanMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/orphanMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await orphanMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});




//

app.get("/outsideCanadaMeta", async (request, response) => {
  try {
    let data = await outsideCanadaMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/outsideCanadaMeta", async (request, response) => {
  try {
    let data = await outsideCanadaMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/outsideCanadaMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await outsideCanadaMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});





//

app.get("/parentsGrandParMeta", async (request, response) => {
  try {
    let data = await parentsGrandParMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/parentsGrandParMeta", async (request, response) => {
  try {
    let data = await parentsGrandParMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/parentsGrandParMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await parentsGrandParMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});




//

app.get("/pathwaysForCaregiverMeta", async (request, response) => {
  try {
    let data = await pathwaysForCaregiverMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/pathwaysForCaregiverMeta", async (request, response) => {
  try {
    let data = await pathwaysForCaregiverMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/pathwaysForCaregiverMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await pathwaysForCaregiverMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


//

app.get("/pgwpMeta", async (request, response) => {
  try {
    let data = await pgwpMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/pgwpMeta", async (request, response) => {
  try {
    let data = await pgwpMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/pgwpMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await pgwpMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



//

app.get("/pilotProgramMeta", async (request, response) => {
  try {
    let data = await pilotProgramMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/pilotProgramMeta", async (request, response) => {
  try {
    let data = await pilotProgramMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/pilotProgramMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await pilotProgramMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//

app.get("/pNPMeta", async (request, response) => {
  try {
    let data = await pNPMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/pNPMeta", async (request, response) => {
  try {
    let data = await pNPMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/pNPMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await pNPMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



//

app.get("/prioritiesProgramMeta", async (request, response) => {
  try {
    let data = await prioritiesProgramMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/prioritiesProgramMeta", async (request, response) => {
  try {
    let data = await prioritiesProgramMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/prioritiesProgramMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await prioritiesProgramMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});




//

app.get("/prPathCareLpMeta", async (request, response) => {
  try {
    let data = await prPathCareLpMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/prPathCareLpMeta", async (request, response) => {
  try {
    let data = await prPathCareLpMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/prPathCareLpMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await prPathCareLpMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//

app.get("/prRenewalMeta", async (request, response) => {
  try {
    let data = await prRenewalMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/prRenewalMeta", async (request, response) => {
  try {
    let data = await prRenewalMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/prRenewalMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await prRenewalMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



//

app.get("/reconsiderationMeta", async (request, response) => {
  try {
    let data = await reconsiderationMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/reconsiderationMeta", async (request, response) => {
  try {
    let data = await reconsiderationMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/reconsiderationMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await reconsiderationMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//

app.get("/replyPFLMeta", async (request, response) => {
  try {
    let data = await replyPFLMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/replyPFLMeta", async (request, response) => {
  try {
    let data = await replyPFLMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/replyPFLMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await replyPFLMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


//

app.get("/restorationStatusDraftMeta", async (request, response) => {
  try {
    let data = await restorationStatusDraftMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/restorationStatusDraftMeta", async (request, response) => {
  try {
    let data = await restorationStatusDraftMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/restorationStatusDraftMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await restorationStatusDraftMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


//

app.get("/rNIPMeta", async (request, response) => {
  try {
    let data = await rNIPMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/rNIPMeta", async (request, response) => {
  try {
    let data = await rNIPMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/rNIPMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await rNIPMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


//

app.get("/sdsMeta", async (request, response) => {
  try {
    let data = await sdsMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/sdsMeta", async (request, response) => {
  try {
    let data = await sdsMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/sdsMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await sdsMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//

app.get("/skilledWorkerStreamMeta", async (request, response) => {
  try {
    let data = await skilledWorkerStreamMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/skilledWorkerStreamMeta", async (request, response) => {
  try {
    let data = await skilledWorkerStreamMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/skilledWorkerStreamMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await skilledWorkerStreamMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});




//

app.get("/spousalOpenWokPerMeta", async (request, response) => {
  try {
    let data = await spousalOpenWokPerMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/spousalOpenWokPerMeta", async (request, response) => {
  try {
    let data = await spousalOpenWokPerMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/spousalOpenWokPerMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await spousalOpenWokPerMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


//

app.get("/spouseCommLawSponMeta", async (request, response) => {
  try {
    let data = await spouseCommLawSponMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/spouseCommLawSponMeta", async (request, response) => {
  try {
    let data = await spouseCommLawSponMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/spouseCommLawSponMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await spouseCommLawSponMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//

app.get("/stemTargetedDrawMeta", async (request, response) => {
  try {
    let data = await stemTargetedDrawMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/stemTargetedDrawMeta", async (request, response) => {
  try {
    let data = await stemTargetedDrawMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/stemTargetedDrawMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await stemTargetedDrawMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//

app.get("/studentVisaMeta", async (request, response) => {
  try {
    let data = await studentVisaMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/studentVisaMeta", async (request, response) => {
  try {
    let data = await studentVisaMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/studentVisaMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await studentVisaMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//

app.get("/studyPermitMinorsMeta", async (request, response) => {
  try {
    let data = await studyPermitMinorsMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/studyPermitMinorsMeta", async (request, response) => {
  try {
    let data = await studyPermitMinorsMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/studyPermitMinorsMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await studyPermitMinorsMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

///

app.get("/superVisaMeta", async (request, response) => {
  try {
    let data = await superVisaMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/superVisaMeta", async (request, response) => {
  try {
    let data = await superVisaMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/superVisaMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await superVisaMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



//

app.get("/temporaryResidencyMeta", async (request, response) => {
  try {
    let data = await temporaryResidencyMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/temporaryResidencyMeta", async (request, response) => {
  try {
    let data = await temporaryResidencyMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/temporaryResidencyMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await temporaryResidencyMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//

app.get("/temporaryResidentPermMeta", async (request, response) => {
  try {
    let data = await temporaryResidentPermMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/temporaryResidentPermMeta", async (request, response) => {
  try {
    let data = await temporaryResidentPermMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/temporaryResidentPermMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await temporaryResidentPermMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


//

app.get("/tradeOccupationTargDrawMeta", async (request, response) => {
  try {
    let data = await tradeOccupationTargDrawMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/tradeOccupationTargDrawMeta", async (request, response) => {
  try {
    let data = await tradeOccupationTargDrawMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/tradeOccupationTargDrawMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await tradeOccupationTargDrawMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


//

app.get("/transportOccuptionTargDrawMeta", async (request, response) => {
  try {
    let data = await transportOccuptionTargDrawMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/transportOccuptionTargDrawMeta", async (request, response) => {
  try {
    let data = await transportOccuptionTargDrawMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/transportOccuptionTargDrawMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await transportOccuptionTargDrawMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});




//

app.get("/visitorToStudentMeta", async (request, response) => {
  try {
    let data = await visitorToStudentMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/visitorToStudentMeta", async (request, response) => {
  try {
    let data = await visitorToStudentMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/visitorToStudentMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await visitorToStudentMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


//

app.get("/visitorVisaMeta", async (request, response) => {
  try {
    let data = await visitorVisaMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/visitorVisaMeta", async (request, response) => {
  try {
    let data = await visitorVisaMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/visitorVisaMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await visitorVisaMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



//

app.get("/workPermitMeta", async (request, response) => {
  try {
    let data = await workPermitMetaSection.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.post("/workPermitMeta", async (request, response) => {
  try {
    let data = await workPermitMetaSection.create(request.body);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
});

app.put("/workPermitMeta/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedData = await workPermitMetaSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});




mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_CLI)
  .then(async () => {
    app.listen(port, () => {
      console.log(`App running on ${port}`);
    });

    // try {
    //   const doc = await workPermitMetaSection.create({});
    //   console.log("Document created with default values: workPermitMetaSection");
    // } catch (err) {
    //   console.error("Error creating document:", err);
    // }

    console.log("Mongodb Connected");
  })
  .catch((error) => {
    console.log(error);
  });
