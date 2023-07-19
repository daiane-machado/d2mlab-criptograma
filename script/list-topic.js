
const topics = [
  {
    id: "constitucional",
    name: "Direito Constitucional"
  },
  {
    id: "administrativo",
    name: "Direito Administrativo"
  }
]

let list = document.querySelector("#list-topic");
let item;

topics.forEach(n => {
  item = document.createElement("li");
  item.id = n.id;
  item.textContent = n.name; 
  list.appendChild(item);
})

addEventListener("click", (e)=> {
  console.log(e.target.id)
  window.location.href =`direito-constitucional.html`
})

console.log("Eii")