var btnClick =  function() {
    var post = $('.status-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.status-box').val('');
    $('.counter').text('140');
    $('.btn').addClass('disabled');
}

var disabled = function( a, b ) {
    return 'disabled';
}

var main = function() {

    $('.btn').click( btnClick );

    $('.btn').click(function() {
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        $('.status-box').val('');
        $('.counter').text('140');
        $('.btn').addClass( disabled );
    });

}

$(document).ready( main );