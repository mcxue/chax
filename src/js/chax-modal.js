// 功能：关闭弹窗
(function ($){
  closeModal()
  function closeModal(){
    $('.chax-modal .chax-modal-close').click(function(e){
      e.stopPropagation();
      e.preventDefault();
      $(this).parents(".chax-modal").fadeOut()
    })
  }
})(jQuery)
