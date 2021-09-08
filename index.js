
var arrOfDiv = document.getElementsByClassName('num');
var arrColors = document.getElementsByName('color');

function radioButtonDivSum(color) {
    const colorToCheck = color ? color : document.getElementById('color').value;
    let sum = 0;
    for (let i = 0; i < arrOfDiv.length; i++) {
        const style = getComputedStyle(arrOfDiv[i]);
        const backgroundColor = style.backgroundColor;
        if (backgroundColor == colorToCheck) {
            sum += Number(arrOfDiv[i].innerHTML);
        }
    }
    return sum;
}


function giveSumOfRadioDivs(color) {
    document.getElementById("sum").innerHTML = radioButtonDivSum(color);

}



function sumOfRedDivs() {
    let sum = 0;
    for (let i = 0; i < arrOfDiv.length; i++) {
        const style = getComputedStyle(arrOfDiv[i]);
        const backgroundColor = style.backgroundColor;
        if (backgroundColor == document.getElementById('color').value) {
            sum = sum + Number(arrOfDiv[i].innerHTML);
        }
    }
    return sum;
}


function giveSumOfRedDivs() {
    document.getElementById("sum").innerHTML = sumOfRedDivs();
}


function hsl(rgbArr) {
    var r1 = Number(rgbArr[0]) / 255, g1 = Number(rgbArr[1]) / 255, b1 = Number(rgbArr[2]) / 255;
    var maxColor = Math.max(r1, g1, b1), minColor = Math.min(r1, g1, b1);
    var L = (maxColor + minColor) / 2, S = 0, H = 0;
    if (maxColor != minColor) {
        if (L < 0.5) {
            S = (maxColor - minColor) / (maxColor + minColor);
        } else {
            S = (maxColor - minColor) / (2.0 - maxColor - minColor);
        }
        if (r1 == maxColor) {
            H = (g1 - b1) / (maxColor - minColor);
        } else if (g1 == maxColor) {
            H = 2.0 + (b1 - r1) / (maxColor - minColor);
        } else {
            H = 4.0 + (r1 - g1) / (maxColor - minColor);
        }
    }
    L = L * 100;
    S = S * 100;
    H = H * 60;
    if (H < 0) {
        H += 360;
    }
    return { h: H, s: S, l: L };
}

function colorName(hsl) {
    var l = Math.floor(hsl.l), s = Math.floor(hsl.s), h = Math.floor(hsl.h);
    if (s <= 10 && l >= 90) {
        return ("White")
    } else if ((s <= 10 && l <= 70) || s === 0) {
        return ("Gray")
    } else if (l <= 15) {
        return ("Black")
    } else if ((h >= 0 && h <= 15) || h >= 346) {
        return ("red");
    } else if (h >= 16 && h <= 35) {
        if (s < 90) {
            return ("Brown");
        } else {
            return ("Orange");
        }
    } else if (h >= 36 && h <= 54) {
        if (s < 90) {
            return ("Brown");
        } else {
            return ("Yellow");
        }
    } else if (h >= 55 && h <= 165) {
        return ("Green");
    } else if (h >= 166 && h <= 260) {
        return ("Blue")
    } else if (h >= 261 && h <= 290) {
        return ("Purple")
    } else if (h >= 291 && h <= 345) {
        return ("Pink")
    }
}

// var color = "rgb(255, 0, 0)";
// var rgb = color.replace(/[^0-9,]/g,'').split(',')
// var nameColor = colorName(hsl(rgb));
