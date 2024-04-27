let obj = JSON.parse($response.body || '{}');

obj.Variables.data.diamondlist = [];
obj.Variables.data.newtodolist  = obj.Variables.data.newtodolist.filter(item => item.title == '飞米兑换');
obj.Variables.notice.newprompt = "0";

$done({
	body: JSON.stringify(obj)
});