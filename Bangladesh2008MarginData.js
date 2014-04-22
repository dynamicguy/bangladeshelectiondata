$(document).ready(function() {
$.ajax({
    url:'json/BanglaMargin2008.json',
    dataType: 'json',
    }).done(function(data) {
        console.log(data);

$('#my-ajax-table').dynatable({
    inputs: {
        paginationClass: 'pagination',
        paginationActiveClass: 'active',
        paginationDisabledClass: 'disabled'
    },
    
    features: {
        pagination:true,
        recordCount: false
    },
    
        dataset: {
        records: data
    }
        });
    });
});


window.onload = function(){
    document.getElementById('clickMe').onclick = aboutTheData;
}
function aboutTheData() {
    document.getElementById('clickMe').innerHTML = "Source: Election Commission of Bangladesh, Ninth Parliament Election (2008), Statistical Report. Origin: <a href=http://www.ecs.gov.bd/MenuExternalFilesEng/304.pdf>http://www.ecs.gov.bd/MenuExternalFilesEng/304.pdf";
};
