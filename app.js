var pData = Number(prompt('Please enter the year of your birth'));
var age = 2023 - pData
if (age > 18) {
  document.write(`<h1 style="color: green;"> Congratulations! Your can apply for your NID card. You are ${age} years old </h1>`);
} else if ( age == 18) {
  document.write(`<h1 style="color: blue;"> Congratulations! Your can apply for your NID card But to be received it next year. You are ${age} years old </h1>`);
}

else {
  document.write(`<h1 style="color: red;"> Sorry! You can't apply for your NID card. You are ${age} years old </h1>`);
}


document.querySelector('.btnActive').addEventListener('click', function(){
  document.querySelector('.popup').style.display = "block"
})

document.querySelector('.close_btn').addEventListener('click', function(){
  document.querySelector('.popup').style.display = "none"
})



