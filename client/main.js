import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import { Accounts } from 'meteor/accounts-base';
import { Protests } from '../imports/api/tasks.js'
import { Meteor } from 'meteor/meteor';
console.log(Protests)
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

var CssTitle = "font-size:40px; margin:30px;"
var CssWords = "font-size: 16px; margin: 10px 30px;"

Template.body.helpers({
  todos() {
    return Protests.find({});
  }
});

Template.body.events({
  'click #about': function(event, template){
  	event.preventDefault();
    document.querySelector('#signedProtests').style.display = "none";
    document.querySelector('#allProtests').style.display = "none";
  	document.querySelector('#title').innerHTML = "About";
    document.querySelector('main').style.cssText= "background-color: none";
  	document.querySelector('main').style.cssText = "background-image: url('aboutbackground.jpg');"
  	document.querySelector('main').style.opacity = 1;
  	document.querySelector('#title').style.cssText = CssTitle;
  	document.querySelector('#words').innerHTML = "<p>The Team</p> <p><b>Irina</p> <ul> <li>Irina, a brooklyn native, is 16 years old.</li> <li> She currently attends the prestitges Brooklyn Technical HighSchool on of the 7 specialized highschool.</li> <li> As Irina attends Brooklyn Technical Highschool, she has praticpated two of the walkouts staged to protest the elected officals lack of response to passing effective gun legislation.</li> <li> As the daughter of immigrants Irina also finds it important to fight for the right of those who are trying to migrant to the United States</li> </ul>  <p> Gabby </p><ul> <li>Gabby, a Brooklyn native, is 16 years old.</li><li> She also like Irina attends Brooklyn Technical Highschool</li><li> At Brooklyn Tech, Gabby plays a part in her school's Black student union club, and particpated in both walkout protesting gun violence at her school. Gabby also frequently attends marches and protest such as the March for Our Lives Protest, the Women's March, and the end Family Seperation</li><li> Gabby is a firm believer in voicing her opinions She believes that people given the tools can help give about the change they want to see in this world.</li></ul><p> Gabby </p><ul><li> Gabby, a Brooklyn native, is 15 years old. </li><li> She also attends Brooklyn Tech. </li><li> At Brooklyn Tech, Gabby particpates in the crocheting club. And, she is a really active dancer outside of school.</li><li> Gabby believes that it is time for activist around the world to get together to put a stop to the divisize policies of the Trump campaign. </b></li> </ul>" ;
  	document.querySelector('#words').style.cssText = CssWords;
    document.querySelector('#words').style.css.Text= "font-size: 100px"
    document.querySelector('#words').style.cssText= " font-family: Tahoma, Geneva, sans-serif ";
  },
  'click #find': function(event, template){
  	event.preventDefault();
    document.querySelector('#signedProtests').style.display = "none";
    document.querySelector('#allProtests').style.display = "none";
  	document.querySelector('#title').innerHTML = "Find A Protest Near You";
  	document.querySelector('main').style.background = "purple";
  	document.querySelector('#words').innerHTML = "<p>Select a borough:</p> <button id = 'brooklyn' class = 'fancyButton'>Brooklyn</button> <div id = 'brooklynProtest'></div> <button id='bronx'  class = 'fancyButton'>Bronx</button> <div id='bronxProtest'> </div> <button  class = 'fancyButton' id='manhattan'>Manhattan</button><div id='manhattanProtest'> </div> <button id='statenisland'  class = 'fancyButton'>Staten Island</button><div id='siProtest'> </div> <button id='queens'  class = 'fancyButton'>Queens</button> <div id = 'queensProtest'> </div>";
  	document.querySelector('#title').style.cssText = CssTitle;
  	document.querySelector('#words').style.cssText = CssWords;
  	document.querySelector('main').style.opacity = 1;
  },
  'click #brooklyn': function(event,template){
  	event.preventDefault();
    var brooklynProtests = document.querySelectorAll('.brooklyn');
    for (var protest of brooklynProtests) {
      document.querySelector('#brooklynProtest').innerHTML += "<p class = 'thisthing'>" + protest.innerHTML + "</p> <button class='participate'> Sign Up </button> </div>";
    }
  },
  'click #bronx': function(event,template){
    event.preventDefault();
    var bronxProtests = document.querySelectorAll('.bronx');
    for (var protest of bronxProtests) {
      document.querySelector('#bronxProtest').innerHTML += "<p class = 'thisthing'>" + protest.innerHTML + "</p> <button class='participate'> Sign Up </button> </div>";
    }
  },
  'click #manhattan': function(event,template){
    event.preventDefault();
    var manhattanProtests = document.querySelectorAll('.manhattan');
    for (var protest of manhattanProtests) {
      document.querySelector('#manhattanProtest').innerHTML += "<div> <p class = 'thisthing'>" + protest.innerHTML + "</p> <button class='participate'> Sign Up </button> </div>";
    }
  },
  'click #queens': function(event,template){
    event.preventDefault();
    var queensProtests = document.querySelectorAll('.queens');
    for (var protest of queensProtests) {
      document.querySelector('#queensProtest').innerHTML += "<p class = 'thisthing'>" + protest.innerHTML + "</p> <button class='participate'> Sign Up </button> </div>";
    }
  },
  'click #statenisland': function(event,template){
    event.preventDefault();
    var siProtests = document.querySelectorAll('.statenisland');
    for (var protest of siProtests) {
      document.querySelector('#siProtest').innerHTML += "<p class = 'thisthing'>" + protest.innerHTML + "</p> <button class='participate'> Sign Up </button> </div>";
    }
  },
  'click #organize': function(event,template){
  	event.preventDefault();
    console.log(template);
    document.querySelector('#signedProtests').style.display = "none";
    document.querySelector('#title').style.cssText = CssTitle;
    document.querySelector('#words').style.cssText = CssWords;
    document.querySelector('#allProtests').style.display = "block";
  	document.querySelector('main').style.opacity = 1;
  	document.querySelector('#title').innerHTML = "Organize your protest";
  	document.querySelector('main').style.background ="white";
  	document.querySelector('#words').innerHTML = Blaze.toHTML(Template.newform);
  },
  'click #donate': function(event,template){
    event.preventDefault();
    document.querySelector('#signedProtests').style.display = "none";
    document.querySelector('#allProtests').style.display = "none";
    document.querySelector('#title').innerHTML = "Donate";
    document.querySelector('main').style.background = "lightblue";
    document.querySelector('#words').innerHTML = "<p> Thank you for signing up to Resist Today </p>";
    document.querySelector('#title').style.cssText = CssTitle;
    document.querySelector('#words').style.cssText = CssWords;
    document.querySelector('main').style.opacity = 1;
    document.querySelector('#words').innerHTML = "<p> We at Resist Today appreciate whatever you can contribute to help us continue running this website and keep you informed about the protests that are occurring. We hope that you continue to support us and our website. </p> <input type='text' placeholder='enter an amount' />"
  },
  'submit .protests'(event, template) {
    event.preventDefault();
    var location = template.find('.location').value;
    var date = template.find('.date').value;
    var cause = template.find('.cause').value;
    Protests.insert({
      location: location,
      date: date,
      cause: cause,
      // attending: new Set(),
    })
    },
  'click .delete'() {
    Protests.remove(this._id);
  },
  'click #account'(){
    event.preventDefault();
    document.querySelector('#signedProtests').style.display = "block";
    document.querySelector('#signedProtests').style.margin = "30px";
    document.querySelector('#allProtests').style.display = "none";
    document.querySelector('#title').style.cssText = CssTitle;
    document.querySelector('#words').style.cssText = CssWords;
    document.querySelector('main').style.background = "lightblue";
    document.querySelector('#title').innerHTML = "My Account";
    document.querySelector('#words').innerHTML = "<p> Protests You've Signed Up For: </p> ";
  },
  'click .participate'(){
    event.preventDefault();
    var something  = document.querySelector('.thisthing').innerHTML;
    document.querySelector('#signedProtests').innerHTML += '<p>' + something + '</p>';
    //  Protests.update(this._id, {
    //    $set: { attending: this.attending.add(Meteor.userId()) }
    // })
  },
});


