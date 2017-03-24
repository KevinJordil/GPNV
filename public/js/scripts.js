$(document).ready(function() {
  $('a.editDescription').click(function () {
    if($('a.saveDescription').is(':hidden')){
      $('#summernote').summernote();
      $('#summernote').css('display','None');
      $('div.note-editor').css('display','block');
      $('a.saveDescription').css('display','initial');
      $('a.editDescription').text("Quitter l'édition");
    }
    else{
      $('#summernote').css('display','block');
      $('div.note-editor').css('display','None');
      $('a.saveDescription').css('display','None');
      $('a.editDescription').text("Editer la description");
    }
  });

  $('a.saveDescription').click(function () {
    var description = $('#summernote').summernote('code');
    var projectid = this.getAttribute('data-projectid');
    $.ajax({
        url: projectid + "/editDescription/",
        type: "POST",
        data: { description: description },
        success: function() {
            bootbox.alert("Description modifiée avec succés.");
            location.reload();
        }
    });
  });

  $('button.createProject').click(function () {
      var description = $('#createDescription').summernote('code');
      $('#createDescription').val(description);
  });

  $(function() {
    $("#datepicker").datepicker();
    $('#createDescription').summernote();
  });

  $('span.glyphicon-chevron-down').click(function () {
    if(!$( this ).hasClass( "disclosureIndicator" )){
      $( this ).toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
    }
  });

  $('span.glyphicon-chevron-down').click(function () {
    $( this ).toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
  });

  $('div').click(function () {
    var attribute = $( this ).attr("data-target");
    if(attribute!=null){
      var DivCollapse = $("div"+attribute);
      if(!DivCollapse.hasClass("in")){
        $( this ).find("span.disclosureIndicator").removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
      }
      else{
        $( this ).find("span.disclosureIndicator").removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');

      }
    }
  });

  $('div').change(function () {
    alert('');
  });

});
