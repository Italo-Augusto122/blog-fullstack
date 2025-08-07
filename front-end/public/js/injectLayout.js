const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "/public/css/layout.css";
document.head.appendChild(cssLink);

const bootstrapLink = document.createElement("link");
bootstrapLink.rel = "stylesheet";
bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css";
document.head.appendChild(bootstrapLink);

const headerHTML = document.createElement("header");
headerHTML.innerHTML = `
        <div>
            <img class="game-icon" src="/public/images/game-icon.webp" alt="">
            <p>Zenless Zone Zero - Fandom Guide</p>
        </div>
        <div>
            <p>login teste</p>
            <p>img</p>
        </div>`;

const footerHTML = document.createElement("footer");
footerHTML.innerHTML = `
        <img class="hoyoverse-logo" src="/public/images/hoyoverse-logo.png" alt="">

        <div class="plataformas">
            <p>Plataformas</p>
            <div class="logos-plataformas">
                <i class="bi bi-playstation"></i>
                <i class="bi bi-xbox"></i>
                <i class="bi bi-pc-display"></i>
                <i class="bi bi-phone"></i>
            </div>
        </div>`;

document.body.insertAdjacentHTML("afterbegin", headerHTML.outerHTML);
document.body.insertAdjacentHTML("beforeend", footerHTML.outerHTML);
