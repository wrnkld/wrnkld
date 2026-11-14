export const customerFeedback = [
  { id: 1, customer: "Jaguar Land Rover", role: "Data Engineer", settings: "Complete", codeChanges: "Complete", terms: "Complete", cardSort: "--" },
  { id: 2, customer: "Verizon Connect", role: "Data Engineer", settings: "--", codeChanges: "--", terms: "DNP", cardSort: "Complete" },
  { id: 3, customer: "Monday", role: "Data Engineer", settings: "Complete", codeChanges: "Complete", terms: "Complete", cardSort: "Complete" },
  { id: 4, customer: "Skyscanner", role: "Data Engineer", settings: "Complete", codeChanges: "Complete", terms: "--", cardSort: "Complete" },
  { id: 5, customer: "Richemont", role: "Data Analyst", settings: "--", codeChanges: "Complete", terms: "DNP", cardSort: "DNP" },
  { id: 6, customer: "Virgin", role: "Data Engineer", settings: "--", codeChanges: "Complete", terms: "--", cardSort: "--" },
  { id: 7, customer: "Auto Trader", role: "Data Engineer", settings: "Complete", codeChanges: "Complete", terms: "Complete", cardSort: "Complete" },
  { id: 8, customer: "Richemont", role: "Data Scientist", settings: "Complete", codeChanges: "DNP", terms: "--", cardSort: "--" },
  { id: 9, customer: "Pagaya", role: "Team Lead", settings: "DNP", codeChanges: "--", terms: "Complete", cardSort: "Complete" },
  { id: 10, customer: "Roche", role: "Software Engineer", settings: "Complete", codeChanges: "Complete", terms: "Complete", cardSort: "Complete" },
  { id: 11, customer: "Skyscanner", role: "Data Engineer", settings: "Complete", codeChanges: "DNP", terms: "Complete", cardSort: "Complete" },
  { id: 12, customer: "Old Mutual", role: "Software Engineer", settings: "--", codeChanges: "Complete", terms: "Complete", cardSort: "DNP" },
  { id: 13, customer: "Kolibri Games", role: "Data Analyst", settings: "Complete", codeChanges: "Complete", terms: "--", cardSort: "--" },
  { id: 14, customer: "Jaguar Land Rover", role: "Software Engineer", settings: "Complete", codeChanges: "--", terms: "Complete", cardSort: "Complete" },
  { id: 15, customer: "Richemont", role: "Data Engineer", settings: "DNP", codeChanges: "Complete", terms: "DNP", cardSort: "Complete" }
];

export const researchStudies = ["settings", "codeChanges", "terms", "cardSort"] as const;

export const researchStats = {
  participants: customerFeedback.length,
  companies: new Set(customerFeedback.map((participant) => participant.customer)).size,
  studies: researchStudies.filter((study) => customerFeedback.some((participant) => participant[study] === "Complete")).length,
};

// One participant per company, spanning every recorded role and study.
const representativeIds = new Set([1, 2, 3, 4, 5, 6, 7, 9, 10, 12]);
export const representativeFeedback = customerFeedback.filter((participant) => representativeIds.has(participant.id));
