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
    'I am a competent Javascript full stack developer that leverages AWS services to deliver solutions in an agile environment. I am a advocate of clean code, test driven development and i am language agnostic.',
  paragraphTwo:
    'Furthermore, I regularly attend monthly meetups such as Manchester JS, DevOps Exchange Manchester & Lean Agile Stockport. The experience i have developed has allowed me to collaborate on open source projects in my spare time.',
  paragraphThree:
    'I have an appetite for personal development and as a result i regularly attend conferences and study new technologies. Lately i have attended React Native EU 2020, WWDC2020, JS Nation Live, GitHub Satellte Keynote & Microsoft Build 2020.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projectMERN.png',
    title: 'Progressive Web Applications',
    info:
      'I have experience working with progressive web applications, implimenting full stack Node.js solutions. Technologies include Mongo, Express, React, Gatsby, Firebase, ect.. Having written applications ranging from static hosted web pages to server side rendered autoscaling progressive web applications. Whatever the requirements i have written an agile solution that can scale with the business needs.',
    info2:
      'Here is an example of my work. A social site for developers to meet and discuss various topics. Demonstrating the use of React, Mongo, Express & Node technologies.',
    url: 'https://nc-news-link.herokuapp.com',
    repo: 'https://github.com/tim0git/mern-socialSite', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectRN.png',
    title: 'Native Mobile Applications',
    info:
      'I am currently working in an agile team that developes new features and maintains the core libary for a white label mobile application. By Leveraging the React Native write once deploy anywhere methadology, we can deliver features for both Android and IOS users simulationusly, controlling costs and reducing devlopement times.',
    info2:
      'Pay per mile insurance applicaton that leverages native device API and SQL backend business logic to provide insurance per mile. Includes charging zones and variable tarrifs. ',
    url: 'https://nc-news-link.herokuapp.com',
    repo: 'https://github.com/tim0git/mern-socialSite', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectNPM.png',
    title: 'Open Source Projects',
    info:
      'I contribute to various open source projects, here is the first of these, a publish NPM package.',
    info2:
      'Contributing to the open soucre community is part of my own developement and i enjoy being able to give something back to the community that has helped me on my journey so far.',
    url: 'https://www.npmjs.com/package/files2file_json',
    repo: 'https://github.com/tim0git/files2file_json', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectIAC.png',
    title: 'Cloud Architecture',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
      name: 'twitter',
      url: '',
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
