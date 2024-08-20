$(document).ready(function() {
    new fullpage('#fullpage', {
        continuousHorizontal:true
        // scrollHorizontally:true,
        // autoScrolling:true
    });
    $('#m_slider').slick({
        slidesToShow: 1,
        fade: true,
        autoplay:true,
        speed: 1000,
        arrows:false,
        dots:true,
        pauseOnHover:false,
        draggable:true,
        loop:true
    });
    $('#slider2').slick({
        slidesToShow: 1,
        arrows:true,
        dots:false,
        pauseOnHover:false,
        draggable:true,
        loop:true,
        nextArrow: '<button class="slide-arrow slick-next"><img src="./images/right_arrow.png" class="desk"><img src="./images/mra.png" class="mob"></button>'
    });
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');        
        $({ countNum: $this.text()}).animate({
            countNum: countTo
        },      
        {      
            duration: 9000,
            easing:'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }      
        });      
    });
    $('#link1').click(function(){
        $('.section').removeClass("active");
        $('#initiatives').addClass("active");
    });
});