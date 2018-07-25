'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const store = require('./store.js')
const authEvents = require('./auth/events.js')
const api = require('./auth/api.js')

$(document).ready(function() {
  // your JS code goes here

// var barberType = $('#user-barber')

// $('#barber-btn').onClick(barberType.val('true'))

console.log("hi")
authEvents.addHandlers()

var barberType = $('#user-barber')

$('#barber-btn').on('click', function() {
  barberType.val('true')}
  )



console.log("sfas")
})

