function toggleList(id) {
    const list = document.getElementById(id);
    const triangle = list.previousElementSibling.querySelector(".triangle");

    // Toggle display of the list
    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block';
        triangle.classList.add("open"); // Add rotation class
    } else {
        list.style.display = 'none';
        triangle.classList.remove("open"); // Remove rotation class
    }
}
