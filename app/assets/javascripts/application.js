// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require dropzone
//= require_tree .


// $(document).ready(function(){
// 	// disable auto discover
// 	Dropzone.autoDiscover = false;
 

// 	var dropzone = new Dropzone (".dropzone", {
// 		maxFilesize: 256, // Set the maximum file size to 256 MB
// 		paramName: "image[image]", // Rails expects the file upload to be something like model[field_name]
// 		addRemoveLinks: false // Don't show remove links on dropzone itself.
// 	});	

// 	dropzone.on("success", function(file) {
// 		this.removeFile(file)
// 		$.getScript("/images")
// 	})
// });

Dropzone.options.myAwesomeDropzone = { // The camelized version of the ID of the form element

  // The configuration we've talked about above
  autoProcessQueue: false,
  uploadMultiple: true,
  parallelUploads: 25,
  maxFiles: 25,
  paramName: "drag_drop_files",

  // The setting up of the dropzone
  init: function() {
    var myDropzone = this;

   // Here's the change from enyo's tutorial...

      $("#submit-all").click(function (e) {
          e.preventDefault();
          e.stopPropagation();
          myDropzone.processQueue();
          }
      );

  }

}