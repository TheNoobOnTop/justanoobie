const synth = window.speechSynthesis;

document.querySelector('#check').addEventListener('click', check)
document.querySelector('#retry').addEventListener('click', retry)
document.querySelector('#continue').addEventListener('click', continueCheck)
document.querySelector('#showLetter').addEventListener('click', showLetter)



function check () {
    const fName = document.querySelector('#firstName').value.toUpperCase()
    const mName = document.querySelector('#middleName').value.toUpperCase()
    const lName = document.querySelector('#lastName').value.toUpperCase()

    let name = `${fName} ${mName} ${lName}`
    document.querySelector('#placeToSee').innerText = name

    if (fName === 'REGINE' && mName === 'CORTEZ' && lName === 'BALDERAMA' ) {
        document.querySelector('#continue').classList.toggle('hidden')
        document.querySelector('#retry').classList.add('hidden')
        document.querySelector('#placeToSee').classList.toggle('hidden')
    } else {
        document.querySelector('#continue').classList.add('hidden')
        document.querySelector('#retry').classList.toggle('hidden')
        document.querySelector('#placeToSee').classList.toggle('hidden')
    }
}

function retry () {}

function continueCheck () {
    document.querySelector('#section1').style.display = 'none'
    document.querySelector('#section2').classList.toggle('hidden')
    document.querySelector('#showLetter').classList.toggle('hidden')

    const fName = document.querySelector('#firstName').value.toUpperCase()
    const mName = document.querySelector('#middleName').value.toUpperCase()
    const lName = document.querySelector('#lastName').value.toUpperCase()

    let name = `${fName} ${mName} ${lName}`
    document.querySelector('#nameHere').innerText = 'You are indeed ' + name
}

function showLetter () {
    document.querySelector('#showLetter').style.display = 'none'
    document.querySelector('#letterHere').classList.toggle('hidden')

    let letter = "We're near 6 years of being together. Within all those years, my love for you grows stronger. I'm so lucky to have you. I Love You So Much Regine Balderama"

    document.querySelector('#letterHere').innerText = letter

    let shout = new SpeechSynthesisUtterance(letter)
    synth.speak(shout)
}