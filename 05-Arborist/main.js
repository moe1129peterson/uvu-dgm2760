const trees = ['Oak', 'Pine', 'Aspen', 'Bald Cypress']

const errorElement = document.querySelector('#error')

const displayResults = document.querySelector('#displayResults')

const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    });
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
}

listTrees()

document.querySelector('#add_redwood').onclick = function() {
    trees.push("Redwood")
    listTrees()
}

// Add a pear to the start

document.querySelector('#add_pear').onclick = () => {
   trees.unshift("Pear")
   listTrees()
}

// Remove the first tree

document.querySelector('#remove_tree1').onclick = () => {
   if (trees.length > 0) {
       trees.shift()
       listTrees()
   } else {
       errorElement.textContent = 'Error! Cannot remove the first tree because there are no trees to remove.'
   }
}

// Remove the second tree

document.querySelector('#remove_tree2').onclick = () => {
   if (trees.length > 1) {
       trees.splice(1, 1) 
       listTrees()
   } else {
       errorElement.textContent = 'Error! Cannot remove the second tree because there are not two trees here.'
   }
}

// Remove the last tree

document.querySelector('#remove_treeLast').onclick = () => {
   if (trees.length > 0) {
       trees.pop() 
       listTrees()
   } else {
       errorElement.textContent = 'Error! Cannot remove the last tree because there are is no last tree.'
   }
}

// Sort the trees A-Z

document.querySelector('#sortTrees').onclick = () => {
   if (trees.length > 1) {
       trees.sort() 
       listTrees()
   } else {
       errorElement.textContent = 'Error! There are no trees here to sort.'
   }
}

// Make all the trees lower case

document.querySelector('#lowerTrees').onclick = () => {
   if (trees.length > 1) {
       displayResults.classList.add('lowercase');
   } else {
       errorElement.textContent = 'Error! There are no trees to make lowercase here.'
   }
}

// Get the name of number 3 tree

document.getElementById('showName3').onclick = () => {
   if (trees.length > 2) {
       let thirdItem = trees[2];
        displayResults.innerHTML = thirdItem;
   } else {
       errorElement.textContent = 'Error! There are not enough trees to do that.'
   }
}

// Get the name of number 4 tree

document.getElementById('showName4').onclick = () => {
    if (trees.length > 3) {
        let forthItem = trees[3];
         displayResults.innerHTML = forthItem;
    } else {
        errorElement.textContent = 'Error! There are not enough trees to do that.'
    }
 }