
let container = document.querySelector('.container');

//slider
let slider = document.createElement('div');
slider.classList.add('slider');
container.appendChild(slider);

let sliderItem = document.createElement('div');
sliderItem.classList.add('slider__item');
slider.appendChild(sliderItem);

let sliderImg = document.createElement('img');
sliderImg.classList.add('img');
sliderItem.appendChild(sliderImg);

let cover = document.createElement('div');
cover.classList.add('cover');
container.appendChild(cover);

let coverItemBtn = document.createElement('div');
coverItemBtn.classList.add('cover-item');
cover.appendChild(coverItemBtn);

let coverItem = document.createElement('div');
coverItem.classList.add('cover-item');
coverItem.style.padding = '7.5pt'
cover.appendChild(coverItem);
   
//buttons
let sliderDots = document.createElement('div');
sliderDots.classList.add('slider__dots');
coverItemBtn.appendChild(sliderDots);
//1
let sliderDot = document.createElement('div');
sliderDot.classList.add('slider__dot');
sliderDot.classList.add('one');
sliderDots.appendChild(sliderDot);

let sliderSpan = document.createElement('span');
sliderSpan.classList.add('slider__dots-item');
sliderDot.appendChild(sliderSpan);
//2
let sliderDotTwo = document.createElement('div');
sliderDotTwo.classList.add('slider__dot');
sliderDotTwo.classList.add('two');
sliderDots.appendChild(sliderDotTwo);

let sliderSpanTwo = document.createElement('span');
sliderSpanTwo.classList.add('slider__dots-item');
sliderDotTwo.appendChild(sliderSpanTwo);
//3
let sliderDotFive = document.createElement('div');
sliderDotFive.classList.add('slider__dot');
sliderDotFive.classList.add('three');
sliderDots.appendChild(sliderDotFive);

let sliderSpanFive = document.createElement('span');
sliderSpanFive.classList.add('slider__dots-item');
sliderDotFive.appendChild(sliderSpanFive);
//4
let sliderDotFour = document.createElement('div');
sliderDotFour.classList.add('slider__dot');
sliderDotFour.classList.add('foir');
sliderDots.appendChild(sliderDotFour);

let sliderSpanFour = document.createElement('span');
sliderSpanFour.classList.add('slider__dots-item');
sliderDotFour.appendChild(sliderSpanFour);  

//global
let slides = document.querySelectorAll('.slider__item');
let slide = document.querySelector('.slider__item');
let dots = document.querySelectorAll('.slider__dot');
let text = ['Мы так похожи ... но он просто не мой тип', 'В начале программирования/Через некоторое время', '- What makes code bad? - No comments', 'Два состояния у программистов: "Я - Бог" и "Я не знаю, что я делаю"' ]
let img = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
let currentIndex = 0;

const activeDot = n => {
   for(dot of dots){
      dot.classList.remove('dot__active');
   }
   dots[n].classList.add('dot__active');
}

const prepareCurrentSlide = index => {
   activeDot(index);
   coverItem.innerHTML = text[index];
   sliderImg.src = img[index];
}
prepareCurrentSlide(currentIndex);


dots.forEach(function (dot, index) {
   dot.addEventListener('click', function () {
      if (index == currentIndex) { }
      else if (index > currentIndex) {
      slide.style.backgroundImage = `url(${img[currentIndex]})`;
         let animationImg = setInterval(frame, 1);
         let animationTxt = setInterval(frameTxt,  1);
         let positionImg = 40;
         let positionTxt = 40;

         function frame() {
            for (item of slides) {
               if (positionImg == 0) {
               clearInterval(animationImg);
               } else {
               positionImg--;
               sliderImg.style.transform = `translate(${positionImg}pt)`;
               }
            }
         }
         function frameTxt() {
            if (positionTxt == 0) {
            clearInterval(animationTxt);
            } else {
            positionTxt--;
            coverItem.style.transform = `translate(${positionTxt}pt)`;
            }
         }
         } else if (index < currentIndex) {
            slide.style.backgroundImage = `url(${img[currentIndex]})`;
            let animationImg = setInterval(frame, 1);
            let animationTxt = setInterval(frameTxt, 1);
            let positionImg = -40;
            let positionTxt = -40;

            function frame() {
               for (item of slides) {
                  if (positionImg == 0) {
                  clearInterval(animationImg);
                  } else {
                  positionImg++;
                  sliderImg.style.transform = `translate(${positionImg}pt)`;
                  }
               }
            }
            function frameTxt() {
               if (positionTxt == 0) {
               clearInterval(animationTxt);
               } else {
               positionTxt++;
               coverItem.style.transform = `translate(${positionTxt}pt)`;
               }
            }
         }      
      currentIndex = index;   
      prepareCurrentSlide(currentIndex);

} 

   )
}) 


