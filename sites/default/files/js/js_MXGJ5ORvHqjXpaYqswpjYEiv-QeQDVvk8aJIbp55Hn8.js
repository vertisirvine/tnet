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
(function ($) {

/**
 * Toggle the visibility of a fieldset using smooth animations.
 */
Drupal.toggleFieldset = function (fieldset) {
  var $fieldset = $(fieldset);
  if ($fieldset.is('.collapsed')) {
    var $content = $('> .fieldset-wrapper', fieldset).hide();
    $fieldset
      .removeClass('collapsed')
      .trigger({ type: 'collapsed', value: false })
      .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));
    $content.slideDown({
      duration: 'fast',
      easing: 'linear',
      complete: function () {
        Drupal.collapseScrollIntoView(fieldset);
        fieldset.animating = false;
      },
      step: function () {
        // Scroll the fieldset into view.
        Drupal.collapseScrollIntoView(fieldset);
      }
    });
  }
  else {
    $fieldset.trigger({ type: 'collapsed', value: true });
    $('> .fieldset-wrapper', fieldset).slideUp('fast', function () {
      $fieldset
        .addClass('collapsed')
        .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));
      fieldset.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = document.documentElement.clientHeight || document.body.clientHeight || 0;
  var offset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    }
    else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = {
  attach: function (context, settings) {
    $('fieldset.collapsible', context).once('collapse', function () {
      var $fieldset = $(this);
      // Expand fieldset if there are errors inside, or if it contains an
      // element that is targeted by the URI fragment identifier.
      var anchor = location.hash && location.hash != '#' ? ', ' + location.hash : '';
      if ($fieldset.find('.error' + anchor).length) {
        $fieldset.removeClass('collapsed');
      }

      var summary = $('<span class="summary"></span>');
      $fieldset.
        bind('summaryUpdated', function () {
          var text = $.trim($fieldset.drupalGetSummary());
          summary.html(text ? ' (' + text + ')' : '');
        })
        .trigger('summaryUpdated');

      // Turn the legend into a clickable link, but retain span.fieldset-legend
      // for CSS positioning.
      var $legend = $('> legend .fieldset-legend', this);

      $('<span class="fieldset-legend-prefix element-invisible"></span>')
        .append($fieldset.hasClass('collapsed') ? Drupal.t('Show') : Drupal.t('Hide'))
        .prependTo($legend)
        .after(' ');

      // .wrapInner() does not retain bound events.
      var $link = $('<a class="fieldset-title" href="#"></a>')
        .prepend($legend.contents())
        .appendTo($legend)
        .click(function () {
          var fieldset = $fieldset.get(0);
          // Don't animate multiple times.
          if (!fieldset.animating) {
            fieldset.animating = true;
            Drupal.toggleFieldset(fieldset);
          }
          return false;
        });

      $legend.append(summary);
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.dateAdmin = {};

Drupal.behaviors.dateAdmin.attach = function (context, settings) {
  // Remove timezone handling options for fields without hours granularity.
  var $hour = $('#edit-field-settings-granularity-hour').once('date-admin');
  if ($hour.length) {
    new Drupal.dateAdmin.TimezoneHandler($hour);
  }
};


Drupal.dateAdmin = {};

/**
 * Constructor for the TimezoneHandler object.
 *
 * This object is responsible for showing the timezone handling options dropdown
 * when the user has chosen to collect hours as part of the date field, and
 * hiding it otherwise.
 */
Drupal.dateAdmin.TimezoneHandler = function ($checkbox) {
  this.$checkbox = $checkbox;
  this.$dropdown = $('#edit-field-settings-tz-handling');
  this.$timezoneDiv = $('.form-item-field-settings-tz-handling');
  // Store the initial value of the timezone handling dropdown.
  this.storeTimezoneHandling();
  // Toggle the timezone handling section when the user clicks the "Hour"
  // checkbox.
  this.$checkbox.bind('click', $.proxy(this.clickHandler, this));
  // Trigger the click handler so that if the checkbox is unchecked on initial
  // page load, the timezone handling section will be hidden.
  this.clickHandler();
};

/**
 * Event handler triggered when the user clicks the "Hour" checkbox.
 */
Drupal.dateAdmin.TimezoneHandler.prototype.clickHandler = function () {
  if (this.$checkbox.is(':checked')) {
    this.restoreTimezoneHandlingOptions();
  }
  else {
    this.hideTimezoneHandlingOptions();
  }
};

/**
 * Hide the timezone handling options section of the form.
 */
Drupal.dateAdmin.TimezoneHandler.prototype.hideTimezoneHandlingOptions = function () {
  this.storeTimezoneHandling();
  this.$dropdown.val('none');
  this.$timezoneDiv.hide();
};

/**
 * Show the timezone handling options section of the form.
 */
Drupal.dateAdmin.TimezoneHandler.prototype.restoreTimezoneHandlingOptions = function () {
  var val = this.getTimezoneHandling();
  this.$dropdown.val(val);
  this.$timezoneDiv.show();
};

/**
 * Store the current value of the timezone handling dropdown.
 */
Drupal.dateAdmin.TimezoneHandler.prototype.storeTimezoneHandling = function () {
  this._timezoneHandling = this.$dropdown.val();
};

/**
 * Return the stored value of the timezone handling dropdown.
 */
Drupal.dateAdmin.TimezoneHandler.prototype.getTimezoneHandling = function () {
  return this._timezoneHandling;
};

})(jQuery);
;
