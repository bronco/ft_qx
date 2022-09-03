let obj = JSON.parse($response.body || '{}');

if (Array.isArray(obj.Variables.data)) {
  obj.Variables.data.forEach((item) => {
    item.adv = {};
  });
}

$done({
	body: JSON.stringify(obj)
});
