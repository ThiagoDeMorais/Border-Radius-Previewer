/* var x = document.getElementById("box");*/
function changeTopLeft(){
    let topLeftController = document.getElementById("topLeftSlider");
    let topLeftRadius = document.getElementById("box");

    topLeftRadius.style.borderTopLeftRadius = topLeftController.value + "%";
}


function changeTopRight(){
    let topRightController = document.getElementById("topRightslider");
    let topRightRadius = document.getElementById("box");

    topRightRadius.style.borderTopRightRadius = topRightController.value + "%";

}

function changeBottomRight(){
    let bottomRightController = document.getElementById("bottomRightSlider");
    let bottomRightRadius = document.getElementById("box");

    bottomRightRadius.style.borderBottomRightRadius = bottomRightController.value + "%";

}


