$(document).ready(function(){

// adding value to the crystal
var crystal = Math.floor(Math.random()*12)+1;
console.log('this is a value crystal ' + crystal);
// $('#image1black').text(crystal);

var greencrystal = Math.floor(Math.random()*12)+1;
console.log('this is a value greencrystal' + greencrystal);
// $('#imagegreen').text(greencrystal);

var redcrystal = Math.floor(Math.random()*12)+1;
console.log('this is a value redcrysta ' + redcrystal);
// $('#imagered').text(redcrystal);

var yellowcrystal = Math.floor(Math.random()*12)+1;
console.log('this is a value image6 ' + yellowcrystal);
// $('#image4').text(image6);

var randomNumber = Math.floor(Math.random()*102)+19;
console.log('this is a value randomNumber ' + randomNumber);
$('#leftDiv').text(randomNumber);
var resetbutton = $("#reset");

var presentScore = 0
$('#presentScore').text(presentScore);


//click on the randomNumber to get the win or lose

var wincount = 0 
var losecount = 0

// {/* <input type="reset" randomNumber> */}
//     resetbutton.append(`<button type="button" class="btn btn-primary">${winscount} Reset</button>`)
resetbutton.click(function () {
     wincount = 0 
    losecount = 0
    presentScore = 0
    randomNumber = Math.floor(Math.random()*102)+19;
    $("#number1").text(losecount);
    $("#number").text(wincount);
    $('#leftDiv').text(randomNumber);
    $('#presentScore').text(presentScore);
     alert("clicked reset")
})

$("#crystal").click(function () {
    // alert(presentScore += crystal);
    presentScore += crystal
    $('#presentScore').text(presentScore);
    if (randomNumber < presentScore){
    $("#number1").text(losecount + 1);

    }
    else if (randomNumber == presentScore){
    $("#number").text(wincount + 1);
    resetbutton.append(`<button type="button" class="btn btn-primary">${winscount} Reset</button>`)
    }
});
$("#greencrystal").click(function() {
    presentScore += greencrystal
    $('#presentScore').text(presentScore);
    if (randomNumber < presentScore){
    $("#number1").text(losecount + 1);
    resetbutton.html(`<button type="button" class="btn btn-primary">${winscount} Reset</button>`)

    }
    else if (randomNumber == presentScore){
    $("#number").text(wincount + 1);
    resetbutton.html(`<button type="button" class="btn btn-primary">${winscount} Reset</button>`)
v
    }

})

$("#redcrystal").click(function () {
    presentScore += redcrystal
    $('#presentScore').text(presentScore);
    if (randomNumber < presentScore){
    $("#number1").text(losecount + 1);
    resetbutton.append(`<button type="button" class="btn btn-primary">${winscount} Reset</button>`)

    }
    else if (randomNumber == presentScore){
    $("#number").text(wincount + 1);
    resetbutton.append(`<button type="button" class="btn btn-primary">${winscount} Reset</button>`)

    }
})

$("#yellowcrystals").click(function () {
    presentScore += yellowcrystal
    $('#presentScore').text(presentScore);
    if (randomNumber < presentScore){
    $("#number1").text(losecount + 1);
    resetbutton.append(`<button type="button" class="btn btn-primary">${winscount} Reset</button>`)

    }
    else if (randomNumber == presentScore){
    $("#number").text(wincount + 1);
    resetbutton.append(`<button type="button" class="btn btn-primary">${winscount} Reset</button>`)

    
    }
  
})

// adding the reset button
{/* <input type="reset" randomNumber> */}
// {/* <input type="reset" wincount="Reset">
// <input type="reset" losecount="Reset"> */}

});
