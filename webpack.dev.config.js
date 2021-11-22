const path=require("path");
const merge=require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack_public=require("./webpack.public");

const example_path=path.resolve(__dirname,"./example/");

module.exports=async ()=>{
  return merge({
    mode:"development",
    entry:example_path,
    devServer:{
      // open:true,
      port:9000,
      host:'0.0.0.0',
    }
  },webpack_public,{
    plugins:[
      new HtmlWebpackPlugin({
        template:path.resolve(__dirname,"./public/index.html")
      })
    ]
  });
};