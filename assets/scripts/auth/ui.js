'use strict'

const store = require('../store.js')
const api = require('./api')


const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign')
  $('#message').css('background-color', 'red')
  console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
//   var x = document.getElementById("game");
//   var y = document.getElementById("sign-in");
//   y.style.display = "none"
//   x.style.display =  "block"
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.log('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
  console.log('changePasswordSuccess ran and nothing was returned! ')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').css('background-color', 'red')
  console.log('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log('signOutSuccess ran.')
  $('#sign-out').css('display', 'none')
  $('#sign-up').css('display', 'block')

  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error while signing out')
  $('#message').css('background-color', 'red')
  console.log('signOutFailure ran. Error is :', error)
}

const createBarberSuccess = function (data) {
  console.log("successfully created a new barber")
  store.barber
  $('#create-barber').css('display', 'none')

}

const createBarberFail = function (error) {
  console.log("failed to create a new barber")
}

const getBarberSuccess = function (data) {
  console.log("successfully retrieved barber")
  const showBarber = data

  var name = JSON.stringify(data.barber.name)
  var chair = JSON.stringify(data.barber.chair)

  document.getElementById('barber-info').innerHTML = name + chair

  console.log(data)

}

const getBarberFail = function (error) {
  console.log("failed to get barber")
}

const getAllBarbersSuccess = function (data) {
  //console.log("successfully showing all barbers: " + JSON.stringify(data.barbers[13]))
  
  const person = data.barbers
  const list = $('.dropdown-content')

const listBarbers = function(data) {
    for (let i = 0; i < data.length; i++) {
     // JSON.stringify(data[i])
    let name = data[i].name
    let id = data[i].id

    list.append('<button class="select-barber" id="'+ id + '">' + JSON.stringify(name) + '</button>')
    
    
   // console.log("i called")

  let barberPicked = $('#pick-barber')
  let userID = $('#userID')

  $('.select-barber').on('click', function() {
    event.preventDefault()
    barberPicked.val(this.id)
    userID.val(store.user.id)
    })

  }
}
  listBarbers(person)

  
}

const getAllBarbersFail = function (error) {
  console.log("failed to create a new barber")
}

const appointmentCreated = function (data) {
  console.log("successfully created an appointment")
  console.log(store.appointment)
  console.log(data.appointment)
}

const appointmentFailure = function (error) {
  console.log("failed to create a new appointment")
}

const viewApptSuccess = function (data) {
  console.log("successfully showing all your appts: " + JSON.stringify(data.appointments))
  
  const appt = data.appointments
  const list = $('.appt-list')

  //const barber_id = appt.barber_id
  const myBarber = store.user.barber.id
  // var  = true

const listBarbers = function(data) {
  // if (barber_id == myBarber) {
  
    for (let i = 0; i < data.length; i++) {
     // JSON.stringify(data[i])
    let name = data[i].name
    let date = data[i].date
    let time = data[i].time
    let style = data[i].haircut
    let barber_id = data[i].barber_id
    let appt_id = data[i].id
    
    if (barber_id == myBarber) {
    list.append('<li class="barber-appts" value='+appt_id+'>' + JSON.stringify(name) + ' ' +
    JSON.stringify(style) + ' '
    + JSON.stringify(date) + ' '
    + JSON.stringify(time) + ' ' +
    '</li>')}

    }
    console.log("i worked")

  
}
  listBarbers(appt)
}
const viewclientApptSuccess = function (data) {
  console.log("successfully showing all your appts: " + JSON.stringify(data.appointments))
  
  const appt = data.appointments
  const list = $('.appt-list')

  //const barber_id = appt.barber_id
  const myID = data.id
  // var  = true
  console.log(myID + "testing ID")

const listBarbers = function(data) {
  // if (barber_id == myBarber) {
  
    for (let i = 0; i < data.length; i++) {
     // JSON.stringify(data[i])
    let name = data[i].name
    let date = data[i].date
    let time = data[i].time
    let style = data[i].haircut
    let user_id = data[i].user_id
    let appt_id = data[i].id
    
    if (user_id == myID) {
    list.append('<li class="barber-appts" value='+appt_id+'>' +
    JSON.stringify(style) + ' '
    + JSON.stringify(date) + ' '
    + JSON.stringify(time) + ' ' +
    '</li>')}

    }
    console.log("i worked")

  
}
  listBarbers(appt)
}




const viewApptFail = function (error) {
  console.log("failed to view appointment")
}

const editApptSucces = function (data) {
  console.log("successfully edited appointment")
  store.appointment
  }

const editApptFail = function (error) {
  console.log("failed to edit appointment")
}



module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordSuccess,
    changePasswordFailure,
    signOutSuccess,
    signOutFailure,
    createBarberFail,
    createBarberSuccess,
    getBarberSuccess,
    getBarberFail,
    getAllBarbersFail,
    getAllBarbersSuccess,
    appointmentCreated,
    appointmentFailure,
    viewApptSuccess,
    viewApptFail,
    editApptSucces,
    editApptFail,
    viewclientApptSuccess
  }