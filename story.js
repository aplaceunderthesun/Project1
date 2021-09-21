console.log('hi 1')
//myMonsters[i].image
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
        skills: { Flamethrower: 90, Ember: 40, "Dragon Breath": 60, "Fire Fang": 65, 
        }
    },

    {
        name: 'Blastoise',
        image: 'https://i.ibb.co/r5pN8xh/blastoise.jpg',
        health: 362,
        skills: { "Flash Cannon": 80, "Water Gun": 40, "Rapid Spin": 50, "Aqua Tail": 90,  
        }
    },

    {
        name: 'Butterfree',
        image: 'https://i.ibb.co/QX5Nhnx/butterfree.jpg',
        health: 324,
        skills: { "Bug Bite": 60, Gust: 40, Confusion: 50, "Air Slash": 75,
        }
    },

    {
        name: 'Beedrill',
        image: 'https://i.ibb.co/KKkTNJs/beedrill.jpg',
        health: 334,
        skills: { Peck: 35, "Poison Jab": 80, Outrage: 120, "Pin Missle": 25,
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
        skills: { Bite: 60, "Earth Power": 90, "Double Kick": 30, Scratch: 40,
        }
    },

    {
        name: 'Gengar',
        image: 'https://i.ibb.co/DLfWZFN/gengar.jpg',
        health: 324,
        skills: { "Shadow Ball": 80, "Dream Eater": 100, "Shadow Punch": 60, Lick: 30, 
        }
    },

    {
        name: 'Alakazam',
        image: 'https://i.ibb.co/ZWj5F7P/alakazam.jpg',
        health: 314,
        skills: { Confusion: 50, Psybeam: 65, Psychic: 90, "Future Signt": 120, 
        }
    },

    {
        name: 'Clefable',
        image: 'https://i.ibb.co/xjX0G74/clefable.jpg',
        health: 394,
        skills: { "Meteor Mash": 0, "Disarming Voice": 45, Moonblast: 95, Pound: 40, 
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
        skills: { Astonish: 30, "Poison Fang": 50, "Leech Life": 80, "Air Slash": 75,
        }
    },

    {
        name: 'Vileplume',
        image: 'https://i.ibb.co/DG4W7M6/vileplume.jpg',
        health: 354,
        skills: { Acid: 40, "Giga Drain": 75, "Moon Blast": 95, "Petal Dance": 120,
        }
    },

    {
        name: 'Flareon',
        image: 'https://i.ibb.co/QrK2GY5/flareon.jpg',
        health: 334,
        skills: { Ember: 40, "Take Down": 90, Swift: 60, "Flare Blitz": 120, 
        }
    },

    {
        name: 'Dragonite',
        image: 'https://i.ibb.co/hLVVFL6/dragonite.jpg',
        health: 386,
        skills: { "Hyper Beam": 150, "Dragon Tail": 60, "Thunder Punch": 75, Twister: 40,
        }
    },

    {
        name: 'Gyarados',
        image: 'https://i.ibb.co/S5Dq6V6/gyarados.jpg',
        health: 394,
        skills: {
            "Ice Fang": 40, Whirlpool: 35, "Hydro Pump": 110, "Hyper Beam": 150,
        }
    },

    {
        name: 'Magikarp',
        image: 'https://i.ibb.co/d0JtSbq/magikarp.jpg',
        health: 244,
        skills: { Tackle: 40, 
        }
    },

    {
        name: 'Kabutops',
        image: 'https://i.ibb.co/FHhg3J7/kabutops.jpg',
        health: 324,
        skills: { "Mud Shot": 55, "Stone Edge": 100, "Night Slash": 70, "Aqua Jet": 40, 
        }
    },

    {
        name: 'Zapdos',
        image: 'https://i.ibb.co/6BRz2RX/zapdos.jpg',
        health: 384,
        skills: { "Thunder Shock": 40, "Drill Peck": 80, thunder: 110, "Zap Cannon": 120,
        }
    },

    {
        name: 'Mewtwo',
        image: 'https://i.ibb.co/8gtDNV0/mewtwo.jpg',
        health: 416,
        skills: { "Ancient Power": 60, "Aura Sphere": 80, Psystrike: 100, "Future Sight": 120,
        }
    },

]

// /////////////////////////////////////////////////
// ! Global Containers
// /////////////////////////////////////////////////

//Put a temporary Monster
let $myMonsters = [];
let $enemyMonsters = []
//When I select my Pokemon, I will push them into this container. 
//If I scale up to be able to fight Trainers, this will serve as the container too. 


///////////////////////////////////////////////////
//! Function to Second Scene 
///////////////////////////////////////////////////

const secondSceneFunc = () => {

    $('.firstScene').remove();

    $('body').css('background-color', 'blue');
    // $('body').css('background-image','url(https://xxx.png)');
    //Use this to change the background image at each scene 


    //!Title 
    const $secondScene = $('<div>').attr('id', 'secondScene');
    const $chooseYourPokemon = $('<img>').attr('src', 'https://fontmeme.com/permalink/210920/e26bd3fcca71ce04ba44949507240f87.png').attr('id','secondSceneTitle');
    const $squareContainer = $('<div>').attr('id', 'squareContainer');


    //!Creating secondScene Structure 
    $('body').append($secondScene);
    ($secondScene).append($chooseYourPokemon);
    ($secondScene).append($squareContainer);


    //!Create Monster Selection Tiles and Pictures
    for (let i = 0; i < allMonsters.length; i++) {
        const $square1 = $('<input>').attr({ type: 'image', src: allMonsters[i].image }).addClass('square');
        //! can we put in random to allMonsters[random] and limit i<21 to create 20 squares?

        const $square = $square1.text(`${allMonsters[i].name}`).on('click', submitMonster);
        //When I want to scale up, I can make it random. myMonster[random].image
        //.append(`<p>${myMonsters[i].name}</p>`).append($('<button>')).on('click',submitMonster); Used to work but now cant.

        ($('#squareContainer')).append($square);

    }

    const $secondButton = $('<button>').addClass('secondSceneButton').text('CONFIRM?')
    $('#secondScene').append($secondButton);
    $('.secondSceneButton').on('click', thirdSceneFunc)

}

const submitMonster = (event) => {

    //Gets the name of the monster selected
    const $currentMonster = event.currentTarget.textContent;
    console.log($currentMonster);

    //Gets the monster from the array and push it into the container
    //And maximum 1 monster. 
    if ($myMonsters.length < 1) {
        for (let i = 0; i < allMonsters.length; i++) {
            if ($currentMonster === allMonsters[i].name) {
                $myMonsters.push(allMonsters[i]);
            }
        }

    }


    console.log('My Monsters', $myMonsters);
}


///////////////////////////////////////////////////
// Function to Third Scene 
///////////////////////////////////////////////////

const thirdSceneFunc = () => {

    //! Removing secondScene and uploading new background
    $('#secondScene').remove();
    $('body').css('background-color', 'green');
    // $('body').css('background-image','url(https://xxx.png)');


    //! Creating layout for thirdScene
    const $myName = $('<img>').attr('src', 'https://i.ibb.co/SXGrwbx/What-is-your-name.png').attr('id','pokemontrainer');
    const $nameBox = $('<input>').attr({ type: 'text', id: 'nameBox' });
    const $thirdScene = $('<div>').attr('id', 'thirdScene');
    const $pokemonMaster = $('<img>').attr('src', 'https://i.ibb.co/ZXsFTW6/Ash-2.png');
    //https://i.ibb.co/SXGrwbx/What-is-your-name.png
    $('body').append($thirdScene);
    $('#thirdScene').append($pokemonMaster);
    ($thirdScene).append($myName);
    ($thirdScene).append($nameBox);

    // const $secondButton = $('<button>').addClass('secondSceneButton').text('CONFIRM?')
    // $('#secondScene').append($secondButton);
    // $('.secondSceneButton').on('click', thirdSceneFunc)

    //Adding Profile Picture


    const $thirdButton = $('<button>').addClass('thirdSceneButton').text('Storytime');
    $('#thirdScene').append($thirdButton);
    $('.thirdSceneButton').on('click', forthSceneFunc)

}

///////////////////////////////////////////////////
// Function to Forth Scene 
///////////////////////////////////////////////////

const forthSceneFunc = () => {
    console.log('4th Page')

    //! Removing secondScene and uploading new background
    $('#thirdScene').remove();
    $('body').css('background-color', 'pink');
    // $('body').css('background-image','url(https://xxx.png)');


    const $forthScene = $('<div>').attr('id', 'forthScene');
    $('body').append($forthScene);


    const $forthButton = $('<button>').addClass('forthSceneButton').text('TO BATTLE');
    $('#forthScene').append($forthButton);
    $('.forthSceneButton').on('click', battleSceneFunc)

}


///////////////////////////////////////////////////
// Function to Battle Scene 
///////////////////////////////////////////////////
//!CAN WE ADD BATTLE MUSIC?

const battleSceneFunc = () => {
    console.log('TO BATTLE POKEMON')

    $('#forthScene').remove();
    $('body').css('background-color', 'grey');
    // $('body').css('background-image','url(https://xxx.png)');

    //Created individual containers for each section
    const $battleLayout = $('<div>').attr('id', 'battleLayout');
    const $myBattleLayout = $('<div>').attr('id', 'myBattleLayout');
    const $enemyBattleLayout = $('<div>').attr('id', 'enemyBattleLayout');
    $('body').append($battleLayout);
    $('#battleLayout').append($enemyBattleLayout);
    $('#battleLayout').append($myBattleLayout);

    //Random choosing of enemy monsters
    const enemyRandom = Math.floor(Math.random() * (allMonsters.length));


    //EnemyRandom Monsters into container 
    const $enemycurrentMonster = allMonsters.splice(enemyRandom, 1)
    $enemyMonsters = $enemycurrentMonster;

    console.log($myMonsters);
    console.log($enemyMonsters);

    //2  IMAGE + TEXT containers --> one enemy pokemon and one my own
    //enemy monster
    const $enemyMonsterImage = $('<img>').attr({ src: $enemyMonsters[0].image });
    const $enemyMonsterHp = $('<h2>').text(`Enemy ${$enemyMonsters[0].name} has ${$enemyMonsters[0].health} HP`).attr('id','enemyMonsterHp');
    $('#enemyBattleLayout').append($enemyMonsterHp);
    $('#enemyBattleLayout').append($enemyMonsterImage);
 
    //my own monster
    const $myMonsterImage = $('<img>').attr({ src: $myMonsters[0].image });
    const $myMonsterHp = $('<h2>').text(`My ${$myMonsters[0].name} has ${$myMonsters[0].health} HP`).attr('id','myMonsterHp');
    $('#myBattleLayout').append($myMonsterImage);
    $('#myBattleLayout').append($myMonsterHp);

    
    //BUTTON for Fight->Skills
    const $myskillsDetails = (Object.keys($myMonsters[0].skills));
    const $dropdownSkills = $('<div>').addClass('skillsDropdown')
    $(`#battleLayout`).append($dropdownSkills);

    const $dropdownButton = $('<div>').attr('type','submit').addClass('skillButton').text('Fight').one('click', () => {
        for (i = 0; i < $myskillsDetails.length; i++) {
            $('.skillButton').append($('<button>').text($myskillsDetails[i]).addClass('skillButtons').on('click', skillAttack));
             //! HungryForMore: Toggling Class    
        }
    }
    )

    $('.skillsDropdown').append($dropdownButton);

    //BUTTON for Backpack -> Potions 
    const $backpackButton = $('<div>').attr('type','submit').text('Backpack').addClass('backpack').one('click', ()=> {
        const $potionButton = $('<button>').addClass('potion').text('Potion +50HP')
        $('.backpack').append($potionButton);
        
    });
    $('.skillsDropdown').append($backpackButton);


    //BUTTON for Pokemon (TBC)
    const $pokemonButton = $('<div>').attr('type','submit').text('Pokemon').addClass('pokemon');
    $('.skillsDropdown').append($pokemonButton);

    //BUTTON for Backpac
    //BUTTON for Running
    const $runButton = $('<div>').attr('type','submit').text('Run').addClass('run');
    $('.skillsDropdown').append($runButton);

}



///////////////////////////////////////////////////
// Function to Fighting
///////////////////////////////////////////////////

const skillAttack = (event) => {

    //Remove button after selecting.
    $('.skillButtons').hide();


    //Link selected skill to damage 
    console.log(event.currentTarget.textContent);
    const $myskillsName = (event.currentTarget.textContent);
    const $myskillsDamage = ($myMonsters[0].skills[$myskillsName]);


    //My Monster attack Enemy Monster
        //Check if HP === 0. If true, win. If false, continue.
    const $enemyremaindinghealth = $enemyMonsters[0].health - $myskillsDamage
    $enemyMonsters[0].health = $enemyremaindinghealth

    if ($enemyMonsters[0].health < 1) {
        $('#enemyMonsterHp').text(`Enemy ${$enemyMonsters[0].name} has fainted!`)
        alert('You Won!')
        $('.skillButtons').hide()
        //Link to next function -> slide in popup 

        const $winPopup = $('<div>').attr('type','submit').text('You Won!').addClass('winPop')
        $('#battleLayout').append($winPopup);
    }
    else {

        //Updating the HP when myMonster attacks and alerts
        $('#enemyMonsterHp').text(`Enemy ${$enemyMonsters[0].name} has ${$enemyMonsters[0].health} HP`)
        alert(`${$myMonsters[0].name} used ${$myskillsName}`)

            //Getting enemy's skill and damage
        const $enemyskillsDetails = (Object.keys($enemyMonsters[0].skills));
        console.log($enemyskillsDetails);
        const $randomNumber = Math.floor(Math.random()*($enemyskillsDetails.length));
        console.log($randomNumber);
        const $enemyskillsName = $enemyskillsDetails[$randomNumber];
        console.log($enemyskillsName);
        const $enemyskillsDamage = $enemyMonsters[0].skills[$enemyskillsName];
        console.log($enemyskillsDamage);   
        const $myremaindinghealth = $myMonsters[0].health - $enemyskillsDamage
        $myMonsters[0].health = $myremaindinghealth

    if ($myMonsters[0].health < 1) {
        alert(`You Lost!`)
        $('#myMonsterHp').text(`My ${$myMonsters[0].name} has fainted!`)
        $('.skillButtons').hide()


        //Link to next function-> Slide in pop up 

    }
    else {

        setTimeout(function(){ 
            $('#myMonsterHp').text(`My ${$myMonsters[0].name} has ${$myMonsters[0].health} HP`);
            alert(`${$enemyMonsters[0].name} used ${$enemyskillsName}`);
            $('.skillButtons').show();
            }, 1500)


    }

    }



    // console.log('Health Decrease');
    // console.log($enemyMonsters);

    // //Updating the HP when myMonster attacks and alerts

    // $('#enemyMonsterHp').text(`Enemy ${$enemyMonsters[0].name} has ${$enemyMonsters[0].health} HP`)
    // alert(`${$myMonsters[0].name} used ${$myskillsName}`)
    // //! Can use append instead lor if theres a violation 

    // //Delay, plus notification that enemy monster used what an attack
    // console.log('ENEMY MONSTER TIME')
    // console.log($enemyMonsters);

    // const $enemyskillsDetails = (Object.keys($enemyMonsters[0].skills));
    // console.log($enemyskillsDetails);
    // const $randomNumber = Math.floor(Math.random()*($enemyskillsDetails.length));
    // console.log($randomNumber);
    // const $enemyskillsName = $enemyskillsDetails[$randomNumber];
    // console.log($enemyskillsName);
    // const $enemyskillsDamage = $enemyMonsters[0].skills[$enemyskillsName];
    // console.log($enemyskillsDamage);

    //Enemy Attacks 

//     const $myremaindinghealth = $myMonsters[0].health - $enemyskillsDamage
//     $myMonsters[0].health = $myremaindinghealth

    
//     setTimeout(function(){ 
//         $('#myMonsterHp').text(`My ${$myMonsters[0].name} has ${$myMonsters[0].health} HP`);
//         alert(`${$enemyMonsters[0].name} used ${$enemyskillsName}`);
//         $('.skillsDropdown').show();
//         }, 1500)

//         if($myMonsters[0].health <= 0) {

//             alert(`You Lost!`)
//             $('.skillsDropdown').hide()
//         }

//         if ($enemyMonsters[0].health <= 0) {
//             alert(`You Won!`)
//             $('.skillsDropdown').hide();
//         }



}









const main = () => {

    $('.startButton').on('click', secondSceneFunc)
    console.log('hi4')





}


$(main);