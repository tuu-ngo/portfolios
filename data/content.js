// ============================================================================
//  EDIT EVERYTHING HERE.  This is the single source of truth for the site.
// ============================================================================

export const site = {
  name: "NGO HUU TAI",
  role: "Cloud DevOps Engineer",
  availability: "OPEN TO CLOUD DEVOPS ROLES", // set to "" to hide the badge
};

export const hero = {
  headline: ["CLOUD", "DEVOPS", "ENGINEER"],
  tagline:
    "Cloud DevOps Engineer. Final-year CS @ Troy University building on AWS — serverless & Kubernetes (EKS), Terraform IaC, GitOps CI/CD, production observability & cost-aware ops.",
  rotating: ["DEVOPS", "CLOUD ☁", "SRE", "FINOPS", "GITOPS"],
  primaryCta: { label: "ABOUT ME ↓", href: "#about" },
  secondaryCta: { label: "MY RÉSUMÉ", href: "#" }, // put your CV link here
};

export const marquees = {
  about: ["AWS CLOUD", "KUBERNETES / EKS", "TERRAFORM IaC", "GITOPS · ARGOCD", "OBSERVABILITY", "FINOPS"],
  awards: ["SHIPPED & SHINED", "HACKATHON WINS", "CERTIFIED", "ON THE WALL"],
  projects: ["SELECTED WORK", "PRODUCTION-GRADE", "ALL KILLER NO FILLER"],
};

export const about = {
  photo: "/avatar.jpg",
  photoAlt: "Ngo Huu Tai speaking at an Agentic AI event",
  intro:
    "Final-year Computer Science major specializing in DevOps and AWS cloud infrastructure — deploying and operating workloads across serverless and Kubernetes (EKS).",
  paragraph:
    "Terraform IaC, GitOps CI/CD and production observability, backed by Python backend development with security and cost-aware operations. Team lead on builds of up to 10 — strong critical thinking, problem-solving and technical communication in English (IELTS 8.0). Seeking a Cloud DevOps Engineer role.",
};

export const education = [
  {
    period: "PRESENT",
    school: "TROY UNIVERSITY",
    degree: "B.S. in Computer Science",
    note: "Alabama, US — studied remotely from Da Nang, Vietnam",
    location: "🏅 Chancellor’s List · 4-Year Tuition Scholarship · Debating & English Contest Awards",
    stats: [
      { label: "GPA", value: "3.9 / 4.0" },
      { label: "IELTS", value: "8.0" },
    ],
    icon: "🎓",
  },
];

export const experience = [
  {
    period: "MAR 2026 — PRESENT",
    role: "CLOUD DEVOPS / PLATFORM ENGINEER",
    company: "XBRAIN (TECHX) — AWS × XBRAIN ACCELERATOR PROGRAM",
    location: "📍 Da Nang, Vietnam",
    points: [
      "Designed serverless, event-driven architectures on AWS with asynchronous processing and durable storage, selecting managed services against documented cost, latency and operational trade-offs.",
      "Codified cloud infrastructure in Terraform and deployed containerized workloads on Kubernetes under least-privilege IAM, policy-as-code admission control and automated security scanning — every change planned and applied through CI.",
      "Assumed operational ownership of a live e-commerce platform: on-call incident response, SLO management, root-cause analysis and signed postmortems under a fixed budget and continuous injected failures.",
      "Directed cost optimization across the platform, returning spend to budget via workload rightsizing, observability tuning and orphaned-resource reclamation — with no reduction in service levels.",
      "Instrumented the platform with Prometheus, Grafana, OpenTelemetry and Jaeger, maintaining the SLIs and dashboards the on-call rotation depended on.",
      "Established GitOps delivery with ArgoCD and progressive rollouts, and engineered the controls letting AI squads run Amazon Bedrock workloads under scoped IAM roles and admission policies.",
    ],
  },
];

export const skills = [
  {
    title: "Cloud & Platform",
    items: ["AWS EKS", "Lambda", "API Gateway", "S3", "CloudFront", "SQS", "RDS", "ElastiCache", "MSK", "DynamoDB", "IAM / IRSA", "CloudWatch", "Bedrock", "Kubernetes", "Docker", "Helm", "AWS FIS"],
  },
  {
    title: "IaC & CI/CD",
    items: ["Terraform", "ArgoCD (GitOps)", "GitHub Actions (OIDC)", "Argo Rollouts", "Karpenter"],
  },
  {
    title: "FinOps",
    items: ["Cost Explorer", "Cost & Usage Report", "Budget guardrails", "Spot / Graviton migration", "Rightsizing"],
  },
  {
    title: "Security",
    items: ["IAM least-privilege", "Kyverno (policy-as-code)", "Trivy", "Cosign", "gitleaks", "tfsec", "External Secrets", "NetworkPolicy"],
  },
  {
    title: "Observability",
    items: ["Prometheus", "Grafana", "OpenTelemetry", "Jaeger", "OpenSearch", "CloudWatch", "Locust", "Chaos Mesh"],
  },
  {
    title: "Programming",
    items: ["Python", "SQL / PostgreSQL", "FastAPI", "REST / gRPC", "Bash"],
  },
  {
    title: "Languages",
    items: ["English — IELTS 8.0", "French — DELF B1", "German — A2"],
  },
];

// Awards, certifications and recognitions.
export const awards = [
  {
    title: "1ST PLACE — XBRAIN MINI HACKATHON",
    meta: "BudgetBot · AI-powered personal-finance platform",
    kind: "🥇 Award",
  },
  {
    title: "3RD PLACE — KOICA COMMUNITY HACKATHON",
    meta: "Community-impact engineering competition",
    kind: "🥉 Award",
  },
  {
    title: "GOOGLE CERTIFICATIONS",
    meta: "AI Essentials · Foundations of Data · IT Automation with Python",
    kind: "📜 Certified",
  },
];

export const projects = [
  {
    category: "PRODUCTION TAKEOVER · LIVE E-COMMERCE PLATFORM",
    name: "INFRA SENTINEL",
    description:
      "Took over and operated a live e-commerce platform end-to-end (3 squads — 2 platform, 1 AI). Migrated the cart store, order ledger and event queue onto managed AWS (RDS Multi-AZ, ElastiCache, MSK) with zero downtime and zero orders lost — checksum parity verified across 70,000+ orders. Deployed the AI squad's Bedrock shopping assistant to production under scoped IRSA, admission & network policy and digest-pinned images.",
    awards: [
      "🟢 Zero downtime · 0 orders lost across 70,000+ (checksum-verified)",
      "💸 Hidden cost cut: Prometheus series 233k→83k (−64.5%), VPC endpoints −$114/mo",
      "🧪 Checkout >99.9% under FIS single-AZ failure, node drain & 200-user flash sale",
      "📋 Auditability lead · 5 signed postmortems",
    ],
    roles: ["AWS RDS / ElastiCache / MSK", "Kubernetes", "Terraform", "ArgoCD", "Amazon Bedrock", "AWS FIS"],
    link: "https://github.com/tuu-ngo/Phase3-TF3-Infra-Sentinel",
    accent: "teal",
  },
  {
    category: "AI-DRIVEN KUBERNETES SELF-HEALING",
    name: "SELF-HEAL ENGINE",
    description:
      "A closed-loop remediation platform on live EKS (detect → decide → safety → execute → verify → audit) with multi-tenant isolation. Achieved a 71.4% autonomous incident-resolution rate across 14 scenarios (target ≥60%), integrating ML anomaly detection (BOCPD + BARO root-cause). Enforced a 3-layer safety model (safety gate, per-tenant RBAC, Kyverno admission) with zero unsafe actions; codified in Terraform + Helm with GitHub Actions CI.",
    awards: [
      "🤖 71.4% autonomous resolution (target ≥60%)",
      "🛡 Zero unsafe actions across all scenarios",
      "👥 Cloud Architecture & Platform Lead · Team of 9",
    ],
    roles: ["AWS EKS", "Terraform + Helm", "Kyverno", "Prometheus", "GitHub Actions CI", "ML Anomaly Detection"],
    link: "#",
    accent: "pink",
  },
  {
    category: "AI-POWERED PERSONAL-FINANCE PLATFORM · 1ST PLACE",
    name: "BUDGETBOT",
    description:
      "Turns raw bank statements into a spending picture — users upload CSV/PDF files, income and expenses are auto-categorized into a dashboard, budget alerts fire on overspend, and an AI chatbot answers spending questions. Architected on CloudFront, S3, API Gateway, Lambda, SQS, RDS PostgreSQL + RDS Proxy with a queue-backed async path so large files never block the request.",
    awards: [
      "🥇 1st Place, XBrain Hackathon · Backend & Cloud Architecture Lead",
      "🧠 Amazon Bedrock / Nova Micro · led cost / latency / accuracy trade-offs",
    ],
    roles: ["AWS Serverless", "Lambda", "SQS", "RDS PostgreSQL", "React", "Amazon Bedrock"],
    link: "#",
    accent: "yellow",
  },
  {
    category: "EMERGENCY INTAKE & RESCUE DISPATCH",
    name: "SOSFLOW",
    description:
      "A cloud disaster-response system unifying distress reports from 8 channels into a single ranked coordinator queue. Chose explainable rule-based triage over an AI scorer for life-or-death prioritization, with rules in config for domain experts to tune without code changes. Engineered against real failure modes — near-duplicate surfacing, transaction-safe assignment, AI-extraction timeouts degrading to the queue. Deployed as reproducible IaC on AWS.",
    awards: [
      "🚨 8-channel intake → single ranked coordinator queue",
      "✅ 44 automated tests + scripted 12-event disaster simulation",
      "🧭 Design & build lead",
    ],
    roles: ["Python", "FastAPI", "React", "PostgreSQL", "Amazon Bedrock", "Docker", "AWS"],
    link: "#",
    accent: "teal",
  },
];

export const contact = {
  headline: "LET'S BUILD SOMETHING RESILIENT",
  email: "huutai.ngo2409@gmail.com",
  phone: "0905609571",
  socials: [
    { label: "GitHub", href: "https://github.com/tuu-ngo" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/taingohuu2409/" },
  ],
};
