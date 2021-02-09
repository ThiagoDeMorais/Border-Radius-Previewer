function valuesInicialization(){
    document.getElementById("topLeftResult").value = 0 + "%";
    document.getElementById("topRightResult").value = 0 + "%";
    document.getElementById("bottomRightResult").value = 0 + "%";
    document.getElementById("bottomLeftResult").value = 0 + "%";
    textAreaWrite();
}


function changeTopLeft(){
    let topLeftController = document.getElementById("topLeftSlider");
    let topLeftRadius = document.getElementById("box");
    topLeftRadius.style.borderTopLeftRadius = topLeftController.value + "%";
    textAreaWrite();
}


function changeTopRight(){
    let topRightController = document.getElementById("topRightSlider");
    let topRightRadius = document.getElementById("box");
    topRightRadius.style.borderTopRightRadius = topRightController.value + "%";
    textAreaWrite();
}

function changeBottomRight(){
    let bottomRightController = document.getElementById("bottomRightSlider");
    let bottomRightRadius = document.getElementById("box");
    bottomRightRadius.style.borderBottomRightRadius = bottomRightController.value + "%";
    textAreaWrite();
}

function changeBottomLeft(){
    let bottomLeftController = document.getElementById("bottomLeftSlider");
    let bottomLeftRadius = document.getElementById("box");
    bottomLeftRadius.style.borderBottomLeftRadius = bottomLeftController.value + "%";
    textAreaWrite();
}

function textAreaWrite(){

    
    let borderTopLeftText = document.getElementById("topLeftSlider").value + "%";
    let borderTopRightText = document.getElementById("topRightSlider").value + "%";
    let borderBottomRightText = document.getElementById("bottomRightSlider").value + "%";
    let borderBottomLeftText = document.getElementById("bottomLeftSlider").value + "%";

    var textRadius = "border-top-left-radius: " + borderTopLeftText + "\n"
                    +"border-top-right-radius: " + borderTopRightText + "\n" 
                    +"border-bottom-right-radius: " + borderBottomRightText + "\n"
                    +"border-bottom-left-radius: " + borderBottomLeftText + "\n"
    console.log(textRadius);
    
    let textArea = document.getElementById("areaText");
    textArea.value = textRadius;
}

function copyToClipboard(){
    let area = document.getElementById("areaText");
    area.select();
    document.execCommand("copy");
    alert("Configuração copiada: \n\n" + area.value);
    area.disse
}


