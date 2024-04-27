let obj = JSON.parse($response.body || '{}');

if (obj.Variables.data.newprompt) {
  obj.Variables.data.newprompt = "0";
}

if (obj.Variables.notice) {
  obj.Variables.notice.newprompt = "0";
}

$done({
	body: JSON.stringify(obj)
});