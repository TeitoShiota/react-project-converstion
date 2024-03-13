export default function Gallery() {

    // let mainImage = document.querySelector(".main-image img");
    // let imageArray = document
    //     .querySelector(".image-array-container")
    //     .querySelectorAll("img");
    // imageArray.forEach((element) => element.addEventListener("click", handleClick));


    function handleClick(event) {
        mainImage.src = event.target.src;
        imageArray.forEach((element) => element.classList.remove("selected"));
        event.target.classList.add("selected");
    }

    return (
        <div className="gallery">
                <div className="main-image">
                    <img src="images/gallery-1.jpg" alt="" />
                </div>
                <div className="image-array-container">
                    <div className="image-container">
                        <img className="selected" src="/images/gallery-1.jpg" alt="" />
                    </div>
                    <div className="image-container">
                        <img src="/images/gallery-2.jpg" alt="" />
                    </div>
                    <div className="image-container">
                        <img src="/images/gallery-3.jpg" alt="" />
                    </div>
                </div>
            </div>
    );
}