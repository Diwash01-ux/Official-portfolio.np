
/* =====================================
   DYNAMIC HOBBY LIST
===================================== */

const hobbies = [
    "UI/UX Design",
    "Web Development",
    "Python Programming",
    "Photography",
    "Learning Korean",
    "Problem Solving"
];

const listContainer = document.getElementById("hobby-list");

if (listContainer) {
    const ul = document.createElement("ul");

    for (let i = 0; i < hobbies.length; i++) {
        const li = document.createElement("li");
        li.textContent = hobbies[i];
        ul.appendChild(li);
    }

    listContainer.appendChild(ul);
}


/* =====================================
   HOBBY IMAGE GALLERY
===================================== */

const images = [
    "https://picsum.photos/id/1011/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1018/600/400"
];

let currentIndex = 0;

const hobbyImage = document.getElementById("hobby-image");
const nextButton = document.getElementById("next-photo");

if (hobbyImage && nextButton) {

    nextButton.addEventListener("click", function () {

        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        hobbyImage.src = images[currentIndex];

    });

}
