let obj = JSON.parse($response.body || '{}');

if Array.isArray(obj.Variables.data.forum_threadlist) {
  const newlist = obj.Variables.data.forum_threadlist.filter(item => item.author != '官方');
  obj.Variables.data.forum_threadlist = newlist;
  obj.Variables.data.tpp = newlist.length;
}

$done({
	body: JSON.stringify(obj)
});
