const path=require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  title:"测试组件",
  usageMode:"expand",
  exampleMode:"expand",
  displayOrigins:true,
  pagePerSection:true,
  locallyRegisterComponents:true,
  renderRootJsx:path.resolve(__dirname, './config/styleguide.root.js'),
  sections:[{
    name:"layouts",
    sectionDepth:1,
    content:path.resolve(__dirname,'./src/layouts/README.md'),
    components: path.resolve(__dirname,'./src/layouts/**/*.vue'),
  },{
    name:"form-helpers",
    sectionDepth:1,
    content:path.resolve(__dirname,'./src/form-helpers/README.md'),
    components: path.resolve(__dirname,'./src/form-helpers/**/*.vue'),
  }],
  components: path.resolve(__dirname,'./src/**/*.vue'),
  webpackConfig: {
    module: {
      rules: [
        // Vue loader
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader'
        },
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    },
    plugins: [
      // add vue-loader plugin
      new VueLoaderPlugin()
    ]
  }
}