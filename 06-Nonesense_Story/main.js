
function tellStory() {
    const noun = document.querySelector('#nouns');
    
    const nounArray = noun.value.trim().split(' ');

    const adjectives = document.querySelector('#adjectives');

    const adjectiveArray = adjectives.value.trim().split(' ');

    const verbs = document.querySelector('#verbs');

    const verbArray = verbs.value.trim().split(' ');

    const displayResults = document.querySelector('#story')

    const myStory = `Once upon a time, there were four ${adjectiveArray[0]} ${nounArray[0]}s named Mopsy, Pig-Wig, Tom and Peter. They lived with their mother underneath a 
    ${nounArray[1]} near a ${adjectiveArray[1]} ${nounArray[2]}. Now, my dears, said ${adjectiveArray[2]} Mrs. Rabbit, you may go over the ${nounArray[3]} or around the ${nounArray[4]},
     but do not go into Mr. McGregor's ${nounArray[5]}, your father had an accident there and he was put in a ${nounArray[6]} by Mrs. McGregor. Now ${verbArray[0]} along, and don't 
    get into mischief. I am going ${verbArray[1]}ing.`;

    displayResults.innerHTML = myStory;

    // document.querySelector('#story').onclick = myStory;
    story.classList.add('lowercase');
}