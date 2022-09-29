
// selectors
const eduContainer = document.querySelector('.exp-contain')
const wexContainer = document.querySelector(".exp-contain-wex")
const skillContainer = document.querySelector(".rating-contain")
//

const workExps = [
    {
        title: 'Wiser Academy',
        position: 'Brand Ambassador',
        date: 'Aug 2022 - Present',
        info: "As 1 of the 200 students in the Wiser Academy, I play an integral part in helping some of the world's biggest brands attract the best soon-to-be graduates (these include L’Oréal, PA Consulting, Evercore, Frasers Group, Softcat... just to name a few!)."
    },
    {
        title: 'Wiser',
        position: 'Research Intern',
        date: "Aug 2022",
        info: "Myself and two other interns were tasked to construct a research project to find out more about people's views on apprenticeships in order to help the 'Wiser Futures' branch of the company, facilitating future apprenticeship marketing and recruitment."
    },
    {
        title: 'Permira',
        position: 'Private Equity Intern',
        date: 'Jul 2022',
        info: 'Was able to discover the worlds of Private Equity and Private Credit in the Technology, Healthcare, Consumer and Services sectors. Also gained an insight into ESG and Compliance.  '
    },
    {
        title: 'IKEA',
        position: 'Sales Assistant',
        date: '2020 - 2022',
        info: 'Here my responsibilities include stock management and replenishment as well as dealing with customer queries. I was made a shift manager which meant that I managed the entire department as well as my team.'
    }
]

const educations = [
  {
      title: "University of Cambridge",
      position: "Undergrad - Land Economy BA",
      date: '2022 - 2025',
      info: "Land Economy encompasses law and economics, with aspects of the environment, business finance and resource management. I hold particular interests in the Economics and Real Estate aspects of the course."
  },
  {
      title: "St Bonaventure's Sixth Form",
      position: 'A Level',
      date: '2020 - 2022',
      info: "Here I studied A Levels Economics, Maths and Politics in which I achieved an A*AA (respectively). It was here where my interests in development economics and politics grew immensly."
  },
  {
      title: "St Bonaventure's Secondary School",
      position: 'GCSE',
      date: '2015 - 2020',
      info: "I obtained 8 GCSE's from Grades 9-7 including a Grade 9 in English Language and a 7 in Maths. I was also appointed as a Senior Prefect where my responsibilites entailed mentoring younger students."
  }
]

const ratings = [
  {
    skill: 'HTML',
    rating: 'four'
  },
  {
    skill: 'CSS',
    rating: 'four'
  },
  {
    skill: 'JavaScript',
    rating: 'three'
  },
  {
    skill: 'Excel / Sheets',
    rating: 'three'
  },
  {
    skill: 'Communication',
    rating: 'four'
  },
  {
    skill: 'Teamwork',
    rating: 'five'
  },
  {
    skill: 'Flexibility',
    rating: 'four'
  }
]

const experienceComponent = function (education, workExps) {
  eduContainer.innerHTML = ' '
  education.forEach(function (edu) {
    htmlEdu = `
    <div class="row">
    <div class="exp-sec col-lg-2">
      <h2 class="exp-title">${edu.title}</h2>
      <h4 class="exp-date">${edu.date}</h4>
    </div>
    <div class="exp-sec col-lg-4">
      <div class="exp-position">${edu.position}</div>
      <p class="exp-info">${edu.info}</p>
    </div>
  </div>
    `
    eduContainer.insertAdjacentHTML('beforeend', htmlEdu)
  })

  workExps.forEach(function (wex) {
    htmlCareer = `
    <div class="row">
    <div class="exp-sec col-lg-2">
      <h2 class="exp-title">${wex.title}</h2>
      <h4 class="exp-date">${wex.date}</h4>
    </div>
    <div class="exp-sec col-lg-4">
      <div class="exp-position sm-grey">${wex.position}</div>
      <p class="exp-info">${wex.info}</p>
    </div>
  </div>
    `
    wexContainer.insertAdjacentHTML('beforeend', htmlCareer)

  })

}

function skillsComponent(rating) {
  skillContainer.innerHTML = ''
  rating.forEach(function (skill) { 
    html = `
    <h4 class="rating">
      ${skill.skill}
      <img class="star-img" src="/images/${skill.rating}-star.png" alt="">
    </h4>
    `
    skillContainer.insertAdjacentHTML('beforeend',html)
  })
}

experienceComponent(educations, workExps)
skillsComponent(ratings)

