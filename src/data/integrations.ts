export interface Integration {
  id: string;
  name: string;
  provider: string;
  bgColor: string;
  textColor: string;
  letter: string;
  hoverBorderClass: string;
}

export const integrations: Integration[] = [
  { id: "google-ads",   name: "Google Ads",       provider: "Google LLC",       bgColor: "bg-blue-100",   textColor: "text-blue-700",   letter: "GA",  hoverBorderClass: "hover:border-blue-300" },
  { id: "gmail",        name: "Gmail",             provider: "Google LLC",       bgColor: "bg-red-100",    textColor: "text-red-600",    letter: "M",   hoverBorderClass: "hover:border-red-300" },
  { id: "servicenow",   name: "ServiceNow",        provider: "ServiceNow Inc.",  bgColor: "bg-green-100",  textColor: "text-green-700",  letter: "SN",  hoverBorderClass: "hover:border-green-300" },
  { id: "twitter",      name: "X (Twitter)",       provider: "X Corp.",          bgColor: "bg-slate-100",  textColor: "text-slate-700",  letter: "X",   hoverBorderClass: "hover:border-slate-400" },
  { id: "freshdesk",    name: "Freshdesk",         provider: "Freshworks Inc.",  bgColor: "bg-teal-100",   textColor: "text-teal-700",   letter: "FD",  hoverBorderClass: "hover:border-teal-300" },
  { id: "hubspot",      name: "HubSpot",           provider: "HubSpot",          bgColor: "bg-orange-100", textColor: "text-orange-600", letter: "H",   hoverBorderClass: "hover:border-orange-300" },
  { id: "salesforce",   name: "Salesforce",        provider: "Salesforce Inc.",  bgColor: "bg-sky-100",    textColor: "text-sky-600",    letter: "SF",  hoverBorderClass: "hover:border-sky-300" },
  { id: "outlook",      name: "Outlook",           provider: "Microsoft Corp.",  bgColor: "bg-blue-100",   textColor: "text-blue-700",   letter: "OL",  hoverBorderClass: "hover:border-blue-300" },
  { id: "zendesk",      name: "Zendesk",           provider: "Zendesk Inc.",     bgColor: "bg-green-100",  textColor: "text-green-600",  letter: "ZD",  hoverBorderClass: "hover:border-green-300" },
  { id: "surveymonkey", name: "SurveyMonkey",      provider: "Momentive",        bgColor: "bg-yellow-100", textColor: "text-yellow-700", letter: "SM",  hoverBorderClass: "hover:border-yellow-300" },
  { id: "acuity",       name: "Acuity Scheduling", provider: "Squarespace Inc.", bgColor: "bg-purple-100", textColor: "text-purple-700", letter: "AC",  hoverBorderClass: "hover:border-purple-300" },
  { id: "asana",        name: "Asana",             provider: "Asana Inc.",       bgColor: "bg-pink-100",   textColor: "text-pink-600",   letter: "AS",  hoverBorderClass: "hover:border-pink-300" },
];
