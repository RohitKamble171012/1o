export const projectDetails: Record<string, {
  slug: string
  title: string
  subtitle: string
  tag: string
  status: string
  type: string
  year: string
  tech: string[]
  problem: string
  solution: string
  outcome: string
  features: string[]
  liveLink?: string
  researchLink?: string
}> = {
  'applyflow': {
    slug: 'applyflow',
    title: 'ApplyFlow',
    subtitle: 'AI-Powered Job Application Tracker',
    tag: 'Featured',
    status: 'Live',
    type: 'Open Source / Research',
    year: '2025',
    tech: ['JavaScript', 'CSS', 'HTML', 'Node.js', 'NLP', 'Gmail API', 'Regex Engine'],
    problem: 'Job seekers struggle to track hundreds of applications across multiple platforms. Emails get lost, statuses go stale, and there\'s no single source of truth for where you stand in every pipeline.',
    solution: 'ApplyFlow automatically syncs with Gmail, uses NLP to classify job-related emails, and extracts company and role data using a custom regex engine — giving you a live dashboard of every application without manual input.',
    outcome: 'A fully automated job tracker that eliminates manual logging. Users can see every application, its current status, and relevant email threads in one place — saving hours per week during active job searches.',
    features: [
      'Automatic Gmail sync via OAuth',
      'NLP-based email classification',
      'ATS-aware company name extraction',
      'Application status tracking dashboard',
      'Custom regex engine for data parsing',
      'Open source & self-hostable',
    ],
    liveLink: 'https://github.com/RohitKamble171012',
    researchLink: undefined,
  },
  'smart-learn-hub': {
    slug: 'smart-learn-hub',
    title: 'SmartLearn Hub',
    subtitle: 'Learning Management System with AI',
    tag: 'IIT Bombay',
    status: 'Live',
    type: 'Internship Project',
    year: '2025',
    tech: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'AI'],
    problem: 'Traditional LMS platforms lack interactivity and real-time feedback. Teachers have no easy way to create quizzes on the fly, and students don\'t get instant insight into their progress.',
    solution: 'Built a full-stack LMS at IIT Bombay with teacher-facing quiz management tools, real-time student evaluation, progress dashboards, and an integrated AI assistant that helps students understand course material.',
    outcome: 'Deployed and used internally at IIT Bombay. Improved student engagement through instant feedback loops and reduced teacher workload with automated quiz grading and progress reports.',
    features: [
      'Teacher quiz creation & management',
      'Real-time student evaluation',
      'Progress tracking dashboards',
      'AI learning assistant integration',
      'Role-based access (teacher / student)',
      'MongoDB-backed data persistence',
    ],
    liveLink: undefined,
    researchLink: undefined,
  },
  'sharp-engineering': {
    slug: 'sharp-engineering',
    title: 'Sharp Engineering',
    subtitle: 'Official Company Website',
    tag: 'Client',
    status: 'Live',
    type: 'Freelance Contract',
    year: '2025',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    problem: 'Sharp Engineering had no online presence. Potential clients couldn\'t find them, verify their work, or get in touch — losing business to competitors with modern websites.',
    solution: 'Designed and developed a fully responsive company website from scratch using Next.js and Tailwind CSS. Focused on fast load times, strong SEO fundamentals, and a clean professional aesthetic.',
    outcome: 'The site went live on Vercel with 100% uptime. Sharp Engineering now has a professional online presence, improved discoverability, and a direct channel for client inquiries.',
    features: [
      'Fully responsive design',
      'SEO-optimized pages',
      'Fast load times via Vercel Edge',
      'Contact & inquiry section',
      'Company portfolio showcase',
      'Built with Next.js App Router',
    ],
    liveLink: 'https://sharpengineering.vercel.app',
    researchLink: undefined,
  },
}
