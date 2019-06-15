$(function(){
  "use strict";
 $('.tab-switch li').click(function() {

 
  $(this).addClass('selected').siblings().removeClass('selected');

  $('.tab-section .tab-content > div').hide();
  $('.' + $(this).data('class')).show();
 });

});