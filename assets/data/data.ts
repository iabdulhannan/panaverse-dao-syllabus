import {CourseCardType, CourseQuarter, DropdownData} from "daoRoot/assets/types/types";

export const dropdownData: DropdownData[] = [
  {
    title: 'Core Courses',
    items: [
      {
        courseName: 'Object-Oriented Programming using TypeScript',
        subtitle: 'Quarter I',
        linkTo: 'metaverseCourseDetails#1',
      },
      {
        courseName: 'Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
        subtitle: 'Quarter II',
        linkTo: 'metaverseCourseDetails#2',
      },
      {
        courseName: 'Dollar Making Bootcamp - Full-Stack Template and API Product Development',
        subtitle: 'Quarter III',
        linkTo: 'metaverseCourseDetails#3',
      }],
  },
  {
    title: 'Specialized Tracks',
    items: [
      {
        courseName: 'Web 3.0 (Blockchain) and Metaverse Specialization',
        subtitle: 'Quarter III & IV',
        linkTo: 'metaverseCourseDetails#4',
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
    linkTo: 'metaverseCourseDetails#1',
    isCore: true,
    quarter: "I"
  },
  {
    courseID: '1',
    image: LambdaLogo,
    title: 'Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
    description: 'The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs.The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).',
    linkTo: 'metaverseCourseDetails#2',
    isCore: true,
    quarter: "II"
  },{
    courseID: '1',
    image: DollarLogo,
    title: 'Dollar Making Bootcamp - Full-Stack Template and API Product Development',
    description: 'Develop Web 3.0 Templates and GraphQL APIs to sell and earn Dollars',
    linkTo: 'metaverseCourseDetails#',
    isCore: true,
    quarter: "III"
  },
]

export const metaverseCourseDetails : CourseQuarter[] = [
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
  }, {
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


// export const specializedTracks: CourseCardType[] = [{
//   image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
//   title: 'Web 3.0 (Blockchain) and Metaverse Specialization',
//   description: 'This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.',
//   linkTo: '#'
// }, {
//   image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
//   title: 'Artificial Intelligence (AI) and Deep Learning Specialization',
//   description: 'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.',
//   linkTo: '#'
// }, {
//   image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
//   title: 'Cloud-Native Computing Specialization',
//   description: 'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.',
//   linkTo: '#'
// }, {
//   image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
//   title: 'Ambient Computing and IoT Specialization',
//   description: 'The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.',
//   linkTo: '#'
// },
// ]
