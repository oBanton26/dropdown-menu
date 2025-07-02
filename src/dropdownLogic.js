function toggleHidden(e) {
  e.target.nextElementSibling.classList.toggle("hidden");
};

export function dropdowning () {
    const dropdownBtnList = document.querySelectorAll(".dropdown-button");
    for (let dropdownBtn of dropdownBtnList){
        dropdownBtn.addEventListener("click", toggleHidden);
    };
};