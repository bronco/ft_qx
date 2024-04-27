let obj = JSON.parse($response.body || '{}');


obj.Variables.notice.newprompt = "0";
obj.Variables.data.diamondlist = [];
obj.Variables.data.newtodolist  = obj.Variables.data.newtodolist.filter(item => item.title == '飞米兑换');


$done({
	body: JSON.stringify(obj)
});