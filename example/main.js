var ww = new Worker('task.js');

ww.onmessage = function(event) {
  console.log(event.data);
  document.body.innerHTML += '<p>'+ event.data +'</p>';
};

ww.onerror = function(event) {
  var error = ['ERROR: Line ', event.lineno, ' in ', event.filename, ': ', event.message].join('');
  console.error(error);
  document.body.innerHTML += '<p>'+ error+'</p>';
};
