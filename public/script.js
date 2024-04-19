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
        const likeCount = this.parentElement.querySelector('span');
  
        // Als de checkbox checked is, up de like count, anders eentje eraf halen!
        if (this.checked) {
          likeCount.textContent = parseInt(likeCount.textContent) + 1;
        } else {
          likeCount.textContent = parseInt(likeCount.textContent) - 1;
        }
  
        // Update de Like count in de Directus API
        try {
          const response = await fetch('/like', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ like_id: serviceId })
          });
          if (!response.ok) {
            throw new Error('Failed to update likes count in Directus API');
          }
        } catch (error) {
          console.error('Error updating likes count:', error);
          // Hier kun je de user een error message geven.
        }
      });
    });
  });