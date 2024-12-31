const num = [1,2,3,4]

const Total = num.reduce( (acc, currval) => {
    console.log(`acc : ${acc} and currval : ${currval}`)
    return acc + currval
},0 )

// console.log(Total)

shoppingCart = [
    {
        ItemName : 'Books',
        price: 990
    },
    {
        ItemName : 'Books',
        price: 990
    },
    {
        ItemName : 'Books',
        price: 990
    }

]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
// console.log(totalPrice)