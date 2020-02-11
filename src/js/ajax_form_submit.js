$("#my_form").submit(function(event){
    event.preventDefault(); //prevent default action 
    var post_url = $(this).attr("action"); //get form action url
    var request_method = $(this).attr("method"); //get form GET/POST method
    var form_data = new FormData(this); //Encode form elements for submission
    
    $.ajax({
        url : post_url,
        type: request_method,
        data : form_data,
		contentType: false,
		processData:false,
		xhr: function(){
		//upload Progress
		var xhr = $.ajaxSettings.xhr();
		if (xhr.upload) {
			xhr.upload.addEventListener('progress', function(event) {
				var percent = 0;
				var position = event.loaded || event.position;
				var total = event.total;
				if (event.lengthComputable) {
					percent = Math.ceil(position / total * 100);
				}
				//update progressbar
				$("#upload-progress .progress-bar").css("width", + percent +"%");
			}, true);
		}
		return xhr;
	}
    }).done(function(response){ //
        $("#server-results").css('display', 'block');
        $("#server-results").html(response);
    });
});

/*This script should stop a successful contact from submission from redirecting to a new page and give a progress bar AG has disabled the progress bar -
src - https://www.sanwebe.com/2016/07/ajax-form-submit-examples-using-jquery
*/