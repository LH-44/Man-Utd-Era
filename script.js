const squad = [
  { id:1, name:"Peter Schmeichel", position:"Goalkeeper", short:"Legendary GK", wiki:"https://en.wikipedia.org/wiki/Peter_Schmeichel" },
  { id:2, name:"David Beckham", position:"Midfielder", short:"Crossing master", wiki:"https://en.wikipedia.org/wiki/David_Beckham" }
];

const events = [
  { year:"1999", title:"Treble Won" }
];

const squadGrid = document.getElementById('squadGrid');

squad.forEach(player => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="avatar">${initials(player.name)}</div>
    <div>${player.name}</div>
    <div>${player.position}</div>
  `;
  card.onclick = () => openModal(player.id);
  squadGrid.appendChild(card);
});

function openModal(id){
  const p = squad.find(x => x.id === id);
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalPosition').textContent = p.position;
  document.getElementById('modalBio').textContent = p.short;
  document.getElementById('modalWiki').href = p.wiki;
  document.getElementById('modalBackdrop').style.display = 'flex';
}

document.getElementById('modalClose').onclick = () => {
  document.getElementById('modalBackdrop').style.display = 'none';
};

function initials(name){
  return name.split(' ').map(n => n[0]).join('');
}