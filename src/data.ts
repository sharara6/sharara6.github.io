// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Faris Sharara',
  role: 'Backend Engineer',
  location: 'Egypt',
  status: 'Open to backend roles in Egypt, remote, or relocating to the EU or UK.',
  email: 'faresshohdy0@gmail.com',
  links: {
    github: 'https://github.com/sharara6',
    linkedin: 'https://www.linkedin.com/in/faris-sharara',
    leetcode: 'https://leetcode.com/u/Sharara/',
  },
  // Drop a PDF at public/Faris-Sharara-CV.pdf and the résumé link appears automatically.
  cv: '/Faris-Sharara-CV.pdf',
};


export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  place: string;
  stack: string[];
  points: string[];
};

export const experience: Role[] = [
  {
    company: 'Proart',
    title: 'Backend Development Intern',
    start: 'Aug 2026',
    end: 'Sep 2026',
    place: 'On-site',
    stack: ['C#', 'ASP.NET Core', 'EF Core', 'Azure DevOps', 'Microsoft Graph'],
    points: [
      'Owned the Product Pricing module end to end: domain model, service layer, 17 REST endpoints, FluentValidation, EF Core migrations, and a price-book state machine that allows one active book per currency.',
      'Fixed two pricing defects that cost money: exclusive discounts compounding with volume tiers, and stackable discounts applied one after another instead of summed, so the result depended on database row order.',
      'Traced a Microsoft Graph quota exhaustion to a background sweep making about 12,000 hidden write calls an hour. Removed the sweep and added caching, single-flight token refresh, and backoff retries.',
      'Built a deny-by-default serialisation allow list, enforced by a custom IL scanner that inspects compiled method bodies so internal data can’t leak to customer-facing endpoints.',
      'Wrote the Azure DevOps CI/CD pipeline. It produces idempotent EF Core migration scripts as reviewable build artifacts and enforces a schema-before-code, fail-closed release gate.',
      'Delivered 190 unit and integration tests (61% of the suite) and a requirements traceability matrix that maps every spec scenario to a named test.',
    ],
  },
  {
    company: 'Arab Union for Development and Sustainability',
    title: 'Software Engineer',
    start: 'Nov 2025',
    end: 'Mar 2026',
    place: 'On-site',
    stack: ['GitHub Actions', 'Docker', 'Vite', 'Vercel'],
    points: [
      'Worked on the architecture of 2 production platforms in a team of 7, upholding SOLID and clean-code standards through structured pull-request reviews.',
      'Replaced a fully manual release process with the team’s first CI/CD pipeline and containerised the services with Docker.',
      'Set up deployment and the domain for arabud.org, auto-deploying from main to Vercel.',
    ],
  },
  {
    company: 'LuxAlgo',
    title: 'Web Developer Intern',
    start: 'Mar 2025',
    end: 'Sep 2025',
    place: 'Remote',
    stack: ['Node.js', 'MongoDB', 'React'],
    points: [
      'Built and tuned REST APIs for query performance on Node.js and MongoDB.',
      'Shipped reusable, responsive React components in a distributed Agile team with Git-based code review.',
    ],
  },
  {
    company: 'Zewail City',
    title: 'Junior Teaching Assistant, Digital Logic & Design',
    start: 'Oct 2023',
    end: 'Jan 2025',
    place: 'On-site',
    stack: [],
    points: ['Ran labs and supported projects for 150 to 200 students each semester.'],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  role: string;
  team: string;
  status?: string;
  stack: string[];
  metrics?: { value: string; label: string }[];
  latency?: { label: string; ms: number }[];
  summary: string;
  problem?: string;
  built: string[];
  links: { label: string; href: string }[];
};

export const featured: Project[] = [
  {
    slug: 'in',
    name: 'IN',
    tagline: 'Group hangout planning with real-time coordination and in-app payments.',
    year: '2026',
    role: 'Backend Engineer',
    team: 'Team of 4 · Graduation project',
    stack: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Redis', 'BullMQ', 'Socket.IO', 'Paymob', 'Flutter'],
    metrics: [
      { value: '228 req/s', label: 'sustained throughput' },
      { value: '500', label: 'concurrent users' },
      { value: '0', label: 'server-side 5xx' },
      { value: '~900 ms', label: 'p95 latency' },
    ],
    latency: [
      { label: 'p95', ms: 900 },
      { label: 'p99', ms: 1700 },
    ],
    summary:
      'Planning a group outing usually means four chats, a poll nobody answers, and one person fronting the money. IN puts the plan, the people, and the payment in one place.',
    built: [
      'Modular monolith on PostgreSQL 15 (Supabase): 38 tables, 55 migrations, row-level security.',
      '10 BullMQ workers on Redis for notifications, reminders, and other background work.',
      'Real-time updates over Socket.IO, with authentication through Firebase Auth.',
      'Paymob integration for Visa and cash, with HMAC-verified webhooks.',
      'Load tested at 500 concurrent users: 98% success, zero 5xx, p95 around 900 ms and p99 around 1.7 s.',
      'Clients: a Flutter Android app and a React/Vite admin dashboard.',
    ],
    links: [],
  },
  {
    slug: 'workhub',
    name: 'WorkHub',
    tagline: 'Multi-tenant project-management API where tenants never see each other’s data.',
    year: '2026',
    role: 'RBAC, Kubernetes, and security tests (~25% of code)',
    team: 'Team of 5',
    stack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Docker', 'Kubernetes', 'Testcontainers'],
    metrics: [
      { value: '2', label: 'K8s replicas with probes' },
      { value: '401/403/404', label: 'cross-tenant test matrix' },
    ],
    summary:
      'In SaaS, a single missed tenant check leaks one customer’s data to another. WorkHub enforces tenant and role boundaries at every layer and proves it with tests.',
    built: [
      'JWT-based RBAC passed through a request-scoped filter into guards in the service layer.',
      'A cross-tenant isolation suite asserting 401, 403, and 404 responses across endpoints.',
      'A Testcontainers test showing that a failed tenant onboarding rolls back atomically.',
      'A TENANT_ADMIN-only endpoint for inviting users.',
      'The Kubernetes layer: ConfigMap and Secret separation, a 2-replica Deployment with Actuator readiness and liveness probes plus resource limits, and in-cluster PostgreSQL and RabbitMQ.',
    ],
    links: [{ label: 'Repository', href: 'https://github.com/Karim-Ashraf1/workhub-saas-backend' }],
  },
  {
    slug: 'messaging',
    name: 'Distributed Messaging Platform',
    tagline: 'Microservice chat with real-time delivery and media compression.',
    year: '2026',
    role: 'API Gateway and 3 compression services (38 of 140 commits)',
    team: 'Team project',
    stack: ['Node.js', 'Go', 'Redis', 'RabbitMQ', 'WebSockets', 'OAuth 2.0', 'Docker', 'Azure', 'OpenSearch', 'Grafana'],
    summary:
      'A WhatsApp-style chat system split into independent services, with real-time delivery over WebSockets and dedicated services for compressing media.',
    built: [
      'Built the API Gateway, which handles routing and OAuth 2.0 authentication for every service.',
      'Built separate video, audio, and photo compression services.',
      'Services communicate through RabbitMQ, with Redis for fast state.',
      'Observability with OpenSearch and Grafana; deployed to Azure through CI/CD.',
    ],
    links: [{ label: 'Repository', href: 'https://github.com/Karim-Ashraf1/WhatsApp-Clone' }],
  },
  {
    slug: 'swapook',
    name: 'Swapook',
    tagline: 'Book swapping and reading clubs for readers in Egypt.',
    year: '2026',
    role: 'Builder',
    team: 'In development',
    status: 'In progress',
    stack: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'FCM', 'GitHub Actions'],
    summary:
      'Readers in Egypt have no structured way to swap books. Swapook adds a proper request flow: chat opens only after a swap is accepted, which keeps conversations useful.',
    built: [
      'Validated the idea with Instagram polls before writing code.',
      'Structured swap requests, with chat unlocked only after acceptance.',
      'Firebase stack: Auth, Firestore, Storage, FCM, Analytics, and Crashlytics.',
      'Planned as an 8-phase roadmap with a freemium model.',
    ],
    links: [],
  },
];

export type Minor = { name: string; note: string; stack: string; year: string; href?: string };

export const otherWork: Minor[] = [
  {
    name: 'Emotion-Adaptive NPCs',
    note: 'Research code behind the IEEE ICCTA 2025 paper',
    stack: 'Python',
    year: '2025',
    href: 'https://github.com/sharara6/Adaptive-NPC',
  },
  {
    name: 'Parallel DFS',
    note: 'Depth-first search on MPI with strong and weak scaling benchmarks',
    stack: 'C++ · MPI',
    year: '2025',
    href: 'https://github.com/Ahmed-Taha-981/Parallel-DFS-Algorithm',
  },
  {
    name: 'Smart Environment (IoT)',
    note: 'ESP32 sensors over MQTT with a Node-RED dashboard',
    stack: 'C++ · ESP32 · MQTT',
    year: '2026',
    href: 'https://github.com/sharara6/DynamicDou_SmartEnv',
  },
  {
    name: 'Drone Search & Rescue',
    note: 'Compared A*, UCS, a genetic algorithm, and Q-learning for navigation',
    stack: 'Python',
    year: '2025',
    href: 'https://github.com/sharara6/Autonomous-Drone-Navigation-for-Search-and-Rescue',
  },
  {
    name: 'EV Control Functions',
    note: 'Pedal and motor control, brake ramp-down, and seat-belt interlock on a PIC microcontroller',
    stack: 'C · PIC',
    year: '2025',
  },
  {
    name: 'Spotify Clone',
    note: 'Music streaming web app',
    stack: 'React · Node · MongoDB',
    year: '2025',
    href: 'https://github.com/ZeyadWaleed7/Spotify-Clone',
  },
  {
    name: 'Tech Hub',
    note: 'Online tech store',
    stack: 'C# · Razor Pages · SQL Server',
    year: '2024',
    href: 'https://github.com/nour-awad/tech-hub',
  },
];

export const research = {
  title:
    'Evaluating Emotion-Adaptive Non-Player Characters: Player Perception, Immersion, and Systemic Challenges in Sentiment-Driven Interaction',
  authors: 'A. Mamdouh, F. Sharara, L. Gamal, D. Shawqi',
  venue: 'IEEE ICCTA 2025 · Alexandria',
  href: 'https://ieeexplore.ieee.org/document/11519974',
};

export const openSource = [
  {
    repo: 'iluwatar/java-design-patterns',
    title: 'Two Step View pattern',
    href: 'https://github.com/iluwatar/java-design-patterns/pull/3106',
  },
  {
    repo: 'iluwatar/30-seconds-of-java',
    title: 'Mode function enhancement',
    href: 'https://github.com/iluwatar/30-seconds-of-java/pull/238',
  },
];
