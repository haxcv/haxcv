window.vProcess;
vProcess = function(){
  return (function(){
        
      
        /*
        last Level of testing 
        check if everthing is ok to start framework services 
        */
          var STATUS = arguments[0];
          if(!STATUS)
          {
            console.log("framework failed to start ");
          }
        return STATUS;
      

          


})(function(){
  
  /*
    second Level of testing .
    check if jsH compiler is working and then continue to last level
  */
  var STATE    = false;  
  window.LIBS  = arguments[0]();
  window.CHECK = LIBS instanceof Object && LIBS.nodeName == 'BODY';
  if(!LIBS) return;
  var COMPILE = "{% {{ <debug v-data=\"{{+(CHECK ? true : false)+}}\" ></debug> }} %}";
  try{
    var DEBUG = haxcv.compile(COMPILE);
    var VertualDOM = document.createElement("V-DOM");
        VertualDOM.innerHTML = DEBUG;
    var RESULT = _(VertualDOM.querySelector('debug')).attr("v-data");
    STATE = new Function('return '+RESULT)();
    if(!STATE)
    {
      throw new Error("Compile Error ");
    }

  }catch(error)
  {
   console.log(error.message)
   STATE = false;
  }

  return STATE;

}(function() {
  /*
  first Level of testing 
  check if Library is working and check if DOM is ready

  */
  try{
    
  
      var DOM =  _(document.body).el;
      if(!DOM){
        console.log("Libs not ready ");
        return;
      }
      }catch(e)
        {
          var DOM = false;
        }
  

  return DOM;

}));
}


