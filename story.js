console.log('hi 1')
//myMonsters[i].image
const allMonsters = [
    {
        name: 'Venusaur',
        image: 'https://i.ibb.co/LJhfvSj/venusaur.jpg',
        health: 364,
        skills: {
            "petal blizzard": 90, "razor leaf": 55, "seed bomb": 80, "Vine Whip": 45,
        }
    },

    {
        name: 'Charlizard',
        image: 'https://i.ibb.co/VLBMRrD/charizard.jpg',
        health: 360,
        skills: { flamethrower: 90, ember: 40, "dragon breath": 60, "fire fang": 65, 
        }
    },

    {
        name: 'Blastoise',
        image: 'https://i.ibb.co/r5pN8xh/blastoise.jpg',
        health: 362,
        skills: { "flash cannon": 80, "water gun": 40, "rapid spin": 50, "aqua tail": 90,  
        }
    },

    {
        name: 'Butterfree',
        image: 'https://i.ibb.co/QX5Nhnx/butterfree.jpg',
        health: 324,
        skills: { "bug bite": 60, gust: 40, confusion: 50, "air slash": 75,
        }
    },

    {
        name: 'Beedrill',
        image: 'https://i.ibb.co/KKkTNJs/beedrill.jpg',
        health: 334,
        skills: { peck: 35, "poison jab": 80, outrage: 120, "pin missle": 25,
        }
    },

    {
        name: 'Pidgeot',
        image: 'https://i.ibb.co/k5TGv26/pidgeot.jpg',
        health: 320,
        skills: {
            gust: 40, "quick attack": 40, "wing attack": 60, "sky attack": 120,
        }
    },

    {
        name: 'Nidoqueen',
        image: 'https://i.ibb.co/712LsTF/nidoqueen.jpg',
        health: 384,
        skills: { bite: 60, "earth power": 90, "double kick": 30, scratch: 40,
        }
    },

    {
        name: 'Gengar',
        image: 'https://i.ibb.co/DLfWZFN/gengar.jpg',
        health: 324,
        skills: { "shadow ball": 80, "dream eater": 100, "shadow punch": 60, lick: 30, 
        }
    },

    {
        name: 'Alakazam',
        image: 'https://i.ibb.co/ZWj5F7P/alakazam.jpg',
        health: 314,
        skills: { confusion: 50, psybeam: 65, psychic: 90, "future signt": 120, 
        }
    },

    {
        name: 'Clefable',
        image: 'https://i.ibb.co/xjX0G74/clefable.jpg',
        health: 394,
        skills: { "meteor mash": 0, "disarming voice": 45, moonblast: 95, pound: 40, 
        }
    },

    {
        name: 'Ninetales',
        image: 'https://i.ibb.co/vmjkDS4/ninetales.jpg',
        health: 350,
        skills: {
            ember: 40, flamethrower: 40, "fire spin": 60, inferno: 100,
        }
    },

    {
        name: 'Golbat',
        image: 'https://i.ibb.co/PTvR52B/golbat.jpg',
        health: 354,
        skills: { astonish: 30, "poison fang": 50, "leech life": 80, "air slash": 75,
        }
    },

    {
        name: 'Vileplume',
        image: 'https://i.ibb.co/DG4W7M6/vileplume.jpg',
        health: 354,
        skills: { acid: 40, "giga drain": 75, "moon blast": 95, "petal dance": 120,
        }
    },

    {
        name: 'Flareon',
        image: 'https://i.ibb.co/QrK2GY5/flareon.jpg',
        health: 334,
        skills: { ember: 40, "take down": 90, swift: 60, "flare blitz": 120, 
        }
    },

    {
        name: 'Dragonite',
        image: 'https://i.ibb.co/hLVVFL6/dragonite.jpg',
        health: 386,
        skills: { "hyper beam": 150, "dragon tail": 60, "thunder punch": 75, twister: 40,
        }
    },

    {
        name: 'Gyarados',
        image: 'https://i.ibb.co/S5Dq6V6/gyarados.jpg',
        health: 394,
        skills: {
            "ice fang": 40, whirlpool: 35, "hydro pump": 110, "hyper beam": 150,
        }
    },

    {
        name: 'Magikarp',
        image: 'https://i.ibb.co/d0JtSbq/magikarp.jpg',
        health: 244,
        skills: { tackle: 40, 
        }
    },

    {
        name: 'Kabutops',
        image: 'https://i.ibb.co/FHhg3J7/kabutops.jpg',
        health: 324,
        skills: { "mud shot": 55, "stone edge": 100, "night slash": 70, "aqua jet": 40, 
        }
    },

    {
        name: 'Zapdos',
        image: 'https://i.ibb.co/6BRz2RX/zapdos.jpg',
        health: 384,
        skills: { "thunder shock": 40, "drill peck": 80, thunder: 110, "zap cannon": 120,
        }
    },

    {
        name: 'Mewtwo',
        image: 'https://i.ibb.co/8gtDNV0/mewtwo.jpg',
        health: 416,
        skills: { "ancient power": 60, "aura sphere": 80, psystrike: 100, "future sight": 120,
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

const battleSceneFunc = () => {
    console.log('TO BATTLE POKEMON')

    $('#forthScene').remove();
    $('body').css('background-color', 'grey');
    // $('body').css('background-image','url(https://xxx.png)');


    const $battleLayout = $('<div>').attr('id', 'battleLayout');
    $('body').append($battleLayout);


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
    $('#battleLayout').append($enemyMonsterImage);
    $('#battleLayout').append($enemyMonsterHp);
    //my own monster
    const $myMonsterImage = $('<img>').attr({ src: $myMonsters[0].image });
    const $myMonsterHp = $('<h2>').text(`My ${$myMonsters[0].name} has ${$myMonsters[0].health} HP`).attr('id','myMonsterHp');
    $('#battleLayout').append($myMonsterImage);
    $('#battleLayout').append($myMonsterHp);

    //1 container holding 4 buttons --> Fight, Run 
    //BUTTON for Fight->Skills
    const $myskillsDetails = (Object.keys($myMonsters[0].skills));
    const $dropdownSkills = $('<div>').addClass('skillsDropdown')
    $(`#battleLayout`).append($dropdownSkills);

    const $dropdownButton = $('<button>').addClass('skillButton').text('Fight').on('click', () => {
        for (i = 0; i < $myskillsDetails.length; i++) {
            $('.skillsDropdown').append($('<button>').text($myskillsDetails[i]).addClass('skillButtons').on('click', skillAttack));

        }
    }
    )

    const $backpackButton = $('<button>').text('Backpack').addClass('backpack');
    $('.skillsDropdown').append($backpackButton);

    console.log($myMonsters);
    console.log(Object.keys($myMonsters[0].skills)[0]);
    console.log((Object.keys($myMonsters[0].skills)).length);



    $('.skillsDropdown').append($dropdownButton);


    //BUTTON for Pokemon (TBC)
    //BUTTON for Backpack
    //BUTTON for Running

}



///////////////////////////////////////////////////
// Function to Fighting
///////////////////////////////////////////////////

const skillAttack = (event) => {

    //Remove button after selecting.
    $('.skillsDropdown').hide();


    //Link selected skill to damage 
    console.log(event.currentTarget.textContent);
    const $myskillsName = (event.currentTarget.textContent);
    const $myskillsDamage = ($myMonsters[0].skills[$myskillsName]);


    //My Monster attack Enemy Monster
        //Check if HP === 0. If true, win. If false, continue.
        

    const $enemyremaindinghealth = $enemyMonsters[0].health - $myskillsDamage
    $enemyMonsters[0].health = $enemyremaindinghealth


    console.log('Health Decrease');
    console.log($enemyMonsters);

    //Updating the HP when myMonster attacks and alerts

    $('#enemyMonsterHp').text(`Enemy ${$enemyMonsters[0].name} has ${$enemyMonsters[0].health} HP`)
    alert(`${$myMonsters[0].name} used ${$myskillsName}`)
    //! Can use append instead lor if theres a violation 

    //Delay, plus notification that enemy monster used what an attack
    console.log('ENEMY MONSTER TIME')
    console.log($enemyMonsters);

    const $enemyskillsDetails = (Object.keys($enemyMonsters[0].skills));
    console.log($enemyskillsDetails);
    const $randomNumber = Math.floor(Math.random()*($enemyskillsDetails.length));
    console.log($randomNumber);
    const $enemyskillsName = $enemyskillsDetails[$randomNumber];
    console.log($enemyskillsName);
    const $enemyskillsDamage = $enemyMonsters[0].skills[$enemyskillsName];
    console.log($enemyskillsDamage);

    //Enemy Attacks 

    const $myremaindinghealth = $myMonsters[0].health - $enemyskillsDamage
    $myMonsters[0].health = $myremaindinghealth

    
    setTimeout(function(){ 
        $('#myMonsterHp').text(`My ${$myMonsters[0].name} has ${$myMonsters[0].health} HP`);
        alert(`${$enemyMonsters[0].name} used ${$enemyskillsName}`);
        $('.skillsDropdown').show();
        }, 1500)

        if($myMonsters[0].health <= 0) {

            alert(`You Lost!`)
            $('.skillsDropdown').hide()
        }

        if ($enemyMonsters[0].health <= 0) {
            alert(`You Won!`)
            $('.skillsDropdown').hide();
        }



}









const main = () => {

    $('.startButton').on('click', secondSceneFunc)
    console.log('hi4')





}


$(main);