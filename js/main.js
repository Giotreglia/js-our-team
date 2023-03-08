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

for (let i = 0; i < teamList.length; i++) {
    
    let teamMemberCorrente = teamList[i];

    for (const key in teamMemberCorrente) {
        teamMember = (key + ': ' + teamMemberCorrente[key]);
        teamContainerDom.innerHTML = teamMember;
    }

}














// Creo le card 
function cardGenerator() {
    const card = document.createElement('div');
    card.classList.add('card');
}





