jQuery(document).ready(function() {

	jQuery(".social-slider ul").lightSlider({
		item: 1	,
		pager: false,
		controls:true
	});
	var slider = jQuery(".slider-list").lightSlider({
		item: 1,
		pause: 7000,
		slideMove:1,
		mode:'fade',
		speed:1000,
		pager: false,
		auto: true,
		controls:true,
		onBeforeSlide: function(el) {
            var slideNumber = el.getCurrentSlideCount();
			jQuery('#main-slider').attr("class", 'slide-'+slideNumber);
        } 
	});
	
	jQuery('.point.point-1').click(function(){
        slider.goToSlide(0);
    });
	jQuery('.point.point-2').click(function(){
        slider.goToSlide(1);  
    });
	jQuery('.point.point-3').click(function(){
        slider.goToSlide(2);  
    });
	jQuery('.point.point-4').click(function(){
        slider.goToSlide(3);   
    });


	jQuery('#search input.search-submit').click(function(){
		if (jQuery('input.search-field').val()==''){
			return false;
		}	
    });
    
	
	jQuery('.search-m.btns-bl').click(function(){
		if (jQuery('.menu-mob').hasClass('close')){
			jQuery('.menu-mob').trigger( "click" );
		}
		jQuery(this).toggleClass('open');
		jQuery('#search').toggleClass("open");		
    });
	
	jQuery('.menu-mob').click(function(){
		if (jQuery('.search-m.btns-bl').hasClass('open')){
			jQuery('.search-m.btns-bl').trigger( "click" );
		}
		jQuery(this).toggleClass('close');	
		jQuery('header').toggleClass('open');			
    });
	
	jQuery(".nav-links:not(:has(.nav-previous))").addClass('last');
	
	function mobileVersion() {	
		var wWidth = jQuery(window).width();
		if ((jQuery(window).height() < jQuery(document).height())&&(wWidth<=1120)&&(wWidth>1080)){
			wWidth+14;
		} 
		if (wWidth<=1100){
			jQuery('body').addClass('mobile-version');
			jQuery(".logo").appendTo(jQuery("#mob-header"));
		}
		else{
			jQuery(".logo").insertBefore(jQuery("nav#menu"));
			jQuery('body').removeClass('mobile-version');
		}
		if ((wWidth<=1100)&&(wWidth>700)){
			
			jQuery(".btns-line").appendTo(jQuery("#mob-header"));
			
		}
		else{
			
			jQuery(".btns-line").insertAfter(jQuery("nav#menu"));
		}
	};
	
	// Nicescroll header
	jQuery("header.fixed").niceScroll({
		cursorcolor:"#8f7e76"
	});	
	
	// Submenu Menu
	jQuery('ul.menu li.menu-item-has-children').hover(
		function(){
			if (!jQuery('body').hasClass("mobile-version")) {
				jQuery('header.fixed').addClass('fullWidth');
				jQuery(this).find('ul.sub-menu').slideDown();
			}
		},
		function(){
			if (!jQuery('body').hasClass("mobile-version")) {
			  jQuery(this).find('ul.sub-menu').hide();
			  jQuery('header.fixed').removeClass('fullWidth');
			}
		});
		
	jQuery('ul.menu li.menu-item-has-children').click(function(){
			var aMenu = jQuery(this);
			aMenu.toggleClass('open');
			var uMenu = aMenu.find('ul.sub-menu');
			
			if (jQuery('body').hasClass("mobile-version")) {
				uMenu.slideToggle( "slow", function() {
					/* heightHeader(); */
					jQuery("header.fixed").getNiceScroll().resize();
				});
			}
		});
		
	if(jQuery("div").is("#contact-map")){	
		ymaps.ready(function () {
				var myMap = new ymaps.Map('contact-map', {
					center: [53.60576250, 25.84369392],
					zoom: 14
				}),	
				// Создаём макет содержимого.
				MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div class="map-content">$[properties.iconContent]</div>'
				),
				hrodnabiz = new ymaps.Placemark([53.60576250, 25.84369392], {
					hintContent: 'Новогрудские Дары',
					balloonContent: '<h3 class="map-h3">Новогрудские Дары</h3><p class="map-p">г. Новогрудок, ул. 1-ое Мая, 59</p>'
				}, {
					iconLayout: 'default#image',
					iconImageHref: '/wp-content/themes/novdar/images/map.png',
					iconImageSize: [60, 74],
					iconImageOffset: [-30, -70]
				});
				myMap.geoObjects
				.add(hrodnabiz)
		});
	}

	if (jQuery('h1.entry-title').length > 0) { 
		var h1Single = jQuery('h1.entry-title');
		if (h1Single.text().length > 100){
			h1Single.addClass('extraLong');
		}
		else if (h1Single.text().length > 50){
			h1Single.addClass('long');
		}
	}
	if ((jQuery('#main-slider').length > 0)&&(jQuery(window).width()>1100)){ 
		jQuery(window).scroll(function(){
	           
	        });
	}
	
	mobileVersion();
	
	jQuery(window).on('resize', function () {
		mobileVersion();
		jQuery("header.fixed").getNiceScroll().resize();
	  });
	
});
