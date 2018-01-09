var myImage = document.querySelector('img');

myImage.onclick = function() {
    
    var mySrc = myImage.getAttribute('src');
    
    if (mySrc === 'images/firefox-icon.png') {
        
        myImage.setAttribute('src', 'images/home.png');
        
    } else {
        
        myImage.setAttribute('src', 'images/firefox-icon.png');
        
    }
    
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    
    var myName = prompt('пароль');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'razdva ' + myName;
    
}

if(!localStorage.getItem('name')) {
    
    setUserName();
        
} else {
    
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'tri' + storedName;
    
}

myButton.onclick = function() { setUserName(); }