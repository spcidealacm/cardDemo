import '../css/style.scss'

import { cardGroup } from './card'
import { buttonGroup } from './button'

// app dom
const appDom = document.getElementById('app')

// app dom add card group
appDom.append(cardGroup)

// add button group to card group
cardGroup.append(buttonGroup)


// left
const leftDom = buttonGroup.querySelector(".left")

// right
const rightDom = buttonGroup.querySelector('.right')



leftDom.addEventListener('click', () => {
  // cards
  const cardList = cardGroup.querySelectorAll('.card')
  console.log('left');
  cardGroup.prepend(cardList[cardList.length - 1])
})

rightDom.addEventListener('click', () => {
  // cards
  const cardList = cardGroup.querySelectorAll('.card')
  console.log('right');
  // cardGroup.appendChild(cardList[0])
  cardGroup.insertBefore(cardList[0], buttonGroup)
})


