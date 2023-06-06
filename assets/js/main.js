// // 'use strict'
// // cykle: for (let num = 0; num < 2; num++) {
// //     for (let size = 0; size < 3; size++) {
// //         if (size == 1) break cykle;
// //         console.log(size);
// //     }
// // }


// // function showName() {
// //     console.log('Вася!');
// // }
// // setTimeout(showName, 0);
// // console.log('Коля!');


// // let showMessage;
// // if (2 > 1) {
// //     showMessage = function() {
// //         console.log('Повідомлення');
// //     }
// // }
// // showMessage();

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function (e) {
//     if (!e.target.matches('.dropbtn')) {
//         var myDropdown = document.getElementById("myDropdown");
//         if (myDropdown.classList.contains('show')) {
//             myDropdown.classList.remove('show');
//         }
//     }
// }

// $(document).ready(function () {

//     // = Добавляем ссылку наверх к заголовку
//     $('h2').append('<a href="#header">top</a>');

//     // = Вешаем событие прокрутки к нужному месту
//     //	 на все ссылки якорь которых начинается на #
//     $('a[href^="#"]').bind('click.smoothscroll', function (e) {
//         e.preventDefault();

//         var target = this.hash,
//             $target = $(target);

//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top
//         }, 900, 'swing', function () {
//             window.location.hash = target;
//         });
//     });

// });
// console.log(jQuery().jquery);

// // Submit subscription form using Ajax
// const form = document.getElementById('subscription_form')
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     $.ajax({
//         type: 'POST',
//         url: 'subscription_ajax.php',
//         data: {
//             phone: form.elements['phone'].value
//         }
//     }).done(() => {
//         form.reset()
//         alert('        Дякую за замовлення!')
//     }).fail((error) => {
//         alert('Щось пішло не так :(', error.message)
//     });
// });


// const formData = new FormData()

// const handleImageUpload = event => {
//     const files = event.target.file
//     formData.append('image', files[0])
//     console.log('image', files[0])
// }

// const forms = document.getElementById('sub-ordering')
// forms.addEventListener('submit', (event) => {
//     event.preventDefault()
//     handleImageUpload()
//     $.ajax({
//         type: 'POST',
//         url: './upload_image/index.php',
//         data: formData,
//         // data: $('#sub-ordering').serialize(),
//         success: function (data) {
//             console.log(data);
//         }
//     }).done(() => {
//         forms.reset()
//         alert('        Дякую за замовлення!')
//     }).fail((error) => {
//         alert('Щось пішло не так :(', error.message)
//     });
// });

// document.querySelector('#photo').addEventListener('change', event => handleImageUpload(event))
// var modal = document.getElementById('modal');
// var btn = document.getElementById('btnOpen');
// var span = document.getElementsByClassName('close')[0];

// btn.onclick = () => {
//     modal.style.display = "block";
//     overlay.style.display = "block"
// }
// span.onclick = function () {
//     modal.style.display = "none";
//     overlay.style.display = "none";
// }
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//         overlay.style.display = "none";
//     }
// }

// // vjQuery(document).ready(function () {
// //     var btn = $('#button-to-upp');
// //     $(window).scroll(function () {
// //         if ($(window).scrollTop() > 300) {
// //             btn.addClass('show');
// //         } else {
// //             btn.removeClass('show');
// //         }
// //     });
// //     btn.on('click', function (e) {
// //         e.preventDefault();
// //         $('html, body').animate({ scrollTop: 0 }, '300');
// //     });
// // });

// 'use strict'
// cykle: for (let num = 0; num < 2; num++) {
//     for (let size = 0; size < 3; size++) {
//         if (size == 1) break cykle;
//         console.log(size);
//     }
// }


// function showName() {
//     console.log('Вася!');
// }
// setTimeout(showName, 0);
// console.log('Коля!');


// let showMessage;
// if (2 > 1) {
//     showMessage = function() {
//         console.log('Повідомлення');
//     }
// }
// showMessage();

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

$(document).ready(function () {

    // = Добавляем ссылку наверх к заголовку
    $('h2').append('<a href="#header">top</a>');

    // = Вешаем событие прокрутки к нужному месту
    //   на все ссылки якорь которых начинается на #
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

});
console.log(jQuery().jquery);
// Submit subscription form using Ajax
const form = document.getElementById('subscription_form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'subscription_ajax.php',
        data: {
            phone: form.elements['phone'].value
        }
    }).done(() => {
        form.reset()
        alert('Дякую за замовлення!')
    }).fail((error) => {
        alert('Щось пішло не так :(', error.message)
    });
});

let formData = new FormData()

const handleImageUpload = event => {
    const files = event.target.files
    formData.append('photo', files[0])
}

const fileSelector = document.getElementById('photo')
fileSelector.addEventListener('change', event => handleImageUpload(event))

const forms = document.getElementById('sub-ordering')
forms.addEventListener('submit', (event) => {
    console.log('handler called')
    event.preventDefault()
    console.log(document.getElementById('phone-input').value)
    formData.append('phone-num', document.getElementById('phone-input').value)
    // console.log('data', formData.entries())
    // for (var pair of formData.entries()) {
    //     console.log(pair[0] + ', ' + pair[1]);
    // }
    $.ajax({
        processData: false,
        contentType: false,
        type: 'POST',
        url: './upload_image/index.php',
        data: formData,
        // data: $('#sub-ordering').serialize(),
        success: (data) => {
            console.log(data);
        }
    }).done(() => {
        forms.reset()
        alert('Дякую за замовлення!')
    }).fail((error) => {
        alert('Щось пішло не так :(', error.message)
    });
});


var modal = document.getElementById('modal');
var btn = document.getElementById('btnOpen');
var span = document.getElementsByClassName('close')[0];

btn.onclick = () => {
    modal.style.display = "block";
    overlay.style.display = "block"
}
span.onclick = function () {
    modal.style.display = "none";
    overlay.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        overlay.style.display = "none";
    }
}

// vjQuery(document).ready(function () {
//     var btn = $('#button-to-upp');
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > 300) {
//             btn.addClass('show');
//         } else {
//             btn.removeClass('show');
//         }
//     });
//     btn.on('click', function (e) {
//         e.preventDefault();
//         $('html, body').animate({ scrollTop: 0 }, '300');
//     });
// });

