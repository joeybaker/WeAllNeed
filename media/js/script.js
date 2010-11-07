/* Author: Joey Baker

*/
function init () {
	if (window.location.hash == ""){
		window.location.hash='#intro';
	}
}
//onload, we'll call the init function.
window.onload = init;

$(document).ready(function() {  
    //fitlering for the tagcloud
	$('#tagcloud li a').click(function() {  
        var filterVal = $(this).text().toLowerCase().replace(' ','-');
		window.location.hash = filterVal;
  
        if(filterVal == 'all') {  
            $('article.hidden').slideDown('normal').removeClass('hidden');  
        } else {  
            $('article').each(function() {  
                if(!$(this).hasClass(filterVal)) {  
                    $(this).fadeOut('fast').addClass('hidden');  
                } else {  
                    $(this).slideDown('normal').removeClass('hidden');
 					//TODO: this if statement should set the hash to the id of the quote if there is only one quote of that type
					if ($(filterVal).length == 1) {
						window.location.hash = this.attr('id');
					}
                }  
            });  
        }
        return false;  
    });  
	
	//when we click on an article (a quote), we'll change the hash of the window to it's id
	$('article').click(function(){
		var id = $(this).attr('id');
		window.location.hash=id;
		return false;
	});
});