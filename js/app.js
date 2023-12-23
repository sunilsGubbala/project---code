

function init(){
const hamburger = document.querySelector(".hamburger");
const sidebarCloseButton =document.querySelector(".close-button");
const sidebarContainer = document.querySelector(".sidebar-container");

const openSidebar = () => {
    sidebarContainer .classList.add("show-sidebar");
};
const closeSidebar = () => {
    sidebarContainer .classList.remove("show-sidebar");
};

hamburger.addEventListener("click",openSidebar);
sidebarCloseButton.addEventListener("click",closeSidebar);
}
init();

function navRelated(){
    const navbarContainer=document.querySelector(".nav-container");
    window.addEventListener("scroll",function(){

        const scrollNumber = window.scrollY;
        const targetNumber = window.innerWidth>=992 ? 70:50;

        if (scrollNumber >= targetNumber){
            navbarContainer.classList.add("sticky-nav");
        } else{
            navbarContainer.classList.remove("sticky-nav");
        }
    });
}
navRelated();




function submitForm() {
    // Get values from the form
    var name = document .getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email Address');
        return;
    }

    if (message.trim() === '') {
        alert('Please enter a Message');
        return;
    }

    if (name.trim() === ''){
        alert('Please enter a Name');
        return;
    }


    alert("form submitted succesfully");

    document.getElementById ("email").value ="";
    document.getElementById("message").value="";
    document.getElementById('name').value="";
    
};
