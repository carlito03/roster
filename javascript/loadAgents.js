<script>// <![CDATA[
$(document).ready(function(){
 var htmlText = '';

// REQUEST JSON FILE IN AMAZON WEB SERVICES

    $.ajax({
        // XDomainRequest protocol (IE 8 & 9) must be the same scheme as the calling page
        url: ('https://s3-us-west-2.amazonaws.com/ideasplusactions/json/rosterv8.json'),
        dataType: 'json',
	cache: false,
    }).done(function (data) {

// CHECK IF PHOTO EXISTS, IF IT DOES IT GOES INTO THE HTML

	for (var key in data) {

		if(data[key]['photo']){
       
		htmlText += '<div style="width:25%'+';'+' height:200'+';'+' float:right'+';'+ 'background-color: white'+';'+' border: 1px solid black'+';'+'">';
		htmlText += '<p class="p-desc">' + data[key]['firstname'] + ' ' + data[key]['lastname'] + '</p>';
		htmlText += '<p style="margin: -16px 0 0 0;'+';'+ '"><small>' + data[key]['title'] + '</small></p><br>';
		htmlText += '<img src="' + data[key]['photo'] + '" style="width:180px'+';'+ ' height:200px'+';'+'" /><br>';
	          //  htmlText += '<p style="font-size:14px'+';'+'"> Email: ' +  + '</p>';
		htmlText += '<a href="mailto:' + data[key]['email']  +'"><span style="font-size: small;">Send Email</span></a>';
	            
	            htmlText += '</div>';

	}

else{

	htmlText += '<div style="width:25%'+';'+' height:200'+';'+' float:right'+';'+ 'background-color: white'+';'+' border: 1px solid black'+';'+'">';
		htmlText += '<p class="p-desc">' + data[key]['firstname'] + ' ' + data[key]['lastname'] + '</p>';
		htmlText += '<p style="margin: -16px 0 0 0;'+';'+ '"><small>' + data[key]['title'] + '</small></p><br>';
		htmlText += '<img src="https://u.realgeeks.media/c21citrus/NEWLOGO-2.jpg" style="width:240px'+';'+ ' height:200px'+';'+'" /><br>';
	          //  htmlText += '<p style="font-size:14px'+';'+'"> Email: ' +  + '</p>';
		htmlText += '<a href="mailto:' + data[key]['email']  +'"><span style="font-size: small;">Send Email</span></a>';
	            
	            htmlText += '</div>';


}
}


              $('section').append(htmlText);

        
    });


   
});
// ]]></script>