const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  document.body.classList.toggle("slide-right");
});



document.addEventListener("DOMContentLoaded", () => {
    // Krijg de huidige path van de URL.
    const currentPath = window.location.pathname;
  
    // Loop door alle navigatielinks.
    document.querySelectorAll('.lijst-item').forEach(link => {
        // Krijg het pad van de href attribuut voor de link.
        const linkPath = link.getAttribute('href');
  
        // Verwijder de 'active-state' klasse van alle links eerst
        link.classList.remove('active-state');
  
        // Controleer of de link overeenkomt met de huidige pagina.
        // Verwijder eventuele leidende en volgende slashes voor een juiste vergelijking.
        if (currentPath.replace(/^\/|\/$/g, '') === linkPath.replace(/^\/|\/$/g, '')) {
            // Voeg de 'active-state' klasse toe aan de overeenkomende link.
            link.classList.add('active-state');
        }
    });
  });


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