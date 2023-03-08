// OUR TEAM

/*

Creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: 
nome, ruolo e foto.

*/

// Riferimenti al DOM
const teamContainerDom = document.getElementById('team-container');

// Creo lista membri del team

let teamList = [
    { nome: "Wayne Barnett", posizione: "Founder & CEO", foto: "wayne-barnett-founder-ceo.jpg" },
    { nome: "Angela Caroll", posizione: "Chief Editor", foto: "angela-caroll-chief-editor.jpg" },
    { nome: "Walter Gordon", posizione: "Office Manager", foto: "walter-gordon-office-manager.jpg" },
    { nome: "Angela Lopez", posizione: "Social Media Manager", foto: "angela-lopez-social-media-manager.jpg" },
    { nome: "Scott Estrada", posizione: "Developer", foto: "scott-estrada-developer.jpg" },
    { nome: "Barbara Ramos", posizione: "Graphic Designer", foto: "barbara-ramos-graphic-designer.jpg" },
];

// Stampo le informazioni

let teamMemberNome;
let teamMemberPosition;
let teamMemberImage;

for (let i = 0; i < teamList.length; i++) {
    
    teamMemberCorrente = teamList[i];

    teamMemberNome = teamMemberCorrente.nome;
    teamMemberPosition = teamMemberCorrente.posizione;
    teamMemberImage = teamMemberCorrente.foto;

    let card = cardGenerator();
    card.innerHTML += `<div class="img-container"><img class="member-img" src="img/${teamMemberImage}" alt="${teamMemberNome}"></div>`;
    card.innerHTML += `<h3 class="name">${teamMemberNome}</h3>`;
    card.innerHTML += `<span class="position">${teamMemberPosition}</span>`;
    teamContainerDom.append(card);
}














// Creo le card 
function cardGenerator() {
    const card = document.createElement('div');
    card.classList.add('card');
    return card;
}







