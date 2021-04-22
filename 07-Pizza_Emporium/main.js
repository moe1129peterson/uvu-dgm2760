let message 

const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',
    buildPizza: function() {
        console.log('build pizza method has been called')
        message = `Baking a ${pizza.size} pizza on some ${pizza.crust} crust with high-quality ${pizza.topping} and
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



// Crust Option Buttons
document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')

document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

// Topping Option Buttons

document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')

document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')

// Size Option Buttons

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')

document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

// Order Option Buttons

document.querySelector('#build').addEventListener('click', pizza.buildPizza)

document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)
