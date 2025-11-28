import { Cloud, Bot, Database, AlertCircle, Megaphone, Rocket, Briefcase, TrendingUp as GrowthIcon, Building2, CreditCard, ShoppingCart, Pill, BarChart3, GraduationCap, Factory, Plane, Home, TrendingUp, Landmark, Shield, Cpu, Users, Globe, Smartphone, Video, Zap, Store, Heart, Car, Package, Wrench, Droplet, Truck, Building, Palette, Radio, Scale, Crown, Network, Server } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// ============================================
// SOLUTIONS DATA - CENTRALIZED
// ============================================

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription?: string;
  outcomes: string[];
  tools: string | string[];
  color?: string;
  iconBg?: string;
  page: string;
  deliverables?: string[];
}

export const SOLUTIONS: Solution[] = [
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure Modernization',
    description: 'Re-architect legacy systems to meet modern scalability, cost-efficiency, and security benchmarks.',
    longDescription: 'Our cloud modernization practice transforms legacy infrastructure into agile, cost-efficient, and secure cloud-native architectures. We specialize in multi-cloud strategies, containerization, and infrastructure automation that delivers measurable business outcomes.',
    outcomes: [
      '30-60% reduction in cloud expenditure within 90 days',
      'Zero-downtime deployments and automated CI/CD pipelines',
      'Predictable performance under high-load environments',
      'Migration across AWS, GCP, Azure, VMware, and hybrid setups',
      'Auto-scaling infrastructure that grows with demand',
      'Comprehensive disaster recovery and backup strategies',
    ],
    tools: ['Terraform', 'Ansible', 'Kubernetes', 'Docker', 'AWS', 'GCP', 'Azure', 'Helm', 'Jenkins', 'GitLab', 'Prometheus', 'Grafana'],
    color: 'from-blue-500/10 to-cyan-500/10',
    iconBg: 'bg-blue-500/10',
    page: '/solutions/cloud-infrastructure',
    deliverables: [
      'Infrastructure audit and cost analysis report',
      'Cloud architecture blueprint and migration roadmap',
      'Automated CI/CD pipeline implementation',
      'Infrastructure as Code (IaC) templates',
      'Security hardening and compliance documentation',
      'Team training and knowledge transfer sessions',
      'Performance monitoring and alerting setup',
      'Multi-cloud cost optimization framework',
      'Disaster recovery playbooks and runbooks',
    ],
  },
  {
    icon: Bot,
    title: 'AI + Automation Engineering',
    description: 'Design intelligent automation systems that run 24/7, replacing repetitive manual workflows with machine-driven precision.',
    longDescription: 'We build intelligent automation frameworks that integrate seamlessly across your organization—from marketing operations to financial workflows. Our automation systems leverage AI/ML capabilities to continuously improve accuracy and efficiency.',
    outcomes: [
      'Up to 60% workload reduction across teams',
      'Improved accuracy to 99%+ through ML-driven workflows',
      'ROI realization within the first operational quarter',
      'Integration across marketing, finance, and operations',
      '24/7 automated monitoring and alerting',
      'Reduced human error and increased consistency',
    ],
    tools: ['Python', 'Apache Airflow', 'Kafka', 'TensorFlow', 'PyTorch', 'OpenAI', 'n8n', 'Zapier', 'Make', 'Redis', 'Slack', 'GitHub'],
    color: 'from-purple-500/10 to-pink-500/10',
    iconBg: 'bg-purple-500/10',
    page: '/solutions/ai-automation',
    deliverables: [
      'Process mapping and automation opportunity analysis',
      'Custom automation workflow design and architecture',
      'AI/ML model development and integration',
      'Automated reporting and alerting systems',
      'Integration with existing tools and platforms',
      'Workflow orchestration and monitoring dashboards',
      'API development and microservices architecture',
      'Real-time data processing pipelines',
      'Ongoing optimization and maintenance plans',
    ],
  },
  {
    icon: Database,
    title: 'Revenue & Data Infrastructure',
    description: 'Build unified data ecosystems that connect marketing, finance, and analytics platforms into a single source of truth.',
    longDescription: 'We architect enterprise data platforms that unify fragmented data sources, enable real-time analytics, and power data-driven decision making. Our solutions transform raw data into strategic business intelligence.',
    outcomes: [
      'Full-funnel attribution accuracy (95-99%)',
      'Real-time dashboards across BI and executive layers',
      'Automated revenue reporting and forecasting models',
      'Unified data visibility across all departments',
      'Reduced time-to-insight from weeks to minutes',
      'Data governance and quality assurance frameworks',
    ],
    tools: ['Snowflake', 'BigQuery', 'Redshift', 'Amplitude', 'GA4', 'GTM', 'dbt', 'Fivetran', 'Looker', 'Tableau', 'Power BI', 'Segment'],
    color: 'from-emerald-500/10 to-teal-500/10',
    iconBg: 'bg-emerald-500/10',
    page: '/solutions/data-infrastructure',
    deliverables: [
      'Data infrastructure assessment and strategy roadmap',
      'ETL/ELT pipeline development and automation',
      'Data warehouse architecture and implementation',
      'BI dashboard and reporting suite deployment',
      'Data quality and governance framework setup',
      'Attribution modeling and revenue analytics platform',
      'Customer data platform (CDP) integration',
      'Real-time analytics and monitoring systems',
      'Data cataloging and documentation',
    ],
  },
  {
    icon: AlertCircle,
    title: 'Emergency Technical Intervention',
    description: 'Rapid-response engineering teams for crisis situations—migrations, recovery, and stabilization when failure isn\'t an option.',
    longDescription: 'When critical systems fail or urgent migrations are required, our emergency response teams deploy within hours to stabilize, recover, and remediate. We specialize in high-stakes technical interventions with zero-tolerance for data loss.',
    outcomes: [
      '24-72 hour recovery window for critical failures',
      'Zero-data-loss migrations',
      'Immediate cost containment and risk stabilization',
      'Incident documentation and post-mortem remediation',
      'Business continuity restoration',
      'Critical infrastructure stabilization',
    ],
    tools: ['Multi-cloud platforms', 'Disaster recovery systems', 'Monitoring tools', 'Backup solutions'],
    color: 'from-red-500/10 to-orange-500/10',
    iconBg: 'bg-red-500/10',
    page: '/solutions/emergency-intervention',
    deliverables: [
      'Emergency response and immediate triage',
      'Root cause analysis and incident documentation',
      'Recovery execution and data validation',
      'Post-incident remediation roadmap',
      'Business continuity planning',
      'System stabilization and monitoring setup',
      'Knowledge transfer and handover documentation',
    ],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing Solutions',
    description: 'Comprehensive digital marketing infrastructure and strategy for enterprise growth and market expansion.',
    longDescription: 'We build comprehensive digital marketing infrastructures that combine technical excellence with strategic marketing expertise. Our solutions encompass SEO, social media, marketing automation, and strategic consulting to drive measurable business growth.',
    outcomes: [
      'SEO optimization for all search engines',
      'Social media marketing & platform setup',
      'Marketing automation infrastructure (IaaS)',
      'Strategic consulting & campaign management',
      'Multi-channel attribution tracking',
      'ROI-focused performance marketing',
    ],
    tools: ['Google Analytics', 'SEMrush', 'HubSpot', 'Social Platforms', 'GTM', 'GA4', 'Meta Business Suite'],
    color: 'from-indigo-500/10 to-violet-500/10',
    iconBg: 'bg-indigo-500/10',
    page: '/solutions/digital-marketing',
    deliverables: [
      'Digital marketing strategy and roadmap',
      'SEO audit and optimization implementation',
      'Social media presence setup and management',
      'Marketing automation platform configuration',
      'Content strategy and calendar development',
      'Performance tracking and analytics setup',
      'Conversion optimization and A/B testing framework',
      'Multi-channel campaign management',
    ],
  },
  {
    icon: Rocket,
    title: 'Emerging Technologies',
    description: 'Stay ahead with cutting-edge blockchain, Web3, IoT, AR/VR, and quantum-ready solutions.',
    longDescription: 'We help organizations navigate and adopt emerging technologies that will define the future. From blockchain and Web3 to IoT, AR/VR, and quantum-ready infrastructure, we provide strategic implementation and integration services.',
    outcomes: [
      'Blockchain & Web3 implementation',
      'IoT device ecosystems & edge computing',
      'AR/VR & metaverse integration',
      'Future-proof quantum-safe infrastructure',
      'Innovation labs and proof-of-concept development',
      'Technology adoption roadmaps',
    ],
    tools: ['Ethereum', 'IoT platforms', 'Unity', 'Edge computing', 'Quantum frameworks', 'Web3 tools'],
    color: 'from-cyan-500/10 to-blue-500/10',
    iconBg: 'bg-cyan-500/10',
    page: '/solutions/emerging-technologies',
    deliverables: [
      'Technology assessment and feasibility study',
      'Proof-of-concept development',
      'Blockchain smart contract development',
      'IoT architecture and device integration',
      'AR/VR experience development',
      'Innovation strategy and roadmap',
      'Technology training and enablement',
    ],
  },
  {
    icon: Briefcase,
    title: 'Business Process Solutions (BPS)',
    description: 'Streamline operations with process optimization, automation, and strategic consulting solutions.',
    longDescription: 'We transform business operations through comprehensive process optimization, intelligent automation, and strategic consulting. Our BPS practice delivers measurable improvements in efficiency, cost reduction, and operational excellence.',
    outcomes: [
      '40% average cost reduction',
      '60% time savings through automation',
      'Process mining & optimization',
      'Change management & business consulting',
      'Workflow digitization and automation',
      'Performance metrics and KPI tracking',
    ],
    tools: ['RPA platforms', 'Process mining', 'Analytics tools', 'Workflow engines', 'Business intelligence'],
    color: 'from-amber-500/10 to-yellow-500/10',
    iconBg: 'bg-amber-500/10',
    page: '/solutions/business-process',
    deliverables: [
      'Business process assessment and mapping',
      'Process optimization recommendations',
      'RPA implementation and automation',
      'Change management strategy and execution',
      'Performance dashboards and KPI tracking',
      'Process documentation and standardization',
      'Continuous improvement framework',
    ],
  },
  {
    icon: GrowthIcon,
    title: 'Growth Solutions',
    description: 'Strategic growth planning, market expansion, and go-to-market execution for enterprise scale.',
    longDescription: 'Our Growth Solutions practice delivers comprehensive market expansion and go-to-market strategies for enterprises seeking to scale globally. We combine deep market intelligence, strategic planning, and execution excellence to drive sustainable growth across new markets and regions.',
    outcomes: [
      'Go-to-Market Strategy & Execution',
      'Global market expansion planning',
      'Growth diagnostic & gap analysis',
      'Founder & leadership alignment',
      'New market entry strategies',
      'Market intelligence & competitive analysis',
      'Team capability assessments',
      'Measurable revenue growth acceleration',
    ],
    tools: ['Market research platforms', 'Analytics tools', 'CRM systems', 'Business intelligence', 'Strategic planning frameworks'],
    color: 'from-green-500/10 to-emerald-500/10',
    iconBg: 'bg-green-500/10',
    page: '/solutions/growth',
    deliverables: [
      'Go-to-Market strategy and playbook',
      'Market entry and expansion roadmap',
      'Growth diagnostic report and recommendations',
      'Leadership alignment workshops',
      'Market intelligence and competitor analysis',
      'Capability assessment and development plan',
      'Regional expansion execution support',
      'Performance tracking and optimization framework',
    ],
  },
];

// Alias for backward compatibility until refactor is complete
export const SERVICES = SOLUTIONS;

// ============================================
// CASE STUDIES DATA
// ============================================

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  slug: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Global Cloud Migration & Cost Optimization',
    client: 'Fortune 500 Retailer',
    industry: 'E-Commerce & Retail',
    challenge: 'Legacy on-premise infrastructure was causing scalability issues during peak seasons and incurring high maintenance costs.',
    solution: 'Executed a zero-downtime migration to AWS, implemented auto-scaling groups, and optimized resource utilization using Terraform and Kubernetes.',
    results: [
      '40% reduction in annual infrastructure costs',
      '99.99% uptime during Black Friday sales',
      '50% faster deployment cycles',
    ],
    technologies: ['AWS', 'Terraform', 'Kubernetes', 'Docker'],
    slug: 'global-cloud-migration',
  },
  {
    id: '2',
    title: 'AI-Driven Customer Support Automation',
    client: 'Leading Fintech Startup',
    industry: 'Fintech & Banking',
    challenge: 'High volume of customer support queries was overwhelming the support team, leading to slow response times.',
    solution: 'Developed and deployed an AI-powered chatbot using OpenAI API and Python, integrated with their existing CRM.',
    results: [
      '70% of queries resolved automatically',
      'Response time reduced from hours to seconds',
      '30% increase in customer satisfaction scores',
    ],
    technologies: ['Python', 'OpenAI', 'React', 'Node.js'],
    slug: 'ai-customer-support',
  },
  {
    id: '3',
    title: 'Data Warehouse Modernization',
    client: 'Healthcare Provider Network',
    industry: 'Healthcare & Life Sciences',
    challenge: 'Fragmented patient data across multiple systems made it difficult to generate unified insights and reports.',
    solution: 'Built a centralized data warehouse on Snowflake, with automated ETL pipelines using Fivetran and dbt.',
    results: [
      'Unified view of patient data',
      'Real-time reporting capabilities',
      'HIPAA compliant data architecture',
    ],
    technologies: ['Snowflake', 'Fivetran', 'dbt', 'Looker'],
    slug: 'data-warehouse-modernization',
  },
];

// ============================================
// EXPANDED INDUSTRIES DATA - COMPREHENSIVE LIST
// ============================================

export interface Industry {
  icon: LucideIcon;
  name: string;
  slug: string;
  color: string;
  description: string;
  averageEngagement?: string;
  challenges?: string[];
  solutions?: string[];
  caseStudies?: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    icon: Building2,
    name: 'SaaS & Software Platforms',
    slug: 'saas-software',
    color: '#00D3A9',
    description: 'Enterprise software and platform modernization for scalable, secure SaaS solutions.',
    averageEngagement: '$150K - $500K',
    challenges: [
      'Infrastructure scalability and performance',
      'Multi-tenant architecture complexity',
      'Security and compliance requirements',
      'Customer data management and privacy',
    ],
    solutions: [
      'Cloud-native architecture migration',
      'Microservices and API development',
      'DevOps and CI/CD automation',
      'Security hardening and compliance',
    ],
  },
  {
    icon: CreditCard,
    name: 'Fintech & Banking',
    slug: 'fintech-banking',
    color: '#00D3A9',
    description: 'Financial services and payment infrastructure with enterprise-grade security.',
    averageEngagement: '$200K - $750K',
    challenges: [
      'Regulatory compliance (PCI-DSS, SOC 2)',
      'Real-time transaction processing',
      'Legacy system modernization',
      'Fraud detection and security',
    ],
    solutions: [
      'Secure payment gateway integration',
      'Real-time fraud detection systems',
      'Regulatory compliance frameworks',
      'Core banking modernization',
    ],
  },
  {
    icon: ShoppingCart,
    name: 'E-Commerce & Retail',
    slug: 'ecommerce-retail',
    color: '#00D3A9',
    description: 'Retail technology and commerce platforms for omnichannel experiences.',
    averageEngagement: '$100K - $400K',
    challenges: [
      'Peak traffic handling and scalability',
      'Inventory management across channels',
      'Personalization and customer experience',
      'Payment security and checkout optimization',
    ],
    solutions: [
      'Headless commerce architecture',
      'Inventory and order management systems',
      'AI-powered personalization',
      'Performance optimization and CDN',
    ],
  },
  {
    icon: Pill,
    name: 'Healthcare & Life Sciences',
    slug: 'healthcare-lifesciences',
    color: '#00D3A9',
    description: 'Healthcare IT systems and pharmaceutical technology solutions.',
    averageEngagement: '$250K - $1M',
    challenges: [
      'HIPAA compliance and data security',
      'EHR/EMR system integration',
      'Patient data privacy and consent',
      'Clinical trial data management',
    ],
    solutions: [
      'HIPAA-compliant cloud infrastructure',
      'Healthcare data integration platforms',
      'Telemedicine and patient portals',
      'Clinical analytics and reporting',
    ],
  },
  {
    icon: BarChart3,
    name: 'Analytics & AI Startups',
    slug: 'analytics-ai',
    color: '#00D3A9',
    description: 'Data analytics and AI-driven platforms for intelligent insights.',
    averageEngagement: '$120K - $450K',
    challenges: [
      'Big data processing and storage',
      'ML model deployment and scaling',
      'Real-time data pipeline management',
      'Data quality and governance',
    ],
    solutions: [
      'Scalable data infrastructure',
      'MLOps and model deployment',
      'Real-time streaming analytics',
      'Data quality frameworks',
    ],
  },
  {
    icon: GraduationCap,
    name: 'Education Technology',
    slug: 'edtech',
    color: '#00D3A9',
    description: 'EdTech platforms and learning management systems.',
    averageEngagement: '$80K - $300K',
    challenges: [
      'Student data privacy and protection',
      'Scalable learning platforms',
      'Content delivery and streaming',
      'Assessment and grading automation',
    ],
    solutions: [
      'Learning management systems',
      'Video streaming infrastructure',
      'Assessment automation platforms',
      'Student analytics and insights',
    ],
  },
  {
    icon: Factory,
    name: 'Manufacturing & Industrial',
    slug: 'manufacturing-industrial',
    color: '#00D3A9',
    description: 'Industrial IoT and smart manufacturing solutions.',
    averageEngagement: '$200K - $800K',
    challenges: [
      'Legacy system integration',
      'IoT device management and monitoring',
      'Supply chain visibility',
      'Predictive maintenance',
    ],
    solutions: [
      'Industrial IoT platforms',
      'Predictive maintenance systems',
      'Supply chain optimization',
      'Digital twin implementation',
    ],
  },
  {
    icon: Plane,
    name: 'Travel & Hospitality',
    slug: 'travel-hospitality',
    color: '#00D3A9',
    description: 'Travel tech and hospitality management systems.',
    averageEngagement: '$100K - $400K',
    challenges: [
      'Booking and reservation systems',
      'Dynamic pricing optimization',
      'Customer experience personalization',
      'Multi-channel distribution',
    ],
    solutions: [
      'Booking engine optimization',
      'Revenue management systems',
      'Customer loyalty platforms',
      'Channel manager integration',
    ],
  },
  {
    icon: Home,
    name: 'Real Estate & PropTech',
    slug: 'real-estate-proptech',
    color: '#00D3A9',
    description: 'Property technology and real estate platforms.',
    averageEngagement: '$120K - $500K',
    challenges: [
      'Property listing and search optimization',
      'Virtual tours and 3D visualization',
      'Transaction management',
      'Market analytics and insights',
    ],
    solutions: [
      'Property management platforms',
      'Virtual reality property tours',
      'Transaction automation',
      'Market intelligence systems',
    ],
  },
  {
    icon: TrendingUp,
    name: 'Investment & Asset Management',
    slug: 'investment-asset-management',
    color: '#00D3A9',
    description: 'Wealth management and investment platforms.',
    averageEngagement: '$300K - $1.5M',
    challenges: [
      'Regulatory compliance',
      'Portfolio management automation',
      'Risk analytics and reporting',
      'Client portal and reporting',
    ],
    solutions: [
      'Portfolio management systems',
      'Risk analytics platforms',
      'Regulatory reporting automation',
      'Client engagement portals',
    ],
  },
  {
    icon: Landmark,
    name: 'Insurance & Insurtech',
    slug: 'insurance-insurtech',
    color: '#00D3A9',
    description: 'Insurance technology and risk management platforms.',
    averageEngagement: '$180K - $700K',
    challenges: [
      'Claims processing automation',
      'Risk assessment and underwriting',
      'Policy management systems',
      'Fraud detection',
    ],
    solutions: [
      'Claims automation platforms',
      'AI-powered underwriting',
      'Policy administration systems',
      'Fraud detection and prevention',
    ],
  },
  {
    icon: Shield,
    name: 'Cybersecurity',
    slug: 'cybersecurity',
    color: '#00D3A9',
    description: 'Security platforms and threat intelligence systems.',
    averageEngagement: '$200K - $900K',
    challenges: [
      'Threat detection and response',
      'Security information management',
      'Compliance and audit readiness',
      'Incident response automation',
    ],
    solutions: [
      'SIEM and threat intelligence',
      'Security automation and orchestration',
      'Compliance management platforms',
      'Zero-trust architecture',
    ],
  },
  {
    icon: Cpu,
    name: 'Telecommunications',
    slug: 'telecommunications',
    color: '#00D3A9',
    description: 'Telecom infrastructure and 5G network systems.',
    averageEngagement: '$250K - $1.2M',
    challenges: [
      'Network modernization and 5G',
      'Billing and revenue management',
      'Customer experience optimization',
      'Network security and monitoring',
    ],
    solutions: [
      '5G infrastructure deployment',
      'Billing system modernization',
      'Network analytics and optimization',
      'Customer engagement platforms',
    ],
  },
  {
    icon: Users,
    name: 'Enterprise SaaS',
    slug: 'enterprise-saas',
    color: '#00D3A9',
    description: 'B2B enterprise software solutions and platforms.',
    averageEngagement: '$180K - $600K',
    challenges: [
      'Enterprise integration complexity',
      'Multi-tenant scalability',
      'Advanced security requirements',
      'Compliance and data governance',
    ],
    solutions: [
      'Enterprise API integration',
      'Scalable multi-tenant architecture',
      'Enterprise security frameworks',
      'Compliance automation',
    ],
  },
  {
    icon: Globe,
    name: 'Media & Entertainment',
    slug: 'media-entertainment',
    color: '#00D3A9',
    description: 'Digital media platforms and content delivery networks.',
    averageEngagement: '$150K - $600K',
    challenges: [
      'Content delivery and streaming',
      'Digital rights management',
      'Audience analytics and engagement',
      'Monetization optimization',
    ],
    solutions: [
      'Video streaming infrastructure',
      'Content management systems',
      'Audience analytics platforms',
      'Ad tech and monetization',
    ],
  },
  {
    icon: Smartphone,
    name: 'Mobile & App Development',
    slug: 'mobile-app-dev',
    color: '#00D3A9',
    description: 'Native and cross-platform mobile application development.',
    averageEngagement: '$100K - $400K',
    challenges: [
      'Cross-platform compatibility',
      'App performance optimization',
      'Push notification infrastructure',
      'App store optimization',
    ],
    solutions: [
      'Native and hybrid app development',
      'Mobile backend infrastructure',
      'Push notification systems',
      'App analytics and optimization',
    ],
  },
  {
    icon: Video,
    name: 'Gaming & Esports',
    slug: 'gaming-esports',
    color: '#00D3A9',
    description: 'Gaming platforms and esports infrastructure.',
    averageEngagement: '$120K - $500K',
    challenges: [
      'Real-time multiplayer infrastructure',
      'Game analytics and monetization',
      'Player engagement and retention',
      'Anti-cheat and security',
    ],
    solutions: [
      'Multiplayer backend infrastructure',
      'Game analytics platforms',
      'Player engagement systems',
      'Security and anti-cheat solutions',
    ],
  },
  {
    icon: Zap,
    name: 'Energy & Utilities',
    slug: 'energy-utilities',
    color: '#00D3A9',
    description: 'Smart grid and energy management systems.',
    averageEngagement: '$200K - $800K',
    challenges: [
      'Smart meter data management',
      'Grid optimization and monitoring',
      'Renewable energy integration',
      'Customer billing and analytics',
    ],
    solutions: [
      'Smart grid infrastructure',
      'Energy management systems',
      'Renewable energy platforms',
      'Customer engagement portals',
    ],
  },
  {
    icon: Store,
    name: 'Retail Technology',
    slug: 'retail-technology',
    color: '#00D3A9',
    description: 'Point of sale and retail management systems.',
    averageEngagement: '$100K - $400K',
    challenges: [
      'POS system modernization',
      'Inventory management',
      'Customer loyalty programs',
      'Omnichannel retail',
    ],
    solutions: [
      'Modern POS systems',
      'Inventory optimization',
      'Loyalty and rewards platforms',
      'Omnichannel integration',
    ],
  },
  {
    icon: Heart,
    name: 'Wellness & Fitness',
    slug: 'wellness-fitness',
    color: '#00D3A9',
    description: 'Health and wellness technology platforms.',
    averageEngagement: '$80K - $300K',
    challenges: [
      'Wearable device integration',
      'Health data tracking and analytics',
      'User engagement and motivation',
      'Privacy and data security',
    ],
    solutions: [
      'Fitness tracking platforms',
      'Health data integration',
      'Gamification and engagement',
      'Secure health data management',
    ],
  },
  {
    icon: Car,
    name: 'Automotive & Mobility',
    slug: 'automotive-mobility',
    color: '#00D3A9',
    description: 'Connected vehicle and mobility platforms.',
    averageEngagement: '$180K - $700K',
    challenges: [
      'Connected vehicle data management',
      'Fleet management and telematics',
      'Autonomous vehicle systems',
      'Mobility as a Service (MaaS)',
    ],
    solutions: [
      'Telematics and fleet management',
      'Connected car platforms',
      'Mobility service platforms',
      'Vehicle data analytics',
    ],
  },
  {
    icon: Package,
    name: 'Logistics & Supply Chain',
    slug: 'logistics-supply-chain',
    color: '#00D3A9',
    description: 'Supply chain optimization and logistics platforms.',
    averageEngagement: '$150K - $600K',
    challenges: [
      'Real-time tracking and visibility',
      'Route optimization',
      'Warehouse management',
      'Last-mile delivery optimization',
    ],
    solutions: [
      'Supply chain visibility platforms',
      'Route optimization systems',
      'Warehouse management systems',
      'Last-mile delivery solutions',
    ],
  },
  {
    icon: Wrench,
    name: 'Professional Services',
    slug: 'professional-services',
    color: '#00D3A9',
    description: 'Service delivery and project management platforms.',
    averageEngagement: '$100K - $400K',
    challenges: [
      'Resource management and scheduling',
      'Project tracking and billing',
      'Client collaboration',
      'Time and expense tracking',
    ],
    solutions: [
      'Professional services automation',
      'Project management platforms',
      'Client portals and collaboration',
      'Billing and time tracking systems',
    ],
  },
  {
    icon: Droplet,
    name: 'Agriculture & AgTech',
    slug: 'agriculture-agtech',
    color: '#00D3A9',
    description: 'Agricultural technology and farm management systems.',
    averageEngagement: '$120K - $500K',
    challenges: [
      'Precision farming and IoT',
      'Crop monitoring and analytics',
      'Supply chain traceability',
      'Weather and climate data integration',
    ],
    solutions: [
      'Precision agriculture platforms',
      'Crop monitoring systems',
      'Farm management software',
      'Agricultural analytics',
    ],
  },
  {
    icon: Truck,
    name: 'Transportation & Freight',
    slug: 'transportation-freight',
    color: '#00D3A9',
    description: 'Freight management and transportation logistics.',
    averageEngagement: '$150K - $600K',
    challenges: [
      'Load optimization and matching',
      'Real-time tracking and compliance',
      'Driver management',
      'Rate optimization',
    ],
    solutions: [
      'Transportation management systems',
      'Freight matching platforms',
      'Driver and fleet management',
      'Rate optimization engines',
    ],
  },
  {
    icon: Building,
    name: 'Construction & Engineering',
    slug: 'construction-engineering',
    color: '#00D3A9',
    description: 'Construction project management and engineering software.',
    averageEngagement: '$180K - $700K',
    challenges: [
      'Project management and collaboration',
      'BIM and 3D modeling integration',
      'Resource and equipment tracking',
      'Safety and compliance management',
    ],
    solutions: [
      'Construction project management',
      'BIM integration and collaboration',
      'Resource tracking systems',
      'Safety management platforms',
    ],
  },
  {
    icon: Palette,
    name: 'Creative & Design',
    slug: 'creative-design',
    color: '#00D3A9',
    description: 'Creative collaboration and design workflow platforms.',
    averageEngagement: '$80K - $300K',
    challenges: [
      'Creative asset management',
      'Collaboration and version control',
      'Client review and approval',
      'Project workflow automation',
    ],
    solutions: [
      'Digital asset management',
      'Creative collaboration platforms',
      'Client review and approval systems',
      'Workflow automation',
    ],
  },
  {
    icon: Radio,
    name: 'Broadcasting & Streaming',
    slug: 'broadcasting-streaming',
    color: '#00D3A9',
    description: 'Live streaming and broadcast technology platforms.',
    averageEngagement: '$150K - $600K',
    challenges: [
      'Live streaming infrastructure',
      'Content delivery and CDN',
      'Audience analytics',
      'Monetization and advertising',
    ],
    solutions: [
      'Live streaming platforms',
      'Video CDN optimization',
      'Audience analytics and engagement',
      'Ad insertion and monetization',
    ],
  },
  {
    icon: Scale,
    name: 'Legal Technology',
    slug: 'legal-tech',
    color: '#00D3A9',
    description: 'Legal practice management and compliance platforms.',
    averageEngagement: '$120K - $500K',
    challenges: [
      'Case and matter management',
      'Document automation',
      'Billing and time tracking',
      'Compliance and regulatory tracking',
    ],
    solutions: [
      'Practice management systems',
      'Legal document automation',
      'Billing and accounting platforms',
      'Compliance management tools',
    ],
  },
  {
    icon: Crown,
    name: 'Luxury & Premium Brands',
    slug: 'luxury-premium',
    color: '#00D3A9',
    description: 'Premium brand e-commerce and customer experience.',
    averageEngagement: '$150K - $600K',
    challenges: [
      'Exclusive customer experiences',
      'Brand protection and authenticity',
      'Personalized shopping journeys',
      'VIP customer management',
    ],
    solutions: [
      'Luxury e-commerce platforms',
      'Personalization engines',
      'VIP customer portals',
      'Brand protection systems',
    ],
  },
  {
    icon: Network,
    name: 'Social Networking',
    slug: 'social-networking',
    color: '#00D3A9',
    description: 'Social platforms and community engagement systems.',
    averageEngagement: '$120K - $500K',
    challenges: [
      'Scalable social graph infrastructure',
      'Real-time feeds and notifications',
      'Content moderation',
      'User engagement and retention',
    ],
    solutions: [
      'Social platform infrastructure',
      'Real-time notification systems',
      'AI-powered content moderation',
      'Engagement analytics',
    ],
  },
  {
    icon: Server,
    name: 'Data Centers & Hosting',
    slug: 'data-centers-hosting',
    color: '#00D3A9',
    description: 'Data center infrastructure and managed hosting services.',
    averageEngagement: '$200K - $800K',
    challenges: [
      'Infrastructure monitoring and management',
      'Capacity planning and optimization',
      'Security and compliance',
      'Service level management',
    ],
    solutions: [
      'Infrastructure monitoring platforms',
      'Capacity management systems',
      'Security and compliance automation',
      'Service management tools',
    ],
  },
];

// ============================================
// COUNTRIES DATA - GLOBAL COVERAGE
// ============================================

export const COUNTRIES = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Netherlands',
  'Switzerland',
  'United Arab Emirates',
  'Saudi Arabia',
  'Singapore',
  'Hong Kong',
  'Japan',
  'South Korea',
  'India',
  'Pakistan',
  'Brazil',
  'Mexico',
  'Spain',
  'Italy',
  'Sweden',
  'Norway',
  'Denmark',
  'Finland',
  'Ireland',
  'New Zealand',
  'Belgium',
  'Austria',
  'Luxembourg',
  'Israel',
  'South Africa',
  'Qatar',
  'Kuwait',
  'Bahrain',
  'Oman',
  'Turkey',
  'Poland',
  'Czech Republic',
  'Portugal',
  'Greece',
  'Other',
];

// ============================================
// BUDGETS/PROJECT SIZES
// ============================================

export const BUDGETS = [
  '$50,000 - $100,000',
  '$100,000 - $250,000',
  '$250,000 - $500,000',
  '$500,000 - $1,000,000',
  '$1,000,000+',
  'Custom Enterprise Package',
];

// ============================================
// PROJECT TIMELINES
// ============================================

export const TIMELINES = [
  'Urgent (1-2 weeks)',
  'Fast track (2-4 weeks)',
  'Standard (1-3 months)',
  'Extended (3-6 months)',
  'Long-term (6+ months)',
  'Flexible',
];

// ============================================
// TECHNOLOGY LOGOS MAPPING
// ============================================

export const getTechLogo = (toolName: string): { icon: string; color: string } => {
  const logoMap: Record<string, { icon: string; color: string }> = {
    // Cloud & Infrastructure
    'Terraform': { icon: 'https://cdn.simpleicons.org/terraform/7B42BC', color: '#7B42BC' },
    'Ansible': { icon: 'https://cdn.simpleicons.org/ansible/EE0000', color: '#EE0000' },
    'Kubernetes': { icon: 'https://cdn.simpleicons.org/kubernetes/326CE5', color: '#326CE5' },
    'Docker': { icon: 'https://cdn.simpleicons.org/docker/2496ED', color: '#2496ED' },
    'AWS': { icon: 'https://logo.clearbit.com/aws.amazon.com', color: '#FF9900' },
    'GCP': { icon: 'https://cdn.simpleicons.org/googlecloud/4285F4', color: '#4285F4' },
    'Azure': { icon: 'https://logo.clearbit.com/azure.microsoft.com', color: '#0089D6' },
    'Helm': { icon: 'https://cdn.simpleicons.org/helm/0F1689', color: '#0F1689' },
    'Jenkins': { icon: 'https://cdn.simpleicons.org/jenkins/D24939', color: '#D24939' },
    'GitLab': { icon: 'https://cdn.simpleicons.org/gitlab/FC6D26', color: '#FC6D26' },
    'GitHub': { icon: 'https://cdn.simpleicons.org/github/181717', color: '#181717' },
    'Prometheus': { icon: 'https://cdn.simpleicons.org/prometheus/E6522C', color: '#E6522C' },
    'Grafana': { icon: 'https://cdn.simpleicons.org/grafana/F46800', color: '#F46800' },
    
    // AI & Automation
    'Python': { icon: 'https://cdn.simpleicons.org/python/3776AB', color: '#3776AB' },
    'Apache Airflow': { icon: 'https://cdn.simpleicons.org/apacheairflow/017CEE', color: '#017CEE' },
    'Kafka': { icon: 'https://cdn.simpleicons.org/apachekafka/231F20', color: '#231F20' },
    'TensorFlow': { icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00', color: '#FF6F00' },
    'PyTorch': { icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C', color: '#EE4C2C' },
    'n8n': { icon: 'https://cdn.simpleicons.org/n8n/EA4B71', color: '#EA4B71' },
    'Zapier': { icon: 'https://cdn.simpleicons.org/zapier/FF4A00', color: '#FF4A00' },
    'OpenAI': { icon: 'https://cdn.simpleicons.org/openai/412991', color: '#412991' },
    'Make': { icon: 'https://cdn.simpleicons.org/make/6D00CC', color: '#6D00CC' },
    'Redis': { icon: 'https://cdn.simpleicons.org/redis/DC382D', color: '#DC382D' },
    
    // Data & Analytics
    'Snowflake': { icon: 'https://cdn.simpleicons.org/snowflake/29B5E8', color: '#29B5E8' },
    'BigQuery': { icon: 'https://cdn.simpleicons.org/googlebigquery/669DF6', color: '#669DF6' },
    'Redshift': { icon: 'https://logo.clearbit.com/aws.amazon.com', color: '#8C4FFF' },
    'Amplitude': { icon: 'https://logo.clearbit.com/amplitude.com', color: '#0061FF' },
    'GA4': { icon: 'https://cdn.simpleicons.org/googleanalytics/E37400', color: '#E37400' },
    'GTM': { icon: 'https://cdn.simpleicons.org/googletagmanager/246FDB', color: '#246FDB' },
    'dbt': { icon: 'https://cdn.simpleicons.org/dbt/FF694B', color: '#FF694B' },
    'Fivetran': { icon: 'https://logo.clearbit.com/fivetran.com', color: '#0073FF' },
    'Looker': { icon: 'https://cdn.simpleicons.org/looker/4285F4', color: '#4285F4' },
    'Tableau': { icon: 'https://logo.clearbit.com/tableau.com', color: '#E97627' },
    'Power BI': { icon: 'https://logo.clearbit.com/powerbi.microsoft.com', color: '#F2C811' },
    'Databricks': { icon: 'https://cdn.simpleicons.org/databricks/FF3621', color: '#FF3621' },
    'Segment': { icon: 'https://segment.com/content/dam/segment/global/en/recipes/legacy/author-bio/SegmentLogo_Square_Green_RGB.png', color: '#52BD95' },
    
    // Monitoring & Tools
    'Datadog': { icon: 'https://cdn.simpleicons.org/datadog/632CA6', color: '#632CA6' },
    'New Relic': { icon: 'https://cdn.simpleicons.org/newrelic/008C99', color: '#008C99' },
    'Sentry': { icon: 'https://cdn.simpleicons.org/sentry/362D59', color: '#362D59' },
    'PagerDuty': { icon: 'https://cdn.simpleicons.org/pagerduty/06AC38', color: '#06AC38' },
    'Slack': { icon: 'https://cdn.simpleicons.org/slack/4A154B', color: '#4A154B' },
    
    // Marketing & Analytics Tools
    'Google Analytics': { icon: 'https://cdn.simpleicons.org/googleanalytics/E37400', color: '#E37400' },
    'Google Ads': { icon: 'https://cdn.simpleicons.org/googleads/4285F4', color: '#4285F4' },
    'Facebook Ads': { icon: 'https://cdn.simpleicons.org/meta/0668E1', color: '#0668E1' },
    'LinkedIn Ads': { icon: 'https://cdn.simpleicons.org/linkedin/0A66C2', color: '#0A66C2' },
    'HubSpot': { icon: 'https://cdn.simpleicons.org/hubspot/FF7A59', color: '#FF7A59' },
    'Salesforce': { icon: 'https://cdn.simpleicons.org/salesforce/00A1E0', color: '#00A1E0' },
    'Mixpanel': { icon: 'https://cdn.simpleicons.org/mixpanel/7856FF', color: '#7856FF' },
    'SEMrush': { icon: 'https://cdn.simpleicons.org/semrush/FF642D', color: '#FF642D' },
    'Meta Business Suite': { icon: 'https://cdn.simpleicons.org/meta/0668E1', color: '#0668E1' },
    
    // Social & Marketing Platforms
    'Social Platforms': { icon: 'https://cdn.simpleicons.org/facebook/1877F2', color: '#1877F2' },
    
    // Process & RPA
    'UiPath': { icon: 'https://cdn.simpleicons.org/uipath/FA4616', color: '#FA4616' },
    'Automation Anywhere': { icon: 'https://cdn.simpleicons.org/automationanywhere/FF6C2C', color: '#FF6C2C' },
    'RPA platforms': { icon: 'https://cdn.simpleicons.org/uipath/FA4616', color: '#FA4616' },
    
    // Business Intelligence & Emerging Tech
    'Metabase': { icon: 'https://cdn.simpleicons.org/metabase/509EE3', color: '#509EE3' },
    'Superset': { icon: 'https://cdn.simpleicons.org/apachesuperset/20A6C9', color: '#20A6C9' },
    'Process mining': { icon: 'https://cdn.simpleicons.org/databricks/FF3621', color: '#00D3A9' },
    'Analytics tools': { icon: 'https://cdn.simpleicons.org/googleanalytics/E37400', color: '#E37400' },
    'Workflow engines': { icon: 'https://cdn.simpleicons.org/apacheairflow/017CEE', color: '#017CEE' },
    'Business intelligence': { icon: 'https://cdn.simpleicons.org/tableau/E97627', color: '#E97627' },
    'Market research platforms': { icon: 'https://cdn.simpleicons.org/databricks/FF3621', color: '#00D3A9' },
    'CRM systems': { icon: 'https://cdn.simpleicons.org/salesforce/00A1E0', color: '#00A1E0' },
    'Strategic planning frameworks': { icon: 'https://cdn.simpleicons.org/databricks/FF3621', color: '#00D3A9' },
    
    // Emerging Technologies
    'Ethereum': { icon: 'https://cdn.simpleicons.org/ethereum/3C3C3D', color: '#3C3C3D' },
    'IoT platforms': { icon: 'https://cdn.simpleicons.org/homeassistant/41BDF5', color: '#41BDF5' },
    'Unity': { icon: 'https://cdn.simpleicons.org/unity/000000', color: '#000000' },
    'Edge computing': { icon: 'https://cdn.simpleicons.org/cloudflare/F38020', color: '#F38020' },
    'Quantum frameworks': { icon: 'https://cdn.simpleicons.org/qiskit/6929C4', color: '#6929C4' },
    'Web3 tools': { icon: 'https://cdn.simpleicons.org/web3dotjs/F16822', color: '#F16822' },
    
    // Disaster Recovery & Multi-cloud
    'Multi-cloud platforms': { icon: 'https://cdn.simpleicons.org/googlecloud/4285F4', color: '#4285F4' },
    'Disaster recovery systems': { icon: 'https://cdn.simpleicons.org/amazons3/569A31', color: '#569A31' },
    'Monitoring tools': { icon: 'https://cdn.simpleicons.org/prometheus/E6522C', color: '#E6522C' },
    'Backup solutions': { icon: 'https://cdn.simpleicons.org/backblaze/E51937', color: '#E51937' },
  };
  
  return logoMap[toolName] || { icon: 'https://cdn.simpleicons.org/databricks/FF3621', color: '#00D3A9' };
};

// ============================================
// CERTIFICATIONS & PARTNERSHIPS
// ============================================

export const CERTIFICATIONS = [
  'AWS Advanced Consulting Partner',
  'Google Cloud Service Partner',
  'HashiCorp Certified Partner (Terraform)',
  'Datadog & New Relic Integration Partner',
  'Kubernetes Certified Administrator (CKA)',
  'AWS Solutions Architect Pro',
  'Google Professional Cloud Architect',
  'Terraform Associate',
  'Microsoft Azure Solutions Architect',
  'Snowflake Partner',
];

// ============================================
// SECURITY & COMPLIANCE
// ============================================

export const SECURITY_COMPLIANCE = ['GDPR', 'CCPA', 'ISO 27001', 'AES-256', 'SOC 2', 'HIPAA'];

// ============================================
// NOTABLE ENGAGEMENTS
// ============================================

export const NOTABLE_ENGAGEMENTS = [
  'Cloud cost optimization for a global SaaS platform (GCP)',
  'AI automation deployment for a data analytics company',
  'Full marketing infrastructure overhaul for a European retail brand',
  'Emergency VMware-to-AWS migration for a fintech enterprise',
  'Enterprise data warehouse implementation for Fortune 500 company',
  'Multi-cloud infrastructure modernization for healthcare provider',
];

// ============================================
// COMPANY INFO
// ============================================

export const COMPANY_INFO = {
  name: 'HUK SONS IT',
  email: 'info@huksons.com',
  website: 'https://huksonsit.com',
  tagline: 'Global Technical Transformation & Engineering',
  pricingModel: 'Custom Enterprise Solutions',
  locations: {
    hq: 'Pakistan (Engineering & Delivery)',
    operations: ['USA', 'UAE'],
    model: 'Remote-First Model',
  },
  languages: ['English (Primary)', 'Arabic (Support)'],
};

// ============================================
// ENGAGEMENT TERMS
// ============================================

export const ENGAGEMENT_TERMS = [
  'Pricing: Custom-tailored for each enterprise client',
  'Payment Model: 30% advance, 70% milestone-based',
  'Contract Types: Fixed-scope, milestone, or hybrid retainers',
  'Project Duration: 4-12 weeks average',
  'Retainer Programs: Continuous optimization & advisory available',
];

// ============================================
// CORE VALUES
// ============================================

export const CORE_VALUES = [
  {
    letter: 'I',
    name: 'Integrity',
    description: 'Unwavering honesty and transparency in all our engagements',
  },
  {
    letter: 'E',
    name: 'Excellence',
    description: 'Delivering exceptional quality that exceeds enterprise standards',
  },
  {
    letter: 'E',
    name: 'Efficiency',
    description: 'Optimizing resources and processes for maximum impact',
  },
  {
    letter: 'S',
    name: 'Security',
    description: 'Enterprise-grade security embedded in every solution',
  },
  {
    letter: 'P',
    name: 'Partnership',
    description: 'Building long-term relationships based on mutual success',
  },
];

// ============================================
// HOW WE WORK - PROCESS STEPS
// ============================================

export const WORK_PROCESS = [
  {
    step: '01',
    duration: '1-2 weeks',
    title: 'Discovery & Scoping',
    description: 'A structured, milestone-driven approach to technical transformation',
    activities: [
      'Infrastructure audit and gap analysis',
      'Stakeholder interviews',
      'Technical architecture blueprint',
      'Cost-benefit analysis',
    ],
  },
  {
    step: '02',
    duration: '2-3 weeks',
    title: 'Design & Planning',
    description: 'Detailed technical specifications and project roadmap',
    activities: [
      'Detailed technical specifications',
      'Security and compliance review',
      'Resource allocation',
      'Milestone definition',
    ],
  },
  {
    step: '03',
    duration: '4-12 weeks',
    title: 'Build & Deployment',
    description: 'Agile development and continuous delivery',
    activities: [
      'Agile development cycles',
      'Weekly stakeholder updates',
      'Continuous testing',
      'Staged rollout',
    ],
  },
  {
    step: '04',
    duration: '2-4 weeks',
    title: 'Optimization & Handoff',
    description: 'Performance tuning and knowledge transfer',
    activities: [
      'Performance tuning',
      'Knowledge transfer sessions',
      'Documentation delivery',
      'Post-deployment support',
    ],
  },
];

// Helper functions to get service/industry names for dropdowns
export const getServiceNames = (): string[] => SERVICES.map(s => s.title);
export const getIndustryNames = (): string[] => INDUSTRIES.map(i => i.name);