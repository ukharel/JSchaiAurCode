const marvel_heros = ['Thor','Ironman','Spiderman']
const dc_heros = ['Superman','Flash','batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)
const anotherArray= [1,2,3,[2,3],5,6,7,[4,7,8,[4,3,2,1]]]
const real_another_array = anotherArray.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("Ujjwal"))
 console.log(Array.from('Ujjwal'))
// console.log(Array.from({name: 'Ujjwal'}))

const bet1 = 100
const bet2 = 200
const bet3 = 300

console.log(Array.of(bet1,bet2,bet3))
