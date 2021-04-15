
function tellStory() {
    //nounArray 
    // create noun array that is assigned the value of querySelector('#noun') <- the argument is whatever is in the html. Going to have to lowercase String split()
    // After that, need to repeat for adjectives and verbs. This will be all the arrays I need

    const noun = document.querySelector('#nouns');
    
    const nounArray = noun.split('#nouns',7);

    const adjectives = document.querySelector('#adjectives');

    const adjectiveArray = adjectives.split(' ',3);

    const verbs = document.querySelector('#verbs');

    const verbArray = verbs.split(' ',2);

    const myStory = `Once upon a time, there were four ${adjectiveArray[0]} ${nounArray[0]}s named Flopsy, Mopsy, Gobsy and Peter. They lived with their mother underneath a 
    ${nounArray[1]} near a ${adjectiveArray[1]} ${nounArray[2]} Now, my dears, said ${adjectiveArray[2]} Mrs. Rabbit, you may go over the ${nounArray[3]} or around the ${nounArray[4]},
     but do not go into Mr. McGregor's ${nounArray[5]}, your father had an accident there and he was put in a ${nounArray[6]} by Mrs. McGregor. Now ${verbArray[0]} along, and don't 
    get into mischief. I am going ${verbArray[1]}ing.`;

    document.querySelector('#story').onclick = myStory;
    story.classList.add('lowercase');
    

    // document.querySelector('#remove_treeLast').onclick = () => {
    //     if (trees.length > 0) {
    //         trees.pop() 
    //         listTrees()
    //     } else {
    //         errorElement.textContent = 'Error, cannot remove the last tree because there are is no tree.'
    //     }
    //  }

    // Then, get reference to the querySelector('#story') assign value of myStory
}