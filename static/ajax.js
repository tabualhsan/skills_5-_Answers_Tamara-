"use strict";


function getInfo(evt) {
    evt.preventDefault();

    let formInputs = $("#human-id").val()

        console.log(formInputs);


    $.get("/api/human/" + formInputs, updateInfo);

}

function updateInfo(results) {
    console.log(results);
    if (results.status == "success"){
       $('#fname').html(results.fname);
       $('#lname').html(results.lname);
       $('#email').html(results.email);

    }



}


$("#get-human").on('submit', getInfo);


