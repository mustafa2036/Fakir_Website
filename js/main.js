let navbar = document.querySelector('.navbar');

window.onscroll = () => {
    if(window.scrollY > 100){
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')
    }
}

$(document).ready(function () {
    $("#loading .loading-box").fadeOut(3000 , () => {
        $("#loading").fadeOut(900, () => {
            $("body").css("overflow-y" , 'auto')
        })
    });
});