let pound = document.querySelector('[name="pound"]');
let poundToGram = document.querySelector('[name="poundToGrams"]');
let poundToKilograms = document.querySelector('[name="poundToKilograms"]');
let poundToOunces = document.querySelector('[name="poundToOunces"]');
let output = document.querySelector('input');

window.onload = function() {
    pound.focus();
    pound.value = 1;
    poundToGram.value = pound.value / 0.0022046;
    poundToKilograms.value = pound.value / 2.2046;
    poundToOunces.value = pound.value * 16;
  }
pound.addEventListener('input' , convert);

function convert(){
    let poundValue =pound.value ; 
    poundToGram.value = poundValue / 0.0022046;
    poundToKilograms.value = poundValue / 2.2046;
    poundToOunces.value = poundValue * 16;
    if(pound.value == ''){
        poundToGram.value = '';
        poundToKilograms.value = '';
        poundToOunces.value = ''
    }
}
