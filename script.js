/*<div id="content">
          Is Frontend Mentor free?

          tend Mentor offers both free and premium coding challenges, with the free Yes, Fron
          option providing access to a range of projects suitable for all skill levels.
        </div>

        <div id="content">
          Can I use Frontend Mentor projects in my portfolio?

          Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
          way to showcase your skills to potential employers!
        </div>
        <div id="content">
        How can I get help if I'm stuck on a Frontend Mentor challenge?

        The best place to get help is inside Frontend Mentor's Discord community. There's a help
        channel where you can ask questions and seek support from other community members.

        </div> */
window.addEventListener("load", DOM)
function DOM() {
  const main = document.createElement("main")
  const background = document.createElement("div")
  const center = document.createElement("div")
  const title = document.createElement("div")
  const concept = document.createElement("div")
  const attribution = document.createElement("div")
  const subtitle = document.createElement("section")
  const description = document.createElement("section")
  const img_title = document.createElement("img")
  const img_subtitle = document.createElement("img")
  const h1 = document.createElement("h1")
  const h2 = document.createElement("h2")
  const p = document.createElement("p")
  background.className = "background"
  center.className = "center"
  concept.className = "concept"
  subtitle.className = "subtitle"
  description.className = "description"
  attribution.className = "attribution"
  img_title.src = "/assets/images/icon-star.svg"
  img_title.alt = "Icon-Star"
  img_title.style = "width: 20px;"
  img_subtitle.src = "/assets/images/icon-minus.svg"
  img_subtitle.alt = "Icon-Minus"
  h2.innerHTML = "FAQs"
  h1.innerHTML = "What is Frontend Mentor, and how will it help me?"
  p.innerHTML = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
  attribution.innerHTML = "Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>Frontend Mentor</a>. <br> Coded by <a href='#'>Gustavo Nunes de Mattos</a>."
  title.className = "title"
  document.body.appendChild(main)
  main.appendChild(background)
  background.appendChild(center)
  background.appendChild(attribution)
  center.appendChild(title)
  title.appendChild(img_title)
  title.appendChild(h2)
  center.appendChild(concept)
  concept.appendChild(subtitle)
  subtitle.appendChild(h1)
  subtitle.appendChild(img_subtitle)
  concept.appendChild(description)
  description.appendChild(p)
  

}
domArray = [
  {
    title: "Is Frontend Mentor free?",
    img: "/images/icon-plus.svg"
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    img: "/images/icon-plus.svg"
  },
  {
    title: "How can i get help if i'm stuck on a challenge?",
    img: "/images/icon-plus.svg"
  }]
domArray.map((content)=>{
  addElements(content)
})
function addElements(content) {
  const divQuestion = document.getElementById(content?.title)
  const img = document.getElementById(content?.img)
  divQuestion.appendChild()
  img.appendChild()
}
function createCard(content){
  const div = document.createElement('div')
}