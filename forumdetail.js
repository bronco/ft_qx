let obj = JSON.parse($response.body || '{}');

if Array.isArray(obj.Variables.data.topthreads) {
  obj.Variables.data.topthreads = [];
}

$done({
	body: JSON.stringify(obj)
});
