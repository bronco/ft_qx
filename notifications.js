let obj = JSON.parse($response.body || '{}');

if (Array.isArray(obj.Variables.data.activities)) {
  const newlist = obj.Variables.data.activities.filter(item => item.type != 'event');
  obj.Variables.data.activities = newlist;
}

if (obj.Variables.notice) {
  obj.Variables.notice.newprompt = "0";
}

$done({
	body: JSON.stringify(obj)
});