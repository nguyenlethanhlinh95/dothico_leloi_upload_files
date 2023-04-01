$(document).ready(function() {
    $('#sendFile').on('click', function() {
        $('#confirmModel').modal('hide');
        
        $("#messageSuccess").removeClass('d-none');
        $("#messageSuccess").slideDown(3000, function() {
            setTimeout(function() {
                $("#messageSuccess").slideUp(700);
            }, 4000);
        });
      });
});