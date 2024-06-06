let inputs = document.getElementsByClassName("input-basic");
let arrayInputs = Array.from(inputs);

//MAAAAAAAAAAAAL
// let username = document.getElementById("username")
// let email = document.getElementsByName("email")
// let password = document.getElementsByName("password")
// let surname = document.getElementsByName("surname")

// console.log(username)
// username.addEventListener("input", (e)=> {
//     console.log(e.target.value)
//     if(e.target.value === "cristo"){
//         msg.innerHTML = `no te puedes llamar así`
//     } else {
//         msg.innerHTML = ``
//     }
// })

for (let i = 0; i < arrayInputs.length; i++) {
  arrayInputs[i].addEventListener("input", (e) => {
    // console.log(`Estás escribiendo en ${e.target.name}`)
  });

  arrayInputs[i].addEventListener("focusout", (e) => {
    if (e.target.value.length <= 8) {
      document.getElementById(
        "msg" + e.target.name
      ).innerHTML = `El campo ${e.target.name} tiene que tener 8 caracteres como mínimo.`;
    } else {
        document.getElementById(
            "msg" + e.target.name
          ).innerHTML = ``;
    }
  });
}
