module.exports = function (app) {
  var plugin = {};

  plugin.id = 'sk-depth-gauge';
  plugin.name = 'SignalK Depth Gauge';
  plugin.description = 'Depth gauge with trend graphic. ';

  plugin.start = function (options, restartPlugin) {
    // Here we put our plugin logic
    app.debug('Plugin started');
  };

  plugin.stop = function () {
    // Here we put logic we need when the plugin stops
    app.debug('Plugin stopped');
  };

  plugin.schema = {
    // The plugin schema
  };

  return plugin;
};

