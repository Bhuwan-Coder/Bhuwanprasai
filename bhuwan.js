var form=document.getElementById("bp");
form.onsubmit=function(e){
    e.preventDefault();
    var text=document.getElementById("name").value;
   

    swal({
        title: "Great!",
        text: "Your Name Is "+text,
        icon: "success",
      });



}