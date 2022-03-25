const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
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
  description: profile ,
  resume: 'https://example.com',
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
    sourceCode: 'https://github.com',
    livePreview: mygit,
  },
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
    sourceCode: 'https://github.com',
    livePreview: mygit,
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
