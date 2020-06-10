var blog_cards = document.getElementById("blog_cards");
var project_cards = document.getElementById("project_cards");
var content_boxes = document.querySelectorAll('.content_box');

$.getJSON("source.json", function (json) {
    console.log(json); // this will show the info it in firebug console
    for (projData of json.projects) {

        let card = get_card(projData)
        project_cards.appendChild(card);
        console.log(projData);
    }
    for (blogData of json.blog) {
        let card = get_card(blogData)
        blog_cards.appendChild(card);
        console.log(projData);
    }
});

function get_card(dataObj) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", dataObj.id);
    let id = dataObj.id;
    card.onclick = function () {
        $("#" + id).toggleClass("unlimit_content");
    }

    let img = document.createElement("img");
    img.setAttribute("src", dataObj.image_src);
    img.setAttribute("alt", dataObj.image_alt);
    card.appendChild(img)

    let container = document.createElement("div");
    container.setAttribute("class", "container");
    card.appendChild(container);

    let card_title = document.createElement("p");
    card_title.setAttribute("class", "card_title");
    card_title.innerHTML = dataObj.title;
    card.appendChild(card_title);

    let card_content = document.createElement("p");
    card_content.setAttribute("class", "card_content");
    card_content.setAttribute("id", dataObj.id + "_content");
    card_content.innerHTML = dataObj.content;
    card.appendChild(card_content);

    if (dataObj.btn_link != null) {
        let btn = document.createElement("input");
        btn.setAttribute("class", "card_btn");
        btn.setAttribute("type", "button");
        btn.setAttribute("value", dataObj.btn_text);
        let btn_link = dataObj.btn_link;
        btn.onclick = function () {
            $("#" + id).toggleClass("unlimit_content");
            location.href = btn_link;
        }
        card.appendChild(btn);

    }

    return card;
}

document.body.addEventListener("scroll", function (event) {
    for (let i = 0; i < content_boxes.length; i++) {
        let cb = content_boxes[i];
        let nav_item = document.getElementByClassName("nav-item")[i]
        let cb_yTop = cb.offsetTop;
        let cb_yBot = cb_yTop + cb.scrollHeight;
        if (window.ScrollY > cb_yTop && window.ScrollY < cb_yBot) {
            nav_item.style.borderBottom = "2px solid #2cafe4";
        }
        else {
            nav_item.style.borderBottom = "0px";
        }
    }
    window.scrollY
})