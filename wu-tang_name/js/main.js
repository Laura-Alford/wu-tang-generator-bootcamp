// Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).


const arrayOne = ["Ol", "Lil", "Masta", "Big", "Charlemagne", "Eazy"]

const arrayTwo = ["tha God", "Papa", "Wayne", "LL", "Jay", "Bird"]



document.querySelector('button').addEventListener('click', getName)

function getName(){

  let aq1 = Number(document.querySelector('#questionOne').value)
  let aq2 = Number(document.querySelector('#questionTwo').value)
  let aq3 = Number(document.querySelector('#questionThree').value)
  let firstName = (aq1 + aq2 + aq3)
  nameOne = (firstName - 5) % arrayOne.length
  let aq4 = Number(document.querySelector('#questionFour').value)
  let aq5 = Number(document.querySelector('#questionFive').value)
  let lastName = (aq4 + aq5) % 2
  nameTwo = (lastName - 5) % arrayTwo.length


  return [firstName, lastName]

}


function givename(){
  let wuTangName = getName()

  let firstName = arrayOne[wuTangName[0]]
  let lastName = arrayTwo[wuTangName[1]]

  document.querySelector('.name').innerText = `Presenting: ${firstName} ${lastName}`
}

document.querySelector('button').addEventListener('click', getName)