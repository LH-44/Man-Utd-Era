const squad = [
  { id:1, name:"Peter Schmeichel", position:"Goalkeeper", short:"Captain presence", wiki:"https://en.wikipedia.org/wiki/Peter_Schmeichel" },
  { id:2, name:"Jaap Stam", position:"Defender", short:"Strong CB", wiki:"https://en.wikipedia.org/wiki/Jaap_Stam" },
  { id:3, name:"Ronny Johnsen", position:"Defender", short:"Composed defender", wiki:"https://en.wikipedia.org/wiki/Ronny_Johnsen" },
  { id:4, name:"Gary Neville", position:"Right-back", short:"Reliable RB", wiki:"https://en.wikipedia.org/wiki/Gary_Neville" },
  { id:5, name:"Denis Irwin", position:"Left-back", short:"Consistent LB", wiki:"https://en.wikipedia.org/wiki/Denis_Irwin" },
  { id:6, name:"David Beckham", position:"Midfielder", short:"Crossing master", wiki:"https://en.wikipedia.org/wiki/David_Beckham" },
  { id:7, name:"Nicky Butt", position:"Midfielder", short:"Workhorse", wiki:"https://en.wikipedia.org/wiki/Nicky_Butt" },
  { id:8, name:"Roy Keane", position:"Midfielder", short:"Captain & leader", wiki:"https://en.wikipedia.org/wiki/Roy_Keane" },
  { id:9, name:"Ryan Giggs", position:"Winger", short:"Legendary winger", wiki:"https://en.wikipedia.org/wiki/Ryan_Giggs" },
  { id:10, name:"Dwight Yorke", position:"Striker", short:"Top scorer", wiki:"https://en.wikipedia.org/wiki/Dwight_Yorke" },
  { id:11, name:"Teddy Sheringham", position:"Forward", short:"CL final hero", wiki:"https://en.wikipedia.org/wiki/Teddy_Sheringham" },
  { id:12, name:"Andy Cole", position:"Striker", short:"Prolific scorer", wiki:"https://en.wikipedia.org/wiki/Andy_Cole" },
  { id:13, name:"Paul Scholes", position:"Midfielder", short:"Playmaker", wiki:"https://en.wikipedia.org/wiki/Paul_Scholes" },
  { id:14, name:"Ole Gunnar Solskjær", position:"Forward", short:"Super sub", wiki:"https://en.wikipedia.org/wiki/Ole_Gunnar_Solskj%C3%A6r" },
  { id:15, name:"Jesper Blomqvist", position:"Winger", short:"Squad depth", wiki:"https://en.wikipedia.org/wiki/Jesper_Blomqvist" }
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