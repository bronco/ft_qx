let obj = JSON.parse($response.body || '{}');

if (Array.isArray(obj.Variables.data.activities)) {
  const newlist = obj.Variables.data.activities.filter(item => item.type != 'event');
  obj.Variables.data.activities = newlist;
}

$done({
	body: JSON.stringify(obj)
});