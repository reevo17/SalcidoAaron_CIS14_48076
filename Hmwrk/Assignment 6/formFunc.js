

function getForm(url){
	var infoSplit=url.split("?");
	var nameValPairs=infoSplit[1].split("&");
	var $_GET=new Object;
		for (var j=0;j<nameValuePairs.length-1;j++){
			var map=nameValuePairs[j].split("=");
			var name=map[0];
			var val = map[1];
			$_GET[name] = val;
		}
	return $_GET
}
	