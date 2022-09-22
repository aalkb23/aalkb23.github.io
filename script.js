
const educationContainer = document.querySelector('.edu-contain')
const workContainer = document.querySelector('.work-contain')



const educations = [
    {
        title: 'Fitzwilliam College, University of Cambridge',
        position: 'Land Economy BSc Undergraduate',
        date: '2022 - 2025',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore vero error, amet vel iusto velit officiis maiores obcaecati! Eos tempore excepturi architecto iste numquam temporibus modi repudiandae consequatur quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum asperiores officia nihil.'
    },
    {
        title: 'St Bonaventures Sixth Form',
        position: 'A Level',
        date: '2020 - 2022',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore vero error, amet vel iusto velit officiis maiores obcaecati! Eos tempore excepturi architecto iste numquam temporibus modi repudiandae consequatur quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum asperiores officia nihil.'
    },
    {
        title: 'St Bonaventures Secondary School',
        position: 'GCSE',
        date: '2015 - 2020',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore vero error, amet vel iusto velit officiis maiores obcaecati! Eos tempore excepturi architecto iste numquam temporibus modi repudiandae consequatur quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum asperiores officia nihil.'
    }
]

const workExps = [
    {
        title: 'Wiser Academy',
        position: 'Brand Ambassador',
        date: 'Aug 2022 - Present',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore vero error, amet vel iusto velit officiis maiores obcaecati! Eos tempore excepturi architecto iste numquam temporibus modi repudiandae consequatur quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum asperiores officia nihil.'
    },
    {
        title: 'Wiser',
        position: 'Research Intern',
        date: 'Jul 2022',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore vero error, amet vel iusto velit officiis maiores obcaecati! Eos tempore excepturi architecto iste numquam temporibus modi repudiandae consequatur quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum asperiores officia nihil.'
    },
    {
        title: 'Permira',
        position: 'Private Equity Intern',
        date: 'Jul 2022',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore vero error, amet vel iusto velit officiis maiores obcaecati! Eos tempore excepturi architecto iste numquam temporibus modi repudiandae consequatur quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum asperiores officia nihil.'
    },
    {
        title: 'IKEA',
        position: 'Sales Assistant',
        date: '2020 - 2022',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore vero error, amet vel iusto velit officiis maiores obcaecati! Eos tempore excepturi architecto iste numquam temporibus modi repudiandae consequatur quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum asperiores officia nihil.'
    }
]






// components
const eduComponent = function(educations) {
    educationContainer.innerHTML = ''
    educations.forEach(function (exp, i) {
        html = `
        <div class="exp-row row">
        <div class="headers col-lg-4">
          <h2 class="exp-name">
            ${exp.title}
          </h2>

          <h4 class="exp-date">${exp.date}</h4>
        </div>
        <div class="exp-description col-xs-4 col-lg-6">
          <h3 class="exp-sub">${exp.position}</h3>
          ${exp.info}
        </div>
      </div>
      `
    educationContainer.insertAdjacentHTML("beforeend",html)
    })
}

const workComponent = function (workExps) {
    workContainer.innerHTML = ''
    workExps.forEach(function (exp) {
        html = `
        <div class="exp-row row">
        <div class="headers col-lg-4">
          <h2 class="exp-name">
            ${exp.title}
          </h2>

          <h4 class="exp-date">${exp.date}</h4>
        </div>
        <div class="exp-description col-lg-6">
          <h3 class="exp-sub">${exp.position}</h3>
          ${exp.info}
        </div>
      </div>
      `
        workContainer.insertAdjacentHTML("beforeend", html)
    })
}

eduComponent(educations)
workComponent(workExps)


// col-lg-8 d-none d-md-block