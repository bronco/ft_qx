let obj = JSON.parse($response.body || '{}');

if (obj.tagadv) {
	obj.tagadv = "";
}

if (obj.threadapp_ad_video) {
	obj.threadapp_ad_video = [];
}

if (obj.pingyouadv) {
	obj.pingyouadv = "";
}

if (obj.middleadv) {
	obj.middleadv = "";
}

if (obj.bottomadv) {
	obj.bottomadv = "";
}

if (obj.appdetailadv) {
	obj.appdetailadv = [];
}

$done({
	body: JSON.stringify(obj)
});
