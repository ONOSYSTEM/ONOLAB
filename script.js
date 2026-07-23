const grid = document.getElementById("photoGrid");


if(grid){

    photos.forEach(photo => {

        const img = document.createElement("img");

        img.src = "image/photo/" + photo;

        img.loading = "lazy";

        grid.appendChild(img);

    });

}