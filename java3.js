// const me = {
//     name: "Turbold",
//     age: 19,
//     hobbies: ["Basketball", "volleyball", "soccer"]
// }
// const age = me.age >= 18 ? "Tom hun" :"Batsaan";
// console.log(me.hobbies[0] + "  " + age)

// const product = { 
// name: "Утас", 
// price: 1200000, 
// stock: 0 
// }
// 2
// const stock = product.stock >= 0 ? "Duussan" :"Baigaa";
// console.log("Utas: " + stock)

// const students = [
//     { name: "Бат", score: 85 },
// { name: "Сараа", score: 92 },
// { name: "Дорж", score: 45 },
// { name: "Номин", score: 58 } 
// ];
// for(let i = 0; students.length > i; i++) {
//     const s = students[i];
//     const result = s.score >= 60 ?"Tentssen" :"Tentseegu";
//     console.log(s.name + ": " + result)
// }

// const students2 = [
// { name: "Бат", score: 85 },
// { name: "Сараа", score: 92 },
// { name: "Дорж", score: 45 },
// { name: "Номин", score: 58 } 
// ]; 
// let best = students[0];
// for( let p = 0; p < students2.length; p++
// ) {
//    const d = students2[p]
//     best = d.score > best.score ? d : best;

// }
// console.log(best.score)
const cart = [
{ name: "Ном", price: 15000, qty: 2 },
{ name: "Үзэг", price: 2000, qty: 5 },
{ name: "Цүнх", price: 35000, qty: 1}];
let totalprice = null
for(let f = 0; f < cart.length; f++) {
   totalprice = totalprice + cart[f].price * cart[f].qty;
}
   alltotal = totalprice > 50000 ? "Unegui" :"Unetei 5000";
    console.log("Niit " + totalprice)
    console.log("Hurgelt " + alltotal)