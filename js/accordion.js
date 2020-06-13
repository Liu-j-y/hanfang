/*手风琴效果*/
(function ($, window) {
	'use strict';
	function accordion($ul, opt) {
		var ul_width,
			$li = $('li', $ul),
			li_length,
			start_width;

		li_length = $li.length;

		function setVars () {
			ul_width = $ul.width();
			start_width = ul_width / li_length;
			$li.css({'width': start_width + 'px'});
		}
		
		$li.each(function () {
			var $item = $(this),
				item_width;

			item_width = $item.width();

			$item.on({
				'mouseover': function (event) {
					$li.css({'width': ((ul_width - item_width) / (li_length - 1)) + 'px'});
					$item.css({'width': item_width + 'px'});
				},
				'mouseout': function (event) {
					$li.css({'width': start_width + 'px'});
				}
			});
		});
		
		setVars();
		
		$(window).on('resize', function () {
			setVars();
		}.debounce(150));
	}

	$.fn.accordion = function (o) {
		var opt = $.extend({}, o);
		return this.each(function () {
			var $ul = $(this);
			if ($ul.data('zAc6n')) {
				return;
			}
			accordion($ul, opt);
			$ul.data('zAc6n', 1).addClass('create');
		});
	};
}(jQuery, this));

Function.prototype.debounce = function (milliseconds, context) {
    var baseFunction = this,
        timer = null,
        wait = milliseconds;

    return function () {
        var self = context || this,
            args = arguments;

        function complete() {
            baseFunction.apply(self, args);
            timer = null;
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(complete, wait);
    };
};

Function.prototype.throttle = function (milliseconds, context) {
    var baseFunction = this,
        lastEventTimestamp = null,
        limit = milliseconds;

    return function () {
        var self = context || this,
            args = arguments,
            now = Date.now();

        if (!lastEventTimestamp || now - lastEventTimestamp >= limit) {
            lastEventTimestamp = now;
            baseFunction.apply(self, args);
        }
    };
};