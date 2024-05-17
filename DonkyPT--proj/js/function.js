

let user = [];


function registarUser(){

    if(validaUser($('#nameUser').val()) && validaUser($('#emailUser').val())) {
        user.push(new Users(
            $('#nameUser').val(),
            $('#emailUser').val(),
            $('#subjectUser').val(),
            $('#userMessage').val(),          
        ));

        console.log(user);

        Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          return;
    }else{


        Swal.fire({
            icon: "error",
            title: "Algo Errado...",
            text: "Este nome ou este email já se encontra registado!",
            
        });
        return;
    }
    
}


function validaUser(cod){
    flag = true;

    for(let i = 0; i < user.length; i++){
        if(user[i].nome == cod || user[i].email == cod){
            flag = false;
            break;
        }
    }

    return flag;
}