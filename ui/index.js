$(document).ready(function() {
    $(".content").load('online-result.html');
    
    $("nav > ul > li > a" ).on("click", function(e) {
        $("nav > ul > li > a" ).removeClass('active');
        $(e.target).toggleClass('active');
        $(".content").load($(e.target).attr('href'));
        return false;
    });

    $(".content").on('show.bs.modal', '.result-modal', function (event) {
        var modal = $(this);
        modal.find('.modal-body button').prop('disabled', true);
        var button = $(event.relatedTarget);
        var trackno = button.data('trackno');

        $("#Result").attr("src", '/online-result/' + trackno);
        $("#Result").on("load", function () {
            modal.find('.modal-body button').prop("disabled", false);
            var count;
            for(count = 50; count < 1300; count++) {
               $('#Result').contents().find("div.base[style*='top:" + count + "px;']:has(img[src*='bmp'])").html('<img src="result_files\\check.bmp">');
            }
        });
    });
});

function validate() {
    $.post( "online-result", { patient_number: $("#patient_number").val() }, function( data ) {
        if(data.length) {
            $(".e-result").toggleClass('d-none')
            $(".e-result-list").toggleClass('d-none')
            $.each(data, function(index, row) {
                var tr = document.createElement("tr")
        
                $.each(['TransactionDate', 'ResultCategory'], function(index, column) {
                    var column_td = document.createElement("td")
                    $(column_td).text(row[column])
                    tr.append(column_td);
                })
    
                var button_td = document.createElement("td")
                var button = document.createElement("button")
    
                $(button).html('View')
                $(button).addClass("btn btn-sm btn-outline-primary")
                //$(button).attr('data-id', row['refuniqueno'])
                $(button).attr('data-trackno', row['trackno'])
                $(button).attr('data-toggle', "modal")
                $(button).attr('data-target', ".modal")
                button_td.append(button);
                $(button_td).addClass('text-right')
                tr.append(button_td);
        
                $("#patient_result").append(tr);
            })
        } else {
            alert(data.status)
        }
        
    });
}

function logout() {
    $(".e-result").toggleClass('d-none')
    $(".e-result-list").toggleClass('d-none')
    $("#patient_result").empty()
}