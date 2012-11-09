/*!
 * Translated default messages for the jQuery validation plugin.
 * Locale: SR (Serbian; �?рп�?ки језик)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "Поље је обавезно.",
		remote: "Средите ово поље.",
		email: "Уне�?ите и�?правну и-мејл адре�?у",
		url: "Уне�?ите и�?праван URL.",
		date: "Уне�?ите и�?праван датум.",
		dateISO: "Уне�?ите и�?праван датум (ISO).",
		number: "Уне�?ите и�?праван број.",
		digits: "Уне�?ите �?амо цифе.",
		creditcard: "Уне�?ите и�?праван број кредитне картице.",
		equalTo: "Уне�?ите и�?ту вредно�?т поново.",
		accept: "Уне�?ите вредно�?т �?а одговарајућом ек�?тензијом.",
		maxlength: $.validator.format("Уне�?ите мање од {0}карактера."),
		minlength: $.validator.format("Уне�?ите барем {0} карактера."),
		rangelength: $.validator.format("Уне�?ите вредно�?т дугачку између {0} и {1} карактера."),
		range: $.validator.format("Уне�?ите вредно�?т између {0} и {1}."),
		max: $.validator.format("Уне�?ите вредно�?т мању или једнаку {0}."),
		min: $.validator.format("Уне�?ите вредно�?т већу или једнаку {0}.")
	});
}(jQuery));