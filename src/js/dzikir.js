// DOM ELEMENTS
const setter = document.querySelector(".setter");
const btn_setter_decrease = document.querySelector(".btn-setter-decrease");
const btn_setter_increase = document.querySelector(".btn-setter-increase");
const btn_reset = document.querySelector(".btn-reset");
const btn_dzikir = document.querySelector(".btn-dzikir");

const setnum = document.querySelector(".setnum");
const countnum = document.querySelector(".countnum");

// STATE
const state = {
    target: Number(setnum.textContent),
    curNum: Number(countnum.textContent),
};

// FUNCTIONS
const init = function () {
    setter.addEventListener("click", e => {
        if (e.target.closest(".btn-setter-decrease")) {
            if (Number(setnum.textContent) === 1) return;
            setnum.textContent = --state.target;
        }
        if (e.target.closest(".btn-setter-increase")) {
            setnum.textContent = ++state.target;
        }
    });

    btn_dzikir.addEventListener("click", e => {
        if (e.target.closest(".btn-dzikir")) countnum.textContent = ++state.curNum;
        if (state.curNum === state.target) alert("Target tercapai!");
    });

    btn_reset.addEventListener("click", e => {
        if (e.target.closest(".btn-reset")) countnum.textContent = state.curNum = 0;
    });
};
init();
