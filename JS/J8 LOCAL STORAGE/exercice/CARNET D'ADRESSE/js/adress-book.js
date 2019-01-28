function addContact(){

    var title       = $('#title').val()
    var lastName    = $('#lastName').val();
    var firstName   = $('#firstName').val();
    var phone       = $('#phone').val();

    var contact = {'title': title, 'lastName': lastName, 'firstName': firstName, 'phone': phone}

    //console.log(contact)
    return contact
}