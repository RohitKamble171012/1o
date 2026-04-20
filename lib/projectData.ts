export const projectDetails: Record<string, {
  title: string;
  subtitle: string;
  tag: string;
  status: string;
  type: string;
  year: string;
  tech: string[];
  problem: string;
  solution: string;
  outcome: string;
  features: string[];
  researchLink?: string;
  liveLink?: string;
}> = {
  applyflow: {
    title: 'ApplyFlow',
    subtitle: 'AI-Powered Job Application Tracker',
    tag: 'Featured',
    status: 'Live',
    type: 'Open Source / Research',
    year: '2025',
    tech: ['JavaScript', 'CSS', 'HTML', 'Node.js', 'NLP Engine', 'Gmail API', 'Regex Patterns', 'Darwinbox', 'Greenhouse', 'Lever', 'Workday'],
    problem: 'Job seekers applying to dozens of positions face a chaotic, fragmented experience. Emails pile up across Gmail with no way to track status — applied, interviewing, rejected, or offered. Manually updating spreadsheets is tedious and error-prone. ATS emails vary wildly across platforms, making automation extremely difficult.',
    solution: 'ApplyFlow automatically syncs with Gmail and uses a custom NLP engine built with 60+ regex patterns to classify application emails into four stages: Applied, Interview, Rejected, and Offer. It extracts company names and roles from ATS emails across Darwinbox, Greenhouse, Lever, and Workday — and provides a calendar view for interview and deadline tracking.',
    outcome: 'Achieved 7/7 classification accuracy on a structured test suite. Supports 4 major ATS platforms. Published as a research paper: "ApplyFlow: AI-Powered Job Application Tracking and Resume Optimization System." Serves as a foundation for future AI-enhanced resume optimization features.',
    features: [
      'Automatic Gmail synchronization and email parsing',
      'Custom NLP engine with 60+ regex classification patterns',
      '4-stage status tracking: Applied, Interview, Rejected, Offer',
      'ATS-aware extraction: Darwinbox, Greenhouse, Lever, Workday',
      'Interview & deadline calendar tracking',
      'Published research paper on methodology',
    ],
    researchLink: 'https://zenodo.org/records/19480535',
  },
  'smart-learn-hub': {
    title: 'SmartLearn Hub',
    subtitle: 'Learning Management System with AI',
    tag: 'IIT Bombay',
    status: 'Live',
    type: 'Internship Project',
    year: '2025',
    tech: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js', 'AI Assistant', 'JWT Auth'],
    problem: 'Traditional learning platforms are passive and disconnected. Teachers lack tools to create dynamic assessments, and students have no real-time feedback loop. Scaling personalized education requires intelligent automation that most LMS platforms don\'t provide.',
    solution: 'SmartLearn Hub is an interactive LMS featuring teacher quiz management, auto-graded assessments, real-time student evaluation dashboards, and an AI learning assistant that helps students navigate content and answer questions contextually. Built with a full MERN stack and deployed at scale.',
    outcome: 'Used by 100+ students. Evaluated and approved by IIT faculty. Contributed to as part of a Full Stack Web Development internship at IIT Bombay, working in an agile team environment.',
    features: [
      'Teacher quiz and test creation interface',
      'Real-time student performance evaluation',
      'Progress tracking dashboards with analytics',
      'AI-powered learning assistant for contextual Q&A',
      'MongoDB-backed user authentication and data storage',
      'Responsive UI with role-based access control',
    ],
  },
  'sharp-engineering': {
    title: 'Sharp Engineering',
    subtitle: 'Official Company Website',
    tag: 'Client',
    status: 'Live',
    type: 'Freelance Contract',
    year: '2025',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'SEO Optimization'],
    problem: 'Sharp Engineering, an established engineering firm, lacked a professional digital presence. Their old site was outdated, not mobile-optimized, and failed to communicate their services and expertise effectively to potential clients.',
    solution: 'Designed and developed a complete company website from scratch — built with Next.js and Tailwind CSS. Focused on clean design, fast load times, SEO best practices, and a strong mobile-first responsive layout that works flawlessly across all devices.',
    outcome: 'Improved online presence significantly. Deployed on Vercel with near-100% uptime. SEO-optimized for relevant engineering industry keywords. Delivered within the agreed project timeline with full client approval.',
    features: [
      'Clean, professional business website design',
      'Fully responsive across all screen sizes',
      'SEO-optimized with proper meta tags and structure',
      'Fast load times via Next.js static optimization',
      'Deployed on Vercel with automatic CI/CD from GitHub',
      'Translated client requirements into polished UI',
    ],
  },
  
}
