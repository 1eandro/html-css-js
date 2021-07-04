let landen = ['Drenthe', 'Flevoland', 'Friesland', 'Gelderland', 'Groningen', 'Limburg', 'North Brabant', 'North Holland', 'Overijssel', 'South Holland', 'Utrecht', 'Zeeland'].sort(() => Math.random() - 0.5)

insertNodes();
const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkBoxes)

function insertNodes() {
  landen.forEach(land => {
    let node = createLandDivElement(land)
    let title = document.getElementById('title');
    insertAfter(title, node)
  })
}

function createLandDivElement(land) {
  let div = document.createElement('div')
  div.classList.add('box')
  let h2 = document.createElement('h2')
  let text = document.createTextNode(land)
  div.appendChild(h2).appendChild(text)
  return div
}

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    boxTop < triggerBottom ? box.classList.add('show') : box.classList.remove('show')
  })
  if (window.scrollY == 0) {
    boxes.forEach(box => { box.classList.remove('show') })
  }
}
