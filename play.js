
//Select the start Game Button

document.querySelector(".control-button span").onclick = function() {

    //prompt Window To Ask Name

    let yourName  = prompt("What Is Your Name?");

    //If Name Is Empty

    if(yourName == null || yourName == ""){

        //set name to Unknown

        document.querySelector('.name span').innerHTML="UnKnown"

        //NAme is not empty   

    }else{

        //set NAme To Your Name

        document.querySelector('.name span').innerHTML=yourName;

    }

    //remove Splash screen

    document.querySelector('.control-button').remove();

};

let duration = 500;

let blocksContainer = document.querySelector('.memory-game-blocks');

let blocks = Array.from(blocksContainer.children);

// in this we have made an array with a  property called spreed operator(Range of keys)

let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);

//add order css property to game blocks

blocks.forEach((block,index) => {

    block.style.order = orderRange[index];

    //add click event

    block.addEventListener('click' ,function (){

        //trigger the flip block function

        flipBlock(block);

    });

});

//flip block function

function flipBlock(selectedBlock){

    // add class is flipped

selectedBlock.classList.add('is-flipped');

    //collect all fliped blocks

    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped')); 

    // if there is two selected blocks

if (allFlippedBlocks.length === 2 ){

    //stop clicking function

stopClicking();

        //check matched block function

checkMatchedBlocks(allFlippedBlocks[0],allFlippedBlocks[1])

    }

};

function stopClicking() {
    // add class no clicking

    blocksContainer.classList.add('no-clicking');

    setTimeout(() =>{

        //remove class no clicking after the duration

       blocksContainer.classList.remove('no-clicking');

    },duration);

};

//check matched blocks

function checkMatchedBlocks(firstBlock,secondBlock) {
  
    let TriesElement=document.querySelector('.tries span')
  
  if(firstBlock.dataset.technology === secondBlock.dataset.technology ){

    firstBlock.classList.remove('is-flipped');

    secondBlock.classList.remove('is-flipped');
    
    firstBlock.classList.add('has-match');

    secondBlock.classList.add('has-match');
    
    }else{
        TriesElement.innerHTML = parseInt(TriesElement.innerHTML) + 1;

    setTimeout(() => {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

    },duration);
    
    }

};


//shuffle function

function shuffle(array){

    let current=array.length,

    temp,

    random;

    while(current > 0){

        random = Math.floor(Math.random() * current );

        //decrease length by 1

        current--;

        // save current Element in stash

        temp = array[current];

        //current Element = random element

        array[current]= array[random];

        //random element = get element from stash

        array[random]=temp;

    }

    return array;

};