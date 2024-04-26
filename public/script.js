// Animatie voor klik op hamburger menu mobiel
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  document.body.classList.toggle("slide-right");
});


// Javascript voor invliegende animatie
// let reveals = document.querySelectorAll(".reveal");

// window.addEventListener("scroll", reveal);
// window.addEventListener("scroll", checkHeight);

// function reveal() {
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
  
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }

// Voor elke checkbox, add eventListener change, en als hij gechanged is...
document.addEventListener('DOMContentLoaded', function() {
    const likeCheckboxes = document.querySelectorAll('.heart-checkbox input[type="checkbox"]');
  
    // Voor elke checkbox, add eventListener change, en als hij gechanged is...
    likeCheckboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', async function() {
        const serviceId = this.value;
        const form = this.parentElement.parentElement;
        const likeText = this.parentElement.querySelector('span');
        let likeCount = parseInt(likeText.textContent);

        console.log('change')

        // Als de checkbox checked is, up de like count, anders eentje eraf halen!
        if (this.checked) {
            likeCount = likeCount + 1;  
            likeText.textContent = likeCount;
        } else {
            likeCount = likeCount - 1;
            likeText.textContent = likeCount;
        }

        // // Update de Like count in de Directus API
        fetch(form.action, {
            method: form.method,
            body: new URLSearchParams({'initiatiefId': serviceId, 'likes': likeCount})
        }).then(function(response) {
            return response.text()
        }).then(function(responseHTML) {
            // document.querySelector(".liked-playlists > div").innerHTML = responseHTML
            console.log(responseHTML)
        });
      });
    });
  });