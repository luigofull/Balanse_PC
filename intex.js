let button = document.querySelector(".baton");
let form = document.forms.form
let form_elements = document.forms.form.elements

let images = ["url(./Perfectly_Balanced.png)", "url(./NO.png)", "url(./YES.png)"]
let result = document.querySelector(".result")

function getOption() {
    let select1 = document.forms.form.elements.processor
    let select2 = document.forms.form.elements.videocard
    let select3 = document.forms.form.elements.motherboard

    output1 = select1.options[select1.selectedIndex].value;
    output2 = select2.options[select2.selectedIndex].value;
    output3 = select3.options[select3.selectedIndex].value;

    return([output1, output2, output3])
}

function getCompatibility() {
    let [output1, output2, output3] = getOption() 
    
    console.log (output1, output2, output3)

    if (output1 === "i3_12100F" & output2 === "GTX_1080ti" & output3 === "ASUS_A610M") {
        return("баланс соблюден")
    } else if (output1 === "i3_12100F" & output2 === "RTX_3060ti" & output3 === "ASUS_B660M") {
        return("баланс не соблюден")
    } else if (output1 === "i9_12900KF" & output2 === "RTX_4080ti" & output3 === "ASUS_Z690M") {
        return("Идеальный баланс")
    } else if (output1 === "i7_12700K" & output2 === "RTX_3060ti" & output3 === "ASUS_B660M") {
        return("баланс соблюден")
    } else if (output1 === "i3_12100F" & output2 === "RTX_4080ti" & output3 === "ASUS_Z690M") {
        return("баланс не соблюден")   
    }
}

button.addEventListener('click', function (){
    let res = getCompatibility()
    if (res === "Идеальный баланс") {
        result.style.backgroundImage = images[0]
    } else if (res === "баланс соблюден") {
        result.style.backgroundImage = images[2]
    } else if (res === "баланс не соблюден") {
        result.style.backgroundImage = images[1]
    }

});