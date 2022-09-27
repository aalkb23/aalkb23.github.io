
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
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eos consequatur autem ipsam reiciendis. Ratione, vel fugit doloribus commodi corrupti, labore eum numquam aut fuga perspiciatis in. Ratione, repudiandae voluptatem.'
    },
    {
        title: 'Wiser',
        position: 'Research Intern',
        date: "Aug 2022",
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eos consequatur autem ipsam reiciendis. Ratione, vel fugit doloribus commodi corrupti, labore eum numquam aut fuga perspiciatis in. Ratione, repudiandae voluptatem.'
    },
    {
        title: 'Permira',
        position: 'Private Equity Intern',
        date: 'Jul 2022',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eos consequatur autem ipsam reiciendis. Ratione, vel fugit doloribus commodi corrupti, labore eum numquam aut fuga perspiciatis in. Ratione, repudiandae voluptatem.'
    },
    {
        title: 'IKEA',
        position: 'Sales Assistant',
        date: '2020 - 2022',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eos consequatur autem ipsam reiciendis. Ratione, vel fugit doloribus commodi corrupti, labore eum numquam aut fuga perspiciatis in. Ratione, repudiandae voluptatem.'
    }
]

const educations = [
  {
      title: "University of Cambridge",
      position: "Undergrad - Land Economy BSc",
      date: '2022 - 2025',
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eos consequatur autem ipsam reiciendis. Ratione, vel fugit doloribus commodi corrupti, labore eum numquam aut fuga perspiciatis in. Ratione, repudiandae voluptatem."
  },
  {
      title: "St Bonaventure's Sixth Form",
      position: 'A Level',
      date: '2020 - 2022',
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eos consequatur autem ipsam reiciendis. Ratione, vel fugit doloribus commodi corrupti, labore eum numquam aut fuga perspiciatis in. Ratione, repudiandae voluptatem."
  },
  {
      title: "St Bonaventure's Secondary School",
      position: 'GCSE',
      date: '2015 - 2020',
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eos consequatur autem ipsam reiciendis. Ratione, vel fugit doloribus commodi corrupti, labore eum numquam aut fuga perspiciatis in. Ratione, repudiandae voluptatem."
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

