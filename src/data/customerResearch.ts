export const customerFeedback = [
  { id: 1, customer: "Jaguar Land Rover", role: "Data Engineer", settings: "Complete", codeChanges: "Complete", terms: "Complete", cardSort: "--", studies: 6 },
  { id: 2, customer: "Verizon Connect", role: "Data Engineer", settings: "--", codeChanges: "--", terms: "DNP", cardSort: "Complete", studies: 4 },
  { id: 3, customer: "Monday", role: "Data Engineer", settings: "Complete", codeChanges: "Complete", terms: "Complete", cardSort: "Complete", studies: 8 },
  { id: 4, customer: "Skyscanner", role: "Data Engineer", settings: "Complete", codeChanges: "Complete", terms: "--", cardSort: "Complete", studies: 5 },
  { id: 5, customer: "Richemont", role: "Data Analyst", settings: "--", codeChanges: "Complete", terms: "DNP", cardSort: "DNP", studies: 3 },
  { id: 6, customer: "Virgin", role: "Data Engineer", settings: "--", codeChanges: "Complete", terms: "--", cardSort: "--", studies: 4 },
  { id: 7, customer: "Auto Trader", role: "Data Engineer", settings: "Complete", codeChanges: "Complete", terms: "Complete", cardSort: "Complete", studies: 7 },
  { id: 8, customer: "Richemont", role: "Data Scientist", settings: "Complete", codeChanges: "DNP", terms: "--", cardSort: "--", studies: 5 },
  { id: 9, customer: "Pagaya", role: "Team Lead", settings: "DNP", codeChanges: "--", terms: "Complete", cardSort: "Complete", studies: 6 },
  { id: 10, customer: "Roche", role: "Software Engineer", settings: "Complete", codeChanges: "Complete", terms: "Complete", cardSort: "Complete", studies: 8 },
  { id: 11, customer: "Skyscanner", role: "Data Engineer", settings: "Complete", codeChanges: "DNP", terms: "Complete", cardSort: "Complete", studies: 5 },
  { id: 12, customer: "Old Mutual", role: "Software Engineer", settings: "--", codeChanges: "Complete", terms: "Complete", cardSort: "DNP", studies: 4 },
  { id: 13, customer: "Kolibri Games", role: "Data Analyst", settings: "Complete", codeChanges: "Complete", terms: "--", cardSort: "--", studies: 6 },
  { id: 14, customer: "Jaguar Land Rover", role: "Software Engineer", settings: "Complete", codeChanges: "--", terms: "Complete", cardSort: "Complete", studies: 7 },
  { id: 15, customer: "Richemont", role: "Data Engineer", settings: "DNP", codeChanges: "Complete", terms: "DNP", cardSort: "Complete", studies: 3 }
];

// Per-participant study counts above are illustrative placeholders pending the real research records.
export const researchStudies = ["settings", "codeChanges", "terms", "cardSort"] as const;

// Full research totals confirmed by Matthew; the matrix contains only a subset.
export const researchStats = {
  participants: 25,
  companies: 18,
  studies: 8,
};

// One participant per company, spanning every recorded role and study.
const representativeIds = new Set([1, 2, 3, 4, 7, 8, 9, 10, 12, 13]);
export const representativeFeedback = customerFeedback.filter((participant) => representativeIds.has(participant.id));
