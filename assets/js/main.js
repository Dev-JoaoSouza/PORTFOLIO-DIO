function updateProfileInfo(profileData) {
    const photo = document.querySelector('.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.querySelector('.title span')
    name.innerText = profileData.name

    const job = document.querySelector('.job')
    job.innerText = profileData.job

    const location = document.querySelector('.location')
    location.innerText = profileData.location

    const phone = document.querySelector('.phone a')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.querySelector('.email a')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateHardSkills(profileData) {
    const hardSkills = document.querySelector('.tools ul')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateSoftSkills(profileData) {
    const softSkills = document.querySelector('.personal ul')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.querySelector('.languages')
    languages.innerHTML = profileData.languages.map(skill => `<li>${skill}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio =document.querySelector('.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
}

function updateProfessionalExpience(profileData) {
    const professionalExperience = document.querySelector('.experience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExpience(profileData)
})()