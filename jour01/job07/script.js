function jourtravaille(date) {
    const joursFeries2020 = [
        new Date(2020, 1, 1),  // Jour de l'An (1er janvier)
        new Date(2020, 4, 13), // Lundi de Pâques (13 avril)
        new Date(2020, 5, 1),  // Fête du Travail (1er mai)
        new Date(2020, 5, 8),  // Victoire 1945 (8 mai)
        new Date(2020, 5, 21), // Ascension (21 mai)
        new Date(2020, 6, 1),  // Lundi de Pentecôte (1er juin)
        new Date(2020, 7, 14), // Fête Nationale (14 juillet)
        new Date(2020, 8, 15), // Assomption (15 août)
        new Date(2020, 11, 1), // Toussaint (1er novembre)
        new Date(2020, 11, 11),// Armistice (11 novembre)
        new Date(2020, 12, 25) // Noël (25 décembre)
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


let dateTest = new Date(2020, 5, 1); 
jourtravaille(dateTest);
