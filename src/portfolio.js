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
  picture : "https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-1/271929437_10215645295883895_6470745496118156291_n.jpg?stp=dst-jpg_p160x160&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Fz6Wwx224ZQAX8MC5mQ&_nc_ht=scontent.ftun10-1.fna&oh=00_AT8aK0CwJ0DW_5x8qq2WiT0ocXauO1fTyvl0spQUFEGlXg&oe=625D9ACC" , 
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
    team : [0,0,0,0,0] ,
    description:
    `an app mobile that offer to ower 20% youth population a mini jobs that match their availability
    to companies to hire a trusted worker regarding to their
    previous feedbacks
    `,
    stack: ['react Native', 'mysql', 'express js' ,'node mailer' , "JWT" , "google maps API" , "firebase" , "cloudinary"  ],
    sourceCode: 'https://github.com/theFourthFive',
    livePreview: mygit,
    image : "https://images-platform.99static.com//xjMAot8gseExfFvALMsP1Ukov1Y=/186x177:777x768/fit-in/500x500/99designs-contests-attachments/79/79173/attachment_79173468",
    repo : "https://github.com/theFourthFive"
  },
  {
    name: 'bit-optimiser',
    tasks : [`github management and conflicts solving
    ` ,`setting Data Base schema
    `,`authentication process` ,`cloudinary files upload
    `,`google passport
    `],
    position : "SCRUM Master",
    team : [0,0,0,0,0] ,
    description:
    `a platform that allows users to rent their unneeded tools and
    make money from them    
    `,
    stack: ['Vue js', 'mongoDB', 'express js' ,'node mailer' , "firebase"],
    sourceCode: 'https://github.com/Bit-Optimizers',
    livePreview: mygit,
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtslWiX16yKkmh00sa69ZPssIkame9UG_zQ&usqp=CAU",
    repo : "https://github.com/Bit-Optimizers"
  },
  {
    name: 'E LEARNING PLATEFORM',
    tasks : [`github management and conflicts solving ` , `setting Data Base schema` , `JWT authentication API
    ` , `students interaction (likes, comments, vues, rating)` , `stripe payement API` ],
    position : "SCRUM Master",
    team : [0,0,0,0,0] ,
    description:
    `A plate form that allows for teachers
    to post free/premium courses in all digital forms
    (videos, text, PDF...)
    and to students check, buy, and interact with posts
    by likes, comments, vues and rating
        
    `,
    stack: ['angular', 'mongoDB', 'express js' ,'node mailer' , "firebase"],
    sourceCode: 'https://github.com/team-glory',
    livePreview: mygit,
    image : "https://s.tmimgcdn.com/scr/800x500/83500/e-learning-logo-template_83519-5-original.jpg",
    repo : "https://github.com/Bit-Optimizers"
  },
  {
    name: 'G2A tunisia',
    tasks : [`github management and conflicts solving ` , `setting Data Base schema` , `JWT authentication API
    ` , `students interaction (likes, comments, vues, rating)` , `stripe payement API` ],
    position : "SCRUM Master",
    team : [0,0,0,0,0] ,
    description:
    `A platform that allows for gamers to :
    sell and exchange games by a secure payment process
    that protect them from scammers    
    `,
    stack: ['react', 'mySQL', 'express js' ,'node mailer' , "cloudinary"],
    sourceCode: 'https://github.com/teamFivee',
    livePreview: mygit,
    image : "https://avatars.githubusercontent.com/u/95681015?s=200&v=4",
    repo : "https://github.com/Bit-Optimizers"
  },
  {
    name: 'My portfolio',
    tasks : ["responsive design","node mailer","heroku deployment"],
    position : "developer",
    team : [0] ,
    description:
    `a personal project that allows me to present 
     my portfolio to contain my previous projects as well 
     as my resume and a contact section so people can reach me   
    `,
    stack: ['react', 'mongoDB', 'express js' ,'node mailer'],
    sourceCode: 'https://github.com/myPortfolioV1',
    livePreview: mygit,
    image : "https://lefebvrealexandre.files.wordpress.com/2015/05/portfolio-logo.jpg",
    repo : "https://github.com/Bit-Optimizers"
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
