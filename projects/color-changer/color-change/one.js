const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e.target)
    
    switch (e.target.id){
        case 'grey':
        case 'blue':
        case 'red':
        case 'pink':
            body.style.backgroundColor = e.target.id;
            break;
        default:
            console.log('Invalid color')
            break;
    
    }
    // if (e.target.id === 'grey'){
    //     body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'red'){
    //     body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'blue'){
    //     body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'pink'){
    //     body.style.backgroundColor = e.target.id;
    // }
})

}
    )