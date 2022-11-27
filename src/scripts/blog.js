const blogItems = document.querySelectorAll(".mini-blog__item");

function firstBlogItem() {
    window.location.href = "https://davdadaviar.notion.site/Web-Movie-Search-with-API-AJAX-JQuery-664bca241c314135bd08ee4e5d198e18"
}

function secondBlogItem() {
    window.location.href = "https://davdadaviar.notion.site/Catatan-dokumentasi-Todo-List-App-92f9feb8c26046658c7cc7d5842e032d"
}

function thirdBlogItem() {
    window.location.href = "https://davdadaviar.notion.site/Catatan-Dokumentasi-OOP-2693ebaf6d80488b82232ed89fff4b8a"
}

function fourthBlogItem() {
    window.location.href = "404.html"
}

function fifthBlogItem() {
    window.location.href = "404.html"
}

blogItems[0].addEventListener("click", firstBlogItem);
blogItems[1].addEventListener("click", secondBlogItem);
blogItems[2].addEventListener("click", thirdBlogItem);
blogItems[3].addEventListener("click", fourthBlogItem);
blogItems[4].addEventListener("click", fifthBlogItem);