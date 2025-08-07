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

            document.getElementById("rank").innerHTML = `<img class="char_banner" src="/public/images/rank${char.rank}.webp" alt="rank ${char.rank}" style="max-width: 25px;" >`;

            document.getElementById("element").innerHTML = `<img class="char_banner" src="/public/images/elements/${char.element}.png" alt="${char.element}" style="max-width: 25px;" >`;

            document.getElementById("char_banner").innerHTML = `<img class="char_banner" src="/public/images/characters/${char.name}/${char.name}-uncolored-banner.webp" alt="${char.name}" >`;

            document.getElementById("char_description").textContent = char.description;

            document.getElementById("char_fullart").innerHTML = `<img class="char_fullart" src="/public/images/characters/${char.name}/${char.name}-fullart.webp" alt="${char.name}" >`;

            document.getElementById("char_stats").textContent = `${char.fullName} Base Stats`;

            vect = [
                "hp",
                "atk",
                "def",
                "impact",
                "maestry",
                "proficiency"
            ]
            for (i = 0; i < char.baseStats.length; i++) {
                document.getElementById("char_" + vect[i]).textContent = char.baseStats[i];
            }

            const pageWEngines = () => {
                document.getElementById("container_builds").innerHTML = "";

                const box = document.createElement("div");
                box.className = "w-engine_box";

                const text = document.createElement("p");
                text.textContent = char.wEngines[0];

                box.appendChild(text);
                document.getElementById("container_builds").appendChild(box);
            }
            const pageTeams = () => {
                document.getElementById("container_builds").innerHTML = "";

                const box = document.createElement("div");
                box.className = "teams_box";

                const text = document.createElement("p");
                text.textContent = char.teams[0];

                box.appendChild(text);
                document.getElementById("container_builds").appendChild(box);
            }

            const changePage = (index) => {
                if (index == 0) {
                    pageWEngines();
                } else if (index == 1) {
                    pageTeams();
                }
            }

            pageWEngines()
            document.getElementById("page_0").addEventListener("click", () => {changePage(0)});
            document.getElementById("page_1").addEventListener("click", () => {changePage(1)});
        } else {
            document.body.innerHTML = "<h1>Personagem não encontrado!</h1>";
        }
    }).catch(error => console.error("Erro ao carregar os dados:", error));