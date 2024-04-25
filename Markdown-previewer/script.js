const previewWindow = document.getElementById("preview");
const editorBlock = document.getElementById("editor")
const editorField = document.getElementById("editorField");
const main = document.querySelector("main");
const fullscreenBtn = document.querySelector("button");
let isFullScreen = false;

$(document).ready(() => { 
    $(previewWindow).html(marked.parse(editorBlock.value));
    $(editorBlock).keyup(event => {
        $(previewWindow).html(marked.parse(event.target.value));
    });
    $(fullscreenBtn).click(() => {
       isFullScreen = !isFullScreen;
       if(isFullScreen) {
          $(fullscreenBtn).html(`<i class="fa-solid fa-down-left-and-up-right-to-center"></i>`);
          $(editorField).hide();
          $(main).css("font-size", "21px");
          return;
    }
       $(fullscreenBtn).html (`<i class="fa-solid fa-up-right-and-down-left-from-center"></i>`);
       $(editorField).show();
       $(main).css("font-size", "16px");
       return;
    })
})