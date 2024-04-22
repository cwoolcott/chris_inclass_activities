$(document).ready(function () {

	var reposition = {

		initView: function () {
			//Activity: Send a Default Camera View
			this.newView("FHAZ");
		},

		newView: function (camera) {

			/*
			API Documentation: https://api.nasa.gov/api.html#MarsPhotos

			Cameras: 
				FHAZ	Front Hazard Avoidance Camera
				RHAZ	Rear Hazard Avoidance Camera
				MAST	Mast Camera
				CHEMCAM	Chemistry and Camera Complex
				MAHLI	Mars Hand Lens Imager
				MARDI	Mars Descent Imager
				NAVCAM	Navigation Camera
				PANCAM	Panoramic Camera
				MINITES	Miniature Thermal Emission Spectrometer (Mini-TES)
			*/

			var apiKey = "wbg9nIIxk5N3J2w8SjqjsVJ4sa9MC2DinARtOqEH";

			//Bonus Activity: Pick a date - Or Get from user??? (YYYY-M-D)
			var earthDate = "2018-5-4";

			var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + earthDate + "&camera=" + camera.toLowerCase() + "&api_key=wbg9nIIxk5N3J2w8SjqjsVJ4sa9MC2DinARtOqEH";

			//Dont need to change this - AJAX is used to request information from an external location typically in JSON or XML.  
			$.ajax({
				url: url,
				success: function (result) {

					var image;
					var cameraLabel;

					//No Photo Found
					if (!result.photos[0]) {
						image = "https://upload.wikimedia.org/wikipedia/commons/7/7e/Random_static.gif";
						cameraLabel = "NOT FOUND";
					}
					else {
						image = result.photos[0].img_src;
						cameraLabel = result.photos[0].camera.full_name;
					}

					$("#view").css("background-image", 'url(' + image + ')');
					$("#cameraLabel").text(cameraLabel);
					$("#earthDate").text(earthDate);
					//console.log(result);
				}
			});
		}
	}

	//Activity: Request Click from .controlButtons to Determine which (this) was clicked
	$(".controlButtons").on("click", function () {
		reposition.newView(this.id);
	})

	//Activity: Request initView Function
	reposition.initView();
});