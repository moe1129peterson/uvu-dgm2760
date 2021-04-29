

// Get data
async function getHotelData() {
    try {
        const response = await fetch('../10-Hotel_Booking/hotel.json')
        return await response.json() // Return the JSON object

    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}


getHotelData().then(data => {
    hotelData = data
    console.log(hotelData)
})


document.querySelector('#ab').addEventListener('click', hotelInfo)

document.querySelector('#grand').addEventListener('click', hotelInfo)

document.querySelector('#trend').addEventListener('click', hotelInfo)


function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)

    document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
    
    document.querySelector('#address').textContent = `${hotelChoice.address}`
    
    document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
    
    document.querySelector('#gym').textContent = `${hotelChoice.gym}`
    
    document.querySelector('#type').textContent = `${hotelChoice.roomTypes}`
    
    document.querySelector('#picture').src = `/10-Hotel_Booking/images/${hotelChoice.picture}`
}

