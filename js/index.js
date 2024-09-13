const articleComponents = document.querySelectorAll(".article-preview");
for (const articleComponent of articleComponents) {
    const articleFooter = articleComponent.querySelector("footer");
    if (articleFooter) {
        const footerP = articleFooter.querySelector("p");
        const share = articleFooter.querySelector(".share");
        if (footerP && share) {
            share.classList.add("hidden");
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            const svgWidth = 15;
            const svgHeight = 13;
            svg.setAttribute("width", String(svgWidth));
            svg.setAttribute("height", String(svgHeight));
            svg.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", "M15 6.49504L8.76629 0.013916V3.88067H7.44095C3.33138 3.88067 0 7.03931 0 10.9358V12.9849L0.588684 12.3733C2.59014 10.2941 5.4221 9.1094 8.39115 9.1094H8.76629V12.9762L15 6.49504Z");
            svg.appendChild(path);
            const button = document.createElement("button");
            footerP.appendChild(button);
            button.appendChild(svg);
            button.type = "button";
            button.addEventListener("click", function () {
                this.classList.toggle("active");
                share.classList.toggle("hidden");
            });
        }
    }
}
