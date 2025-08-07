fetch("./src/json/characters.json")
    .then(response => response.json())
    .then(data => {
        const total = Object.keys(data).length;

        for (let i = 0; i < total; i++) {
            const firstCharKey = Object.keys(data)[i];
            const tier = data[firstCharKey].tier;
            const category = data[firstCharKey].category;

            const table = document.getElementById("tier_list");
            const row = table.querySelector(`.t${tier}`);
            const column = row.querySelector(`.${category}`);

            column.innerHTML = `
            <div class="char">
                <a href="./src/pages/character.html?name=${data[firstCharKey].name}">
                    <img class="selector-icon"
                        src="${data[firstCharKey].sprite}"
                        alt="${data[firstCharKey].fullName} icon">
                    <p>${data[firstCharKey].fullName}</p>
                </a>
            </div>
        `;
        }

    }).catch(error => console.error("Erro ao carregar os dados:", error));