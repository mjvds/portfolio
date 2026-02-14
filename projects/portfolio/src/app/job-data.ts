export interface JobDataTechStack {
  id?: number;
  name: string;
  icon: string;
  link?: string;
  category?: string;

  top?: string;
  left?: string;
}

export interface JobData {
  id: number;
  yearStart: number;
  yearEnd: number;
  company: string;
  projectName: string;
  projectCategory?: string;
  role: string;
  techStack: JobDataTechStack[];
  workDone: string[];
  workDoneShortDescription?: string;
}

const _techStacks: JobDataTechStack[] = [
  // Frontend Core
  {
    name: 'HTML5',
    icon: 'diHtml5Plain',
    category: 'frontend',
  },
  {
    name: 'CSS',
    icon: 'diCss3Plain',
    category: 'frontend',
  },
  {
    name: 'Javascript',
    icon: 'diJavascriptPlain',
    category: 'frontend',
  },
  {
    name: 'Typescript',
    icon: 'diTypescriptPlain',
    category: 'frontend',
  },
  {
    name: 'Angular',
    icon: 'diAngularPlain',
    category: 'frontend',
  },
  {
    name: 'Angular Material',
    icon: 'diAngularmaterialPlain',
    category: 'frontend',
  },
  {
    name: 'DevExtreme',
    icon: '',
    category: 'frontend',
  },

  // Styling / UI
  {
    name: 'SASS',
    icon: 'diSassOriginal',
    category: 'styling',
  },
  {
    name: 'Tailwindcss',
    icon: 'diTailwindcssOriginal',
    category: 'styling',
  },
  {
    name: 'Bootstrap',
    icon: 'diBootstrapPlain',
    category: 'styling',
  },

  // State Management
  {
    name: 'NgRx',
    icon: 'diNgrxPlain',
    category: 'state-management',
  },
  {
    name: 'Akita state management',
    icon: '',
    category: 'state-management',
  },
  {
    name: 'Elf state management',
    icon: '',
    category: 'state-management',
  },

  // Backend
  {
    name: '.NET Core',
    icon: 'diDotnetcorePlain',
    category: 'backend',
  },
  {
    name: 'SignalR',
    icon: '',
    category: 'backend',
  },

  // Mobile
  {
    name: 'Ionic Framework',
    icon: 'diIonicOriginal',
    category: 'mobile',
  },

  // Testing
  {
    name: 'Jasmine',
    icon: 'diJasmineOriginal',
    category: 'testing',
  },

  // Tooling
  {
    name: 'Git',
    icon: 'diGitPlain',
    category: 'tooling',
  },
  {
    name: 'Jira',
    icon: 'diJiraPlain',
    category: 'tooling',
  },
  {
    name: 'Neovim',
    icon: 'diNeovimPlain',
    category: 'tooling',
  },

  // OS / CLI
  {
    name: 'Linux',
    icon: 'diArchlinuxPlain',
    category: 'os',
  },
  {
    name: 'Bash',
    icon: 'diBashPlain',
    category: 'devops-cli',
  },
  {
    name: 'Lua',
    icon: 'diLuaPlain',
    category: 'devops-cli',
  },
  {
    name: 'Github Action',
    icon: 'diGithubactionsPlain',
    category: 'devops-cli',
  },
  {
    name: 'GSAP',
    icon: `gsapIcon`
  }
];

const _jobData: JobData[] = [
  {
    id: 1,
    yearStart: 2016,
    yearEnd: 2017,
    company: 'CyberMetrics',
    projectName: 'Faciliworks Lite',
    role: 'Fontend Developer',
    techStack: [
      {
        name: 'AngularJS',
        icon: 'diAngularjsPlain',
      },
      {
        name: 'CSS',
        icon: 'diCss3Plain',
      },
      {
        name: 'Javascript',
        icon: 'diJavascriptPlain',
      },
      {
        name: 'DevExtreme',
        icon: '',
      },
      {
        name: 'HTML5',
        icon: 'diHtml5Plain',
      },
    ],
    projectCategory: 'CMMS',
    workDone: [
      'Implemented feature',
      'Fix bug related to UI',
    ],
    workDoneShortDescription:
      'Built responsive, production-ready UIs using AngularJS, translating wireframes into functional interfaces. Improved UI stability and user experience by debugging layout and interaction issues.',
  },
  {
    id: 2,
    yearStart: 2017,
    yearEnd: 2021,
    company: 'CyberMetrics',
    projectName: 'Faciliworks Essentials',
    role: 'Fullstack Developer',
    projectCategory: 'CMMS',
    techStack: [
      {
        name: 'Angular',
        icon: 'diAngularPlain',
      },
      {
        name: 'SASS',
        icon: 'diSassOriginal',
      },
      {
        name: 'Typescript',
        icon: 'diTypescriptPlain',
      },
      {
        name: 'DevExtreme',
        icon: '',
      },
      {
        name: 'SignalR',
        icon: '',
      },
      {
        name: '.NET Core',
        icon: 'diDotnetcorePlain',
      },
      {
        name: 'Bootstrap',
        icon: 'diBootstrapPlain',
      },
      {
        name: 'NgRx',
        icon: 'diNgrxPlain',
      },
    ],
    workDone: [
      'Migrated Faciliworks Lite from AngularJS to Angular, addressing significant performance issues.',
      'Resolved critical frontend performance bottlenecks by strategically migrating computationally intensive processes to the backend, resulting in a significantly more responsive user experience.',
      'Maintained and implemented key features for enhanced usability and functionality.',
      'Implemented accessible, standards-compliant HTML and modern CSS techniques to improve readability, responsiveness, and usability across browsers and assistive technologies.',
    ],
    workDoneShortDescription:
      'Led the migration from AngularJS to Angular, significantly improving application performance, maintainability, and scalability. Solved major frontend performance bottlenecks by offloading heavy computations to the backend, resulting in a faster and more responsive user experience.',
  },
  {
    id: 2,
    yearStart: 2021,
    yearEnd: 2022,
    company: 'CyberMetrics',
    projectName: 'Faciliworks Essentials Mobile',
    projectCategory: 'CMMS',
    role: 'Lead Frontend Developer',
    techStack: [
      {
        name: 'Angular',
        icon: 'diAngularPlain',
      },
      {
        name: 'Ionic Framework',
        icon: 'diIonicOriginal',
      },
      {
        name: 'Tailwindcss',
        icon: 'diTailwindcssOriginal',
      },
      {
        name: 'SASS',
        icon: 'diSassOriginal',
      },
      {
        name: '.NET Core',
        icon: 'diDotnetcorePlain',
      },
      {
        name: 'HTML5',
        icon: 'diHtml5Plain',
        category: 'frontend',
      },
    ],
    workDone: [
      'Led the development of a mobile application from scratch, extending the platform’s capabilities to mobile devices using Ionic Framework and Angular.',
      'Optimized performance for low-end and legacy devices, ensuring smooth user experience across a wide range of hardware.',
    ],
    workDoneShortDescription:
      'Developed the mobile application from scratch using Ionic and Angular, extending core CMMS features to mobile platforms. Optimized performance for low-end devices and implemented QR and barcode scanning to streamline asset and inventory workflows.',
  },
  {
    id: 5,
    yearStart: 2022,
    yearEnd: 2023,
    company: 'BBTDigital',
    projectName: 'The Adviser Platform Customer Portal',
    role: 'Fontend Developer',
    projectCategory: 'CRM',
    techStack: [
      {
        name: 'Angular',
        icon: 'diAngularPlain',
      },
      {
        name: 'SASS',
        icon: 'diSassOriginal',
      },
      {
        name: 'Typescript',
        icon: 'diTypescriptPlain',
      },
      {
        name: 'Elf state management',
        icon: '',
      },
      {
        name: 'Bootstrap',
        icon: 'diBootstrapPlain',
      },
    ],
    workDone: [
      'Built from scratch using Angular, thoughtfully structuring the project architecture and selecting the right Node packages to ensure maintainability and quick adoption by new developers.',
      'Optimized bundle sizes through techniques like lazy loading and efficient bundling, significantly enhancing performance and page load times.',
      'Modernized outdated parts of the application by upgrading legacy code to newer standards, improving performance, reliability, and ease of future updates.',
      'Partnered with backend developers to align server data contracts, improving data accuracy and reducing integration issues.',
    ],
    workDoneShortDescription:
      'Architected and developed the customer portal from scratch using Angular, defining project structure, package selection, and performance strategies. Modernized legacy components and optimized onboarding workflows to ensure fast development and long-term scalability.',
  },
  {
    id: 4,
    yearStart: 2023,
    yearEnd: 2026,
    company: 'BBTDigital',
    projectName: 'The Adviser Platform',
    role: 'Fontend Developer',
    projectCategory: 'CRM',
    techStack: [
      {
        name: 'Angular',
        icon: 'diAngularPlain',
      },
      {
        name: 'SASS',
        icon: 'diSassOriginal',
      },
      {
        name: 'Typescript',
        icon: 'diTypescriptPlain',
      },
      {
        name: 'Angular Material',
        icon: 'diAngularmaterialPlain',
      },
      {
        name: 'Akita state management',
        icon: '',
      },
      {
        name: 'Bootstrap',
        icon: 'diBootstrapPlain',
      },
    ],
    workDone: [
      'Contributed to maintaining and implementing key features to optimize CRM functionality.',
      'Worked in an Agile Scrum team environment, where we shared resources and experience to get projects across the finish line.',
      'Handled and provided support to other existing projects to help maintain and improve the functionality of their systems.',
      'Had an enthusiasm for new web technologies and constantly wanted to push the boundaries of what was possible.',
      'Translated Figma designs into responsive, production-ready UI components, ensuring accurate implementation and consistent user experience across browsers and devices.',
      'Partnered with backend developers to align server data contracts, improving data accuracy and reducing integration issues.',
    ],
    workDoneShortDescription:
      'Built and maintained key CRM features using Angular, improving performance, stability, and usability for daily business operations. Translated Figma designs into responsive, production-ready UI components and modernized legacy code to improve scalability, maintainability, and overall system reliability.',
  },

];

export const jobData = _jobData.map((d, index) => {
  d.id = index + 1;
  return d;
});

export const techStacks = _techStacks
  .map((t, index) => {
    t.id = index + 1;
    return t;
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export const techStacksGrouped = techStacks.reduce(
  (prev, cur, index) => {
    if (!prev[cur.category!]) {
      prev[cur.category!] = [];
    }
    prev[cur.category!].push(cur);
    return prev;
  },
  {} as {
    [key: string]: JobDataTechStack[];
  },
);
