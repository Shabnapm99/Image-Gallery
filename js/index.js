let imageItems = [];
let imageItem = document.getElementsByClassName('img-thumbnail');
let imagesGallery = document.getElementById('imagesGallery');
let backButton = document.getElementById('backButton');
let heading = document.getElementById('heading');
let paragraph = document.getElementById('para');
let showImage = document.getElementById('showImage');
let carouselImage = document.getElementById('carouselImage');
let nextButton = document.getElementById('nextButton');
let prevButton = document.getElementById('prevButton');
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
            
            index = i;
            console.log(i);
            imagesGallery.classList.add('d-none');

            showImage.classList.remove('d-none');
            console.log(`${imageItems[i]}`)
            carouselImage.setAttribute('src', `${imageItems[i]}`);

            backButton.classList.replace('d-none', 'd-block');
            heading.classList.add('d-none');
            paragraph.classList.add('d-none');

           nextButton.addEventListener('click', () => {
                if (i === imageItems.length - 1) {

                    carouselImage.setAttribute('src', `${imageItems[0]}`);
                    i = 0;

                } else {
            
                    carouselImage.setAttribute('src', `${imageItems[i + 1]}`);
                    i = i+1;
                }
            });

            prevButton.addEventListener('click', () => {
                if (i !== 0) {
                    
                    carouselImage.setAttribute('src', `${imageItems[i - 1]}`);
                    i = i-1;
                } else {
                    
                    carouselImage.setAttribute('src', `${imageItems[imageItems.length - 1]}`);
                    i = imageItems.length - 1;
                }
            });

        });
    };



    

    backButton.addEventListener('click', () => {
        imagesGallery.classList.remove('d-none');
        carousel.classList.remove('d-block');
        backButton.classList.replace('d-block', 'd-none');
        heading.classList.remove('d-none');
        paragraph.classList.remove('d-none');
    })



});