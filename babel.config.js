// -----------------------------------------------------------------------------
// Common JS -> ECMAScript Modulesに対応させるため、babelによるトランスパイルを実施
//   - import / export 構文を使いたい
// -----------------------------------------------------------------------------
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'modules'     : 'false',
        'useBuiltIns' : 'usage',
        'targets'     : '> 0.25%, not dead',
      }
    ]
  ],
  env: {
    test: {
      presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    },
  },
};
