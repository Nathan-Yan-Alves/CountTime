let btnSub = document.querySelector("#date-submit");
let dateInp = document.querySelector("#date-input");

function calcHandler() {
    let userDate = calcDiff();
    if (userDate != false) {
        redirect();
    }
}

function calcDiff() {
    const [dayInp, monthInp, yearInp] = dateInp.value.split("/");
    let dateNow = new Date();
    let dateCalc = {
        day: dayInp - dateNow.getDate(),
        month: monthInp - (dateNow.getMonth() + 1),
        year: yearInp - dateNow.getFullYear(),
    };

    if (
        dateCalc.year < 0 ||
        (dateCalc.year == 0 && dateCalc.month < 0) ||
        (dateCalc.year == 0 && dateCalc.month == 0 && dateCalc.day <= 0) ||
        dateInp.value == ""
    ) {
        alert("Digite uma data válida!");
        dateInp.value = "";
        return false;
    } else {
        localStorage.setItem(
            "Day",
            dateCalc.day + 30 * dateCalc.month + 365 * dateCalc.year
        );
        return true;
    }
}

function mask(e) {
    if (e.keyCode != 46 && e.keyCode != 8) {
        inpLen = dateInp.value.length;
        if (inpLen == 2 || inpLen == 5) {
            dateInp.value += "/";
        }
    }
}

function redirect() {
    location.href = "./counter.html";
}

document.addEventListener("keypress", (e) => {
    if (e.code == "Enter") {
        calcHandler();
    }
});

btnSub.addEventListener("click", () => {
    calcHandler();
});
