$(document).ready(function () {
    $("#go").click(function (e) {
        e.preventDefault();
        let val = $("#search").val();
        if(val!=""){
            $.ajax({
                url: "http://127.0.0.1:8000/catalog/search/?q=" + val,
                method: 'GET',
                success: function (d) {
                    $(".main-content").html(d);
                },
                error: function(d) {
                    console.log(d);
                }
            });
        }
    });
    /**
    $("#search").keyup(
        function() {
            let search = $('#txtSearch').val();
            let data = {
                search: search
            };
            $.ajax({
                url: '/ajax/autocomplete/',
                data: data,
                dataType: 'jsonp',
                jsonp: 'callback',
                jsonpCallback: 'searchResult'
            });
        }

    );**/
    //function searchResult(){
        $("#search").autocomplete({
            source: 'ajax/autocomplete/',
            autoFocus: true,
            minLength: 0,
        });
    //}
});
