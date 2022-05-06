// NAVBAR , SIDEBAR



// SLIDER
var indexValue = 1
showImg(indexValue)

function btn_slide(e){
    showImg(indexValue = e)
}

function showImg(e){
    var i
    const content = document.querySelectorAll('.content')
    const sliders = document.querySelectorAll('btn-sliders span')

    if(e > content.length){indexValue = 1}
    if(e < 1){indexValue = content.length}
    for(i = 0; i < content.length; i++){
        content[i].style.display = "none"
    }
    content[indexValue - 1].style.display = "flex"
}



