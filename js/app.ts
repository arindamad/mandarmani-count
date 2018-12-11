declare var jquery: any;
declare var $: any;
$(document).ready(function () {
    setTimeout(() => {
        $('#sun').addClass('in');
        $('#section1 .fristImg').animate({
            'background-position-y': '0%'
        }, 14000, 'linear');
        setTimeout(function () {
            $('#linkToSecond').fadeIn(1000);
            $('#section1').removeClass('beforeCarousel');
            $('#sun').attr("id", "draggable").addClass('ui-widget-content');
        }, 16000);
    }, 2000);
    $('#btn1').on('click', function () {
        $(this).parent().parent('.overlay').fadeOut(1000);
        $('#section2').fadeIn(300);
        $('#section1').fadeOut(1000);
        $('.sketch').fadeOut(1000);
        setTimeout(function () {
            $('#section2').css('position', 'relative').css('z-index', 0);
            console.log("clicked");
        }, 1000);
    });

    setTimeout(
        function () {
            $('#this').css('display', 'block').addClass('popMovie');
            setTimeout(function () {
                $('#this').fadeOut(100);
                $('#is').css('display', 'block').addClass('popMovie');
                setTimeout(function () {
                    $('#is').fadeOut(100);
                    $('#amezing').css('display', 'block').addClass('popMovie');
                    setTimeout(function () {
                        $('#amezing').removeClass('popMovie').fadeOut(2000);
                    }, 4000);
                }, 1000);
            }, 1000);
        }, 10000)

    setTimeout(function () {
        $(document).ready(function () {
            $('.manFace').css('display', 'block').addClass('fadeIn delay-2s');
        });
    }, 10000);
});