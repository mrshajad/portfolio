$(document).ready(function(){
		$('#humburger ,.list-group-item').click(function(){
		$('.my-col').toggleClass('togle-slide-left');			
		$('.my-col-2').toggleClass('togle-slide-right');			
		$('.humburger-line').toggleClass('cross');
//		$('.anim').animate({'left':'0'},3000)
    });

$('.zoom').addClass('animated fadeInRight')
$('.lft').addClass('animated fast fadeInDownBig')
$('.pulse').addClass('animated delay-2s slow pulse')
$('.get-in').addClass('animated slow fadeIn')

      $('.full-height').scroll(function(){
  var posi = $(this).scrollTop()
 
      if((posi >= 724) && (posi < 1500)){
                $('.anim').animate({'left':'0'},3000).addClass('animated slideInLeft');
          }

      if((posi >= 1163) && (posi < 1400)){
                
                $('.resume').addClass('animated delay-2s tada');
          }

          if((posi >= 117) && (posi < 1400)){
                $('.breath').addClass('animated slower fadeIn');
          }
           if((posi >= 100) && (posi < 312)){
                $('.flp').addClass('animated slower fadeIn');
          }
          if((posi >= 646) && (posi < 1000)){
                $('.clients').addClass('animated slower fadeIn');
          }

          if((posi >= 1100) && (posi < 1500)){
                $('.left').addClass('animated fadeInLeft');
                $('.down').addClass('animated fadeInUpBig');
                $('.right').addClass('animated fadeInRight');
          }

          if((posi >= 216) && (posi < 600)){
                $('.frm').addClass('animated fadeIn');
          }
    });

/*model open img*/
      var modalI = document.getElementById("modelImg");
      $('.myImg').click(function(){
        var images = (this).firstChild.getAttribute("src");
        $('.model').fadeIn();
         modalI.src = images;
      })
      $('.model').click(function(){
        $('.model').fadeOut();
      })

      $(".model-content").click(function(e){
        e.stopPropagation();
      })
   
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
 
	});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

(function($){
  
  $(document).ready(function(){
    
    var galLink = $("a.gal_link");
    
    
    galLink.lightbox();
    
    
  });
  
})(jQuery);

