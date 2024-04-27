let obj = JSON.parse($response.body || '{}');

if (Array.isArray(obj.Variables.data)) {
  obj.Variables.data.forEach((item) => {
    item.adv = {};
  });
}

if (obj.Variables.notice) {
  obj.Variables.notice.newprompt = "0";
}

$done({
	body: JSON.stringify(obj)
});
