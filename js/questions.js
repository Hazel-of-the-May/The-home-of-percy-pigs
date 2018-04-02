document.addEventListener("DOMContentLoaded", function() {

function name() {
var urlParams = new URLSearchParams(window.location.search);

  console.log(urlParams.get('transport'));
}

name();

});



// switch (mode) {
//     case bus:
//         "bus" <> "";
//         break;
//     case metro:
//         metro <> "";
//         break;
//     case cycling:
//         cycling <> "";
//         break;
