'use strict'

const config = require('../config')
const store = require('../store')
const main = require('../index')

console.log("made it to api")

const signup = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signin = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data

  })
}

const changePassword = function (data) {
  console.log('date is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signout = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createBarber = function (data) {
  console.log('barber information is ', data)
  return $.ajax({
    url: config.apiUrl + '/barbers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data

  })
}

const getBarber = function (data) {
  console.log('my barber information is: ', store.user.barber)
  return $.ajax({
    url: config.apiUrl + '/barbers/' + store.user.barber.id,
    method: 'GET',
    data
  })
}

const getAllBarbers = function (data) {
  console.log('All barbers: ', data)
  return $.ajax({
    url: config.apiUrl + '/barbers',
    method: 'GET',
    data
  })
}

const createAppt = function (data) {
  console.log('Appointment information is: ', data)
  return $.ajax({
    url: config.apiUrl + '/appointments',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data

  })
}

const viewBarbersAppt = function (data) {
  console.log('Appointment information is: ', data)
  return $.ajax({
    url: config.apiUrl + '/appointments',
    method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
    data

  })
}

const editAppt = function (data) {
  console.log('Appointment information is: ', data)
  return $.ajax({
    url: config.apiUrl + '/appointments/' + data.id + '/edit',
    method: 'PATCH',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
    data

  })
}


module.exports = {
    signup,
    signin,
    changePassword,
    signout,
    createBarber,
    getBarber,
    getAllBarbers,
    createAppt,
    viewBarbersAppt,
    editAppt
}