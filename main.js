function changebg() {
    console.log("eso");
    var images = [
        'url(./images/1.jpg);',
        'url(./images/2.jpg);',
        'url(./images/3.jpg);',
        'url(./images/4.jpg);',
        'url(./images/5.jpg);',
        'url(./images/6.jpg);',
        'url(./images/7.jpg);',
        'url(./images/8.jpg);'
    ]
    var box = document.querySelectorAll('.box2');
    var bg = images[Math.floor(Math.random() * images.length)];
    box.style.backgroundImage = bg;
    setInterval(changebg, 100);
}