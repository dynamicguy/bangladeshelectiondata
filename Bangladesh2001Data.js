$(document).ready(function() {
$.ajax({
    url:'json/Bangla2001ParlResults.json',
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
    document.getElementById('clickMe').innerHTML = "Source: Election Commission of Bangladesh, Eighth Parliament Election (2001), Statistical Report. Origin: <a href=http://www.ecs.gov.bd/MenuExternalFilesEng/124.pdf>http://www.ecs.gov.bd/MenuExternalFilesEng/124.pdf";
};
