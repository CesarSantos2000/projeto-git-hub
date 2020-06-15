$("#form-getName").submit((data) => {

    var fullName = data.target[0].value + " " + data.target[1].value + " " + data.target[2].value;

    $("#user-name").html(fullName);
    $("#form-getName").addClass("d-none");

    return false;
});


