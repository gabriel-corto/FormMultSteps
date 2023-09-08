

const stepOne = document.querySelector(".step-one")
const stepTwo = document.querySelector(".step-two")
const stepThree = document.querySelector(".step-three")

const activeStep  = document.querySelectorAll(".step")

stepOne.addEventListener("click", (event)=> {
  if(event.target.classList.contains("next")){
  
    stepOne.classList.remove("show")
    stepOne.classList.add("hide")

    stepTwo.classList.add("show")
    stepTwo.classList.remove("hide")

    activeStep[0].classList.add("active")
    activeStep[0].innerHTML = `<i class="fa-solid fa-check"></i>`
  }
})
stepTwo.addEventListener("click", (event)=> {
  if(event.target.classList.contains("next")){
  
    stepTwo.classList.remove("show")
    stepTwo.classList.add("hide")

    stepThree.classList.add("show")
    stepThree.classList.remove("hide")

    activeStep[1].classList.add("active")
    activeStep[1].innerHTML = `<i class="fa-solid fa-check"></i>`
    
  }else if(event.target.classList.contains("prev")){
    stepTwo.classList.remove("show")
    stepTwo.classList.add("hide")

    stepOne.classList.add("show")
    stepOne.classList.remove("hide")

    activeStep[0].classList.remove("active")
    activeStep[0].innerHTML = `1`
  }

})
stepThree.addEventListener("click", (event)=> {
  if(event.target.classList.contains("submit")){
    
    
  }else if(event.target.classList.contains("prev")){
    
    stepTwo.classList.add("show")
    stepTwo.classList.remove("hide")

    stepThree.classList.add("hide")
    stepThree.classList.remove("show")

    activeStep[1].classList.remove("active")
    activeStep[1].innerHTML = `2`

  }
})
