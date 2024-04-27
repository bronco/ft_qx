let obj = JSON.parse($response.body || '{}');

if (obj.Variables.data.topthreads) {
  obj.Variables.data.topthreads = [];
}

if (obj.Variables.notice) {
  obj.Variables.notice.newprompt = "0";
}

$done({
	body: JSON.stringify(obj)
});
