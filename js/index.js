

let text = ['Мы так похожи ... но он просто не мой тип', 'В начале программирования/Через некоторое время', '- What makes code bad? - No comments', 'Два состояния у программистов: "Я - Бог" и "Я не знаю, что я делаю"' ]

   let container = document.querySelector('.container');

   let screen = document.createElement('div');
   screen.classList.add('screen');
   container.appendChild(screen);

   let cover = document.createElement('div');
   cover.classList.add('cover');
   container.appendChild(cover);

   let coverItem = document.createElement('div');
   coverItem.classList.add('cover-item');

   cover.appendChild(coverItem);

   let coverItemBtn = document.createElement('div');
   coverItemBtn.classList.add('cover-item');
   cover.appendChild(coverItemBtn);

   //slider
   let slider = document.createElement('div');
   slider.classList.add('slider');
   screen.appendChild(slider);

   let sliderItemOne = document.createElement('div');
   sliderItemOne.classList.add('slider__item');
   slider.appendChild(sliderItemOne);

let sliderImgOne = document.createElement('img');
      sliderImgOne.setAttribute('center', 'center');
   sliderImgOne.setAttribute('src', 'img/1.jpg');
   sliderImgOne.setAttribute('alt', 'na');
   sliderImgOne.classList.add('slider__img-one');
   sliderItemOne.appendChild(sliderImgOne);

   let sliderItemTwo = document.createElement('div');
   sliderItemTwo.classList.add('slider__item');
   slider.appendChild(sliderItemTwo);

   let sliderImgTwo = document.createElement('img');
   sliderImgTwo.setAttribute('src', 'img/2.jpg');
   sliderImgTwo.setAttribute('alt', 'na');
   sliderImgTwo.classList.add('slider__img-two');
   sliderItemTwo.appendChild(sliderImgTwo);

   let sliderItemThree = document.createElement('div');
   sliderItemThree.classList.add('slider__item');
   slider.appendChild(sliderItemThree);

   let sliderImgThree = document.createElement('img');
   sliderImgThree.setAttribute('src', 'img/3.jpg');
   sliderImgThree.setAttribute('alt', 'na');
   sliderImgThree.classList.add('slider__img-three');
   sliderItemThree.appendChild(sliderImgThree);

   let sliderItemFour = document.createElement('div');
   sliderItemFour.classList.add('slider__item');
   slider.appendChild(sliderItemFour);

   let sliderImgFour = document.createElement('img');
   sliderImgFour.setAttribute('src', 'img/4.jpg');
   sliderImgFour.setAttribute('alt', 'na');
   sliderImgFour.classList.add('slider__img-four');
   sliderItemFour.appendChild(sliderImgFour); 

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


   let slides = document.querySelectorAll('.slider__item');
   let dots = document.querySelectorAll('.slider__dot');
/*    let setWith = parseInt(getComputedStyle(sliderImg).width, 10); */




const activeSlide = n => {
  console.log(n);
        for(slide of slides) {
            slide.classList.add('img__active');
        }
        slides[n].classList.remove('img__active');
    }

    const activeDot = n => {
        for(dot of dots){
            dot.classList.remove('dot__active');
        }
        dots[n].classList.add('dot__active');
    }

const prepareCurrentSlide = index => {
    activeSlide(index);
   activeDot(index);
   coverItem.innerHTML = text[index];
}
prepareCurrentSlide(0);


dots.forEach(function (dot, index) {
   dot.addEventListener('click', function () {
      prepareCurrentSlide(index);
   })
})