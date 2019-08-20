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