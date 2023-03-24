import data from '../../data/db.json'

// achieve data info
const imagesInfo = data.images

// func: create card
function createCard(imageInfo) {
  const cardDom = document.createElement('div')
  cardDom.classList.add('card')
  cardDom.style.backgroundImage = `url(${imageInfo.address})`
  return cardDom
}

// create card group
export const cardGroup = document.createElement('div')
cardGroup.classList.add('cardGroup')

// create card
imagesInfo.forEach(imageInfo => {
  const cardDom = createCard(imageInfo)
  cardGroup.append(cardDom)
})