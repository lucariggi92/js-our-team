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

/*Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.

(trovate l’array del team all’interno della cartella in allegato)

Curare meglio l'aspetto grafico
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, 
anche vostra se volete sentirvi parte del team! 😀)*/

//l'obiettivo è stampare queste card

//ho un array di oggetti e voglio selezionare ogni singolo membro e vedrli tutti in console
const nameElem = document.querySelector("h5");
const roleElem = document.querySelector("#role");
const emailElem = document.querySelector("#email");
const imgElem = document.querySelector("img");
const form = document.querySelector("form")


const teamContainer = document.querySelector("#team-container")
const teamCard = document.querySelector(".card")


 //se voglio stamparli?
function creaCard (name, role, email, img){
 
for(let i =0; i<teamMembers.length; i++){
 const curMember = teamMembers[i] //seleziono un oggetto
nameElem.innerHTML = curMember.name

//creo le variabili degli elementi dell'oggetto
//const name = curMember["name"];
//const role = curMember["role"];   //---> posso usare la destrutturazione 
//onst email = curMember["email"];
//const img = curMember["img"];

const{name, role, email, img} = curMember;
const card = `<div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="...">
                </div>

                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Name</h5>
                        <p class="card-text" id="role">Role</p>
                        <p class="card-text"><small class="text-body-secondary" id="email">email</small></p>
                    </div>
                </div>
            </div>
        </div>`
}
/*return  
`<section class="container border mt-5">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="... ${}" class="img-fluid rounded-start" alt="...">
                </div>

                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Name</h5>
                        <p class="card-text" id="role">Role</p>
                        <p class="card-text"><small class="text-body-secondary" id="email">email</small></p>
                    </div>
                </div>
            </div>
        </div>
    </section>`

}*/

return name;
}
