function getParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

const charName = getParameter("name");

fetch("../json/characters.json")
    .then(response => response.json())
    .then(data => {
        if (data[charName]) {
            const char = data[charName];
            document.getElementById("name").textContent = char.fullName;

            document.getElementById("rank").innerHTML = `<img class="char_banner" src="../images/rank${char.rank}.webp" alt="rank ${char.rank}" style="max-width: 25px;" >`;

            document.getElementById("element").innerHTML = `<img class="char_banner" src="../images/elements/${char.element}.png" alt="${char.element}" style="max-width: 25px;" >`;

            document.getElementById("char_banner").innerHTML = `<img class="char_banner" src="../images/characters/${char.name}/${char.name}-uncolored-banner.png" alt="${char.name}" >`;

            document.getElementById("char_description").textContent = char.description;

            document.getElementById("char_fullart").innerHTML = `<img class="char_fullart" src="../images/characters/${char.name}/${char.name}-fullart.webp" alt="${char.name}" >`;

            document.getElementById("char_stats").textContent = `${char.fullName} Base Stats`;

            document.getElementById("char_hp").textContent = char.baseStats[0];
            document.getElementById("char_atk").textContent = char.baseStats[1];
            document.getElementById("char_def").textContent = char.baseStats[2];
            document.getElementById("char_impact").textContent = char.baseStats[3];
            document.getElementById("char_maestry").textContent = char.baseStats[4];
            document.getElementById("char_proficiency").textContent = char.baseStats[5];
        } else {
            document.body.innerHTML = "<h1>Personagem não encontrado!</h1>";
        }
    }).catch(error => console.error("Erro ao carregar os dados:", error));