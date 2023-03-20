import {CourseCardType, CourseQuarter, DropdownData, ProgramDetailType} from "daoRoot/assets/types/types";

export const dropdownData: DropdownData[] = [
  {
    title: 'Core Courses',
    items: [
      {
        courseName: 'Object-Oriented Programming using TypeScript',
        subtitle: 'Quarter I',
        linkTo: '/courseDetails/1#1',
      },
      {
        courseName: 'Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
        subtitle: 'Quarter II',
        linkTo: '/courseDetails/1#2',
      },
      {
        courseName: 'Dollar Making Bootcamp - Full-Stack Template and API Product Development',
        subtitle: 'Quarter III',
        linkTo: '/courseDetails/1#3',
      }],
  },
  {
    title: 'Specialized Tracks',
    items: [
      {
        courseName: 'Ambient Computing and IoT Specialization',
        subtitle: 'Quarter IV & V',
        linkTo: '/courseDetails/1',
        id: 1,
      }, {
        courseName: 'Artificial Intelligence (AI) and Deep Learning Specialization',
        subtitle: 'Quarter IV & V',
        linkTo: '/courseDetails/2',
        id: 2,
      }, {
        courseName: 'Cloud-Native Computing Specialization',
        subtitle: 'Quarter IV & V',
        linkTo: '/courseDetails/3',
        id: 3,
      }, {
        courseName: 'Genomics and Bioinformatics Specialization',
        subtitle: 'Quarter IV & V',
        linkTo: '/courseDetails/4',
        id: 4,
      }, {
        courseName: 'Network Programmability and Automation Specialization',
        subtitle: 'Quarter IV & V',
        linkTo: '/courseDetails/5',
        id: 5,
      }, {
        courseName: 'Web 3.0 (Blockchain) and Metaverse Specialization',
        subtitle: 'Quarter IV & V',
        linkTo: '/courseDetails/6',
        id: 6,
      },
    ],
  }
];
import TSLogo from '../images/Typescript-Logo-Small.png'
import LambdaLogo from '../images/awslambda.webp'
import DollarLogo from '../images/dollarLog.jpg'

export const coreCoursesCards: CourseCardType[] = [
  {
    courseID: '1',
    image: TSLogo,
    title: 'Object-Oriented Programming using TypeScript',
    description: 'We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.',
    linkTo: '/courseDetails/1#1',
    isCore: true,
    quarter: "I"
  },
  {
    courseID: '1',
    image: LambdaLogo,
    title: 'Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
    description: 'The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs.The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).',
    linkTo: '/courseDetails/1#2',
    isCore: true,
    quarter: "II"
  }, {
    courseID: '1',
    image: DollarLogo,
    title: 'Dollar Making Bootcamp - Full-Stack Template and API Product Development',
    description: 'Develop Web 3.0 Templates and GraphQL APIs to sell and earn Dollars',
    linkTo: '/courseDetails/1#3',
    isCore: true,
    quarter: "III"
  },
]

export const metaverseCourseDetails: CourseQuarter[] = [
  {
    // id
    quarterNumber: 1,
    duration: '13 Weeks',
    title: 'Object-Oriented Programming using TypeScript',
    description: 'We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.',
    isCore: true,
    syllabus: [
      {
        title: 'HTML and CSS',
      }, {
        title: 'Web 3.0 and Metaverse Theory',
      }, {
        title: 'Fundamentals of JavaScript',
      }, {
        title: 'Object-Oriented Programming with TypeScript',
      }, {
        title: 'TypeScript for React',
      },
    ]
  },
  {
    quarterNumber: 2,
    duration: '13 Weeks',
    title: 'Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
    description: 'The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs.The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).',
    isCore: true,
    syllabus: [
      {
        title: 'Next.js 13 Web Development',
      }, {
        title: 'Next.js 13 using Chakra UI',
      }, {
        title: 'UI/UX Design with Figma, TailwindCSS, and Chakra UI',
      }, {
        title: 'API Routes with Next.js',
      }, {
        title: 'APIs with Next.js and tRPC',
      }, {
        title: 'SQL and Prisma',
      }, {
        title: 'Next.js 13 using TailwindCSS',
      }, {
        title: 'AWS Application Composer',
      }, {
        title: 'Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF)',
      },
    ]
  },
  {
    quarterNumber: 3,
    duration: '13 Weeks',
    title: 'Dollar Making Bootcamp - Full-Stack Template and API Product Development',
    description: 'Develop Web 3.0 Templates and GraphQL APIs to sell and earn Dollars',
    isCore: true,
    syllabus: [
      {
        title: 'Build Full-Stack Next.js 13 Jamstack Templates',
      }, {
        title: 'Build GraphQL APIs',
      }
    ]
  },
  {
    quarterNumber: 4,
    duration: '13 Weeks',
    title: 'Developing Smart Contracts and Planet-Scale Web 3.0 DApps',
    description: 'Develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.',
    isCore: false,
    syllabus: [
      {
        title: 'Blockchain and Metaverse Theory',
      }, {
        title: 'Smart Contract Development in Solidity',
      }, {
        title: 'Dapp Development using Ethers.js and Next.js 13',
      }, {
        title: 'Tokennomics',
      }, {
        title: 'Blockchain Project: Create a Token and Launch ICO/IEO/IDO',
      }
    ]
  },
  {
    quarterNumber: 5,
    duration: '13 Weeks',
    title: 'Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences',
    description: 'The Web is the Metaverse. Metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.',
    isCore: false,
    syllabus: [
      {
        title: 'Open Metaverse Web Development ',
      }, {
        title: 'Blender 3D asset Creation for the Metaverse',
      }
    ]
  }
]

export const artificialIntelligenceAndDLSDetails: CourseQuarter[] = [
  {
    quarterNumber: 1,
    duration: '13 Weeks',
    title: 'Object-Oriented Programming using TypeScript',
    description: 'We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.',
    isCore: true,
    syllabus: [
      {
        title: 'HTML and CSS',
      }, {
        title: 'Web 3.0 and Metaverse Theory',
      }, {
        title: 'Fundamentals of JavaScript',
      }, {
        title: 'Object-Oriented Programming with TypeScript',
      }, {
        title: 'TypeScript for React',
      },
    ]
  },
  {
    quarterNumber: 2,
    duration: '13 Weeks',
    title: 'Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
    description: 'The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs.The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).',
    isCore: true,
    syllabus: [
      {
        title: 'Next.js 13 Web Development',
      }, {
        title: 'Next.js 13 using Chakra UI',
      }, {
        title: 'UI/UX Design with Figma, TailwindCSS, and Chakra UI',
      }, {
        title: 'API Routes with Next.js',
      }, {
        title: 'APIs with Next.js and tRPC',
      }, {
        title: 'SQL and Prisma',
      }, {
        title: 'Next.js 13 using TailwindCSS',
      }, {
        title: 'AWS Application Composer',
      }, {
        title: 'Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF)',
      },
    ]
  },
  {
    quarterNumber: 3,
    duration: '13 Weeks',
    title: 'Dollar Making Bootcamp - Full-Stack Template and API Product Development',
    description: 'Develop Web 3.0 Templates and GraphQL APIs to sell and earn Dollars',
    isCore: true,
    syllabus: [
      {
        title: 'Build Full-Stack Next.js 13 Jamstack Templates',
      }, {
        title: 'Build GraphQL APIs',
      }
    ]
  },
  {
    quarterNumber: 4,
    duration: '13 Weeks',
    title: 'Developing Planet-Scale Intelligent APIs and Python Programming',
    description: 'Understanding the fundamentals and use cases for AI and building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13. We\'ll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We\'ll also learn how to make your programs interactive and how to test your code safely before adding it to a project.',
    isCore: false,
    syllabus: [
      {
        title: 'Introduction to Machine Learning, Data Science, and AI',
      }, {
        title: 'Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models',
      }, {
        title: 'Python Crash Course  for TypeScript Developers',
      }
    ]
  },
  {
    quarterNumber: 5,
    duration: '13 Weeks',
    title: 'Deep Learning and MLOps',
    description: 'This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance',
    isCore: false,
    syllabus: [
      {
        title: 'Deep Learning with Tensorflow',
      }, {
        title: 'Machine Learning Engineering for Production (MLOps) using Terraform for CDK',
      }
    ]
  }
]
export const cloudNativeSepcializationDetails: CourseQuarter[] = [
  {
    quarterNumber: 1,
    duration: '13 Weeks',
    title: 'Object-Oriented Programming using TypeScript',
    description: 'We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.',
    isCore: true,
    syllabus: [
      {
        title: 'HTML and CSS',
      }, {
        title: 'Web 3.0 and Metaverse Theory',
      }, {
        title: 'Fundamentals of JavaScript',
      }, {
        title: 'Object-Oriented Programming with TypeScript',
      }, {
        title: 'TypeScript for React',
      },
    ]
  },
  {
    quarterNumber: 2,
    duration: '13 Weeks',
    title: 'Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
    description: 'The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs.The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).',
    isCore: true,
    syllabus: [
      {
        title: 'Next.js 13 Web Development',
      }, {
        title: 'Next.js 13 using Chakra UI',
      }, {
        title: 'UI/UX Design with Figma, TailwindCSS, and Chakra UI',
      }, {
        title: 'API Routes with Next.js',
      }, {
        title: 'APIs with Next.js and tRPC',
      }, {
        title: 'SQL and Prisma',
      }, {
        title: 'Next.js 13 using TailwindCSS',
      }, {
        title: 'AWS Application Composer',
      }, {
        title: 'Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF)',
      },
    ]
  },
  {
    quarterNumber: 3,
    duration: '13 Weeks',
    title: 'Dollar Making Bootcamp - Full-Stack Template and API Product Development',
    description: 'Develop Web 3.0 Templates and GraphQL APIs to sell and earn Dollars',
    isCore: true,
    syllabus: [
      {
        title: 'Build Full-Stack Next.js 13 Jamstack Templates',
      }, {
        title: 'Build GraphQL APIs',
      }
    ]
  },
  {
    quarterNumber: 4,
    duration: '13 Weeks',
    title: 'Certified Kubernetes Application Developer (CKAD)',
    description: 'Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.',
    isCore: false,
    syllabus: [
      {
        title: 'Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition',
      }, {
        title: 'Cloud Development Kit for Kubernetes',
      }
    ]
  },
  {
    quarterNumber: 5,
    duration: '13 Weeks',
    title: 'Developing Multi-Cloud Apps using CDK for Terraform',
    description: 'Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, multi-cloud infrastructures. Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.',
    isCore: false,
    syllabus: [
      {
        title: 'CDK for Terraform',
      }
    ]
  }
]
export const ambientComputingAndIOTDetails: CourseQuarter[] = [
  {
    quarterNumber: 1,
    duration: '13 Weeks',
    title: 'Object-Oriented Programming using TypeScript',
    description: 'We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.',
    isCore: true,
    syllabus: [
      {
        title: 'HTML and CSS',
      }, {
        title: 'Web 3.0 and Metaverse Theory',
      }, {
        title: 'Fundamentals of JavaScript',
      }, {
        title: 'Object-Oriented Programming with TypeScript',
      }, {
        title: 'TypeScript for React',
      },
    ]
  },
  {
    quarterNumber: 2,
    duration: '13 Weeks',
    title: 'Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
    description: 'The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs.The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).',
    isCore: true,
    syllabus: [
      {
        title: 'Next.js 13 Web Development',
      }, {
        title: 'Next.js 13 using Chakra UI',
      }, {
        title: 'UI/UX Design with Figma, TailwindCSS, and Chakra UI',
      }, {
        title: 'API Routes with Next.js',
      }, {
        title: 'APIs with Next.js and tRPC',
      }, {
        title: 'SQL and Prisma',
      }, {
        title: 'Next.js 13 using TailwindCSS',
      }, {
        title: 'AWS Application Composer',
      }, {
        title: 'Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF)',
      },
    ]
  },
  {
    quarterNumber: 3,
    duration: '13 Weeks',
    title: 'Dollar Making Bootcamp - Full-Stack Template and API Product Development',
    description: 'Develop Web 3.0 Templates and GraphQL APIs to sell and earn Dollars',
    isCore: true,
    syllabus: [
      {
        title: 'Build Full-Stack Next.js 13 Jamstack Templates',
      }, {
        title: 'Build GraphQL APIs',
      }
    ]
  },
  {
    quarterNumber: 4,
    duration: '13 Weeks',
    title: 'Ambient Computing with Voice Assistants and Matter Device',
    description: 'Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people don\'t want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. It doesn\'t matter what device you\'re using, what context you\'re in, whether you\'re talking, typing, or tapping.',
    isCore: false,
    syllabus: [
      {
        title: 'Alexa Skill Development',
      }, {
        title: 'Alexa with Matter Protocol',
      }
    ]
  },
  {
    quarterNumber: 5,
    duration: '13 Weeks',
    title: 'Embedded Programming using C and Rust',
    description: 'This is an introductory course about using the C and Rust Programming Languages on "Bare Metal" embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the  C++ and Rust programming languages. We\'ll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.',
    isCore: false,
    syllabus: [
      {
        title: 'Introduction to the Internet of Things and Embedded Systems',
      }, {
        title: 'The C Reference Book: The C programming language',
      }, {
        title: 'Introduction to C Part 1',
      }, {
        title: ' C Programming Part 2',
      }, {
        title: 'Introduction to Embedded systems Part 1',
      }, {
        title: 'Introduction to Embedded systems Part 2',
      }, {
        title: 'Embedded Programming using Rust',
      }
    ]
  }
]

export const genomicsAndBioinformaticsSpecializationDetails: CourseQuarter[] = [
  {
    quarterNumber: 1,
    duration: '13 Weeks',
    title: 'Object-Oriented Programming using TypeScript',
    description: 'We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.',
    isCore: true,
    syllabus: [
      {
        title: 'HTML and CSS',
      }, {
        title: 'Web 3.0 and Metaverse Theory',
      }, {
        title: 'Fundamentals of JavaScript',
      }, {
        title: 'Object-Oriented Programming with TypeScript',
      }, {
        title: 'TypeScript for React',
      },
    ]
  },
  {
    quarterNumber: 2,
    duration: '13 Weeks',
    title: 'Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
    description: 'The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs.The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).',
    isCore: true,
    syllabus: [
      {
        title: 'Next.js 13 Web Development',
      }, {
        title: 'Next.js 13 using Chakra UI',
      }, {
        title: 'UI/UX Design with Figma, TailwindCSS, and Chakra UI',
      }, {
        title: 'API Routes with Next.js',
      }, {
        title: 'APIs with Next.js and tRPC',
      }, {
        title: 'SQL and Prisma',
      }, {
        title: 'Next.js 13 using TailwindCSS',
      }, {
        title: 'AWS Application Composer',
      }, {
        title: 'Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF)',
      },
    ]
  },
  {
    quarterNumber: 3,
    duration: '13 Weeks',
    title: 'Dollar Making Bootcamp - Full-Stack Template and API Product Development',
    description: 'Develop Web 3.0 Templates and GraphQL APIs to sell and earn Dollars',
    isCore: true,
    syllabus: [
      {
        title: 'Build Full-Stack Next.js 13 Jamstack Templates',
      }, {
        title: 'Build GraphQL APIs',
      }
    ]
  },
  {
    quarterNumber: 4,
    duration: '13 Weeks',
    title: 'Python for Biologists',
    description: 'This course will focus on learning the basics of the Python programming language through genomics examples.',
    isCore: false,
    syllabus: [
      {
        title: 'Introduction to Python',
      },
    ]
  },
  {
    quarterNumber: 5,
    duration: '13 Weeks',
    title: 'Bioinformatics with Python',
    description: 'In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data..',
    isCore: false,
    syllabus: [
      {
        title: 'Studying next-generation sequencing libraries from the powerful Python ecosystem',
      }
    ]
  }
]

export const networkProgrammabilityAndAutomationSpecializationDetails: CourseQuarter[] = [
  {
    quarterNumber: 1,
    duration: '13 Weeks',
    title: 'Object-Oriented Programming using TypeScript',
    description: 'We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.',
    isCore: true,
    syllabus: [
      {
        title: 'HTML and CSS',
      }, {
        title: 'Web 3.0 and Metaverse Theory',
      }, {
        title: 'Fundamentals of JavaScript',
      }, {
        title: 'Object-Oriented Programming with TypeScript',
      }, {
        title: 'TypeScript for React',
      },
    ]
  },
  {
    quarterNumber: 2,
    duration: '13 Weeks',
    title: 'Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
    description: 'The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs.The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).',
    isCore: true,
    syllabus: [
      {
        title: 'Next.js 13 Web Development',
      }, {
        title: 'Next.js 13 using Chakra UI',
      }, {
        title: 'UI/UX Design with Figma, TailwindCSS, and Chakra UI',
      }, {
        title: 'API Routes with Next.js',
      }, {
        title: 'APIs with Next.js and tRPC',
      }, {
        title: 'SQL and Prisma',
      }, {
        title: 'Next.js 13 using TailwindCSS',
      }, {
        title: 'AWS Application Composer',
      }, {
        title: 'Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF)',
      },
    ]
  },
  {
    quarterNumber: 3,
    duration: '13 Weeks',
    title: 'Dollar Making Bootcamp - Full-Stack Template and API Product Development',
    description: 'Develop Web 3.0 Templates and GraphQL APIs to sell and earn Dollars',
    isCore: true,
    syllabus: [
      {
        title: 'Build Full-Stack Next.js 13 Jamstack Templates',
      }, {
        title: 'Build GraphQL APIs',
      }
    ]
  },
  {
    quarterNumber: 4,
    duration: '13 Weeks',
    title: 'CCNA 200-301 Certification',
    description: 'This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure',
    isCore: false,
    syllabus: [
      {
        title: 'Basic of Networking',
      },
    ]
  },
  {
    quarterNumber: 5,
    duration: '13 Weeks',
    title: 'Network Programmability and Automation',
    description: 'Traditional network management techniques can\'t be effectively automated and don\'t scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer',
    isCore: false,
    syllabus: [
      {
        title: 'Implementing Network Programmability based on APIs',
      }
    ]
  }
]

export const programDetail: ProgramDetailType[] = [
  {
    id: 1,
    title: 'Ambient Computing and IoT Specialization',
    description: 'The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices',
    quarters: ambientComputingAndIOTDetails
  }, {
    id: 2,
    title: 'Artificial Intelligence (AI) and Deep Learning Specialization',
    description: 'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models',
    quarters: artificialIntelligenceAndDLSDetails
  }, {
    id: 3,
    title: 'Cloud-Native Computing Specialization',
    description: 'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes',
    quarters: cloudNativeSepcializationDetails
  }, {
    id: 4,
    title: 'Genomics and Bioinformatics Specialization',
    description: 'Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications',
    quarters: genomicsAndBioinformaticsSpecializationDetails
  }, {
    id: 5,
    title: 'Network Programmability and Automation Specialization',
    description: 'More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git',
    quarters: networkProgrammabilityAndAutomationSpecializationDetails
  }, {
    id: 6,
    title: 'Web 3.0 (Blockchain) and Metaverse Specialization',
    description: 'This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences',
    quarters: metaverseCourseDetails
  },
]


export const specializedTracks = [
  {
    id: 1,
    title: 'Ambient Computing and IoT Specialization',
    description: 'The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices',
    linkTo: '/courseDetails/1',
    // imageURL: '/images/png-transparent-internet-of-things-narrowband-iot-radio-frequency-identification-telecommunication-verizon-text-logo-mobile-payment.png'
    imageURL: '/images/iot.svg'
  }, {
    id: 2,
    title: 'Artificial Intelligence (AI) and Deep Learning Specialization',
    description: 'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models',
    linkTo: '/courseDetails/2',
    imageURL: '/images/artificial-intelligence 1.png'
  }, {
    id: 3,
    title: 'Cloud-Native Computing Specialization',
    description: 'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes',
    linkTo: '/courseDetails/3',
    imageURL: '/images/cloudComputing.png'
  }, {
    id: 4,
    title: 'Genomics and Bioinformatics Specialization',
    description: 'Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications',
    linkTo: '/courseDetails/4',
    // imageURL: '/images/bioInformatics.webp'
    imageURL: '/images/bioInformatics.svg'
  }, {
    id: 5,
    title: 'Network Programmability and Automation Specialization',
    description: 'More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git',
    linkTo: '/courseDetails/5',
    // imageURL: '/images/half-man-wearing-vr-headset-portrait-human-user-social-media-avatar-in-metaverse-world-free-png.webp'
    imageURL: '/images/networkProgramming.svg'
  }, {
    id: 6,
    title: 'Web 3.0 (Blockchain) and Metaverse Specialization',
    description: 'This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences',
    linkTo: '/courseDetails/6',
    imageURL: '/images/half-man-wearing-vr-headset-portrait-human-user-social-media-avatar-in-metaverse-world-free-png.webp'
  },
]


