import { Mongo } from 'meteor/mongo';
 
export const Protests = new Mongo.Collection('protests');

// function hideProtests(borough){
//   var allProtests = document.querySelectorAll('.protestItem');

//     for (var protest of allProtests) {
//       var classes = protest.className.split(" ");
//       if(classes.indexOf(borough) === -1) {
//         if (hidden) {
//           protest.style.display = "block";
//         } else {
//           protest.style.display = "none";
//         }
//       }
//     }

//     hidden = !hidden;