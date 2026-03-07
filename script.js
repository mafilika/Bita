function openImage(src){
document.getElementById("lightbox").style.display="flex";
document.getElementById("lightbox-img").src=src;
}

function closeLightbox(){
document.getElementById("lightbox").style.display="none";
}

/* BEFORE AFTER */

function slide(){
let slider=document.getElementById("slider").value;
document.getElementById("overlay").style.width=slider+"%";
}

/* WHATSAPP BOOKING */

function sendBooking(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let service=document.getElementById("service").value;
let message=document.getElementById("message").value;

let text=`Painting Service Booking

Name: ${name}
Phone: ${phone}
Service: ${service}

Project Details:
${message}`;

let url="https://wa.me/27763611387?text="+encodeURIComponent(text);

window.open(url,"_blank");

}
