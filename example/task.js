importScripts('task-vars.js');

self.postMessage('starting.');

while(end) {
  end -= 1;
  tmp += end;
  if (end === halfway) {
    self.postMessage('halfway there, `tmp` is now ' + tmp + '.');
  }
}

self.postMessage('add done.');

// called implicitly
// self.terminate();
