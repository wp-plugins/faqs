/******* Jquery No Conflict Function *******/
window.$ = jQuery.noConflict();

var FAQSUser = {

  settings:
  {
    formObj  : null,
  },

  init: function() {
    FAQSUser.bindUIAction();
  },

  bindUIAction: function() {
    $(document).on('click', '.faqs-accordian-section .faqs-header', function(){
        $(this).find('i').toggleClass("faq-arrow-right faq-arrow-down");
        $(this).siblings('.faqs-content').stop().slideToggle().toggleClass('active');
        $(this).parents('.faqs-accordian-section').siblings().find('.faqs-content')
        .slideUp()
        .removeClass('active');

        $(this).parent('.faqs-accordian-section').siblings().find('i').removeClass("faq-arrow-down");
        $(this).parent('.faqs-accordian-section').siblings().find('i').addClass("faq-arrow-right");

        $(this).parents('.faqs').siblings().find('.faqs-content')
        .slideUp()
        .removeClass('active');
      });

    // Trigger faq page tabs
    // Javascript to enable link to tab
    var url = document.location.toString();
    if (url.match('#')) 
    {
      $('.nav-tabs a[href=#'+url.split('#')[1]+']').tab('show') ;
    } 

    // Change hash for page-reload
    $('.nav-tabs a').on('shown', function (e) {
      window.location.hash = e.target.hash;
    });
  }
};
 
$(window).load(function(){
    FAQSUser.init();
});