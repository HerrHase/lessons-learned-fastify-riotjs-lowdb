const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
   terser: {
     extractComments: false,
   }
});

mix.webpackConfig({
    module: {
		rules: [{
			test: /\.riot$/,
			exclude: /node_modules/,
			use: [{
				loader: '@riotjs/webpack-loader',
				query: {
					hot: false
				}
			}]
		}
    ]}
});

mix
    .js('src/client/index.js', 'public/js')
    .sass('src/client/styles.scss', 'public/css');
