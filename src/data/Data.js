import {faHome, faEnvelope, faUserGraduate, faFolder} from '@fortawesome/free-solid-svg-icons'
export const navLinks = [
    {
        id: 1,
        name: 'Home',
        icon: faHome,      
        path: '/'
    },
    {
        id: 2,
        name: `About`,
        icon : faUserGraduate,
        path: '/About'
    }, 
    {
        id: 3,
        name: 'Portfolio',
        icon : faFolder,
        path: '/portfolio'
    },
    {
        id: 4,
        name: 'Contact',
        icon : faEnvelope,
        path: '/Contact'
    },
];



export const experience = [
    {
        id: 1,
        no: '1+',
        title:'Years Experience'
    },
    {
        id: 2,
        no: '5+',
        title:'Complete Projects'
    },
];


import image1 from '../../src/assets/html.png'
import image2 from '../../src/assets/react.png'
import image3 from '../../src/assets/javascript.png'
import image4 from '../../src/assets/css.png'
import image5 from '../../src/assets/github.png'
import image6 from '../../src/assets/sass.png'

export const tools = [
    {
        id: 1,
        img: image1,
        name: "HTML5",
    },
    {
        id: 2,
        img: image2,
        name: "React",
    },
    {
        id: 3,
        img: image3,
        name: "JavaScript",
    },
    {
        id: 4,
        img: image4,
        name: "CSS3",
    },
    {
        id: 5,
        img: image5,
        name: "GitHub",
    },
    {
        id: 6,
        img: image6,
        name: "Sass",
    },
];


import {faCodeBranch, faCode,faCodeCompare,} from '@fortawesome/free-solid-svg-icons'
export const services = [
    {
        id: 1,
        icon: faCode,
        name:'Web Development',
        des:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.'
    },
    {
        id: 2,
        icon: faCodeBranch,
        name:'Apps Development',
        des:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.'
    },
    {
        id: 3,
        icon: faCodeCompare,
        name:'Python Customize',
        des:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.'
    },
];




import protfoliImg1 from '../../src/assets/laptop1.jpg'
import protfoliImg2 from '../../src/assets/p2.jpg'
import protfoliImg3 from '../../src/assets/p3.jpg'
export const portfolio = [
    {
        id: 1,
        img: protfoliImg1,
        name: 'Project-1',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
        github:'#',
    },
    {
        id: 1,
        img: protfoliImg2,
        name: 'Project-2',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
        github:'#',
    },
    {
        id: 1,
        img: protfoliImg3,
        name: 'Project-3',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
        github:'#',
    },
    {
        id: 1,
        img: protfoliImg1,
        name: 'Project-1',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
        github:'#',
    },
    {
        id: 1,
        img: protfoliImg2,
        name: 'Project-2',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
        github:'#',
    },
    {
        id: 1,
        img: protfoliImg3,
        name: 'Project-3',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
        github:'#',
    },
];



import avatar1 from '../../src/assets/avatar1.png'
import avatar2 from '../../src/assets/avatar2.png'
import avatar3 from '../../src/assets/avatar3.png'
import avatar4 from '../../src/assets/avatar4.png'
export const testimonials = [
    {
        id: 1,
        img: avatar1,
        name: 'Dong Lee',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',        
    },
    {
        id: 2,
        img: avatar2,
        name: 'Mohammed Habib',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',        
    },
    {
        id: 3,
        img: avatar3,
        name: 'Jhon Alas',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',        
    },
    {
        id: 4,
        img: avatar4,
        name: 'Irfan Nazir',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',        
    },
];