/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-truck-1': '&#xe908;',
		'icon-RMB-1': '&#xe910;',
		'icon-shoppingCart-1': '&#xe900;',
		'icon-box-1-open': '&#xe90e;',
		'icon-box-1': '&#xe90f;',
		'icon-chat-1': '&#xe909;',
		'icon-lock-1': '&#xe90a;',
		'icon-address-1': '&#xe90b;',
		'icon-order-1': '&#xe90c;',
		'icon-order-1-finish': '&#xe911;',
		'icon-order-1-cancel': '&#xe912;',
		'icon-user-1': '&#xe90d;',
		'icon-list-1': '&#xe905;',
		'icon-checkmark-1': '&#xe907;',
		'icon-cancel-1': '&#xe906;',
		'icon-arrow-1-up': '&#xe902;',
		'icon-arrow-1-right': '&#xe903;',
		'icon-arrow-1-down': '&#xe901;',
		'icon-arrow-1-left': '&#xe904;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
