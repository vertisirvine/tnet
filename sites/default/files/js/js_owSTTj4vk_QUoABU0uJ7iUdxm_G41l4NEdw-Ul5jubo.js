/**
 * Attaches the calendar behavior to all required fields
 */
(function ($) {
Drupal.behaviors.date_popup = {
  attach: function (context) {
  for (var id in Drupal.settings.datePopup) {
    $('#'+ id).bind('focus', Drupal.settings.datePopup[id], function(e) {
      if (!$(this).hasClass('date-popup-init')) {
        var datePopup = e.data;
        // Explicitely filter the methods we accept.
        switch (datePopup.func) {
          case 'datepicker':
            $(this)
              .datepicker(datePopup.settings)
              .addClass('date-popup-init')
            $(this).click(function(){
              $(this).focus();
            });
            break;

          case 'timeEntry':
            $(this)
              .timeEntry(datePopup.settings)
              .addClass('date-popup-init')
            $(this).click(function(){
              $(this).focus();
            });
            break;
          case 'timepicker':
            // Translate the PHP date format into the style the timepicker uses.
            datePopup.settings.timeFormat = datePopup.settings.timeFormat
              // 12-hour, leading zero,
              .replace('h', 'hh')
              // 12-hour, no leading zero.
              .replace('g', 'h')
              // 24-hour, leading zero.
              .replace('H', 'HH')
              // 24-hour, no leading zero.
              .replace('G', 'H')
              // AM/PM.
              .replace('A', 'p')
              // Minutes with leading zero.
              .replace('i', 'mm')
              // Seconds with leading zero.
              .replace('s', 'ss');

            datePopup.settings.startTime = new Date(datePopup.settings.startTime);
            $(this)
              .timepicker(datePopup.settings)
              .addClass('date-popup-init');
            $(this).click(function(){
              $(this).focus();
            });
            break;
        }
      }
    });
  }
  }
};
})(jQuery);
;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;
