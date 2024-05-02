let attempts = document.getElementById('attempts');
let pointes = document.getElementById('pointes');
let mxPointes = document.getElementById('mxPointes');
let currentC = document.getElementById('currentColor');
let rand,ans;



function colorGenerator() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return [r, g, b];
}

function setColors() {
    const colors = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];
    const newColors = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
    newColors.map((element) => {
        let ncolor = colorGenerator();
        element[0] = ncolor[0];
        element[1] = ncolor[1];
        element[2] = ncolor[2];
    });
    for (let i = 0; i < 6; i++) {
        let curr = document.getElementById(colors[i]);
        let col = newColors[i];
        curr.style.backgroundColor = `rgb(${col[0]},${col[1]},${col[2]})`
    }
    rand = Math.floor(Math.random()*6);
    ans = newColors[rand];
    currentC.innerText = `RGB(${ans})`;
}
function check(id){
    if(document.getElementById(id).style.backgroundColor===`rgb(${ans[0]}, ${ans[1]}, ${ans[2]})`){
        pointes.innerText = parseInt(pointes.innerText) + 1;
        attempts.innerText = 2;
        mxPointes.innerText = Math.max(parseInt(mxPointes.innerText),parseInt(pointes.innerText));
        setColors();
    }
    else{
        if(attempts.innerText==="2"){
            attempts.innerText = "1";
        }
        else{
            pointes.innerText = "0";
            attempts.innerText = "2";
            setColors();
        }
    }
}
setColors()



