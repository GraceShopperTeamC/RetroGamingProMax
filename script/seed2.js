const {
    db,
    models: { User, Product, Cart, Order },
} = require("../server/db");
const _ = require("lodash");
const { faker } = require("@faker-js/faker");
const { times } = require("lodash");

async function seed() {
    await db.sync(); 
    console.log("db synced!");


        // Begin Real Seed Data
        //SNES Start
        await Product.create({
            productName: 'Super Nintendo Console',
            category: 'snes',
            stockQuantity: 30,
            description: '16-bit home video game console developed by Nintendo that was released in 1990 in Japan and South Korea, 1991 in North America. This state of the art console provides stunning graphics, responsive controls, and a decent length of cord! When the game malfunctions simply remove the cartridge, blow the dust out, and re-insert forcefully! ',
            price: 200.00,
            imageUrl: 'https://static.swappa.com/media/product/snes-classic/snes-classic-01.png'
        });

        await Product.create({
            productName: 'Super Nintendo Controller',
            category: 'snes',
            stockQuantity: 25,
            description: ' home video game controller developed by Nintendo that was released in 1990 in Japan and South Korea, 1991 in North America, 1992 in Europe and Oceania, and 1993 in South America.',
            price: 25.00,
            imageUrl: 'https://gametrog.com/wp-content/uploads/2018/07/Joystick-snes-gametrog.png'
        });

        await Product.create({
            productName: 'Donkey Kong Country',
            category: 'snes',
            stockQuantity: 10,
            description: 'In this action-packed platformer -- the first to use ACM computer modeling for amazing character and background detail -- King K. Rool and his Kremlings have stolen Donkey Kongs banana hoard, and now its up to Donkey Kong and Diddy Kong to get it back!',
            price: 35.00,
            imageUrl: 'http://1.bp.blogspot.com/-uK8p9JXNQqk/T14x02Q7-jI/AAAAAAAADyk/I3qI8frfwK8/s1600/Donkey+Kong+Country.png'
        });

        await Product.create({
            productName: 'Donkey Kong Country 2',
            category: 'snes',
            stockQuantity: 15,
            description: 'This second installment of the Donkey Kong Country revolves around Diddy Kong and his girlfriend, Dixie Kong, who attempt to rescue Donkey Kong after he is abducted by King K. Rool. The game is set on "Crocodile Isle", in which there are eight worlds of varying environments, totaling to 52 levels.',
            price: 35.00,
            imageUrl: 'https://4.bp.blogspot.com/-d0kT4GgcALU/WrGzVj9op-I/AAAAAAAAHT0/J9oP-rjV5UMVCR_zJjwc1khdFIihFj-lQCLcBGAs/s1600/DKC2+cover.jpg'
        });
        
        await Product.create({
            productName: 'Donkey Kong Country 3',
            category: 'snes',
            stockQuantity: 20,
            description: 'Revisit Donkey Kong Island and join the Kong family for their latest adventure. The Kremlings have a mysterious new leader named KAOS and are up to their usual mischief, even capturing Donkey Kong and Diddy Kong. Now its up to Dixie Kong and the newest Kong, a giant infant named Kiddy, to rescue the two missing apes.',
            price: 40.00,
            imageUrl: 'https://images.launchbox-app.com/fba1ed2e-30fa-47ba-9e6a-267ff2784dfa.jpg'
        });

        await Product.create({
            productName: 'Kirby Superstar',
            category: 'snes',
            stockQuantity: 5,
            description: 'Dream Land is under siege again! That awful King Dedede is at it again - hes stolen all the food in Dream Land! Its up to Kirby to get it back and ultimately save Popstar from being taken over! Help Kirby work through EIGHT challenging games filled with action and adventure.',
            price: 45.00,
            imageUrl: 'https://i.ytimg.com/vi/lkS7wXuIwig/maxresdefault.jpg'
        });

        await Product.create({
            productName: 'Madden 97',
            category: 'snes',
            stockQuantity: 12,
            description: 'Madden NFL™ 97 reloads with an arsenal of new and classic features to field the most complete Madden ever.',
            price: 25.00,
            imageUrl: 'https://images.launchbox-app.com/9ab51031-9cbc-4368-bb0b-739c3b0ed094.png'
        });

        await Product.create({
            productName: 'Mortal Kombat',
            category: 'snes',
            stockQuantity: 17,
            description: 'The #1 arcade hit is here: from Sub-Zero, Rayden and the rest of the Kombat Warriors to the grueling endurance and intense mirror matches! Execute bone-shattering combos and ferocious finishing moves! Defeat the half human dragon Goro, and destroy the shape-changing Shang Tsung to become the Supreme Mortal Kombat Warrior!',
            price: 20.00,
            imageUrl: 'https://www.lukiegames.com/assets/images/SNES/snes_mortal_kombat_p_tsvlpu.jpg'
        });

        await Product.create({
            productName: 'Street Fighter 2',
            category: 'snes',
            stockQuantity: 5,
            description: 'The introductory edition of Capcoms genre-defining fighting game is ported to the Super NES system as one of the most anticipated and popular console releases of all time. Two-player combat, all of the characters as well as all four bosses, every one of the classic stages and music themes - the arcade great came home with this version.',
            price: 80.00,
            imageUrl: 'https://i.pinimg.com/originals/96/9e/70/969e70ea8d42c9abcd20d964acb40c5c.jpg'
        });

        await Product.create({
            productName: 'Super Mario World',
            category: 'snes',
            stockQuantity: 7,
            description: 'Marios off on his biggest adventure ever, and this time hes brought along a friend. Yoshi the dinosaur teams up with Mario to battle Bowser, who has kidnapped Princess Toadstool once again. Guide Mario and Yoshi through nine peril-filled worlds to the final showdown in Bowsers castle. Use Marios new powers and Yoshis voracious monster-gobbling appetite as you explore 96 levels filled with dangerous new monsters and traps. Climb mountains and cross rivers, and descend into subterranean depths. Destroy the seven Koopa castles and find keys to gain entrance to hidden levels. Discover more warps and thrilling bonus worlds than ever before!',
            price: 85.00,
            imageUrl: 'https://3.bp.blogspot.com/-m628T0N1u14/TsH4k_73NoI/AAAAAAAAAfk/5dkcu9FhMi4/s1600/Super_Mario_World_Box.png'
        });
        //END SNES
        
        // BEGIN PS3
        await Product.create({
            productName: 'Playstation 3 Console',
            category: 'ps3',
            stockQuantity: 26,
            description: 'The PlayStation 3 is a home video game console developed by Sony Interactive Entertainment. If you had a social life before then you will no longer have to worry about that anymore! Complete with a wireless controller for greater range when rage quitting after hard losses! The successor to the PlayStation 2, it is part of the PlayStation brand of consoles. It was first released on November 11, 2006, in Japan, November 17, 2006, in North America, and March 23, 2007, in Europe and Australia.',
            price: 285.00,
            imageUrl: 'https://vignette3.wikia.nocookie.net/es.gta/images/8/80/PS3.png/revision/latest?cb=20101010211602'
        });

        await Product.create({
            productName: 'Playstation 3 Controller',
            category: 'ps3',
            stockQuantity: 31,
            description: 'Playstation 3 Dualshock controller. With wireless connection at the press of a button, this replacement controller is sure to make an impact while leaving your console safely in place after those frustrating online losses! New and improved durability designed to withstand even the biggest squad wipes on C.O.D!',
            price: 50.00,
            imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2017/09/playstation-3-controller-issues.png'
        });

        await Product.create({
            productName: 'Red Dead Redemption',
            category: 'ps3',
            stockQuantity: 9,
            description: 'Red Dead Redemption is a Western epic, set at the turn of the 20th century when the lawless and chaotic badlands began to give way to the expanding reach of government and the spread of the Industrial Age. When federal agents threaten his family, former outlaw John Marston is forced to pick up his guns and hunt down the gang of criminals he once called friends. Experience Marstons journey across the sprawling expanses of the American West and Mexico as he fights to bury his blood-stained past and seek a new future for himself and his family.',
            price: 55.00,
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/062fceab-dd60-438b-adb7-88f55526ae36/d6zwqka-6d65abd8-6fb9-4573-b425-922ef7ef0724.jpg/v1/fill/w_826,h_967,q_75,strp/red_dead_redemption_ps3_cover_variation_2_by_domestrialization-d6zwqka.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8wNjJmY2VhYi1kZDYwLTQzOGItYWRiNy04OGY1NTUyNmFlMzYvZDZ6d3FrYS02ZDY1YWJkOC02ZmI5LTQ1NzMtYjQyNS05MjJlZjdlZjA3MjQuanBnIiwid2lkdGgiOiI8PTgyNiIsImhlaWdodCI6Ijw9OTY3In1dXX0.LnQkLpIGX2WyuRX9kuBt0rZ0PgQzm-JyC5M-AbQNcrA'
        });

        await Product.create({
            productName: 'Resident Evil 5',
            category: 'ps3',
            stockQuantity: 19,
            description: 'The biohazard threat has not ended: Just when it seemed that the menace of Resident Evil had been destroyed, along comes a new terror to send shivers down players spines. Experience the thrill and terror all over again with Resident Evil 5 for PS3. Featuring Chris Redfield of the original Resident Evil and Sheva Alomar, a West African agent of the Bioterrorism Security Assessment Alliance (BSAA), this sci-fi survival game is staged in a remote desert colony packed with hordes of fast-moving, quick-thinking enemies that represent a whole new breed of evil',
            price: 65.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/186228-resident-evil-5-gold-edition-playstation-3-front-cover.jpg'
        });

        await Product.create({
            productName: 'Rock Band',
            category: 'ps3',
            stockQuantity: 27,
            description: 'Get ready to rock with this Guitar Hero spinoff. Featuring a 4 person band set up, you and 3 buddies can now play together while smoking weed in your mothers basement and coming up with excuses to give your boss for missing work again!',
            price: 35.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/110450-rock-band-playstation-3-front-cover.jpg'
        });

        await Product.create({
            productName: 'Sims 3',
            category: 'ps3',
            stockQuantity: 6,
            description: 'Create Sims with unique personalities, fulfill their desires, and control their lives within a living neighborhood. Unlock all-new Karma Powers and unleash them on your Sims: help your Sim “get lucky,” bless them with “instant beauty” or curse them with an “epic fail.” From character creation and customization tools, to persistent online access and the ability to share content with the larger The Sims community, The Sims 3 allows players to craft the lives of their Sims, like never before. Choose whether or not to fulfill your Sims destinies by making their wishes come true, or letting their dreams die.',
            price: 15.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/241730-the-sims-3-playstation-3-front-cover.jpg'
        });

        await Product.create({
            productName: 'UFC Undisputed',
            category: 'ps3',
            stockQuantity: 21,
            description: 'Dislike someone elses face? CHANGE IT! Increase the fullness of their lips and cheekbones with your bare hands!',
            price: 19.00,
            imageUrl: 'http://media.ign.com/ps3/image/object/876/876981/UFC09_US_ESRB_PS3.jpg'
        });

        await Product.create({
            productName: 'Uncharted Drakes Fortune',
            category: 'ps3',
            stockQuantity: 13,
            description: 'Treasure hunter Nathan "Nate" Drake (Nolan North), accompanied by reporter Elena Fisher (Emily Rose), recovers the coffin of his self-proclaimed ancestor Sir Francis Drake, having located it from coordinates inscribed on a family heirloom: a ring Nate wears around his neck.[10] The coffin contains Sir Francis Drakes diary, which gives the location of El Dorado. Pirates attack and destroy Nates boat, but Nates friend and mentor Victor "Sully" Sullivan (Richard McGonagle) rescues the two in his seaplane. Fearing Elenas reporting will attract potential rivals, Nate and Sully abandon her at a dock.',
            price: 10.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/108696-uncharted-drake-s-fortune-playstation-3-front-cover.jpg'
        });

        await Product.create({
            productName: 'Uncharted 2 Among Thieves',
            category: 'ps3',
            stockQuantity: 43,
            description: 'Uncharted 2: Among Thieves is a 2009 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. It is the second game in the Uncharted series and was released in October 2009 for PlayStation 3',
            price: 20.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/210927-uncharted-2-among-thieves-playstation-3-front-cover.jpg'
        });

        await Product.create({
            productName: 'Uncharted 3 Drakes Deception',
            category: 'ps3',
            stockQuantity: 8,
            description: 'Two years after the events of the previous game, treasure hunters Nathan "Nate" Drake (Nolan North) and Victor "Sully" Sullivan (Richard McGonagle) meet with Talbot (Robin Atkin Downes) in London, who is interested in purchasing Nates ring, inherited from Sir Francis Drake. The duo accuses Talbot of using counterfeit banknotes, and a fight ensues. They are subdued by Talbots cohort, Charlie Cutter (Graham McTavish), and Talbots employer, Katherine Marlowe (Rosalind Ayres), who steals Drakes ring. Cutter shoots Nate and Sully.',
            price: 30.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/326288-uncharted-3-drake-s-deception-game-of-the-year-edition-playstation-3-front-cover.jpg'
        });
        // END PS3

        // BEGIN WII
        await Product.create({
            productName: 'Wii Console',
            category: 'wii',
            stockQuantity: 8,
            description: 'Introducing motion controlled gaming from Nintendo. Package includes Wii console, 1 controller (batteries not included), 1 highly retention strap, and 1 replacement flat screen tv (also not included).',
            price: 350.00,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Wii_console.png'
        });

        await Product.create({
            productName: 'Wii Controller',
            category: 'wii',
            stockQuantity: 80,
            description: 'The TT (Tv Torpedo) is designed to be durable and eliminate the pain of replacing both a flat screen tv AND a controller on the same day! The silicon cover is not to protect the TT its to minimize the damage done BY the TT. The optional retention strap can be adjusted for an inconvenient sharing experience or even disregarded all together! Rated slightly safer than Lawn Darts!',
            price: 60.00,
            imageUrl: 'https://www.gadzooki.com/wp-content/uploads/2006/05/controller_feature_wht.png'
        });

        await Product.create({
            productName: 'Cabelas Dangerous Hunts',
            category: 'wii',
            stockQuantity: 6,
            description: 'Cabelas Dangerous Hunts 2009 puts the player in the shoes of Flint Abrahams, a famous hunter who travels around the world in search of hunting challenges. The player spends much time exploring the wilderness looking for traces of prey. Because they can be hard to make out, a Hunters Sense is included to reduce the world to grayscales and make animals stand out. The game however maintains an arcade approach and lets the player shoot everything in his way, without regard for a patient approach.',
            price: 15.00,
            imageUrl: 'https://i.pinimg.com/474x/cd/7c/ad/cd7cad40d1335ab0dc8ba0b9c5dfeb63---video-xbox-games.jpg'
        });

        await Product.create({
            productName: 'GoldenEye 007',
            category: 'wii',
            stockQuantity: 60,
            description: 'This version of GoldenEye 007 takes the concept behind the original N64 exclusive and moves not only the gameplay forward to the modern era, but also fast-forwards the Bond franchise to the new guy. Pierce Brosnans Bond will likely forever remain an N64 exclusive, as Daniel Craigs Bond takes the reigns. This GoldenEye isnt so much a remake or a port as it is, as Hollywood says when spinning a "remake," a reboot of the classic title.',
            price: 75.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/206870-goldeneye-007-wii-front-cover.jpg'
        });

        await Product.create({
            productName: 'Guitar Hero World Tour',
            category: 'wii',
            stockQuantity: 19,
            description: 'Guitar Hero: World Tour is the fourth main game in the series and brings a major change to the concept. Following the release of Rock Band that built on the Guitar Hero concept but added additional instruments, World Tour introduces these as well to allow players to play together simultaneously as a real band. Next to the guitar that was the main peripheral for the previous titles, the bundled edition of the game adds a microphone for the vocal parts and drums for percussion.',
            price: 25.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/215373-guitar-hero-world-tour-wii-front-cover.jpg'
        });

        await Product.create({
            productName: 'Mario Party 8',
            category: 'wii',
            stockQuantity: 30,
            description: 'Ever got into a fist fight over a video game? That might change after you get your rightful title of winner taken from you at the last second by a person you thought was your friend! Enrage your friends by teaming up against one person and use all your purchases from the in game store against them. This game is specifically designed to bring out the anger in the nicest of individuals!',
            price: 20.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/88949-mario-party-8-wii-front-cover.jpg'
        });

        await Product.create({
            productName: 'Monopoly Streets',
            category: 'wii',
            stockQuantity: 13,
            description: 'MONOPOLY Streets has everything you love about the board game, presented as a street level tour of Mr. MONOPOLY’s fully animated world. Engage in a head-to-head race to build the greatest city and accumulate the most wealth. Play against your friends live and online or be matched up against players with similar skills from around the world! New features, such as property auctions, add new excitement to the classic play. From the cheap motels on Baltic Avenue to the luxurious Boardwalk suites, there is excitement around every corner in this remade classic.',
            price: 10.00,
            imageUrl: 'https://www.reference-gaming.com/assets/media/product/15595/monopoly-streets-wii.jpg?format=product-cover-large&k=1461754449'
        });

        await Product.create({
            productName: 'Super Mario Bros',
            category: 'wii',
            stockQuantity: 53,
            description: 'Princess Peach has been kidnapped! Again! Everyone was celebrating the Princess birthday when a giant birthday cake arrived... but then Bowser Jr. and the seven Koopalings popped out and kidnapped her! Mario, Luigi and two Toads make chase to rescue her once more. Will they succeed?',
            price: 45.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/172383-new-super-mario-bros-wii-wii-front-cover.jpg'
        });

        await Product.create({
            productName: 'Wii Sports',
            category: 'wii',
            stockQuantity: 58,
            description: 'A variety of games on one disc that is sure to get you swinging that controller while not wearing the retention strap. Might get that excuse youve been looking for to go buy a bigger tv!',
            price: 5.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/188448-wii-sports-wii-front-cover.jpg'
        });

        await Product.create({
            productName: 'Zelda Twilight Princess',
            category: 'wii',
            stockQuantity: 8,
            description: 'Twilight Princess is the first Legend of Zelda game for the Wii and also the last for GameCube. At first, Link is a simple farm boy, whose tasks consist of herding goats to watching children in Ordon village, Links hometown. One day, Link is asked by the mayor to run an errand in Castle Town, but things suddenly go wrong…',
            price: 55.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/75153-the-legend-of-zelda-twilight-princess-wii-front-cover.jpg'
        });
        // END WII

        // BEGIN XBOX
        await Product.create({
            productName: 'Xbox Series X',
            category: 'xbox',
            stockQuantity: 80,
            description: 'Xbox Series X/S are backwards-compatible with nearly all Xbox One-compatible games and accessories (including Xbox 360 and original Xbox games that were made backward-compatible with Xbox One), with the ability for games to automatically benefit from performance and visual improvements enabled by the newer hardware. At launch, Microsoft encouraged a "soft" transition between generations similar to PC gaming, offering the "Smart Delivery" framework to allow publishers to freely and automatically provide upgraded versions of Xbox One titles with optimizations for Xbox Series X/S. Publishers are not required to use Smart Delivery, and may publish Xbox Series X/S-exclusive titles if they so choose. Developers such as EA do not use Smart Delivery and prefer to sell separate Xbox One and Xbox Series X/S versions.',
            price: 850.00,
            imageUrl: 'https://blogplay.pl/wp-content/uploads/2020/10/xbox-series-x.png'
        });

        await Product.create({
            productName: 'Xbox Elite Controller',
            category: 'xbox',
            stockQuantity: 40,
            description: 'Experience the Xbox Elite Wireless Controller Series 2 featuring adjustable-tension thumbsticks, wrap-around rubberized grip, and shorter hair trigger locks. Enjoy limitless customization with interchangeable components and exclusive button mapping options in the Xbox Accessories app. Save up to 3 custom profiles on the controller and switch between them on the fly. Swap thumbstick toppers, D-pads, and paddles to tailor your controller to your preferred gaming style. Stay in the game with up to 40 hours of rechargeable battery life and refined components that are built to last. Use Xbox Wireless, Bluetooth, or the included USB-C cable to play across Xbox Series X|S, Xbox One, and Windows. Compatible with Xbox Series X|S, Xbox One, and Windows 10/11 devices.',
            price: 150.00,
            imageUrl: 'https://cdn.shopify.com/s/files/1/0106/5946/3227/products/Back-to-Black-Xbox-One-Elite-Silicone-Skin_900x.png?v=1573431800'
        });

        await Product.create({
            productName: 'Battlefield 3',
            category: 'xbox',
            stockQuantity: 20,
            description: 'Battlefield 3 is the direct sequel to 2005s Battlefield 2 and is the 11th overall entry in the Battlefield franchise. Powered by the Frostbite 2 engine, Battlefield 3 aims to provide the fast paced, team oriented online multiplayer the series has made its name upon while also providing the first true single player campaign in a numbered Battlefield game, and for the first time in any Battlefield game numbered or not is a cooperative mode.',
            price: 50.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/238417-battlefield-3-xbox-360-front-cover.jpg'
        });

        await Product.create({
            productName: 'Conker Live Reloaded',
            category: 'xbox',
            stockQuantity: 10,
            description: 'Conker: Live & Reloaded is a combination of frantic online multiplayer action and a single-player mode, which is a remake of the original Conkers Bad Fur Day for Nintendo 64 with more detailed and technologically advanced graphics, as well as re-recorded music.',
            price: 15.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/455176-conker-live-reloaded-xbox-front-cover.jpg'
        });

        await Product.create({
            productName: 'Duke Nukem 3D',
            category: 'xbox',
            stockQuantity: 100,
            description: 'The Game.Com version of Duke Nukem 3D plays more like a dungeon crawler rather than an FPS due to Game.Coms hardware limitations. The player can only move Duke forward, backwards, strafe left or right, one screen at a time. By pressing B or C the player can turn Duke to shoot left or right, but cant turn him to face that direction and move.',
            price: 75.00,
            imageUrl: 'https://i5.walmartimages.com/asr/8d60d5e5-2551-4888-a4f0-7af9aee817d7_1.bcab92f000e614c293667774fa6edb32.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'
        });

        await Product.create({
            productName: 'Farming Simulator 17',
            category: 'xbox',
            stockQuantity: 15,
            description: 'Take on the role of a modern farmer in Farming Simulator 17! Immerse yourself in a huge open world loaded with new content: new environment, vehicles, animals, crops and gameplay mechanics! Explore farming possibilities over hundreds of acres of land, including a detailed new North American environment. Drive over 250 authentic farming vehicles and equipment from over 75 manufacturers, including new brands such as Challenger, Fendt, Valtra or Massey Ferguson.',
            price: 70.00,
            imageUrl: 'https://www.gamereleasedates.net/images/covers/xboxone/cover-xboxone-farming-simulator-17.jpg'
        });

        await Product.create({
            productName: 'Fight Night Round 5',
            category: 'xbox',
            stockQuantity: 11,
            description: 'Fight Night Round 5 is (as the name would suggest) Electronic Arts 5th entry into the boxing series. This time around, you have over 40 athletes to choose from from a variety of eras and weight classes, including Evander Holyfield, Floyd Mayweather, and (most notably) Mike Tyson and Mohammad Ali.',
            price: 65.00,
            imageUrl: 'https://roundbyroundboxing.com/wp-content/uploads/2016/09/Fight-Night-Cover.png'
        });

        await Product.create({
            productName: 'GTA 5',
            category: 'xbox',
            stockQuantity: 110,
            description: 'Grand Theft Auto V takes place five years after Grand Theft Auto IV and is now set in Los Santos. It centers around three protagonists: Michael, Trevor, and Franklin. New to the series is that the player can switch between the three characters on the fly. They each have different missions, lives, and personalities. They also often come together, especially for heists, a complex type of mission where a large operation needs to be planned and executed by determining a strategy and hiring additional henchmen.',
            price: 60.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/458865-grand-theft-auto-v-xbox-360-front-cover.jpg'
        });

        await Product.create({
            productName: 'Splinter Cell Blacklist',
            category: 'xbox',
            stockQuantity: 150,
            description: 'Tom Clancys Splinter Cell: Blacklist is the 6th official installment in the Splinter Cell video game series. It is Ubisoft Torontos first released game, and the sequel to 2010s Splinter Cell: Conviction. It is the first Splinter Cell in which Michael Ironside is no longer the voice actor for Sam Fisher.',
            price: 90.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/569864-tom-clancy-s-splinter-cell-blacklist-xbox-360-front-cover.jpg'
        });

        await Product.create({
            productName: 'Trials Evolution',
            category: 'xbox',
            stockQuantity: 40,
            description: 'Trials Evolution is a 2.5D platform racing game and the successor to Trials HD. Players control a motorcycle rider while traversing over every increasingly difficult obstacles moving from left to right. New to this version is curved movement with swerves in additional to the regular movement. The game comes with the same editor the development team used to create the games content, and users can create their own track scenarios using it. User created tracks can be uploaded and shared with anyone on Xbox LIVE using the Track Central feature.',
            price: 40.00,
            imageUrl: 'https://images.pricerunner.com/product/600x600/1795546256/Trials-Evolution.jpg?c=0.7'
        });
        // END XBOX

        // BEGIN N64
        await Product.create({
            productName: 'Donkey Kong 64',
            category: 'Nintendo 64',
            stockQuantity: 30,
            description: 'Donkey Kong 64 is a 1999 platform game developed by Rare and published by Nintendo for the Nintendo 64. It is the first 3D game in the Donkey Kong series. As the gorilla Donkey Kong, the player explores themed levels to collect items and rescue his kidnapped friends from King K. Rool.',
            price: 45.00,
            imageUrl: 'https://commondatastorage.googleapis.com/images.pricecharting.com/AMIfv963B7XboIqfMzqWJQfm-6ba6X7MQtHKQjl6cjj_-LIGAa4C_P-QHRJT9ztJQ2QoPav30VXkuMVl9Lx67s9CJiRLSIAv5zhmdaE9H-XjXB3AAyI_K4mmYrpm-5vqq3PYmYlwHhgbtDSNJG0wjv3RC5GmtYg5Gw/240.jpg'
        }),
        
        await Product.create({
            productName: 'Hey You Pikachu',
            category: 'Nintendo 64',
            stockQuantity: 30,
            description: 'Hey You, Pikachu! is a virtual pet Pokémon spin-off video game for the Nintendo 64 developed by Ambrella and published by Nintendo. It was released in Japan on December 12, 1998, and in North America on October 30, 2000.',
            price: 55.00,
            imageUrl: 'https://i.ebayimg.com/images/g/hGQAAMXQUY1Q9yre/s-l300.jpg'
        }),
        
        await Product.create({
            productName: 'Kirby 64: The Crystal Shards',
            category: 'Nintendo 64',
            stockQuantity: 30,
            description: 'Kirby 64: The Crystal Shards is a 2000 platform game developed by HAL Laboratory and published by Nintendo for the Nintendo 64. It is the first Kirby game to feature 3D computer graphics and follows Kirby as he attempts to reassemble a sacred crystal shattered by Dark Matter.',
            price: 37.00,
            imageUrl: 'https://i.ebayimg.com/images/g/3CsAAMXQWuRQ9fkR/s-l640.jpg'
        }),
        
        await Product.create({
            productName: 'The Legend of Zelda: Ocarina of Time',
            category: 'Nintendo 64',
            stockQuantity: 30,
            description: 'The Legend of Zelda: Ocarina of Time[a] is an action-adventure game developed and published by Nintendo for the Nintendo 64. It was released in Japan and North America in November 1998, and in PAL regions the following month. Ocarina of Time is the first game in The Legend of Zelda series with 3D graphics.',
            price: 65.00,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg'
        }),
        
        await Product.create({
            productName: 'Mario Party',
            category: 'Nintendo 64',
            stockQuantity: 30,
            description: 'Mario Party is a party video game developed by Hudson Soft and published by Nintendo for the Nintendo 64.',
            price: 40.00,
            imageUrl: 'https://assets-prd.ignimgs.com/2022/01/14/marioparty64-sq-1642190930183.jpg'
        }),
        
        await Product.create({
            productName: 'Perfect Dark',
            category: 'Nintendo 64',
            stockQuantity: 30,
            description: 'Perfect Dark is a 2000 first-person shooter developed and published by Rare for the Nintendo 64. The first game of the Perfect Dark series, it follows Joanna Dark, an agent of the Carrington Institute research centre, as she attempts to stop an extraterrestrial conspiracy by rival corporation dataDyne.',
            price: 28.00,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/32/Perfect_dark_box.jpg'
        }),
        
        await Product.create({
            productName: 'Pokemon Stadium',
            category: 'Nintendo 64',
            stockQuantity: 30,
            description: 'Pokémon Stadium is the first game to show Pokémon in 3-D, giving N64 fans a chance to see their teams in a different way. With the N64 Transfer Pak, players can import and bring to battle Pokémon from their Pokémon Red Version, Pokémon Blue Version, and Pokémon Yellow Version games.',
            price: 52.00,
            imageUrl: 'https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_stadium/pokemon_stadium_main_169.jpg'
        }),
        
        await Product.create({
            productName: 'Resident Evil 2',
            category: 'Nintendo 64',
            stockQuantity: 30,
            description: 'Resident Evil 2 is a 1998 survival horror video game developed and published by Capcom for the N64.',
            price: 33.00,
            imageUrl: 'https://www.lukiegames.com/assets/images/N64/n64_resident_evil_2_p_iucv2y.jpg'
        }),
        
        await Product.create({
            productName: 'Star Wars: Rogue Squadron',
            category: 'Nintendo 64',
            stockQuantity: 30,
            description: 'Star Wars: Rogue Squadron is an arcade-style flight action game co-developed by Factor 5 and LucasArts. The first of three games in the Rogue Squadron series, it was published by LucasArts and Nintendo and released for Microsoft Windows and Nintendo 64 in December 1998.',
            price: 31.00,
            imageUrl: 'https://i.pinimg.com/736x/57/f6/38/57f6386bdc8b6b0e03c59df071d565b1--games-box-nintendo-games.jpg'
        }),
        
        await Product.create({
            productName: 'WWF No Mercy',
            category: 'Nintendo 64',
            stockQuantity: 30,
            description: 'WWF No Mercy is a professional wrestling video game released in 2000 by THQ for the Nintendo 64. It is based on the World Wrestling Federation and is named after the companys annual event of the same name.',
            price: 25.00,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/90/NoMercyGameBox.jpg'
        }),

        // END N64

        //BEGIN NES
        
        await Product.create({
            productName: 'Battle Toads',
            category: 'NES',
            stockQuantity: 30,
            description: 'Battletoads is a beat them up/platform video game developed by Rare and published by Tradewest. It is the first installment of the Battletoads series and was originally released on 1 June 1991 for the Nintendo Entertainment System.',
            price: 42.00,
            imageUrl: 'https://i.ebayimg.com/images/g/r4oAAOSwxYxUyk88/s-l640.jpg'
        }),
        
        await Product.create({
            productName: 'Castevania',
            category: 'NES',
            stockQuantity: 30,
            description: 'Castlevania, known in Japan as Akumajō Dracula, is a platform game developed and published by Konami for the Family Computer Disk System video game console in Japan in September 1986.',
            price: 32.00,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Castlevania_1_cover.png'
        }),
        
        await Product.create({
            productName: 'Contra',
            category: 'NES',
            stockQuantity: 30,
            description: 'Contra is a run-and-gun shooter video game developed and published by Konami, originally developed as a coin-operated arcade game in 1986 and released on February 20, 1987.',
            price: 36.00,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/65/Contra_cover.jpg'
        }),
        
        await Product.create({
            productName: 'Duck Hunt',
            category: 'NES',
            stockQuantity: 30,
            description: 'Duck Hunt is a 1984 light gun shooter video game developed and published by Nintendo for the Nintendo Entertainment System video game console and the Nintendo Vs. System arcade hardware. The game was first released in April 1984, in Japan for the Family Computer console and in North America as an arcade game.',
            price: 55.00,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/14/DuckHuntBox.jpg'
        }),
        
        await Product.create({
            productName: 'Final Fantasy',
            category: 'NES',
            stockQuantity: 30,
            description: 'Final Fantasy is a fantasy role-playing video game developed and published by Square in 1987. It is the first game in Squares Final Fantasy series, created by Hironobu Sakaguchi.',
            price: 32.00,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d8/FF1_USA_boxart.jpg'
        }),
        
        await Product.create({
            productName: 'Megaman',
            category: 'NES',
            stockQuantity: 30,
            description: 'Mega Man, known as Rockman in Japan, is a 1987 action-platform video game developed and published by Capcom for the Nintendo Entertainment System (NES).',
            price: 38.00,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/dd/Mega_Man_1_box_artwork.jpg'
        }),
        
        await Product.create({
            productName: 'Metroid',
            category: 'NES',
            stockQuantity: 30,
            description: 'Metroid is an action-adventure game developed and published by Nintendo. The first installment in the Metroid series, it was originally released in Japan for the Family Computer Disk System peripheral beta version in August 1986.',
            price: 28.00,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Metroid_boxart.jpg'
        }),
        
        await Product.create({
            productName: 'Super Mario',
            category: 'NES',
            stockQuantity: 30,
            description: 'Super Mario Bros. is a platform game developed and published by Nintendo for the Nintendo Entertainment System (NES).',
            price: 35.00,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png'
        }),
        
        await Product.create({
            productName: 'Tetris',
            category: 'NES',
            stockQuantity: 30,
            description: 'Tetris is a puzzle video game for the Nintendo Entertainment System released in 1989, based on Tetris by Alexey Pajitnov. It is the first official console release of Tetris to have been developed and published by Nintendo.',
            price: 15.00,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Tetris_NES_cover_art.jpg/220px-Tetris_NES_cover_art.jpg'
        }),
        
        await Product.create({
            productName: 'The Legend of Zelda',
            category: 'NES',
            stockQuantity: 30,
            description: 'The Legend of Zelda, originally released in Japan as The Hyrule Fantasy: Zelda no Densetsu, is a 1986 action-adventure game developed and published by Nintendo.',
            price: 40.00,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png'
        })

        // END NES

        // BEGIN PLAYSTATION

        await Product.create({
            productName: 'Crash Bandicoot',
            category: 'Playstation',
            stockQuantity: 30,
            description: 'Crash Bandicoot is a 1996 platform video game developed by Naughty Dog and published by Sony Computer Entertainment for the PlayStation.',
            price: 17.00,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/44/Crash_Bandicoot_Cover.png'
        }),

        await Product.create({
            productName: 'Diablo',
            category: 'Playstation',
            stockQuantity: 30,
            description: 'Diablo is an action role-playing video game developed by Blizzard North and released by Blizzard Entertainment in January 1997, and is the first installment in the video game series of the same name.',
            price: 14.00,
            imageUrl: 'https://i.ebayimg.com/images/g/l9EAAOxyxU1Q8M6l/s-l600.jpg'
        }),

        await Product.create({
            productName: 'Driver',
            category: 'Playstation',
            stockQuantity: 30,
            description: 'Driver (known as Driver: You Are the Wheelman in North America) is an action driving video game and the first installment in the Driver series.',
            price: 15.00,
            imageUrl: 'https://m.media-amazon.com/images/I/71kZLhjdqGL.jpg'
        }),

        await Product.create({
            productName: 'Final Fantasy IV',
            category: 'Playstation',
            stockQuantity: 30,
            description: 'Final Fantasy IV, known as Final Fantasy II for its initial North American release, is a role-playing video game developed and published by Square for the Super Nintendo Entertainment System. Released in 1991, it is the fourth main installment of the Final Fantasy series.',
            price: 20.00,
            imageUrl: 'https://neverendingrealm.com/wp-content/uploads/2019/02/Final-Fantasy-4-Box-Art-1200x1224.jpg'
        }),

        await Product.create({
            productName: 'Gran Turismo',
            category: 'Playstation',
            stockQuantity: 30,
            description: 'Gran Turismo is a 1997 racing simulation video game developed by Polys Entertainment and published by Sony Computer Entertainment for the PlayStation video game console.',
            price: 23.00,
            imageUrl: 'https://i.ebayimg.com/images/g/05YAAOSwlxRaaLU5/s-l600.jpg'
        }),

        await Product.create({
            productName: 'Hogs of War',
            category: 'Playstation',
            stockQuantity: 30,
            description: 'Hogs of War is a 2000 turn-based tactics video game developed by Infogrames Sheffield House and published by Infogrames for the PlayStation and Microsoft Windows. The game is set in the First World War-era where anthropomorphic pigs engage in combat.',
            price: 12.00,
            imageUrl: 'https://m.media-amazon.com/images/I/41hvgqz-mvL._AC_SY1000_.jpg'
        }),

        await Product.create({
            productName: 'Resident Evil',
            category: 'Playstation',
            stockQuantity: 30,
            description: 'Resident Evil is a 1996 survival horror video game developed and published by Capcom originally for the PlayStation. It is the first title in Capcoms Resident Evil franchise.',
            price: 20.00,
            imageUrl: 'https://i.ebayimg.com/images/g/ZfsAAOxywbNQ9vMN/s-l400.jpg'
        }),

        await Product.create({
            productName: 'Spyro',
            category: 'Playstation',
            stockQuantity: 30,
            description: 'Spyro the Dragon is a platform game developed by Insomniac Games and published by Sony Computer Entertainment for the PlayStation on September 9, 1998.',
            price: 25.00,
            imageUrl: 'https://m.media-amazon.com/images/I/51+X6fIKptL._AC_SY1000_.jpg'
        }),

        await Product.create({
            productName: 'Tekken',
            category: 'Playstation',
            stockQuantity: 30,
            description: 'Tekken (鉄拳) is a fighting game developed and published by Namco. It was originally released for arcades in 1994, and ported to the PlayStation a year later. ',
            price: 18.00,
            imageUrl: 'https://i.ebayimg.com/images/g/j3UAAMXQU6tQ9ygH/s-l640.jpg'
        }),

        await Product.create({
            productName: 'Tomb Raider',
            category: 'Playstation',
            stockQuantity: 30,
            description: 'Tomb Raider is a 1996 action-adventure video game developed by Core Design and published by Eidos Interactive.',
            price: 19.00,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Tomb_Raider_%281996%29.png/220px-Tomb_Raider_%281996%29.png'
        }),

        // END PLAYSTATION

        // BEGIN PLAYSTATION 2

        await Product.create({
            productName: 'Burnout',
            category: 'Playstation 2',
            stockQuantity: 30,
            description: 'Burnout is a series of racing games developed by Criterion Games. The first two games were published by Acclaim Entertainment, while later instalments were published by Electronic Arts.',
            price: 24.00,
            imageUrl: 'https://m.media-amazon.com/images/I/51X4cFXHOgL._AC_SY1000_.jpg'
        }),

        await Product.create({
            productName: 'Devil May Cry',
            category: 'Playstation 2',
            stockQuantity: 30,
            description: 'Released from August to December, originally for the PlayStation 2, it is the first installment in the Devil May Cry series. ',
            price: 27.00,
            imageUrl: 'https://m.media-amazon.com/images/I/51SAXEd3d8L._AC_SY1000_.jpg'
        }),

        await Product.create({
            productName: 'God of War',
            category: 'Playstation 2',
            stockQuantity: 30,
            description: 'Unleash the power of the Gods and embark on a merciless quest as Kratos, an ex-Spartan warrior driven to destroy Ares, the God of War.',
            price: 31.00,
            imageUrl: 'https://m.media-amazon.com/images/I/91VKfyGGkYL.jpg'
        }),

        await Product.create({
            productName: 'Grand Theft Auto: San Andreas',
            category: 'Playstation 2',
            stockQuantity: 30,
            description: 'Grand Theft Auto: San Andreas is a 2004 action-adventure game developed by Rockstar North and published by Rockstar Games.',
            price: 33.00,
            imageUrl: 'https://m.media-amazon.com/images/I/61N9DX5CRKL._AC_SY1000_.jpg'
        }),

        await Product.create({
            productName: 'Kingdom Hearts',
            category: 'Playstation 2',
            stockQuantity: 30,
            description: 'Kingdom Hearts is a 2002 action role-playing video game developed by Square for the PlayStation 2 video game console.',
            price: 26.00,
            imageUrl: 'https://m.media-amazon.com/images/I/918AUL+i-DL.jpg'
        }),

        await Product.create({
            productName: 'Madden 04',
            category: 'Playstation 2',
            stockQuantity: 30,
            description: 'Madden NFL 2004 is the 15th installment of the Madden NFL series of American football video games. Former Atlanta Falcons quarterback Michael Vick is on the cover.',
            price: 14.00,
            imageUrl: 'https://www.mobygames.com/images/covers/l/565288-madden-nfl-2004-playstation-2-manual.jpg'
        }),

        await Product.create({
            productName: 'Medal of Honor',
            category: 'Playstation 2',
            stockQuantity: 30,
            description: 'Medal of Honor: Frontline is a first-person shooter video game, in the Medal of Honor series, and was published by Electronic Arts.',
            price: 25.00,
            imageUrl: 'https://i.ebayimg.com/images/g/bzwAAOSwJPBhsqBL/s-l1600.jpg'
        }),

        await Product.create({
            productName: 'Soul Caliber II',
            category: 'Playstation 2',
            stockQuantity: 30,
            description: 'Soulcalibur II (ソウルキャリバーII, Sōrukyaribā Tsū) is a 2002 fighting game developed by Project Soul and published by Namco and the third installment in the Soulcalibur series of weapon-based fighting games.',
            price: 22.00,
            imageUrl: 'https://www.lukiegames.com/assets/images/PS2/ps2_soul_calibur_2_ii_p_ac6o8t.jpg'
        }),

        await Product.create({
            productName: 'SSX',
            category: 'Playstation 2',
            stockQuantity: 30,
            description: 'SSX is a series of snowboarding and skiing video games published by EA Sports. It is an arcade-style racing game with larger-than-life courses, characters, and tricks.',
            price: 20.00,
            imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/640w/products/25517/22574/ssx_tricky__75331.1673723554.jpg?c=2'
        }),

        await Product.create({
            productName: 'Tony Hawk',
            category: 'Playstation 2',
            stockQuantity: 30,
            description: 'Tony Hawks is a skateboarding video game series published by Activision and endorsed by the American professional skateboarder of the same name.',
            price: 23.00,
            imageUrl: 'https://cdromance.com/wp-content/uploads/2018/06/75269_front.jpg'
        }),
        
        // END PLAYSTATION 2

        //End Real Seed Data

        await User.create({
            username: 'admin' , 
            password: "password",
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            address: faker.address
                .streetAddress()
                .concat(
                    " ",
                    faker.address.cityName(),
                    " ",
                    faker.address.state(),
                    " ",
                    faker.address.zipCode()
                ),
            phone: faker.phone.number(),
            isAdmin: true
        })
        await Order.create({
            userId:1,
            cartId:1,
            total:100,
            completed:false
        })
        await Cart.create({
            userId:1,
            productId:1,
            quantity:1,
            orderId: 1
        })
}

async function runSeed() {
    console.log("seeding...");
    try {
        seed();
    } catch (err) {
        console.error(err);
        process.exitCode = 1;
    }
}

if (module === require.main) {
    runSeed();
}

module.exports = seed;
