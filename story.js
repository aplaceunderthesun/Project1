console.log('At the beginning...')

const allMonsters = [
    {
        name: 'Venusaur',
        image: 'https://i.ibb.co/LJhfvSj/venusaur.jpg',
        health: 364,
        skills: {
            "Petal blizzard": 90, "Razor Leaf": 55, "Seed Bomb": 80, "Vine Whip": 45,
        }
    },

    {
        name: 'Charlizard',
        image: 'https://i.ibb.co/VLBMRrD/charizard.jpg',
        health: 360,
        skills: {
            Flamethrower: 90, Ember: 40, "Dragon Breath": 60, "Fire Fang": 65,
        }
    },

    {
        name: 'Blastoise',
        image: 'https://i.ibb.co/r5pN8xh/blastoise.jpg',
        health: 362,
        skills: {
            "Flash Cannon": 80, "Water Gun": 40, "Rapid Spin": 50, "Aqua Tail": 90,
        }
    },

    {
        name: 'Butterfree',
        image: 'https://i.ibb.co/QX5Nhnx/butterfree.jpg',
        health: 324,
        skills: {
            "Bug Bite": 60, Gust: 40, Confusion: 50, "Air Slash": 75,
        }
    },

    {
        name: 'Beedrill',
        image: 'https://i.ibb.co/KKkTNJs/beedrill.jpg',
        health: 334,
        skills: {
            Peck: 35, "Poison Jab": 80, Outrage: 120, "Pin Missle": 25,
        }
    },

    {
        name: 'Pidgeot',
        image: 'https://i.ibb.co/k5TGv26/pidgeot.jpg',
        health: 320,
        skills: {
            Gust: 40, "Quick Attack": 40, "Wing Attack": 60, "Sky Attack": 120,
        }
    },

    {
        name: 'Nidoqueen',
        image: 'https://i.ibb.co/712LsTF/nidoqueen.jpg',
        health: 384,
        skills: {
            Bite: 60, "Earth Power": 90, "Double Kick": 30, Scratch: 40,
        }
    },

    {
        name: 'Gengar',
        image: 'https://i.ibb.co/DLfWZFN/gengar.jpg',
        health: 324,
        skills: {
            "Shadow Ball": 80, "Dream Eater": 100, "Shadow Punch": 60, Lick: 30,
        }
    },

    {
        name: 'Alakazam',
        image: 'https://i.ibb.co/ZWj5F7P/alakazam.jpg',
        health: 314,
        skills: {
            Confusion: 50, Psybeam: 65, Psychic: 90, "Future Signt": 120,
        }
    },

    {
        name: 'Clefable',
        image: 'https://i.ibb.co/xjX0G74/clefable.jpg',
        health: 394,
        skills: {
            "Meteor Mash": 0, "Disarming Voice": 45, Moonblast: 95, Pound: 40,
        }
    },

    {
        name: 'Ninetales',
        image: 'https://i.ibb.co/vmjkDS4/ninetales.jpg',
        health: 350,
        skills: {
            Ember: 40, Flamethrower: 40, "Fire Spin": 60, Inferno: 100,
        }
    },

    {
        name: 'Golbat',
        image: 'https://i.ibb.co/PTvR52B/golbat.jpg',
        health: 354,
        skills: {
            Astonish: 30, "Poison Fang": 50, "Leech Life": 80, "Air Slash": 75,
        }
    },

    {
        name: 'Vileplume',
        image: 'https://i.ibb.co/DG4W7M6/vileplume.jpg',
        health: 354,
        skills: {
            Acid: 40, "Giga Drain": 75, "Moon Blast": 95, "Petal Dance": 120,
        }
    },

    {
        name: 'Flareon',
        image: 'https://i.ibb.co/QrK2GY5/flareon.jpg',
        health: 334,
        skills: {
            Ember: 40, "Take Down": 90, Swift: 60, "Flare Blitz": 120,
        }
    },

    {
        name: 'Dragonite',
        image: 'https://i.ibb.co/hLVVFL6/dragonite.jpg',
        health: 386,
        skills: {
            "Hyper Beam": 150, "Dragon Tail": 60, "Thunder Punch": 75, Twister: 40,
        }
    },

    {
        name: 'Gyarados',
        image: 'https://i.ibb.co/S5Dq6V6/gyarados.jpg',
        health: 10, //394
        skills: {
            "Ice Fang": 40, Whirlpool: 35, "Hydro Pump": 110, "Hyper Beam": 300,
        }
    },

    {
        name: 'Magikarp',
        image: 'https://i.ibb.co/d0JtSbq/magikarp.jpg',
        health: 244,
        skills: {
            Tackle: 40,
        }
    },

    {
        name: 'Kabutops',
        image: 'https://i.ibb.co/FHhg3J7/kabutops.jpg',
        health: 324,
        skills: {
            "Mud Shot": 55, "Stone Edge": 100, "Night Slash": 70, "Aqua Jet": 40,
        }
    },

    {
        name: 'Zapdos',
        image: 'https://i.ibb.co/6BRz2RX/zapdos.jpg',
        health: 384,
        skills: {
            "Thunder Shock": 40, "Drill Peck": 80, thunder: 110, "Zap Cannon": 120,
        }
    },

    {
        name: 'Mewtwo',
        image: 'https://i.ibb.co/8gtDNV0/mewtwo.jpg',
        health: 416,
        skills: {
            "Ancient Power": 60, "Aura Sphere": 80, Psystrike: 100, "Future Sight": 120,
        }
    },

]


const myPotions = [
    { type: { "Potion 1": 10, "Potion 2": 15, "Potion 3": 20, "Potion 4": 25, } }
]

//////////////////////////////////////////////////////////////////////////////////////////////////////
// ! Global Containers
// ////////////////////////////////////////////////////////////////////////////////////////////////////


let $myMonsters = [];
let $enemyMonsters = []
//When I select my Pokemon, I will push them into this container. 
//If I scale up to be able to fight Trainers, this will serve as the container too. 


//////////////////////////////////////////////////////////////////////////////////////////////////////
//! Function to 2ND Scene 
//////////////////////////////////////////////////////////////////////////////////////////////////////

const secondSceneFunc = () => {

    $('.firstScene').remove();

    //Creating the second Scene Layout and Items 
    //! Not linking text input to anything
    const $myName = $('<img>').attr('src', 'https://i.ibb.co/SXGrwbx/What-is-your-name.png').attr('id', 'pokemontrainer');
    const $nameBox = $('<input>').attr({ type: 'text', id: 'nameBox' });
    const $secondScene = $('<div>').attr('id', 'secondScene');
    const $pokemonMaster = $('<img>').attr('src', 'https://i.ibb.co/ZXsFTW6/Ash-2.png');

    //Creating the second Scene Layout and Items 
    $('body').append($secondScene);
    $('#secondScene').append($pokemonMaster);
    ($secondScene).append($myName);
    ($secondScene).append($nameBox);

    //Adding button to the next scene
    const $secondButton = $('<button>').addClass('secondSceneButton').text('TIME TO CHOOSE!');
    $('#secondScene').append($secondButton);
    $('.secondSceneButton').on('click', thirdSceneFunc)

}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//! Function to push my selected monster into the container
//////////////////////////////////////////////////////////////////////////////////////////////////////

const submitMonster = (event) => {
    //! DO I even need to run a loop? 
    //Gets the name of the monster selected in 
    const $currentMonster = event.currentTarget.textContent;
    console.log($currentMonster)

    //Gets the monster from the array and push it into the container
    //And maximum 1 monster. 
    if ($myMonsters.length < 1) {
        for (let i = 0; i < allMonsters.length; i++) {
            if ($currentMonster === allMonsters[i].name) {
                $myMonsters.push(allMonsters[i]);
            }
        }
    }

    //Making sure that I can unclick and click and it will select the right monster 
    else if (($myMonsters[0].name) !== ($currentMonster)) {
        $myMonsters = []
        for (let i = 0; i < allMonsters.length; i++) {
            if ($currentMonster === allMonsters[i].name) {
                $myMonsters.push(allMonsters[i]);
            }
        }

    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
//! Function to 3RD Scene 
//////////////////////////////////////////////////////////////////////////////////////////////////////

const thirdSceneFunc = () => {

    $('#secondScene').remove();

    //Title 
    const $thirdScene = $('<div>').attr('id', 'thirdScene');
    const $chooseYourPokemon = $('<img>').attr('src', 'https://fontmeme.com/permalink/210920/e26bd3fcca71ce04ba44949507240f87.png').attr('id', 'thirdSceneTitle');
    const $squareContainer = $('<div>').attr('id', 'squareContainer');


    //Creating thirdScene Structure 
    $('body').append($thirdScene);
    ($thirdScene).append($chooseYourPokemon);
    ($thirdScene).append($squareContainer);


    //Create Monster Selection Tiles and Pictures
    for (let i = 0; i < allMonsters.length; i++) {
        const $square1 = $('<input>').attr({ type: 'image', src: allMonsters[i].image }).addClass('square');
        const $square = $square1.text(`${allMonsters[i].name}`).on('click', submitMonster);
        //When I want to scale up, I can make it random pool of monsters
        ($('#squareContainer')).append($square);

    }

    //Creating the submit button (Cannot submit when no monster is selected)
    const $thirdButton = $('<button>').addClass('thirdSceneButton').text('TO BATTLE!')
    $('#thirdScene').append($thirdButton);
    $('.thirdSceneButton').on('click', () => {
        if ($myMonsters.length === 0) {
        }
        else {
            battleSceneFunc();
        }

    })



}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//! Function to 4TH Scene 
//////////////////////////////////////////////////////////////////////////////////////////////////////

// const forthSceneFunc = () => {
//     console.log('4th Page')

//     // Removing thirdScene and uploading new background
//     $('#thirdScene').remove();
//     // $('body').css('background-image','url(https://xxx.png)');


//     const $forthScene = $('<div>').attr('id', 'forthScene');
//     $('body').append($forthScene);


//     const $forthButton = $('<button>').addClass('forthSceneButton').text('TO BATTLE');
//     $('#forthScene').append($forthButton);
//     $('.forthSceneButton').on('click', battleSceneFunc)

// }


//////////////////////////////////////////////////////////////////////////////////////////////////////
//! Function to 5th Scene (Battle Scene) 
//////////////////////////////////////////////////////////////////////////////////////////////////////
//!CAN WE ADD BATTLE MUSIC?

const battleSceneFunc = () => {
    console.log('TO BATTLE POKEMON')

    $('#thirdScene').remove();
    $('body').css('background-color', 'grey');


    // const $battleMusic = $('<iframe>').attr('src', 'https://www.mboxdrive.com/pokemon-battle.mp3').attr('allow', 'autoplay').addClass('backgroundMusic');



    //Created individual containers for each section
    const $battleLayout = $('<div>').attr('id', 'battleLayout');
    const $myBattleLayout = $('<div>').attr('id', 'myBattleLayout');
    const $enemyBattleLayout = $('<div>').attr('id', 'enemyBattleLayout');
    $('body').append($battleLayout);
    $('#battleLayout').append($enemyBattleLayout);
    $('#battleLayout').append($myBattleLayout);
    // $('#battleLayout').append($battleMusic);

    //Random choosing of enemy monsters
    const enemyRandom = Math.floor(Math.random() * (allMonsters.length));


    //EnemyRandom Monsters into container 
    const $enemycurrentMonster = allMonsters.splice(enemyRandom, 1)
    $enemyMonsters = $enemycurrentMonster;


    //2  IMAGE + TEXT containers --> one enemy pokemon and one my own
    //enemy monster
    const $enemyMonsterImage = $('<img>').attr({ src: $enemyMonsters[0].image }).attr('id', 'enemyMonsterImage');;
    const $enemyMonsterHp = $('<h2>').text(`Enemy ${$enemyMonsters[0].name} has ${$enemyMonsters[0].health} HP`).attr('id', 'enemyMonsterHp');
    $('#enemyBattleLayout').append($enemyMonsterHp);
    $('#enemyBattleLayout').append($enemyMonsterImage);

    //!Try Making enemyHP Bars 
    const $enemyHealthContainer = $('<div>').attr('id','enemyHealthContainer'); 
    const $enemyHealthBar = $('<div>').attr('id','enemyHealthBar');
    $('#enemyBattleLayout').append($enemyHealthContainer);
    $('#enemyBattleLayout').append($enemyHealthBar);


    //my own monster
    const $myMonsterImage = $('<img>').attr({ src: $myMonsters[0].image }).attr('id', 'myMonsterImage');
    const $myMonsterHp = $('<h2>').text(`My ${$myMonsters[0].name} has ${$myMonsters[0].health} HP`).attr('id', 'myMonsterHp');
    $('#myBattleLayout').append($myMonsterImage);
    $('#myBattleLayout').append($myMonsterHp);


    //BUTTON for Fight->Skills
    const $myskillsDetails = (Object.keys($myMonsters[0].skills));
    console.log("mySkillsDetails", $myskillsDetails)
    const $dropdownSkills = $('<div>').addClass('skillsDropdown')
    $(`#battleLayout`).append($dropdownSkills);


    const $dropdownButton = $('<div>').attr('type', 'submit').addClass('skillButton').text('Fight').one('click', () => {
        for (i = 0; i < $myskillsDetails.length; i++) {
            $('.skillButton').append($('<button>').text($myskillsDetails[i]).addClass('skillButtons').on('click', skillAttack));
        }
    }
    )

    $('.skillsDropdown').append($dropdownButton);

    //BUTTON for Backpack -> Potions 
    const $myPotionDetails = (Object.keys(myPotions[0].type));
    console.log("myPotionDetails", $myPotionDetails);
    const $dropDownPotion = $('<div>').addClass('potionDropdown')
    $(`#battleLayout`).append($dropDownPotion);

    const $backpackButton = $('<div>').attr('type', 'submit').text('Backpack').addClass('backpack').one('click', () => {
        for (i = 0; i < $myPotionDetails.length; i++) {
            $('.backpack').append($('<button>').text($myPotionDetails[i]).addClass('potionButtons').on('click', takingPotion));
        }
    });

    $('.skillsDropdown').append($backpackButton);

    //BUTTON for Running
    const $runButton = $('<div>').attr('type', 'submit').text('Run').addClass('run').on('click', () => {
        alert('Developer forgot to make this function. You cannot run away!')
    });

    $('.skillsDropdown').append($runButton);

}


//////////////////////////////////////////////////////////////////////////////////////////////////////
//! Function for Fighting
//////////////////////////////////////////////////////////////////////////////////////////////////////

const skillAttack = (event) => {

    //Remove button after selecting.
    $('.skillButtons').hide();
    $('.potionButtons').hide()


    //Link selected skill to damage 
    const $myskillsName = (event.currentTarget.textContent); //Selected Skill Name 
    const $myskillsDamage = ($myMonsters[0].skills[$myskillsName]); //Selected SKill Damage


    //My Monster attack Enemy Monster
    //Check if HP === 0. If true, win. If false, continue.
    //!Trying to make the HP Bar reactive
    const $enemyremaindinghealth = ($enemyMonsters[0].health - $myskillsDamage)
    const $hpBar = ((100/$enemyMonsters[0].health)*$enemyremaindinghealth)
    $('#enemyHealthContainer').css('width', [$hpBar]);


    $enemyMonsters[0].health = $enemyremaindinghealth
    $('#enemyMonsterHp').text(`Enemy ${$enemyMonsters[0].name} has ${$enemyMonsters[0].health} HP`)
    alert(`${$myMonsters[0].name} used ${$myskillsName}`)

    if ($enemyMonsters[0].health < 1) {
        $('#enemyMonsterHp').text(`Enemy ${$enemyMonsters[0].name} has fainted!`)
        alert('You Won!')
        $('.potionButtons').hide();
        $('.skillButtons').hide(); //Hiding the list 


        const $winPopup = $('<div>').attr('type', 'submit').text('You Won!').addClass('winPop').one('click', () => {
            $('body').css('background-color', 'transparent');
            $myMonsters = []; //Emptying my container 
            $enemyMonsters = []; //Emtpying enemy container 
            $('#battleLayout').remove(); //Removing layout 
            thirdSceneFunc(); //Executing thirdSceneFunc to select monsters again 
        })
        $('#battleLayout').append($winPopup);
    }

    else {

        //Updating the HP when myMonster attacks and alerts


        // //! TRYING TO CREATE A SLIDE IN BOX
        // const $popupBox = $('<div>').attr('id', 'popupBox').text(`${$myMonsters[0].name} used ${$myskillsName}`);
        // $('#battleLayout').append($popupBox)
        // // const $popupBoxContent = $('<p>').text(`${$myMonsters[0].name} used ${$myskillsName}`)
        // // $('#popupBox').append($popupBox);
        // // $('#myMonsterImage').fadeOut(1000);
  


        //Getting enemy's skill and damage
        const $enemyskillsDetails = (Object.keys($enemyMonsters[0].skills)); //Getting the list of keys of skills in an array 
        const $randomNumber = Math.floor(Math.random() * ($enemyskillsDetails.length)); //Random number to select a random skill 
        const $enemyskillsName = $enemyskillsDetails[$randomNumber]; // Selecting a random skill 
        const $enemyskillsDamage = $enemyMonsters[0].skills[$enemyskillsName]; //Getting the skill's damage

        const $myremaindinghealth = $myMonsters[0].health - $enemyskillsDamage //My monster remaining health
        $myMonsters[0].health = $myremaindinghealth



        if ($myMonsters[0].health < 1) {
            alert(`You Lost!`)
            $('#myMonsterHp').text(`My ${$myMonsters[0].name} has fainted!`)

            $('.skillButtons').hide();
            $('.potionButtons').hide();

            //Button that pops up when your monster hp reaches 0
            const $winPopup = $('<div>').attr('type', 'submit').text('You Lost!').addClass('winPop').one('click', () => {
                $('body').css('background-color', 'transparent');
                $myMonsters = [];
                $enemyMonsters = [];
                $('#battleLayout').remove();
                thirdSceneFunc();
                console.log($myMonsters)
                console.log($enemyMonsters);
                console.log(allMonsters) //Removing elemenets before looping back 
            })

            $('#battleLayout').append($winPopup);


            //Link to next function-> Slide in pop up 

        }
        else {

            //Making it slower for computer attack to feel like a turn based thing for user
            setTimeout(function () {
                $('#myMonsterHp').text(`My ${$myMonsters[0].name} has ${$myMonsters[0].health} HP`);
                alert(`${$enemyMonsters[0].name} used ${$enemyskillsName}`);
                $('.skillButtons').show();
                $('.potionButtons').show();

            }, 1500)


        }

    }

}

//! Should I try to make this into smaller functions so that I wont have to repeat the code? 
const takingPotion = (event) => {
    console.log('Using POTION')
    $('.potionButtons').hide();
    $('.skillButtons').hide();

    const $myPotionsName = (event.currentTarget.textContent); //Selected Potion Name 
    const $myPotionsHeal = (myPotions[0].type[$myPotionsName]); //Selected Potion Heal
    console.log($myPotionsHeal);

    const $myHealedhealth = $myMonsters[0].health + $myPotionsHeal;
    $myMonsters[0].health = $myHealedhealth

    $('#myMonsterHp').text(`MY ${$myMonsters[0].name} has ${$myMonsters[0].health} HP`) //My Monster remaining health
    alert(`Trainer used ${$myPotionsName}`)

    //Getting enemy's skill and damage and getting attacked by the enemy
    const $enemyskillsDetails = (Object.keys($enemyMonsters[0].skills)); //Getting the list of keys of skills in an array 
    const $randomNumber = Math.floor(Math.random() * ($enemyskillsDetails.length)); //Random number to select a random skills 
    const $enemyskillsName = $enemyskillsDetails[$randomNumber]; // Selecting a random skills 
    const $enemyskillsDamage = $enemyMonsters[0].skills[$enemyskillsName]; //Getting the skills's damage

    const $myremaindinghealth = $myMonsters[0].health - $enemyskillsDamage //My monster remaining health
    $myMonsters[0].health = $myremaindinghealth

    if ($myMonsters[0].health < 1) {
        alert(`You Lost!`)
        $('#myMonsterHp').text(`My ${$myMonsters[0].name} has fainted!`)
        $('.potionButtons').hide();
        $('.skillButtons').hide();

        //Button that pops up when your monster hp reaches 0
        const $winPopup = $('<div>').attr('type', 'submit').text('You Lost!').addClass('winPop').one('click', () => {
            $('body').css('background-color', 'transparent');
            $myMonsters = [];
            $enemyMonsters = [];
            $('#battleLayout').remove();
            thirdSceneFunc();
            console.log($myMonsters)
            console.log($enemyMonsters);
            console.log(allMonsters) //Removing elemenets before looping back 
        })

        $('#battleLayout').append($winPopup);


        //Link to next function-> Slide in pop up 

    }
    else {

        //Making it slower for computer attack to feel like a turn based thing for user
        setTimeout(function () {
            $('#myMonsterHp').text(`My ${$myMonsters[0].name} has ${$myMonsters[0].health} HP`);
            alert(`${$enemyMonsters[0].name} used ${$enemyskillsName}`);
            $('.potionButtons').show();
            $('.skillButtons').show()
        }, 1500)


    }

}









const main = () => {

    $('.startButton').on('click', secondSceneFunc)
    console.log("At the end.....")

}


$(main);