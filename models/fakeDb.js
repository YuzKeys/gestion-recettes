export const fakeDb = {
    recettes: [
        {
            id: 1,
            name: "Spaghetti Carbonara",
            description: "Un classique italien à base de pancetta, d'œufs et de parmesan.",
            ingredients: [
                "200g de spaghetti",
                "100g de pancetta",
                "2 œufs",
                "50g de parmesan râpé",
                "Sel et poivre",
                "1 gousse d'ail"
            ],
            steps: [
                "Faire cuire les spaghetti dans de l’eau bouillante salée.",
                "Faire revenir la pancetta avec l’ail dans une poêle.",
                "Dans un bol, battre les œufs avec le parmesan, du sel et du poivre.",
                "Mélanger les pâtes égouttées avec la pancetta, puis ajouter le mélange œufs-parmesan hors du feu.",
                "Servir chaud avec un peu de parmesan râpé."
            ],
            image: "/front-end/images/spaghetti-carbonara.jpg"
        },
        {
            id: 2,
            name: "Salade César",
            description: "Une salade fraîche avec du poulet, de la romaine et une sauce savoureuse.",
            ingredients: [
                "1 laitue romaine",
                "1 blanc de poulet",
                "50g de parmesan en copeaux",
                "Croutons",
                "Sauce César",
                "Sel et poivre"
            ],
            steps: [
                "Cuire le blanc de poulet à la poêle et le couper en morceaux.",
                "Laver et couper la laitue romaine.",
                "Mélanger la laitue avec le poulet, les croutons et la sauce César.",
                "Ajouter le parmesan et assaisonner.",
                "Servir immédiatement."
            ],
            image: "/front-end/images/salade-césar.jpg"
        },
        {
            id: 3,
            name: "Gâteau au Chocolat",
            description: "Un dessert gourmand et moelleux au chocolat.",
            ingredients: [
                "200g de chocolat noir",
                "150g de beurre",
                "150g de sucre",
                "3 œufs",
                "100g de farine"
            ],
            steps: [
                "Préchauffer le four à 180°C."
            ],
            image: "/front-end/images/Gâteau-au-Chocolat.jpg"
        }
    ]
};