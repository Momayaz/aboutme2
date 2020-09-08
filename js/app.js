'use strict';
var count = 0
var username = prompt('what\'s your name ^^')
alert('welcome you ' + username);

var q1 = prompt('is my major Translation?^.^').toLowerCase();
if (q1 == 'yes' || q1 == 'y') {
    //console.log('correct answer '+username);
    alert('correct answer ' + username);
    count++
} else if (q1 == 'no' || q1 == 'n') {
    //console.log('incorrect answer '+username);
    alert('incorrect answer ' + username);
} else {
    alert('bad input ' + username);
}
var q2 = prompt('Do you think i graduated in low avarage?').toLowerCase();
if (q2 == 'yes' || q2 == 'y') {
    //onsole.log('ammazing,correct again '+username);
    alert('ammazing,correct again ' + username);
    count++
} else if (q2 == 'no' || q2 == 'n') {
    // console.log('oops,incorrect');
    alert('oops,incorrect ' + username);
} else {
    alert('bad input ' + username);
}
var q3 = prompt('Do you think am hardworker?').toLowerCase();
if (q3 == 'yes' || q3 == 'y') {
    //console.log('correct answer ^^ '+username);
    alert('correct answer ^^ ' + username);
    count++
} else if (q3 == 'no' || q3 == 'n') {
    //console.log('oppsi,incorrect answer '+username);
    alert('oppsi,incorrect answer ' + username);
} else {
    alert('bad input ' + username);
}
var q4 = prompt('do you think i will stop there?').toLowerCase();
if (q4 == 'yes' || q4 == 'y') {
    //console.log('thank you alot for you suppot^^ '+username);
    alert('thank you alot for your support ' + username);
    count++
} else if (q4 == 'no' || q4 == 'n') {
    //console.log('thank you, i will do my best ^^ '+username);
    alert('thank you, i will do my beast ' + username);
} else {
    alert('bad input ' + username);
}
var q5 = prompt('Do you think you are in the right place').toLowerCase();
switch (true) {
    case (q5 == 'yes' || q5 == 'y'):
        //console.log('i appreciate^^ '+username)
        alert('i appritciate ' + username);
        count++
        break;
    case (q5 == 'no' || q5 == 'n'):
        //console.log('i appreciate too ^^ '+username)
        alert('i appreciate too ^^ ' + username);
        break;
    default: alert('bad input ' + username);
        break;
}
var mynumber = 4
var flag = false
for (var i = 0; i < 4; i++) {
    var usernumber = Number(prompt('can you guess the correct number between 1-10, pay attention that you have four chances.'))
    if (mynumber == usernumber) {
        flag = true
        //console.log('correct answer');
        alert('correct answer');
        count++
        break;
    } else if (mynumber < usernumber) {
        alert('too high');
    } else if (mynumber > usernumber) {
        alert('too low');
    } else {
        alert('bad input');
    }
}
if (!flag) {
    alert('the correct answer is ' + mynumber);
}


var transportation = ['car', 'plant', 'train', 'camel', 'bicycle'];
var finish = false;
var m=0;
while (m <6) {
    var ridable = prompt('what can people use to travel?').toLowerCase();
    for (var k = 0; k < transportation.length; k++) {
        if (ridable == transportation[k]) {
            alert('correct answer');
            count++
            finish = true;
            break;
           

        }
    }
    if (finish)
        break;
alert(' u have '+5-m+' reamin')
    m++;

}
alert('your score is '+count+'/7')