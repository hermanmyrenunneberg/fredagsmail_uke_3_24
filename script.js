document.addEventListener('DOMContentLoaded', function () {
    const correctCombination = '042'; // Placeholder combination
    const form = document.getElementById('combination-form');
    const input = document.getElementById('combination-input');
    const eventsDiv = document.getElementById('events');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (input.value === correctCombination) {
            // Display the events in Oslo this weekend
            eventsDiv.innerHTML = '<p>Correct! Here are the happenings in Oslo this weekend:</p><ul>' +
                '<li>' +
            
                '<br>' +
                'Fest på CB' +
                '<br>' +
                'Carl Berners nye storstue Carls åpner endelig denne helgen. Det blir åpningsfest, konserter, fotball på storskjerm og annen kos. De 3000 kvadratmeterne huser kafé, bar, restaurant, uteservering og vinbar.' +
                '<br>' +
                'Hvor: Trondheimsveien 113' +
                '<br>' +
                'Når: Åpningsfesten er lørdag 20. januar' +
                '</li>' +
                '<li>' +
                
                '<br>' +
                'Ny vinbar på Løkka' +
                '<br>' +
                'Noe av det gøyeste med å være matinteressert osloborger er alle de nye stedene som popper opp – hele tiden. Denne helgen får vi en ny vinbar. Den heter Ember og ligger i kjelleren til Hot temper på Grünerløkka, og menyen ser lovende ut.' +
                '<br>' +
                'Hvor: Nordre gate 24' +
                '<br>' +
                'Når: Åpner fredag 19. januar' +
                '</li>' +
                '<li>' +
                
                '<br>' +
                'Vernissasje' +
                '<br>' +
                'Nå kan du få med deg Julie Aida Grafs «hyllest til naturens skjønnhet». Det er abstrakte malerier, tekstil og illustrasjon. Hun stiller ut verk fra kunstopphold på Sardinia og i Lisboa, og fra atelieret hennes i Oslo.' +
                '<br>' +
                'Hvor: Hos Arne, Gøteborggata 27B' +
                '<br>' +
                'Når: Fredag 19. januar kl. 18–22 (utstillingen står til 4. februar)' +
                '</li>' +
                '<li>' +
                
                '<br>' +
                'Fransk matfilm' +
                '<br>' +
                'Cinemateket viser i disse dager den fire timer lange (!) dokumentaren «Menus-plaisirs – Les Troisgros» av Frederick Wiseman. Familien Troisgros har drevet Le Bois Sans Feuilles, en av Frankrikes beste restauranter, i en mannsalder. Publikum får være flue på veggen mens familien og teamet i Loire tilbereder, prøvesmaker og tryller frem drømmeretter.' +
                '<br>' +
                'Hvor: Cinemateket, Dronningens gate 16' +
                '<br>' +
                'Når: Flere visninger frem til 24. januar' +
                '</li>' +
                '<li>' +
                
                '<br>' +
                'Fjorden baby' +
                '<br>' +
                'Bergensarane kjem! Igjen. Nylig spilte de gamle traverne på Blå. Det ga nok mersmak både for band og publikum. Lørdag får du deilig Bergensrock på Grünerløkka. Oppsig!' +
                '<br>' +
                'Hvor: Parkteatret' +
                '<br>' +
                'Når: 20. januar' +
                '</li>' +
                '<li>' +
               
                '<br>' +
                'Marked, baby!' +
                '<br>' +
                'The fashion archives er et second hand og vintagemarked som popper opp i ny og ne. Lørdag kan du kjøpe deg noe nytt, som ikke er helt nytt, på årets første marked.' +
                '<br>' +
                'Når: Lørdag 20. januar kl. 12–17' +
                '<br>' +
                'Hvor: Kulturhuset' +
                '</li>' +
                '</ul>';
        } else {
            eventsDiv.innerHTML = '<p>Incorrect combination. Please try again.</p>';
        }
    });
});
