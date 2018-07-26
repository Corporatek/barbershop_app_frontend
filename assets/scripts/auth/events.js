'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

console.log("events works")

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')


  const data = getFormFields(this)
  api.signup(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

const data = getFormFields(this)
  api.signin(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran')

  const data = getFormFields(this)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('signed out!')

const data = getFormFields(this)
  api.signout(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const createBarber = function (event) {
  event.preventDefault()
  console.log('Barber being created...')

  const data = getFormFields(this)
    api.createBarber(data)
    .then(ui.createBarberSuccess)
    .catch(ui.createBarberFail)
}

const getBarber = function (event) {
  event.preventDefault()
  console.log("getting barber details")

  const data = getFormFields(this)
    api.getBarber(data)
    .then(ui.getBarberSuccess)
    .catch(ui.getBarberFailure)
}

const getAllBarbers = function (event) {
  event.preventDefault()
  console.log("getting all barbers")

  const data = getFormFields(this)
    api.getAllBarbers(data)
    .then(ui.getAllBarbersSuccess)
    .catch(ui.getAllBarbersFailure)
}

const newAppt = function (event) {
  event.preventDefault()
  console.log("creating appointment...")
  console.log(event)

  const data = getFormFields(this)
  console.log(data)
    api.createAppt(data)
    .then(ui.appointmentCreated)
    .catch(ui.appointmentFailed)
}

const viewAppt = function (event) {
  event.preventDefault()
 

  const data = getFormFields(this)
  console.log(data)
    api.viewBarbersAppt(data)
    .then(ui.viewApptSuccess)
    .catch(ui.viewApptFail)
}

const editAppt = function (event) {
  event.preventDefault()
 

  const data = getFormFields(this)
  console.log(data)
    api.editAppt(data)
    .then(ui.editApptSuccess)
    .catch(ui.editApptFail)
}

const clientViewAppt = function (event) {
  event.preventDefault()
 

  const data = getFormFields(this)
  console.log(data)
    api.editAppt(data)
    .then(ui.viewclientApptSuccess)
    .catch(ui.viewApptFail)
}


const addHandlers = () => {
    $('#sign-up').on('submit', onSignUp)
    $('#sign-up-client').on('submit', onSignUp)
    $('#sign-in').on('submit', onSignIn)
    $('#change-password').on('submit', onChangePassword)
    $('#create-barber').on('submit', createBarber)
    $('#get-barber').on('click', getBarber)
    $('.dropbtn').on('click', getAllBarbers)
    $('#create-appt').on('submit', newAppt)
    $('#view-appt').on('click', viewAppt)
    $('#edit-appt').on('click', editAppt)    
    $('#client-view-appt').on('click', clientViewAppt)

}

module.exports = {
    addHandlers
  
  }