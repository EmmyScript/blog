let menu = document.getElementById("menu")
            function toggle(){

                menu.classList.toggle('show')
                
            }

            //expanding img
            function myFunction(imgs){
                let expandImg =
                document.getElementById("expandedImg");
                let imgText =
                document.getElementById("imgtext");
                expandImg.src = imgs.alt;
                expandImg.parentElement.style.display ="block";
            };