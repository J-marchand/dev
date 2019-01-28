'use strict'
var contacts;  

viewContact();


function saveContact(event)
{
    event.preventDefault();
    //console.log('la');

    var contact = addContact();
    //console.log(contact);

    contacts.push(contact);
    //console.log('contacts',contacts);
    saveDataToDomStorage('adress-book', contacts);
    viewContact()
}

function viewContact(){



    contacts = loadDataFromDomStorage('adress-book');

    if(contacts == null) {
        contacts = [];
    }

   // console.log(loadDataFromDomStorage())

    $('#address-book').html('<ul>');

    for(var i = 0; i < contacts.length; i++) {
        $('#address-book ul').append('<li data-id="'+i+'"><a href="#">'+contacts[i].firstName+' '+contacts[i].lastName+'</a></li>')
    }
}

function showDetail(){

    var id = $(this).data('id');

    $('#contact-details h3').text(contacts[id].title+' '+contacts[id].firstName+' '+contacts[id].lastName);
    $('#contact-details p').text(contacts[id].phone);

    $('#contact-details').removeClass('hide');
    $('#contact-details').data('id', id);
}

function addExecute(){

    $('#contact-form').fadeIn('hide');   
  
}