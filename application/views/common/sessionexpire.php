<script>
// Session Timeout
var sessionStart = <?php echo ($sessionStart != '' ? $sessionStart : '""'); ?>;
var sessionEnd = sessionStart + 3300; // (60 * 60)  60m
var ts = <?php echo strtotime("now")?>;

if(ts > sessionEnd)
	var timeout = 0;
else
	var timeout = sessionEnd - ts;

timeout *= 1000; // convert s to ms

var url = "<?php echo ((isset($url) && $url != '') ? base64_encode($url) : base64_encode(BASEURL)); ?>";
var textSession = "<?php echo ((isset($textSession) && $textSession != '') ? $textSession : ''); ?>";
var setTimeoutStatus = "<?php echo ((isset($setTimeout) && $setTimeout != '') ? 1 : 0); ?>";

$(function() {
    if(setTimeoutStatus==1 || sessionStart=='')
    {
    	setTimeout(function() {
			showSessiontimeout(url, textSession);
		}, timeout);
    }    	
    else
    	showSessiontimeout(url, textSession);
});



function showSessiontimeout(searchURL, textSession)
{
	$.ajax({
		type: "POST",
		url: "<?=BASEURL?>error/geterror/",
		data: {searchURL : searchURL},
		success: function(data){ 
			$("#session-expired").modal('show');
			$("#refreshresult_url").attr("href", data);
			if(textSession!='') $("#refreshresult_url").text(textSession);
		}
	});
}
</script>