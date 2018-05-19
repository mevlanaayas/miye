/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Created by Cameron Pittman, Mostly Changed by Mevlana Ayas
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data%, %title%, %color% or %something% placeholder text you see in them.
*/
var HTMLheaderName = '<h1>%data%</h1>';
var HTMLheaderRole = '<span>%data%</span>';

var HTMLconnectStart = '<div class="connect-entry ui segments"></div>';
var HTMLemail = '<p class=" ui segment %color%"><i class="mail icon"></i> %data%</p>';
var HTMLbehance = '<p class=" ui segment %color%"><i class="behance icon"></i> %data%</p>';
var HTMLinstagram = '<p class=" ui segment %color%"><i class="instagram icon"></i> %data% </p>';
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

/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
var HTMLContactMenu = '<a data-target="#contactmodal" href="" data-toggle="modal"><div class="col-md-4 example-title"><h2>Contact</h2></div></a>';
var HTMLAboutMeMenu = '<a data-target="#aboutmemodal" href="" data-toggle="modal"><div class="col-md-4 example-title"><h2>About Me</h2></div></a>';
var HTMLProjectsMenu = '<div class="col-md-4 example-title"><h2>Projects</h2></div>';

var HTMLTimelineBreakpointCreator = '<li class="timeline-item period"><div class="timeline-info"></div><div class="timeline-marker"></div><div class="timeline-content"><h2 class="timeline-title">%data%</h2></div></li>';

var HTMLTimelineItemCreatorLeft = '<li class="timeline-item timeline-item-left"></li>';
var HTMLTimelineItemCreatorRight = '<li class="timeline-item timeline-item-right"></li>';
var HTMLPublishedDate = '<div class="timeline-info"><span>%data%</span></div>';
var HTMLTimelineMarker = '<div class="timeline-marker"></div>';
var HTMLContent = '<div class="timeline-content" id="%data%"></div>';
var HTMLProjectName = '<h3 class="timeline-title">%data%</h3>';
var HTMLModalLinkCreator = '<a data-target="#%data%" href="" data-toggle="modal" id="%data1%"></a>';
var HTMLProjectCover = '<img class="card-image img-responsive" src="%data%" alt="%data1%">';
var HTMLProjectDetails = '<div class="project-details" id="%data%"></div>';
var HTMLLike = '<div class="likes"><i class="thumbs up icon"></i>%data%</div>';
var HTMLView = '<div class="views"><i class="unhide icon"></i>%data%</div>';
var HTMLDescription = '<div class="description">%data%</div>';
var HTMLKeywords = '<div class="keywords">%data%</div>';
var HTMLTools = '<div class="tools">%data%</div>';
var HTMLTags = '<div class="tags">%data%</div>';


var HTMLModalCreator = '<div tabindex="-1" class="modal fade bs-example-modal-lg" id="%data%" role="dialog" aria-hidden="true" aria-labelledby="myModalLabel"></div>';
var HTMLModalDialog = '<div class="modal-dialog modal-lg" id="%data%"></div>';
var HTMLModalHeader = '<div class="modal-header"><h1 class="modal-title" id="exampleModalLongTitle">"%data%"</h1><button type="button" class="btn btn-secondary" style="float: right" data-dismiss="modal">Close</button></div>';
var HTMLModalContent = '<div class="modal-content" id="%data%"></div>';
var HTMLModalFooter = '<div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div>';
var HTMLModalImages = '<img class="card-image-modal" src="%data%">';

/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/

/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $("#button1").click(function() {
    console.log("asdasd");
  });
  $("#button2").click(function() {
    console.log("12323423");
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
  console.log($(window).width());
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});