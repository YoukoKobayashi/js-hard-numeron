const remainTurn =
    document.getElementById("remainTurn");
remainTurn.textContent = "あと残り10回です";
let cnt = 10;
// while (cnt > 1) {
let c;
let c1;
let c2;
let c3;
let cArr = Array(3).fill();
const createCpNum = () => {
    c = Math.floor(Math.random() * 1000);
    c1 = Math.floor(c / 100);
    c2 = Math.floor((c - c1 * 100) / 10);
    c3 = c - c1 * 100 - c2 * 10;
    cArr = [c1, c2, c3];
};
// console.log(cArr);

const answerNum =
    document.getElementById("answerNum");
let i;
let i1;
let i2;
let i3;
let iArr = Array(3).fill();
const createMyNum = () => {
    i = answerNum.value;
    i1 = Math.floor(i / 100);
    i2 = Math.floor((i - i1 * 100) / 10);
    i3 = i - i1 * 100 - i2 * 10;
    iArr = [i1, i2, i3];
};

const numCheck =
    document.getElementById("numCheck");
numCheck.addEventListener("click", () => {
    createMyNum();
    if (i1 === i2 || i1 === i3 || i2 === i3) {
        alert(
            "3桁の数字はすべて異なる数字で指定してください"
        );
        //if (!alert("OK")) {
        answerNum.value = "";
        createMyNum();
        // iArr.splice(0, 3);
        console.log(iArr);
        //}
    }
    createCpNum();

    if (c1 === c2 || c1 === c3 || c2 === c3) {
        createCpNum();
    }
    console.log(cArr);

    // 二次元配列にする
    let icArr = [];
    icArr.push(iArr);
    icArr.push(cArr);
    // console.log(icArr);

    let eat = 0;
    let bite = 0;
    for (let r = 0; r < iArr.length; r++) {
        if (icArr[0][r] === icArr[1][r]) {
            eat += 1;
        }
        if (
            icArr[0][r] === icArr[1][(r + 1) % 3]
        ) {
            bite += 1;
        }
        if (
            icArr[0][r] === icArr[1][(r + 2) % 3]
        ) {
            bite += 1;
        }
    }
    alert(`${eat}EAT,${bite}BITE`);
    cnt -= 1;
    remainTurn.textContent = `あと残り${cnt}回です`;

    if (!alert("OK")) {
        //alertクリックの戻り値→undefined, !alert=true
        answerNum.value = "";
    }
    if (cnt === 0) {
        numCheck.disabled = true;
    }
});
