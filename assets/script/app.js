window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.background = "#3A3E4B";
        document.getElementById("aside").style.visibility = "hidden";
    } else {
        document.getElementById("navbar").style.background = "none";
        document.getElementById("aside").style.visibility = "visible";
    }
}

const sectionSkill = document.getElementById("section-skill");
const sectionProject = document.getElementById("section-project");
const progressBars = document.querySelectorAll(".progress-bar");

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}

function hideProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 0;
        progressBar.style.width = 0;
    });
}

window.addEventListener("scroll", () => {
    const sSkill = sectionSkill.getBoundingClientRect().top;
    const sProject = sectionProject.getBoundingClientRect().top;
    const screen = window.innerHeight;
    if ( sProject < screen ) {
        showProgress();
    } else {
        hideProgress();
    }
    if (sSkill < 0 ) {
        hideProgress();
    }
});

const btnModalOpen = document.getElementById("btnModalOpen");
const btnModalClose = document.getElementById("btnModalClose");
const modal = document.querySelector("dialog");

btnModalOpen.addEventListener( "click", () => {
    modal.showModal();
});

btnModalClose.addEventListener( "click", () => {
    modal.close();
});