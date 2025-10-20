/* 
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.
*/

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//Seleziono il nodo della riga
const rowElement = document.querySelector("#members .row")

let items = "";

for (let i = 0; i < teamMembers.length; i++) {
  //Salvo l'elemento singolo(in questo caso l'oggetto)
  const member = teamMembers[i];
  //Destrutturo l'oggetto salvando le sue keys in delle variabili omonime
  const {name, role, email, img} = member;
  //Salvo in una variabile il markup per creare una colonna con la card
  const markup = `
  <div class="col">
    <div class="card rounded-0">
      <div class="row g-0">
        <div class="col-4">
          <img src="./assets/${img}" alt="" id="cardImg" class="img-fluid">
        </div>
        <div class="col-8">
          <div class="card-body pb-0">
            <h5 id="fullName" class="card-title">${name}</h5>
            <p id="role" class="card-text mb-0">${role}</p>
            <a id="mail" class="card-text">${email}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `

  items += markup;
  //console.log(markup);  
}

//console.log(items);
//Modifico l'html dell'elemento riga con i membri dell'array
rowElement.innerHTML = items;