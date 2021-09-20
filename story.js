console.log('hi 1')
//myMonsters[i].image
const allMonsters = [
    {
        name: 'Charmander',
        image: 'https://i.ibb.co/VWq5ttL/charizard-120x120.jpg',
        health: 309,
        skills: {
            scratch: 40, ember: 40, "dragon breath": 60, "fire fang": 65, slash: 70, flamethrower: 90
        }
    },

    {
        name: 'Charmeleon',
        image: 'https://i.ibb.co/NZZff7L/bulbasaur-1.jpg',
        health: 100,
        skills: { tackle: 10, thunder: 60 }
    },

    {
        name: 'Charlizard',
        image: 'https://i.ibb.co/0tCWNjL/wartortle-2.jpg',
        health: 200,
        skills: { tackle: 40, thunder: 100 }
    },

    {
        name: 'Bulbasaur',
        image: 'https://i.ibb.co/NZZff7L/bulbasaur-1.jpg',
        health: 200,
        skills: { tackle: 100, thunder: 60 }
    },

    {
        name: 'Ivysaur',
        image: 'https://i.ibb.co/VWq5ttL/charizard-120x120.jpg',
        health: 300,
        skills: { tackle: 40, thunder: 100 }
    },

    {
        name: 'Venusaur',
        image: 'https://i.ibb.co/0tCWNjL/wartortle-2.jpg',
        health: 309,
        skills: {
            scratch: 40, ember: 40, "dragon breath": 60, "fire fang": 65, slash: 70, flamethrower: 90
        }
    },

    {
        name: 'Cat2',
        image: 'https://i.ibb.co/VWq5ttL/charizard-120x120.jpg',
        health: 100,
        skills: { tackle: 10, thunder: 60 }
    },

    {
        name: 'Dog3',
        image: 'https://i.ibb.co/0tCWNjL/wartortle-2.jpg',
        health: 200,
        skills: { tackle: 40, thunder: 100 }
    },

    {
        name: 'Cat3',
        image: 'https://i.ibb.co/VWq5ttL/charizard-120x120.jpg',
        health: 200,
        skills: { tackle: 100, thunder: 60 }
    },

    {
        name: 'Dog4',
        image: 'https://i.ibb.co/NZZff7L/bulbasaur-1.jpg',
        health: 300,
        skills: { tackle: 40, thunder: 100 }
    },

    {
        name: 'Charmander2',
        image: 'https://i.ibb.co/VWq5ttL/charizard-120x120.jpg',
        health: 309,
        skills: {
            scratch: 40, ember: 40, "dragon breath": 60, "fire fang": 65, slash: 70, flamethrower: 90
        }
    },

    {
        name: 'Cat3',
        image: 'https://i.ibb.co/VWq5ttL/charizard-120x120.jpg',
        health: 100,
        skills: { tackle: 10, thunder: 60 }
    },

    {
        name: 'Dog4',
        image: 'https://i.ibb.co/VWq5ttL/charizard-120x120.jpg',
        health: 200,
        skills: { tackle: 40, thunder: 100 }
    },

    {
        name: 'Cat4',
        image: 'https://i.ibb.co/VWq5ttL/charizard-120x120.jpg',
        health: 200,
        skills: { tackle: 100, thunder: 60 }
    },

    {
        name: 'Dog5',
        image: 'https://i.ibb.co/VWq5ttL/charizard-120x120.jpg',
        health: 300,
        skills: { tackle: 40, thunder: 100 }
    },

    {
        name: 'Charmander3',
        image: 'https://i.ibb.co/VWq5ttL/charizard-120x120.jpg',
        health: 309,
        skills: {
            scratch: 40, ember: 40, "dragon breath": 60, "fire fang": 65, slash: 70, flamethrower: 90
        }
    },

    {
        name: 'Cat4',
        image: 'https://i.ibb.co/VWq5ttL/charizard-120x120.jpg',
        health: 100,
        skills: { tackle: 10, thunder: 60 }
    },

    {
        name: 'Dog5',
        image: 'https://i.ibb.co/VWq5ttL/charizard-120x120.jpg',
        health: 200,
        skills: { tackle: 40, thunder: 100 }
    },

    {
        name: 'Cat5',
        image: 'https://i.ibb.co/VWq5ttL/charizard-120x120.jpg',
        health: 200,
        skills: { tackle: 100, thunder: 60 }
    },

    {
        name: 'Dog6',
        image: 'https://i.ibb.co/VWq5ttL/charizard-120x120.jpg',
        health: 300,
        skills: { tackle: 40, thunder: 100 }
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
    const $chooseYourPokemon = $('<h1>').attr('id', 'secondScene1').text('CHOOSE YOUR TEAM');
    const $squareContainer = $('<div>').attr('id', 'squareContainer');


    //!Creating secondScene Structure 
    $('body').append($secondScene);
    ($secondScene).append($chooseYourPokemon);
    ($secondScene).append($squareContainer);


    //!Create Monster Selection Tiles and Pictures
    for (let i = 0; i < allMonsters.length; i++) {
        const $square1 = $('<input>').attr({ type: 'image', src: allMonsters[i].image}).addClass('square');
        //! How do I key in myMonster[i].image into attr? I tried `` ${} and it doesnt seem to work.

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
    if ($myMonsters.length < 1 ) {
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
    const $myName = $('<h2>').text("Who am I?");
    const $nameBox = $('<input>').attr({ type: 'text', id: 'nameBox' });
    const $thirdScene = $('<div>').attr('id', 'thirdScene');
    const $pokemonMaster = $('<img>').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbUnZa63f1NZ3lSsKzq27a7r3yJH6lSrN7yeKZBCjXkwMAaO7ISQpbsYHW2A5YuJOKFw&usqp=CAU');
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

    //2 image containers --> one enemy pokemon and one my own
    //2 text containers --> one enemy pokemon and one my own
    //1 container holding 4 buttons --> Fight, Run 

}



const main = () => {

    $('.startButton').on('click', secondSceneFunc)
    console.log('hi4')





}


$(main);