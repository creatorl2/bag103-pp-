let myButton = document.querySelector('button');
//let myTextArea = document.querySelector('textarea');
myButton.onclick = function() {
    let aim = parseFloat(document.getElementById("aim").value);
    if (isNaN(aim)) {
        alert("A number was not entered for 'aim'. \nPlese enter a value and run again.")
    }
    let speed = parseFloat(document.getElementById('speed').value);
    if (isNaN(speed)) {
        alert("A number was not entered for 'speed'. \nPlese enter a value and run again.")
    }
    let ar = parseFloat(document.getElementById('ar').value);
    if (isNaN(ar)) {
        alert("A number was not entered for 'ar'. \nPlese enter a value and run again.")
    }
    let od = parseFloat(document.getElementById('od').value);
    if (isNaN(od)) {
        alert("A number was not entered for 'od'. \nPlese enter a value and run again.")
    }
    let sliders = parseFloat(document.getElementById('sliders').value);
    if (isNaN(sliders)) {
        sliders = 0
    }
    let maxcombo = parseFloat(document.getElementById('maxcombo').value);
    if (isNaN(maxcombo)) {
        alert("A number was not entered for 'maxcombo'. \nPlese enter a value and run again.")
    }
    let c300 = parseFloat(document.getElementById('c300').value);
    if (isNaN(c300)) {
        alert("A number was not entered for 'c300'. \nPlese enter a value and run again. If you are using lazyacc set c300 to the amount of objects in a map.")
    }
    let c100 = parseFloat(document.getElementById('c100').value);
    if (isNaN(c100)) {
        c100 = 0
    }
    let c50 = parseFloat(document.getElementById('c50').value);
    if (isNaN(c50)) {
        c50 = 0
    }
    let cMiss = parseFloat(document.getElementById('cMiss').value);
    if (isNaN(cMiss)) {
        cMiss = 0
    }
    let combo = parseFloat(document.getElementById('combo').value);
    if (isNaN(combo)) {
        alert("A number was not entered for 'combo'. \nPlese enter a value and run again.")
    } 
    console.log(combo);
    if (combo > maxcombo) {
        alert("The value 'combo' should not exceed 'maxcombo'. \n Please re-enter and run again.")
    }
    let lazyaccElement = document.getElementById('lazyacc');
    let lazyacc = parseFloat(lazyaccElement.value);
    if (isNaN(lazyacc)) {
        lazyaccElement.value = 0;
        lazyacc = lazyaccElement.value;
    }
    if (lazyacc > 1) {
    	alert('lazyacc should not exceed 1. If you are trying to find accuracy use decimals. 98% accuracy = 0.98, 50% accuracy = 0.5')
    }


    let myHdCheckbox = document.getElementById('hd');
    let hd;
    if (myHdCheckbox.checked == true) {
        hd = 1;
    } else {
        hd = 0;
    }

    let myDtCheckbox = document.getElementById('dt');
    let dt;
    if (myDtCheckbox.checked == true) {
        dt = 1;
    } else {
        dt = 0;
    }

    let myHrCheckbox = document.getElementById('hr');
    let hr;
    if (myHrCheckbox.checked == true) {
        hr = 1;
    } else {
        hr = 0;
    }

    let myEzCheckbox = document.getElementById('ez');
    let ez;
    if (myEzCheckbox.checked == true) {
        ez = 1;
    } else {
        ez = 0;
    }

    let myHtCheckbox = document.getElementById('ht');
    let ht;
    if (myHtCheckbox.checked == true) {
        ht = 1;
    } else {
        ht = 0;
    }
    let myTextArea = document.getElementById('output');
    myTextArea.value = 'bag103 pp' + ppcalc(c300, c100, c50, cMiss, combo, hd, dt, hr, 
        ez, ht, aim, speed, od, ar, maxcombo, lazyacc, sliders) + '\npp for fc below' + ppcalc(c300 + cMiss, c100, c50, cMiss * 0, combo ** 0, hd, dt, hr, 
            ez, ht, aim, speed, od, ar, maxcombo ** 0, lazyacc, sliders);
    
    /*myTextArea.value = 'aim = ' + aim + 
                       '\nspeed = ' + speed +
                       '\nar = ' + ar +
                       '\nod = ' + od +
                       '\nsliders = ' + sliders +
                       '\nmaxcombo = ' + maxcombo + 
                       '\nc300 = ' + c300 +
                       '\nc100 = ' + c100 +
                       '\nc50 = ' + c50 +
                       '\ncMiss = ' + cMiss +
                       '\ncombo = ' + combo +
                       '\nlazyacc = ' + lazyacc +
                       '\nhd = ' + hd +
                       '\ndt = ' + dt +
                       '\nhr = ' + hr +
                       '\nez = ' + ez +
                       '\nht = ' + ht;*/
}



function ppcalc(c300, c100, c50, cMiss, combo, hd, dt, hr, 
                ez, ht, aim, speed, od, ar, maxcombo, lazyacc, sliders) {
                    //let myTextArea = document.getElementById('output');
                    //let printString =  'aim = ' + aim + 
                                       '\nspeed = ' + speed +
                                       '\nar = ' + ar +
                                       '\nod = ' + od +
                                       '\nsliders = ' + sliders +
                                       '\nmaxcombo = ' + maxcombo + 
                                       '\nc300 = ' + c300 +
                                       '\nc100 = ' + c100 +
                                       '\nc50 = ' + c50 +
                                       '\ncMiss = ' + cMiss +
                                       '\ncombo = ' + combo +
                                       '\nlazyacc = ' + lazyacc +
                                       '\nhd = ' + hd +
                                       '\ndt = ' + dt +
                                       '\nhr = ' + hr +
                                       '\nez = ' + ez +
                                       '\nht = ' + ht;
		    let printString = '\n.'
                    let pp = 0;
                    let accuracy = 0;
                    let cObj = 0
                    let truecObj = 0;
                    let arAboveTenPointThree = -10.3 + ar;
                    let arBelowEight = 8 - ar;

                    cObj = c300 + c100 + c50 + cMiss;
                    truecObj = c300 + c100 + c50 + cMiss;

                    let total_hits_over_2_75k = cObj / 2750;
                    let total_hits_over_2k = cObj / 2000;

                    accuracy = ((c300 * 300) + (c100 * 100) + (c50 * 50))
                                 / (cObj * 300);
                    if (lazyacc != 0) {
                        accuracy = lazyacc;
                    }
                    let accAbove95 = accuracy - 0.95;
                    if (accuracy <= 0.95) {
                        accAbove95 = 0;
                    }

                    let comboObjcountRatio = cObj / maxcombo;

                    let FCthreshold = Math.min(maxcombo * 0.98, maxcombo - 5);
                    FCthreshold = Math.round(FCthreshold);

                    let sbmiss = maxcombo / combo - 0.5;
                    if (sbmiss < 0.5 && combo < FCthreshold) {
                        sbmiss = 0.5;
                    }
                    if (combo < FCthreshold) {
                        cObj = combo * comboObjcountRatio;
                    } else {
                        FCthreshold = 1;
                    }

                    if (combo >= FCthreshold) {
                        sbmiss = 0;
                    }

                    cMiss = Math.max(cMiss, sbmiss);

                    let aimBaseDiff = (aim * 9.2)**2.75 / 50;
                    let speedBaseDiff = (speed * 9.5)**2.75 / 50;

                    accAbove95 = accAbove95 * 200;

                    let odFlatBonus = od**3 / 35;

                    let odBonus = (odFlatBonus + ((cObj - (sliders * 0.75 * (combo / maxcombo)))
                                                    * (5 * (od**4)) / (cObj + 2000) * 0.00715)**0.7)
                                  * (accuracy**5)
                                  + ((od / 0.75) * speed)
                                  * (accuracy**30);
                    
                    odBonus = odBonus * (1 + ((od**2 / 250) * (accAbove95**1.7 / 50.12)));
                    
		    console.log('od bonus' + odBonus)
		
                    let aimDiff = aimBaseDiff;
                    let speedDiff = speedBaseDiff;

                    let diffAddend;
                    if (cObj > 2000) {
                        diffAddend = Math.log10(total_hits_over_2k) * 0.4;
                    } else {
                        diffAddend = 0.0;
                    }
                   
                    aimDiff = aimDiff * (accuracy**(4 - (od / 4)));
                    speedDiff = speedDiff * (accuracy**(6 - (od / 4)));

                    aimDiff = aimDiff * (0.9 + (0.5 * Math.min(1, total_hits_over_2k)
                                                    +  diffAddend));
                    speedDiff = speedDiff * (0.9 + (0.5 * Math.min(1, total_hits_over_2_75k)
                                                        + diffAddend));
                    console.log('aim' + aimDiff + 'speed' + speedDiff + 'post objcount')

                    ///////////////////////////////////////

                    let objectcountMisscountScalar = (-0.01 + ((1/4/100) * (cObj / 500)));
                    let baseMissPenalty = 0.96;
                    let minimumMissPenalty = 0.9925;

                    let missPenalty = baseMissPenalty + objectcountMisscountScalar;
                    if (missPenalty > minimumMissPenalty) {
                        missPenalty = minimumMissPenalty;
                    }

                    let missMultiplier = missPenalty**(cMiss**0.66);

                    if (cMiss == 0) {
                        missMultiplier = 1;
                    }

                    aimDiff = aimDiff * missMultiplier;
                    speedDiff = speedDiff * ((missMultiplier + 0.12) / 1.12);
                    odBonus = odBonus * ((missMultiplier + 0.33) / 1.33);
	            console.log('aim' + aimDiff + 'speed' + speedDiff + 'post miss')

                    ////////////////////////////////////////
		    console.log(arAboveTenPointThree > 0.01)
                    if (arAboveTenPointThree > 0.01) {
                        odBonus = odBonus * (1 + (0.3 * arAboveTenPointThree));
                        aimDiff = aimDiff * (1 + (0.1 * arAboveTenPointThree));
                        speedDiff = speedDiff * (1 + (0.1 * arAboveTenPointThree));
                    } else {
                        arAboveTenPointThree = 0;
                    }
		    console.log(arBelowEight)	
                    if (arBelowEight > 0.01) {
                        aimDiff = aimDiff * (1 + (0.05 * arBelowEight));
                        speedDiff = speedDiff * (1 + (0.033 * arBelowEight));
                    } else {
                        arBelowEight = 0;
                    }

                    if (hd == 1) {
                        aimDiff = aimDiff * (1.06 - (0.03 * arAboveTenPointThree ));		
                    	speedDiff = speedDiff * 1.14 - (0.07 * arAboveTenPointThree);
                    	odBonus = odBonus * 1.1 + (0.116 + (arAboveTenPointThree * 0.12));
                    }

		     
		    console.log('aim' + aimDiff + 'speed' + speedDiff + 'post ar')
                    aimDiff = aimDiff**1.1;
                    speedDiff = speedDiff**1.1;
		    console.log('aim' + aimDiff + 'speed' + speedDiff + 'post all')
                    pp = ((aimDiff**(1/1.1)) + (speedDiff**(1/1.1)) + (odBonus)) * 0.7;
			
                    pp = pp.toFixed(2);

                    let EStar = (aim**1.1) + (speed**1.1)**(1/1.1);
                    EStar = EStar.toFixed(2);

                    /////////////////////////////////////////////
                    printString = printString + '\n ---------------------------------------';
                    printString = printString + '\n' + EStar + '*';
                    if (hd == 1) {
                        printString = printString + '\nhd = ' + hd;
                    }
                    printString = printString + '\n\n';
                    printString = printString + '\nOD ' + od + ' AR ' + ar + ' | aim star rating ' +
                                                (aim * 2) + ' * | speed star rating ' + (speed * 2) + ' * ' +
                                                '\n' + (accuracy * 100) + ' % acc |' + cMiss +
                                                ' X effective misscount\n' + combo + ' / ' + maxcombo +
                                                '(' + cObj + ' objects used for length bonuses out of ' +
                                                truecObj + ')\n-------------->' + pp + ' pp <---------------';
                    
                    return printString;

                }



