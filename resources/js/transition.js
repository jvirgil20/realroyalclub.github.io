window.onload = () => {

    let side = document.getElementById("sidebar-menu");
    let main = document.getElementById("main-content");
    let sidebarContent = document.getElementById("sidebar-content");
    const anchors = document.querySelectorAll(".navigation a");
    
    // side.style.width = "100%";
    // main.style.marginLeft = "100%";
    // sidebarContent.style.opacity = "0";

    // setTimeout( ()=> {
    //     main.style.marginLeft = "0";
    //     side.style.width = "0";
    // }, 500)

    for (let i=0; i<anchors.length; i++) {
        const anchor = anchors[i];

        if (anchor.href !== "#") {
            anchor.addEventListener("click", e => {
                e.preventDefault();
                let target = e.target.href;

                side.style.width = "100%";
                main.style.marginLeft = "100%";
                sidebarContent.style.opacity = "0";

                setTimeout( () => {
                    window.location.href = target;
                }, 500);

            })
        }

    }

}




