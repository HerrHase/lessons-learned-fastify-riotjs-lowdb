const mix = require('laravel-mix');

const SvgSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.webpackConfig({
    plugins: [
        new SvgSpritemapPlugin('assets/svg/*.svg', {
            output: {
                filename: 'dist/example/symbol-defs.svg'
            },
            sprite: {
                prefix: 'icon-'
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/example/index.html',
            template: 'src/html/index.html.ejs',
            title: 'Crispy CSS | Lightweight CSS Framework for Building Apps and Websites',
            description: 'Lightweight Framework for building fast and clean Websites and Apps for Mobile, Tablet and Desktop. Minimal UI-Elements, Functions and Helpers',
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/example/getting-started.html',
            template: 'src/html/page.html.ejs',
            title: 'Getting started!',
            description: 'Start with Crispy CSS, here you find Variables to configure all values. There is also a short overview for the examples.',
            body: fs.readFileSync(__dirname + '/src/html/partials/getting-started.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/example/core.html',
            template: 'src/html/page.html.ejs',
            title: 'Core',
            description: 'The Core have the basic Styles for Typography, Heading and also Normalize.',
            body: fs.readFileSync(__dirname + '/src/html/partials/core.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/example/components.html',
            template: 'src/html/page.html.ejs',
            title: 'Components',
            description: 'Components are optional, the have a basic build and should be extended.',
            body: fs.readFileSync(__dirname + '/src/html/partials/components.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/example/helpers.html',
            template: 'src/html/page.html.ejs',
            title: 'Helpers',
            description: 'CSS-Classes that can be use to override other Styles, also used if there is no need to style the element.',
            body: fs.readFileSync(__dirname + '/src/html/partials/helpers.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/example/mixins.html',
            template: 'src/html/page.html.ejs',
            title: 'Mixins',
            description: 'Most Mixins will be used to handle Breakpoints and add Styles.',
            body: fs.readFileSync(__dirname + '/src/html/partials/mixins.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/example/functions.html',
            template: 'src/html/page.html.ejs',
            title: 'Functions',
            description: 'Functions helps to handle variables.',
            body: fs.readFileSync(__dirname + '/src/html/partials/functions.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/example/imprint.html',
            template: 'src/html/page.html.ejs',
            title: 'Imprint',
            body: fs.readFileSync(__dirname + '/src/html/partials/imprint.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/example/privacy-policy.html',
            template: 'src/html/page.html.ejs',
            title: 'Privacy Policy',
            body: fs.readFileSync(__dirname + '/src/html/partials/privacy-policy.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        })
    ]
});

mix.sass('src/crispy-all.scss', 'dist/crispy-all.css')
    .sass('src/crispy-minimal.scss', 'dist/crispy-minimal.css')
    .sass('src/example/styles.scss', 'dist/example/styles.css', {
            sassOptions: {
                includePaths: [
                    'node_modules/reflex-grid/scss'
                ]
            }
    })
    .js('src/example/js/script.js', 'dist/example/script.js')
    .options({
        postCss: [
            require('postcss-css-variables')()
        ]
    });
