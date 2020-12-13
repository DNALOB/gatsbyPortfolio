import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tim Doolan', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Tim Doolan',
  subtitle: 'Software Engineer, Cloud Architect',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a competent Javascript full stack developer that leverages AWS services to deliver solutions in an agile environment. I am an advocate of clean code, test driven development and i am language agnostic.',
  paragraphTwo:
    'Furthermore, I regularly attend monthly meet-ups such as Manchester JS, DevOps Exchange Manchester & Lean Agile Stockport. The experience i have developed has allowed me to collaborate on open source projects in my spare time.',
  paragraphThree:
    'I have an appetite for personal development and as a result i regularly attend conferences and study new technologies. Lately i have attended React Native EU 2020, WWDC2020, JS Nation Live, GitHub Satellite Keynote & Microsoft Build 2020. In addition I have a passion for Go, this fast and powerful language has practical applications for business of all sizes, and I hope will become prolific in all micro-service architecture in the future.',
  resume: 'https://timothy-doolan-cv.s3-eu-west-1.amazonaws.com/Timothy+Doolan+CV+Web+Friendly.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projectMERN.png',
    title: 'Progressive Web Applications',
    info:
      "I have experience working with progressive web applications, implementing full stack Node.js solutions. Technologies include Mongo, Express, React, Gatsby, Firebase, ect.. Having written applications ranging from static hosted web pages to server side rendered autoscaling progressive web applications. Whatever the requirements i have written an agile solution that can scale with the business needs. Whether it's a track and trace, table service app to help local business meet new covid regulations or a social app for developers to meet and share ideas I have planned, built and refactored these applications.",
    info2:
      'Here is an example of my work. A social site for developers to meet and discuss various topics. Demonstrating the use of React, Mongo, Express & Node technologies.',
    url: 'https://nc-news-link.herokuapp.com/',
    repo: 'https://github.com/tim0git/mern-socialSite', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectRN.png',
    title: 'React Native Mobile Applications',
    buttonTitle: 'Product Page',
    info:
      'I am currently working in an agile team that develops new features and maintains the core library for a white label mobile application. By Leveraging the React Native write once deploy anywhere methodology, we can deliver features for both Android and IOS users simultaneously, controlling costs and reducing development times. Features include user pool migration, multi-factor authentication, proactive quote, push notifications, deep-linking and providing an entry point to many of the commonly used web journeys.',
    info2:
      'In addition I have worked on producing functional prototype applications for startups, the latest has been offered a place on the GC Angels investor portal.',
    url: 'https://apps.apple.com/gb/app/sainsburys-bank-insurance/id1421824068',
    repo: 'https://www.cdl.co.uk/solutions/insurtechx.html',
  },
  {
    id: nanoid(),
    img: 'projectNPM.png',
    title: 'Open Source Projects',
    info:
      'I contribute to various open source projects, here is the first of these, a publish NPM package.',
    info2:
      'Contributing to the open source community is part of my own development and i enjoy being able to give something back to the community that has helped me on my journey so far.',
    url: 'https://www.npmjs.com/package/files2file_json',
    repo: 'https://github.com/tim0git/files2file_json', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectIAC.png',
    title: 'Cloud Architecture',
    info:
      'The DevOps movement has brought a seismic change to the industry. I have fully embraced this change and believe it builds better software, happier developers and removes the cultural road blocks that have become pinch points for many organisations. ',
    info2:
      'Being part cloud engineer part mobile developer, I believe software engineers need to own their code, from the very first three amigos, all the way through to deployment. With the tools now available there are no longer any excuses for software engineers not to develop, test, deploy and maintain their own solutions. This approach enables teams to reduce development times, build better solutions and maintain agility in an ever changing industry. ',
    url: '',
    repo: 'https://github.com/tim0git/tapInn-Websocket', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tim.doolan88@icloud.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codewars',
      url: 'https://www.codewars.com/users/Tim0Git',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/tim0git',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/timothy-doolan-b9b564b7/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tim0git',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
