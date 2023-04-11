'use strict'
//ToolBox
import {
  delay, // Asynchronus delay function : delay(time)
  log, // shorthand console.log : log()
  select, //Custom querrySelector : select(element, ?all[true:false])
  event, // Custom event listener : event(element,event,callback)
  classlist, // Class manipulator : classlist(element,action["+"(add),"-"(remove),"x"(toggle)],class(string or [])),
  debounce, // Debounce ( runs the function only after the specified delay ) : debounce(function,delay)
  throttle, // Throttle ( runs the function n times per specified amount time ) : throttle(function,interval)
  random, // Random number generator : random(min,max)
} from './utils'

// Setup before DOM loads
const initApp = async () => {
  // 🚩 Client-side JS Code comes here
  const divider = select('.divider')
  const dividerDesktop = '../images/pattern-divider-desktop.svg'
  const dividerMobile = '../images/pattern-divider-mobile.svg'

  //Selectors
  const adviceText = select('.advice')
  const adviceNumber = select('.advice-id')

  //Load events
  if (window.innerWidth > 768) {
    divider.src = dividerDesktop
  } else {
    divider.src = dividerMobile
  }

  let advice = await generateAdvice()

  adviceText.textContent = `"${advice.advice}"`
  adviceNumber.textContent = advice.id

  event(
    window,
    'resize',
    throttle(() => {
      if (window.innerWidth > 768) {
        divider.src = dividerDesktop
      } else {
        divider.src = dividerMobile
      }
    }, 100)
  )

  event(select('.dice'), 'pointerup', async (e) => {
    e.preventDefault()
    advice = await generateAdvice()
    adviceText.textContent = `"${advice.advice}"`
    adviceNumber.textContent = advice.id
  })

  async function generateAdvice() {
    const request = await fetch(
      `https://api.adviceslip.com/advice/${random(1, 200)}`
    )
    const slip = await request.json()
    return slip.slip
  }
}

document.addEventListener('DOMContentLoaded', initApp)
