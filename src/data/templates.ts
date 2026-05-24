export interface AgentTemplate {
  id: string;
  title: string;
  domain: string;
  description: string;
  tags: string[];
  capabilities: string[];
  sampleInput: string;
  sampleOutput: string;
}

export const templates: AgentTemplate[] = [
  {
    id: "tmpl-network-watch",
    title: "Network Health Watcher",
    domain: "Network Ops",
    description: "Continuously monitors RAN/Core KPIs and surfaces anomalies before SLA breach.",
    tags: ["Monitoring", "Anomaly Detection"],
    capabilities: ["KPI ingestion", "Anomaly scoring", "Auto-ticketing", "Slack alerts"],
    sampleInput: "Show me anomalies in the last 30 minutes for cluster APAC-3.",
    sampleOutput: "Detected 2 anomalies: latency spike (+38%) on node N-114, packet loss (1.4%) on N-217. Tickets opened.",
  },
  {
    id: "tmpl-churn-buster",
    title: "Churn Buster",
    domain: "Customer Experience",
    description: "Predicts at-risk subscribers and drafts personalised retention offers.",
    tags: ["Retention", "Prediction"],
    capabilities: ["Churn scoring", "Offer generation", "A/B routing", "CRM sync"],
    sampleInput: "Top 50 at-risk postpaid users this week.",
    sampleOutput: "Returned 50 users with churn score >0.7. 32 matched to offer cohort A, 18 to cohort B.",
  },
  {
    id: "tmpl-spectrum-advisor",
    title: "Spectrum Strategy Advisor",
    domain: "Strategic Planning",
    description: "Models spectrum auction scenarios against market and regulatory signals.",
    tags: ["Planning", "Simulation"],
    capabilities: ["Scenario modelling", "Regulatory diff", "ROI projection"],
    sampleInput: "Compare 700MHz vs 3.5GHz bid strategies for Q2.",
    sampleOutput: "3.5GHz yields 18% higher 5-year ROI but 2.3x capex. Detailed scenarios attached.",
  },
  {
    id: "tmpl-revenue-leak",
    title: "Revenue Leak Detector",
    domain: "Revenue Assurance",
    description: "Cross-checks billing, mediation and CDR feeds to surface leakage.",
    tags: ["Billing", "Audit"],
    capabilities: ["CDR reconciliation", "Tariff diff", "Leak scoring"],
    sampleInput: "Run leakage audit for postpaid roaming, last 7 days.",
    sampleOutput: "Detected $42K mismatch — root cause: tariff plan PR-204 mediation drift.",
  },
  {
    id: "tmpl-field-dispatch",
    title: "Smart Field Dispatcher",
    domain: "Network Ops",
    description: "Routes field engineers using SLA, skill, and traffic-aware optimisation.",
    tags: ["Operations", "Routing"],
    capabilities: ["Geo routing", "Skill match", "ETA prediction"],
    sampleInput: "Dispatch for 12 open tier-2 tickets in Mumbai region.",
    sampleOutput: "Assigned to 4 engineers, avg ETA 47min, predicted SLA compliance 96%.",
  },
  {
    id: "tmpl-ott-curator",
    title: "OTT Content Curator",
    domain: "Customer Experience",
    description: "Generates personalised content rails for streaming users using watch graphs.",
    tags: ["Personalisation", "Media"],
    capabilities: ["Watch graph", "Cold start", "Cohort blending"],
    sampleInput: "Generate homepage rails for cohort 18-24, weekend evening.",
    sampleOutput: "Drafted 6 rails, top: 'Late Night Comedy', diversity score 0.81.",
  },
];
