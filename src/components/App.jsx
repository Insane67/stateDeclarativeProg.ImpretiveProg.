import React from "react";

// Imperative Programming
//JS ile şimdiye kadar yaptığımız programlama
//Öğeye zorunlu olarak farklı şeyler yapmasını söylüyoruz
// function strike() {
//   document.getElementById("root").style.textDecoration = "line-through";
// }
// function unStrike() {
//   document.getElementById("root").style.textDecoration = null;
// }

// function App() {
//   return (
//     <>
//       <p>Buy milk</p>
//       <button onClick={strike}>Change to strike through</button>
//       <button onClick={unStrike}>Change back</button>
//     </>
//   );
// }

// Declarative Programming
//State e bağlı olarak farklı koşullar altında kullanıcı
//arayüzümüzün nasıl görünmesi gerektiğini bildiriyoruz

let isDone = false;

function strike() {
  isDone = true;
  console.log(isDone);
}

//Burada butona tıklayınca state değişse de 1 kere renderlandıktan
//sonra uı da bir değişiklik olamaz.
//Bunun için hooks kullanacağız.

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>change</button>
    </div>
  );
}

export default App;
