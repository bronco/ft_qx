let obj = JSON.parse($response.body || '{}');

if (obj.Variables.data.threaddetail) {
	obj.Variables.data.threaddetail.tagadv = "";
	obj.Variables.data.threaddetail.threadapp_ad_video = [];
	obj.Variables.data.threaddetail.pingyouadv = "";
	obj.Variables.data.threaddetail.middleadv = "";
	obj.Variables.data.threaddetail.bottomadv = "";
	obj.Variables.data.threaddetail.appdetailadv = [];
}

if (obj.Variables.notice) {
    obj.Variables.notice.newprompt = "0";
}

$done({
	body: JSON.stringify(obj)
});
