export type NodeType = "ontology" | "metric" | "decision";

export interface OntologyNode {
  id: string;
  label: string;
  category: string;
  type: NodeType;
  isCore?: boolean;
  businessIntent: string;
  defaultGrain?: string;
  componentNodes?: { label: string; relationship: string; category: string }[];
  dimensions?: string[];
  connections?: number;
  // runtime layout fields added by force graph
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number;
  fy?: number;
}

export interface OntologyEdge {
  source: string;
  target: string;
  label: string;
}

export interface OntologyCategory {
  id: string;
  label: string;
  color: string;
}

export const CATEGORIES: OntologyCategory[] = [
  { id: "infrastructure", label: "Infrastructure", color: "#1a3a8f" },
  { id: "ai-ops", label: "AI Ops", color: "#7c3aed" },
  { id: "telecom", label: "Telecom", color: "#0f766e" },
  { id: "media", label: "Media", color: "#c2410c" },
  { id: "cloud", label: "Cloud", color: "#0369a1" },
  { id: "enterprise-it", label: "Enterprise IT", color: "#475569" },
  { id: "metrics", label: "Metrics", color: "#0d9488" },
  { id: "decisions", label: "Decisions", color: "#dc2626" },
];

// Fixed spatial layout — organised left→right by domain, top→bottom by layer.
// Coordinates are in graph-space (centred at 0,0).  Nodes are pinned via fx/fy.
export const FIXED_POSITIONS: Record<string, { x: number; y: number }> = {
  // ── Infrastructure (far left) ──────────────────────────────────────────────
  "data-center":            { x: -490,  y:    0 },
  "server-rack":            { x: -560,  y:  -90 },
  "network-switch":         { x: -565,  y:   90 },
  "storage-array":          { x: -430,  y: -180 },
  "cooling-system":         { x: -530,  y:  180 },
  "power-grid":             { x: -400,  y:  210 },
  "fiber-link":             { x: -340,  y: -110 },

  // ── AI Ops (upper-center-left) ────────────────────────────────────────────
  "gpu-cluster":            { x: -180,  y: -240 },
  "ml-pipeline":            { x: -290,  y: -175 },
  "training-dataset":       { x: -300,  y: -310 },
  "feature-store":          { x: -380,  y: -250 },
  "ml-model":               { x:  -90,  y: -340 },
  "model-registry":         { x: -160,  y: -420 },
  "inference-engine":       { x:  -50,  y: -230 },

  // ── Telecom (upper right) ─────────────────────────────────────────────────
  "base-station":           { x:  210,  y: -200 },
  "spectrum-band":          { x:  110,  y: -340 },
  "core-network":           { x:  320,  y: -340 },
  "network-slice":          { x:  320,  y: -240 },
  "ran-node":               { x:  230,  y:  -80 },
  "tower-site":             { x:  110,  y: -150 },
  "subscriber":             { x:  400,  y: -140 },

  // ── Cloud (centre) ────────────────────────────────────────────────────────
  "cloud-region":           { x:   80,  y:   30 },
  "availability-zone":      { x:  160,  y:  140 },
  "cdn-node":               { x:  230,  y:   20 },
  "instance-pool":          { x:  170,  y:  240 },
  "api-gateway":            { x:   30,  y:  140 },
  "service-mesh":           { x:  -30,  y:  230 },

  // ── Enterprise IT (centre-left) ──────────────────────────────────────────
  "application-portfolio":  { x: -120,  y:   50 },
  "identity-provider":      { x: -160,  y:  170 },
  "sla-contract":           { x:  -50,  y:  -60 },
  "monitoring-agent":       { x: -230,  y:  110 },
  "incident":               { x: -230,  y:  220 },

  // ── Media (lower right) ──────────────────────────────────────────────────
  "content-asset":          { x:  370,  y:  150 },
  "streaming-platform":     { x:  460,  y:   70 },
  "ad-inventory":           { x:  460,  y:  220 },
  "rights-license":         { x:  400,  y:  310 },
  "content-distribution":   { x:  290,  y:  280 },
  "audience-segment":       { x:  510,  y:  320 },

  // ── Metrics (distributed as rings) ───────────────────────────────────────
  "gpu-utilization":        { x:  -50,  y: -145 },
  "network-latency":        { x:  140,  y: -120 },
  "arpu":                   { x:  440,  y:  -55 },
  "churn-rate":             { x:  490,  y:   50 },
  "uptime":                 { x: -295,  y:   60 },
  "ad-fill-rate":           { x:  430,  y:  370 },
  "model-accuracy":         { x:  -80,  y: -430 },
  "energy-pue":             { x: -430,  y:  120 },

  // ── Decisions (at periphery) ──────────────────────────────────────────────
  "capacity-expansion-decision":      { x: -580,  y: -280 },
  "spectrum-allocation-decision":     { x:   50,  y: -490 },
  "model-deployment-decision":        { x:  100,  y: -490 },
  "content-licensing-decision":       { x:  560,  y:  230 },
  "infrastructure-scaling-decision":  { x:  140,  y:  390 },
};

export const TMT_NODES: OntologyNode[] = [
  // ── Infrastructure ──────────────────────────────────────────────────────────
  {
    id: "data-center",
    label: "Data Center",
    category: "infrastructure",
    type: "ontology",
    isCore: true,
    businessIntent:
      "Core physical facility housing compute, network, and storage infrastructure. Central node in the TMT infrastructure ontology graph. Connected to 9 other nodes.",
    defaultGrain: "facility × CalendarDate",
    componentNodes: [
      { label: "Server Rack", relationship: "hosts", category: "infrastructure" },
      { label: "GPU Cluster", relationship: "hosts", category: "ai-ops" },
      { label: "Storage Array", relationship: "hosts", category: "infrastructure" },
      { label: "Fiber Link", relationship: "connected_via", category: "infrastructure" },
      { label: "Cooling System", relationship: "regulated_by", category: "infrastructure" },
    ],
    dimensions: ["Region", "Tier Classification", "Operator"],
  },
  {
    id: "server-rack",
    label: "Server Rack",
    category: "infrastructure",
    type: "ontology",
    businessIntent:
      "Physical unit containing servers and network equipment within a data center. Tracks capacity, utilization, and physical location.",
    defaultGrain: "rack × DataCenter",
    componentNodes: [
      { label: "Data Center", relationship: "located_in", category: "infrastructure" },
      { label: "Network Switch", relationship: "connected_to", category: "infrastructure" },
    ],
    dimensions: ["Data Center", "Row", "Unit Height"],
  },
  {
    id: "network-switch",
    label: "Network Switch",
    category: "infrastructure",
    type: "ontology",
    businessIntent:
      "Layer-2/3 device routing packets within and between server racks. Critical path component for latency SLAs.",
    defaultGrain: "device × Rack",
    componentNodes: [
      { label: "Server Rack", relationship: "installed_in", category: "infrastructure" },
      { label: "Fiber Link", relationship: "terminates_at", category: "infrastructure" },
    ],
    dimensions: ["Rack", "Port Count", "Speed"],
  },
  {
    id: "storage-array",
    label: "Storage Array",
    category: "infrastructure",
    type: "ontology",
    businessIntent:
      "High-density persistent storage backing ML training datasets, media archives, and enterprise data lakes.",
    defaultGrain: "array × DataCenter",
    componentNodes: [
      { label: "Data Center", relationship: "hosted_in", category: "infrastructure" },
      { label: "Training Dataset", relationship: "stores", category: "ai-ops" },
    ],
    dimensions: ["Data Center", "Storage Type", "Capacity Tier"],
  },
  {
    id: "cooling-system",
    label: "Cooling System",
    category: "infrastructure",
    type: "ontology",
    businessIntent:
      "Thermal management infrastructure. PUE impact node — directly influences energy efficiency metrics.",
    defaultGrain: "unit × DataCenter",
    componentNodes: [
      { label: "Data Center", relationship: "cools", category: "infrastructure" },
      { label: "Energy PUE", relationship: "drives", category: "metrics" },
    ],
    dimensions: ["Data Center", "Cooling Type", "Capacity (kW)"],
  },
  {
    id: "power-grid",
    label: "Power Grid",
    category: "infrastructure",
    type: "ontology",
    businessIntent:
      "Power supply infrastructure feeding data center facilities. Affects uptime SLAs and sustainability reporting.",
    defaultGrain: "feed × DataCenter",
    componentNodes: [
      { label: "Data Center", relationship: "powers", category: "infrastructure" },
      { label: "Uptime %", relationship: "impacts", category: "metrics" },
    ],
    dimensions: ["Data Center", "Redundancy Level", "Energy Source"],
  },
  {
    id: "fiber-link",
    label: "Fiber Link",
    category: "infrastructure",
    type: "ontology",
    businessIntent:
      "Physical fiber optic connectivity between data centers, base stations, and cloud POPs. Backbone of latency SLAs.",
    defaultGrain: "link × Route",
    componentNodes: [
      { label: "Data Center", relationship: "originates_from", category: "infrastructure" },
      { label: "Network Latency", relationship: "measured_by", category: "metrics" },
    ],
    dimensions: ["Route", "Capacity (Gbps)", "Operator"],
  },

  // ── AI Ops ───────────────────────────────────────────────────────────────────
  {
    id: "gpu-cluster",
    label: "GPU Cluster",
    category: "ai-ops",
    type: "ontology",
    isCore: true,
    businessIntent:
      "Pooled GPU compute fabric for training and inference workloads. Core resource in AI operations ontology. Connected to 8 other nodes.",
    defaultGrain: "cluster × DataCenter",
    componentNodes: [
      { label: "Data Center", relationship: "hosted_in", category: "infrastructure" },
      { label: "ML Pipeline", relationship: "runs", category: "ai-ops" },
      { label: "Inference Engine", relationship: "runs", category: "ai-ops" },
      { label: "GPU Utilization", relationship: "measured_by", category: "metrics" },
      { label: "Capacity Expansion Decision", relationship: "evaluated_by", category: "decisions" },
    ],
    dimensions: ["Data Center", "GPU Architecture", "Instance Type"],
  },
  {
    id: "ml-model",
    label: "ML Model",
    category: "ai-ops",
    type: "ontology",
    businessIntent:
      "Versioned machine learning artifact trained on enterprise datasets and deployed to inference infrastructure.",
    defaultGrain: "model × Version",
    componentNodes: [
      { label: "Model Registry", relationship: "registered_in", category: "ai-ops" },
      { label: "Inference Engine", relationship: "deployed_on", category: "ai-ops" },
      { label: "Model Accuracy", relationship: "measured_by", category: "metrics" },
      { label: "Model Deployment Decision", relationship: "triggered_by", category: "decisions" },
    ],
    dimensions: ["Version", "Framework", "Task Type"],
  },
  {
    id: "training-dataset",
    label: "Training Dataset",
    category: "ai-ops",
    type: "ontology",
    businessIntent:
      "Curated labeled data corpus consumed by ML pipelines. Governed by data lineage and compliance policies.",
    defaultGrain: "dataset × Version",
    componentNodes: [
      { label: "ML Pipeline", relationship: "consumed_by", category: "ai-ops" },
      { label: "Feature Store", relationship: "sourced_from", category: "ai-ops" },
      { label: "Storage Array", relationship: "stored_in", category: "infrastructure" },
    ],
    dimensions: ["Domain", "Label Type", "Data Vintage"],
  },
  {
    id: "inference-engine",
    label: "Inference Engine",
    category: "ai-ops",
    type: "ontology",
    businessIntent:
      "Runtime serving layer executing ML model predictions at scale. Latency and throughput SLA node.",
    defaultGrain: "engine × GPUCluster",
    componentNodes: [
      { label: "GPU Cluster", relationship: "runs_on", category: "ai-ops" },
      { label: "ML Model", relationship: "serves", category: "ai-ops" },
      { label: "Network Latency", relationship: "measured_by", category: "metrics" },
    ],
    dimensions: ["GPU Cluster", "Batch Size", "Quantization"],
  },
  {
    id: "model-registry",
    label: "Model Registry",
    category: "ai-ops",
    type: "ontology",
    businessIntent:
      "Central catalog tracking model versions, lineage, evaluation metrics, and deployment history.",
    defaultGrain: "registry × Tenant",
    componentNodes: [
      { label: "ML Model", relationship: "catalogs", category: "ai-ops" },
      { label: "ML Pipeline", relationship: "publishes_to", category: "ai-ops" },
    ],
    dimensions: ["Tenant", "Framework", "Stage"],
  },
  {
    id: "feature-store",
    label: "Feature Store",
    category: "ai-ops",
    type: "ontology",
    businessIntent:
      "Shared repository of pre-computed ML features ensuring consistency between training and serving.",
    defaultGrain: "feature × CalendarDate",
    componentNodes: [
      { label: "Training Dataset", relationship: "populates", category: "ai-ops" },
      { label: "ML Pipeline", relationship: "used_by", category: "ai-ops" },
    ],
    dimensions: ["Entity Type", "Feature Group", "Freshness SLA"],
  },
  {
    id: "ml-pipeline",
    label: "ML Pipeline",
    category: "ai-ops",
    type: "ontology",
    businessIntent:
      "Orchestrated workflow covering data ingestion, feature engineering, model training, evaluation, and registration.",
    defaultGrain: "pipeline × Run",
    componentNodes: [
      { label: "GPU Cluster", relationship: "executes_on", category: "ai-ops" },
      { label: "Training Dataset", relationship: "ingests", category: "ai-ops" },
      { label: "Feature Store", relationship: "reads_from", category: "ai-ops" },
      { label: "Model Registry", relationship: "publishes_to", category: "ai-ops" },
    ],
    dimensions: ["Run ID", "Trigger Type", "Duration"],
  },

  // ── Telecom ──────────────────────────────────────────────────────────────────
  {
    id: "base-station",
    label: "Base Station",
    category: "telecom",
    type: "ontology",
    isCore: true,
    businessIntent:
      "Radio access node providing wireless connectivity to subscribers. Core Telecom entity connected to 7 other nodes.",
    defaultGrain: "site × CalendarDate",
    componentNodes: [
      { label: "Spectrum Band", relationship: "uses", category: "telecom" },
      { label: "RAN Node", relationship: "contains", category: "telecom" },
      { label: "Network Slice", relationship: "hosts", category: "telecom" },
      { label: "Tower Site", relationship: "located_at", category: "telecom" },
      { label: "Fiber Link", relationship: "backhaul_via", category: "infrastructure" },
    ],
    dimensions: ["Region", "Technology (4G/5G)", "Operator"],
  },
  {
    id: "spectrum-band",
    label: "Spectrum Band",
    category: "telecom",
    type: "ontology",
    businessIntent:
      "Licensed radio frequency resource allocated to an operator. Governed by regulatory spectrum allocation decisions.",
    defaultGrain: "band × Region",
    componentNodes: [
      { label: "Base Station", relationship: "allocated_to", category: "telecom" },
      { label: "Spectrum Allocation Decision", relationship: "governed_by", category: "decisions" },
    ],
    dimensions: ["Frequency (MHz)", "Region", "License Holder"],
  },
  {
    id: "network-slice",
    label: "Network Slice",
    category: "telecom",
    type: "ontology",
    businessIntent:
      "Virtualized end-to-end network partition with dedicated QoS guarantees serving specific service types.",
    defaultGrain: "slice × BaseStation",
    componentNodes: [
      { label: "Base Station", relationship: "hosted_on", category: "telecom" },
      { label: "Core Network", relationship: "connected_to", category: "telecom" },
      { label: "Subscriber", relationship: "serves", category: "telecom" },
    ],
    dimensions: ["Service Type", "QoS Class", "Tenant"],
  },
  {
    id: "subscriber",
    label: "Subscriber",
    category: "telecom",
    type: "ontology",
    businessIntent:
      "End consumer of telecom services. Revenue and churn entity — directly drives ARPU and Churn Rate metrics.",
    defaultGrain: "subscriber × CalendarMonth",
    componentNodes: [
      { label: "Network Slice", relationship: "connected_via", category: "telecom" },
      { label: "Core Network", relationship: "tracked_by", category: "telecom" },
      { label: "ARPU", relationship: "measured_by", category: "metrics" },
      { label: "Churn Rate", relationship: "measured_by", category: "metrics" },
    ],
    dimensions: ["Segment", "Plan Type", "Region"],
  },
  {
    id: "tower-site",
    label: "Tower Site",
    category: "telecom",
    type: "ontology",
    businessIntent:
      "Physical site hosting base station antenna infrastructure. Asset management node for tower operators.",
    defaultGrain: "site × Operator",
    componentNodes: [
      { label: "Base Station", relationship: "hosts", category: "telecom" },
    ],
    dimensions: ["Region", "Tower Owner", "Technology"],
  },
  {
    id: "core-network",
    label: "Core Network",
    category: "telecom",
    type: "ontology",
    businessIntent:
      "Packet core and session management infrastructure routing subscriber traffic between RAN and internet.",
    defaultGrain: "core × Region",
    componentNodes: [
      { label: "Network Slice", relationship: "terminates", category: "telecom" },
      { label: "Subscriber", relationship: "authenticates", category: "telecom" },
      { label: "Cloud Region", relationship: "hosted_in", category: "cloud" },
    ],
    dimensions: ["Region", "Vendor", "Technology Generation"],
  },
  {
    id: "ran-node",
    label: "RAN Node",
    category: "telecom",
    type: "ontology",
    businessIntent:
      "Disaggregated radio access unit (O-RAN CU/DU) processing baseband signals for connected subscribers.",
    defaultGrain: "node × BaseStation",
    componentNodes: [
      { label: "Base Station", relationship: "part_of", category: "telecom" },
      { label: "Network Latency", relationship: "measured_by", category: "metrics" },
    ],
    dimensions: ["Base Station", "Vendor", "Frequency Band"],
  },

  // ── Media ────────────────────────────────────────────────────────────────────
  {
    id: "content-asset",
    label: "Content Asset",
    category: "media",
    type: "ontology",
    isCore: true,
    businessIntent:
      "Atomic media unit (video, audio, article) with associated rights, metadata, and monetisation strategy. Core Media entity.",
    defaultGrain: "asset × CalendarDate",
    componentNodes: [
      { label: "Streaming Platform", relationship: "distributed_via", category: "media" },
      { label: "Content Distribution", relationship: "distributed_via", category: "media" },
      { label: "Ad Inventory", relationship: "monetised_by", category: "media" },
      { label: "Rights License", relationship: "governed_by", category: "media" },
      { label: "Audience Segment", relationship: "targeted_at", category: "media" },
    ],
    dimensions: ["Genre", "Language", "Format"],
  },
  {
    id: "streaming-platform",
    label: "Streaming Platform",
    category: "media",
    type: "ontology",
    businessIntent:
      "Delivery platform for on-demand and live content. Tracks concurrent users, buffer ratio, and ad pod fill.",
    defaultGrain: "platform × CalendarDate",
    componentNodes: [
      { label: "Content Asset", relationship: "hosts", category: "media" },
      { label: "CDN Node", relationship: "delivered_via", category: "cloud" },
      { label: "Audience Segment", relationship: "segments_by", category: "media" },
    ],
    dimensions: ["Platform", "Region", "Device Type"],
  },
  {
    id: "ad-inventory",
    label: "Ad Inventory",
    category: "media",
    type: "ontology",
    businessIntent:
      "Programmatic and direct ad slots within streaming and broadcast content. Revenue generation node.",
    defaultGrain: "slot × ContentAsset",
    componentNodes: [
      { label: "Content Asset", relationship: "associated_with", category: "media" },
      { label: "Audience Segment", relationship: "targets", category: "media" },
      { label: "Ad Fill Rate", relationship: "measured_by", category: "metrics" },
    ],
    dimensions: ["Format", "Placement", "Buyer Type"],
  },
  {
    id: "rights-license",
    label: "Rights License",
    category: "media",
    type: "ontology",
    businessIntent:
      "Legal instrument governing territorial and temporal usage rights for content assets.",
    defaultGrain: "license × ContentAsset",
    componentNodes: [
      { label: "Content Asset", relationship: "governs", category: "media" },
      { label: "Content Licensing Decision", relationship: "governed_by", category: "decisions" },
    ],
    dimensions: ["Territory", "License Window", "Rights Holder"],
  },
  {
    id: "content-distribution",
    label: "Content Distribution",
    category: "media",
    type: "ontology",
    businessIntent:
      "Multi-channel distribution pipeline delivering content to streaming platforms, broadcast, and CDN edges.",
    defaultGrain: "distribution × Channel",
    componentNodes: [
      { label: "Content Asset", relationship: "carries", category: "media" },
      { label: "CDN Node", relationship: "routed_via", category: "cloud" },
    ],
    dimensions: ["Channel", "Bitrate Profile", "DRM Type"],
  },
  {
    id: "audience-segment",
    label: "Audience Segment",
    category: "media",
    type: "ontology",
    businessIntent:
      "Behavioral and demographic cohort used for content personalisation and ad targeting.",
    defaultGrain: "segment × CalendarWeek",
    componentNodes: [
      { label: "Content Asset", relationship: "interested_in", category: "media" },
      { label: "Ad Inventory", relationship: "targeted_by", category: "media" },
      { label: "Subscriber", relationship: "composed_of", category: "telecom" },
    ],
    dimensions: ["Age Band", "Interest Category", "Platform"],
  },

  // ── Cloud ────────────────────────────────────────────────────────────────────
  {
    id: "cloud-region",
    label: "Cloud Region",
    category: "cloud",
    type: "ontology",
    isCore: true,
    businessIntent:
      "Geo-distributed cloud deployment zone providing compute, storage, and network services. Core Cloud entity.",
    defaultGrain: "region × CalendarDate",
    componentNodes: [
      { label: "Availability Zone", relationship: "contains", category: "cloud" },
      { label: "CDN Node", relationship: "contains", category: "cloud" },
      { label: "Instance Pool", relationship: "contains", category: "cloud" },
      { label: "Core Network", relationship: "hosts", category: "telecom" },
      { label: "Infrastructure Scaling Decision", relationship: "resized_by", category: "decisions" },
    ],
    dimensions: ["Cloud Provider", "Geography", "Compliance Zone"],
  },
  {
    id: "availability-zone",
    label: "Availability Zone",
    category: "cloud",
    type: "ontology",
    businessIntent:
      "Fault-isolated data center within a cloud region providing redundant compute and storage.",
    defaultGrain: "zone × CloudRegion",
    componentNodes: [
      { label: "Cloud Region", relationship: "part_of", category: "cloud" },
      { label: "Instance Pool", relationship: "hosts", category: "cloud" },
    ],
    dimensions: ["Cloud Region", "Physical AZ ID", "Power Feed"],
  },
  {
    id: "cdn-node",
    label: "CDN Node",
    category: "cloud",
    type: "ontology",
    businessIntent:
      "Edge caching node accelerating media delivery and reducing origin load for streaming platforms.",
    defaultGrain: "node × CloudRegion",
    componentNodes: [
      { label: "Cloud Region", relationship: "part_of", category: "cloud" },
      { label: "Content Distribution", relationship: "serves", category: "media" },
      { label: "Streaming Platform", relationship: "delivers_for", category: "media" },
      { label: "Network Latency", relationship: "measured_by", category: "metrics" },
    ],
    dimensions: ["Cloud Region", "Cache Policy", "Protocol"],
  },
  {
    id: "instance-pool",
    label: "Instance Pool",
    category: "cloud",
    type: "ontology",
    businessIntent:
      "Auto-scaling group of virtual machine instances backing application and ML inference workloads.",
    defaultGrain: "pool × AvailabilityZone",
    componentNodes: [
      { label: "Cloud Region", relationship: "part_of", category: "cloud" },
      { label: "Availability Zone", relationship: "hosted_in", category: "cloud" },
      { label: "Infrastructure Scaling Decision", relationship: "resized_by", category: "decisions" },
    ],
    dimensions: ["Instance Type", "Availability Zone", "Scaling Policy"],
  },
  {
    id: "api-gateway",
    label: "API Gateway",
    category: "cloud",
    type: "ontology",
    businessIntent:
      "Managed ingress layer handling authentication, rate-limiting, and routing for microservices.",
    defaultGrain: "gateway × CloudRegion",
    componentNodes: [
      { label: "Service Mesh", relationship: "routes_to", category: "cloud" },
      { label: "Application Portfolio", relationship: "exposes", category: "enterprise-it" },
      { label: "Identity Provider", relationship: "authenticates_via", category: "enterprise-it" },
    ],
    dimensions: ["Cloud Region", "Protocol", "Rate Limit Tier"],
  },
  {
    id: "service-mesh",
    label: "Service Mesh",
    category: "cloud",
    type: "ontology",
    businessIntent:
      "Layer-7 traffic management fabric for east-west microservice communication within a cloud region.",
    defaultGrain: "mesh × CloudRegion",
    componentNodes: [
      { label: "API Gateway", relationship: "downstream_of", category: "cloud" },
      { label: "Application Portfolio", relationship: "interconnects", category: "enterprise-it" },
    ],
    dimensions: ["Cloud Region", "Proxy Type", "mTLS Enforcement"],
  },

  // ── Enterprise IT ────────────────────────────────────────────────────────────
  {
    id: "application-portfolio",
    label: "Application Portfolio",
    category: "enterprise-it",
    type: "ontology",
    isCore: true,
    businessIntent:
      "Catalog of enterprise applications with ownership, SLA contracts, and lifecycle status. Core Enterprise IT entity.",
    defaultGrain: "application × CalendarQuarter",
    componentNodes: [
      { label: "API Gateway", relationship: "exposed_via", category: "cloud" },
      { label: "Service Mesh", relationship: "connected_via", category: "cloud" },
      { label: "Identity Provider", relationship: "secured_by", category: "enterprise-it" },
      { label: "SLA Contract", relationship: "governed_by", category: "enterprise-it" },
      { label: "Monitoring Agent", relationship: "observed_by", category: "enterprise-it" },
    ],
    dimensions: ["Business Domain", "Lifecycle Stage", "Criticality Tier"],
  },
  {
    id: "identity-provider",
    label: "Identity Provider",
    category: "enterprise-it",
    type: "ontology",
    businessIntent:
      "Centralised IAM system managing authentication and authorisation across enterprise applications and cloud resources.",
    defaultGrain: "idp × Tenant",
    componentNodes: [
      { label: "Application Portfolio", relationship: "secures", category: "enterprise-it" },
      { label: "API Gateway", relationship: "federated_to", category: "cloud" },
    ],
    dimensions: ["Protocol (OIDC/SAML)", "Tenant", "MFA Policy"],
  },
  {
    id: "sla-contract",
    label: "SLA Contract",
    category: "enterprise-it",
    type: "ontology",
    businessIntent:
      "Formal service level agreement defining availability, latency, and support response obligations.",
    defaultGrain: "contract × Application",
    componentNodes: [
      { label: "Application Portfolio", relationship: "governs", category: "enterprise-it" },
      { label: "Uptime %", relationship: "benchmarked_against", category: "metrics" },
    ],
    dimensions: ["Tier", "Penalty Clause", "Review Cadence"],
  },
  {
    id: "monitoring-agent",
    label: "Monitoring Agent",
    category: "enterprise-it",
    type: "ontology",
    businessIntent:
      "Telemetry collection agent emitting metrics and traces from infrastructure and application layers.",
    defaultGrain: "agent × Host",
    componentNodes: [
      { label: "Application Portfolio", relationship: "observes", category: "enterprise-it" },
      { label: "Uptime %", relationship: "reports", category: "metrics" },
      { label: "Network Latency", relationship: "reports", category: "metrics" },
      { label: "GPU Utilization", relationship: "reports", category: "metrics" },
    ],
    dimensions: ["Host", "Collection Interval", "Exporter Type"],
  },
  {
    id: "incident",
    label: "Incident",
    category: "enterprise-it",
    type: "ontology",
    businessIntent:
      "Service disruption event tracked from detection through resolution. Linked to SLA breaches and postmortems.",
    defaultGrain: "incident × CalendarDate",
    componentNodes: [
      { label: "Application Portfolio", relationship: "affects", category: "enterprise-it" },
      { label: "SLA Contract", relationship: "measured_against", category: "enterprise-it" },
      { label: "Monitoring Agent", relationship: "detected_by", category: "enterprise-it" },
    ],
    dimensions: ["Severity", "Application", "Root Cause Category"],
  },

  // ── Metrics ──────────────────────────────────────────────────────────────────
  {
    id: "gpu-utilization",
    label: "GPU Utilization",
    category: "metrics",
    type: "metric",
    businessIntent:
      "Percentage of GPU compute capacity actively processing workloads. Primary efficiency KPI for AI operations.",
    defaultGrain: "cluster × CalendarHour",
    componentNodes: [
      { label: "GPU Cluster", relationship: "measured_from", category: "ai-ops" },
      { label: "Monitoring Agent", relationship: "collected_by", category: "enterprise-it" },
    ],
    dimensions: ["GPU Cluster", "Job Type", "Time Window"],
  },
  {
    id: "network-latency",
    label: "Network Latency",
    category: "metrics",
    type: "metric",
    businessIntent:
      "Round-trip time for packet traversal across network segments. SLA-critical for telecom and streaming.",
    defaultGrain: "segment × CalendarMinute",
    componentNodes: [
      { label: "Fiber Link", relationship: "measured_on", category: "infrastructure" },
      { label: "CDN Node", relationship: "measured_at", category: "cloud" },
      { label: "RAN Node", relationship: "measured_at", category: "telecom" },
    ],
    dimensions: ["Segment", "Protocol", "Percentile (p50/p99)"],
  },
  {
    id: "arpu",
    label: "ARPU",
    category: "metrics",
    type: "metric",
    businessIntent:
      "Average Revenue Per User — primary telecom commercial KPI tracking monetisation per subscriber.",
    defaultGrain: "subscriber × CalendarMonth",
    componentNodes: [
      { label: "Subscriber", relationship: "measured_from", category: "telecom" },
    ],
    dimensions: ["Segment", "Plan Type", "Region"],
  },
  {
    id: "churn-rate",
    label: "Churn Rate",
    category: "metrics",
    type: "metric",
    businessIntent:
      "Percentage of subscribers discontinuing service in a period. Leading indicator of revenue attrition.",
    defaultGrain: "cohort × CalendarMonth",
    componentNodes: [
      { label: "Subscriber", relationship: "measured_from", category: "telecom" },
    ],
    dimensions: ["Segment", "Region", "Voluntary/Involuntary"],
  },
  {
    id: "uptime",
    label: "Uptime %",
    category: "metrics",
    type: "metric",
    businessIntent:
      "Percentage of time a system or service was available. Benchmarked against SLA contract thresholds.",
    defaultGrain: "application × CalendarMonth",
    componentNodes: [
      { label: "Data Center", relationship: "measured_for", category: "infrastructure" },
      { label: "Application Portfolio", relationship: "measured_for", category: "enterprise-it" },
      { label: "SLA Contract", relationship: "benchmarked_in", category: "enterprise-it" },
    ],
    dimensions: ["System", "Measurement Window", "Exclusion Policy"],
  },
  {
    id: "ad-fill-rate",
    label: "Ad Fill Rate",
    category: "metrics",
    type: "metric",
    businessIntent:
      "Percentage of available ad slots filled with paid advertisements. Key revenue realisation metric for media.",
    defaultGrain: "placement × CalendarDate",
    componentNodes: [
      { label: "Ad Inventory", relationship: "measured_from", category: "media" },
    ],
    dimensions: ["Platform", "Format", "Buyer Type"],
  },
  {
    id: "model-accuracy",
    label: "Model Accuracy",
    category: "metrics",
    type: "metric",
    businessIntent:
      "Evaluation metric capturing ML model prediction quality on held-out test sets. Gates deployment decisions.",
    defaultGrain: "model × EvaluationRun",
    componentNodes: [
      { label: "ML Model", relationship: "measured_for", category: "ai-ops" },
    ],
    dimensions: ["Metric Type (F1/AUC)", "Dataset Split", "Threshold"],
  },
  {
    id: "energy-pue",
    label: "Energy PUE",
    category: "metrics",
    type: "metric",
    businessIntent:
      "Power Usage Effectiveness — ratio of total facility power to IT equipment power. Sustainability KPI.",
    defaultGrain: "facility × CalendarMonth",
    componentNodes: [
      { label: "Data Center", relationship: "measured_for", category: "infrastructure" },
      { label: "Cooling System", relationship: "influenced_by", category: "infrastructure" },
    ],
    dimensions: ["Data Center", "Season", "Cooling Mode"],
  },

  // ── Decisions ────────────────────────────────────────────────────────────────
  {
    id: "capacity-expansion-decision",
    label: "Capacity Expansion",
    category: "decisions",
    type: "decision",
    businessIntent:
      "Strategic decision to add GPU, server, or data center capacity based on utilisation forecasts and CapEx budget.",
    defaultGrain: "decision × CalendarQuarter",
    componentNodes: [
      { label: "GPU Cluster", relationship: "evaluates", category: "ai-ops" },
      { label: "Data Center", relationship: "evaluates", category: "infrastructure" },
      { label: "GPU Utilization", relationship: "triggered_by", category: "metrics" },
    ],
    dimensions: ["Asset Type", "Region", "Budget Cycle"],
  },
  {
    id: "spectrum-allocation-decision",
    label: "Spectrum Allocation",
    category: "decisions",
    type: "decision",
    businessIntent:
      "Regulatory and commercial decision allocating frequency bands to base stations and network slices.",
    defaultGrain: "decision × Region",
    componentNodes: [
      { label: "Spectrum Band", relationship: "governs", category: "telecom" },
      { label: "Base Station", relationship: "governs", category: "telecom" },
    ],
    dimensions: ["Regulator", "Band", "License Term"],
  },
  {
    id: "model-deployment-decision",
    label: "Model Deployment",
    category: "decisions",
    type: "decision",
    businessIntent:
      "Go/no-go decision deploying an ML model version to production inference infrastructure.",
    defaultGrain: "decision × ModelVersion",
    componentNodes: [
      { label: "ML Model", relationship: "triggers", category: "ai-ops" },
      { label: "Inference Engine", relationship: "targets", category: "ai-ops" },
      { label: "Model Accuracy", relationship: "gated_by", category: "metrics" },
    ],
    dimensions: ["Model", "Deployment Stage", "Approval Authority"],
  },
  {
    id: "content-licensing-decision",
    label: "Content Licensing",
    category: "decisions",
    type: "decision",
    businessIntent:
      "Commercial decision to acquire or renew content rights for specified territories and windows.",
    defaultGrain: "decision × ContentAsset",
    componentNodes: [
      { label: "Rights License", relationship: "governs", category: "media" },
      { label: "Content Asset", relationship: "governs", category: "media" },
      { label: "Ad Fill Rate", relationship: "influenced_by", category: "metrics" },
    ],
    dimensions: ["Territory", "Content Genre", "Deal Type"],
  },
  {
    id: "infrastructure-scaling-decision",
    label: "Infra Scaling",
    category: "decisions",
    type: "decision",
    businessIntent:
      "Automated or manual decision to scale cloud instance pools and regions based on demand signals.",
    defaultGrain: "decision × CloudRegion",
    componentNodes: [
      { label: "Instance Pool", relationship: "resizes", category: "cloud" },
      { label: "Cloud Region", relationship: "resizes", category: "cloud" },
      { label: "Uptime %", relationship: "triggered_by", category: "metrics" },
    ],
    dimensions: ["Cloud Region", "Scaling Direction", "Trigger Policy"],
  },
];

// Compute connection counts from edges
export const TMT_EDGES: OntologyEdge[] = [
  // Data Center edges
  { source: "data-center", target: "server-rack", label: "hosts" },
  { source: "data-center", target: "gpu-cluster", label: "hosts" },
  { source: "data-center", target: "storage-array", label: "hosts" },
  { source: "data-center", target: "fiber-link", label: "connected_via" },
  { source: "data-center", target: "cooling-system", label: "regulated_by" },
  { source: "data-center", target: "power-grid", label: "powered_by" },
  { source: "data-center", target: "uptime", label: "measured_by" },
  { source: "data-center", target: "energy-pue", label: "measured_by" },
  { source: "data-center", target: "capacity-expansion-decision", label: "evaluated_by" },

  // Server Rack
  { source: "server-rack", target: "network-switch", label: "connected_to" },

  // Storage Array
  { source: "storage-array", target: "training-dataset", label: "stores" },

  // Cooling System
  { source: "cooling-system", target: "energy-pue", label: "drives" },

  // Power Grid
  { source: "power-grid", target: "uptime", label: "impacts" },

  // Fiber Link
  { source: "fiber-link", target: "network-latency", label: "measured_by" },

  // GPU Cluster edges
  { source: "gpu-cluster", target: "ml-pipeline", label: "runs" },
  { source: "gpu-cluster", target: "inference-engine", label: "runs" },
  { source: "gpu-cluster", target: "gpu-utilization", label: "measured_by" },
  { source: "gpu-cluster", target: "capacity-expansion-decision", label: "evaluated_by" },

  // ML Model
  { source: "ml-model", target: "model-registry", label: "registered_in" },
  { source: "ml-model", target: "inference-engine", label: "deployed_on" },
  { source: "ml-model", target: "model-accuracy", label: "measured_by" },
  { source: "ml-model", target: "model-deployment-decision", label: "triggered_by" },

  // Training Dataset
  { source: "training-dataset", target: "ml-pipeline", label: "consumed_by" },
  { source: "training-dataset", target: "feature-store", label: "sourced_from" },

  // ML Pipeline
  { source: "ml-pipeline", target: "feature-store", label: "reads_from" },
  { source: "ml-pipeline", target: "model-registry", label: "publishes_to" },

  // Inference Engine
  { source: "inference-engine", target: "network-latency", label: "measured_by" },

  // Base Station
  { source: "base-station", target: "spectrum-band", label: "uses" },
  { source: "base-station", target: "ran-node", label: "contains" },
  { source: "base-station", target: "network-slice", label: "hosts" },
  { source: "base-station", target: "tower-site", label: "located_at" },
  { source: "base-station", target: "fiber-link", label: "backhaul_via" },
  { source: "base-station", target: "spectrum-allocation-decision", label: "governed_by" },

  // Spectrum Band
  { source: "spectrum-band", target: "spectrum-allocation-decision", label: "governed_by" },

  // Network Slice
  { source: "network-slice", target: "subscriber", label: "serves" },
  { source: "network-slice", target: "core-network", label: "connected_to" },

  // Subscriber
  { source: "subscriber", target: "core-network", label: "tracked_by" },
  { source: "subscriber", target: "arpu", label: "measured_by" },
  { source: "subscriber", target: "churn-rate", label: "measured_by" },
  { source: "subscriber", target: "audience-segment", label: "segmented_into" },

  // RAN Node
  { source: "ran-node", target: "network-latency", label: "measured_by" },

  // Core Network
  { source: "core-network", target: "cloud-region", label: "hosted_in" },

  // Content Asset
  { source: "content-asset", target: "streaming-platform", label: "distributed_via" },
  { source: "content-asset", target: "content-distribution", label: "distributed_via" },
  { source: "content-asset", target: "ad-inventory", label: "monetised_by" },
  { source: "content-asset", target: "rights-license", label: "governed_by" },
  { source: "content-asset", target: "content-licensing-decision", label: "governed_by" },

  // Streaming Platform
  { source: "streaming-platform", target: "cdn-node", label: "delivered_via" },
  { source: "streaming-platform", target: "audience-segment", label: "segments_by" },

  // Ad Inventory
  { source: "ad-inventory", target: "audience-segment", label: "targets" },
  { source: "ad-inventory", target: "ad-fill-rate", label: "measured_by" },

  // Rights License
  { source: "rights-license", target: "content-licensing-decision", label: "governed_by" },

  // Content Distribution
  { source: "content-distribution", target: "cdn-node", label: "routed_via" },

  // Cloud Region
  { source: "cloud-region", target: "availability-zone", label: "contains" },
  { source: "cloud-region", target: "cdn-node", label: "contains" },
  { source: "cloud-region", target: "instance-pool", label: "contains" },
  { source: "cloud-region", target: "infrastructure-scaling-decision", label: "resized_by" },

  // Instance Pool
  { source: "instance-pool", target: "infrastructure-scaling-decision", label: "resized_by" },

  // Availability Zone
  { source: "availability-zone", target: "instance-pool", label: "hosts" },

  // CDN Node
  { source: "cdn-node", target: "network-latency", label: "measured_by" },

  // API Gateway
  { source: "api-gateway", target: "service-mesh", label: "routes_to" },
  { source: "api-gateway", target: "application-portfolio", label: "exposes" },
  { source: "api-gateway", target: "identity-provider", label: "authenticates_via" },

  // Service Mesh
  { source: "service-mesh", target: "application-portfolio", label: "interconnects" },

  // Application Portfolio
  { source: "application-portfolio", target: "identity-provider", label: "secured_by" },
  { source: "application-portfolio", target: "sla-contract", label: "governed_by" },
  { source: "application-portfolio", target: "monitoring-agent", label: "observed_by" },
  { source: "application-portfolio", target: "incident", label: "affected_by" },

  // SLA Contract
  { source: "sla-contract", target: "uptime", label: "benchmarked_against" },

  // Monitoring Agent
  { source: "monitoring-agent", target: "uptime", label: "reports" },
  { source: "monitoring-agent", target: "network-latency", label: "reports" },
  { source: "monitoring-agent", target: "gpu-utilization", label: "reports" },

  // Incident
  { source: "incident", target: "sla-contract", label: "measured_against" },

  // Infrastructure Scaling Decision
  { source: "infrastructure-scaling-decision", target: "uptime", label: "triggered_by" },

  // Model Deployment Decision
  { source: "model-deployment-decision", target: "model-accuracy", label: "gated_by" },

  // Content Licensing Decision
  { source: "content-licensing-decision", target: "ad-fill-rate", label: "influenced_by" },
];

// Pre-compute connection counts on nodes
const connectionCount = new Map<string, number>();
TMT_EDGES.forEach((e) => {
  const src = typeof e.source === "string" ? e.source : (e.source as OntologyNode).id;
  const tgt = typeof e.target === "string" ? e.target : (e.target as OntologyNode).id;
  connectionCount.set(src, (connectionCount.get(src) ?? 0) + 1);
  connectionCount.set(tgt, (connectionCount.get(tgt) ?? 0) + 1);
});
TMT_NODES.forEach((n) => {
  n.connections = connectionCount.get(n.id) ?? 0;
});
