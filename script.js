const images = document.querySelectorAll('.header-slider ul img');
const button1 = document.querySelector('.arrow-prev');
const button2 = document.querySelector('.arrow-next');

let n = 0;

function changepicture(){
    for(let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';  
    }
    images[n].style.display = 'block';
}
changepicture();

button1.addEventListener('click', (e) => {
    e.preventDefault();
    if (n > 0) {
        n--;
    } else {
        n = images.length - 1;
    }
    changepicture();
});

button2.addEventListener('click', (e) => {
    e.preventDefault();
    if (n < images.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changepicture();
});

function autoSlide() {
    if (n < images.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changepicture();
}

setInterval(autoSlide, 5000);

const scroller = document.querySelectorAll('.products')

for(const item of scroller)
{
    item.addEventListener('wheel',(e)=>{
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    });
}