'use strict';
var username = prompt('what\'s your name ^^')
alert('welcome you '+username);
var q1 = prompt('is my major Translation?^.^').toLowerCase();

if (q1 == 'yes' || q1 == 'y') {
    //console.log('correct answer');
    alert('correct answer');
} else if (q1 == 'no' || q1 == 'n') {
    //console.log('incorrect answer');
    alert('incorrect answer');
} else {
    alert('bad input');
}
var q2 = prompt('Do you think i graduated in low avarage?').toLowerCase()
if (q2 == 'yes' || q2 == 'y') {
    //onsole.log('ammazing,correct again');
    alert('ammazing,correct again');
} else if (q2 == 'no' || q2 == 'n') {
    // console.log('oops,incorrect');
    alert('oops,incorrect');
} else {
    alert('bad input');
}
var q3 = prompt('Do you think am hardworker?').toLowerCase()
if (q3 == 'yes' || q3 == 'y') {
    //console.log('correct answer ^^');
    alert('correct answer ^^');
} else if (q3 == 'no' || q3 == 'n') {
    //console.log('oppsi,incorrect answer');
    alert('oppsi,incorrect answer');
} else {
    alert('bad input');
}
var q4 = prompt('do you think i will stop there?').toLowerCase()
if (q4 == 'yes' || q4 == 'y') {
    //console.log('thank you alot for you suppot^^');
    alert('thank you alot for your support');
} else if (q4 == 'no' || q4 == 'n') {
    //console.log('thank you, i will do my best ^^');
    alert('thank you, i will do my beast');
} else {
    alert('bad input');
}
// var q5 = prompt('Do you think you are in the right place').toLowerCase();
// switch (true) {
//     case (q5 == 'yes' || q5 == 'y'):
//         //console.log('i appreciate^^')
//         alert('i appritciate');
//         break;
//     case (q5 == 'no' || q5 == 'n'):
//         //console.log('i appreciate too ^^')
//         alert('i appreciate too ^^');
//         break;
//     default: alert('bad input');
//         break;
// }
// var mynumber = 4
// var flag = false
// for (var i = 0; i < 4; i++) {
//     var usernumber = Number(prompt('can you guess the correct number between 1-10, pay attention that you have four chances.'))
//     if (mynumber == usernumber) {
//         flag = true
//         //console.log('correct answer');
//         alert('correct answer');
//         break;
//     } else if (mynumber < usernumber) {
//         alert('too high');
//     } else if (mynumber > usernumber) {
//         alert('too low');
//     } else {
//         alert('bad input');
//     }
// }
// if (!flag) {
//     alert('the correct answer is ' + mynumber);
// }
// var count=00
// var transportation = ['car', 'plant', 'train', 'camel', 'bicycle'];

// var count=0
// var finish=false;
// while (m < 6) {
//     var ridable = prompt('what can people use to travel?').toLowerCase();
//     for (var k = 0; k < transportation.length; k++) {
//         if (ridable == transportation[k]) {
//             alert('correct answer')
//             count++
//             break;
//             finish=true;

//         }
//     }
// if(finish)
// break;
//     m++

// }
