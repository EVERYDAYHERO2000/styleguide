const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const vueLoader = require('vue-loader')
const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const transpileDependencies = [
	'regexpu-core',
	'strip-ansi',
	'ansi-regex',
	'ansi-styles',
	'react-dev-utils',
	'chalk',
	'unicode-match-property-ecmascript',
	'unicode-match-property-value-ecmascript',
	'acorn-jsx',
	'@znck[\\\\/]prop-types'
]

const docSiteUrl = process.env.DEPLOY_PRIME_URL || '/'

module.exports = {
	title: 'UI',
    components: 'src/components/**/[A-Z]*.vue',
    theme: 'styleguide.theme.js',
	styles: 'styleguide.styles.js',
	defaultExample: true,
	getComponentPathLine(componentPath) {
		const componentFileName = path.basename(componentPath, '.vue')
		const name = componentFileName.toLowerCase() === 'index' ? path.basename(path.dirname(componentPath)) : componentFileName
		return `import ${name} from '${componentPath.replace(/^src\//, 'my-library/dist/')}'`
	},
    version: '1.1.1',
	webpackConfig: {
		resolve: {
			alias: {
				'~': path.join(__dirname, './test')
			}
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader'
				},
				{
					test: /\.js$/,
					exclude: (modulePath) =>
						(/node_modules/.test(modulePath) || /packages[\\/]vue-styleguidist[\\/]lib/.test(modulePath)) &&
						!transpileDependencies.some((mod) => new RegExp(`node_modules[\\\\/]${mod}[\\\\/]`).test(modulePath)),
					use: {
						loader: 'babel-loader',
						options: {
							sourceType: 'unambiguous',
							presets: [
								[
									'@babel/preset-env',
									{
										useBuiltIns: 'usage',
										corejs: 3,
										targets: {
											ie: '11'
										}
									}
								]
							],
							comments: false
						}
					}
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
                        'vue-style-loader', 
                        'style-loader', 
                        'css-loader', 
                        'sass-loader',
                    ]
				},
				{
					test: /\.css$/i,
					loader: 'css-loader',
					options: {
						url: false,
					},
				},
				{
					test: /\.(svg|eot|woff|ttf|png|jpe?g|gif)$/i,
					use: [
					  {
						loader: 'file-loader',
					  },
					],
				},
			]
		},

		plugins: [
            new vueLoader.VueLoaderPlugin(),
        ].concat(
			process.argv.includes('--analyze') ? [new BundleAnalyzerPlugin()] : []
		)
	},
	usageMode: 'collapse',
	exampleMode: 'collapse',
	compilerConfig: {
		target: { ie: 11 }
	},
	styleguideDir: 'dist',
	displayOrigins: true,
	codeSplit: false
}