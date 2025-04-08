
// add to array code 
// save updated array

// sql, export to .ts 

// export default glossaryProfiles;
let glossaryProfiles = 
[
    {
        name: "Sinxay",
        laoName: "ສິນໄຊ",
        opinion: "Meuang Pengchan",
        legendValue: "unifying sangsinxay mostrequested                       jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-sinxay.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-sinxay3.PNG",
        thumbnailImage: "img/thumbnail-sinxay.PNG",
        profileImage: "img/img-sinxay.PNG",
        description: "Finally Sinxay and Sangthong reach Nyak Koumphan’s palace, where they meet their aunt Soumountha, only to discover she has fallen in love with Koumphan and does not want to go back to Muang Pengchan. Sinxay shoots an arrow, whose power makes Koumphan fall into a deep sleep. After leading Soumountha to a cave created by Indra, Sinxay and Sangthong go back to Koumphan’s palace, and try to kill him while he sleeps. Every time they slice off their head, though, seven more nyaks appear. Sinxay then shoots an arrow that burns many of the nyaks and makes the remaining ones flee into the forest.After retrieving Soumountha and finding a palace in the forest created for them by Indra, the two brothers are surrounded by millions of nyaks. After two great battles Sinxay manages to kill Koumphan.",
        dialogue2: "My name is Sinxay, and there is nothing that can compare with my arrow.",
        dialogue1: "I have come here with no thought of harming anyone. In this world, there is no one who can compare to me. If you don't let go of your anger, all of you will die, like mice unable to escape the claws of a cat.",
        gallery01: "img/gallery-sinxay-01.PNG",
        gallery02: "img/gallery-sinxay-02.PNG",
        gallery03: "img/gallery-sinxay-03.PNG",
        trailer1: "img/btbmedia1.mp4",
        trailer2: "img/btbmedia1.mp4",
        trailer3: "img/btbmedia1.mp4",
        // raptor: "img/raptor-sinxay.PNG",
        // unifying: "dotted",
        // vision1: "Overwhelming BODHISATTVA, he's a miracle-worker. How could he, the newest kid on the block, be the BODHISATTVA?",
        // vision2: "What does he know? stay a student, it is safe as a student, the newest kid on the block",


        damage: 100,
        health: 5000,
        attackImage: "img/thumbnail-sinxay.PNG",

        ultimateName: "CHILD OF INDRA",
        ultimateImage: "",

        abilityOneName: "FROZEN STRIKE",
        abilityOneImage: "img/gallery-sinxay-03.PNG",

        abilityTwoName: "BLINDING WAVE",
        abilityTwoImage: "img/gallery-sinxay-01.PNG",

        abilityThreeName: "BANE OF GIANTS",
        abilityThreeImage: "img/storyboard2-50.PNG",

        ability: {
            ability1() {
                // Blindsided_DAMAGE. This attack goes straight for the opponent's eyes, blinding them or binding them in a blindfold. This projects her own struggles being partially blind, thus heightening her reliance and responsiveness of her other senses.
                inputBattleLog('My name is Sinxay, and there is nothing that can compare with my arrow.<br>');
                switch(true){
                    case (partyTwoHealth <= trueZero):
                        youWin();
                        break;
                    case (partyOneHealth <= trueZero):
                        youLose();
                        break;
                    default:
                        partyOneDamage = partyOneDamage + partyOneDamage*0.2;
                        partyOneDamage = Math.round(partyOneDamage);
                        partyTwoHealth = partyTwoHealth - partyOneDamage;
    
                        let intervalId = setInterval(partyOneDamage, 1000);  // Run every second
                        // Stop the function after 8 seconds
                        setTimeout(() => {
                            clearInterval(intervalId);
                            partyOneDamage = initialPartyOneDamage;
                            }, 8000);  // Stop after 8000 milliseconds (8 seconds)
    
                        updateHTML();
                        battleLog.innerHTML += '<img src="img/gallery-sinxay-03.PNG"><br>';
                        inputBattleLog("<strong> You used your FIRST ability. </strong><br>");
                        inputBattleLog("<strong> You dealt " + partyOneDamage + " damage! </strong> <br>");
                        break;
                }
            },
        
            ability2() {
                // Pity of Shiva_STATUS. Nang Teng One is grateful to Shiva and Visoukam for resurrecting her in the Himaphan Forest. She now devoutly follows and incorporates him into her life and incantations.
                inputBattleLog('My name is Sinxay, and there is nothing that can compare with my arrow.<br>');
                switch(true){
                    case (partyTwoHealth <= trueZero):
                        youWin();
                        break;
                    case (partyOneHealth <= trueZero):
                        youLose();
                        break;
                    default:
                        partyOneDamage = partyOneDamage + partyOneDamage*0.2;
                        partyOneDamage = Math.round(partyOneDamage);
                        partyTwoHealth = partyTwoHealth - partyOneDamage;
    
                        let intervalId = setInterval(partyOneDamage, 1000);  // Run every second
                        // Stop the function after 8 seconds
                        setTimeout(() => {
                            clearInterval(intervalId);
                            partyOneDamage = initialPartyOneDamage;
                            }, 8000);  // Stop after 8000 milliseconds (8 seconds)
    
                        updateHTML();
                        battleLog.innerHTML += '<img src="img/gallery-sinxay-01.PNG"><br>';
                        inputBattleLog("<strong> You used your FIRST ability. </strong><br>");
                        inputBattleLog("<strong> You dealt " + partyOneDamage + " damage! </strong> <br>");
                        break;
                }
            },
        
            ability3() {
                // Heart in a Box. // Zabaniya. 
                inputBattleLog('My name is Sinxay, and there is nothing that can compare with my arrow.<br>');
                switch(true){
                    case (partyTwoHealth <= trueZero):
                        youWin();
                        break;
                    case (partyOneHealth <= trueZero):
                        youLose();
                        break;
                    default:
                        partyOneDamage = partyOneDamage + partyOneDamage*0.2;
                        partyOneDamage = Math.round(partyOneDamage);
                        partyTwoHealth = partyTwoHealth - partyOneDamage;
    
                        let intervalId = setInterval(partyOneDamage, 1000);  // Run every second
                        // Stop the function after 8 seconds
                        setTimeout(() => {
                            clearInterval(intervalId);
                            partyOneDamage = initialPartyOneDamage;
                            }, 8000);  // Stop after 8000 milliseconds (8 seconds)
    
                        updateHTML();
                        battleLog.innerHTML += '<img src="img/storyboard2-50.PNG"><br>';
                        inputBattleLog("<strong> You used your FIRST ability. </strong><br>");
                        inputBattleLog("<strong> You dealt " + partyOneDamage + " damage! </strong> <br>");
                        break;
                }
            },

            abilityUltimate(){
                // Despair Wail // Familial Wail // Crocodile Tears

            }
        }


    },
    {
        name: "Xieng Mieng",
        laoName: "ຊຽງມຽງ",
        opinion: "kings",
        legendValue: "unifying xiengmieng mostrequested                       folklore human commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-xiengmieng.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-xiengmieng2.PNG",
        thumbnailImage: "img/thumbnail-xiengmieng.PNG",
        raptor: "img/raptor-xiengmieng.PNG",
        profileImage: "img/img-xiengmieng.PNG",
        status: "lightgreen",
        // unifying: "dotted",
        trailer: "img/btbmedia1.mp4",
        vision1: "I can do whatever I want, I'm smart enough to make it happen, creating the freedom to go wherever he wants to go. That means he has a problem relating to people who cannot escape their situations so easily.",
        // vision2: "He cares, a lot.",

        
    },
    {
        name: "Nang Soumontha",
        laoName: "ນາງສູມຸນທາ",
        opinion: "Meuang Anoulat",
        legendValue: "sangsinxay                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangsoumontha.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangsoumontha.PNG",
        thumbnailImage: "img/thumbnail-nangsoumontha.PNG",
        thumbnailImage2: "img/img-nangsoumontha4.PNG",
        raptor: "img/raptor-nangsoumontha.PNG",
        profileImage: "img/img-nangsoumontha2.PNG",
        status: "red",
    },
    {
        name: "Nang Kaikaeo",
        laoName: "ນາງໄກ່ແກ້ວ",
        opinion: "",
        legendValue: "nangkaikaeo                       folklore human commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangkaikaeo.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaikaeo3.PNG",
        thumbnailImage: "img/thumbnail-nangkaikaeo.PNG",
        raptor: "img/raptor-nangkaikaeo.PNG",
        status: "yellow",
        profileImage: "img/img-nangkaikaeo.PNG",
        // unifying: "dotted",
        trailer: "img/btbmedia1.mp4",
        description: "",
    },
    {
        name: "Ai Dokkai",
        laoName: "ອ້າຍດອກໄກ່",
        opinion: "",
        legendValue: "nangkaikaeo                       folklore beast commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-dokkai.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-dokkai3.PNG",
        thumbnailImage: "img/thumbnail-dokkai.PNG",
        raptor: "img/raptor-dokkai.PNG",
        status: "yellow",
        profileImage: "img/img-dokkai.PNG",
        // unifying: "dotted",
        trailer: "img/btbmedia1.mp4",
        description: "",
    },
    {
        name: "Seua Saming",
        laoName: "ເສືອສະໝິງ",
        opinion: "#",
        legendValue: "                       folklore beast commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-seuasaming.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-seuasaming2.PNG",
        thumbnailImage: "img/thumbnail-seuasaming2.PNG",
        raptor: "img/raptor-seuasaming.PNG",
        profileImage: "img/img-seuasaming2.PNG",
        vision1: "terror and nightmare of the people, all for the love of only one person",
        vision2: "more and more impossible hunts to earn the approval of someone who does not care for her",
    },
    {
        name: "Saengmaphone",
        laoName: "ແສງມ້າຜ່ອນ",
        opinion: "#",
        legendValue: "                       folklore human commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-saengmaphone.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-saengmaphone2.PNG",
        thumbnailImage: "img/thumbnail-saengmaphone.PNG",
        raptor: "img/raptor-saengmaphone2.PNG",
        profileImage: "img/instagram15.PNG",
        // unifying: "dotted",
        trailer: "img/btbmedia1.mp4",
        vision1: "symbolic overtake of a monarch for atonement",
        vision2: "there was a normal life he was promised",
    },
    {
        name: "Xieng Nyan",
        laoName: "ຊຽງຍານ",
        opinion: "birds",
        legendValue: "xiengmieng mostrequested                       folklore human merchant male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-xiengnyan.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-xiengnyan2.PNG",
        thumbnailImage: "img/thumbnail-xiengnyan.PNG",
        profileImage: "img/img-xiengnyan.PNG",
        status: "lightgreen",
        vision1: "I can be just as smart as him. If I work hard enough. Then he'll listen. If I had his smarts, the things I could do that he doesn't.",
        vision2: "He should be the one. ",  
    },
    {
        name: "Kham Hang",
        laoName: "",
        opinion: "",
        legendValue: "xiengmieng                       folklore human commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-khamhang.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-khamhang2.PNG",
        thumbnailImage: "img/thumbnail-khamhang.PNG",
        profileImage: "img/img-khamhang.PNG",
        status: "lightgreen",
        vision1: "I can be just as smart as him. If I work hard enough. Then he'll listen. If I had his smarts, the things I could do that he doesn't.",
        vision2: "He should be the one. ",
    },
    {
        name: "Khampha Phi Noi",
        laoName: "ກຳພ້າ",
        opinion: "#",
        legendValue: "khamphaphinoi mostrequested                       folklore human commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-khampha.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-khampha2.PNG",
        thumbnailImage: "img/thumbnail-khampha.PNG",
        raptor: "img/raptor-khampha.PNG",
        profileImage: "img/img-khampha.PNG",
        vision1: "bountiful normal and fulfilling life",
        vision2: "fiercly territorial about changing the way things are",


        abilityOneName: "PHI COMMUNE",
    },
    {
        name: "Nya Ngam",
        laoName: "",
        opinion: "#",
        legendValue: "khamphaphinoi mostrequested                       folklore phi commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyangam.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyangam2.PNG",
        thumbnailImage: "img/thumbnail-nyangam.PNG",
        raptor: "img/raptor-nyangam.PNG",
        profileImage: "img/img-nyangam.PNG",
        vision1: "bountiful normal and fulfilling life",
        vision2: "fiercly territorial about changing the way things are",
    },
    {
        name: "Phi Noi",
        laoName: " ",
        opinion: "#",
        legendValue: "khamphaphinoi mostrequested                       folklore phi commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phinoi.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phinoi2.PNG",
        thumbnailImage: "img/thumbnail-phinoi.PNG",
        raptor: "img/raptor-phinoi.PNG",
        profileImage: "img/img-phinoi.PNG",
        vision1: "",
        vision2: "always wants to ",
    },
    {
        name: "Nang Nga",
        laoName: "ນາງງ້າ ",
        opinion: "#",
        legendValue: "khamphaphinoi mostrequested                       folklore human commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangnga.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangnga2.PNG",
        thumbnailImage: "img/thumbnail-nangnga.PNG",
        raptor: "img/raptor-nangnga.PNG",
        profileImage: "img/img-khampha.PNG",
        vision1: "",
        vision2: "always wants to ",
    },
    {
        name: "Thoukata",
        laoName: " ",
        opinion: "#",
        legendValue: "thoukata                       folklore human merchant male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-thoukata.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-thoukata2.PNG",
        thumbnailImage: "img/thumbnail-thoukata.PNG",
        raptor: "img/raptor-thoukata.PNG",
        profileImage: "img/btbboard-32.PNG",

        designCharacter1: "img/design-thoukata1.PNG",
        designCharacter2: "img/design-thoukata2.PNG",
        designCharacter3: "img/design-thoukata3.PNG",
        designCharacter4: "img/design-thoukata4.PNG",
        designCharacter5: "img/design-thoukata5.PNG",

        dialogue1: "What can I do now that I have lost everything?",

        abilityOneName: "SPITE",
        abilityOneImage: "img/#.PNG",
        abilityDescriptionOne: "'Go and tell your father that I need money to go to a certain town to do business. Tell him that, when I come back, he will be even richer.'",
        dialogueOne: "",

        abilityTwoName: "LUCKY STRIKE",
        abilityTwoImage: "img/#.PNG",
        abilityDescriptionTwo: "'There, he learnt that, in that part of the country, otter skins fetched a high price. So, driven by hunger, he set out to look for otters. He was walking along the banks of a river, not far from the town, when he saw a magnificent otter. He went towards the animal, but it ran into a hole. When he saw the otter's head, after digging out the hole with his knife, he took the piece of material he was wearing on his body and tried to wrap the animal up in it. But the otter sprang up so violently that it carried off the material into the middle of the river. Thoukata picked up his knife and threw it at the otter. Poor Thoukata! He never looked before he leaped! Without even reaching its target, the knife sank to the bottom of the river and the otter, which had had a narrow escape, calmly swam off. Thoukata had lost all his belongings at one and the same time - the knife and the piece of material in which he was clad.'",
        dialogueTwo: "",

        abilityThreeName: "MIXTURE",
        abilityThreeImage: "img/#.PNG",
        abilityDescriptionThree: "'All the inhabitants of the town rushed towards the canoe with silver coins. In a few minutes, the boat was full. When the exchange had been made, Thoukata quickly left the town, singing and dancing. They all gazed after him as he went on his way. It was not until then that the inhabitants of the town, somewhat slow-witted, realized that what they had taken to be gold ingots were nothing but a mixture of dung, husks and rags, covered with a thin layer of gold. The so-called madman had tricked them very astutely. In the meantime, Thoukata reached the town and had his treasure taken to his father-in-law's house.'",
        dialogueThree: "",
    },
    {
        name: "Nang Phom Hom (Yasodhara)",
        laoName: "ນາງຜົມຫອມ",
        opinion: "memories",
        legendValue: "unifying nangphomhom mostrequested                       jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangphomhom.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangphomhom2.PNG",
        thumbnailImage: "img/thumbnail-nangphomhom.PNG",
        profileImage: "img/img-nangphomhom.PNG",
        raptor: "img/raptor-nangphomhom.png",
        // unifying: "dotted",
        vision1: "the world's paragon and rolemodel, paragon of a world she disagrees with and sees more to",
        // vision2: "paragon of a world she disagrees with and sees more to",

        // shaqpeople, pauling, charles linus pauling, 
        cinematicOneOrigin: "",
        paragraph: "fishing",
        
        playstyle: "transform, sustain",
        attackImage: "img/thumbnail-nangphomhom.PNG",

        ultimateName: "EIDETIC MEMORY, DAUGHTER OF SETTHAN",
        ultimateImage: "",

        abilityOneName: "",
        abilityOneImage: "img/#.PNG",

        abilityTwoName: "",
        abilityTwoImage: "img/#.PNG",

        abilityThreeName: "",
        abilityThreeImage: "img/#.PNG",

        ability: {
            ability1() {
                // Blindsided_DAMAGE. This attack goes straight for the opponent's eyes, blinding them or binding them in a blindfold. This projects her own struggles being partially blind, thus heightening her reliance and responsiveness of her other senses.
                
                partyTwoHealth = partyOneDamage - partyTwoHealth;

                partyTwoHealth = partyTwoHealth - 500;
                partyOneHealth = partyOneHealth - 100;
                partyTwoHealthHTML.innerHTML = partyTwoHealth;
                partyOneHealthHTML.innerHTML = partyOneHealth; // Update the health display
                battleLog.innerHTML += '<br><br><img src="img/dinosauria.jpg" width="700" height="400">';
                inputBattleLog("<br><br><strong> You used your FIRST ability. </strong>");

                return partyTwoHealth;
            },
        
            ability2() {
                // Pity of Shiva_STATUS. Nang Teng One is grateful to Shiva and Visoukam for resurrecting her in the Himaphan Forest. She now devoutly follows and incorporates him into her life and incantations.

            },
        
            ability3() {
                // Heart in a Box. // Zabaniya. 

            },

            abilityUltimate(){
                // Despair Wail // Familial Wail // Crocodile Tears

            }
        }
    },
    {
        name: "Thao Bangert Koumarn (Bodhisattva)",
        laoName: "ນາງຜົມຫອມ",
        opinion: "memories",
        legendValue: "unifying nangphomhom                       jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-thaobangertkoumarn.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-thaobangertkoumarn2.PNG",
        thumbnailImage: "img/thumbnail-thaobangertkoumarn.PNG",
        profileImage: "img/img-thaobangertkoumarn.PNG",
        raptor: "img/raptor-thaobangertkoumarn.png",
    },
    {
        name: "Sila (Rahula)",
        laoName: "ສິລາ",
        opinion: "memories",
        legendValue: "unifying nangphomhom                       jataka human royal male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-sila.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-sila2.PNG",
        thumbnailImage: "img/thumbnail-sila.PNG",
        profileImage: "img/img-sila.PNG",
        raptor: "img/raptor-sila.png",
    },
    {
        name: "Sida (Uppalavanna) ",
        laoName: "ສີດາ",
        opinion: "memories",
        legendValue: "unifying nangphomhom                       jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-sida.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-sida2.PNG",
        thumbnailImage: "img/thumbnail-sida.PNG",
        profileImage: "img/img-sida.PNG",
        raptor: "img/raptor-sida.png",


        // shaqpeople, pauling, charles linus pauling, 
        cinematicOneOrigin: "",
        paragraph: "fishing",
        
        playstyle: "transform, sustain",
        attackImage: "img/thumbnail-sida.PNG",

        ultimateName: "HENNA RATASIN",
        ultimateImage: "",

        abilityOneName: "",
        abilityOneImage: "img/#.PNG",

        abilityTwoName: "",
        abilityTwoImage: "img/#.PNG",

        abilityThreeName: "",
        abilityThreeImage: "img/#.PNG",

        ability: {
            ability1() {
                // Blindsided_DAMAGE. This attack goes straight for the opponent's eyes, blinding them or binding them in a blindfold. This projects her own struggles being partially blind, thus heightening her reliance and responsiveness of her other senses.
                
                partyTwoHealth = partyOneDamage - partyTwoHealth;

                partyTwoHealth = partyTwoHealth - 500;
                partyOneHealth = partyOneHealth - 100;
                partyTwoHealthHTML.innerHTML = partyTwoHealth;
                partyOneHealthHTML.innerHTML = partyOneHealth; // Update the health display
                battleLog.innerHTML += '<br><br><img src="img/dinosauria.jpg" width="700" height="400">';
                inputBattleLog("<br><br><strong> You used your FIRST ability. </strong>");

                return partyTwoHealth;
            },
        
            ability2() {
                // Pity of Shiva_STATUS. Nang Teng One is grateful to Shiva and Visoukam for resurrecting her in the Himaphan Forest. She now devoutly follows and incorporates him into her life and incantations.

            },
        
            ability3() {
                // Heart in a Box. // Zabaniya. 

            },

            abilityUltimate(){
                // Despair Wail // Familial Wail // Crocodile Tears

            }
        }
    },
    {
        name: "Phaya Khampha Kai To",
        laoName: "ພະຍາກຳພ້າໄກ່",
        opinion: "",
        legendValue: "khamphakaito                       folklore human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-khamphakaito.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-khamphakaito2.PNG",
        thumbnailImage: "img/thumbnail-khamphakaito.PNG",
        raptor: "img/raptor-khamphakaito.PNG",
        status: "yellow",
        profileImage: "img/img-khamphakaito.PNG",
        // unifying: "dotted",
        trailer: "img/btbmedia1.mp4",
        description: "",
    },
    {
        name: "Nang Kai To",
        laoName: "ນາງໄກ່",
        opinion: "",
        legendValue: "khamphakaito                        folklore human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangkaito.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaito3.PNG",
        thumbnailImage: "img/thumbnail-nangkaito.PNG",
        raptor: "img/raptor-nangkaito.PNG",
        status: "yellow",
        profileImage: "img/img-nangkaito.PNG",
        // unifying: "dotted",
        trailer: "img/btbmedia1.mp4",
        description: "",
    },
    {
        name: "Thao Butsara",
        laoName: "",
        opinion: "",
        legendValue: "thaobutsara                       folklore human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-thaobutsara.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-thaobutsara3.PNG",
        thumbnailImage: "img/thumbnail-thaobutsara.PNG",
        raptor: "img/raptor-thaobutsara.PNG",
        status: "yellow",
        profileImage: "img/img-thaobutsara.PNG",
        // unifying: "dotted",
        trailer: "img/btbmedia1.mp4",
        description: "",
    },
    {
        name: "Kaeo Lot Fa",
        laoName: "",
        opinion: "",
        legendValue: "thaobutsara                       folklore human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-keolotfa.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-keolotfa3.PNG",
        thumbnailImage: "img/thumbnail-keolotfa.PNG",
        raptor: "img/raptor-keolotfa.PNG",
        status: "yellow",
        profileImage: "img/img-keolotfa.PNG",
        // unifying: "dotted",
        trailer: "img/btbmedia1.mp4",
        description: "",
    },
    {
        name: "Nang Kaifa",
        laoName: "ນາງໄຂ່ຟ້າ",
        opinion: "",
        legendValue: "nangkaifa                       folklore human commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangkaifa.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaifa2.PNG",
        thumbnailImage: "img/thumbnail-nangkaifa.PNG",
        profileImage: "img/img-nangkaifa.PNG",
    },
    {
        name: "Latsamy",
        laoName: "ລາສາມີ",
        legendValue: "xiengmieng mostrequested                       folklore human merchant male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-latsamy.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-latsamy2.PNG",
        thumbnailImage: "img/thumbnail-latsamy.PNG",
        profileImage: "img/img-latsamy.PNG",
        status: "lightgreen",
        vision1: "I can be just as smart as him. If I work hard enough. Then he'll listen. If I had his smarts, the things I could do that he doesn't.",
        vision2: "He should be the one. ",  

        damage: 10,
        health: 2000,
    },
    {
        name: "Sivath",
        laoName: "ສິວັດ",
        legendValue: "xiengmieng mostrequested                       folklore human merchant male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-sivath.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-sivath2.PNG",
        thumbnailImage: "img/thumbnail-sivath.PNG",
        profileImage: "img/img-sivath.PNG",
        status: "lightgreen",
        vision1: "I can be just as smart as him. If I work hard enough. Then he'll listen. If I had his smarts, the things I could do that he doesn't.",
        vision2: "He should be the one. ",  
    },
    {
        name: "Nok Kaxoum Hou Laan",
        laoName: "",
        opinion: "",
        legendValue: "baldstork                       folklore beast commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-baldstork.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-baldstork2.PNG",
        thumbnailImage: "img/thumbnail-baldstork.PNG",
        raptor: "img/raptor-baldstork.PNG",
        status: "red",
        profileImage: "img/img-baldstork.PNG",
    },
    {
        name: "The Serving Giant",
        laoName: "",
        opinion: "",
        legendValue: "theservinggiant                       folklore nyak commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-servinggiant.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-servinggiant2.PNG",
        thumbnailImage: "img/thumbnail-servinggiant.PNG",
        raptor: "img/raptor-servinggiant.PNG",
        status: "red",
        profileImage: "img/img-servinggiant.PNG",
    },
    {
        name: "Nang Zanee Khuan",
        laoName: "",
        opinion: "",
        legendValue: "nangzaneekhuan                       folklore beast commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-nangzaneekhuan.PNG",
        thumbnailImageTransparent2: "img/thumbnail-nangzaneekhuan.PNG",
        thumbnailImage: "img/thumbnail-nangzaneekhuan.PNG",
        profileImage: "img/img-nangzaneekhuan.PNG",
    },



    {
        name: "Dhit Kaeo",
        laoName: "",
        legendValue: "phikongkoi                       folklore human commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-dhitkaeo.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-dhitkaeo2.PNG",
        thumbnailImage: "img/thumbnail-dhitkaeo.PNG",
        profileImage: "img/btbboard-31.PNG",
        gallery01: "img/gallery-dhitkaeo-01.PNG",
        gallery02: "img/gallery-dhitkaeo-02.PNG",
        gallery03: "img/gallery-dhitkaeo-03.PNG",
        
        // shaqpeople, pauling, charles linus pauling, 
        cinematicOneOrigin: "",
        paragraph: "fishing",
        
        playstyle: "transform, sustain",
        attackImage: "img/thumbnail-dhitkaeo.PNG",

        ultimateName: "",
        ultimateImage: "",

        abilityOneName: "SPARROW HAWK STRIKE",
        abilityOneImage: "img/#.PNG",

        abilityTwoName: "",
        abilityTwoImage: "img/#.PNG",

        abilityThreeName: "",
        abilityThreeImage: "img/#.PNG",

        ability: {
            ability1() {
                // Blindsided_DAMAGE. This attack goes straight for the opponent's eyes, blinding them or binding them in a blindfold. This projects her own struggles being partially blind, thus heightening her reliance and responsiveness of her other senses.
                
                partyTwoHealth = partyOneDamage - partyTwoHealth;

                partyTwoHealth = partyTwoHealth - 500;
                partyOneHealth = partyOneHealth - 100;
                partyTwoHealthHTML.innerHTML = partyTwoHealth;
                partyOneHealthHTML.innerHTML = partyOneHealth; // Update the health display
                battleLog.innerHTML += '<br><br><img src="img/dinosauria.jpg" width="700" height="400">';
                inputBattleLog("<br><br><strong> You used your FIRST ability. </strong>");

                return partyTwoHealth;
            },
        
            ability2() {
                // Pity of Shiva_STATUS. Nang Teng One is grateful to Shiva and Visoukam for resurrecting her in the Himaphan Forest. She now devoutly follows and incorporates him into her life and incantations.

            },
        
            ability3() {
                // Heart in a Box. // Zabaniya. 

            },

            abilityUltimate(){
                // Despair Wail // Familial Wail // Crocodile Tears

            }
        }
    },
    {
        name: "Phi Kong Koi",
        laoName: "ຜີກ່ອງກ່ອຍ",
        opinion: "",
        legendValue: "phikongkoi fireresistance                       folklore phi commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phikongkoi.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phikongkoi2.PNG",
        thumbnailImage: "img/thumbnail-phikongkoi.PNG",
        profileImage: "img/img-phikongkoi.PNG",
        description: "The horror movie villain Freddy Krueger was said to be inspired in the 1980s by reports of the phi am abruptly killing otherwise healthy sleeping men from Laos, particularly Hmong, by sitting on their chests at night, a phenomenon referred to as Sudden Unexpected Nocturnal Death Syndrome, currently considered to be the same as Brugada Syndrome according to Western medicine.",
    
    
        // shaqpeople, pauling, charles linus pauling, 
        cinematicOneOrigin: "",
        paragraph: "fishing",
        
        playstyle: "transform, sustain",
        attackImage: "img/thumbnail-phikongkoi.PNG",

        ultimateName: "KONG KOI KONG KOI",
        ultimateImage: "",

        abilityOneName: "CROSSBOW",
        abilityOneImage: "img/#.PNG",

        abilityTwoName: "POSSESSED SPEECH",
        abilityTwoImage: "img/#.PNG",

        abilityThreeName: "",
        abilityThreeImage: "img/#.PNG",

        ability: {
            ability1() {
                // Blindsided_DAMAGE. This attack goes straight for the opponent's eyes, blinding them or binding them in a blindfold. This projects her own struggles being partially blind, thus heightening her reliance and responsiveness of her other senses.
                
                partyTwoHealth = partyOneDamage - partyTwoHealth;

                partyTwoHealth = partyTwoHealth - 500;
                partyOneHealth = partyOneHealth - 100;
                partyTwoHealthHTML.innerHTML = partyTwoHealth;
                partyOneHealthHTML.innerHTML = partyOneHealth; // Update the health display
                battleLog.innerHTML += '<br><br><img src="img/dinosauria.jpg" width="700" height="400">';
                inputBattleLog("<br><br><strong> You used your FIRST ability. </strong>");

                return partyTwoHealth;
            },
        
            ability2() {
                // Pity of Shiva_STATUS. Nang Teng One is grateful to Shiva and Visoukam for resurrecting her in the Himaphan Forest. She now devoutly follows and incorporates him into her life and incantations.

            },
        
            ability3() {
                // Heart in a Box. // Zabaniya. 

            },

            abilityUltimate(){
                // Despair Wail // Familial Wail // Crocodile Tears

            }
        }
    },
    {
        name: "Phi Khon Long",
        laoName: "ຜີຄົນໂລງ",
        opinion: "",
        legendValue: "phikhonlong                       folklore phi commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phikhonlong.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phikhonlong2.PNG",
        thumbnailImage: "img/thumbnail-phikhonlong.PNG",
        profileImage: "img/img-phikhonlong.PNG",
    },
    {
        name: "Phi Kowpoon",
        laoName: "ຜີເຂົ້າປຸ້ນ",
        opinion: "",
        legendValue: "phikowpoon                       folklore phi commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phikowpoon.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phikowpoon2.PNG",
        thumbnailImage: "img/thumbnail-phikowpoon.PNG",
        profileImage: "img/img-phikowpoon.PNG",
        description: "In Laos, a man was pushing his kowpoon cart down the road in the early evening. It had been a long day, and he hadn’t sold all of his noodles. He had heard of a village nearby and decided to head that way to try his luck there. On the way, he found himself at a fork in the road near a pair of twin banyan trees. He heard a soft whimpering, and as got closer to the trees he saw a little girl weeping on a log, her long hair covering her face.",
    },
    {
        name: "Phi Ya Yom",
        laoName: "ຜີຍະວາຍ",
        opinion: "",
        legendValue: "phiyayom                       folklore phi commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phiyayom.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phiyayom2.PNG",
        thumbnailImage: "img/thumbnail-phiyayom.PNG",
        profileImage: "img/img-phiyayom.PNG",
    },
    // {
    //     name: "Phi Ya Moi",
    //     laoName: "ຜີຢ່າມອຍ",
    //     opinion: "",
    //     legendValue: "phiyamoi                       folklore phi commoner female lao",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-#.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-#2.PNG",
    //     thumbnailImage: "img/thumbnail-#.PNG",
    //     profileImage: "img/img-#.PNG",
    // },
    {
        name: "Phi Kasu",
        laoName: "",
        opinion: "",
        legendValue: "phikasu                       folklore phi commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phikasu.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phikasu2.PNG",
        thumbnailImage: "img/thumbnail-phikasu.PNG",
        profileImage: "img/img-phikasu.PNG",
    },
    {
        name: "Phi Pob",
        laoName: "",
        opinion: "",
        legendValue: "                       folklore phi commoner female male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phipob.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phipob2.PNG",
        thumbnailImage: "img/thumbnail-phipob.PNG",
        profileImage: "img/img-phipob.PNG",
    },
    {
        name: "Phi Ma Bong",
        laoName: "",
        opinion: "",
        legendValue: "                       folklore phi beast commoner female male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phimabong.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phimabong2.PNG",
        thumbnailImage: "img/thumbnail-phimabong.PNG",
        profileImage: "img/img-phimabong.PNG",
        description: "The majority of Lao ghosts are generally in the shape of humans, but one of the stranger and more terrifying ghosts of Laos and Northeastern Thailand is the Phi Ma Bong, often described as a nocturnal ghost mostly shaped like a horse, but sometimes with a young woman’s face. The Phi Ma Bong absolutely does not like humans, and trampling them to death is one of their favorite activities, after they’re done chasing you up the road and wherever you try to hide from them. But they also love raw, rotting meat and raw eggs. Some stories have suggested they don’t like weretigers, but that is unlikely to be helpful to any humans who run into this creature at all.",
    },
    {
        name: "Phi Paet",
        laoName: "",
        opinion: "",
        legendValue: "                       folklore phi commoner female male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phipaet.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phipaet2.PNG",
        thumbnailImage: "img/thumbnail-phipaet.PNG",
        profileImage: "img/img-phipaet.PNG",
        description: "Also known as Preta, the Phi Ped or hungry ghosts of Lao tradition are known through Buddhist legends as the fate for many who cannot overcome their greed and hunger in their lifetimes. Such people are said to spend their afterlife perpetually hungry, often with swollen, hollow bellies and mouths smaller than a single grain of rice. Some accounts say they are tall, horrifying ghosts who can never work off the karmic debts they incurred while living. It is believed to be one of the most tragic fates to befall a person.",
    },
    {
        name: "Ai Chet Hai",
        laoName: "ອ້າຍເຈັດໄຫ",
        opinion: "",
        legendValue: "aichethai                       folklore human commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-aichethai.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-aichethai2.PNG",
        thumbnailImage: "img/thumbnail-aichethai.PNG",
        profileImage: "img/img-aichethai.PNG",
    },
    // {
    //     name: "Li Puu Laa Nam",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "                       folklore human commoner male lao",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-lipuulaanam.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-lipuulaanam2.PNG",
    //     thumbnailImage: "img/thumbnail-lipuulaanam.PNG",
    //     profileImage: "img/img-lipuulaanam.PNG",
    // },
    // {
    //     name: "Fisherman",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "                       folklore human commoner male lao",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-fisherman.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-fisherman2.PNG",
    //     thumbnailImage: "img/thumbnail-fisherman.PNG",
    //     profileImage: "img/img-fisherman.PNG",
    // },
    // {
    //     name: "Squirrel Catcher",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "                       folklore human commoner male lao",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-squirrelcatcher.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-squirrelcatcher2.PNG",
    //     thumbnailImage: "img/thumbnail-squirrelcatcher.PNG",
    //     profileImage: "img/img-squirrelcatcher.PNG",
    // },
    // {
    //     name: "Wind Catcher",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "                       folklore human commoner male lao",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-windcatcher.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-windcatcher2.PNG",
    //     thumbnailImage: "img/thumbnail-windcatcher.PNG",
    //     profileImage: "img/img-windcatcher.PNG",
    // },
    // {
    //     name: "Ox Catcher",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "                       folklore human commoner male lao",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-oxcatcher.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-oxcatcher2.PNG",
    //     thumbnailImage: "img/thumbnail-oxcatcher.PNG",
    //     profileImage: "img/img-oxcatcher.PNG",
    // },
    // {
    //     name: "Elephant Catcher",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "                       folklore human commoner male lao",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-elephantcatcher.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-elephantcatcher2.PNG",
    //     thumbnailImage: "img/thumbnail-elephantcatcher.PNG",
    //     profileImage: "img/img-elephantcatcher.PNG",
    // },
    // {
    //     name: "Water Drinker",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "                       folklore human commoner male lao",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-waterdrinker.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-waterdrinker2.PNG",
    //     thumbnailImage: "img/thumbnail-waterdrinker.PNG",
    //     profileImage: "img/img-waterdrinker.PNG",
    // },
    // {
    //     name: "Coral Tree Puller",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "                       folklore human commoner male lao",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-coraltreepuller.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-coraltreepuller2.PNG",
    //     thumbnailImage: "img/thumbnail-coraltreepuller.PNG",
    //     profileImage: "img/img-coraltreepuller.PNG",
    // },
    {
        name: "Khampha Phuu Hai",
        laoName: "",
        opinion: "",
        legendValue: "namyawiset                        folklore human commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-khamphaphuuhai.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-khamphaphuuhai2.PNG",
        thumbnailImage: "img/thumbnail-khamphaphuuhai.PNG",
        profileImage: "img/img-khamphaphuuhai.PNG",
        description: "",
    },
    {
        name: "Nang Ngeauk",
        laoName: "ນາງເງືອກ",
        opinion: "",
        legendValue: "                       folklore phi commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangngeuak.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangngeuak2.PNG",
        thumbnailImage: "img/thumbnail-nangngeuak.PNG",
        profileImage: "img/img-nangngeuak.PNG",
        description: "While the first fish hybrid creature of the region, and possibly the world, is the Matsya avatar of the god Vishnu (one of several of his animal avatars), in which, he is depicted as having his legs inside the mouth of a giant fish, thus making the general shape of a merman. From there the word nguek evolved from a meaning of snake, to that of a water snake with a human face that was decidedly separate from nagas. Modern tales tell only of golden colored mermaids, or nang nguek. They appear in stories to assist hero characters in their journeys, or are reported to have been seen sitting on this or that beach momentarily before getting frightened away. The most notable mermaid is called Suvannamaccha, which also means golden mermaid.",
    },
    {
        name: "Juta",
        laoName: "",
        opinion: "birds",
        legendValue: "juta mostrequested                       folklore human commoner male hmong",
        thumbnailImageTransparent: "img/thumbnail-transparent-juta.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-juta2.PNG",
        thumbnailImage: "img/thumbnail-juta.PNG",
        profileImage: "img/img-juta.PNG",
        status: "lightgreen",
        vision1: "I can be just as smart as him. If I work hard enough. Then he'll listen. If I had his smarts, the things I could do that he doesn't.",
        vision2: "He should be the one. ",  
    },
    {
        name: "Bak Tum",
        laoName: "ບັກ",
        opinion: "dukkha = \"Thanks for letting me in.\"",
        legendValue: "bakdtumitam fireresistance                       folklore sorcerer commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-bakdtum.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-bakdtum2.PNG",
        thumbnailImage: "img/thumbnail-bakdtum.PNG",
        profileImage: "img/img-bakdtum.PNG",
        unifying: "dotted",

        dialogue1: "\"You are I Tam, aren't you?\"",
        dialogue2: "",

        description: "Once upon a time, there was a married couple who lived in a village. The man's name was Bak Tum, and his wife's, I Tam. They were both sorcerers. They were not happy because they did not love one another. The man thought that his wife was ugly, and the woman thought her husband was horrible. They often quarrelled, and their neighbors had to intervene to stop them from fighting. They very much wanted to divorce, but neither of them dared mention this idea to the other.",
    },
    {
        name: "I Tam",
        laoName: "ບັກ",
        opinion: "",
        legendValue: "bakdtumitam                       folklore sorcerer commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-itam2.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-itam2.PNG",
        thumbnailImage: "img/thumbnail-itam.PNG",
        profileImage: "img/img-itam.PNG",
        unifying: "dotted",

        description: "Once upon a time, there was a married couple who lived in a village. The man's name was Bak Tum, and his wife's, I Tam. They were both sorcerers. They were not happy because they did not love one another. The man thought that his wife was ugly, and the woman thought her husband was horrible. They often quarrelled, and their neighbors had to intervene to stop them from fighting. They very much wanted to divorce, but neither of them dared mention this idea to the other.",
    },
    {
        name: "Kalaket",
        laoName: "ບັກ",
        opinion: "dukkha = \"Thanks for letting me in.\"",
        legendValue: "unifying bakdtumitam                       folklore human royal male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kalaketbakdtumitam.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kalaketbakdtumitam2.PNG",
        thumbnailImage: "img/thumbnail-kalaketbakdtumitam.PNG",
        profileImage: "img/img-kalaketbakdtumitam.PNG",
        unifying: "dotted",
    },
    {
        name: "Nang Phunathet",
        laoName: "ບັກ",
        opinion: "dukkha = \"Thanks for letting me in.\"",
        legendValue: "unifying bakdtumitam                       folklore human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangphunathet.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangphunathet2.PNG",
        thumbnailImage: "img/thumbnail-nangphunathet.PNG",
        profileImage: "img/img-nangphunathet.PNG",
        unifying: "dotted",
    },








    {
        name: "Sangthong",
        laoName: "ສັງທອງ",
        opinion: "#",
        legendValue: "sangsinxay                       jataka human royal male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-sangthong.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-sangthong2.PNG",
        thumbnailImage: "img/thumbnail-sangthong.PNG",
        raptor: "img/raptor-sangthong.PNG",
        profileImage: "img/img-sangthong.PNG",
    },
    {
        name: "Siho",
        laoName: "ສີໂຫ",
        opinion: "",
        legendValue: "sangsinxay                       jataka beast royal male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-siho.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-siho2.PNG",
        thumbnailImage: "img/thumbnail-siho.PNG",
        raptor: "img/raptor-siho.PNG",
        profileImage: "img/illustration-siho.PNG",
    },
    {
        name: "Kiengkham",
        laoName: "ຂຽງຄຳ",
        opinion: "",
        legendValue: "sangsinxay                       jataka kinnaly royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kiengkham.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kiengkham2.PNG",
        thumbnailImage: "img/thumbnail-kiengkham.PNG",
        raptor: "img/raptor-kiengkham.PNG",
        profileImage: "img/img-kiengkham.PNG",
    },
    {
        name: "Meenyafet",
        laoName: "ເມີນຍະເຟຕ!!!",
        opinion: "",
        legendValue: "sangsinxay                        jataka human commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-meenyafet.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-meenyafet2.PNG",
        thumbnailImage: "img/thumbnail-meenyafet.PNG",
        profileImage: "img/img-meenyafet.PNG",
        raptor: "img/raptor-meenyafet.PNG",
    },
    {
        name: "Astrologer",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                        jataka human noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-astrologersinxay.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-astrologersinxay2.PNG",
        thumbnailImage: "img/thumbnail-astrologersinxay.PNG",
        profileImage: "img/img-astrologersinxay.PNG",
    },
    {
        name: "Manahatlek",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                        jataka human noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-noblesilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-noblesilhouette2.PNG",
        thumbnailImage: "img/thumbnail-noblesilhouette.PNG",
        profileImage: "img/img-noblesilhouette.PNG",
        status: "yellow",
    },
    {
        name: "Nang Loun",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangloun.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangloun2.PNG",
        thumbnailImage: "img/thumbnail-nangloun.PNG",
        thumbnailImage2: "img/thumbnail-nangloun.PNG",
        profileImage: "img/img-nangloun.PNG",
    },
    {
        name: "Nang Batuma",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangbatuma.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangbatuma2.PNG",
        thumbnailImage: "img/thumbnail-nangbatuma.PNG",
        profileImage: "img/img-nangbatuma.PNG",
    },
    {
        name: "Khun Khon",
        laoName: "",
        opinion: "Gommakhunkhon",
        legendValue: "sangsinxay                        jataka human noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-noblesilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-noblesilhouette2.PNG",
        thumbnailImage: "img/thumbnail-noblesilhouette.PNG",
        profileImage: "img/img-noblesilhouette.PNG",
    },
    {
        name: "Khun Sii",
        laoName: "",
        opinion: "gommakhunsii",
        legendValue: "sangsinxay                        jataka human noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-noblesilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-noblesilhouette2.PNG",
        thumbnailImage: "img/thumbnail-noblesilhouette.PNG",
        profileImage: "img/img-noblesilhouette.PNG",
    },
    {
        name: "Phaya Kousarat / Mahathet",
        laoName: "",
        opinion: "Meuang Champa",
        legendValue: "sangsinxay                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phayakousarat.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phayakousarat2.PNG",
        thumbnailImage: "img/thumbnail-phayakousarat.PNG",
        profileImage: "img/img-phayakousarat.PNG",
        status: "greenyellow",
    },
    {
        name: "Nang Chantha",
        laoName: "",
        opinion: "Meuang Champa",
        legendValue: "sangsinxay                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangchanthasinxay.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangchanthasinxay2.PNG",
        thumbnailImage: "img/thumbnail-nangchanthasinxay.PNG",
        profileImage: "img/img-nangchanthasinxay.PNG",
        status: "greenyellow",
    },
    {
        name: "Phaya Kamathaa",
        laoName: "",
        opinion: "Meuang Champa",
        legendValue: "sangsinxay                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phayakamathaa.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phayakamathaa2.PNG",
        thumbnailImage: "img/thumbnail-phayakamathaa.PNG",
        profileImage: "img/img-phayakamathaa.PNG",
        status: "greenyellow",
    },
    {
        name: "Nantha Seti",
        laoName: "",
        opinion: "Meuang Champa",
        legendValue: "sangsinxay                        jataka human noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nanthaseti.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nanthaseti2.PNG",
        thumbnailImage: "img/thumbnail-nanthaseti.PNG",
        profileImage: "img/img-nanthaseti.PNG",
        status: "greenyellow",
    },
    {
        name: "Khun Chan",
        laoName: "",
        opinion: "Meuang Champa",
        legendValue: "sangsinxay                        jataka human noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-noblesilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-noblesilhouette2.PNG",
        thumbnailImage: "img/thumbnail-noblesilhouette.PNG",
        profileImage: "img/img-noblesilhouette.PNG",
        status: "greenyellow",
    },
    // {
    //     name: "Six Brothers",
    //     laoName: "",
    //     opinion: "Meuang Champa",
    //     legendValue: "sangsinxay",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-#.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-#2.PNG",
    //     thumbnailImage: "img/thumbnail-#.PNG",
    //     raptor: "img/raptor-#.PNG",
    //     status: "greenyellow",
    //     profileImage: "img/img-#.PNG",
    // },
    // {
    //     name: "Six Sisters",
    //     laoName: "",
    //     opinion: "Meuang Champa",
    //     legendValue: "sangsinxay",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-#.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-#2.PNG",
    //     thumbnailImage: "img/thumbnail-#.PNG",
    //     raptor: "img/raptor-#.PNG",
    //     status: "greenyellow",
    //     profileImage: "img/img-#.PNG",
    // },
    {
        name: "\"Abbot\"",
        laoName: "",
        opinion: "Meuang Champa",
        legendValue: "sangsinxay                       jataka human monk male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-abbotsinxay.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-abbotsinxay2.PNG",
        thumbnailImage: "img/thumbnail-abbotsinxay.PNG",
        profileImage: "img/img-abbotsinxay.PNG",
        status: "greenyellow",
    },
    {
        name: "Nyak Koumphan",
        laoName: "ຍັກກູມພັນ",
        opinion: "Meuang Anoulat",
        legendValue: "sangsinxay                       jataka nyak phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyakkoumphan.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyakkoumphan2.PNG",
        thumbnailImage: "img/thumbnail-nyakkoumphan.PNG",
        thumbnailImage2: "img/thumbnail-nangsidachansoumontha.PNG",
        raptor: "img/raptor-nyakkoumphan.PNG",
        status: "red",
        profileImage: "img/img-nyakkoumphan.PNG",
    },
    {
        name: "Nyak Pannula",
        laoName: "",
        opinion: "Meuang Anoulat",
        legendValue: "sangsinxay                       jataka nyak royal male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyakvalounna.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyakvalounna2.PNG",
        thumbnailImage: "img/thumbnail-nyakvalounna.PNG",
        raptor: "img/raptor-nyakvalounna.PNG",
        status: "red",
        profileImage: "img/img-nyakvalounna.PNG",
    },
    {
        name: "Nak Valoonarat",
        laoName: "",
        opinion: "Nak Valoonarat Kingdom",
        legendValue: "sangsinxay                       jataka nak phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nakvaloonarat.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nakvaloonarat2.PNG",
        thumbnailImage: "img/thumbnail-nakvaloonarat.PNG",
        raptor: "img/raptor-nakvaloonarat.PNG",
        status: "coral",
        profileImage: "img/img-nakvaloonarat.PNG",
    },
    {
        name: "Nang Sidachan",
        laoName: "ສີດາ",
        opinion: "Nak Valoonarat Kingdom",
        legendValue: "sangsinxay                       jataka nyak royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangsidachansoumontha.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangsidachansoumontha2.PNG",
        thumbnailImage: "img/thumbnail-nangsidachansoumontha.PNG",
        raptor: "img/raptor-nangsidachansoumontha.PNG",
        status: "coral",
        profileImage: "img/img-nangsidachansoumontha.PNG",
    },
    // {
    //     name: "Satthan",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "sangsinxay                       jataka beast phaya male lao",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-satthan.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-satthan2.PNG",
    //     thumbnailImage: "img/thumbnail-satthan.PNG",
    //     raptor: "img/raptor-satthan.PNG",
    //     status: "red",
    //     profileImage: "img/img-satthan.PNG",
    // },
    {
        name: "Jittda Nyak",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                       jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyaksilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyaksilhouette2.PNG",
        thumbnailImage: "img/thumbnail-nyaksilhouette.PNG",
        raptor: "img/raptor-nyaksilhouette.PNG",
        status: "red",
        profileImage: "img/img-nyaksilhouette.PNG",
    },
    {
        name: "Xaya Nyak",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                       jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyaksilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyaksilhouette2.PNG",
        thumbnailImage: "img/thumbnail-nyaksilhouette.PNG",
        raptor: "img/raptor-nyaksilhouette.PNG",
        status: "red",
        profileImage: "img/img-nyaksilhouette.PNG",
    },
    {
        name: "Vixaya Nyak",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                       jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyaksilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyaksilhouette2.PNG",
        thumbnailImage: "img/thumbnail-nyaksilhouette.PNG",
        raptor: "img/raptor-nyaksilhouette.PNG",
        status: "red",
        profileImage: "img/img-nyaksilhouette.PNG",
    },
    {
        name: "Nyak Atsamoukhi",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                       jataka nyak commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyakatsamoukhi.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyakatsamoukhi2.PNG",
        thumbnailImage: "img/thumbnail-nyakatsamoukhi.PNG",
        raptor: "img/raptor-nyakatsamoukhi.PNG",
        status: "red",
        profileImage: "img/img-nyakatsamoukhi.PNG",
    },
    {
        name: "Nyak Vienyuvet",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                       jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyaksilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyaksilhouette2.PNG",
        thumbnailImage: "img/thumbnail-nyaksilhouette.PNG",
        raptor: "img/raptor-nyaksilhouette.PNG",
        status: "red",
        profileImage: "img/img-nyaksilhouette.PNG",
    },
    {
        name: "Nyak Khaisi",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                       jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyaksilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyaksilhouette2.PNG",
        thumbnailImage: "img/thumbnail-nyaksilhouette.PNG",
        raptor: "img/raptor-nyaksilhouette.PNG",
        status: "red",
        profileImage: "img/img-nyaksilhouette.PNG",
    },
    {
        name: "Nyak Kaisi",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                       jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyaksilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyaksilhouette2.PNG",
        thumbnailImage: "img/thumbnail-nyaksilhouette.PNG",
        raptor: "img/raptor-nyaksilhouette.PNG",
        status: "red",
        profileImage: "img/img-nyaksilhouette.PNG",
    },
    {
        name: "Nyak Phetsakai",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                       jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyaksilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyaksilhouette2.PNG",
        thumbnailImage: "img/thumbnail-nyaksilhouette.PNG",
        raptor: "img/raptor-nyaksilhouette.PNG",
        status: "red",
        profileImage: "img/img-nyaksilhouette.PNG",
    },
    {
        name: "Nyak Vienyugan",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                       jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyaksilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyaksilhouette2.PNG",
        thumbnailImage: "img/thumbnail-nyaksilhouette.PNG",
        raptor: "img/raptor-nyaksilhouette.PNG",
        status: "red",
        profileImage: "img/img-nyaksilhouette.PNG",
    },
    {
        name: "Nyak Vanluva",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                       jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyaksilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyaksilhouette2.PNG",
        thumbnailImage: "img/thumbnail-nyaksilhouette.PNG",
        raptor: "img/raptor-nyaksilhouette.PNG",
        status: "red",
        profileImage: "img/img-nyaksilhouette.PNG",
    },
    {
        name: "Nyak Vinyuvet",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                       jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyaksilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyaksilhouette2.PNG",
        thumbnailImage: "img/thumbnail-nyaksilhouette.PNG",
        raptor: "img/raptor-nyaksilhouette.PNG",
        status: "red",
        profileImage: "img/img-nyaksilhouette.PNG",
    },
    {
        name: "Nyak Pannula",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                       jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyaksilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyaksilhouette2.PNG",
        thumbnailImage: "img/thumbnail-nyaksilhouette.PNG",
        raptor: "img/raptor-nyaksilhouette.PNG",
        status: "red",
        profileImage: "img/img-nyaksilhouette.PNG",
    },
    {
        name: "Khun Nolatsa",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                       jataka human noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-noblesilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-noblesilhouette2.PNG",
        thumbnailImage: "img/thumbnail-noblesilhouette.PNG",
        raptor: "img/raptor-noblesilhouette.PNG",
        status: "red",
        profileImage: "img/img-noblesilhouette.PNG",
    },
    {
        name: "Khun Luangmahasayna",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                       jataka human noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-noblesilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-noblesilhouette2.PNG",
        thumbnailImage: "img/thumbnail-noblesilhouette.PNG",
        raptor: "img/raptor-noblesilhouette.PNG",
        status: "red",
        profileImage: "img/img-noblesilhouette.PNG",
    },
    {
        name: "Khun Nyon",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay                       jataka human noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-noblesilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-noblesilhouette2.PNG",
        thumbnailImage: "img/thumbnail-noblesilhouette.PNG",
        raptor: "img/raptor-noblesilhouette.PNG",
        status: "red",
        profileImage: "img/img-noblesilhouette.PNG",
    },






    
    {
        name: "Setthan, Elephant Lord",
        laoName: "",
        opinion: "memories",
        legendValue: "unifying nangphomhom                       jataka beast phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-setthan.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-setthan2.PNG",
        thumbnailImage: "img/thumbnail-setthan.PNG",
        profileImage: "img/img-setthan.PNG",
        raptor: "img/raptor-setthan.png",
    },

    {
        name: "Linthong",
        laoName: "ລີນທອງ",
        opinion: "Sisattanak ສີສັດຕະນາກ",
        secondOpinion: "",
        legendValue: "unifying linthong meuangsomphou mostrequested                       jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-linthong.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-linthong2.PNG",
        thumbnailImage: "img/thumbnail-linthong.PNG",
        profileImage: "img/img-linthong.PNG",
        unifying: "dotted",
    },
    {
        name: "King of Sisattanak",
        laoName: "",
        opinion: "Sisattanak ສີສັດຕະນາກ",
        legendValue: "linthong meuangsomphou                       jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kingsilhouette.PNG",
        profileImage: "img/img-kingsilhouette.PNG",
    },
    {
        name: "Wealthy Merchant",
        laoName: "",
        opinion: "Neighboring City",
        secondOpinion: "",
        legendValue: "linthong meuangsomphou                       jataka human merchant male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-wealthymerchant.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-wealthymerchant2.PNG",
        thumbnailImage: "img/thumbnail-wealthymerchant.PNG",
        profileImage: "img/img-wealthymerchant.PNG",
    },
    {
        name: "Kalasa",
        laoName: "ກະລາສະ",
        opinion: "Neighboring City , The name \"Kalasa\" does not have a direct translation into Lao because it appears to be of Sanskrit origin rather than a Lao word. In Lao, names from Sanskrit or Pali origins are often transliterated rather than translated directly. Therefore, \"Kalasa\" would likely be written in Lao script as \"ກະລາສະ\" (Ka-la-sa), using characters that phonetically represent the sounds of the name.",
        secondOpinion: "",
        legendValue: "unifying linthong meuangsomphou                       jataka nyak merchant male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kalasa.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kalasa2.PNG",
        thumbnailImage: "img/thumbnail-kalasa.PNG",
        profileImage: "img/img-kalasa.PNG",
        unifying: "dotted",
    },
    {
        name: "Saripon",
        laoName: "",
        opinion: "",
        secondOpinion: "",
        legendValue: "sangsinxay linthong                       jataka beast commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-saripon.PNG",
        thumbnailImageTransparent2: "img/thumbnail-saripon.PNG",
        thumbnailImage: "img/thumbnail-saripon.PNG",
        profileImage: "img/img-saripon.PNG",
    },
    {
        name: "Phaya Thon",
        laoName: "",
        opinion: "",
        secondOpinion: "",
        legendValue: "sangsinxay linthong                       jataka beast phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phayathon.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phayathon2.PNG",
        thumbnailImage: "img/thumbnail-phayathon.PNG",
        profileImage: "img/img-phayathon.PNG",
    },
    {
        name: "A Naga King",
        laoName: "",
        opinion: "",
        secondOpinion: "",
        legendValue: "linthong                       jataka nak phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-anagaking.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-anagaking2.PNG",
        thumbnailImage: "img/thumbnail-anagaking.PNG",
        profileImage: "img/img-anagaking.PNG",
    },
    {
        name: "Phaya Luang",
        laoName: "",
        opinion: "Kandarn",
        secondOpinion: "",
        legendValue: "linthong                       jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phayaluang.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phayaluang2.PNG",
        thumbnailImage: "img/thumbnail-phayaluang.PNG",
        profileImage: "img/img-phayaluang.PNG",
    },
    {
        name: "Nang Mala",
        laoName: "",
        opinion: "Phra Ratsi Den",
        secondOpinion: "",
        legendValue: "linthong                       jataka human commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangmala.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangmala2.PNG",
        thumbnailImage: "img/thumbnail-nangmala.PNG",
        profileImage: "img/img-nangmala.PNG",
    },
    {
        name: "Two Kinnaly",
        laoName: "",
        opinion: "Manikhod Tree Palace",
        secondOpinion: "",
        legendValue: "linthong                       jataka kinnaly commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-twokinnaly.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-twokinnaly2.PNG",
        thumbnailImage: "img/thumbnail-twokinnaly.PNG",
        profileImage: "img/img-twokinnaly.PNG",
    },
    {
        name: "Souvannakhili",
        laoName: "",
        opinion: "Hermit Den",
        secondOpinion: "",
        legendValue: "linthong                       jataka human royal male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-souvannakhili.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-souvannakhili2.PNG",
        thumbnailImage: "img/thumbnail-souvannakhili.PNG",
        profileImage: "img/img-souvannakhili.PNG",
    },
    {
        name: "Babpha",
        laoName: "",
        opinion: "Bapha Palaces",
        secondOpinion: "",
        legendValue: "linthong                       jataka deity commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-babpha.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-babpha2.PNG",
        thumbnailImage: "img/thumbnail-babpha.PNG",
        profileImage: "img/img-babpha.PNG",
        description: "After crossing one ocean, Linthong landed in the palace of a goddess whose name was Babpha. In her former life, she was so dark that no man would look at her. But because of the merits she made, she was reborn as a goddess in a magnificent palace. Babpha helped alleviate Linthong's sadness.",
    
        gallery01: "img/btbgallery01.PNG",
        gallery02: "img/btbgallery02.PNG",

        // shaqpeople, pauling, charles linus pauling, 
        cinematicOneOrigin: "",
        paragraph: "fishing",
        
        playstyle: "transform, sustain",
        attackImage: "img/thumbnail-babpha.PNG",

        ultimateName: "PALACE SLAM",
        ultimateImage: "img/#",

        abilityOneName: "",
        abilityOneImage: "img/#.PNG",

        abilityTwoName: "EVER-PRESENT GIFT",
        abilityTwoImage: "img/#.PNG",

        abilityThreeName: "INFINITY PALACE",
        abilityThreeImage: "img/#.PNG",

        ability: {
            ability1() {
                // Blindsided_DAMAGE. This attack goes straight for the opponent's eyes, blinding them or binding them in a blindfold. This projects her own struggles being partially blind, thus heightening her reliance and responsiveness of her other senses.
                
                partyTwoHealth = partyOneDamage - partyTwoHealth;

                partyTwoHealth = partyTwoHealth - 500;
                partyOneHealth = partyOneHealth - 100;
                partyTwoHealthHTML.innerHTML = partyTwoHealth;
                partyOneHealthHTML.innerHTML = partyOneHealth; // Update the health display
                battleLog.innerHTML += '<br><br><img src="img/dinosauria.jpg" width="700" height="400">';
                inputBattleLog("<br><br><strong> You used your FIRST ability. </strong>");

                return partyTwoHealth;
            },
        
            ability2() {
                // Pity of Shiva_STATUS. Nang Teng One is grateful to Shiva and Visoukam for resurrecting her in the Himaphan Forest. She now devoutly follows and incorporates him into her life and incantations.

            },
        
            ability3() {
                // Heart in a Box. // Zabaniya. 

            },

            abilityUltimate(){
                // Despair Wail // Familial Wail // Crocodile Tears

            }
        }
    },
    {
        name: "Koumphee",
        laoName: "",
        opinion: "Country of a Water Spirit",
        secondOpinion: "",
        legendValue: "linthong                       jataka beast commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-koumphee.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-koumphee2.PNG",
        thumbnailImage: "img/thumbnail-koumphee.PNG",
        profileImage: "img/img-koumphee.PNG",
        description: "Continuing his journey, Linthong arrived in the country of a water spirit named Koumphee. The latter had the power, with an upward movement of his head, to darken the sky. When Linthong approached the spirit to request permission to travel through his country, Koumphee beat the water violently with his tail, making huge waves. Linthong unsheathed his sword and killed him.",
    },
    // {
    //     name: "Commander of the Border Post",
    //     laoName: "",
    //     opinion: "Sisattanak",
    //     secondOpinion: "",
    //     legendValue: "linthong",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-babpha.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-babpha2.PNG",
    //     thumbnailImage: "img/thumbnail-babpha.PNG",
    //     profileImage: "img/img-babpha.PNG",
    // },
    {
        name: "Queen of Sisattanak",
        laoName: "",
        opinion: "Sisattanak ສີສັດຕະນາກ",
        secondOpinion: "",
        legendValue: "linthong                       jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-queensilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-queensilhouette2.PNG",
        thumbnailImage: "img/thumbnail-queensilhouette.PNG",
        profileImage: "img/img-queensilhouette.PNG",
    },
    // {
    //     name: "Rich Merchant for Nang Bouathong",
    //     laoName: "",
    //     opinion: "Sisattanak",
    //     secondOpinion: "",
    //     legendValue: "linthong",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-wealthymerchant.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-wealthymerchant2.PNG",
    //     thumbnailImage: "img/thumbnail-wealthymerchant.PNG",
    //     profileImage: "img/img-wealthymerchant.PNG",
    // },
    {
        name: "Nang Bouathong",
        laoName: "",
        opinion: "Sisattanak",
        secondOpinion: "",
        legendValue: "linthong                       jataka human merchant female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangbouathong.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangbouathong2.PNG",
        thumbnailImage: "img/thumbnail-nangbouathong.PNG",
        profileImage: "img/img-nangbouathong.PNG",
    },
    // {
    //     name: "Rich Merchant for Fongsamout",
    //     laoName: "",
    //     opinion: "Sisattanak",
    //     secondOpinion: "",
    //     legendValue: "linthong",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-wealthymerchant.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-wealthymerchant2.PNG",
    //     thumbnailImage: "img/thumbnail-wealthymerchant.PNG",
    //     profileImage: "img/img-wealthymerchant.PNG",
    // },
    {
        name: "Fongsamout",
        laoName: "",
        opinion: "Sisattanak",
        secondOpinion: "",
        legendValue: "linthong                       jataka human merchant female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-fongsamout.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-fongsamout2.PNG",
        thumbnailImage: "img/thumbnail-fongsamout.PNG",
        profileImage: "img/img-fongsamout.PNG",
    },
    // {
    //     name: "Kalasa Lieutenant",
    //     laoName: "",
    //     opinion: "Sisattanak",
    //     secondOpinion: "",
    //     legendValue: "linthong",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kalasa.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kalasa2.PNG",
    //     thumbnailImage: "img/thumbnail-kalasa.PNG",
    //     profileImage: "img/img-kalasa.PNG",
    // },
    // {
    //     name: "Kalasa's Son",
    //     laoName: "",
    //     opinion: "Sisattanak",
    //     secondOpinion: "",
    //     legendValue: "linthong",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kalasa.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kalasa2.PNG",
    //     thumbnailImage: "img/thumbnail-kalasa.PNG",
    //     profileImage: "img/img-kalasa.PNG",
    // },
    // {
    //     name: "Kalasa's Soldiers",
    //     laoName: "",
    //     opinion: "Sisattanak",
    //     secondOpinion: "",
    //     legendValue: "linthong",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-babpha.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-babpha2.PNG",
    //     thumbnailImage: "img/thumbnail-babpha.PNG",
    //     profileImage: "img/img-babpha.PNG",
    // },
    {
        name: "King of Meuang Somphou",
        laoName: "",
        opinion: "Meuang Somphou",
        secondOpinion: "",
        legendValue: "linthong meuangsomphou                       jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kingsilhouette.PNG",
        profileImage: "img/img-kingsilhouette.PNG",
    },
    {
        name: "Nang Somphou",
        laoName: "ນາງສົມພູ",
        opinion: "Meuang Somphou",
        secondOpinion: "Sisattanak",
        legendValue: "linthong meuangsomphou mostrequested                       jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangsomphou.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangsomphou2.PNG",
        thumbnailImage: "img/thumbnail-nangsomphou.PNG",
        profileImage: "img/img-nangsomphou.PNG",
    },
    // {
    //     name: "Meuang Somphou 30,000 Soldiers",
    //     laoName: "ນາງສົມພູ",
    //     opinion: "Meuang Somphou",
    //     secondOpinion: "",
    //     legendValue: "linthong meuangsomphou",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangsomphou.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangsomphou2.PNG",
    //     thumbnailImage: "img/thumbnail-nangsomphou.PNG",
    //     profileImage: "img/img-nangsomphou.PNG",
    // },
    // {
    //     name: "Meuang Somphou Servants, Musicians",
    //     laoName: "ນາງສົມພູ",
    //     opinion: "Meuang Somphou",
    //     secondOpinion: "",
    //     legendValue: "linthong meuangsomphou",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangsomphou.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangsomphou2.PNG",
    //     thumbnailImage: "img/thumbnail-nangsomphou.PNG",
    //     profileImage: "img/img-nangsomphou.PNG",
    // },
    // {
    //     name: "King of Meuang Somphou Court Astrologer",
    //     laoName: "",
    //     opinion: "Meuang Somphou",
    //     secondOpinion: "",
    //     legendValue: "linthong meuangsomphou",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangsomphou.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangsomphou2.PNG",
    //     thumbnailImage: "img/thumbnail-nangsomphou.PNG",
    //     profileImage: "img/img-nangsomphou.PNG",
    // },
    {
        name: "Queen of Meuang Somphou",
        laoName: "",
        opinion: "Meuang Somphou",
        secondOpinion: "",
        legendValue: "linthong meuangsomphou                       jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-queensilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-queensilhouette2.PNG",
        thumbnailImage: "img/thumbnail-queensilhouette.PNG",
        profileImage: "img/img-queensilhouette.PNG",
    },
    // {
    //     name: "Volunteers, Princes, Noblemen, Brahmans",
    //     laoName: "",
    //     opinion: "Neighboring Kingdoms",
    //     secondOpinion: "",
    //     legendValue: "linthong",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangsomphou.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangsomphou2.PNG",
    //     thumbnailImage: "img/thumbnail-nangsomphou.PNG",
    //     profileImage: "img/img-nangsomphou.PNG",
    // },
    // {
    //     name: "Meuang Somphou Emissaries",
    //     laoName: "",
    //     opinion: "Meuang Somphou",
    //     secondOpinion: "",
    //     legendValue: "linthong meuangsomphou",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangsomphou.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangsomphou2.PNG",
    //     thumbnailImage: "img/thumbnail-nangsomphou.PNG",
    //     profileImage: "img/img-nangsomphou.PNG",
    // },
    // {
    //     name: "King of Meuang Somphou Ministers",
    //     laoName: "",
    //     opinion: "Meuang Somphou",
    //     secondOpinion: "",
    //     legendValue: "linthong meuangsomphou",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangsomphou.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangsomphou2.PNG",
    //     thumbnailImage: "img/thumbnail-nangsomphou.PNG",
    //     profileImage: "img/img-nangsomphou.PNG",
    // },
    // {
    //     name: "Tree Thevada",
    //     laoName: "",
    //     opinion: "",
    //     secondOpinion: "",
    //     legendValue: "linthong",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangsomphou.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangsomphou2.PNG",
    //     thumbnailImage: "img/thumbnail-nangsomphou.PNG",
    //     profileImage: "img/img-nangsomphou.PNG",
    // },
    // {
    //     name: "Kalasa's Evil Spirits",
    //     laoName: "",
    //     opinion: "Meuang Somphou",
    //     secondOpinion: "",
    //     legendValue: "linthong meuangsomphou",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangsomphou.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangsomphou2.PNG",
    //     thumbnailImage: "img/thumbnail-nangsomphou.PNG",
    //     profileImage: "img/img-nangsomphou.PNG",
    // },
    {
        name: "Nyak Berk Khop",
        laoName: "",
        opinion: "",
        secondOpinion: "",
        legendValue: "linthong                        jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyaksilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyaksilhouette2.PNG",
        thumbnailImage: "img/thumbnail-nyaksilhouette.PNG",
        profileImage: "img/img-nyaksilhouette.PNG",
    },
    {
        name: "Nyak Passaed",
        laoName: "",
        opinion: "",
        secondOpinion: "",
        legendValue: "linthong                        jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyaksilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyaksilhouette2.PNG",
        thumbnailImage: "img/thumbnail-nyaksilhouette.PNG",
        profileImage: "img/img-nyaksilhouette.PNG",
    },
    {
        name: "Nyak Phi Fa Heua",
        laoName: "",
        opinion: "",
        secondOpinion: "",
        legendValue: "linthong                        jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyaksilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyaksilhouette2.PNG",
        thumbnailImage: "img/thumbnail-nyaksilhouette.PNG",
        profileImage: "img/img-nyaksilhouette.PNG",
    },


    {
        name: "Thao Khamphrapraikaeo",
        laoName: "",
        opinion: "City",
        secondOpinion: "",
        legendValue: "unifying khamphrakaikaeo mostrequested                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-khamphrapraikaeo.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-khamphrapraikaeo2.PNG",
        thumbnailImage: "img/thumbnail-khamphrapraikaeo.PNG",
        profileImage: "img/img-khamphrapraikaeo.PNG",
        unifying: "dotted",
    },
    {
        name: "Thao Khamphrakaikaeo Father",
        laoName: "",
        opinion: "City",
        secondOpinion: "",
        status: "gray",
        legendValue: "khamphrakaikaeo                        jataka human commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-father.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-father2.PNG",
        thumbnailImage: "img/thumbnail-father.PNG",
        profileImage: "img/thumbnail-father.PNG",
    },
    {
        name: "Thao Khamphrakaikaeo Mother",
        laoName: "",
        opinion: "Another City",
        secondOpinion: "",
        status: "gray",
        legendValue: "khamphrakaikaeo                        jataka human commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-mother.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-mother2.PNG",
        thumbnailImage: "img/thumbnail-mother.PNG",
        profileImage: "img/thumbnail-mother.PNG",
    },
    // {
    //     name: "Man With A Rooster",
    //     laoName: "",
    //     opinion: "Another City",
    //     secondOpinion: "",
    //     status: "",
    //     legendValue: "khamphrakaikaeo",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-#.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-#2.PNG",
    //     thumbnailImage: "img/thumbnail-#.PNG",
    //     profileImage: "img/img-#.PNG",
    // },
    {
        name: "Nang Sida, A Naga Princess",
        laoName: "ສີດາ",
        opinion: "A Naga City",
        secondOpinion: "",
        status: "",
        legendValue: "khamphrakaikaeo                        jataka nak royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangsida.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangsida2.PNG",
        thumbnailImage: "img/thumbnail-nangsida.PNG",
        profileImage: "img/img-nangsida.PNG",
    },
    {
        name: "King of Another City",
        laoName: "",
        opinion: "Another City",
        secondOpinion: "",
        status: "",
        legendValue: "khamphrakaikaeo                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kingsilhouette.PNG",
        profileImage: "img/img-kingsilhouette.PNG",
    },
    {
        name: "Nang Sida Father",
        laoName: "ສີດາ",
        opinion: "A Naga City",
        secondOpinion: "",
        status: "",
        legendValue: "khamphrakaikaeo                        jataka nak royal male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-father.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-father2.PNG",
        thumbnailImage: "img/thumbnail-father.PNG",
        profileImage: "img/img-father.PNG",
    },
    {
        name: "King of Another City's Men",
        laoName: "",
        opinion: "Another City",
        secondOpinion: "",
        status: "",
        legendValue: "khamphrakaikaeo                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kingsilhouette.PNG",
        profileImage: "img/img-kingsilhouette.PNG",
    },
    {
        name: "Amkha",
        laoName: "",
        opinion: "Thao Kandan Kingdom",
        secondOpinion: "",
        status: "",
        legendValue: "khamphrakaikaeo                        jataka nyak noble royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangamkha.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangamkha2.PNG",
        thumbnailImage: "img/thumbnail-nangamkha.PNG",
        profileImage: "img/img-nangamkha.PNG",
    },
    {
        name: "Thao Kandan",
        laoName: "",
        opinion: "Thao Kandan Kingdom",
        secondOpinion: "",
        status: "",
        legendValue: "khamphrakaikaeo                        jataka human merchant male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-thaokandan.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-thaokandan2.PNG",
        thumbnailImage: "img/thumbnail-thaokandan.PNG",
        profileImage: "img/img-thaokandan.PNG",
    },
    // {
    //     name: "Ketsandon City People",
    //     laoName: "",
    //     opinion: "Ketsandon City",
    //     secondOpinion: "",
    //     status: "",
    //     legendValue: "khamphrakaikaeo",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-#.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-#2.PNG",
    //     thumbnailImage: "img/thumbnail-#.PNG",
    //     profileImage: "img/img-#.PNG",
    // },
    {
        name: "King of Ketsandon City",
        laoName: "",
        opinion: "Ketsandon City",
        secondOpinion: "",
        status: "",
        legendValue: "khamphrakaikaeo                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kingsilhouette.PNG",
        profileImage: "img/img-kingsilhouette.PNG",
    },
    {
        name: "King of Phachuang City",
        laoName: "",
        opinion: "Phachuang City",
        secondOpinion: "",
        status: "",
        legendValue: "khamphrakaikaeo                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kingsilhouette.PNG",
        profileImage: "img/img-kingsilhouette.PNG",
    },
    {
        name: "Nang Chanta",
        laoName: "",
        opinion: "Phachuang City",
        secondOpinion: "",
        status: "",
        legendValue: "khamphrakaikaeo                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangchantha.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangchantha2.PNG",
        thumbnailImage: "img/thumbnail-nangchantha.PNG",
        profileImage: "img/img-nangchantha.PNG",
    },
    // {
    //     name: "Phachuang City Medicine Men",
    //     laoName: "",
    //     opinion: "Phachuang City",
    //     secondOpinion: "",
    //     status: "",
    //     legendValue: "khamphrakaikaeo",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-#.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-#2.PNG",
    //     thumbnailImage: "img/thumbnail-#.PNG",
    //     profileImage: "img/img-#.PNG",
    // },
    // {
    //     name: "Phachuang City Astrologer",
    //     laoName: "",
    //     opinion: "Phachuang City",
    //     secondOpinion: "",
    //     status: "",
    //     legendValue: "khamphrakaikaeo",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-#.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-#2.PNG",
    //     thumbnailImage: "img/thumbnail-#.PNG",
    //     profileImage: "img/img-#.PNG",
    // },
    // {
    //     name: "Another City Army",
    //     laoName: "",
    //     opinion: "Another City",
    //     secondOpinion: "",
    //     status: "",
    //     legendValue: "khamphrakaikaeo",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-#.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-#2.PNG",
    //     thumbnailImage: "img/thumbnail-#.PNG",
    //     profileImage: "img/img-#.PNG",
    // },
    {
        name: "Canthaphanit",
        laoName: "ຈັນທະພານິດ",
        opinion: "",
        legendValue: "canthaphanit                        folklore human merchant male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-canthaphanit.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-canthaphanit2.PNG",
        thumbnailImage: "img/thumbnail-canthaphanit.PNG",
        profileImage: "img/img-canthaphanit.PNG",
        //candaphanij
    },
    {
        name: "Phaya Mod",
        laoName: "ພະຍາມົດ",
        opinion: "",
        legendValue: "                        folklore beast phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phayamod.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phayamod2.PNG",
        thumbnailImage: "img/thumbnail-phayamod.PNG",
        profileImage: "img/img-phayamod.PNG",
    },
    {
        name: "King of the Scorpions",
        laoName: "ພຣະເຈົ້າ ແມງງອດ",
        opinion: "",
        legendValue: "                        folklore beast phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingofthescorpions.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingofthescorpions2.PNG",
        thumbnailImage: "img/thumbnail-kingofthescorpions.PNG",
        profileImage: "img/img-kingofthescorpions.PNG",
    },
    // {
    //     name: "Goddess of Luck",
    //     laoName: "ນາງໂຊກ!!!",
    //     opinion: "",
    //     legendValue: "",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-aichethai.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-aichethai2.PNG",
    //     thumbnailImage: "img/thumbnail-aichethai.PNG",
    //     profileImage: "img/img-aichethai.PNG",
    // },
    
    {
        name: "Nang Teng One",
        laoName: "ນາງແຕ່ງອ່ອນ",
        residence: "Meuang Kosee",
        legendValue: "nangtengone                        jataka beast royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangtengone.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangtengone2.PNG",
        thumbnailImage: "img/thumbnail-nangtengone2.PNG",
        profileImage: "img/img-nangtengone.PNG",
        description: "",
        galleryImage1: "",
        galleryImage2: "",
        galleryImage3: "",

        dialogue1: "You know what helps food go down? Celestial water.",
        dialogue2: "I would be angry with her, if my dear husband had been as angry as I.",
        dialogue3: "Her face is very pretty. She doesn't believe me, for some reason.",

        health: 5000,
        damage: 70,


        ability: {
            ability1() {
                // Blindsided_DAMAGE. This attack goes straight for the opponent's eyes, blinding them or binding them in a blindfold. This projects her own struggles being partially blind, thus heightening her reliance and responsiveness of her other senses.
                
                partyTwoHealth = partyOneDamage - partyTwoHealth;

                partyTwoHealth = partyTwoHealth - 500;
                partyOneHealth = partyOneHealth - 100;
                partyTwoHealthHTML.innerHTML = partyTwoHealth;
                partyOneHealthHTML.innerHTML = partyOneHealth; // Update the health display
                battleLog.innerHTML += '<br><br><img src="img/dinosauria.jpg" width="700" height="400">';
                inputBattleLog("<br><br><strong> You used your FIRST ability. </strong>");

                return partyTwoHealth;
            },
        
            ability2() {
                // Pity of Shiva_STATUS. Nang Teng One is grateful to Shiva and Visoukam for resurrecting her in the Himaphan Forest. She now devoutly follows and incorporates him into her life and incantations.

            },
        
            ability3() {
                // Heart in a Box. // Zabaniya. 

            },

            abilityUltimate(){
                // Despair Wail // Familial Wail // Crocodile Tears

            }
        }

    },
    {
        name: "Nang Teng One",
        laoName: "ນາງແຕ່ງອ່ອນ",
        opinion: "Meuang Kosee",
        legendValue: "nangtengone mostrequested                        jataka beast royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangtengone.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangtengone2.PNG",
        thumbnailImage: "img/thumbnail-nangtengone2.PNG",
        profileImage: "img/img-nangtengone.PNG",
        raptor: "img/raptor-nangtengone.PNG",
        status: "lime",
    },
    {
        name: "Phaya Kosing Korat, King of Meuang Kosee",
        laoName: "",
        opinion: "Meuang Kosee",
        legendValue: "nangtengone                        jataka beast phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kingsilhouette.PNG",
        profileImage: "img/img-kingsilhouette.PNG",
        status: "lime",
    },
    {
        name: "Thao Mahavong",
        laoName: "ມະຫາວົງ",
        opinion: "Meuang Kosee",
        legendValue: "nangtengone                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-thaomahavong.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-thaomahavong2.PNG",
        thumbnailImage: "img/thumbnail-thaomahavong.PNG",
        profileImage: "img/img-thaomahavong.PNG",
        status: "lime",
    },
    // {
    //     name: "Mahavong Retinue of Palace Officials and Servants",
    //     laoName: "ມະຫາວົງ",
    //     opinion: "Meuang Kosee",
    //     legendValue: "nangtengone",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-mahavong.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-mahavong2.PNG",
    //     thumbnailImage: "img/thumbnail-mahavong.PNG",
    //     profileImage: "img/img-mahavong.PNG",
    //     status: "lime",
    // },
    // {
    //     name: "Mahavong's Four Attendants",
    //     laoName: "ມະຫາວົງ",
    //     opinion: "Meuang Kosee",
    //     legendValue: "nangtengone",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-mahavong.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-mahavong2.PNG",
    //     thumbnailImage: "img/thumbnail-mahavong.PNG",
    //     profileImage: "img/img-mahavong.PNG",
    //     status: "lime",
    // },
    // {
    //     name: "Phaya Kosing Delegation of 3,000 Court Officials, Soldiers, and Servants, and Elephant Hunterse",
    //     laoName: "",
    //     opinion: "Meuang Kosee",
    //     legendValue: "nangtengone",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-phayakoumpha.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-phayakoumpha2.PNG",
    //     thumbnailImage: "img/thumbnail-phayakoumpha.PNG",
    //     profileImage: "img/img-phayakoumpha.PNG",
    //     status: "lime",
    // },
    {
        name: "Queen of Meuang Kosee",
        laoName: "",
        opinion: "Meuang Kosee",
        legendValue: "nangtengone                        jataka beast royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-queensilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-queensilhouette2.PNG",
        thumbnailImage: "img/thumbnail-queensilhouette.PNG",
        profileImage: "img/img-queensilhouette.PNG",
        status: "lime",
    },
    {
        name: "Vayaka",
        laoName: "",
        opinion: "Meuang Kosee",
        legendValue: "nangtengone fireresistance                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-vayaka.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-vayaka2.PNG",
        thumbnailImage: "img/thumbnail-vayaka.PNG",
        profileImage: "img/img-vayaka.PNG",
        status: "lime",

        dialogue2: "Vayaka, the chief lady-in-waiting, who had five daughters of her own and had entertained dreams of having them all married to the King, contrived a plot to discredit the queen. When [Nang Teng One] had a baby, Vayaka tied a cloth over her eyes. The queen did not see her baby taken away and put in a jar while a baby crocodile was substituted for him. When the king came back after capturing the white elephant, Vayaka presented him with a little crocodile on a gold plate, saying it had been delivered by the queen. King Mahavong entered the Queen's chamber in a terrible rage and ordered her out of the palace immediately.",


        damage: 100,
        health: 5000,
        attackImage: "img/thumbnail-sinxay.PNG",

        ultimateName: "CHILD OF INDRA",
        ultimateImage: "",

        abilityOneName: "FROZEN STRIKE",
        abilityOneImage: "img/gallery-sinxay-03.PNG",
        abilityOneDescription: "Vayaka, the chief lady-in-waiting, who had five daughters of her own and had entertained dreams of having them all married to the King, contrived a plot to discredit the queen. When [Nang Teng One] had a baby, Vayaka tied a cloth over her eyes. The queen did not see her baby taken away and put in a jar while a baby crocodile was substituted for him. When the king came back after capturing the white elephant, Vayaka presented him with a little crocodile on a gold plate, saying it had been delivered by the queen. King Mahavong entered the Queen's chamber in a terrible rage and ordered her out of the palace immediately.",
        dialogueOne: "",

        abilityTwoName: "BLINDING WAVE",
        abilityTwoImage: "img/gallery-sinxay-01.PNG",
        descriptionTwo: "",
        dialogueTwo: "",

        abilityThreeName: "BANE OF GIANTS",
        abilityThreeImage: "img/storyboard2-50.PNG",
        descriptionThree: "",
        dialogueThree: "",

        ability: {
            ability1() {
                // Blindsided_DAMAGE. This attack goes straight for the opponent's eyes, blinding them or binding them in a blindfold. This projects her own struggles being partially blind, thus heightening her reliance and responsiveness of her other senses.
                inputBattleLog('My name is Sinxay, and there is nothing that can compare with my arrow.<br>');
                switch(true){
                    case (partyTwoHealth <= trueZero):
                        youWin();
                        break;
                    case (partyOneHealth <= trueZero):
                        youLose();
                        break;
                    default:
                        partyOneDamage = partyOneDamage + partyOneDamage*0.2;
                        partyOneDamage = Math.round(partyOneDamage);
                        partyTwoHealth = partyTwoHealth - partyOneDamage;
    
                        let intervalId = setInterval(partyOneDamage, 1000);  // Run every second
                        // Stop the function after 8 seconds
                        setTimeout(() => {
                            clearInterval(intervalId);
                            partyOneDamage = initialPartyOneDamage;
                            }, 8000);  // Stop after 8000 milliseconds (8 seconds)
    
                        updateHTML();
                        battleLog.innerHTML += '<img src="img/gallery-sinxay-03.PNG"><br>';
                        inputBattleLog("<strong> You used your FIRST ability. </strong><br>");
                        inputBattleLog("<strong> You dealt " + partyOneDamage + " damage! </strong> <br>");
                        break;
                }
            },
        
            ability2() {
                // Pity of Shiva_STATUS. Nang Teng One is grateful to Shiva and Visoukam for resurrecting her in the Himaphan Forest. She now devoutly follows and incorporates him into her life and incantations.
                inputBattleLog('My name is Sinxay, and there is nothing that can compare with my arrow.<br>');
                switch(true){
                    case (partyTwoHealth <= trueZero):
                        youWin();
                        break;
                    case (partyOneHealth <= trueZero):
                        youLose();
                        break;
                    default:
                        partyOneDamage = partyOneDamage + partyOneDamage*0.2;
                        partyOneDamage = Math.round(partyOneDamage);
                        partyTwoHealth = partyTwoHealth - partyOneDamage;
    
                        let intervalId = setInterval(partyOneDamage, 1000);  // Run every second
                        // Stop the function after 8 seconds
                        setTimeout(() => {
                            clearInterval(intervalId);
                            partyOneDamage = initialPartyOneDamage;
                            }, 8000);  // Stop after 8000 milliseconds (8 seconds)
    
                        updateHTML();
                        battleLog.innerHTML += '<img src="img/gallery-sinxay-01.PNG"><br>';
                        inputBattleLog("<strong> You used your FIRST ability. </strong><br>");
                        inputBattleLog("<strong> You dealt " + partyOneDamage + " damage! </strong> <br>");
                        break;
                }
            },
        
            ability3() {
                // Heart in a Box. // Zabaniya. 
                inputBattleLog('My name is Sinxay, and there is nothing that can compare with my arrow.<br>');
                switch(true){
                    case (partyTwoHealth <= trueZero):
                        youWin();
                        break;
                    case (partyOneHealth <= trueZero):
                        youLose();
                        break;
                    default:
                        partyOneDamage = partyOneDamage + partyOneDamage*0.2;
                        partyOneDamage = Math.round(partyOneDamage);
                        partyTwoHealth = partyTwoHealth - partyOneDamage;
    
                        let intervalId = setInterval(partyOneDamage, 1000);  // Run every second
                        // Stop the function after 8 seconds
                        setTimeout(() => {
                            clearInterval(intervalId);
                            partyOneDamage = initialPartyOneDamage;
                            }, 8000);  // Stop after 8000 milliseconds (8 seconds)
    
                        updateHTML();
                        battleLog.innerHTML += '<img src="img/storyboard2-50.PNG"><br>';
                        inputBattleLog("<strong> You used your FIRST ability. </strong><br>");
                        inputBattleLog("<strong> You dealt " + partyOneDamage + " damage! </strong> <br>");
                        break;
                }
            },

            abilityUltimate(){
                // Despair Wail // Familial Wail // Crocodile Tears

            }
        }

    },
    {
        name: "Phaya Koumphi",
        laoName: "ພະຍາກຸມພີ",
        opinion: "Kingdom of Phaya Koumphi",
        legendValue: "nangtengone                        jataka beast phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phayakoumphi.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phayakoumphi2.PNG",
        thumbnailImage: "img/thumbnail-phayakoumphi.PNG",
        profileImage: "img/img-phayakoumphi.PNG",
        status: "darkgreen",
    },
    {
        name: "Korakan",
        laoName: "",
        opinion: "Kingdom of Phaya Koumphi",
        legendValue: "nangtengone                        jataka beast royal male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-korakan.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-korakan2.PNG",
        thumbnailImage: "img/thumbnail-korakan.PNG",
        profileImage: "img/img-korakan.PNG",
        status: "darkgreen",
    },
    // {
    //     name: "Korakan's 60,000 Crocodile Army",
    //     laoName: "",
    //     opinion: "Kingdom of Phaya Koumphi",
    //     legendValue: "nangtengone",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-phayakoumpha.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-phayakoumpha2.PNG",
    //     thumbnailImage: "img/thumbnail-phayakoumpha.PNG",
    //     profileImage: "img/img-phayakoumpha.PNG",
    //     status: "darkgreen",
    // },
    {
        name: "Phaya Mahachak, King of the Nyaks",
        laoName: "",
        opinion: "Kingdom of Meuang Nanthapharn",
        legendValue: "nangtengone                        jataka nyak phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phayamahachak.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phayamahachak2.PNG",
        thumbnailImage: "img/thumbnail-phayamahachak.PNG",
        profileImage: "img/img-phayamahachak.PNG",
        status: "gray",
    },
    {
        name: "Phaya Koumpha",
        laoName: "ພະຍາກຸມພາ!!!",
        opinion: "Kingdom of Meuang Nanthapharn",
        legendValue: "nangtengone                        jataka beast phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phayakoumpha.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phayakoumpha2.PNG",
        thumbnailImage: "img/thumbnail-phayakoumpha.PNG",
        profileImage: "img/img-phayakoumpha.PNG",
        status: "tan",
    },
    // {
    //     name: "Vayaka's Five Daughters",
    //     laoName: "",
    //     opinion: "Meuang Kosee",
    //     legendValue: "nangtengone",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-phayakoumpha.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-phayakoumpha2.PNG",
    //     thumbnailImage: "img/thumbnail-phayakoumpha.PNG",
    //     profileImage: "img/img-phayakoumpha.PNG",
    //     status: "lime",
    // },
    // {
    //     name: "Vayaka's Accomplices",
    //     laoName: "",
    //     opinion: "Meuang Kosee",
    //     legendValue: "nangtengone",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-phayakoumpha.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-phayakoumpha2.PNG",
    //     thumbnailImage: "img/thumbnail-phayakoumpha.PNG",
    //     profileImage: "img/img-phayakoumpha.PNG",
    //     status: "lime",
    // },
    // {
    //     name: "Meuang Kosee 10,000 Inhabitants Including Women and Children",
    //     laoName: "",
    //     opinion: "Meuang Kosee",
    //     legendValue: "nangtengone",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-phayakoumpha.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-phayakoumpha2.PNG",
    //     thumbnailImage: "img/thumbnail-phayakoumpha.PNG",
    //     profileImage: "img/img-phayakoumpha.PNG",
    //     status: "lime",
    // },
    // {
    //     name: "Meuang Kosee Stable Boy",
    //     laoName: "",
    //     opinion: "Meuang Kosee",
    //     legendValue: "nangtengone",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-phayakoumpha.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-phayakoumpha2.PNG",
    //     thumbnailImage: "img/thumbnail-phayakoumpha.PNG",
    //     profileImage: "img/img-phayakoumpha.PNG",
    //     status: "lime",
    // },
    {
        name: "Soulinyongnyarn",
        laoName: "",
        opinion: "Meuang Kosee",
        legendValue: "unifying nangtengone mostrequested                        jataka human beast phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-souliyongnyarn.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-souliyongnyarn2.PNG",
        thumbnailImage: "img/thumbnail-souliyongnyarn.PNG",
        profileImage: "img/img-souliyongnyarn.PNG",
        // status: "lime",
        // unifying: "dotted",

        damage: 100,
        health: 5000,
        attackImage: "img/thumbnail-sinxay.PNG",

        ultimateName: "CHILD OF INDRA",
        ultimateImage: "",

        abilityOneName: "FROZEN STRIKE",
        abilityOneImage: "img/gallery-sinxay-03.PNG",
        description: "",
        dialogueOne: "",

        abilityTwoName: "BLINDING WAVE",
        abilityTwoImage: "img/gallery-sinxay-01.PNG",
        descriptionTwo: "",
        dialogueTwo: "",

        abilityThreeName: "BANE OF GIANTS",
        abilityThreeImage: "img/storyboard2-50.PNG",
        descriptionThree: "",
        dialogueThree: "",

        ability: {
            ability1() {
                // Blindsided_DAMAGE. This attack goes straight for the opponent's eyes, blinding them or binding them in a blindfold. This projects her own struggles being partially blind, thus heightening her reliance and responsiveness of her other senses.
                inputBattleLog('My name is Sinxay, and there is nothing that can compare with my arrow.<br>');
                switch(true){
                    case (partyTwoHealth <= trueZero):
                        youWin();
                        break;
                    case (partyOneHealth <= trueZero):
                        youLose();
                        break;
                    default:
                        partyOneDamage = partyOneDamage + partyOneDamage*0.2;
                        partyOneDamage = Math.round(partyOneDamage);
                        partyTwoHealth = partyTwoHealth - partyOneDamage;
    
                        let intervalId = setInterval(partyOneDamage, 1000);  // Run every second
                        // Stop the function after 8 seconds
                        setTimeout(() => {
                            clearInterval(intervalId);
                            partyOneDamage = initialPartyOneDamage;
                            }, 8000);  // Stop after 8000 milliseconds (8 seconds)
    
                        updateHTML();
                        battleLog.innerHTML += '<img src="img/gallery-sinxay-03.PNG"><br>';
                        inputBattleLog("<strong> You used your FIRST ability. </strong><br>");
                        inputBattleLog("<strong> You dealt " + partyOneDamage + " damage! </strong> <br>");
                        break;
                }
            },
        
            ability2() {
                // Pity of Shiva_STATUS. Nang Teng One is grateful to Shiva and Visoukam for resurrecting her in the Himaphan Forest. She now devoutly follows and incorporates him into her life and incantations.
                inputBattleLog('My name is Sinxay, and there is nothing that can compare with my arrow.<br>');
                switch(true){
                    case (partyTwoHealth <= trueZero):
                        youWin();
                        break;
                    case (partyOneHealth <= trueZero):
                        youLose();
                        break;
                    default:
                        partyOneDamage = partyOneDamage + partyOneDamage*0.2;
                        partyOneDamage = Math.round(partyOneDamage);
                        partyTwoHealth = partyTwoHealth - partyOneDamage;
    
                        let intervalId = setInterval(partyOneDamage, 1000);  // Run every second
                        // Stop the function after 8 seconds
                        setTimeout(() => {
                            clearInterval(intervalId);
                            partyOneDamage = initialPartyOneDamage;
                            }, 8000);  // Stop after 8000 milliseconds (8 seconds)
    
                        updateHTML();
                        battleLog.innerHTML += '<img src="img/gallery-sinxay-01.PNG"><br>';
                        inputBattleLog("<strong> You used your FIRST ability. </strong><br>");
                        inputBattleLog("<strong> You dealt " + partyOneDamage + " damage! </strong> <br>");
                        break;
                }
            },
        
            ability3() {
                // Heart in a Box. // Zabaniya. 
                inputBattleLog('My name is Sinxay, and there is nothing that can compare with my arrow.<br>');
                switch(true){
                    case (partyTwoHealth <= trueZero):
                        youWin();
                        break;
                    case (partyOneHealth <= trueZero):
                        youLose();
                        break;
                    default:
                        partyOneDamage = partyOneDamage + partyOneDamage*0.2;
                        partyOneDamage = Math.round(partyOneDamage);
                        partyTwoHealth = partyTwoHealth - partyOneDamage;
    
                        let intervalId = setInterval(partyOneDamage, 1000);  // Run every second
                        // Stop the function after 8 seconds
                        setTimeout(() => {
                            clearInterval(intervalId);
                            partyOneDamage = initialPartyOneDamage;
                            }, 8000);  // Stop after 8000 milliseconds (8 seconds)
    
                        updateHTML();
                        battleLog.innerHTML += '<img src="img/storyboard2-50.PNG"><br>';
                        inputBattleLog("<strong> You used your FIRST ability. </strong><br>");
                        inputBattleLog("<strong> You dealt " + partyOneDamage + " damage! </strong> <br>");
                        break;
                }
            },

            abilityUltimate(){
                // Despair Wail // Familial Wail // Crocodile Tears

            }
        }
    },
    {
        name: "Meuang Kosee Stable Boy, Smashed Face",
        laoName: "",
        opinion: "Meuang Kosee",
        legendValue: "nangtengone                        jataka human commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-stableboy.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-stableboy2.PNG",
        thumbnailImage: "img/thumbnail-stableboy.PNG",
        profileImage: "img/thumbnail-stableboy.PNG",
        status: "lime",
    },
    // {
    //     name: "Meuang Kosee Horse",
    //     laoName: "",
    //     opinion: "Meuang Kosee",
    //     legendValue: "nangtengone",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-phayakoumpha.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-phayakoumpha2.PNG",
    //     thumbnailImage: "img/thumbnail-phayakoumpha.PNG",
    //     profileImage: "img/img-phayakoumpha.PNG",
    //     status: "lime",
    // },
    // {
    //     name: "Thao Mahavong Generals",
    //     laoName: "",
    //     opinion: "Meuang Kosee",
    //     legendValue: "nangtengone",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-phayakoumpha.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-phayakoumpha2.PNG",
    //     thumbnailImage: "img/thumbnail-phayakoumpha.PNG",
    //     profileImage: "img/img-phayakoumpha.PNG",
    //     status: "lime",
    // },
    // {
    //     name: "Soulinyongnyarn's Guardian Spirit",
    //     laoName: "",
    //     opinion: "Meuang Kosee",
    //     legendValue: "nangtengone",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-phayakoumpha.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-phayakoumpha2.PNG",
    //     thumbnailImage: "img/thumbnail-phayakoumpha.PNG",
    //     profileImage: "img/img-phayakoumpha.PNG",
    //     status: "lime",
    // },
    // {
    //     name: "Celestiai Throng of Deities",
    //     laoName: "",
    //     opinion: "Kingdom of Kosee",
    //     legendValue: "nangtengone",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-phayakoumpha.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-phayakoumpha2.PNG",
    //     thumbnailImage: "img/thumbnail-phayakoumpha.PNG",
    //     profileImage: "img/img-phayakoumpha.PNG",
    //     status: "lime",
    // },
    {
        name: "Nang Pathoumma Kaysorn",
        laoName: "",
        opinion: "Kingdom of Meuang Nanthapharn",
        legendValue: "nangtengone                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangpathoummakaysorn.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangpathoummakaysorn2.PNG",
        thumbnailImage: "img/thumbnail-nangpathoummakaysorn.PNG",
        profileImage: "img/img-nangpathoummakaysorn.PNG",
        status: "lime",
    },
    {
        name: "Nang Kaenchandaeng",
        laoName: "",
        opinion: "Kingdom of Meuang Nanthapharn",
        legendValue: "nangtengone                        jataka deity royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangkaenchandaeng.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaenchandaeng2.PNG",
        thumbnailImage: "img/thumbnail-nangkaenchandaeng.PNG",
        profileImage: "img/img-nangkaenchandaeng.PNG",
        status: "lime",
    },
    {
        name: "Queen Sounthong",
        laoName: "",
        opinion: "Kingdom of Meuang Nanthapharn",
        legendValue: "nangtengone                        jataka nyak royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangsounthong.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangsounthong2.PNG",
        thumbnailImage: "img/thumbnail-nangsounthong.PNG",
        profileImage: "img/img-nangsounthong.PNG",
        status: "tan",
    },
    {
        name: "Visoukam",
        laoName: "",
        opinion: "",
        legendValue: "sangsinxay nangtengone                        jataka deity royal male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-visoukam.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-visoukam2.PNG",
        thumbnailImage: "img/thumbnail-visoukam.PNG",
        profileImage: "img/img-visoukam.PNG",
        status: "lightblue",
    },
    {
        name: "Saravan",
        laoName: "",
        opinion: "Land of Saravan",
        legendValue: "nangtengone                        jataka nyak phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsoulivong.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsoulivong2.PNG",
        thumbnailImage: "img/thumbnail-kingsoulivong.PNG",
        profileImage: "img/img-kingsoulivong.PNG",
    },
    {
        name: "Narai, the Collector",
        laoName: "",
        opinion: "",
        legendValue: "nangtengone                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-manathalek.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-manathalek2.PNG",
        thumbnailImage: "img/thumbnail-manathalek.PNG",
        profileImage: "img/img-manathalek.PNG",
    },












    {
        name: "Phaya Outthoum",
        laoName: "",
        opinion: "",
        legendValue: "chanthakhat                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kingsilhouette.PNG",
        profileImage: "img/img-kingsilhouette.PNG",
    },
    {
        name: "Souryakhat",
        laoName: "ສຸຣິຍະຄາດ",
        opinion: "",
        legendValue: "chanthakhat                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-souryakhat.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-souryakhat2.PNG",
        thumbnailImage: "img/thumbnail-souryakhat.PNG",
        profileImage: "img/img-souryakhat.PNG",



        abilityOneName: "RESSURECTION",
        ability: {
            ability1() {
                // Blindsided_DAMAGE. This attack goes straight for the opponent's eyes, blinding them or binding them in a blindfold. This projects her own struggles being partially blind, thus heightening her reliance and responsiveness of her other senses.
                partyTwoHealth = partyOneDamage - partyTwoHealth;

                partyTwoHealth = partyTwoHealth - 0;
                partyOneHealth = partyOneHealth - 0;
                partyTwoHealthHTML.innerHTML = partyTwoHealth;
                partyOneHealthHTML.innerHTML = partyOneHealth; // Update the health display
                battleLog.innerHTML += '<br><br><img src="img/img-souryakhat.PNG" width="700" height="400">';
                battleLog.innerHTML += '<br><br><video src="img/btbmedia1.mp4" width="700" height="400">';
                inputBattleLog("<br><br><strong> You used your FIRST ability. </strong>");

                return partyTwoHealth;
            },
        
            ability2() {
                // Pity of Shiva_STATUS. Nang Teng One is grateful to Shiva and Visoukam for resurrecting her in the Himaphan Forest. She now devoutly follows and incorporates him into her life and incantations.

            },
        
            ability3() {
                // Heart in a Box. // Zabaniya. 

            },

            abilityUltimate(){
                // Despair Wail // Familial Wail // Crocodile Tears

            }
        }
    },
    {
        name: "Chanthakhat",
        laoName: "ຈັນທາຄາດ",
        opinion: "",
        legendValue: "chanthakhat                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-chanthakhat.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-chanthakhat2.PNG",
        thumbnailImage: "img/thumbnail-chanthakhat.PNG",
        profileImage: "img/img-chanthakhat.PNG",
    },
    {
        name: "Nang Nyak",
        laoName: "",
        opinion: "",
        legendValue: "chanthakhat                        jataka nyak commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangnyak.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangnyak2.PNG",
        thumbnailImage: "img/thumbnail-nangnyak.PNG",
        profileImage: "img/img-nangnyak.PNG",
    },
    {
        name: "Nang Soutsadee",
        laoName: "",
        opinion: "",
        legendValue: "chanthakhat                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangsoutsadee.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangsoutsadee2.PNG",
        thumbnailImage: "img/thumbnail-nangsoutsadee.PNG",
        profileImage: "img/img-nangsoutsadee.PNG",
    },
    {
        name: "King Phommachak",
        laoName: "",
        opinion: "",
        legendValue: "chanthakhat                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kingsilhouette.PNG",
        profileImage: "img/img-kingsilhouette.PNG",
    },
    {
        name: "Nang Thevadee Songka",
        laoName: "",
        opinion: "",
        legendValue: "chanthakhat                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangthevadeesongka.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangthevadeesongka2.PNG",
        thumbnailImage: "img/thumbnail-nangthevadeesongka.PNG",
        profileImage: "img/img-nangthevadeesongka.PNG",
    },















    {
        name: "Phoutthasaen",
        laoName: "ພູທະແຊນ",
        opinion: "https://www.pha-tad-ke.com/visit/our-history/",
        legendValue: "phouthaophounang thaophoutthasaen mostrequested                        jataka human royal male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phoutthasaen.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phoutthasaen2.PNG",
        thumbnailImage: "img/thumbnail-phoutthasaen.PNG",
        profileImage: "img/img-phoutthasaen.PNG",
        profileNotes: "img/imgnotes-phoutthasaen.PNG",
    },
    {
        name: "Nang La",
        laoName: "ນາງ ລາ",
        opinion: "",
        legendValue: "phouthaophounang thaophoutthasaen                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangla.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangla2.PNG",
        thumbnailImage: "img/thumbnail-nangla.PNG",
        profileImage: "img/img-nangla.PNG",
    },
    {
        name: "Nyakinee Sounthara",
        laoName: "",
        opinion: "https://www.pha-tad-ke.com/visit/our-history/",
        legendValue: "phouthaophounang thaophoutthasaen mostrequested                        jataka nyak royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyakineesounthara.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyakineesounthara2.PNG",
        thumbnailImage: "img/thumbnail-nyakineesounthara.PNG",
        profileImage: "img/img-nyakineesounthara.PNG",
        profileNotes: "img/imgnotes-nyakineesounthara.PNG",
    },
    {
        name: "Nyakinee Kang Hi",
        laoName: "",
        opinion: "https://www.pha-tad-ke.com/visit/our-history/",
        legendValue: "phouthaophounang thaophoutthasaen mostrequested                        jataka nyak commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nyakineekanghi.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nyakineekanghi2.PNG",
        thumbnailImage: "img/thumbnail-nyakineekanghi.PNG",
        profileImage: "img/img-nyakineekanghi.PNG",
        profileNotes: "img/imgnotes-nyakineekanghi.PNG",
    },
    {
        name: "Phaya Ngua",
        laoName: "ພະຍາ ງົວ",
        opinion: "",
        legendValue: "phouthaophounang thaophoutthasaen                        jataka beast phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phayangua.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phayangua2.PNG",
        thumbnailImage: "img/thumbnail-phayangua.PNG",
        profileImage: "img/img-phayangua.PNG",
    },
    {
        name: "King Paluthasaen",
        laoName: "",
        opinion: "https://www.pha-tad-ke.com/visit/our-history/",
        legendValue: "phouthaophounang thaophoutthasaen mostrequested                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kingsilhouette.PNG",
        profileImage: "img/img-kingsilhouette.PNG",
        profileNotes: "img/imgnotes-kingsilhouette.PNG",
    },





    // {
    //     name: "Ichthyovenator laoensis",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "prehistoric",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-ichthyovenator.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-ichthyovenator2.PNG",
    //     thumbnailImage: "img/thumbnail-ichthyovenator.PNG",
    //     profileImage: "img/img-ichthyovenator.PNG",
    // },
    // {
    //     name: "Tangvayosaurus hoffeti",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "prehistoric",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-tangvayosaurus.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-tangvayosaurus2.PNG",
    //     thumbnailImage: "img/thumbnail-tangvayosaurus.PNG",
    //     profileImage: "img/img-tangvayosaurus.PNG",
    // },
    // {
    //     name: "Mandschurosaurus laoensis / Iguanodon indet.",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "prehistoric",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-iguanodonindet.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-iguanodonindet2.PNG",
    //     thumbnailImage: "img/thumbnail-iguanodonindet.PNG",
    //     profileImage: "img/img-iguanodonindet.PNG",
    // },
    // {
    //     name: "Lufengosaurus",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "prehistoric",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-lufengosaurus.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-lufengosaurus2.PNG",
    //     thumbnailImage: "img/thumbnail-lufengosaurus.PNG",
    //     profileImage: "img/img-lufengosaurus.PNG",
    // },
    // {
    //     name: "Laosuchus naga",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "prehistoric",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-laosuchus.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-laosuchus2.PNG",
    //     thumbnailImage: "img/thumbnail-laosuchus.PNG",
    //     profileImage: "img/img-laosuchus.PNG",
    // },
    // {
    //     name: "Counillonia superoculis",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "prehistoric",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-counillonia.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-counillonia2.PNG",
    //     thumbnailImage: "img/thumbnail-counillonia.PNG",
    //     profileImage: "img/img-counillonia.PNG",
    // },
    // {
    //     name: "Repelinosaurus robustus",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "prehistoric",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-repelinosaurus.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-repelinosaurus2.PNG",
    //     thumbnailImage: "img/thumbnail-repelinosaurus.PNG",
    //     profileImage: "img/img-repelinosaurus.PNG",
    // },
    // {
    //     name: "Shidaisaurus jinae",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "prehistoric",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-shidaisaurus.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-shidaisaurus2.PNG",
    //     thumbnailImage: "img/thumbnail-shidaisaurus.PNG",
    //     profileImage: "img/img-shidaisaurus.PNG",
    // },

    // {
    //     name: "Phaya Khankaak",
    //     laoName: "ພະຍາຄັນຄາກ",
    //     opinion: "heaven",
    //     legendValue: "unifying thetoadking",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-phayakhankaak3.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-phayakhankaak3.PNG",
    //     thumbnailImage: "img/thumbnail-phayakhankaak3.PNG",
    //     raptor: "img/raptor-phayakhankaak.PNG",
    //     profileImage: "img/img-phayakhankaak3.PNG",
    //     status: "brown",
    //     unifying: "dotted",
    // },
    // {
    //     name: "Nang Kaeo Udon",
    //     laoName: "ນາງ ແກ້ວດົນ",
    //     opinion: "",
    //     legendValue: "thetoadking",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-nangkaeoudon.PNG",
    //     raptor: "img/raptor-nangkaeoudon.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    //     status: "brown",
    // },


    // {
    //     name: "Thao Hung",
    //     laoName: "ທ້າວຮຸ່ງ",
    //     opinion: "",
    //     legendValue: "thaohungthaocheuang",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-nangkaeoudon.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    // },
    // {
    //     name: "Nang Oua",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "thaohungthaocheuang",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-nangkaeoudon.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    // },

    {
        name: "Soulivong, King of Phalanasi",
        laoName: "",
        opinion: "Meuang Phalanasi",
        legendValue: "kalaket                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kingsilhouette.PNG",
        profileImage: "img/img-kingsilhouette.PNG",
        status: "darkorange",
        description: "Thus Kalaket and his faithful wife Malichan, accompanied by all their friends, went back to Phalanasi where they were triumphantly welcomed by King Soulivong, who made his son the King of Phalanasi.",
    },
    {
        name: "Manikab",
        laoName: "ມະນີກາບ",
        opinion: "Meuang Phalanasi",
        legendValue: "kalaket mostrequested                        jataka beast royal male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-manikab.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-manikab2.PNG",
        thumbnailImage: "img/thumbnail-manikab.PNG",
        raptor: "img/raptor-manikab.PNG",
        profileImage: "img/img-manikab.PNG",
        status: "darkorange",
        description: "Kalaket, the son of the King of Phalanasi, grew up into a handsome and strong lad. He was at liberty to do whatever pleased him in the palace, except approach the stable. One day, he ventured to that area, but was prevented by the guards from entering. Suddenly, the stable door flung wide open and Manikab, the winged horse, came out and bowed low in front of Kalaket. Without any hesitation, the young man swiftly climbed onto the horse's back, and Manikab immediately soared into the air. They flew for some time before they reached the Himaphan Forest where Manikab landed and let Kalaket down on a sacred Banyan tree, the Phosai.",
    },
    {
        name: "Kalaket ",
        laoName: "ກາລະເກດ",
        opinion: "Meuang Phalanasi",
        legendValue: "unifying kalaket mostrequested                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kalaket.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kalaket2.PNG",
        thumbnailImage: "img/thumbnail-kalaket.PNG",
        profileImage: "img/img-kalaket.PNG",
        raptor: "img/raptor-kalaket.png", 
        status: "darkorange",
        unifying: "dotted",
        description: "Informed by his servants, the King again became furious, and decided to kill Kalaket despite the tearful pleadings of his daughter and the prince's formal request for Malichan's hand in marriage. During the ensuing fight between the prince and the King, Kalaket, using Garuda's bow and arrows, killed all inhabitants of Muang Phimon and burnt down all houses. The King surrendered and consented to give his daughter to the young Prince. On Kalaket's request, Indra let magic rain fall on the city that restored all lives and properties. He and Malichan then flew out of the Kingdom of Muang Phimon on the back of their trusted friend, Manikab, the winged horse.",
    },
    // {
    //     name: "Soulivong, King of Phalanasi",
    //     laoName: "",
    //     opinion: "Meuang Phalanasi",
    //     legendValue: "kalaket",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kingsoulivong.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kingsoulivong2.PNG",
    //     thumbnailImage: "img/thumbnail-kingsoulivong.PNG",
    //     profileImage: "img/img-kingsoulivong.PNG",
    //     status: "darkorange",
    // },
    {
        name: "The Queen of Phalanasi",
        laoName: "",
        opinion: "Meuang Phalanasi",
        legendValue: "kalaket                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-queensilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-queensilhouette2.PNG",
        thumbnailImage: "img/thumbnail-queensilhouette.PNG",
        profileImage: "img/img-queensilhouette.PNG",
        status: "darkorange",
    },
    {
        name: "Malichan",
        laoName: "",
        opinion: "Meuang Phalanasi",
        legendValue: "kalaket                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-malichan.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-malichan2.PNG",
        thumbnailImage: "img/thumbnail-malichan.PNG",
        profileImage: "img/img-malichan.PNG",
        status: "darkorange",
        raptor: "img/raptor-malichan.PNG",
        description: "In Mithilat's palace, when evening came, Malichan implored Indra to save her. The god changed the princess into a garland of flowers which he placed behind the Nyak's chariot...Meanwhile, Malichan was restored to her human form by Indra, who gave her a crystal sword and a set of bow and arrows with which to kill Panthavan.",
    },
    // {
    //     name: "Kingdom of Phalanasi Guards",
    //     laoName: "",
    //     opinion: "Meuang Phalanasi",
    //     legendValue: "kalaket",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-kalaket.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    //     status: "darkorange",
    // },
    {
        name: "Three Kinnaly",
        laoName: "",
        opinion: "Meuang Phalanasi",
        legendValue: "kalaket                        jataka kinnaly royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-threekinnaly.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-threekinnaly2.PNG",
        thumbnailImage: "img/thumbnail-threekinnaly.PNG",
        profileImage: "img/img-threekinnaly.PNG",
        status: "darkorange",
        description: "Kalaket...fell under the spell of three enchanting Kinnaly - half women, half birds - who put the travellers into deep slumber. While all three were sound asleep, the three Kinnaly took the young man to their palace where he spent days and nights of enchanted pleasure with them, completely unaware of the fact that his beloved wife and trusted horse worriedly awaited his return.",
    },
    {
        name: "The Queen of Kailasa",
        laoName: "",
        opinion: "Kingdom of Kailasa",
        legendValue: "kalaket                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-queensilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-queensilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kalaket.PNG",
        profileImage: "img/img-queensilhouette.PNG",
        status: "navajowhite",
    },
    {
        name: "The King of Kailasa",
        laoName: "",
        opinion: "Kingdom of Kailasa",
        legendValue: "kalaket                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kalaket.PNG",
        profileImage: "img/img-kingsilhouette.PNG",
        status: "navajowhite",
    },
    {
        name: "Queen of Muang Phimon",
        laoName: "",
        opinion: "Muang Phimon",
        legendValue: "kalaket                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-queensilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-queensilhouette2.PNG",
        thumbnailImage: "img/thumbnail-queensilhouette.PNG",
        profileImage: "img/img-queensilhouette.PNG",
        status: "white",
        description: "The fourth wife of the Bodhisattva was born as a daughter to the Queen of Muang Phinom who named her Malichan. As she grew up, she become the most beautiful girl in the kingdom, and the King, her father, was so afraid of losing her that he would not let any young man approach her.",
        author: ""
    },
    {
        name: "King of Muang Phimon",
        laoName: "",
        opinion: "Muang Phimon",
        legendValue: "kalaket                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kalaket.PNG",
        profileImage: "img/img-kingsilhouette.PNG",
        status: "white",
        description: "The King of Muang Phimon was thrown into a terrible rage. He decided to get rid of the insolent intruder. He had a deadly trap installed in the window of his daughter's room after she was put into a deep sleep by magic. When Manikab and Kalaket arrived in the evening and through the window, the deadly trap was sprung. Both were pierced by a huge wooden pile. Manikab died instantly. But Kalaket managed to crawl to Malichan's bed and say farewell to her. ",
    },
    // {
    //     name: "Muang Phimon Retinue, Servants and Guards",
    //     laoName: "",
    //     opinion: "Muang Phimon",
    //     legendValue: "kalaket",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-kalaket.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    //     status: "white",
    // },
    // {
    //     name: "Muang Phimon Palace Servants",
    //     laoName: "",
    //     opinion: "Muang Phimon",
    //     legendValue: "kalaket",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-kalaket.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    //     status: "white",
    // },
    // {
    //     name: "Muang Phimon Inhabitants",
    //     laoName: "",
    //     opinion: "Muang Phimon",
    //     legendValue: "kalaket",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-kalaket.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    //     status: "white",
    // },
    // {
    //     name: "Nyakinees",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "kalaket",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-kalaket.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    // },
    {
        name: "Eesoun, a King",
        laoName: "",
        opinion: "",
        legendValue: "kalaket                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-khunsii.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-khunsii2.PNG",
        thumbnailImage: "img/thumbnail-khunsii.PNG",
        profileImage: "img/img-khunsii.PNG",
        description: "A desperate Malichan, clutching her husband's sword, bow, and arrows, wandered several days in the jungle before she was found by a King called Eesoun who invited her to stay in his palace and adopted her as his daughter.", 
    },
    {
        name: "Mithilat, King of the Nyaks",
        laoName: "",
        opinion: "Garden",
        legendValue: "kalaket                        jataka nyak phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-mithilat.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-mithilat2.PNG",
        thumbnailImage: "img/thumbnail-mithilat.PNG",
        profileImage: "img/img-mithilat.PNG",
        status: "firebrick",
        description: "Now, the owner of the garden, Mithilat, King of the Nyaks, who was secretly watching them, fell in love with the golden Malichan, and decided to abduct her. He cast a spell over Kalaket, Malichan, and their winged horse, and, while they slept deeply, he changed himself into a handsome young human being. He then stepped into the pavilion and woke Malichan to invite her to come with him to his palace. When Malichan, who was beginning to be alarmed, refused, he threatened to kill Kalaket and Manikab who were still sound asleep. Much against her will, Malichan had to yield to the Nyak's demand.",
    },
    {
        name: "Akkusala Koumphan",
        laoName: "",
        opinion: "Garden",
        legendValue: "kalaket                        jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-akkusalakoumphan.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-akkusalakoumphan2.PNG",
        thumbnailImage: "img/thumbnail-akkusalakoumphan.PNG",
        profileImage: "img/img-akkusalakoumphan.PNG",
        status: "firebrick",
        description: "When Mithilat was about to be defeated, he called on his friends Akkusala Koumphan and Minadit Panthavan to come and help him. But they were also defeated by Kalaket.",
    },
    {
        name: "Minadit Panthavan",
        laoName: "",
        opinion: "Garden",
        legendValue: "kalaket                        jataka nyak noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-minaditpanthavan.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-minaditpanthavan2.PNG",
        thumbnailImage: "img/thumbnail-minaditpanthavan.PNG",
        profileImage: "img/img-minaditpanthavan.PNG",
        status: "gray",
        description: "When Mithilat was about to be defeated, he called on his friends Akkusala Koumphan and Minadit Panthavan to come and help him. But they were also defeated by Kalaket...Panthavan went to fetch the three Kinnaly who had by then repented their sins and offered themselves to be of service to Kalaket.",
    },
    // {
    //     name: "Two Birds",
    //     laoName: "",
    //     opinion: "Himaphan Forest",
    //     legendValue: "kalaket",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-kalaket.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    //     status: "teal",
    // },


    {
        name: "King Chulani",
        laoName: "",
        opinion: "Meuang Peng Chan",
        legendValue: "champasiton                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kingsilhouette.PNG",
        profileImage: "img/img-kingsilhouette.PNG",
    },
    {
        name: "Nang Kham Kong",
        laoName: "",
        opinion: "Meuang Peng Chan",
        legendValue: "champasiton                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-queensilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-queensilhouette2.PNG",
        thumbnailImage: "img/thumbnail-queensilhouette.PNG",
        profileImage: "img/img-queensilhouette.PNG",
    },
    {
        name: "Nang Ang Ki",
        laoName: "",
        opinion: "banished",
        legendValue: "champasiton                        jataka human royal commoner female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangangki.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangangki2.PNG",
        thumbnailImage: "img/thumbnail-nangangki.PNG",
        profileImage: "img/img-nangangki.PNG",
    },
    // {
    //     name: "Nang Ang Ki Servants",
    //     laoName: "",
    //     opinion: "Meuang Peng Chan",
    //     legendValue: "champasiton",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-souvannakoumarn.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    // },
    {
        name: "Peasant Couple",
        laoName: "",
        opinion: "Baan ____ (Meuang Peng Chan)",
        legendValue: "champasiton                        jataka human commoner female male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-peasantcouple.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-peasantcouple2.PNG",
        thumbnailImage: "img/thumbnail-peasantcouple.PNG",
        profileImage: "img/img-peasantcouple.PNG",
    },
    {
        name: "Akkica Khu",
        laoName: "",
        opinion: "Baan ___ (Meuang Peng Chan)",
        legendValue: "champasiton                        jataka human monk male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-akkicakhu.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-akkicakhu2.PNG",
        thumbnailImage: "img/thumbnail-akkicakhu.PNG",
        profileImage: "img/img-akkicakhu.PNG",
    },
    // {
    //     name: "Akkica Khu Novice",
    //     laoName: "",
    //     opinion: "Baan ___ (Meuang Peng Chan)",
    //     legendValue: "champasiton",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-souvannakoumarn.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    // },
    {
        name: "Settha Koumarn, the White Prince",
        laoName: "",
        opinion: "Meuang Peng Chan",
        legendValue: "champasiton                        jataka human royal male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-setthakoumarn.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-setthakoumarn2.PNG",
        thumbnailImage: "img/thumbnail-setthakoumarn.PNG",
        profileImage: "img/img-setthakoumarn.PNG",
    },
    {
        name: "Pita Koumarn, the Yellow Prince",
        laoName: "",
        opinion: "Meuang Peng Chan",
        legendValue: "champasiton                        jataka human royal male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-pitakoumarn.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-pitakoumarn2.PNG",
        thumbnailImage: "img/thumbnail-pitakoumarn.PNG",
        profileImage: "img/img-pitakoumarn.PNG",
    },
    {
        name: "Souvanna Koumarn, the Golden Prince",
        laoName: "",
        opinion: "Meuang Peng Chan",
        legendValue: "champasiton                        jataka human royal male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-souvannakoumarn.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-souvannakoumarn2.PNG",
        thumbnailImage: "img/thumbnail-souvannakoumarn.PNG",
        profileImage: "img/img-souvannakoumarn.PNG",
    },
    {
        name: "Vajira Nanda Koumarn, the Lovely Diamond Prince",
        laoName: "",
        opinion: "Meuang Peng Chan",
        legendValue: "champasiton mostrequested                        jataka human royal male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-vajiranandakoumarn.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-vajiranandakoumarn2.PNG",
        thumbnailImage: "img/thumbnail-vajiranandakoumarn.PNG",
        profileImage: "img/img-vajiranandakoumarn.PNG",
    },
    // {
    //     name: "King Chulani Ministers and Generals",
    //     laoName: "",
    //     opinion: "Meuang Peng Chan",
    //     legendValue: "champasiton",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-souvannakoumarn.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    // },



    {
        name: "King Kabinlaphom",
        laoName: "ພະຍາກະບິນລະພົມ",
        opinion: "",
        legendValue: "nangsangkaan mostrequested                        folklore human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingkabinlaphom.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingkabinlaphom2.PNG",
        thumbnailImage: "img/thumbnail-kingkabinlaphom.PNG",
        profileImage: "img/img-kingkabinlaphom.PNG",
    },
    {
        name: "Thao Thammaban / Thao Thammapaala",
        laoName: "",
        opinion: "",
        legendValue: "nangsangkaan fireresistance                        folklore human noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-thaothammapaala.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-thaothammapaala2.PNG",
        thumbnailImage: "img/thumbnail-thaothammapaala.PNG",
        profileImage: "img/img-thaothammapaala.PNG",
    },
    {
        name: "Thongsa Thevi, Sunday",
        laoName: "ນາງ ທຸງສະ ເທວີ",
        opinion: "",
        legendValue: "nangsangkaan mostrequested                        folklore human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-thongsathevi.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-thongsathevi2.PNG",
        thumbnailImage: "img/thumbnail-thongsathevi.PNG",
        profileImage: "img/img-thongsathevi.PNG",
    },
    {
        name: "Mahothon Thevi, Saturday",
        laoName: "ນາງ ມະໂຫທອນ ເທວີ",
        opinion: "",
        legendValue: "nangsangkaan                        folklore human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-mahothonthevi.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-mahothonthevi2.PNG",
        thumbnailImage: "img/thumbnail-mahothonthevi.PNG",
        profileImage: "img/img-mahothonthevi.PNG",
        description: "This year, Lao New Year falls on a Saturday. So, this year’s Nang Sangkhan is Mahothon Thevi. She wears a black dress with onyx ornaments, she holds a discus and trident, and rides a peacock.",
    },
    {
        name: "Kamitha Thevi, Friday",
        laoName: "ນາງ ມະກີມິທາ ເທວີ",
        opinion: "",
        legendValue: "nangsangkaan                        folklore human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kamithathevi.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kamithathevi2.PNG",
        thumbnailImage: "img/thumbnail-kamithathevi.PNG",
        profileImage: "img/img-kamithathevi.PNG",
        description: "Nang Sangkhan for Friday is Kamitha Thevi. She wears a white dress with topaz ornament, holds dagger in the right hand, Indian vina in the left hand, and she rides a water buffalo. ",
    },
    {
        name: "Kareeni Thevi / Kilini Thevi, Thursday",
        laoName: "ນາງ ກີລີນີ ເທວີ",
        opinion: "",
        legendValue: "nangsangkaan                        folklore human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kareenithevi.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kareenithevi2.PNG",
        thumbnailImage: "img/thumbnail-kareenithevi.PNG",
        profileImage: "img/img-kareenithevi.PNG",
        description: "Nang Sangkhan for Thursday is Kareeni Thevi, she wears greenish yellow dress with emerald ornaments, holds an elephant hook in the right hand, gun in the left hand, and rides an elephant. ",
    },
    {
        name: "Montha Thevi, Wednesday",
        laoName: "ນາງ ມົນທາ ເທວີ",
        opinion: "",
        legendValue: "nangsangkaan                        folklore human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-monthathevi.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-monthathevi2.PNG",
        thumbnailImage: "img/thumbnail-monthathevi.PNG",
        profileImage: "img/img-monthathevi.PNG",
        description: "Her name is Montha Thevi and she is assigned to Wednesday. She wears emerald green dress with cats eye ornaments, she holds a sharp iron in the right hand, walking cane in the left hand, and rides a donkey.",
    },
    {
        name: "Haksod Thevi, Tuesday",
        laoName: "ນາງ ຮາກສະ ເທວີ",
        opinion: "",
        legendValue: "nangsangkaan                        folklore human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-haksodthevi.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-haksodthevi2.PNG",
        thumbnailImage: "img/thumbnail-haksodthevi.PNG",
        profileImage: "img/img-haksodthevi.PNG",
        description: "Nang Sangkhan repping Tuesday is Haksod Thevi. She wears a pink dress with agate ornaments, trident in the right hand, arrow in the left hand, and rides a hog.",
    },
    {
        name: "Korad Thevi, Monday",
        laoName: "ນາງ ໂຄລາດ ເທວີ",
        opinion: "",
        legendValue: "nangsangkaan                        folklore human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-koradthevi.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-koradthevi2.PNG",
        thumbnailImage: "img/thumbnail-koradthevi.PNG",
        profileImage: "img/img-koradthevi.PNG",
        description: "Nang Sangkhan representing Monday is Khorad Thevi. She wears a yellow dress with pearl ornaments, she holds a dagger in the right hand, a walking cane in the left hand, and she rides a tiger.",
    },
    // {
    //     name: "Male Eagle",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "nangsangkaan",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-eagle.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-eagle2.PNG",
    //     thumbnailImage: "img/thumbnail-eagle.PNG",
    //     profileImage: "img/img-eagle.PNG",
    // },
    // {
    //     name: "Female Eagle",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "nangsangkaan",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-eagle.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-eagle2.PNG",
    //     thumbnailImage: "img/thumbnail-eagle.PNG",
    //     profileImage: "img/img-eagle.PNG",
    // },




    {
        name: "Prince Sithon",
        laoName: "",
        opinion: "Meuang Pengchan",
        legendValue: "sithonandmanola mostrequested                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-sithon.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-sithon2.PNG",
        thumbnailImage: "img/thumbnail-sithon.PNG",
        profileImage: "img/img-sithon.PNG",
        status: "lime",
    },
    {
        name: "Manola",
        laoName: "",
        opinion: "Mythical Land Far from Earth",
        legendValue: "sithonandmanola mostrequested                        jataka kinnaly royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-manola.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-manola2.PNG",
        thumbnailImage: "img/thumbnail-manola.PNG",
        profileImage: "img/img-manola.PNG",
        status: "lime",
        unifying: "dotted",
    },
    {
        name: "A Human Hunter",
        laoName: "",
        opinion: "Lake",
        legendValue: "sithonandmanola                        jataka human commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-manolahunter.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-manolahunter2.PNG",
        thumbnailImage: "img/thumbnail-manolahunter.PNG",
        profileImage: "img/img-manolahunter.PNG",
        status: "lime",
    },
    {
        name: "King of Pengchan",
        laoName: "",
        opinion: "Meuang Pengchan",
        legendValue: "sithonandmanola                        jataka human phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-kingsilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-kingsilhouette2.PNG",
        thumbnailImage: "img/thumbnail-kingsilhouette.PNG",
        profileImage: "img/img-kingsilhouette.PNG",
        status: "lime",
    },
    {
        name: "Amat Polohit",
        laoName: "",
        opinion: "Meuang Pengchan",
        legendValue: "sithonandmanola                        jataka human noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-amatpolohit.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-amatpolohit2.PNG",
        thumbnailImage: "img/thumbnail-amatpolohit.PNG",
        profileImage: "img/img-amatpolohit.PNG",
        status: "lime",
    },
    // {
    //     name: "Amat Polohit's Sister",
    //     laoName: "",
    //     opinion: "Meuang Pengchan",
    //     legendValue: "sithonandmanola",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-manola.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    //     status: "lime",
    // },
    // {
    //     name: "King of Pengchan Army",
    //     laoName: "",
    //     opinion: "Meuang Pengchan",
    //     legendValue: "sithonandmanola",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-manola.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    //     status: "lime",
    // },
    {
        name: "Queen of Pengchan",
        laoName: "",
        opinion: "Meuang Pengchan",
        legendValue: "sithonandmanola                        jataka human royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-queensilhouette.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-queensilhouette2.PNG",
        thumbnailImage: "img/thumbnail-queensilhouette.PNG",
        profileImage: "img/img-queensilhouette.PNG",
        status: "lime",
    },
    // {
    //     name: "King of Pengchan Astrologer",
    //     laoName: "",
    //     opinion: "Meuang Pengchan",
    //     legendValue: "sithonandmanola",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-manola.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    //     status: "lime",
    // },
    // {
    //     name: "Queen of Pengchan Maids",
    //     laoName: "",
    //     opinion: "Meuang Pengchan",
    //     legendValue: "sithonandmanola",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-manola.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    //     status: "lime",
    // },
    // {
    //     name: "Two Huge Vultures",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "sithonandmanola",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-twohugevultures.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-twohugevultures2.PNG",
    //     thumbnailImage: "img/thumbnail-twohugevultures.PNG",
    //     profileImage: "img/img-twohugevultures.PNG",
    //     status: "teal",
    // },
    {
        name: "Phou Ngeun Kailath, King of a Mythical Land",
        laoName: "",
        opinion: "Mythical Land Far from Earth, Kingdom of Phou Ngeun Kailath",
        legendValue: "sithonandmanola                        jataka kinnaly phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phoungeunkailath.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phoungeunkailath2.PNG",
        thumbnailImage: "img/thumbnail-phoungeunkailath.PNG",
        profileImage: "img/img-phoungeunkailath.PNG",
        status: "pink",
    },
    // {
    //     name: "Phou Ngeun Kailath Seven Daughters",
    //     laoName: "",
    //     opinion: "Mythical Land Far from Earth",
    //     legendValue: "sithonandmanola",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-manola.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    //     status: "pink",
    // },
    // {
    //     name: "Phou Ngeun Kailath Maids",
    //     laoName: "",
    //     opinion: "Mythical Land Far from Earth, Kingdom of Phou Ngeun Kailath",
    //     legendValue: "sithonandmanola",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-manola.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    //     status: "pink",
    // },
    {
        name: "Queen of a Mythical Land, Kingdom of Phou Ngeun Kailath",
        laoName: "",
        opinion: "Mythical Land Far from Earth, Kingdom of Phou Ngeun Kailath",
        legendValue: "sithonandmanola                        jataka kinnaly royal female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-maengeunkailath.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-maengeunkailath2.PNG",
        thumbnailImage: "img/thumbnail-maengeunkailath.PNG",
        profileImage: "img/img-maengeunkailath.PNG",
        status: "pink",
    },
    // {
    //     name: "Phou Ngeun Kailath Soldiers",
    //     laoName: "",
    //     opinion: "Mythical Land Far from Earth, Kingdom of Phou Ngeun Kailath",
    //     legendValue: "sithonandmanola",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-nangkaeoudon.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-nangkaeoudon2.PNG",
    //     thumbnailImage: "img/thumbnail-manola.PNG",
    //     profileImage: "img/img-nangkaeoudon.PNG",
    //     status: "pink",
    // },
    {
        name: "Bachieng",
        laoName: "ທ້າວບາຈຽງ",
        legendValue: "bachiengandmalong                        folklore human noble male akha",
        thumbnailImageTransparent: "img/thumbnail-transparent-bachieng.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-bachieng2.PNG",
        thumbnailImage: "img/thumbnail-bachieng.PNG",
        profileImage: "img/img-bachieng.PNG",
        raptor: "img/raptor-bachieng.png",
    },
    {
        name: "Malong",
        laoName: "ນາງມະໂລງ",
        legendValue: "bachiengandmalong                        folklore human noble female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-malong.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-malong2.PNG",
        thumbnailImage: "img/thumbnail-malong.PNG",
        profileImage: "img/img-malong.PNG",
        raptor: "img/raptor-malong.png",
    },
    {
        name: "Thao Champassak",
        laoName: "ທ້າວຈຳປາສັກ",
        legendValue: "bachiengandmalong                        folklore human noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-thaochampassak.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-thaochampassak2.PNG",
        thumbnailImage: "img/thumbnail-thaochampassak.PNG",
        profileImage: "img/img-thaochampassak.PNG",
        raptor: "img/raptor-thaochampassak.png",
    },
    {
        name: "Thao Khangkham",
        laoName: "ທ້າວ ຄາງຄໍາ",
        opinion: "",
        legendValue: "phakhangkhangkham                        folklore beast noble male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-thaokhangkham.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-thaokhangkham2.PNG",
        thumbnailImage: "img/thumbnail-thaokhangkham.PNG",
        profileImage: "img/img-thaokhangkham.PNG",
    },






    
    {
        name: "Phra Ratsi",
        laoName: "ພຣະລືສີ",
        opinion: "#",
        legendValue: "sangsinxay kaeonama kalaket sithonandmanola thaophoutthasaen linthong mostrequested                        jataka human commoner male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phraratsi.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phraratsi2.PNG",
        thumbnailImage: "img/thumbnail-phraratsi.PNG",
        profileImage: "img/img-phraratsi.PNG",
        status: "purple",
    },
    {
        name: "Phaya Vedsuvan",
        laoName: "",
        opinion: "Meuang Jatum",
        legendValue: "sangsinxay meuangjatum                        jataka nyak deity phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phayavedsuvan.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phayavedsuvan2.PNG",
        thumbnailImage: "img/thumbnail-phayavedsuvan.PNG",
        profileImage: "img/img-phayavedsuvan.PNG",
        status: "lightblue",
    },
    {
        name: "Phra In / Indra",
        laoName: "ພຣະອິນ / ອິນທະຣາ ເທວະດາ", // https://www.facebook.com/maxky1707/videos/05e5f6ba/291738806272629/?locale=ms_MY
        opinion: "#",
        legendValue: "sangsinxay kalaket sithonandmanola linthong                        jataka deity male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phraindra.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phraindra2.PNG",
        thumbnailImage: "img/thumbnail-phraindra.PNG",
        profileImage: "img/img-phraindra.PNG",
        status: "lightblue",
        raptor: "img/raptor-phraindra2.PNG",
    },
    {
        name: "Shiva",
        laoName: "",
        opinion: "",
        legendValue: "nangtengone                        jataka deity male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-shiva.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-shiva2.PNG",
        thumbnailImage: "img/thumbnail-shiva.PNG",
        profileImage: "img/img-shiva.PNG",
        status: "lightblue",
    },
    {
        name: "Phaya Khut",
        laoName: "ພະຍາຄຸດ",
        opinion: "",
        legendValue: "sangsinxay kalaket mostrequested                        jataka khut phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phayakhut.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phayakhut2.PNG",
        thumbnailImage: "img/thumbnail-phayakhut.PNG",
        profileImage: "img/img-phayakhut.PNG",
        status: "orange",
    },
    {
        name: "Phaya Nak",
        laoName: "ພະຍານາກ",
        opinion: "",
        legendValue: "sangsinxay champasiton bachiengandmalong mostrequested                        jataka folklore nak phaya male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phayanak.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phayanak2.PNG",
        thumbnailImage: "img/thumbnail-phayanak.PNG",
        profileImage: "img/img-phayanak.PNG",
        status: "darkred",
    }, 
    {
        name: "Nang Khosop / Mother Khosop",
        laoName: "ນາງໂຄສົບ / ແມ່ໂຄສົບ",
        opinion: "honesty, https://laosmonamour.wordpress.com/2021/11/19/laos-the-tale-of-nang-khosop-or-mae-khosop-%E0%BA%99%E0%BA%B4%E0%BA%97%E0%BA%B2%E0%BA%99%E0%BB%81%E0%BA%A1%E0%BB%88%E0%BB%82%E0%BA%84%E0%BA%AA%E0%BA%BB%E0%BA%9A%EF%BF%BC/",
        legendValue: "nangkhosop                        folklore deity female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangkhosop.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangkhosop2.PNG",
        thumbnailImage: "img/thumbnail-nangkhosop.PNG",
        profileImage: "img/img-nangkhosop.PNG",
    },
    {
        name: "Nang Thaep Phathidaa Mekhala",
        laoName: "",
        opinion: "honesty, https://laosmonamour.wordpress.com/2021/11/19/laos-the-tale-of-nang-khosop-or-mae-khosop-%E0%BA%99%E0%BA%B4%E0%BA%97%E0%BA%B2%E0%BA%99%E0%BB%81%E0%BA%A1%E0%BB%88%E0%BB%82%E0%BA%84%E0%BA%AA%E0%BA%BB%E0%BA%9A%EF%BF%BC/",
        legendValue: "nangmekhala                        jataka deity female lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-nangmekhala.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-nangmekhala2.PNG",
        thumbnailImage: "img/thumbnail-nangmekhala.PNG",
        profileImage: "img/img-nangmekhala.PNG",
    },
    {
        name: "Phaya Thaen / Phi Thaen",
        laoName: "ພະຍາແຖນ / ຜີແຖນ / ຜີຟ້າ",
        opinion: "",
        legendValue: "thetoadking khunborom                        folklore deity male lao",
        thumbnailImageTransparent: "img/thumbnail-transparent-phayathaen.PNG",
        thumbnailImageTransparent2: "img/thumbnail-transparent-phayathaen2.PNG",
        thumbnailImage: "img/thumbnail-phayathaen.PNG",
        raptor: "img/raptor-phayathaen.PNG",
        profileImage: "img/img-phayathaen.PNG",
        status: "silver",
    },








    // {
    //     name: "Khun Lo",
    //     laoName: "ຂຸນລໍ",
    //     opinion: "wife",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Pu Langxoeng",
    //     laoName: "",
    //     opinion: "Muang Lum (the Lower World)",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Khun Khan",
    //     laoName: "",
    //     opinion: "Muang Lum (the Lower World)",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Khun Khet",
    //     laoName: "",
    //     opinion: "Muang Lum (the Lower World)",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Phaya Thaen's Messenger",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "The People",
    //     laoName: "",
    //     opinion: "Muang Lum (the Lower World)",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Khun's Wives and Children",
    //     laoName: "",
    //     opinion: "Muang Lum (the Lower World)",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Another Celestial Being",
    //     laoName: "",
    //     opinion: "Heaven",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Beautiful Horned Buffalo",
    //     laoName: "",
    //     opinion: "Muang Thaeng, Dien Bien Phu",
    //     status: "gray",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Tai Lom",
    //     laoName: "",
    //     opinion: "Muang Thaeng, Dien Bien Phu",
    //     status: "",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Tai Lee",
    //     laoName: "",
    //     opinion: "Muang Thaeng, Dien Bien Phu",
    //     status: "",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Tai Lo",
    //     laoName: "",
    //     opinion: "Muang Thaeng, Dien Bien Phu",
    //     status: "",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Tai Loeng",
    //     laoName: "",
    //     opinion: "Muang Thaeng, Dien Bien Phu",
    //     status: "",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Tai Kwang",
    //     laoName: "",
    //     opinion: "Muang Thaeng, Dien Bien Phu",
    //     status: "",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Khun Kha",
    //     laoName: "",
    //     opinion: "Muang Thaeng, Dien Bien Phu",
    //     status: "",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Khun Khong",
    //     laoName: "",
    //     opinion: "Muang Thaeng, Dien Bien Phu",
    //     status: "",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Khun Borom",
    //     laoName: "ຂຸນບູຣົມ",
    //     opinion: "Muang Thaeng, Dien Bien Phu",
    //     status: "gray",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Khun Borom Bards and Wise People",
    //     laoName: "",
    //     opinion: "Muang Thaeng, Dien Bien Phu",
    //     status: "",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Khun Borom Messenger",
    //     laoName: "",
    //     opinion: "Muang Thaeng, Dien Bien Phu",
    //     status: "",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Pu Nyoe",
    //     laoName: "",
    //     opinion: "Muang Thaeng, Dien Bien Phu",
    //     status: "gray",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Ya Nyoe",
    //     laoName: "",
    //     opinion: "Muang Thaeng, Dien Bien Phu",
    //     status: "gray",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Nang Yomphala",
    //     laoName: "",
    //     opinion: "Muang Thaeng, Dien Bien Phu",
    //     status: "gray",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },
    // {
    //     name: "Nang Et-khaeng",
    //     laoName: "",
    //     opinion: "Muang Thaeng, Dien Bien Phu",
    //     status: "gray",
    //     legendValue: "khunborom",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-khunlo.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-khunlo2.PNG",
    //     thumbnailImage: "img/thumbnail-khunlo.PNG",
    //     profileImage: "img/img-khunlo.PNG",
    // },





    // {
    //     name: "Kaeo Na Ma",
    //     laoName: "ແກ້ວຫນ້າມ້າ",
    //     opinion: "",
    //     legendValue: "unifying kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    //     unifying: "dotted",
    // },
    // {
    //     name: "King of Mithila City",
    //     laoName: "",
    //     opinion: "Mithila City",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Queen of Mithila City",
    //     laoName: "",
    //     opinion: "Mithila City",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Prince Pinthong",
    //     laoName: "",
    //     opinion: "Mithila City",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Old Couple",
    //     laoName: "",
    //     opinion: "Mithila City",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Old Couple's Neighbors",
    //     laoName: "",
    //     opinion: "Mithila City",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Mithila City Ministers",
    //     laoName: "",
    //     opinion: "Mithila City",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Princess Thatsamalee",
    //     laoName: "",
    //     opinion: "Romwithi City",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Court Gardener",
    //     laoName: "",
    //     opinion: "Romwithi City",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Palaraj, a Nyak",
    //     laoName: "",
    //     opinion: "Palaraj Domain",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Palaraj Three Daughters",
    //     laoName: "",
    //     opinion: "Palaraj Domain",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Palaraj Subjects",
    //     laoName: "",
    //     opinion: "Palaraj Domain",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Pinkaeo, Pinthong and Kaeo Na Ma's Son",
    //     laoName: "",
    //     opinion: "Mithila City",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Prakaimat, a Demon King",
    //     laoName: "",
    //     opinion: "Kraijak",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Prakaikrot, a Demon King",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Kaeo Na Ma Triplet Daughters Born in Battle",
    //     laoName: "",
    //     opinion: "Mithila City",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Three Princes",
    //     laoName: "",
    //     opinion: "Rommachak City",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Giant Bird",
    //     laoName: "",
    //     opinion: "",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Thatsamalee Shaman",
    //     laoName: "",
    //     opinion: "Romwithi City",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Pinsinchai, Thatsamalee's Son",
    //     laoName: "",
    //     opinion: "Romwithi City",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "Pinsinchai's Yakkha Wife Who Left Him",
    //     laoName: "",
    //     opinion: "Romwithi City",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },
    // {
    //     name: "",
    //     laoName: "",
    //     opinion: "Romwithi City",
    //     legendValue: "kaeonama",
    //     thumbnailImageTransparent: "img/thumbnail-transparent-kaeonama.PNG",
    //     thumbnailImageTransparent2: "img/thumbnail-transparent-kaeonama2.PNG",
    //     thumbnailImage: "img/thumbnail-kaeonama.PNG",
    //     profileImage: "img/img-kaeonama.PNG",
    // },

    
];