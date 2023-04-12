
let navbar_toggler = document.getElementById('navbar-toggler');
let nav = document.getElementById('nav');
let Close = document.getElementById('close');
navbar_toggler.addEventListener('click', () => {
	nav.classList.toggle('navbar-2');
})
Close.addEventListener('click', () => {
	nav.classList.toggle('navbar-2');
})

let Images = ['Images/chicken-qui.jpg', 'Images/cheese-onion-Desktop.jpg', 'Images/chicken-pie-desktop-1.jpg'];
let Images2 = ['Images/chicken-qui-res.jpg', 'Images/cheese-onion-responsive.jpg', 'Images/Tehzeeb-Responsive.jpg'];
let counter = 0;
function changeImages() {
	document.getElementById('source1').srcset = Images[counter];
	document.getElementById('source2').srcset = Images2[counter];
	document.getElementById('images').src = Images[counter];
	counter++;
	if (counter >= Images.length) {
		counter = 0;
	}
	setTimeout(changeImages, 5000);
}
changeImages();







