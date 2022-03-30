let shareButton = document.querySelector('.share');
let shareOptions = document.querySelector('.share-option');
shareButton.onclick = () => {
	shareOptions.classList.toggle('show-share-options');
}