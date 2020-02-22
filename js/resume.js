//JS Page for resume.html

/*******************NAVBAR*******************/
//Fix Navbar to the top while scrolling
$(document).ready(function() {
  $(window).scroll(function () {
      var pageScroll = $(this).scrollTop();
      if ($(window).scrollTop() > 0) {
          $('#nav_bar').addClass('fixed-navbar');
          $('.handle').addClass('fixed-navbar_min');
      }
      //fixes the navbar to stay at the top top,
      //allows section1 shows
      if ($(window).scrollTop() < 1) {
          $('#nav_bar').removeClass('fixed-navbar');
      }
  });
  $(window).scroll(function(){
      $('.job-panel').each(function(){
          var bottom_of_obj= $(this).offset().top - $(window).scrollTop();
          console.log(bottom_of_obj);
          if (bottom_of_obj < 800){
             $(this).css("opacity", 1);
          }
      });
  });
  $("body").find(".nav_links li a").click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(section).offset().top - 50
      });
  });
  $("body").find(".title-panel a").click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(section).offset().top - 50
      });
  });
  // //change the active tag to the clicked nav item
  $(document).on('scroll', changeActiveNav);
  $('a[href^="#"]').on('click', function () {
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
  });
  if( $('.handle').css('display') === ('block')) {
      $('.handle').on('click',function () {
          console.log("clicking!!!");
          $('.nav_links').toggleClass('show');
      });
  }
});


//fade in some section 3's work panel
$(window).scroll(function () {
    var pageScroll = $(this).scrollTop();
    if (pageScroll > $('.section3').offset().top-($(window).height()/2)){
        setTimeout(function(){
             $('.section3 .work-panel').addClass('fading-in');
          }, 400)
    }
});

//function to click and change the active highlight to another nav element navigation
function changeActiveNav(event){
    var scrollY = $(document).scrollTop();
    $('#nav-bar ul li a').each(function(){
        var currHash = $(this);
        console.log('currHash' + currHash);
        var refElement = $(currHash.attr("href"));
        console.log('refElement' + refElement);
        if (refElement.position().top <= scrollY && refElement.position().top +
            refElement.height() > scrollY){
              $('#nav-bar ul li a').removeClass("active");
              currHash.addClass("active");
        }
        else{
          currHash.removeClass("active");
        }
    });
}

$

/*******************FOR PROJECTS*******************/
//for the tabs; bootstrap plug-in
$(document).ready(function () {
    $('.dived').hide();
    $('.expander').click(function () {
        $(this).parent().next().slideToggle(150);
    });
    $('.dived').slideUp(200);
});
