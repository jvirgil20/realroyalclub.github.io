let side = document.getElementById("sidebar-menu");
let main = document.getElementById("main-content");
let toggle = document.getElementById("toggle-button");
let sidebarContent = document.getElementById("sidebar-content");
let isOpen;


function toggleSidebar() {

    if (isOpen) {
        // if open set close
        side.style.width = "0";
        main.style.marginLeft = "0";
        sidebarContent.style.opacity = "0";
        isOpen = false;
        toggle.innerHTML = "&#62;&#62;";
    } else {
        // if closed set open
        side.style.width = "300px";
        main.style.marginLeft = "300px";
        sidebarContent.style.opacity = "1";
        isOpen = true;
        toggle.innerHTML = "&#60;&#60;";
    }
    
}

document.getElementById("toggle-button").onclick = toggleSidebar;