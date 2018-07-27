jQuery(function($) {
	var form = $('.contact-form');
		form.submit(function () {
			$this = $(this);
			$.post('sendemail.php', $('#main-contact-form').serialize(), function(data) {
				$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
			},'json');
			return false;
		});
});