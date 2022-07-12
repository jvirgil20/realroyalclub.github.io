window.onload = () => {

    let side = document.getElementById("sidebar-menu");
    let main = document.getElementById("main-content");
    let sidebarContent = document.getElementById("sidebar-content");
    const loading = document.getElementById("crown-loading-anim");
    const anchors = document.querySelectorAll(".navigation a.non-active");

    side.style.transition = "1s"
    main.style.transition = "margin-left 1s"
    loading.style.transition = "0.65s"
    
    // side.style.width = "100%";
    // main.style.marginLeft = "100%";
    // sidebarContent.style.opacity = "0";

    setTimeout( ()=> {
        main.style.marginLeft = "0";
        side.style.width = "0";
        loading.style.opacity = "0";
    }, 1000)

    setTimeout( ()=> {
        loading.style.display = "none";
    }, 2000)

    for (let i=0; i<anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener("click", e => {
            e.preventDefault();
            let target = e.target.href;

            side.style.transition = "1s"
            main.style.transition = "margin-left 1s"
            side.style.width = "100%";
            main.style.marginLeft = "100%";
            sidebarContent.style.opacity = "0";
            

            setTimeout( () => {
                window.location.href = target;
            }, 1000);

            setTimeout( () => {
                loading.style.opacity = "1";
                loading.style.transition = "0.35s"
                loading.style.display = "block";
            }, 650);

        })

    }

}




