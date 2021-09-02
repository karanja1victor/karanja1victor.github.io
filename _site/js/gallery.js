function activateGallery(){
    let thumbnails  = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage   = document.querySelector("#gallery-photo  img");
    let galleryInfo = document.querySelector("#gallery-info");
    let title       = document.querySelector(".title");
    let description = document.querySelector(".description");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function(){
            let imgSrc = thumbnail.dataset.largeVersion;
            let imgAlt = thumbnail.alt;
            mainImage.setAttribute("src", imgSrc);
            mainImage.setAttribute("alt", imgAlt);

            //remove current class
            document.querySelector(".current").classList.remove("current");
            //add current class to thumbnail's parent
            thumbnail.parentNode.classList.add("current");

            //change the title and description in the third column
            title.innerHTML = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;
        });
        

    });
}