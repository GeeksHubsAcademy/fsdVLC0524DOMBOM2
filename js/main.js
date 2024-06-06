// let inputs = document.getElementsByClassName("input-basic");
// let arrayInputs = Array.from(inputs);

// //MAAAAAAAAAAAAL
// // let username = document.getElementById("username")
// // let email = document.getElementsByName("email")
// // let password = document.getElementsByName("password")
// // let surname = document.getElementsByName("surname")

// // console.log(username)
// // username.addEventListener("input", (e)=> {
// //     console.log(e.target.value)
// //     if(e.target.value === "cristo"){
// //         msg.innerHTML = `no te puedes llamar así`
// //     } else {
// //         msg.innerHTML = ``
// //     }
// // })

// for (let i = 0; i < arrayInputs.length; i++) {
//   arrayInputs[i].addEventListener("input", (e) => {
//     // console.log(`Estás escribiendo en ${e.target.name}`)
//   });

//   arrayInputs[i].addEventListener("focusout", (e) => {
//     if (e.target.value.length <= 8) {
//       document.getElementById(
//         "msg" + e.target.name
//       ).innerHTML = `El campo ${e.target.name} tiene que tener 8 caracteres como mínimo.`;
//     } else {
//         document.getElementById(
//             "msg" + e.target.name
//           ).innerHTML = ``;
//     }
//   });
// }

// let inputs = document.getElementsByClassName("input-class");

// let arrayInputs = Array.from(inputs);

// for (let i = 0; i < arrayInputs.length; i++) {
//   arrayInputs[i].addEventListener("input", () => {

//     console.log("hola")
//   });
// }
// function changeBox() {
//   document.getElementById("username").style.display = "none";
//   document.getElementById("textarea").style.display = "block";
// }

//PRIMERO
let input = document.getElementById("username");
let clown = document.getElementById("clown");
let mensaje = document.getElementById("mensaje");

//SEGUNDO
input.addEventListener("input", (e)=>{
  //TERCERO
  mensaje.innerHTML = e.target.value;
})

input.addEventListener("focus", (e)=>{
  clown.innerHTML = `<img src="../img/clown.gif" alt="payaso"/>`
})

input.addEventListener("focusout", (e)=>{
  clown.innerHTML = ``
  mensaje.innerHTML = ``
  input.value = ``
})