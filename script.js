const img = document.getElementsByClassName("hidden-img");
const main_img = document.getElementById("main-img");
document.addEventListener('keydown', function (e) {
    if (e.repeat) return;
    switch (e.key.toLowerCase()) {
        case "a":
            show(0);
            playById('left-drum');
            break;
        case "s":
            playById('mid-left-drum');
            show(1);
            break;
        case "d":
            playById('main-drum');
            show(2);
            break;
        case "f":
            playById('main-drum1');
            show(3);
            break;
         case "g":
            playById('mid-right-drum');
            show(4);
            break;
        case "h":
            playById('right-drum');
            show(5);
            break;
        case "m":
            playById('meow');
            break;
       
    }
});
function playById(id) {
    let audio = document.getElementById(id);
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0
    }
}
function show(index) {
    main_img.style.visibility='hidden';
    img[index].style.visibility='visible';
    setTimeout(() => {
        img[index].style.visibility='hidden';
        main_img.style.visibility='visible';
    }, 250);
}