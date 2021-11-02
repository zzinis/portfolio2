
// const h1 = $(".txt h1");


// $(window).onload(function(){
//     $(h1).each(function(index, data){
//         letter($(data), 0.1);
//     });
// });



// function letter(el, interval){
//     if(el ===undefined) {
//         console.error("첫번째 인수로 선택자를 지정해주세요!!");
//         return;
//     }
//     if(interval === undefined) interval = 0;

//     const txt = el.text();
//     el.text("");
//     let num=0;

//     for(let letter of txt){
//         el.append(
//             $("<span>")
//                 .text(letter)
//                 .css({
//                     "transition-delay": `${num*interval}s`,
//                     "display": "inline-block" 
//                 })
//         );
//         num++;
//     }
// }

