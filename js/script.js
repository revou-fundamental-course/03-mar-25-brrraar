/* ini file JS */

/* Ganti Nama*/
function gantinama() {
    let Nama = prompt("Halo, Siapa namamu?", ""); 
    document.getElementById("Nama").innerHTML = Nama; 
}

let changeName = document.getElementById("changeName");     
changeName.addEventListener("click", function() { 
    gantinama(); 
});

// Auotslides
document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
  
    function showSlides() {
      slides.forEach((slide, index) => {
        slide.classList.remove("active"); 
      });
  
      slides[slideIndex].classList.add("active"); 
  
      slideIndex = (slideIndex + 1) % slides.length;
      setTimeout(showSlides, 3000); 
    }
  
    showSlides();
  });
  
  document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let time = document.getElementById("time").value;
    let message = document.getElementById("message").value;

    if (!name || !age || !gender || !time || !message) {
      alert("Please fill in all fields");
      return;
    }

    let messageBox = document.getElementById("messageDisplay");
    let newMessage = document.createElement("div");
    newMessage.innerHTML = `<strong>${name} (${age}, ${gender})</strong><br>${time}<br>${message}<hr>`;
    messageBox.appendChild(newMessage);

    document.getElementById("messageForm").reset();
  });
  
