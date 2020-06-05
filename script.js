var cards = document.getElementById("cards");
$.getJSON("source.json", function (json) {
    console.log(json); // this will show the info it in firebug console
    for (projData of json.projects) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("id", projData.id);
        let id = projData.id;
        card.onclick = function () {
            $("#" + id).toggleClass("unlimit_content");
        }

        let img = document.createElement("img");
        img.setAttribute("src", projData.image_src);
        img.setAttribute("alt", projData.image_alt);
        card.appendChild(img)

        let container = document.createElement("div");
        container.setAttribute("class", "container");
        card.appendChild(container);

        let card_title = document.createElement("p");
        card_title.setAttribute("class", "card_title");
        card_title.innerHTML = projData.title;
        card.appendChild(card_title);

        let card_content = document.createElement("p");
        card_content.setAttribute("class", "card_content");
        card_content.setAttribute("id", projData.id + "_content");
        card_content.innerHTML = projData.content;
        card.appendChild(card_content);

        if (projData.btn_link != null) {
            let btn = document.createElement("input");
            btn.setAttribute("class", "card_btn");
            btn.setAttribute("type", "button");
            btn.setAttribute("value", projData.btn_text);
            let btn_link = projData.btn_link;
            btn.onclick = function () {
                $("#" + id).toggleClass("unlimit_content");
                location.href = btn_link;
            }
            card.appendChild(btn);

        }




        cards.appendChild(card);

        console.log(projData);
    }
});