// DATI
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

const cardsContainer = document.getElementById("cards-container");
const formElem = document.getElementById("form-new-member");
const inputs = document.querySelectorAll("#form-new-member input");
const [nameInput, roleInput, emailInput, imgInput] = inputs;

// FUNZIONE

// Funzione che genera card con dati del membro
const createCard = ({ name, role, email, img }) => {
    return `
         <div class="col">
             <div class="card d-flex">
                 <div class="image-col">
                    <img src="./${img}" alt="${name}">
                 </div>
                 <div class="caption-col d-flex">
                    <h2>${name}</h2>
                    <p>${role}</p>
                    <a href="">${email}</a>
                 </div>
             </div>
         </div>
        `;
};

// Funzione che stampa card per ogni membro di un'array
const printCards = (array) => {
    let memberCard = "";
    for (let i = 0; i < teamMembers.length; i++) {
        curMember = teamMembers[i];
        memberCard += createCard(curMember);
    }
    cardsContainer.innerHTML = memberCard;
}

// Funzione che aggiunge card nuovo membro 
const handleSubmit = (event) => {
    event.preventDefault(); 
    const name = nameInput.value.trim();
    const role = roleInput.value.trim();
    const email = emailInput.value.trim();
    const img = imgInput.value.trim();

    const newMember = {
        name,
        role,
        email,
        img
    }

    teamMembers.push(newMember);
    printCards(teamMembers);
    formElem.reset(); 
}

// ESECUZIONE LOGICA
printCards(teamMembers);

// New Member Card

formElem.addEventListener ("submit", handleSubmit);

