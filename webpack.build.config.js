const path=require("path");
const glob=require("glob");
const {promisify}=require("util");
const merge=require("webpack-merge");

const webpack_public_config=require("./webpack.public.config");

const source_path=path.resolve(__dirname,"./src/");
const match_glob_path=path.resolve(__dirname,"./src/**/*.vue");


module.exports=async ()=>{
  const entry_files=await promisify(glob)(match_glob_path);
  const entry_files_map=entry_files.map((file_path)=>{
    return [file_path.replace(".vue","").replace(source_path,""),file_path];
  });
  return merge({
    mode:"development",
    entry:Object.fromEntries(entry_files_map),
    output:{
      path:path.resolve(__dirname,"./dist/"),
      publicPath:"/dist/",
      filename: "[name].js",
      libraryTarget: "commonjs2"
    }
  },webpack_public_config);
};