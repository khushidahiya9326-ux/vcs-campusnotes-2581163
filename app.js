const KEY = "campusnotes";
const load = () => JSON.parse(localStorage.getItem(KEY) || "[]");
const save = (notes) => localStorage.setItem(KEY, JSON.stringify(notes));

function render() {
  const list = document.getElementById("notes");
  list.innerHTML = "";
  for (const n of load()) {
    const li = document.createElement("li");
    li.innerHTML = `<strong></strong><p></p>`;
    li.querySelector("strong").textContent = n.title;
    li.querySelector("p").textContent = n.body;
    list.appendChild(li);
  }
}

document.getElementById("note-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const notes = load();
  notes.push({ title: title.value, body: body.value, created: Date.now() });
  save(notes);
  e.target.reset();
  render();
});

render();
