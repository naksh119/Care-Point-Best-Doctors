function formValidation(){
    let form= document.getElementById("footer_form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        console.log('form ruk gya ha')

        let userName=document.getElementById("UerName").value;
        let phone=document.getElementById("phone").value;
        let message=document.getElementById("textarea").value;
        let error=document.getElementById('show_error');
        console.log(userName, phone, message);

       

    });

   
}
formValidation();




