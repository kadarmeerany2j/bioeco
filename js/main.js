



//form validation
Submit = () =>{ 
    var success= document.getElementById("success");
    success.style.display = 'none';
    var emailStandard = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    var txtname =  document.getElementById("name");
    var txtEmail = document.getElementById("email");
     var txtNumber = document.getElementById("phoneno"); 
      var txtMsg = document.getElementById("message");  
     
   
    var errEmail= document.getElementById("erremail"); 
     var errNum = document.getElementById("errphoneno");  
    var errMsg= document.getElementById("errmsg"); 
    var errname= document.getElementById("errname"); 
    
   
    
    if(txtEmail.value ==="" ){
        errEmail.style.display="block";
    }   
    if(txtEmail.value !== ""){  
        if(emailStandard.test(txtEmail.value)== true){ 
            errEmail.style.display="none"; 
        }
        if(emailStandard.test(txtEmail.value)== false){ 
             errEmail.innerHTML="Please enter valid email id";
            errEmail.style.display="block"; 
        }
    } 

   if(txtname.value===""){
        errname.innerHTML="Please enter the name";
        errname.style.display="block";   
    }
        if(txtname.value !== ""){ 
        errname.style.display="none";    
    }


  if(txtMsg.value===""){
        errMsg.innerHTML="Please enter the message";
        errMsg.style.display="block";   
    }
    
    if(txtMsg.value !== ""){ 
        errMsg.style.display="none";    
    }


     if(txtNumber.value ===""){
      errNum.innerHTML = "Please enter the phone number";
      errphoneno.style.display="block";
  }
  if(txtNumber.value !== "") { 
      if(isNaN(txtNumber.value))
      {
          errNum.innerHTML = "Please enter phone number only";
          errphoneno.style.display="block";
      return false;
      }
     else if((txtNumber.value.length != 10))
      {
          errNum.innerHTML = " mobile number should be in 10 digit";
          errphoneno.style.display="block";
      return false;
      }
      else{ errphoneno.style.display="none";}
  }
 

    
    // if(selectOptions.value ==0){
    //     errdrop.style.display="block";
    // }
    // if(selectOptions.value !=0){ 
    //     // this.setState({select:"none"});
    // }
if((emailStandard.test(txtEmail.value)== true) && txtname.value.length >=1 && txtMsg.value.length >= 1 && txtEmail.value !== "" && txtname.value !=="" &&  txtMsg.value !=="" && txtNumber.value !== "" ){
        success.style.display="block";
             var maillink = 'mailto:career@theuxgurus.com?subject=Message from '
             +document.getElementById('email').value
             +"&body="
             +"Name:"+document.getElementById('name').value + escape ("\n\n") 
             +"Email:"+document.getElementById('email').value + escape ("\n\n") 
             +"PhoneNo:"+document.getElementById('phoneno').value + escape ("\n\n") 
             +"Message:"+document.getElementById('message').value + escape ("\n\n") 
    window.location.href = maillink;

        txtEmail.value=""; 
        txtname.value="";
         txtMsg.value="";
        txtNumber.value="";
          
       
    }
    else {
      success.style.display="none";

    }
}





var slideIndex = 0;
showSlides();
var slides,dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 8000); 
}

function plusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function currentSlide(index) {
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
}

$(function(){
    
    $("#productleft .productclass").click(function() {

  $(this).addClass("active")
  $(".productclass").not(this).removeClass("active")
})
});


// var productleft = document.getElementById("productleft");
// var productclass = productleft.getElementsByClassName("productclass");
// for (var i = 0; i < productclass.length; i++) {
//   productclass[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active1");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active1";
//   });
// }
