
function duplicateMenu() {
    // Get all of the anchor elements form the top menu
    let  topList = document.querySelectorAll('ul#primaryNavigation li a')

    console.log(topList)

    // Create the new list items for the bottom of the page
    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        newLink.innerHTML = menuItem.innerHTML
        newLI.appendChild(newLink)

        // copy the textContent from upper menu to new menu
        // append children to make them appear in the DOM
        
        newList.appendChild(newLI)

        console.log('duplicateMenu has been called')
    })
    
    document.getElementById('smallNavArea').appendChild(newList)
}

duplicateMenu()