/* 

	BrayanBanner Web Site, and comboyluis

 */
//navigation
let btnToggle = document.querySelector('.icon-list');
// if button toggle is null, her event no function
if (btnToggle != null) {
	btnToggle.addEventListener('click', function(){
	document.querySelector('.nav-side').classList.toggle('active');
	});
}else if (btnToggle == null){
	let btnToggle = document.querySelector('html');
}else {
	let btnToggle = 0;
}


//person 
// if base is null is person, Example: new person('banner', 'alv', '23', 'hello world')
function person(name, password, age, data){
	this.name = name;
	this.password = password;
	this.age = age;
	this.data = data;
	this.changeName = function(name){
		this.name = name;
	}
	this.changePassword = function(password){
		this.password = password;
	}
}


//forms validation
// validation of formulary
let form = document.querySelector('.form-data');
if(form != null){
	form.addEventListener('submit', validation);
}else if(form == null){
	let form = 0;
}else {
	let form = 0;
}

// function validate, for formulary
function validation(e){
	let user = document.querySelector('.user').value;
	let password = document.querySelector('.password').value;
	if (user, password == 'brayanbanner') {
		var stared = 'BrayanBanner WebSite';
	}else {
		alert('la contraseña o usuario esta mal');
		e.preventDefault();
		form.reset(); 
	}
};


// popup
// window for help
let popup = document.querySelector('.toggle-popup');
if (popup != null){
	popup.addEventListener('click', openWind);
}else {
	let ban = '';
}
function openWind(){
	let popupToggle = document.querySelector('.popup');
	document.querySelector('.fond-body').classList.toggle('popup-fond');
	popupToggle.classList.toggle('toggle');
	document.querySelector('body').classList.toggle('popup-fond');
}
let closePopup = document.querySelector('.close-popup');
if (closePopup != null){
	closePopup.addEventListener('click', closeWind);
}else {
	let ban = '';
}
function closeWind(){
	document.querySelector('.popup').classList.add('animation');
	setTimeout(function() {
		openWind();
		document.querySelector('.popup').classList.remove('animation');
	}, 290);
}


// dark mode for WebSite
let swicth = document.querySelector('.swicth');

if (swicth != null){
	swicth.addEventListener('click', function(){
		localStorage.setItem('swicth', document.querySelector('body').classList.length)
		document.querySelector('.swicth').classList.toggle('active');
		document.querySelector('body').classList.toggle('dark');
	});
	if(localStorage.getItem('swicth') == 1){
		swicth.classList.add('active');
		document.querySelector('body').classList.add('dark');
	}else {
		swicth.classList.remove('dark');
		document.querySelector('body').classList.remove('dark');
	}
}
function kill(){
	var del = document.querySelector('.delete');
	if(del != null){
		del.parentElement.parentElement.remove();
	}else {
		console.error('Error Sistem')
	}
}

// lightbox

const open = document.querySelectorAll('.open-img');
let lightbox = document.querySelector('.lightbox');

if(open != null){
  for (let i = 0; i < open.length; i++) {
    open[i].onclick = function(){
    	// ruta de la imagen
			let ruta = open[i].src;
			
			document.querySelector('.screen').innerHTML = 
			`
				<img src="${ruta}" class="openImage"/>
			`
			;

			let img = document.querySelector('.openImage');
			document.querySelector('body').classList.add('open');
			// cerrar
			if(img.classList.length == 1){

				let cerrar = document.querySelector('.openImage');

				cerrar.addEventListener('click', function(){
					document.querySelector('body').classList.remove('open');
					img.classList.remove('openImage');
					cerrar.remove();
				});
			}
		};
  }
}

function openContent(parrafo, bg){
	let content = document.querySelector('.content');
	content.classList.add('active');
	document.querySelector('.notification').classList.add(bg);
	content.innerHTML = parrafo;
}

// functions event
// ________________________________________________________________________________
// __________________________brayanbanner__________________________________________
// ________________________________________________________________________________

function click(select, func){
	document.querySelector(select).addEventListener('click', func);
};
function submit(select, func){
	document.querySelector(select).addEventListener('submit', func);
}
function resets(target){
	document.querySelector(target).reset();
}

function event(target, event, func){
	let element = document.querySelectorAll(target);
	for (var i = 0; i < element.length; i++) {
		element[i].addEventListener(event, func);
	}
}


// ----------------------------------------------------------------------

// SlideShow
// asegura de poner la clase a la fila de imagenes;

let slide = document.querySelector('.slide');
if(slide != null){
	let iz = document.querySelector('.left');
	let de = document.querySelector('.right');

	iz.onclick = function(){
		slide.scrollLeft += -400;
	};
	de.onclick = function(){
		slide.scrollLeft += 400;
	};
}

// ----------------------------------------------------------------------