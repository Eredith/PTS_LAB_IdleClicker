  var points = 0;
  var autoClickerCount = 0;
  var autoClickerPrice = 2000;
  var autoClickerInterval = null;
  var multiplierPrice = 5000;
  var multiplierCount = 1;

  const resetB = document.getElementById("reset");
  const ClickB = document.getElementById("click-button");
  const PointsD = document.getElementById("points-display");

  const BACB = document.getElementById("buy-auto-clicker-button");
  const ACC = document.getElementById("auto-clicker-count");
  const ACP = document.getElementById("auto-clicker-price");

  const BMB = document.getElementById("buy-multiplier-button");
  const AMC = document.getElementById("auto-multiplier-count");
  const AMP = document.getElementById("auto-multiplier-price");

//Open Popup
  var popup = document.getElementById("popup");
  var sotong = document.getElementById("sotong");
  var sotongbtn = document.getElementById("sotongbtn");
  var popupSotong = document.querySelector('#sotong');
  var popupBasreng = document.querySelector('#basreng');
  var popupLemper = document.querySelector('#lemper');

  function openPopup(){
    popup.classList.add("open-popup");  
  }
  function closePopup(){
    popup.classList.remove("open-popup");  
  }
  function closeSotong(){
    sotongbtn.remove();
  }
  function openSotong(){
    if(points >= 10000) {
      points -= 10000;
      closeSotong();  
      popupSotong.style.visibility = 'hidden';
      popupSotong.style.transform = 'translate(-50%, -50%)scale(0.1)';
      popupSotong.style.transition = 'transform 0.4s, top 0.4s';
      popupSotong.style.display = 'block';
      popupSotong.style.visibility = "visible";
      popupSotong.style.top = "50%";
      popupSotong.style.transform = 'translate(0%, 0%)scale(1)';
      DisplayAll2();
      updatePointsDisplay();
    } else {
      alert("Tidak cukup uang !\nMaaf jualan lagi sana");
    }
  }

  function closeBasreng(){
    basrengbtn.remove();
  }

  function openBasreng(){
    if(points >= 25000) {
      points -= 25000;
      closeBasreng();
      popupBasreng.style.display = 'block';
      basreng.classList.add("open-basreng");  
      DisplayAll3();
      updatePointsDisplay();
    } else {
      alert("Tidak cukup uang !\nMaaf jualan lagi sana");
    }
  }

  function closeLemper(){
    lemperbtn.remove();
  }
  function openLemper(){
    if(points >= 50000) {
      points -= 50000;
      closeLemper();
      popupLemper.style.display = 'block';
      lemper.classList.add("open-lemper");  
      DisplayAll4();
      updatePointsDisplay();
    } else {
      alert("Tidak cukup uang !\nMaaf jualan lagi sana");
    }
  }

  if (localStorage.getItem("points") !== null) {
     points = parseInt(localStorage.getItem("points"));
  } else {
    localStorage.setItem("points", points);
  }

  if (localStorage.getItem("auto-clicker") !== null) {
    autoClickerCount = parseInt(localStorage.getItem("auto-clicker"));
  } else {
    localStorage.setItem("auto-clicker", autoClickerCount);
  }

  if (localStorage.getItem("auto-clicker-price") !== null) {
    autoClickerPrice = parseInt(localStorage.getItem("auto-clicker-price"));
  } else {
    localStorage.setItem("auto-clicker-price", autoClickerPrice);
  }

  if (localStorage.getItem("multiplier-count") !== null) {
    multiplierCount = parseFloat(localStorage.getItem("multiplier-count"));
  } else {
    localStorage.setItem("multiplier-count", multiplierCount);
  }

  if (localStorage.getItem("auto-multiplier-price") !== null) {
    multiplierPrice = parseInt(localStorage.getItem("auto-multiplier-price"));
  } else {
    localStorage.setItem("auto-multiplier-price", multiplierPrice);
  }

  DisplayAll();

  ClickB.addEventListener("click", function() {
    points+= 100;
    localStorage.setItem("points", points);
    updatePointsDisplay();
  });

  BACB.addEventListener("click", function() {
    if (points >= autoClickerPrice) {
      points -= autoClickerPrice;
      autoClickerCount+=100;
      localStorage.setItem("auto-clicker", autoClickerCount);
      autoClickerPrice = Math.floor(autoClickerPrice + 1000);
      localStorage.setItem("auto-clicker-price", autoClickerPrice);
      updatePointsDisplay();
      updateAutoClickerDisplay();
    } else {
      alert("Tidak cukup uang !\nMaaf jualan lagi sana");
    }
  });

  BMB.addEventListener("click", function() {
    if (points >= multiplierPrice) {
      points -= multiplierPrice;
      multiplierCount += 0.2;
      multiplierCount = Number(multiplierCount.toFixed(1));
      localStorage.setItem("multiplier-count", multiplierCount);
      multiplierPrice = Math.floor(multiplierPrice * 1.5);
      localStorage.setItem("auto-multiplier-price", multiplierPrice);
      updatePointsDisplay();
      updateMultiplierDisplay();
    } else {
      alert("Tidak cukup uang !\nMaaf jualan lagi sana");
    }
  });

  function updatePointsDisplay() { PointsD.innerHTML = "Rp " + points; }

  function pointsInterval() {
    points = Math.floor(points + (autoClickerCount * multiplierCount));
    localStorage.setItem("points", points);
    updatePointsDisplay();
  }

  function updateAutoClickerDisplay() {
    ACC.innerHTML = autoClickerCount;
    ACP.innerHTML = autoClickerPrice;
    if (autoClickerCount > 0 && !autoClickerInterval) {
      autoClickerInterval = setInterval(pointsInterval, 1000);
    }
  }

  function updateMultiplierDisplay() {
    AMC.innerHTML = multiplierCount;
    AMP.innerHTML = multiplierPrice;
    if (multiplierCount > 0 && !autoClickerInterval) {
      autoClickerInterval = setInterval(pointsInterval, 1000);
    }
  }

  function DisplayAll() {
    updatePointsDisplay();
    updateAutoClickerDisplay();
    updateMultiplierDisplay();
  }

  var autoClickerCount2 = 250;
  var autoClickerPrice2 = 5000;
  var autoClickerInterval2 = null;
  var multiplierPrice2 = 12500;
  var multiplierCount2 = 1;
 
  const ClickB2 = document.getElementById("click-button2");

  const BACB2 = document.getElementById("buy-auto-clicker-button2");
  const ACC2 = document.getElementById("auto-clicker-count2");
  const ACP2 = document.getElementById("auto-clicker-price2");

  const BMB2 = document.getElementById("buy-multiplier-button2");
  const AMC2 = document.getElementById("auto-multiplier-count2");
  const AMP2 = document.getElementById("auto-multiplier-price2");

    if (localStorage.getItem("auto-clicker2") !== null) {
      autoClickerCount2 = parseInt(localStorage.getItem("auto-clicker2"));
    } else {
      localStorage.setItem("auto-clicker2", autoClickerCount2);
    }

    if (localStorage.getItem("auto-clicker2-price") !== null) {
        autoClickerPrice2 = parseInt(localStorage.getItem("auto-clicker2-price"));
    } else {
        localStorage.setItem("auto-clicker2-price", autoClickerPrice2);
    }

    if (localStorage.getItem("multiplier-count2") !== null) {
        multiplierCount2 = parseFloat(localStorage.getItem("multiplier-count2"));
    } else {
        localStorage.setItem("multiplier-count2", multiplierCount2);
    }

    if (localStorage.getItem("auto-multiplier-price2") !== null) {
        multiplierPrice2 = parseInt(localStorage.getItem("auto-multiplier-price2"));
    } else {
        localStorage.setItem("auto-multiplier-price2", multiplierPrice2);
    }

ClickB2.addEventListener("click", function() {
  points += 200;
  localStorage.setItem("points", points);
  updatePointsDisplay();
});

BACB2.addEventListener("click", function() {
  if (points >= autoClickerPrice2) {
    points -= autoClickerPrice2;
    autoClickerCount2 += 250;
    localStorage.setItem("auto-clicker2", autoClickerCount2);
    autoClickerPrice2 = Math.floor(autoClickerPrice2 + 2500);
    localStorage.setItem("auto-clicker2-price", autoClickerPrice2);
    updatePointsDisplay();
    updateAutoClickerDisplay2();
  } else {
    alert("Tidak cukup uang !\nMaaf jualan lagi sana");
  }
});

BMB2.addEventListener("click", function() {
    if (points >= multiplierPrice2) {
      points -= multiplierPrice2;
      multiplierCount2 += 0.3;
      multiplierCount2 = Number(multiplierCount2.toFixed(1));
      localStorage.setItem("multiplier-count2", multiplierCount2);
      multiplierPrice2 = Math.floor(multiplierPrice2 * 2);
      localStorage.setItem("auto-multiplier-price2", multiplierPrice2);
      updatePointsDisplay();
      updateMultiplierDisplay2();
    } else {
      alert("Tidak cukup uang !\nMaaf jualan lagi sana");
    }
});

function pointsInterval2() {
    points = Math.floor(points + (autoClickerCount2 * multiplierCount2));
    localStorage.setItem("points", points);
    updatePointsDisplay();
}

function updateAutoClickerDisplay2() {
    ACC2.innerHTML = autoClickerCount2;
    ACP2.innerHTML = autoClickerPrice2;
    if (autoClickerCount2 > 0 && !autoClickerInterval2) {
    autoClickerInterval2 = setInterval(pointsInterval2, 1000);
    }
}

function updateMultiplierDisplay2() {
    AMC2.innerHTML = multiplierCount2;
    AMP2.innerHTML = multiplierPrice2;
    if (multiplierCount2 > 0 && !autoClickerInterval2) {
    autoClickerInterval2 = setInterval(pointsInterval2, 1000);
    }
}

function DisplayAll2() {
    updateAutoClickerDisplay2();
    updateMultiplierDisplay2();
}

var autoClickerCount3 = 500;
var autoClickerPrice3 = 10000;
var autoClickerInterval3 = null;
var multiplierPrice3 = 25000;
var multiplierCount3 = 1;

const ClickB3 = document.getElementById("click-button3");

const BACB3 = document.getElementById("buy-auto-clicker-button3");
const ACC3 = document.getElementById("auto-clicker-count3");
const ACP3 = document.getElementById("auto-clicker-price3");

const BMB3 = document.getElementById("buy-multiplier-button3");
const AMC3 = document.getElementById("auto-multiplier-count3");
const AMP3 = document.getElementById("auto-multiplier-price3");

if (localStorage.getItem("auto-clicker3") !== null) {
    autoClickerCount3 = parseInt(localStorage.getItem("auto-clicker3"));
} else {
    localStorage.setItem("auto-clicker3", autoClickerCount3);
}

if (localStorage.getItem("auto-clicker3-price") !== null) {
    autoClickerPrice3 = parseInt(localStorage.getItem("auto-clicker3-price"));
} else {
    localStorage.setItem("auto-clicker3-price", autoClickerPrice3);
}

if (localStorage.getItem("multiplier-count3") !== null) {
    multiplierCount3 = parseFloat(localStorage.getItem("multiplier-count3"));
} else {
    localStorage.setItem("multiplier-count3", multiplierCount3);
}

if (localStorage.getItem("auto-multiplier-price3") !== null) {
    multiplierPrice3 = parseInt(localStorage.getItem("auto-multiplier-price3"));
} else {
    localStorage.setItem("auto-multiplier-price3", multiplierPrice3);
}

ClickB3.addEventListener("click", function() {
  points += 300;
  localStorage.setItem("points", points);
  updatePointsDisplay();
});

BACB3.addEventListener("click", function() {
if (points >= autoClickerPrice3) {
  points -= autoClickerPrice3;
  autoClickerCount3 += 500;
  localStorage.setItem("auto-clicker3", autoClickerCount3);
  autoClickerPrice3 = Math.floor(autoClickerPrice3 + 4000);
  localStorage.setItem("auto-clicker3-price", autoClickerPrice3);
  updatePointsDisplay();
  updateAutoClickerDisplay3();
} else {
  alert("Tidak cukup uang !\nMaaf jualan lagi sana");
}
});

BMB3.addEventListener("click", function() {
if (points >= multiplierPrice3) {
    points -= multiplierPrice3;
    multiplierCount3 += 0.4;
    multiplierCount3 = Number(multiplierCount3.toFixed(1));
    localStorage.setItem("multiplier-count3", multiplierCount3);
    multiplierPrice3 = Math.floor(multiplierPrice3 * 2.5);
    localStorage.setItem("auto-multiplier-price3", multiplierPrice3);
    updatePointsDisplay();
    updateMultiplierDisplay3();
} else {
    alert("Tidak cukup uang !\nMaaf jualan lagi sana");
}
});

function pointsInterval3() {
  points = Math.floor(points + (autoClickerCount3 * multiplierCount3));
  localStorage.setItem("points", points);
  updatePointsDisplay();
}

function updateAutoClickerDisplay3() {
  ACC3.innerHTML = autoClickerCount3;
  ACP3.innerHTML = autoClickerPrice3;
  if (autoClickerCount3 > 0 && !autoClickerInterval3) {
    autoClickerInterval3 = setInterval(pointsInterval3, 1000);
  }
}

function updateMultiplierDisplay3() {
AMC3.innerHTML = multiplierCount3;
AMP3.innerHTML = multiplierPrice3;
if (multiplierCount3 > 0 && !autoClickerInterval3) {
  autoClickerInterval3 = setInterval(pointsInterval3, 1000);
}
}

function DisplayAll3() {
  updateAutoClickerDisplay3();
  updateMultiplierDisplay3();
}

  var autoClickerCount4 = 1000;
  var autoClickerPrice4 = 20000;
  var autoClickerInterval4 = null;
  var multiplierPrice4 = 50000;
  var multiplierCount4 = 1;
 
  const ClickB4 = document.getElementById("click-button4");

  const BACB4 = document.getElementById("buy-auto-clicker-button4");
  const ACC4 = document.getElementById("auto-clicker-count4");
  const ACP4 = document.getElementById("auto-clicker-price4");

  const BMB4 = document.getElementById("buy-multiplier-button4");
  const AMC4 = document.getElementById("auto-multiplier-count4");
  const AMP4 = document.getElementById("auto-multiplier-price4");

    if (localStorage.getItem("auto-clicker4") !== null) {
      autoClickerCount4 = parseInt(localStorage.getItem("auto-clicker4"));
    } else {
      localStorage.setItem("auto-clicker4", autoClickerCount4);
    }

    if (localStorage.getItem("auto-clicker4-price") !== null) {
        autoClickerPrice4 = parseInt(localStorage.getItem("auto-clicker4-price"));
    } else {
        localStorage.setItem("auto-clicker2-price", autoClickerPrice4);
    }

    if (localStorage.getItem("multiplier-count4") !== null) {
        multiplierCount4 = parseFloat(localStorage.getItem("multiplier-count4"));
    } else {
        localStorage.setItem("multiplier-count4", multiplierCount4);
    }

    if (localStorage.getItem("auto-multiplier-price4") !== null) {
        multiplierPrice4 = parseInt(localStorage.getItem("auto-multiplier-price4"));
    } else {
        localStorage.setItem("auto-multiplier-price4", multiplierPrice4);
    }

ClickB4.addEventListener("click", function() {
  points += 400;
  localStorage.setItem("points", points);
  updatePointsDisplay();
});

BACB4.addEventListener("click", function() {
  if (points >= autoClickerPrice4) {
    points -= autoClickerPrice4;
    autoClickerCount4 += 1000;
    localStorage.setItem("auto-clicker4", autoClickerCount4);
    autoClickerPrice4 = Math.floor(autoClickerPrice4 + 6000);
    localStorage.setItem("auto-clicker4-price", autoClickerPrice4);
    updatePointsDisplay();
    updateAutoClickerDisplay4();
  } else {
    alert("Tidak cukup uang !\nMaaf jualan lagi sana");
  }
});

BMB4.addEventListener("click", function() {
    if (points >= multiplierPrice4) {
      points -= multiplierPrice4;
      multiplierCount4 += 0.5;
      multiplierCount4 = Number(multiplierCount4.toFixed(1));
      localStorage.setItem("multiplier-count4", multiplierCount4);
      multiplierPrice4 = Math.floor(multiplierPrice4 * 3);
      localStorage.setItem("auto-multiplier-price4", multiplierPrice4);
      updatePointsDisplay();
      updateMultiplierDisplay4();
    } else {
      alert("Tidak cukup uang !\nMaaf jualan lagi sana");
    }
});

function pointsInterval4() {
    points = Math.floor(points + (autoClickerCount4 * multiplierCount4));
    localStorage.setItem("points", points);
    updatePointsDisplay();
}

function updateAutoClickerDisplay4() {
    ACC4.innerHTML = autoClickerCount4;
    ACP4.innerHTML = autoClickerPrice4;
    if (autoClickerCount4 > 0 && !autoClickerInterval4) {
    autoClickerInterval4 = setInterval(pointsInterval4, 1000);
    }
}

function updateMultiplierDisplay4() {
    AMC4.innerHTML = multiplierCount4;
    AMP4.innerHTML = multiplierPrice4;
    if (multiplierCount4 > 0 && !autoClickerInterval4) {
    autoClickerInterval4 = setInterval(pointsInterval4, 1000);
    }
}

function DisplayAll4() {
    updateAutoClickerDisplay4();
    updateMultiplierDisplay4();
}

resetB.addEventListener("click", function() {
    if (confirm("Are you sure??")) {
      points = 0;

      autoClickerCount = 0;
      autoClickerPrice = 2000;
      multiplierPrice = 5000;
      multiplierCount = 1;

      autoClickerCount2 = 250;
      autoClickerPrice2 = 5000;
      multiplierPrice2 = 12500;
      multiplierCount2 = 1;

      autoClickerCount3 = 500;
      autoClickerPrice3 = 10000;
      multiplierPrice3 = 25000;
      multiplierCount3 = 1;

      autoClickerCount4 = 1000;
      autoClickerPrice4 = 20000;
      multiplierPrice4 = 50000;
      multiplierCount4 = 1;

      localStorage.clear();

      clearInterval(autoClickerInterval);
      clearInterval(autoClickerInterval2);
      clearInterval(autoClickerInterval3);
      clearInterval(autoClickerInterval4);

      autoClickerInterval = null;
      autoClickerInterval2 = null;
      autoClickerInterval3 = null;
      autoClickerInterval4 = null;

      PointsD.innerHTML = "Rp " + points.toString();

      ACC.innerHTML = autoClickerCount.toString();
      ACP.innerHTML = autoClickerPrice.toString();
      AMC.innerHTML = multiplierCount.toString();
      AMP.innerHTML = multiplierPrice.toString();

      ACC2.innerHTML = autoClickerCount.toString();
      ACP2.innerHTML = autoClickerPrice.toString();
      AMC2.innerHTML = multiplierCount.toString();
      AMP2.innerHTML = multiplierPrice.toString();

      ACC3.innerHTML = autoClickerCount.toString();
      ACP3.innerHTML = autoClickerPrice.toString();
      AMC3.innerHTML = multiplierCount.toString();
      AMP3.innerHTML = multiplierPrice.toString();

      ACC4.innerHTML = autoClickerCount.toString();
      ACP4.innerHTML = autoClickerPrice.toString();
      AMC4.innerHTML = multiplierCount.toString();
      AMP4.innerHTML = multiplierPrice.toString();

      location.reload();
    }   
  });