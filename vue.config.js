const {seller,goods,ratings} = require("./mock/data.json")
const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave:false,
  devServer:{
    open:true,
    before:function(app){ //app是express核心对象
      app.get('/api/seller',function (req,res) {
          res.json({seller});
      });
      app.get('/api/goods',function (req,res) {
          res.json({goods});
      });
      app.get('/api/ratings',function (req,res) {
          res.json({ratings});
      });
    }
  },
  configureWebpack:{
      resolve: {
        alias: {
            'pages': resolve('src/pages'),
            'components': resolve('src/components'),
        }
    }
  }
}