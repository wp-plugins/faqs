/******* Jquery No Conflict Function *******/
window.$ = jQuery.noConflict();

var FAQSForm = {

  settings:
  {
    formObj  : null,
  },

  post: function(FormId)
  {    
    FAQSForm.settings.formObj = $(FormId);

    if(Validator.check(FAQSForm.settings.formObj) == false)
    {
        return false;
    }

    $.ajax({
      url: ajaxurl,
      type: 'post',
      data: FAQSForm.settings.formObj.serialize(),
      success: function(data, status) 
      {
        if (data.status == true) 
        {
          $('.faqs_success_msg p').html(data.msg);
          $('.faqs_success_msg').fadeIn(1000).siblings('.faqs-msg').hide();
          $(FormId)[0].reset();
        } 
        else 
        {
          $('.faqs_error_msg p').html(data.msg);
          $('.faqs_error_msg').fadeIn(1000).siblings('.faqs-msg').hide();
        }
      },
      error: function() 
      {
        $('.faqs_error_msg p').html(data.msg);
        $('.faqs_error_msg').fadeIn(1000).siblings('.faqs-msg').hide();
      }                        
    }); 
  }
};

var Validator = {

    init: function()
    {

    },

    check: function(FormObj)
    {
        return FormObj.validator('checkform', FormObj);
    },

    set: function(FormId)
    {
        $(FormId+' input').validator({events   : 'blur change'});
    },

};

 
$(function() {
    Validator.set('#faqs_add_form');
});
