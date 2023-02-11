document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementsByClassName("rating");
    var selectedRating = 0; 

    var addSelectClass = function () {
        removeSelectClass();
        this.classList.add('selected');
        selectedRating = this.value; 
        console.log("Selected rating:", selectedRating);
    }

    var removeSelectClass = function () {
        for (var i = 0; i < button.length; i++) {
            button[i].classList.remove('selected')
        }
    }

    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", addSelectClass);
    }

    const submitBtn = document.getElementById('submit');
    const card = document.querySelector('.card');
    const cardTwo = document.querySelector('.cardtwo');
    const stars = document.getElementById('stars');

    submitBtn.addEventListener('click', function () {
        card.style.display = 'none';
        cardTwo.style.display = "block";
        stars.textContent = `You have selected ${selectedRating} out of 5`;
    });
});
