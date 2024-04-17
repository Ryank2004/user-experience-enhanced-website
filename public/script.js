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