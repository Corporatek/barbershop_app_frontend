'use strict'

const store = require('../store.js')
const api = require('./api')



const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully').fadeOut(1500)
  $('#message').css('background-color', 'green').fadeOut(1500)
  $('#sign-up').css('display', 'none')
  console.log('signUpSuccess ran. Data is :', data)
  
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign')
  $('#message').css('background-color', 'red')
  console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully').fadeOut(1500)
  $('#message').css('background-color', 'green').fadeOut(1500)
  $('#sign-up').css('display', 'none')
  $('#sign-in').css('display', 'none')
  $('#sign-up-client').css('display', 'none')

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
  $('#change-password').css('display', 'none')
  alert("Password successfully changed!")

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
  $('#user-type').css('display', 'block')
  $('#view-appt').css('display', 'none')
  $('#user-db').css('display', 'none')
  $('#create-barber').css('display', 'none')
  $('#barber-db').css('display', 'none')
  $('#client-view').css('display', 'none')
  $('#barber-info').css('display', 'none')
  $('#barber-db').css('display', 'none')
  $('#client-edit-appt').css('display', 'none')


  // make all inputs clear with the following jquery funcion:



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
  $('#message').css('display', 'block')
  $('#message').text('Barber successfully created!').fadeOut(2000)
  $('#message').css('background-color', '#b0e0e6').fadeOut(2000)

}

const createBarberFail = function (error) {
  console.log("failed to create a new barber")
}

const getBarberSuccess = function (data) {
  console.log("successfully retrieved barber")
  const showBarber = data

  var name = JSON.stringify(data.barber.name)
  var chair = JSON.stringify(data.barber.chair)

  document.getElementById('barber-info').innerHTML = "Name: " + name + "  |  " + "Chair #: " + chair

  console.log(data)

}

const getBarberFail = function (error) {
  console.log("failed to get barber")
}

const getAllBarbersSuccess = function (data) {
console.log("successfully showing all barbers: " + JSON.stringify(data.barbers))
  
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
  $('#message').css('display', 'block')
  $('#message').text('Appointment booked!').fadeOut(2000)
  $('#message').css('background-color', '#b0e0e6').fadeOut(2000)
  alert("Appointment successfully created!")


}

const appointmentFailure = function (error) {
  console.log("failed to create a new appointment")
  $('#message').css('display', 'block')
  $('#message').text('There was an error!').fadeOut(2000)
  $('#message').css('background-color', '#red').fadeOut(2000)
}

const viewApptSuccess = function (data) {
  console.log("successfully showing all your appts: " + JSON.stringify(data.appointments))
  
  const appt = data.appointments
  const list = $('.appt-list')

  //const barber_id = appt.barber_id
  const myBarber = store.user.barber.id
  // var  = true
  $('li.barber-appts').remove()


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
    list.append('<li class="barber-appts" id="appt-' + appt_id + '" value="'+appt_id+'">' + JSON.stringify(appt_id) + ' ' +
    JSON.stringify(name) + ' ' +
    JSON.stringify(style) + ' '
    + JSON.stringify(date) + ' '
    + JSON.stringify(time) + ' ' +
    '<button id="edit">Edit</button><button class"delete "id="'+ appt_id +'">Delete</button></li>')

    // const html = `
    // <li class="barber-appts" id="appt-' + appt_id + '" value="'+appt_id+'" "onclick="'+myFunction(this)+'">' + JSON.stringify(appt_id) + ' ' +
    // JSON.stringify(name) + ' ' +
    // JSON.stringify(style) + ' '
    // + JSON.stringify(date) + ' '
    // + JSON.stringify(time) + ' ' +
    // '</li><button id="edit">EDIT</button><button id="delete">Delete</button>
    // `

    // list.append(html)
    

    $('#edit').on('click', function(){
      $('#edit-appt').css('display', 'block')
      $('.apptID').val(appt_id)
    })

 

    $('.delete').on('click', function (event) {
      $('#apptDelete').val(appt_id)
      event.preventDefault()

      // onDeleteAppt(event)
      // const data = getFormFields(this)
      api.deleteAppt(appt_id)
      .then(deleteSuccess)
      .catch(deleteFail)
      console.log("WORKED inside delete on click")
    })

    



    }

    
    // If appointment is selected return its ID to the ID input box on the edit html element.
    
  
    console.log("i worked")

    }
    
  }
  listBarbers(appt)
}
  
      

    

const viewclientApptSuccess = function (data) {
  console.log("successfully showing all your appts: " + JSON.stringify(data.appointments))
  
  const appt = data.appointments
  const list = $('.cl-appt-list')

  
  // var  = true
  // console.log(myID + "testing ID")
  $('li.cl-appts').remove()

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

  
    const barber_id = appt.barber_id
    const myID = store.user.id
    
    if (user_id == myID) {
    list.append('<li class="cl-appts" value='+appt_id+'>' +
    JSON.stringify(style) + ' '
    + JSON.stringify(date) + ' '
    + JSON.stringify(time) + ' ' +
    '<button id="cli-edit">Edit</button><button class="delete" id="'+appt_id+'">Delete</button></li>')
  
    $('#cli-edit').on('click', function(){
      $('#client-edit-appt').css('display', 'block')
      $('input.apptID').val(appt_id)
      console.log(appt_id)
    })

    $('.delete').on('click', function (event) {
      $('#apptDelete').val(this.appt_id)
      event.preventDefault()

      // onDeleteAppt(event)
      // const data = getFormFields(this)
      api.deleteAppt(appt_id)
      .then(deleteSuccess)
      .catch(deleteFail)
      console.log("WORKED inside delete on click")
    })
  }

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
  $('#message').css('display', 'block')
  $('#message').text('Successfully edited appointment!').fadeOut(2500)
  $('#message').css('background-color', 'green').fadeOut(2500)
  $('#client-edit-appt').css('display', 'none')
  $('#edit-appt').css('display', 'none')



  store.appointment
  }

const editApptFail = function (error) {
  console.log("failed to edit appointment")
}

const deleteSuccess = function (data) {
  console.log("successfully deleted appointment")
  $('#message').css('display', 'block')
  $('#message').text('Successfully deleted appointment').fadeOut(2500)
  $('#message').css('background-color', 'green').fadeOut(2500)
  }

const deleteFail = function (error) {
  console.log("failed to delete appointment")
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
    deleteSuccess,
    deleteFail,
    viewclientApptSuccess
  }