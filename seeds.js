var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
    {
        name:"Jelasnica",
        image: "https://farm5.staticflickr.com/4423/37232133702_342e447ccb.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis neque sed mollis porttitor. Quisque sed lectus pulvinar, molestie quam quis, lobortis sem. Ut ornare volutpat neque. Duis porttitor mi nunc, non vestibulum dolor placerat vitae. Mauris malesuada tellus mauris, at egestas diam convallis non. Nulla volutpat accumsan nisi ac varius. Integer dolor orci, congue a mauris vitae, accumsan ultrices mi. Donec ultricies ex sit amet tortor pulvinar dictum. Nullam ut tellus enim. Sed porttitor eleifend enim, sed molestie orci dignissim nec. Nulla porta aliquet ex nec finibus. In rutrum lacinia odio quis interdum. Nam eu lacus ac urna malesuada blandit tristique condimentum eros. Nulla vitae luctus enim, quis cursus diam. Curabitur vestibulum tristique sem sit amet pellentesque. Donec ut augue nulla."
    },
    {
        name:"Merkator",
        image: "https://farm2.staticflickr.com/1179/1051152631_f8b4ae0a33.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis neque sed mollis porttitor. Quisque sed lectus pulvinar, molestie quam quis, lobortis sem. Ut ornare volutpat neque. Duis porttitor mi nunc, non vestibulum dolor placerat vitae. Mauris malesuada tellus mauris, at egestas diam convallis non. Nulla volutpat accumsan nisi ac varius. Integer dolor orci, congue a mauris vitae, accumsan ultrices mi. Donec ultricies ex sit amet tortor pulvinar dictum. Nullam ut tellus enim. Sed porttitor eleifend enim, sed molestie orci dignissim nec. Nulla porta aliquet ex nec finibus. In rutrum lacinia odio quis interdum. Nam eu lacus ac urna malesuada blandit tristique condimentum eros. Nulla vitae luctus enim, quis cursus diam. Curabitur vestibulum tristique sem sit amet pellentesque. Donec ut augue nulla."
    },
    {
        name:"Niska banja",
        image: "https://farm8.staticflickr.com/7393/14137069393_d2f0ab9187.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis neque sed mollis porttitor. Quisque sed lectus pulvinar, molestie quam quis, lobortis sem. Ut ornare volutpat neque. Duis porttitor mi nunc, non vestibulum dolor placerat vitae. Mauris malesuada tellus mauris, at egestas diam convallis non. Nulla volutpat accumsan nisi ac varius. Integer dolor orci, congue a mauris vitae, accumsan ultrices mi. Donec ultricies ex sit amet tortor pulvinar dictum. Nullam ut tellus enim. Sed porttitor eleifend enim, sed molestie orci dignissim nec. Nulla porta aliquet ex nec finibus. In rutrum lacinia odio quis interdum. Nam eu lacus ac urna malesuada blandit tristique condimentum eros. Nulla vitae luctus enim, quis cursus diam. Curabitur vestibulum tristique sem sit amet pellentesque. Donec ut augue nulla."
    }
    ];
    
function seedDB(){
    Campground.remove({}, function(err){
       if(err){
           console.log(err);
       }
       console.log("removed campgrounds!");
       data.forEach(function(seed){
          Campground.create(seed, function(err, camp){
             if(err) {
                 console.log(err);
             } else {
                 console.log("camp added!");
                 Comment.create(
                     {
                         text: "This is a very nice place!",
                         author: "Pera"
                     }, function(err, comm){
                         if(err) {
                             console.log(err);
                         } else {
                             camp.comments.push(comm);
                             camp.save();
                             console.log("New comment!");
                         }
                     });
             }
          });
       });
    });
}

module.exports = seedDB;