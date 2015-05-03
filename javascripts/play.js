$(document).ready(function () {
    $(function() {
    $('.banner').unslider();
});
    $('#turn').empty();
    $('#turn').append("It's " + p1.name + "'s turn");
    $('.p1').fadeTo('slow', 0.2);
    $('.p2').fadeTo('slow', 0.2);
    $('.actions').mouseenter(function () {
        $(this).addClass('bolt');
    });
    $('.actions').mouseleave(function () {
        $(this).removeClass('bolt');
    });
    $('.actions').click(function () {
        $('.actions').removeClass('highlighted');
        $(this).addClass('highlighted');
    });
    $('#build').click(function () {
        p1.action = "BUILD";
        p2.action = "BUILD";
    });
    $('#upgrade').click(function () {
        p1.action = "UPGRADE";
        p1.action = "UPGRADE";
    });
    $('#attack').click(function () {
        p1.action = "ATTACK";
        p2.action = "ATTACK";
    });
    $('#enter').click(function () {
        if (pturn) {
            your_turn(p1, p2)
        } else {
            your_turn(p2, p1)
        }
    });
});
