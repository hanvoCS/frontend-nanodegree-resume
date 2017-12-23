var bio = {

	"name": "Alhanouf MAZ.",
	"role": "Web Developer.",
	"contacts": {
		"mobile": "+966-555-555 ",
		"email": "alhanoof.maz@gmail.com",
		"github": "alhanoof",
		"twitter": "@alhanoof",
		"location": "Riyadh"
	},
	"welcomeMessage": "Welcome to my resume ^^/",
	"skills": ["Fast learner", "Logical thinking", "Awesomeness"],
	"biopic": "image/Ro.jpg",
	"display": function (){
var FormattedName=HTMLheaderName.replace ("%data%",bio.name);
var FormattedRole=HTMLheaderRole.replace("%data%",bio.role);
   var Formattedmobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
   var Formattedemail=HTMLemail.replace("%data%",bio.contacts.email);
   var Formattedtwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
   var FormattedGit=HTMLgithub.replace("%data%",bio.contacts.github);
   var FormattedLoc=HTMLlocation.replace("%data%",bio.contacts.location);
   var FormattedImage = HTMLbioPic.replace("%data%",bio.biopic);   
var FormattedMsg =HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage); 

$("#header").prepend(FormattedRole);
$("#header").prepend(FormattedName);
$("#topContacts").append(Formattedmobile);
$("#topContacts").append(Formattedemail);
$("#topContacts").append(Formattedtwitter);
$("#topContacts").append(FormattedGit);
$("#topContacts").append(FormattedLoc);
$("#header").append(FormattedImage);
$("#header").append(FormattedMsg);
$("#footerContacts").append(Formattedmobile);
$("#footerContacts").append(Formattedemail);
$("#footerContacts").append(Formattedtwitter);
$("#footerContacts").append(FormattedGit);
$("footerContacts").append(FormattedLoc);        

$("#header").append(HTMLskillsStart);
        for(skill in bio.skills){
            var FormattedSkills=HTMLskills.replace("%data%",bio.skills[skill]);
            $("#header").append(FormattedSkills);
        }

    
        
        
    }
}

var education = {
 	"schools": [{
 		"name": "Muhammad bin Saud University",
 		"location": "Riydh",
 		"degree": "Masters",
 		"majors": ["CS"],
 		"dates": 2017
 	}],
 	"onlineCourses": [{
 			"title": "Arduino workshop",
 			"school": "Muhammad bin Saud University",
 			"dates": 2013,
 			"url": "www.Arduino/workshop.com"
 		},

 		{
 			"title": "front-end developer",
 			"school": "Udacity organization",
 			"dates": 2017,
 			"url": "www.Udacity.com"
 		}
 	],
"display": function(){
    
        $("#education").append(HTMLschoolStart);
    for(edu in education.schools){
    
    var Formattedname=HTMLschoolName.replace("%data%",education.schools[edu].name);
    var FormattedLoc=HTMLschoolLocation.replace("%data%",education.schools[edu].location);
    var FormattedDegree=HTMLschoolDegree.replace("%data%",education.schools[edu].degree);
    var Formattedmajor=HTMLschoolMajor.replace("%data%",education.schools[edu].majors);
    var FormattedDate=HTMLschoolDates.replace("%data%",education.schools[edu].dates);
     $(".education-entry:last").append(Formattedname);
     $(".education-entry:last").append(FormattedDegree);
     $(".education-entry:last").append(FormattedDate);
     $(".education-entry:last").append(Formattedmajor);
     $(".education-entry:last").append(FormattedLoc);
    
    
}
   
    $(".education-entry").append(HTMLonlineClasses);
    for(crs in education.onlineCourses){
      var  Formattedtitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[crs].title);
      var Formattedschool=HTMLonlineSchool.replace("%data%",education.onlineCourses[crs].school);
 		var Formatteddates=HTMLonlineDates.replace("%data%",education.onlineCourses[crs].dates);
 	var Formattedurl=HTMLonlineURL.replace("%data%",education.onlineCourses[crs].url);
     $(".education-entry:last").append(Formattedtitle);
     $(".education-entry:last").append(Formattedschool);
     $(".education-entry:last").append(Formatteddates);
     $(".education-entry:last").append(Formattedurl);
    
    }
        
    
}
 }


var work= 

     { "jobs": [{
           "employer":" At Mobily Company",
           "title":"Project Manager",
           "location":"Riydh",
           "dates":"2014-2017",
           "description": " who account for the success or failure of a project. Typical responsibilities of a project manager include: Planning, Executing, and Closing Projects: defining the project, building its comprehensive work plan, and managing to the budget."}], 
  "display": function()
     { for(job in work.jobs){
  $("#workExperience").append(HTMLworkStart);
      var formattedEMP = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
      var formattedTit = HTMLworkTitle.replace("%data%",work.jobs[job].title);
      var formattedinfo =formattedEMP+formattedTit;
      var Flocation= HTMLworkLocation.replace ("%data%",work.jobs[job].location);
     
     var date = HTMLworkDates.replace ("%data%",work.jobs[job].dates);
    
    
     var FDes= HTMLworkDescription.replace ("%data%",work.jobs[job].description);
      
      $(".work-entry:last").append(formattedinfo);
      $(".work-entry:last").append(Flocation);
      $(".work-entry:last").append(date);     
      $(".work-entry:last").append(FDes);
        }
    
 }}




 var projects =

      {"projects": 
          [{  "title":"SpendMe",  
            "dates": 2016,
            "description":"  Sometimes at the end of the month you realize that you are run out of your money! You don’t know where did you spent it? And for what! Our application “SpendMe” is designed to manage your budget in professional way, it will provide to you many options, add how much is your salary, edit it if you want, type how much of your salary you want to save, and so many other amazing properties you can do.",
            "images": ["image/Wallet1.jpg","image/Wallet1.jpg" ]}
          ],
    "display": function(){
        $("#projects").append(HTMLprojectStart);
        for(project in projects.projects){
            
            var FormattedTit=HTMLprojectTitle.replace ("%data%",projects.projects[project].title);
            var FormattedDate=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
            var FormattedDes=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
           
            for(img in projects.projects[project].images){ var FormattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].images[img]);
        
             $(".project-entry:last").append(FormattedImage);}                                     
        $(".project-entry:last").append(FormattedTit);
        $(".project-entry:last").append(FormattedDate);
        $(".project-entry:last").append(FormattedDes); 
            
        }

        
    }
     }
 
 //______________________________________

$(document).ready.bio.display();
 work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);


