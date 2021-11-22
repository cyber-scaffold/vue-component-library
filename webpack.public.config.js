const path=require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports={
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"./example"),
      "@dist":path.resolve(__dirname,"./dist/")
    }
  },
  module:{
    rules:[{
      test: /\.vue$/,
      loader: "vue-loader",
      options: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    },{
      test: /\.scss$/,
      loader: "sass-loader"
    },{
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    }]
  },
  plugins:[
    new VueLoaderPlugin()
  ]
}