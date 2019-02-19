'use strict'

$.getJSON('http://10.10.109.158/api_back/employees.php?api_key=aze', getEmployees);

$.getJSON('http://10.10.109.158/api_back/customer.php?api_key=aze&id=103', getCustormer);

$.getJSON('http://10.10.109.158/api_back/office.php', getOffice);

function getEmployees(response)
{
    console.log(response);
}

function getCustormer(response)
{
    console.log('customer 103', response);
}

function getOffice(response){

    console.log('offcice', response);
    console.log('office 3', response [2])
}