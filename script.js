let jeux = [
    {
        nom : "Super Mario Bros",
        datesDeSortie : {
            japon : "13 septembre 1985",
            ameriqueDuNord : "18 octobre 1985",
            europe : "28 septembre 1987",
        },
        createurs : {
            developpeur : "Nitendo",
            editeur : "Nitendo", 
            compositeur : "Koji Kondo",
            producteur : "Shigeru Miyamoto"
        },
        anneeDeCreation : 1985,
        multijoueur : true,
        description : "Un jeu de plateforme où Mario, un plombier, doit sauver la princesse Toadstool des griffes de Bowser.",
        genre : [
            "Plateforme",
            "Aventure"
        ],
        noteMoyenne : 95,
        srcImage : "Images_jeux_video/superMarioBros.jpg"
    },
    {
        nom: "The Legend of Zelda",
        datesDeSortie: {
            japon: "21 février 1986",
            ameriqueDuNord: "22 août 1987",
            europe: "27 novembre 1987",
        },
        createurs: {
            developpeur: "Nintendo",
            editeur: "Nintendo",
            compositeur: "Koji Kondo",
            producteur: "Shigeru Miyamoto",
        },
        anneeDeCreation: 1986,
        multijoueur: false,
        description: "Link doit sauver la princesse Zelda et vaincre Ganon dans un monde fantastique.",
        genre: ["Aventure", "Action"],
        noteMoyenne: 98,
        srcImage: "Images_jeux_video/Legend_of_Zelda.PNG",
    },
    {
        nom: "Tetris",
        datesDeSortie: {
            russie: "6 juin 1984",
            ameriqueDuNord: "1988",
            europe: "1988",
        },
        createurs: {
            developpeur: "Alexey Pajitnov",
            editeur: "Spectrum HoloByte",
            compositeur: "N/A",
            producteur: "N/A",
        },
        anneeDeCreation: 1984,
        multijoueur: true,
        description: "Un jeu de puzzle consistant à assembler des formes géométriques pour former des lignes complètes.",
        genre: ["Puzzle"],
        noteMoyenne: 90,
        srcImage: "Images_jeux_video/tetris.png",
    },
    {
        nom: "Minecraft",
        datesDeSortie: {
            global: "18 novembre 2011",
        },
        createurs: {
            developpeur: "Mojang Studios",
            editeur: "Mojang Studios",
            compositeur: "C418",
            producteur: "Markus Persson",
        },
        anneeDeCreation: 2011,
        multijoueur: true,
        description: "Un jeu bac à sable où les joueurs peuvent construire, explorer et survivre dans un monde généré aléatoirement.",
        genre: ["Sandbox", "Survival"],
        noteMoyenne: 94,
        srcImage: "Images_jeux_video/minecraft-2011.webp",
    },
    {
        nom: "Pac-Man",
        datesDeSortie: {
            japon: "22 mai 1980",
            ameriqueDuNord: "1980",
            europe: "1981",
        },
        createurs: {
            developpeur: "Namco",
            editeur: "Namco",
            compositeur: "Toshio Kai",
            producteur: "Toru Iwatani",
        },
        anneeDeCreation: 1980,
        multijoueur: false,
        description: "Un jeu d'arcade où le joueur contrôle Pac-Man pour collecter des pac-gommes tout en évitant les fantômes.",
        genre: ["Arcade", "Action"],
        noteMoyenne: 92,
        srcImage: "Images_jeux_video/pac-man1980.jpg",
    },
    {
        nom: "Sonic the Hedgehog",
        datesDeSortie: {
            japon: "23 juin 1991",
            ameriqueDuNord: "23 juin 1991",
            europe: "1991",
        },
        createurs: {
            developpeur: "Sega",
            editeur: "Sega",
            compositeur: "Masato Nakamura",
            producteur: "Yuji Naka",
        },
        anneeDeCreation: 1991,
        multijoueur: false,
        description: "Un jeu où Sonic, un hérisson rapide, doit déjouer les plans du Dr. Robotnik.",
        genre: ["Plateforme", "Action"],
        noteMoyenne: 94,
        srcImage: "Images_jeux_video/sonic.jpg",
    },
    {
        nom: "Final Fantasy VII",
        datesDeSortie: {
            japon: "31 janvier 1997",
            ameriqueDuNord: "7 septembre 1997",
            europe: "17 novembre 1997",
        },
        createurs: {
            developpeur: "Square",
            editeur: "Square",
            compositeur: "Nobuo Uematsu",
            producteur: "Hironobu Sakaguchi",
        },
        anneeDeCreation: 1997,
        multijoueur: false,
        description: "Cloud Strife et son équipe combattent la Shinra Corporation pour sauver la planète.",
        genre: ["RPG", "Aventure"],
        noteMoyenne: 96,
        srcImage: "Images_jeux_video/final_Fantasy.jpg",
    },
    {
        nom: "Overwatch",
        datesDeSortie: {
            global: "24 mai 2016",
        },
        createurs: {
            developpeur: "Blizzard Entertainment",
            editeur: "Blizzard Entertainment",
            compositeur: "Derek Duke",
            producteur: "Jeff Kaplan",
        },
        anneeDeCreation: 2016,
        multijoueur: true,
        description: "Un jeu de tir multijoueur basé sur des héros avec des capacités uniques.",
        genre: ["FPS", "Action"],
        noteMoyenne: 91,
        srcImage: "Images_jeux_video/overwatch2016.webp",
    },
    {
        nom: "The Sims",
        datesDeSortie: {
            ameriqueDuNord: "4 février 2000",
            europe: "2000",
        },
        createurs: {
            developpeur: "Maxis",
            editeur: "Electronic Arts",
            compositeur: "Jerry Martin",
            producteur: "Will Wright",
        },
        anneeDeCreation: 2000,
        multijoueur: false,
        description: "Un simulateur de vie où les joueurs contrôlent des personnages appelés Sims.",
        genre: ["Simulation", "Stratégie"],
        noteMoyenne: 90,
        srcImage: "Images_jeux_video/theSims2000.jpg",
    },
    {
        nom: "Call of Duty",
        datesDeSortie: {
            ameriqueDuNord: "29 octobre 2003",
            europe: "7 novembre 2003",
        },
        createurs: {
            developpeur: "Infinity Ward",
            editeur: "Activision",
            compositeur: "Michael Giacchino",
            producteur: "Vince Zampella",
        },
        anneeDeCreation: 2003,
        multijoueur: true,
        description: "Un jeu de tir à la première personne axé sur la guerre mondiale et moderne.",
        genre: ["FPS", "Action"],
        noteMoyenne: 88,
        srcImage: "Images_jeux_video/callOfDity2003.jpg",
    },
    {
        nom: "Pong",
        datesDeSortie: {
            global: "29 novembre 1972",
        },
        createurs: {
            developpeur: "Atari",
            editeur: "Atari",
            compositeur: "N/A",
            producteur: "Allan Alcorn",
        },
        anneeDeCreation: 1972,
        multijoueur: true,
        description: "Un des premiers jeux vidéo où deux joueurs se renvoient une balle dans un jeu de type ping-pong.",
        genre: ["Arcade", "Sport"],
        noteMoyenne: 85,
        srcImage: "Images_jeux_video/pong.webp",
    },
    {
        nom: "Space Invaders",
        datesDeSortie: {
            japon: "19 juin 1978",
            ameriqueDuNord: "1978",
            europe: "1978",
        },
        createurs: {
            developpeur: "Taito",
            editeur: "Taito",
            compositeur: "Toshio Kai",
            producteur: "Tomohiro Nishikado",
        },
        anneeDeCreation: 1978,
        multijoueur: false,
        description: "Un jeu d'arcade où le joueur doit détruire des vagues d'extraterrestres avec un canon laser.",
        genre: ["Arcade", "Shooter"],
        noteMoyenne: 90,
        srcImage: "Images_jeux_video/space_invaders.webp",
    },
    {
        nom: "Asteroids",
        datesDeSortie: {
            global: "1979",
        },
        createurs: {
            developpeur: "Atari",
            editeur: "Atari",
            compositeur: "N/A",
            producteur: "Lyle Rains",
        },
        anneeDeCreation: 1979,
        multijoueur: true,
        description: "Le joueur contrôle un vaisseau spatial qui doit détruire des astéroïdes tout en évitant des collisions.",
        genre: ["Arcade", "Shooter"],
        noteMoyenne: 88,
        srcImage: "Images_jeux_video/asteroides.ppm",
    },
    {
        nom: "Bomberman",
        datesDeSortie: {
            japon: "20 décembre 1983",
        },
        createurs: {
            developpeur: "Hudson Soft",
            editeur: "Hudson Soft",
            compositeur: "Jun Chikuma",
            producteur: "Shinichi Nakamoto",
        },
        anneeDeCreation: 1983,
        multijoueur: false,
        description: "Un jeu d'action où le joueur contrôle un personnage posant des bombes pour éliminer des ennemis et détruire des obstacles afin de trouver la sortie du niveau.",
        genre: ["Action", "Puzzle"],
        noteMoyenne: 82,
        srcImage: "Images_jeux_video/bomberman1983.png",
    },
    {
        nom: "Breakout",
        datesDeSortie: {
            global: "13 mai 1976",
        },
        createurs: {
            developpeur: "Atari",
            editeur: "Atari",
            compositeur: "N/A",
            producteur: "Nolan Bushnell",
        },
        anneeDeCreation: 1976,
        multijoueur: false,
        description: "Un jeu où le joueur utilise une palette pour casser des briques en faisant rebondir une balle.",
        genre: ["Arcade", "Puzzle"],
        noteMoyenne: 80,
        srcImage: "Images_jeux_video/breakout.jpg",
    },
    // {
    //     nom: "Adventure",
    //     datesDeSortie: {
    //         global: "1979",
    //     },
    //     createurs: {
    //         developpeur: "Atari",
    //         editeur: "Atari",
    //         compositeur: "N/A",
    //         producteur: "Warren Robinett",
    //     },
    //     anneeDeCreation: 1979,
    //     multijoueur: false,
    //     description: "Un des premiers jeux d'action-aventure où le joueur explore un labyrinthe pour trouver un calice magique.",
    //     genre: ["Aventure", "Action"],
    //     noteMoyenne: 84,
    //     srcImage: "1979",
    // },
    {
        nom: "Pac-Man World Re-Pac",
        datesDeSortie: {
            global: "26 août 2022",
        },
        createurs: {
            developpeur: "Bandai Namco",
            editeur: "Bandai Namco",
            compositeur: "Takeharu Ishimoto",
            producteur: "Yoshihiro Ogura",
        },
        anneeDeCreation: 2022,
        multijoueur: false,
        description: "Une version modernisée de Pac-Man World avec des graphismes améliorés et de nouveaux niveaux.",
        genre: ["Plateforme", "Aventure"],
        noteMoyenne: 82,
        srcImage: "Images_jeux_video/pac-man2022.jpg",
    },
    {
        nom: "Elden Ring",
        datesDeSortie: {
            global: "25 février 2022",
        },
        createurs: {
            developpeur: "FromSoftware",
            editeur: "Bandai Namco",
            compositeur: "Yuka Kitamura",
            producteur: "Hidetaka Miyazaki",
        },
        anneeDeCreation: 2022,
        multijoueur: true,
        description: "Un jeu de rôle en monde ouvert où les joueurs explorent l'entre-terre pour restaurer l'Anneau d'Elden.",
        genre: ["RPG", "Action"],
        noteMoyenne: 95,
        srcImage: "Images_jeux_video/eldenRing.webp",
    },
    {
        nom: "Fortnite",
        datesDeSortie: {
            global: "25 juillet 2017",
        },
        createurs: {
            developpeur: "Epic Games",
            editeur: "Epic Games",
            compositeur: "Pinar Toprak",
            producteur: "Darren Sugg",
        },
        anneeDeCreation: 2017,
        multijoueur: true,
        description: "Un jeu multijoueur populaire avec des modes Battle Royale et de construction créative.",
        genre: ["Action", "Battle Royale"],
        noteMoyenne: 89,
        srcImage: "Images_jeux_video/fortnite.jpg",
    },
    {
        nom: "Among Us",
        datesDeSortie: {
            global: "15 juin 2018",
        },
        createurs: {
            developpeur: "InnerSloth",
            editeur: "InnerSloth",
            compositeur: "Forest Willard",
            producteur: "Forest Willard",
        },
        anneeDeCreation: 2018,
        multijoueur: true,
        description: "Un jeu multijoueur où les joueurs coopèrent pour accomplir des tâches, tout en identifiant les imposteurs.",
        genre: ["Stratégie", "Party Game"],
        noteMoyenne: 84,
        srcImage: "Images_jeux_video/amongUs2018.jpg",
    },
    {
        nom: "Hades",
        datesDeSortie: {
            global: "17 septembre 2020",
        },
        createurs: {
            developpeur: "Supergiant Games",
            editeur: "Supergiant Games",
            compositeur: "Darren Korb",
            producteur: "Amir Rao",
        },
        anneeDeCreation: 2020,
        multijoueur: false,
        description: "Un roguelike où le joueur incarne Zagreus, fils d'Hadès, essayant d'échapper aux Enfers.",
        genre: ["Action", "Roguelike"],
        noteMoyenne: 93,
        srcImage: "Images_jeux_video/hades.jpg",
    },
    {
        nom: "Cathode Ray Tube Amusement Device",
        datesDeSortie: {
            global: "1947",
        },
        createurs: {
            developpeur: "Thomas T. Goldsmith Jr. et Estle Ray Mann",
            editeur: "N/A",
            compositeur: "N/A",
            producteur: "Thomas T. Goldsmith Jr.",
        },
        anneeDeCreation: 1947,
        multijoueur: false,
        description: "Le premier jeu interactif connu, utilisant un écran à tube cathodique pour simuler le tir sur des cibles.",
        genre: ["Simulation"],
        noteMoyenne: 70,
        srcImage: "Images_jeux_video/cathodeRay1947.jpg",
    },
    {
        nom: "Tennis for Two",
        datesDeSortie: {
            global: "18 octobre 1958",
        },
        createurs: {
            developpeur: "William Higinbotham",
            editeur: "N/A",
            compositeur: "N/A",
            producteur: "William Higinbotham",
        },
        anneeDeCreation: 1958,
        multijoueur: true,
        description: "Un jeu de tennis simulé sur un oscilloscope, souvent considéré comme l'un des premiers jeux vidéo.",
        genre: ["Sport"],
        noteMoyenne: 75,
        srcImage: "Images_jeux_video/Tennis_for_Two_1958.jpg",
    },
    {
        nom: "Spacewar!",
        datesDeSortie: {
            global: "1962",
        },
        createurs: {
            developpeur: "Steve Russell, Martin Graetz, Wayne Wiitanen",
            editeur: "N/A",
            compositeur: "N/A",
            producteur: "Steve Russell",
        },
        anneeDeCreation: 1962,
        multijoueur: true,
        description: "Un jeu de combat spatial développé au MIT, jouable sur un ordinateur PDP-1.",
        genre: ["Shooter", "Arcade"],
        noteMoyenne: 80,
        srcImage: "Images_jeux_video/spacewar.webp",
    },
    {
        nom: "Computer Space",
        datesDeSortie: {
            global: "1971",
        },
        createurs: {
            developpeur: "Nolan Bushnell et Ted Dabney",
            editeur: "Nutting Associates",
            compositeur: "N/A",
            producteur: "Nolan Bushnell",
        },
        anneeDeCreation: 1971,
        multijoueur: false,
        description: "Le premier jeu d'arcade commercialisé, où le joueur contrôle un vaisseau spatial.",
        genre: ["Arcade"],
        noteMoyenne: 78,
        srcImage: "Images_jeux_video/computerSpace.jpg",
    },
    {
        nom: "Magnavox Odyssey",
        datesDeSortie: {
            global: "1972",
        },
        createurs: {
            developpeur: "Ralph Baer",
            editeur: "Magnavox",
            compositeur: "N/A",
            producteur: "Ralph Baer",
        },
        anneeDeCreation: 1972,
        multijoueur: true,
        description: "La première console de jeu vidéo domestique, proposant plusieurs mini-jeux interactifs.",
        genre: ["Console"],
        noteMoyenne: 80,
        srcImage: "Images_jeux_video/magnavoxOdeyssey.jpg",
    },
    {
        nom: "Battlezone",
        datesDeSortie: {
            global: "1980",
        },
        createurs: {
            developpeur: "Atari",
            editeur: "Atari",
            compositeur: "N/A",
            producteur: "Ed Rotberg",
        },
        anneeDeCreation: 1980,
        multijoueur: false,
        description: "Un jeu de combat de chars en 3D vectorielle, considéré comme un pionnier du genre.",
        genre: ["Simulation", "Shooter"],
        noteMoyenne: 85,
        srcImage: "Images_jeux_video/battlezone.jpg",
    },
    {
        nom: "Donkey Kong",
        datesDeSortie: {
            japon: "9 juillet 1981",
            ameriqueDuNord: "31 juillet 1981",
        },
        createurs: {
            developpeur: "Nintendo",
            editeur: "Nintendo",
            compositeur: "Yukio Kaneoka",
            producteur: "Shigeru Miyamoto",
        },
        anneeDeCreation: 1981,
        multijoueur: false,
        description: "Un jeu de plateforme où Jumpman (plus tard Mario) doit sauver Pauline des griffes de Donkey Kong.",
        genre: ["Plateforme", "Arcade"],
        noteMoyenne: 90,
        srcImage: "Images_jeux_video/Donkey-Kong.jpg",
    },
    {
        nom: "Zork",
        datesDeSortie: {
            global: "1977",
        },
        createurs: {
            developpeur: "Infocom",
            editeur: "Infocom",
            compositeur: "N/A",
            producteur: "Marc Blank et Dave Lebling",
        },
        anneeDeCreation: 1977,
        multijoueur: false,
        description: "Un jeu d'aventure textuel où le joueur explore un monde fantastique en utilisant des commandes écrites.",
        genre: ["Aventure textuelle"],
        noteMoyenne: 88,
        srcImage: "Images_jeux_video/zork.jpg",
    },
    {
        nom: "Myst",
        datesDeSortie: {
            global: "24 septembre 1993",
        },
        createurs: {
            developpeur: "Cyan",
            editeur: "Broderbund",
            compositeur: "Robyn Miller",
            producteur: "Rand Miller",
        },
        anneeDeCreation: 1993,
        multijoueur: false,
        description: "Un jeu d'aventure graphique basé sur l'exploration et la résolution d'énigmes.",
        genre: ["Aventure", "Puzzle"],
        noteMoyenne: 92,
        srcImage: "Images_jeux_video/myst1993.webp",
    },
    {
        nom: "SimCity",
        datesDeSortie: {
            global: "3 février 1989",
        },
        createurs: {
            developpeur: "Maxis",
            editeur: "Broderbund",
            compositeur: "N/A",
            producteur: "Will Wright",
        },
        anneeDeCreation: 1989,
        multijoueur: false,
        description: "Un jeu de simulation de construction de ville.",
        genre: ["Simulation"],
        noteMoyenne: 90,
        srcImage: "Images_jeux_video/simcity1989.jpg",
    },
    {
        nom: "Wolfenstein 3D",
        datesDeSortie: {
            global: "5 mai 1992",
        },
        createurs: {
            developpeur: "id Software",
            editeur: "Apogee Software",
            compositeur: "Bobby Prince",
            producteur: "Tom Hall",
        },
        anneeDeCreation: 1992,
        multijoueur: false,
        description: "Un jeu de tir à la première personne où le joueur incarne un espion cherchant à s'échapper d'un château nazi.",
        genre: ["FPS"],
        noteMoyenne: 85,
        srcImage: "Images_jeux_video/wolfenstein3D.jpg",
    },
    {
        nom: "Duck Hunt",
        datesDeSortie: {
            japon: "21 avril 1984",
            ameriqueDuNord: "18 octobre 1985",
            europe: "15 août 1987",
        },
        createurs: {
            developpeur: "Nintendo",
            editeur: "Nintendo",
            compositeur: "Hirokazu Tanaka",
            producteur: "Gunpei Yokoi",
        },
        anneeDeCreation: 1984,
        multijoueur: false,
        description: "Un jeu de tir interactif où le joueur utilise le pistolet optique NES Zapper pour abattre des canards et autres cibles à l'écran.",
        genre: ["Tir", "Action"],
        noteMoyenne: 85,
        srcImage: "Images_jeux_video/duckHunt.jpg",
    },
    {
        nom: "Celeste",
        datesDeSortie: {
            global: "25 janvier 2018",
        },
        createurs: {
            developpeur: "Maddy Makes Games",
            editeur: "Maddy Makes Games",
            compositeur: "Lena Raine",
            producteur: "Maddy Thorson",
        },
        anneeDeCreation: 2018,
        multijoueur: false,
        description: "Un jeu de plateforme où le joueur incarne Madeline, une jeune femme escaladant la montagne Celeste tout en affrontant des défis physiques et émotionnels.",
        genre: ["Plateforme", "Aventure"],
        noteMoyenne: 95,
        srcImage: "Images_jeux_video/celeste.avif",
    },
    {
        nom: "Half-Life",
        datesDeSortie: {
            global: "19 novembre 1998",
        },
        createurs: {
            developpeur: "Valve Corporation",
            editeur: "Sierra Studios",
            compositeur: "Kelly Bailey",
            producteur: "Gabe Newell",
        },
        anneeDeCreation: 1998,
        multijoueur: false,
        description: "Un jeu de tir à la première personne où le joueur incarne Gordon Freeman, un scientifique qui doit échapper à une invasion d'extraterrestres et de soldats dans un complexe de recherche secret.",
        genre: ["FPS", "Science-fiction", "Aventure"],
        noteMoyenne: 96,
        srcImage: "Images_jeux_video/halfLife.jpg",
    },
    {
        nom: "Q*bert",
        datesDeSortie: {
            global: "1982",
        },
        createurs: {
            developpeur: "Gottlieb",
            editeur: "Gottlieb",
            compositeur: "N/A",
            producteur: "Warren Davis",
        },
        anneeDeCreation: 1982,
        multijoueur: false,
        description: "Un jeu d'arcade où le joueur contrôle Q*bert, une créature qui saute sur les cubes d'une pyramide pour les colorier tout en évitant les ennemis et les obstacles.",
        genre: ["Arcade", "Puzzle"],
        noteMoyenne: 80,
        srcImage: "Images_jeux_video/qbert.jpg",
    },
    {
        nom: "Flappy Bird",
        datesDeSortie: {
            global: "24 mai 2013",
        },
        createurs: {
            developpeur: "Dong Nguyen",
            editeur: "DotGears",
            compositeur: "N/A",
            producteur: "Dong Nguyen",
        },
        anneeDeCreation: 2013,
        multijoueur: false,
        description: "Un jeu mobile où le joueur contrôle un oiseau qui doit voler en évitant des tuyaux, avec un gameplay simple mais extrêmement difficile.",
        genre: ["Action", "Endurance"],
        noteMoyenne: 85,
        srcImage: "Images_jeux_video/flappyBird.png",
    },
    {
        nom: "Angry Birds",
        datesDeSortie: {
            global: "11 décembre 2009",
        },
        createurs: {
            developpeur: "Rovio Entertainment",
            editeur: "Rovio Entertainment",
            compositeur: "Heikki Kossi",
            producteur: "Niklas Hed",
        },
        anneeDeCreation: 2009,
        multijoueur: false,
        description: "Un jeu de puzzle où le joueur utilise des oiseaux lancés avec un slingshot pour détruire des structures et des cochons ennemis, avec une mécanique de jeu basée sur la physique.",
        genre: ["Puzzle", "Action"],
        noteMoyenne: 88,
        srcImage: "Images_jeux_video/angryBird.jpg",
    },
    {
        nom: "SimCity (2013)",
        datesDeSortie: {
            global: "5 mars 2013",
        },
        createurs: {
            developpeur: "Maxis",
            editeur: "Electronic Arts",
            compositeur: "Alec S. K. L. T. R. S.",
            producteur: "Lucy Bradshaw",
        },
        anneeDeCreation: 2013,
        multijoueur: true,
        description: "Un jeu de simulation de construction de ville où le joueur doit gérer les ressources, les infrastructures et la satisfaction des citoyens tout en faisant face à des défis économiques et environnementaux.",
        genre: ["Simulation", "Gestion"],
        noteMoyenne: 70,
        srcImage: "Images_jeux_video/simcity2013.jpg",
    },
    {
        nom: "Subway Surfers",
        datesDeSortie: {
            global: "24 mai 2012",
        },
        createurs: {
            developpeur: "Kiloo",
            editeur: "Kiloo",
            compositeur: "N/A",
            producteur: "N/A",
        },
        anneeDeCreation: 2012,
        multijoueur: false,
        description: "Un jeu de course infinie où le joueur contrôle un personnage qui court à travers des voies de métro, évitant des obstacles et collectant des pièces tout en étant poursuivi par un inspecteur et son chien.",
        genre: ["Course", "Endurance", "Action"],
        noteMoyenne: 85,
        srcImage: "Images_jeux_video/subway_surfers.webp",
    }
]


let afficherGrandeCarte = false

let ecran = document.getElementById('divEcran')


ecran.style.display = 'flex';
ecran.style.flexWrap = 'wrap';
ecran.style.gap = '1rem';
ecran.style.justifyContent = 'center';
ecran.style.zIndex = 10;
ecran.style.overflow = 'hidden scroll'
ecran.style.perspective = "800px";
ecran.style.rotateX = '50%'


if (afficherGrandeCarte === true) {

   jeux.forEach((jeu) => {
    // Création de la carte
    let carte = document.createElement('div');
    //carte.className = 
    carte.style.border = '1px solid black';
    carte.style.padding = '1rem';
    carte.style.width = '200px';
    carte.style.textAlign = 'center';
    carte.style.borderRadius = '8px';

    //Ajout année
    let anneeDeCreation = document.createElement('h2');
    anneeDeCreation.textContent = jeu.anneeDeCreation;
    anneeDeCreation.style.margin = "0";
    carte.appendChild(anneeDeCreation);

    // Ajout de l'image
    let image = document.createElement('img');
    image.src = jeu.srcImage;
    image.alt = `Image de ${jeu.nom}`;
    image.style.width = '100%';
    image.style.height = '10rem'
    image.style.borderRadius = '8px';
    carte.appendChild(image);

    // Ajout du nom du jeu
    let nom = document.createElement('h2');
    nom.textContent = jeu.nom;
    nom.style.fontSize = '1rem';
    carte.appendChild(nom);

    // Ajout de la note moyenne
    let note = document.createElement('p');
    note.textContent = `Note : ${jeu.noteMoyenne}`;
    carte.appendChild(note);
    
    //Ajout créateurs
    let createurs = document.createElement('div');
    let developpeur = document.createElement('h4');
    let editeur = document.createElement('h4');
    let compositeur = document.createElement('h4');
    let producteur = document.createElement('h4');
    
    createurs.style.textAlign = 'left'

    developpeur.textContent = `Développeur : ${jeu.createurs.developpeur}`;
    editeur.textContent = `Éditeur : ${jeu.createurs.editeur}`;
    compositeur.textContent = `Compositeur : ${jeu.createurs.compositeur}`;
    producteur.textContent = `Producteur : ${jeu.createurs.producteur}`;
    
    createurs.appendChild(developpeur);
    createurs.appendChild(editeur);
    createurs.appendChild(compositeur);
    createurs.appendChild(producteur);

    carte.appendChild(createurs);
    carte.appendChild(createurs);

    // Ajout des dates de sortie
    let datesSortie = document.createElement('div');
    datesSortie.style.textAlign = 'left';

    // Vérif structure
    if (jeu.datesDeSortie.global) {
        let dateGlobale = document.createElement('h4');
        dateGlobale.textContent = `Date de sortie mondiale : ${jeu.datesDeSortie.global}`;
        datesSortie.appendChild(dateGlobale);
    } else {
        // Si pas de date globale, ajout des dates régionales
        if (jeu.datesDeSortie.japon) {
            let dateJapon = document.createElement('h4');
            dateJapon.textContent = `Japon : ${jeu.datesDeSortie.japon}`;
            datesSortie.appendChild(dateJapon);
        }
        if (jeu.datesDeSortie.ameriqueDuNord) {
            let dateAmerique = document.createElement('h4');
            dateAmerique.textContent = `Amérique du Nord : ${jeu.datesDeSortie.ameriqueDuNord}`;
            datesSortie.appendChild(dateAmerique);
        }
        if (jeu.datesDeSortie.europe) {
            let dateEurope = document.createElement('h4');
            dateEurope.textContent = `Europe : ${jeu.datesDeSortie.europe}`;
            datesSortie.appendChild(dateEurope);
        }
    }
    carte.appendChild(datesSortie);

    //Ajout description
    let description = document.createElement('h5');
    description.textContent = jeu.description;
    carte.appendChild(description);

    //Ajout catégories ou genre
    let genresDiv = document.createElement('div');
    genresDiv.style.display = 'flex';
    genresDiv.style.justifyContent = 'center'
    genresDiv.style.flexWrap= 'nowrap';
    genresDiv.style.gap = '1rem'
    
    jeu.genre.forEach(function(genre) {
        let genreElement = document.createElement('h4');
        genreElement.textContent = `${genre}`;
        genresDiv.appendChild(genreElement);
    });
    carte.appendChild(genresDiv);

    //Ajout multi ou solo
    let multijoueur = document.createElement('div');
    let imageMulti = document.createElement('img');
    imageMulti.style.width = '2rem'

    if (jeu.multijoueur === true) {
        imageMulti.src = "icones/multijoueur.png";
    }
    else {
        imageMulti.src = "icones/solo.png";
    }
    multijoueur.appendChild(imageMulti);
    carte.appendChild(multijoueur)

    ecran.appendChild(carte);
});
 
}

else {
    jeux.forEach((jeu) => {
        // Création de la carte
        let carte = document.createElement('div');
        //carte.className = 
        carte.style.border = '2px solid rgb(32, 32, 32)'
        carte.style.padding = '0.5rem';
        carte.style.width = '5rem';
        carte.style.textAlign = 'center';
        carte.style.borderRadius = '8px';
        carte.style.display = 'flex';
        carte.style.flexDirection = "column";
        carte.style.justifyContent = "space-between"
        
    
        //Ajout année
        let anneeDeCreation = document.createElement('h2');
        anneeDeCreation.textContent = jeu.anneeDeCreation;
        anneeDeCreation.style.fontSize = '0.9rem'
        anneeDeCreation.style.margin = "0.5rem";
        anneeDeCreation.style.marginTop = "0rem";
        anneeDeCreation.style.color = "rgb(32, 32, 32)"
        carte.appendChild(anneeDeCreation);
        
    
        // Ajout de l'image
        let image = document.createElement('img');
        image.src = jeu.srcImage;
        image.alt = `Image de ${jeu.nom}`;
        image.style.width = '95%';
        image.style.height = '5rem'
        image.style.marginRight = "100px"
        image.style.borderRadius = '8px';
        image.style.border ="solid 2px rgb(32, 32, 32)"
        //image.style.boxShadow = "0.5rem 0.5rem #E2DFDF"
        
        carte.appendChild(image);
    
        // Ajout du nom du jeu
        let nom = document.createElement('h2');
        nom.textContent = jeu.nom;
        nom.style.fontSize = '0.8rem';
        nom.style.marginBottom ='0.2rem'
        carte.appendChild(nom);
        ecran.appendChild(carte);
        nom.style.color = 'rgb(32, 32, 32)'

    });
     
 }


