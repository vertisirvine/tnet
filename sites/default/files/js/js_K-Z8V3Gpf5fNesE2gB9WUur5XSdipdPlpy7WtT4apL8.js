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
(function ($) {

Drupal.toolbar = Drupal.toolbar || {};

/**
 * Attach toggling behavior and notify the overlay of the toolbar.
 */
Drupal.behaviors.toolbar = {
  attach: function(context) {

    // Set the initial state of the toolbar.
    $('#toolbar', context).once('toolbar', Drupal.toolbar.init);

    // Toggling toolbar drawer.
    $('#toolbar a.toggle', context).once('toolbar-toggle').click(function(e) {
      Drupal.toolbar.toggle();
      // Allow resize event handlers to recalculate sizes/positions.
      $(window).triggerHandler('resize');
      return false;
    });
  }
};

/**
 * Retrieve last saved cookie settings and set up the initial toolbar state.
 */
Drupal.toolbar.init = function() {
  // Retrieve the collapsed status from a stored cookie.
  var collapsed = $.cookie('Drupal.toolbar.collapsed');

  // Expand or collapse the toolbar based on the cookie value.
  if (collapsed == 1) {
    Drupal.toolbar.collapse();
  }
  else {
    Drupal.toolbar.expand();
  }
};

/**
 * Collapse the toolbar.
 */
Drupal.toolbar.collapse = function() {
  var toggle_text = Drupal.t('Show shortcuts');
  $('#toolbar div.toolbar-drawer').addClass('collapsed');
  $('#toolbar a.toggle')
    .removeClass('toggle-active')
    .attr('title',  toggle_text)
    .html(toggle_text);
  $('body').removeClass('toolbar-drawer').css('paddingTop', Drupal.toolbar.height());
  $.cookie(
    'Drupal.toolbar.collapsed',
    1,
    {
      path: Drupal.settings.basePath,
      // The cookie should "never" expire.
      expires: 36500
    }
  );
};

/**
 * Expand the toolbar.
 */
Drupal.toolbar.expand = function() {
  var toggle_text = Drupal.t('Hide shortcuts');
  $('#toolbar div.toolbar-drawer').removeClass('collapsed');
  $('#toolbar a.toggle')
    .addClass('toggle-active')
    .attr('title',  toggle_text)
    .html(toggle_text);
  $('body').addClass('toolbar-drawer').css('paddingTop', Drupal.toolbar.height());
  $.cookie(
    'Drupal.toolbar.collapsed',
    0,
    {
      path: Drupal.settings.basePath,
      // The cookie should "never" expire.
      expires: 36500
    }
  );
};

/**
 * Toggle the toolbar.
 */
Drupal.toolbar.toggle = function() {
  if ($('#toolbar div.toolbar-drawer').hasClass('collapsed')) {
    Drupal.toolbar.expand();
  }
  else {
    Drupal.toolbar.collapse();
  }
};

Drupal.toolbar.height = function() {
  var $toolbar = $('#toolbar');
  var height = $toolbar.outerHeight();
  // In modern browsers (including IE9), when box-shadow is defined, use the
  // normal height.
  var cssBoxShadowValue = $toolbar.css('box-shadow');
  var boxShadow = (typeof cssBoxShadowValue !== 'undefined' && cssBoxShadowValue !== 'none');
  // In IE8 and below, we use the shadow filter to apply box-shadow styles to
  // the toolbar. It adds some extra height that we need to remove.
  if (!boxShadow && /DXImageTransform\.Microsoft\.Shadow/.test($toolbar.css('filter'))) {
    height -= $toolbar[0].filters.item("DXImageTransform.Microsoft.Shadow").strength;
  }
  return height;
};

})(jQuery);
;
