const redoc_bundle = require('./redoc-cli/index')
var dragFile = document.getElementById("drag-file");
// 监听这个事件的原因是 默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。
dragFile.addEventListener('dragover', function (e) {
   console.log("dragover")

   e.preventDefault();
});
dragFile.addEventListener('drop', function (e) {
   e.preventDefault();
   e.stopPropagation();
   for (let f of e.dataTransfer.files) {
      console.log('The file(s) you dragged: ', f)
      var supportTypes = ['json','yaml']
      var fileLocalPath = f.path
      var fileName = f.name
      var fileExtension = fileName.split('.').pop().toLowerCase()
      console.log(fileExtension)
      if(supportTypes.indexOf(fileExtension) != -1){
         redoc_bundle(fileLocalPath, fileName)
      }
      else{
         alert("仅支持 json/yaml 类型")
      }
   }
});