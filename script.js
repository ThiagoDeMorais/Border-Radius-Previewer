/* var x = document.getElementById("box");*/

function changeRight(){
    let rightController = document.getElementById("rightslider");
    let rightRadius = document.getElementById("box");
    console.log("radius: " + rightRadius.style.borderTopRightRadius);
    console.log("Control value: " + rightController.value);

    rightRadius.style.borderTopRightRadius = rightController.value + "%";
    console.log("radius: " +rightRadius.style.borderTopRightRadius);
    /*
    x.style.borderTopRightRadius = document.getElementById("rightslider").value + "%"; 
    console.log(x.style.borderTopRightRadius);
    */
}


function changeLeft(){
    let leftController = document.getElementById("leftslider");
    let leftRadius = document.getElementById("box");
    console.log("radius: " + leftRadius.style.borderTopRightRadius);
    console.log("Control value: " + leftController.value);

    leftRadius.style.borderTopLeftRadius = leftController.value + "%";
    console.log("radius: " +leftRadius.style.borderTopLeftRadius);
}

function changeTop(){
    let topController = document.getElementById("topslider");
    let toptRadius = document.getElementById("box");
    console.log("radius: " + toptRadius.style.borderTopRightRadius);
    console.log("Control value: " + leftController.value);

    leftRadius.style.borderTopLeftRadius = leftController.value + "%";
    console.log("radius: " +leftRadius.style.borderTopLeftRadius);
}