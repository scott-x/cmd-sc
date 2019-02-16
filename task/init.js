var path = require('path');
var fs = require('fs-extra')
function init(appName){
   if (!appName) {
   	console.log('please input your appName')
   }
   fs.pathExists('./'+appName, (err, exists) => {
     console.log(err) // => null
     console.log(exists) // => false
   })
}