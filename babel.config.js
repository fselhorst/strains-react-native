module.exports = function(api) {
  api.cache(true);
  const plugins = ['@babel/plugin-proposal-export-namespace-from'];
  const presets = ['babel-preset-expo'];
  return {
    presets,
    plugins,
  };
};
