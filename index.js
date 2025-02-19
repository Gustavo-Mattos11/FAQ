function baseHTML() {
    const divMain = document.getElementById('main')
    const divTitle = document.createElement("div")
    const divDescription = document.createElement("div")
    const attribution = document.createElement("div")
    divMain.appendChild(divTitle)
    attribution.className = 'attribution'
    
    const attributionText = document.createElement("a")
    attributionText.href = "https://www.frontendmentor.io?ref=challenge"
    attributionText.target = "_blank"
    attributionText.innerText = "Frontend Mentor"
    
    const linkGithub = document.createElement("a")
    linkGithub.href = "https://github.com/Gustavo-Mattos11"
    linkGithub.innerText = "Gustavo Mattos"
    
    
    divMain.appendChild(attribution)
    attribution.innerHTML = `Challenge by ${attributionText.outerHTML}. Coded by ${linkGithub.outerHTML}`
    divTitle.appendChild(divDescription)

}
