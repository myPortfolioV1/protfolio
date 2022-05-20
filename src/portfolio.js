const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'My portfolio.',
}

const profile =`I consider IT world as passion, I have worked on a
respectful number of projects as SCRUM master
which allowed me to sharpen my technical skills
and most importantly, my soft skills. I am still learning
and exploring this wide world and motivated
to be my best version.
`
const mygit = "https://github.com/aminejelass"
const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Med Amine Jelassi',
  role: 'full stack developper',
  picture : "https://res.cloudinary.com/jobify/image/upload/v1643743903/xbt2xsg87jxgt3jediyd.jpg" , 
  description: profile ,
  resume: 'https://mega.nz/file/dsEElYxQ#YEk2LzbearxVkXDbBUZm7weyfVwbGhKA8vkTmG2qGSY',
  social: {
    linkedin: 'https://www.linkedin.com/in/amine-jelassi/',
    github: mygit,
  },
  image : "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/271929437_10215645295883895_6470745496118156291_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Cm8eLVQFgD0AX_C9kyJ&_nc_ht=scontent.ftun9-1.fna&oh=00_AT_CCYtMG7iQwnjW6D-neIMBaYHcgzSsz1oXY5g6JRsQAg&oe=624201BC"
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'JOBIFY',
    tasks : ["trello board","github conflict management of 5 contributors","Data Base schema","social authentication","twilio" , "google maps API" , "firebase files upload" , "integration payement API"],
    position : "SCRUM Master",
    roleImage : "https://res.cloudinary.com/jobify/image/upload/v1652864157/Resilient-Leadership-removebg-preview_ypbfmt.png", 
    team : [0,0,0,0,0] ,
    victors:"https://res.cloudinary.com/jobify/image/upload/v1652800383/teamwoking_hqydk7.png" ,
    description:
    `an app mobile that offer to ower 20% youth population a mini jobs that match their availability
    to companies to hire a trusted worker regarding to their
    previous feedbacks
    `,
    stack: ['react Native', 'mysql', 'express js' , "google maps API" , "firebase"  ],
    sourceCode: 'https://github.com/theFourthFive',
    livePreview: mygit,
    image : "https://images-platform.99static.com//xjMAot8gseExfFvALMsP1Ukov1Y=/186x177:777x768/fit-in/500x500/99designs-contests-attachments/79/79173/attachment_79173468",
    repo : "https://github.com/theFourthFive",
    tecklogo:["https://www.apollo-formation.com/wp-content/uploads/react-native-logo-1-216x250.png","https://blog.jeremylandon.com/images/logo/nodejs.png","https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-cdb-for-mysql-7.png"]
  },
  {
    name: 'bit-optimiser',
    tasks : [`github management and conflicts solving
    ` ,`setting Data Base schema
    `,`authentication process` ,`cloudinary files upload
    `,`google passport
    `],
    position : "SCRUM Master",
    roleImage : "https://res.cloudinary.com/jobify/image/upload/v1652864157/Resilient-Leadership-removebg-preview_ypbfmt.png", 
    team : [0,0,0,0,0] ,
    victors:"https://res.cloudinary.com/jobify/image/upload/v1652800383/teamwoking_hqydk7.png" ,

    description:
    `a platform that allows users to rent their unneeded tools and
    make money from them    
    `,
    stack: ['Vue js', 'mongoDB', 'express js' ,'node mailer' , "firebase"],
    sourceCode: 'https://github.com/Bit-Optimizers',
    livePreview: mygit,
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtslWiX16yKkmh00sa69ZPssIkame9UG_zQ&usqp=CAU",
    repo : "https://github.com/Bit-Optimizers",
    tecklogo:["https://res.cloudinary.com/jobify/image/upload/v1652880471/Vue.js-Logo-Vector-removebg-preview_gjdnhi.png","https://blog.jeremylandon.com/images/logo/nodejs.png","https://w7.pngwing.com/pngs/241/983/png-transparent-mongodb-nosql-database-computer-icons-others-leaf-grass-fruit.png"]
  },
  {
    name: 'E LEARNING',
    tasks : [`github management and conflicts solving ` , `setting Data Base schema` , `JWT authentication API
    ` , `interaction (likes, comments, vues, rating)` , `stripe payement API` ],
    position : "SCRUM Master",
    roleImage : "https://res.cloudinary.com/jobify/image/upload/v1652864157/Resilient-Leadership-removebg-preview_ypbfmt.png", 
    team : [0,0,0,0,0] ,
    victors:"https://res.cloudinary.com/jobify/image/upload/v1652800383/teamwoking_hqydk7.png" ,
    description:
    `A plate form that allows teachers
    to post \n free/premium courses \n (videos, text, PDF...) \n
    and to students check, buy, and interact \n with likes, comments, vues and rating
        
    `,
    stack: ['angular', 'mongoDB', 'express js' ,'node mailer' , "firebase"],
    sourceCode: 'https://github.com/team-glory',
    livePreview: mygit,
    image : "https://s.tmimgcdn.com/scr/800x500/83500/e-learning-logo-template_83519-5-original.jpg",
    repo : "https://github.com/Bit-Optimizers",
    tecklogo:["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png","https://blog.jeremylandon.com/images/logo/nodejs.png","https://w7.pngwing.com/pngs/241/983/png-transparent-mongodb-nosql-database-computer-icons-others-leaf-grass-fruit.png"]
  },
  {
    name: 'G2A tunisia',
    tasks : [`github management and conflicts solving ` , `setting Data Base schema` , `JWT authentication API
    ` , `interactions (likes,vues, rating)` , `stripe payement API` ],
    position : "SCRUM Master",
    roleImage : "https://res.cloudinary.com/jobify/image/upload/v1652864157/Resilient-Leadership-removebg-preview_ypbfmt.png", 
    team : [0,0,0,0,0] ,
    victors:"https://res.cloudinary.com/jobify/image/upload/v1652800383/teamwoking_hqydk7.png" ,

    description:
    `A platform that allows for gamers to :
    sell and exchange games by a secure payment process
    that protect them from scammers    
    `,
    stack: ['react', 'mySQL', 'express js' ,'node mailer' , "cloudinary"],
    sourceCode: 'https://github.com/teamFivee',
    livePreview: mygit,
    image : "https://avatars.githubusercontent.com/u/95681015?s=200&v=4",
    repo : "https://github.com/Bit-Optimizers",
    tecklogo:["https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png","https://blog.jeremylandon.com/images/logo/nodejs.png","https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-cdb-for-mysql-7.png"]
  },
  {
    name: 'My portfolio',
    tasks : ["responsive design","node mailer","heroku deployment"],
    position : "developer",
    roleImage : "https://res.cloudinary.com/jobify/image/upload/v1652862756/182-1822816_developer-clipart-hd-png-download_prev_ui_ybcznf.png",
    team : [0] ,
    victors:"https://res.cloudinary.com/jobify/image/upload/v1652800212/soloproject-removebg-preview_csxdw4.png",
    description:
    `a personal project that allows me to present 
     my portfolio to contain my previous projects as well 
     as my resume and a contact section so people can reach me   
    `,
    stack: ['react', 'mongoDB', 'express js' ,'node mailer'],
    sourceCode: 'https://github.com/myPortfolioV1',
    livePreview: mygit,
    image : "https://lefebvrealexandre.files.wordpress.com/2015/05/portfolio-logo.jpg",
    repo : "https://github.com/Bit-Optimizers",
    tecklogo:["https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png","https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_502,h_518/https://keytotech.com/wp-content/uploads/2019/05/firebase.png"]
  }

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
 "javascript",
 "react",
 "react Native",
 "redux",
 "angular",
 "vue js",
 "node",
 "express",
 "sql",
 "MySQL",
 "oracle",
 "postgresQL"
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'aminejelassi95@gmail.com',
}

export { header, about, projects, skills, contact }
