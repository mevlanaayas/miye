/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Created by Cameron Pittman, Mostly Changed by Mevlana Ayas
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data%, %title%, %color% or %something% placeholder text you see in them.
*/
var HTMLunderCreation = '<div class="ui progress warning large"><div class="bar green" style="transition-duration: 300ms; width: 55%;"><div class="progress" style="color:white">55%</div></div><div class="label">On the Creation Phase <i class="smile icon"></i> Check for Demo</div></div><br>'

var HTMLheaderName = '<h1>%data%</h1>';
var HTMLheaderRole = '<span>%data%</span>';

var HTMLconnectStart = '<div class="connect-entry ui segments"></div>';
var HTMLemail = '<p class=" ui segment %color%"><i class="mail icon"></i> %data%</p>';
var HTMLtwitter = '<p class=" ui segment %color%"><i class="twitter icon"></i> %data%</p>';
var HTMLgithub = '<p class=" ui segment %color%"><i class="github alternate icon"></i> %data% </p>';
var HTMLlocation = '<p class=" ui segment %color%"><i class="marker icon"></i>%data%</p>';

var HTMLBiosDropdown = '<div id = "biotop" class= "ui basic accordion"></div>';
var HTMLBios = '<div class= "title"><i class="dropdown icon"></i> Informatıon </div>';
var HTMLbioContent = '<div id = "biocontent" class= "content"></div>';
var HTMLbioStart = '<div class="bio-entry"></div>';
var HTMLbioHome = '<h4>Hometown: %data%</h4>';
var HTMLbioLiving = '<h4>Living In: %data%</h4>';
var HTMLbioForeign = '<h4>Foreign Language(s): %data%</h4>';
var HTMLbioPic = '<img src="%data%">';
var HTMLwelcomeMsg = '<span>%data%</span>';


var HTMLskillsStart = '<h4>Skills at a Glance:</h4>';
var HTMLskills = '<div style = "margin-top: 14px">%data%</div>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<p><a href="#">%data%';
var HTMLworkTitle = ' - %data%</a></p>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p>Desc:<br>%data%</p>';
var HTMLworkDetail = '<p>Some Detail: <br>%data%</p>';
var HTMLworkSkill = '<p>Worked On:<br>%data%</p>';
var HTMLworkPoints = '<p>Internship Overall:<br>%data%</p>';
var HTMLworkJob = '<p>JobDone:<br>%data%</p>';
var HTMLworkWeb = '<a href="%data%" target="_blank"><i>WebPage</i></a>';

var HTMLprojectStart = '<div class="project-entry eight wide column"></div>';
var HTMLprojectTitle = '<p><a href="#">%data%</a></p>';
var HTMLprojectDates = '<p>Dates: %data%</p>';
var HTMLprojectDescription = '<p>Description: %data%</p>';
var HTMLprojectSkills = '<p>Skill(s): %data%</p>';
var HTMLprojectMember = '<p>Member: %data% <i class="user icon"></i></p>';
var HTMLprojectMembers = '<p>Members: %data% <i class="users icon"></i></p>';
var HTMLprojectFiles = '<p>Files: %data%</p>';
var HTMLprojectLinks = '<p>Links: %data%</p>';
var HTMLprojectType = '<p>Type: %data%</p>';
var HTMLprojectImage = '<p>Image: %data%</p><br>';

var HTMLDropdown = '<div id = "accordiontop" class= "ui basic accordion"></div>';


var HTMLSchools = '<div class= "title active"><i class="dropdown icon"></i> Schools </div>';
var HTMLschoolContent = '<div id = "schoolcontent" class= "content active"></div>';
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = '<a href="#"> -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em> Major: %data%</em>';
var HTMLschoolCurriculum= '<a href="%data%" target="_blank"><i>Curriculum</i></a>';

var HTMLOnlines = '<div class= "title"><i class="dropdown icon"></i> Online Courses </div>';
var HTMLonlineContent = '<div id = "onlinecontent" class= "content"></div>';
var HTMLonlineStart = '<div class="education-entry"></div>';
var HTMLonlineTitle = '<a href="#">%data%</a>';
var HTMLonlineAuthor = '<p> Author: <a href="#">%data%</a></p>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineSkills = '<p>Skills: %data%</p>';
var HTMLonlineURL = '<a href="#">%data%</a>';
var HTMLonlineLearning = '<p style = "margin-bottom : 0">Learnings: %data%</p>';

var HTMLSeminars = '<div class= "title"> <i class="dropdown icon"></i> Seminars </div>';
var HTMLseminarContent = '<div id = "seminarcontent" class= "content"></div>';
var HTMLseminarStart = '<div class="education-entry"></div>';
var HTMLseminarPlaces = '<div class="location-text">%data%</div>';
var HTMLseminarTitle = '<p>%data%</p>';
var HTMLseminarGuest = '<a href="#">%data%';
var HTMLseminarDates = '<div class="date-text">%data%</div>';
var HTMLseminarGTitle = '-- %data%</a>';
var HTMLseminarLearning = '<p style = "margin-bottom : 0">Learnings: %data%</p>';

var HTMLActivity = '<div class= "title"> <i class="dropdown icon"></i> Activities </div>';
var HTMLactivityContent = '<div id = "activitycontent" class= "content"></div>';
var HTMLactivityStart = '<div class="education-entry"></div>';
var HTMLactivityPlaces = '<div class="location-text">%data%</div>';
var HTMLactivityTitle = '<p>%data%</p>';
var HTMLactivityDates = '<a href="#">%data%';
var HTMLactivityDays = '<div class="date-text">%data%</div>';
var HTMLactivitySkills = '-- %data%</a>';
var HTMLactivityLearnings = '<p style = "margin-bottom : 0">Learnings: %data%</p>';
var HTMLactivityCertificate = '<p>%data%</p>';
var HTMLactivityFiles = '<p>%data%</p>';
var HTMLactivityLinks = '<p>%data%</p>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.hometown);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    educations.schools.forEach(function(school){
      locations.push(school.city);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
//window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
//window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
//map.fitBounds(mapBounds);
//});
