function jourtravaille(date) {
    const joursFeries2020 = [
        new Date(2020, 0, 1),  // Jour de l'An (1er janvier)
        new Date(2020, 3, 13), // Lundi de Pâques (13 avril)
        new Date(2020, 4, 1),  // Fête du Travail (1er mai)
        new Date(2020, 4, 8),  // Victoire 1945 (8 mai)
        new Date(2020, 4, 21), // Ascension (21 mai)
        new Date(2020, 5, 1),  // Lundi de Pentecôte (1er juin)
        new Date(2020, 6, 14), // Fête Nationale (14 juillet)
        new Date(2020, 7, 15), // Assomption (15 août)
        new Date(2020, 10, 1), // Toussaint (1er novembre)
        new Date(2020, 10, 11),// Armistice (11 novembre)
        new Date(2020, 11, 25) // Noël (25 décembre)
    ];

    let estFerie = joursFeries2020.some(jourFerie =>
        jourFerie.getTime() === date.getTime()
    );


    let jour = date.getDate();
    let mois = date.toLocaleString('fr-FR', { month: 'long' });
    let annee = date.getFullYear();


    let jourSemaine = date.getDay(); 

    if (estFerie) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié.`);
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, le ${jour} ${mois} ${annee} est un week-end.`);
    } else {
        console.log(`Oui, le ${jour} ${mois} ${annee} est un jour travaillé.`);
    }
}


let dateTest = new Date(2020, 4, 1); 
jourtravaille(dateTest);
