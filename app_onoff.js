let obj = JSON.parse($response.body || '{}');

if (obj.Variables.notice) {
  obj.Variables.notice.newprompt = 0;
  obj.Variables.notice.data.diamondlist = [];
  obj.Variables.notice.data.newtodolist  = obj.Variables.notice.data.newtodolist.filter(item => item.title == '飞米兑换');
}

$done({
	body: JSON.stringify(obj)
});