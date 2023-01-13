function valuechange(){
    var test = document.getElementById('for');
    console.log( test.value );
    var test2 = document.getElementById('LED');
    LED.setAttribute('src','303/LED_' + test.value + '.bmp');
}