    let images=document.querySelector("#dark-mode-images");

    images.onclick=function(){
        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            images.src="./image/sun-icon.jpg"
        }
        else{
            images.src="./image/dark-mode.png"
        }
    }


    