var revapi59, tpj;
(function() {
	if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad); else onLoad();
	function onLoad() {

		if (tpj===undefined) { tpj = jQuery; tpj.noConflict();}

		if(tpj("#rev_slider_1_1").revolution !== undefined){
			revapi59 = tpj("#rev_slider_1_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"/assets/vendor/revslider/js/",
				sliderLayout:"fullscreen",
				dottedOverlay:"none",
				delay:6000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					mouseScrollReverse:"default",
					onHoverStop:"off",
					touch:{
						touchenabled:"on",
						touchOnDesktop:"off",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					arrows: {
						style:"hermes",
						enable:true,
						hide_onmobile:false,
						hide_onleave:false,
						tmp:'<div class="tp-arr-allwrapper">	<div class="tp-arr-imgholder"></div>	<div class="tp-arr-titleholder">{{title}}</div>	</div>',
						left: {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0
						},
						right: {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					}
				},
				responsiveLevels:[1240,1240,778,480],
				visibilityLevels:[1240,1240,778,480],
				gridwidth:[1200,1200,778,480],
				gridheight:[350,350,960,720],
				lazyType:"single",
				shadow:0,
				spinner:"off",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				fullScreenAutoWidth:"on",
				fullScreenAlignForce:"on",
				fullScreenOffsetContainer: ".header--style-1, .header--style-2,  #bar",
				fullScreenOffset: "",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}; /* END OF revapi call */

	}; /* END OF ON LOAD FUNCTION */
}()); /* END OF WRAPPING FUNCTION */
