import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tim Doolan', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio' // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Tim Doolan',
  subtitle: 'Software Engineer, Cloud Architect',
  cta: ''
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php' // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projectMERN.png',
    title: 'Progressive Web Applications',
    info: 'Mongo, Express React Node',
    info2: 'Social Site for developer to meet and discuss various topics',
    url: 'https://nc-news-link.herokuapp.com',
    repo: 'https://github.com/tim0git/mern-socialSite' // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectRN.png',
    title: 'Native Mobile Applications',
    info: 'React Native',
    info2:
      'Pay per mile insurance applicaton that leverages native device API and SQL backend business logic to provide insurance per mile. Includes charging zones and variable tarrifs. ',
    url: 'https://nc-news-link.herokuapp.com',
    repo: 'https://github.com/tim0git/mern-socialSite' // if no repo, the button will not show up
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
    repo: 'https://github.com/tim0git/files2file_json' // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectIAC.png',
    title: 'Cloud Architecture',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio' // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tim.doolan88@icloud.com'
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: ''
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/tim0git'
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/timothy-doolan-b9b564b7/'
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tim0git'
    }
  ]
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false // set to false to disable the GitHub stars/fork buttons
};
