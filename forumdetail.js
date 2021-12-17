let obj = JSON.parse($response.body || '{}');

if (obj.Variables.data.topthreads) {
  obj.Variables.data.topthreads = [];
}

$done({
	body: JSON.stringify(obj)
});
