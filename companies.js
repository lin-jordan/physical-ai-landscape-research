const CATEGORIES = [
  {
    id: "real-world-robot-data",
    name: "Real-world robot data",
    number: "01",
    short: "Recorded embodiment",
    description:
      "Robot trajectories, sensor streams, and deployment feedback captured from machines acting in physical environments.",
  },
  {
    id: "egocentric-human-data",
    name: "Egocentric human data",
    number: "02",
    short: "Human experience",
    description:
      "First-person video, hand motion, and wearable signals that show how people manipulate objects and complete tasks.",
  },
  {
    id: "teleoperation-demonstrations",
    name: "Teleoperation & demonstrations",
    number: "03",
    short: "Human-in-the-loop",
    description:
      "Remote-control systems and operator networks that keep robots useful while producing demonstrations for autonomy.",
  },
  {
    id: "simulation-synthetic-data",
    name: "Simulation & synthetic data",
    number: "04",
    short: "Generated experience",
    description:
      "Digital twins, world models, and physics environments for scalable training, testing, and rare-edge-case generation.",
  },
  {
    id: "data-infrastructure-evaluation",
    name: "Data infrastructure & evaluation",
    number: "05",
    short: "Learning systems",
    description:
      "Platforms for ingesting, visualizing, searching, evaluating, orchestrating, and learning from robotics data.",
  },
];

const COMPANIES = [
  {
    id: "xdof",
    name: "XDOF",
    initials: "XD",
    website: "https://www.xdof.ai/",
    founded: 2024,
    headquarters: "San Francisco Bay Area, U.S.",
    primaryCategory: "real-world-robot-data",
    secondaryCategories: ["Teleoperation", "Robot demonstrations", "Open datasets"],
    funding: {
      display: "$70M",
      asOf: "June 2026",
      caveat:
        "Funding announced when the company emerged from stealth; treated as publicly disclosed funding to date.",
    },
    summary:
      "Builds production-scale robot datasets, teleoperation systems, and training infrastructure for robotics labs and model developers.",
    focus:
      "XDOF focuses on the scarce, embodiment-specific demonstrations needed to train robot foundation models. Its full-stack approach spans collection hardware, operator workflows, data quality, and policy-training support.",
    products: [
      "Bespoke teleoperation data collected on a customer’s target robot",
      "Standardized and open robot datasets, including ABC-130K",
      "Teleoperation hardware and tooling derived from the GELLO system",
      "Data pipelines, annotation, and policy-training support",
    ],
    businessApproach:
      "Works directly with robotics labs and companies on production-scale dataset programs and advanced robotic systems. Public reporting describes a tiered data offering that includes bespoke collections and reusable datasets; exact pricing is not disclosed.",
    sources: [
      { label: "Website", url: "https://www.xdof.ai/about" },
      { label: "Company blog", url: "https://www.xdof.ai/blog" },
      {
        label: "Funding",
        url: "https://siliconangle.com/2026/06/17/robotic-teleoperation-data-startup-xdof-launches-70m-funding/",
      },
    ],
  },
  {
    id: "dyna-robotics",
    name: "Dyna Robotics",
    initials: "DY",
    website: "https://www.dyna.co/",
    founded: 2024,
    headquarters: "Redwood City, California, U.S.",
    primaryCategory: "real-world-robot-data",
    secondaryCategories: ["Foundation models", "Robot deployment", "Fleet learning"],
    funding: {
      display: "At least $143.5M",
      asOf: "September 2025",
      caveat:
        "Calculated from a disclosed $23.5M seed and $120M Series A; any undisclosed financing is excluded.",
    },
    summary:
      "Deploys foundation-model-powered robot arms whose real-world task cycles feed a shared learning and improvement loop.",
    focus:
      "Dyna builds general-purpose manipulation models and complete robotic workcells for repetitive physical tasks. Each deployment is designed to generate operational experience that improves performance across the fleet.",
    products: [
      "DYNA-1 and DYNA-1i robot foundation models",
      "Autonomous dual-arm systems for folding, food service, and factory work",
      "Deployment, monitoring, and continual model-improvement infrastructure",
    ],
    businessApproach:
      "Sells integrated automation outcomes to commercial operators rather than a standalone dataset. Deployments combine robot hardware, models, and implementation support; pricing and recurring-service terms are not public.",
    sources: [
      { label: "Website", url: "https://www.dyna.co/" },
      {
        label: "Product",
        url: "https://www.prnewswire.com/news-releases/dyna-robotics-unveils-dyna-1-the-first-commercial-ready-robot-foundation-model-offering-fully-autonomous-round-the-clock-dexterity-302441437.html",
      },
      {
        label: "Funding",
        url: "https://www.prnewswire.com/news-releases/dyna-robotics-raises-120-million-to-advance-robotic-foundation-models-on-the-path-to-physical-artificial-general-intelligence-302556817.html",
      },
    ],
  },
  {
    id: "physical-intelligence",
    name: "Physical Intelligence",
    initials: "π",
    website: "https://www.pi.website/",
    founded: 2024,
    headquarters: "San Francisco, California, U.S.",
    primaryCategory: "real-world-robot-data",
    secondaryCategories: ["Foundation models", "Human-to-robot transfer", "Open source"],
    funding: {
      display: "$1.0B+",
      asOf: "November 2025",
      caveat:
        "Publicly reported rounds include $400M in 2024 and $600M in 2025; smaller initial financing makes the exact cumulative total source-dependent.",
    },
    summary:
      "Develops general-purpose vision-language-action models using multi-robot data, human video, feedback, and real-world trials.",
    focus:
      "Physical Intelligence is building a software intelligence layer intended to control many robot types across many tasks. Its research program combines large-scale multi-robot collection with human-to-robot transfer and online learning.",
    products: [
      "The π series of generalist vision-language-action models",
      "Open-source π0 model weights, code, and action tokenization",
      "Research and partner integrations for robot manipulation",
    ],
    businessApproach:
      "The company is currently best understood as a research and model platform working with robotics partners. It has open-sourced selected models and shown partner applications, but commercial licensing and pricing have not been publicly detailed.",
    sources: [
      { label: "Website", url: "https://www.pi.website/" },
      { label: "Research", url: "https://www.pi.website/blog/pi0" },
      {
        label: "Funding",
        url: "https://www.axios.com/2025/11/21/robots-physical-intelligence-ai",
      },
      {
        label: "Funding total",
        url: "https://sacra.com/c/physical-intelligence/",
      },
    ],
  },
  {
    id: "sunday-robotics",
    name: "Sunday Robotics",
    initials: "SU",
    website: "https://www.sunday.ai/",
    founded: 2024,
    headquarters: "Mountain View, California, U.S.",
    primaryCategory: "egocentric-human-data",
    secondaryCategories: ["Wearables", "Home robotics", "Human demonstrations"],
    funding: {
      display: "$200M",
      asOf: "March 2026",
      caveat:
        "Includes the company’s $165M Series B and an earlier $35M round reported by company-data sources.",
    },
    summary:
      "Uses a sensorized Skill Capture Glove and a distributed contributor program to teach its Memo home robot from human motion.",
    focus:
      "Sunday’s data strategy avoids collecting demonstrations by teleoperating a robot inside customers’ homes. Instead, contributors wear a capture glove while performing household tasks, creating human-motion data that can be transformed into robot skills.",
    products: [
      "Memo, a wheeled dual-arm home robot",
      "Skill Capture Glove for recording human manipulation",
      "Memory Developer contributor network",
      "ACT-1 robot foundation model and expanding skill library",
    ],
    businessApproach:
      "Sunday is building a vertically integrated consumer robotics business and recruiting households for a 2026 beta. Its contributor network supplies training data; final robot pricing, ownership, or subscription terms have not been disclosed.",
    sources: [
      { label: "Website", url: "https://www.sunday.ai/" },
      { label: "Technology", url: "https://www.sunday.ai/blog/no-robot-data" },
      { label: "Funding", url: "https://www.sunday.ai/blog/series-b" },
      { label: "Funding total", url: "https://sacra.com/c/sunday/" },
    ],
  },
  {
    id: "rlwrld",
    name: "RLWRLD",
    initials: "RL",
    website: "https://www.rlwrld.ai/",
    founded: 2024,
    headquarters: "Seoul, South Korea; U.S. HQ in San Francisco",
    primaryCategory: "egocentric-human-data",
    secondaryCategories: ["Industrial skills", "Teleoperation", "Foundation models"],
    funding: {
      display: "Approx. $41M",
      asOf: "February 2026",
      caveat: "Company announcement describes total seed investment as approximately $41M.",
    },
    summary:
      "Captures skilled workers’ first-person video, hand motion, force, and teleoperation data to train dexterous industrial robot models.",
    focus:
      "RLWRLD converts the practical know-how of hospitality, logistics, and industrial workers into multimodal training signals. Its emphasis is dexterous five-finger manipulation and transfer across robot embodiments.",
    products: [
      "RLDX-1 dexterity-first robotics foundation model",
      "Real-world 4D+ human and robot data pipeline",
      "DexBench benchmark and humanoid data standards",
      "Proof-of-concept industrial robotics programs",
    ],
    businessApproach:
      "Runs strategic pilots and joint development programs with industrial, logistics, and hospitality partners, using their workflows to build and validate models. Specific software licensing and pricing have not been disclosed.",
    sources: [
      { label: "Website", url: "https://www.rlwrld.ai/en" },
      {
        label: "Data approach",
        url: "https://aws.amazon.com/blogs/physical-ai/putting-dexterous-robots-to-work-how-rlwrld-builds-physical-ai-with-aws/",
      },
      {
        label: "Field reporting",
        url: "https://apnews.com/article/c3e00f5264e109b8b767559e9e09c3dc",
      },
      {
        label: "Funding",
        url: "https://www.globenewswire.com/news-release/2026/02/26/3245146/0/en/RLWRLD-Raises-26M-Seed-2-Bringing-Total-Funding-to-41M-to-Scale-Industrial-Robotics-AI.html",
      },
    ],
  },
  {
    id: "mecka-ai",
    name: "Mecka AI",
    initials: "MK",
    website: "https://www.mecka.ai/",
    founded: 2024,
    headquarters: "Toronto, Canada",
    primaryCategory: "egocentric-human-data",
    secondaryCategories: ["Evaluation", "Data collection", "Deployment integration"],
    funding: {
      display: "$60M",
      asOf: "June 2026",
      caveat:
        "Series A amount reported by Fortune; public sources vary between 2024 and 2025 for the founding year.",
    },
    summary:
      "Collects and structures first-person human activity through phones and sensors, then supports evaluation and real-world robot deployment.",
    focus:
      "Mecka positions itself between hardware, model developers, and commercial operators. Its Egoverse program turns human activity into task-specific data while its evaluation and integration work carries models toward deployment.",
    products: [
      "Egoverse first-person human-interaction dataset",
      "Mobile data-collection application",
      "Dataset browser, visualization, querying, and inference tools",
      "Custom collection, model evaluation, and deployment programs",
    ],
    businessApproach:
      "Offers dataset access, commissioned task-specific collection, model evaluations, and scoped enterprise deployment programs. Public materials invite enterprise and research partnerships; standardized pricing is not disclosed.",
    sources: [
      { label: "Website", url: "https://www.mecka.ai/" },
      { label: "Egoverse", url: "https://egoverse.ai/" },
      {
        label: "Funding",
        url: "https://fortune.com/2026/06/01/mecka-ai-series-a-60-million-robotics-data-training/",
      },
      {
        label: "Company data",
        url: "https://app.dealroom.co/companies/mecka_ai",
      },
    ],
  },
  {
    id: "sensei",
    name: "Sensei",
    initials: "SE",
    website: "https://senseirobotics.com/",
    founded: 2024,
    headquarters: "Boston, Massachusetts, U.S.",
    primaryCategory: "teleoperation-demonstrations",
    secondaryCategories: ["Operator network", "Portable hardware", "Human data"],
    funding: {
      display: "At least $500K",
      asOf: "August 2024",
      caveat:
        "Represents Y Combinator’s reported accelerator investment and should not be read as a verified total of all financing.",
    },
    summary:
      "Combines low-cost wearable collection hardware with a paid operator network for outsourced, in-the-wild robot demonstrations.",
    focus:
      "Sensei aims to lower the cost and physical footprint of demonstration collection. Its portable exoskeleton-style hardware records human motion without requiring a full robot at every collection site.",
    products: [
      "Sub-$300 portable human-demonstration collection hardware",
      "Software for specifying and fulfilling data requests",
      "Distributed network of trained, paid data collectors",
    ],
    businessApproach:
      "Robotics companies request training data and Sensei’s operator network fulfills the collection using company-designed hardware. The model resembles a managed data marketplace; per-project pricing is not public.",
    sources: [
      { label: "Website", url: "https://senseirobotics.com/" },
      {
        label: "Company profile",
        url: "https://www.ycombinator.com/companies/sensei",
      },
      {
        label: "Funding",
        url: "https://app.dealroom.co/companies/sensei_robotics",
      },
    ],
  },
  {
    id: "olis-robotics",
    name: "Olis Robotics",
    initials: "OL",
    website: "https://olisrobotics.com/",
    founded: 2013,
    headquarters: "Seattle, Washington, U.S.",
    primaryCategory: "teleoperation-demonstrations",
    secondaryCategories: ["Remote diagnostics", "Industrial robots", "Edge data"],
    funding: {
      display: "At least $4.1M",
      asOf: "August 2023",
      caveat:
        "Reflects the latest disclosed venture round; earlier grants or financing are not included.",
    },
    summary:
      "Provides edge software for remotely monitoring, diagnosing, and controlling industrial robots and PLC-based automation.",
    focus:
      "Olis gives integrators and factory teams a synchronized view of robot state, PLC signals, events, and video. Remote access and supervised intervention help recover faults without sending an expert to the site.",
    products: [
      "Olis App for Android and IPC software for Windows and Linux",
      "Remote controller and teach-pendant access",
      "Synchronized event, video, and machine-state timeline",
      "Edge gateway support for major robot and PLC brands",
    ],
    businessApproach:
      "Sells software licenses directly to integrators and factory operators, with an entry Android plan publicly listed at $499 per year and higher-end deployments handled through demos and sales.",
    sources: [
      { label: "Website", url: "https://olisrobotics.com/" },
      { label: "Product & pricing", url: "https://olisrobotics.com/request-support" },
      {
        label: "Funding",
        url: "https://www.businesswire.com/news/home/20230811999559/en/Olis-Robotics-Secures-%244M-Funding-to-Meet-Surging-Demand-for-Remote-Robot-Management",
      },
    ],
  },
  {
    id: "teleo",
    name: "Teleo",
    initials: "TE",
    website: "https://www.teleo.ai/",
    founded: 2019,
    headquarters: "Palo Alto, California, U.S.",
    primaryCategory: "teleoperation-demonstrations",
    secondaryCategories: ["Supervised autonomy", "Heavy equipment", "Fleet analytics"],
    funding: {
      display: "At least $28.2M",
      asOf: "November 2024",
      caveat:
        "Calculated from a $12M Series A and $16.2M of reported extensions; the company’s earlier seed amount was not disclosed.",
    },
    summary:
      "Retrofits heavy equipment so remote operators can supervise and switch among multiple semi-autonomous machines.",
    focus:
      "Teleo blends remote control with incremental autonomy for construction and mining. Operators handle complex portions of a job while repeatable actions run autonomously, producing operational data and a practical path toward greater autonomy.",
    products: [
      "Universal retrofit kit for mixed-brand heavy equipment",
      "Remote command center and operator interface",
      "Supervised Autonomy software and site connectivity",
      "Live video, operational feeds, and performance analytics",
    ],
    businessApproach:
      "Sells an integrated retrofit-and-software product to contractors, often through heavy-equipment dealer partners that provide installation, training, and support. Standard pricing is not public.",
    sources: [
      { label: "Website", url: "https://www.teleo.ai/" },
      { label: "Product", url: "https://www.teleo.ai/blog/announcing-teleos-series-a/" },
      {
        label: "Funding",
        url: "https://techcrunch.com/2024/11/21/teleo-wants-to-help-the-robotics-industry-reach-its-chatgpt-moment/",
      },
    ],
  },
  {
    id: "genesis-ai",
    name: "Genesis AI",
    initials: "GE",
    website: "https://www.genesis.ai/",
    founded: 2025,
    headquarters: "Palo Alto, U.S. and Paris, France",
    primaryCategory: "simulation-synthetic-data",
    secondaryCategories: ["Physics simulation", "Foundation models", "Real-world data"],
    funding: {
      display: "$105M",
      asOf: "July 2025",
      caveat: "Publicly disclosed seed financing announced at the company’s launch.",
    },
    summary:
      "Builds a robotics data engine that combines physics simulation, generative world modeling, and real-robot collection.",
    focus:
      "Genesis is developing a universal robotics foundation model and the data engine behind it. Its simulation stack is designed to run large numbers of repeatable trials and generate synthetic experience alongside real-world robot data.",
    products: [
      "Genesis World physics and robotics simulation stack",
      "GENE robotics foundation models",
      "Synthetic-data generation and systematic evaluation tools",
      "Dexterous hand and general-purpose robot systems",
    ],
    businessApproach:
      "The company operates as a full-stack physical-AI lab and is developing models, simulation infrastructure, and robots together. It has not publicly detailed licensing, access, or pricing for enterprise customers.",
    sources: [
      { label: "Website", url: "https://www.genesis.ai/" },
      {
        label: "Simulation",
        url: "https://www.genesis.ai/blog/the-role-of-simulation-in-scalable-robotics-genesis-world-10-and-the-path-forward",
      },
      {
        label: "Funding",
        url: "https://www.genesis.ai/press/genesis-ai-emerges-from-stealth-with-dollar105m-to-build-universal-robotics-found",
      },
    ],
  },
  {
    id: "duality-ai",
    name: "Duality AI",
    initials: "DU",
    website: "https://www.duality.ai/",
    founded: 2018,
    headquarters: "San Mateo, California, U.S.",
    primaryCategory: "simulation-synthetic-data",
    secondaryCategories: ["Digital twins", "Sensor simulation", "Evaluation"],
    funding: {
      display: "At least $12M",
      asOf: "January 2022",
      caveat:
        "Latest disclosed round was a $12M Series A; a reliable public cumulative total was not available.",
    },
    summary:
      "Provides the Falcon digital-twin platform for generating synthetic sensor data and testing robots and autonomous systems.",
    focus:
      "Duality models environments, sensors, and machines in high-fidelity digital twins. Teams use Falcon to train perception models, rehearse scenarios, and measure behavior before deploying physical systems.",
    products: [
      "FalconEditor for authoring digital twins and scenarios",
      "FalconSim runtime for robotics and sensor simulation",
      "FalconCloud for shared, scalable simulation workflows",
      "Synthetic datasets and custom digital-twin services",
    ],
    businessApproach:
      "Sells software and cloud-simulation licenses, including a $20-per-month non-commercial education tier, plus commercial team tiers, onboarding, and professional enablement. Commercial pricing is handled through sales.",
    sources: [
      { label: "Website", url: "https://www.duality.ai/" },
      { label: "Product", url: "https://www.duality.ai/product" },
      { label: "Company", url: "https://www.duality.ai/about-us" },
      {
        label: "Funding",
        url: "https://app.dealroom.co/companies/duality",
      },
    ],
  },
  {
    id: "parallel-domain",
    name: "Parallel Domain",
    initials: "PD",
    website: "https://paralleldomain.com/",
    founded: 2017,
    headquarters: "San Francisco, California, U.S.",
    primaryCategory: "simulation-synthetic-data",
    secondaryCategories: ["Sensor simulation", "Digital replicas", "Autonomy testing"],
    funding: {
      display: "Approx. $43.7M",
      asOf: "November 2022",
      caveat:
        "Cumulative total comes from company-data sources; the company directly disclosed its latest $30M Series B.",
    },
    summary:
      "Turns real capture logs into validated digital replicas for photorealistic camera, lidar, and radar simulation.",
    focus:
      "Parallel Domain reduces the sim-to-real gap for autonomous systems. Its pipeline reconstructs places from imperfect fleet data, quantifies replica fidelity, and produces deterministic sensor output for repeatable testing.",
    products: [
      "PD Replica for simulation-ready neural reconstructions",
      "PD Sim Python API for sensor and scenario simulation",
      "Camera, lidar, and radar output with annotations",
      "Automated sim-to-real gap reports",
    ],
    businessApproach:
      "Provides enterprise software and API access through demo-led sales to automotive, aerial, warehouse, robotics, and security teams. Pricing is not publicly listed.",
    sources: [
      { label: "Website", url: "https://paralleldomain.com/" },
      { label: "Product", url: "https://paralleldomain.com/product" },
      {
        label: "Funding",
        url: "https://paralleldomain.com/resources/parallel-domain-raises-30-million-series-b-to-super-train-ai",
      },
      {
        label: "Funding total",
        url: "https://www.cbinsights.com/company/parallel-domain",
      },
    ],
  },
  {
    id: "world-labs",
    name: "World Labs",
    initials: "WL",
    website: "https://www.worldlabs.ai/",
    founded: 2024,
    headquarters: "San Francisco, California, U.S.",
    primaryCategory: "simulation-synthetic-data",
    secondaryCategories: ["World models", "3D generation", "Spatial intelligence"],
    funding: {
      display: "$1.23B",
      asOf: "February 2026",
      caveat:
        "Calculated from $230M reported at the 2024 launch and a company-announced $1B round in 2026.",
    },
    summary:
      "Builds world models and the Marble product for generating persistent, exportable 3D environments from text, images, and video.",
    focus:
      "World Labs develops models that perceive, generate, and reason about three-dimensional space. While Marble initially serves creators and designers, the company explicitly identifies robotics as a target for its world-model research.",
    products: [
      "Marble for creating and editing persistent 3D worlds",
      "Text-, image-, video-, and layout-to-world generation",
      "High-quality mesh export and commercial-use workflows",
      "World-model APIs and enterprise plans",
    ],
    businessApproach:
      "Marble uses a credit-based subscription model with free, Standard, Pro, and Max tiers, top-up credits, and custom enterprise plans. Robotics use remains an emerging extension of the platform rather than its only market.",
    sources: [
      { label: "Website", url: "https://www.worldlabs.ai/about" },
      {
        label: "Product",
        url: "https://docs.worldlabs.ai/marble/support/account-billing",
      },
      {
        label: "Funding",
        url: "https://www.worldlabs.ai/blog/funding-2026",
      },
      {
        label: "Prior funding",
        url: "https://techcrunch.com/2024/09/13/fei-fei-lis-world-labs-comes-out-of-stealth-with-230m-in-funding/",
      },
    ],
  },
  {
    id: "foxglove",
    name: "Foxglove",
    initials: "FG",
    website: "https://foxglove.dev/",
    founded: 2021,
    headquarters: "San Francisco, California, U.S.",
    primaryCategory: "data-infrastructure-evaluation",
    secondaryCategories: ["Observability", "Data management", "Visualization"],
    funding: {
      display: "Approx. $58.8M",
      asOf: "November 2025",
      caveat:
        "Cumulative total comes from CB Insights; the company directly disclosed its latest $40M Series B.",
    },
    summary:
      "Provides a multimodal data platform for recording, visualizing, searching, and evaluating robotics and autonomy data.",
    focus:
      "Foxglove gives physical-AI teams one environment for live and recorded sensor data. It supports the engineering loop from logging and visualization through issue discovery, evaluation, and redeployment.",
    products: [
      "Foxglove visualization and robotics observability workspace",
      "Cloud data management, search, and team collaboration",
      "MCAP open-source multimodal log format",
      "SDKs, device connectivity, and evaluation workflows",
    ],
    businessApproach:
      "Offers a free individual plan and paid organization plans priced by user and data usage, with enterprise controls and support for larger teams.",
    sources: [
      { label: "Website", url: "https://foxglove.dev/" },
      { label: "Pricing", url: "https://foxglove.dev/pricing" },
      { label: "Funding", url: "https://foxglove.dev/blog/foxglove-series-b" },
      {
        label: "Funding total",
        url: "https://www.cbinsights.com/company/foxglove-studio",
      },
    ],
  },
  {
    id: "roboto",
    name: "Roboto",
    initials: "RO",
    website: "https://www.roboto.ai/",
    founded: 2022,
    headquarters: "Seattle, Washington, U.S.",
    primaryCategory: "data-infrastructure-evaluation",
    secondaryCategories: ["Log analytics", "Failure analysis", "Data search"],
    funding: {
      display: "$4.8M",
      asOf: "April 2023",
      caveat: "Publicly disclosed seed financing; no later priced round was found.",
    },
    summary:
      "Ingests robotics logs and automates analysis so teams can search edge cases, diagnose failures, and improve fleet reliability.",
    focus:
      "Roboto is purpose-built for high-volume, multimodal machine logs. It normalizes common robotics formats and uses automated analysis to move teams from a field failure to the relevant time window and evidence.",
    products: [
      "Hosted storage and ingestion for robotics log formats",
      "Natural-language and structured search across sensor data",
      "Automated event detection and failure analysis",
      "Dashboards, notebooks, and collaboration tools",
    ],
    businessApproach:
      "Sells a hosted analytics platform to robotics and autonomous-system teams, supported by enterprise onboarding and case-specific integrations. Pricing is not publicly disclosed.",
    sources: [
      { label: "Website", url: "https://www.roboto.ai/" },
      { label: "Docs", url: "https://docs.roboto.ai/" },
      {
        label: "Funding",
        url: "https://www.roboto.ai/blog/roboto-raises-seed-funding-4-8m/",
      },
    ],
  },
  {
    id: "formant",
    name: "Formant",
    initials: "FO",
    website: "https://www.formant.ai/",
    founded: 2017,
    headquarters: "San Francisco, California, U.S.",
    primaryCategory: "data-infrastructure-evaluation",
    secondaryCategories: ["Fleet operations", "Teleoperation", "Incident management"],
    funding: {
      display: "At least $45M",
      asOf: "October 2023",
      caveat:
        "Calculated from publicly reported $6M seed, $18M Series A, and $21M follow-on round.",
    },
    summary:
      "Operates a hardware-agnostic command, data, and incident layer for heterogeneous fleets of robots in production.",
    focus:
      "Formant sits between robot hardware, autonomy software, and enterprise operations. It centralizes telemetry, intervention, incident response, and performance analysis across many robot types and sites.",
    products: [
      "Fleet monitoring and mission-control workspace",
      "Low-latency teleoperation and remote intervention",
      "Telemetry, video, analytics, and incident workflows",
      "F3 AI-assisted operational analysis",
    ],
    businessApproach:
      "Provides enterprise software through discovery-led sales, starting with a production use case and expanding across fleets and sites. Current standardized pricing is not public.",
    sources: [
      { label: "Website", url: "https://www.formant.ai/" },
      {
        label: "Product",
        url: "https://formant.ai/blog/a-symphony-of-ai-in-robot-operations",
      },
      {
        label: "Funding",
        url: "https://techcrunch.com/2023/10/11/formant-is-managing-data-so-robotics-companies-dont-have-to/",
      },
      {
        label: "Origin",
        url: "https://techcrunch.com/2018/12/18/formant-robotics/",
      },
    ],
  },
  {
    id: "viam",
    name: "Viam",
    initials: "VI",
    website: "https://www.viam.com/",
    founded: 2020,
    headquarters: "New York City, New York, U.S.",
    primaryCategory: "data-infrastructure-evaluation",
    secondaryCategories: ["Developer platform", "Fleet management", "Data capture"],
    funding: {
      display: "$117M",
      asOf: "March 2025",
      caveat: "Company-disclosed cumulative equity funding after its Series C.",
    },
    summary:
      "Offers an open software platform for building, controlling, collecting data from, and scaling robots and other smart machines.",
    focus:
      "Viam applies modern software-development patterns to physical systems. Teams configure modular hardware, run application logic, capture sensor data, deploy updates, and manage fleets through one platform.",
    products: [
      "Open-source robot runtime and modular component registry",
      "Cloud fleet management, remote control, and deployment",
      "Sensor-data capture, sync, querying, and ML pipelines",
      "APIs and SDKs in common programming languages",
    ],
    businessApproach:
      "Uses an open-source and self-service entry point, then charges for cloud data, compute, fleet services, and enterprise needs. Teams can start with a free account and scale usage over time.",
    sources: [
      { label: "Website", url: "https://www.viam.com/about" },
      { label: "Platform", url: "https://www.viam.com/platform/overview" },
      {
        label: "Funding",
        url: "https://www.viam.com/press-releases/viam-announces-30-million-series-c",
      },
    ],
  },
  {
    id: "inorbit",
    name: "InOrbit",
    initials: "IO",
    website: "https://www.inorbit.ai/",
    founded: 2017,
    headquarters: "Mountain View, California, U.S.",
    primaryCategory: "data-infrastructure-evaluation",
    secondaryCategories: ["Orchestration", "Fleet operations", "Remote intervention"],
    funding: {
      display: "Approx. $12.8M",
      asOf: "September 2025",
      caveat:
        "Cumulative total and $10M Series A amount come from CB Insights; the company announcement did not disclose the round size.",
    },
    summary:
      "Provides robot orchestration software for monitoring, coordinating, optimizing, and intervening across mixed fleets.",
    focus:
      "InOrbit treats robot operations as an enterprise workflow. Its platform connects cloud, edge, and robot data to coordinate fleets, surface operational insights, and let people intervene when autonomy needs help.",
    products: [
      "InOrbit Space Intelligence orchestration platform",
      "Fleet monitoring, workflows, and performance analytics",
      "Multi-vendor interoperability and enterprise integrations",
      "Remote assistance and teleoperation controls",
    ],
    businessApproach:
      "Sells a robot-agnostic enterprise platform to operators in manufacturing, logistics, retail, and hospitality, supported by integrations and deployment services. Pricing is not publicly listed.",
    sources: [
      { label: "Website", url: "https://www.inorbit.ai/" },
      { label: "Product", url: "https://www.inorbit.ai/product" },
      {
        label: "Funding",
        url: "https://www.inorbit.ai/press/series-a-investment",
      },
      {
        label: "Funding total",
        url: "https://www.cbinsights.com/company/inorbit",
      },
    ],
  },
];
