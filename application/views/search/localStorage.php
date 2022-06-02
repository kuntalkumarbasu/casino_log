<?php if(SITE_KEY == 'redtag') { ?>
<script type="text/javascript">
	$(function(){
		var win = document.getElementById('localStorageIframe').contentWindow;
		window.onload = function() {
			win.postMessage(JSON.stringify({key: 'searchEngineFlights', method: "get"}), "*");
		};

		$(window).on("message", function(e){
			var msgEvent = e.originalEvent;
			if (/^https?:\/\/([a-z0-9]*\.)?redtag\.ca/i.test(msgEvent.origin)) {
        		if(typeof msgEvent.data === 'string' && !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(msgEvent.data.replace(/"(\\.|[^"\\])*"/g, '')))){
			    	var response = JSON.parse(msgEvent.data);

			    	var cache = response.dataSet;

			    	var newCache = {
			    		"trip":"<?= $requestParam['trip']?>",
			    		"direct": ("<?= $requestParam['direct'] ?>" == "1"),
			    		"nearbyAirports": ("<?= $requestParam['nearbyAirports'] ?>" == "1"),
			    		"occupancy":{
							"numAdults":"<?= $requestParam['adults']?>",
							"children":<?= (isset($requestParam['children']) ? json_encode($requestParam['children']) : '[]') ?>
						},
						"class":"<?= $requestParam['class']?>"
					};
		    	<?	if($requestParam['trip'] == "multicity"){ ?>
		    			newCache.multi = <?= json_encode($requestParam['multi']); ?>;
		    	<?	} else { ?>
					newCache.normal = {
						"origin": <?= json_encode($requestParam['origin']) ?>,
						"destination": <?= json_encode($requestParam['destination']) ?>
					};
					newCache.departureDate = "<?= date('m/d/Y', strtotime($requestParam['departure']))?>";
					<?	if(!empty($requestParam['return'])){ ?>
					newCache.returnDate = "<?= date('m/d/Y', strtotime($requestParam['return']))?>";
					<?	}
					} ?>

					$.extend(true, cache, newCache);
					win.postMessage(JSON.stringify({key: 'searchEngineFlights', method: "set", data: cache}), "*");
				}
			}
		});
	});
</script>

<iframe src="http://www.redtag.ca/localStorageIframe.html" id="localStorageIframe" frameborder="0" style="display:none;"></iframe>
<?php } ?>