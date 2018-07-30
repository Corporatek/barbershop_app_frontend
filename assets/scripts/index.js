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

// var thisApptId = document.getElementByID('apptID').val



// console.log(thisApptId)



$('#barber-btn').on('click', function(){
  $('#sign-up').css('display', 'block')
  $('#sign-in').css('display', 'block')
  $('#sign-in').on('submit', function(){
    $('#sign-up').css('display', 'none')
    $('#sign-in').css('display', 'none')
    $('#create-barber').css('display', 'block')
    $('#barber-db').css('display', 'block')
    $('#view-appt').css('display', 'block')
   // $('li button#edit').css('display', 'block')
  })
})

$('#client-btn').on('click', function(){
  $('#sign-up-client').css('display', 'block')
  $('#sign-in').css('display', 'block')
  $('#sign-in').on('submit', function(){
    $('#sign-up').css('display', 'none')
    $('#sign-in').css('display', 'none')
    $('#user-db').css('display', 'block')
    $('#view-appt').css('display', 'block')
    $('#client-edit').css('display', 'block')
    $('#create-appt').css('display', 'block')
    $('#client-edit').on('click', function(){
      $('#client-edit-appt').css('display', 'block')
    })
  })
})

// $('#sign-in').on('submit', function(){
//   $('#sign-up').css('display', 'none')
//   $('#sign-in').css('display', 'none')
//   $('#barber-db').css('display', 'block')
//   $('#view-appt').css('display', 'block')
// })


const appt = document.getElementsByClassName('.barber-appts')

console.log(appt.value)



console.log("sfas")


myFunction()


})

