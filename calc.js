let value = 0
// functiuon for button
let a = (value) => {
    document.getElementById("cout").value += value;
}
// func() for clear
let b = () => {

    document.getElementById("cout").value = ""
}
//  fnc() evalivate
let c = () => {
    let result = document.getElementById('cout').value
    document.getElementById('cout').value = eval(result);
}