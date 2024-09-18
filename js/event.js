console.log('spicial dom class today')


//option -2 add on click **************important
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
//option -3 add on click 
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = "blue";
}
//option -4 add on click 
const PurpleButton = document.getElementById('make-purple');
PurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}
//option -5 add on click 
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}
//option -6 add on click 
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})
//option -7 add on click ********Important
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})