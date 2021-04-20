// When function becomes part of an object it is called a method.

let message 

const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',
    buildPizza: function() {
        console.log('build pizza method has been called')
        message = `Baking a ${pizza.size} pizza on ${pizza.crust} crust with ${pizza.topping} and
        cheese just for you.`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: () => {
        console.log('shoppingList method has been called')
        let flour = 1
        if (pizza.crust === 'thick') flour *= 2
        if (pizza.size === 'large') flour *= 2
        let topping = 1
        if (pizza.size === 'large') topping *= 2
        
        
        message = `You will need to purchase ${flour} cups of flour and 
        ${topping} lb of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message
    }
}


// old version
// let thinButton = document.querySelector('#thin')
// thinButton.addEventListener('click',function () {
//    return pizza.crust = 'thin'
// })


// addEventListener takes two arguments, first is a string that is the event you want to listen to.
// Second argument, takes a function.
// Crust Buttons
document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')

document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

// Topping Buttons

document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')

document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')

// Size Buttons

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')

document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')




// old version
// let buildButton = document.querySelector('#build')
// buildButton.addEventListener('click', function() {
//     pizza.buildPizza()
// })

document.querySelector('#build').addEventListener('click', pizza.buildPizza)

document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)

//hook up the shoppingList method call here