const floaters = document.querySelectorAll(".wrapper.section")

const options = {
    threshold: 0.25,
    // rootMargin: "0px 0px -200px 0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("float-up");
            observer.unobserve(entry.target);
        }
    })
}, options);

floaters.forEach(floater => {
    observer.observe(floater);
})