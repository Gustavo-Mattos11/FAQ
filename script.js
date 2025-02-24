document.addEventListener(`DOMContentLoaded`, () =>{
  domArray.forEach((content) => {
  addElements(content)
})})
domArray = [
  {
    title: "Is Frontend Mentor free?",
    img: "assets/images/icon-plus.svg"
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    img: "assets/images/icon-plus.svg"
  },
  {
    title: "How can i get help if i'm stuck on a challenge?",
    img: "assets/images/icon-plus.svg"
  }]

function addElements(content) {
  const center = document.getElementById('center')
  const div = document.createElement('div')
  const card = createCard(content)
  
  div.appendChild(card)
  center.appendChild(div)
}
function createCard(content) {
  const card = document.createElement('div')
  card.className = 'divQuestion'
  const title = document.createElement('a')
  title.className = 'Question'
  const img = document.createElement(`img`)
  img.src = content?.img
  img.alt = 'icon-plus'
  title.innerText = content?.title

  card.appendChild(title)
  card.appendChild(img)
  return card
}

