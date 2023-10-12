fetch("https://picsum.photos/v2/list")
.then((Response) => Response.json())
.then((data) => {
    console.log(data);
    const products= data;
    products.forEach(element => {
        let author= element.author;
        let imageUrl= element.download_url;
        let url= element.url;

        // Htlm elements
        let productItem = document.createElement("div");

        // image
        let image= document.createElement("img");
        image.setAttribute("src", imageUrl);
        image.setAttribute("alt", author);
        productItem.appendChild(image);

        // author
        let authorName = document.createElement("p");
        authorName.textContent= author;
        productItem.appendChild(authorName);

        //Button
        let btn= document.createElement("button");
        btn.textContent= "See More";
        productItem.appendChild(btn);

        btn.addEventListener("click" , () => {
            window.open(url);
        })

        document.querySelector(".products").appendChild(productItem);

    });
})
.catch((error) => {
    console.error("Fehler beim laden der Produkte", error);
});