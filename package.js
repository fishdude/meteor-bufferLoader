Package.describe({
  summary: "Web Audio api bufferLoader"
});

Package.on_use(function (api, where) {
  api.add_files('audioBufferLoader.js', 'client');
});

