let imageItems = [];
let imageItem = document.getElementsByClassName('img-thumbnail');
let carousalContainer = document.getElementById('carousalContainer');
let carousel = document.getElementById('carousel');
let imagesGallery = document.getElementById('imagesGallery');
let backButton = document.getElementById('backButton');
let heading = document.getElementById('heading');
let paragraph = document.getElementById('para');
let index = null;
// console.log(imageItem)

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < imageItem.length; i++) {//when the document content is loaded this will loop throught the images with className 'img-thumbnail'
        imageItems.push(imageItem[i].getAttribute('src'));//get the src attribute of all image and push it into imageItems array

        let carousalItem = document.createElement('div');
        carousalItem.className = 'carousel-item';
        carousalItem.innerHTML = ` <img src="${imageItems[i]}" class="d-block w-100" alt="carousalImage">`;
        carousalContainer.appendChild(carousalItem);

        imageItem[i].addEventListener('click', () => {
            console.log(`Hi I am ${imageItems[i]}`)
            index = i;
            console.log(i);
            imagesGallery.classList.add('d-none');
            carousel.classList.replace('d-none', 'd-block');
            carousalItem.classList.add('active');
            backButton.classList.replace('d-none', 'd-block');
            heading.classList.add('d-none');
            paragraph.classList.add('d-none');

        })
    }

    backButton.addEventListener('click', () => {
        imagesGallery.classList.remove('d-none');
        carousel.classList.remove('d-block');
        backButton.classList.replace('d-block', 'd-none');
        heading.classList.remove('d-none');
        paragraph.classList.remove('d-none');
    })

    console.log(imageItems);


})