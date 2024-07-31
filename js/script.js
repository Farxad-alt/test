const stagesPrev = document.getElementById('stages-prev'),
	stagesNext = document.getElementById('stages-next'),
	stageMobil = document.querySelectorAll('.stage-mobil'),
	circlesStages = document.querySelectorAll('.circle');

let item = 0;
const activeItem = n => {
	for (slide of stageMobil) {
		slide.classList.remove('stages-active');

	}
	stageMobil[n].classList.add('stages-active');
}

const activecircleStages = n => {
	for (circle of circlesStages) {
		circle.classList.remove('stages-active');

	}
	circlesStages[n].classList.add('stages-active');
}

const stages = cir => {
	activeItem(cir);
	activecircleStages(cir);
}

const nextStages = () => {
	if (item == stageMobil.length - 1) {
		item = 0;
		stages(item);
	} else {
		item++;
		stages(item);
	}
}

const prevStages = () => {
	if (item == 0) {
		item == stageMobil.length - 1;
		stages(item);
	} else {
		item--;
		stages(item);

	}
}

circlesStages.forEach((item, indexcircle) => {
	item.addEventListener('click', () => {
		index = indexcircle;
		stages(index);
	})
});

stagesNext.addEventListener('click', nextStages);
stagesPrev.addEventListener('click', prevStages);


// Участники турнира
const prev = document.querySelector('.btn-prev'),
	next = document.querySelector('.btn-next'),
	slides = document.querySelectorAll('.slides'),
	dots = document.querySelectorAll('.dot'),
	slidesWrap = document.querySelectorAll('.slider-wrapper');


let index = 0;

const activeSlide = n => {
	for (slide of slides) {
		slide.classList.remove('active');

	}
	slides[n].classList.add('active');
}

const activeDot = n => {
	for (dot of dots) {
		dot.classList.remove('active');

	}
	dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
	activeSlide(ind);
	activeDot(ind);
}

const nextSlide = () => {
	if (index == slides.length - 1) {
		index = 0;
		prepareCurrentSlide(index);
	} else {
		index++;
		prepareCurrentSlide(index);
	}
}
const prevSlide = () => {
	if (index == 0) {
		index == slides.length - 1
		prepareCurrentSlide(index);
	} else {
		index--;
		prepareCurrentSlide(index);
	}
}

dots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		prepareCurrentSlide(index);
	})
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 4000);

// Mobil slider
const mobilPrev = document.getElementById('mobil-prev'),
	mobilNext = document.getElementById('mobil-next'),
	slidesMobil = document.querySelectorAll('.slide-mobil'),
	numbers = document.querySelectorAll('.number');
// slidesMobil = document.querySelectorAll('.slides-mobil');


let num = 0;
const activeSlideMobil = n => {
	for (slide of slidesMobil) {
		slide.classList.remove('mobil-active');

	}
	slidesMobil[n].classList.add('mobil-active');
}
const activeNumberMobil = n => {
	for (number of numbers) {
		number.classList.remove('mobil-active');

	}
	numbers[n].classList.add('mobil-active');
}

const prepareCurrentSlideMobil = num => {
	activeSlideMobil(num);
	activeNumberMobil(num);
}

const nextMobil = () => {
	if (num == slidesMobil.length - 1) {
		num = 0;
		prepareCurrentSlideMobil(num);
	} else {
		num++;

		prepareCurrentSlideMobil(num);
	}
}
const prevMobil = () => {
	if (num == 0) {
		num == slidesMobil.length - 1;
		prepareCurrentSlideMobil(num);
	} else {
		num--;
		prepareCurrentSlideMobil(num);
	}
}

numbers.forEach((item, indexNumber) => {
	item.addEventListener('click', () => {
		num = indexNumber;
		prepareCurrentSlideMobil(num);

	})
});


mobilNext.addEventListener('click', nextMobil);
mobilPrev.addEventListener('click', prevMobil);

const interMobil = setInterval(nextMobil, 4000);

let policy = document.getElementById('pay');
policy.innerHTML = 'Плата за игру: <b> 50 коп.</b>'


