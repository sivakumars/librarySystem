/*************************************************************************
*  library loader 
*  A system where libraries with dependencies can be loaded in a 
*  particular order.  
*  The libraryStore acts as a private variable (closure of library system) 
*  that holds the library modules with the library name as the key.
*  The callback function when invoked returns the library module to be loaded
*  in the library store
*  Usage : librarySystem('app', ['dependency1', 'dependency2'],function(dependency1,dependency2){
       return "app library";
   })

* params:  name  - name of the library
           dependencies - array of dependencies of the library
           callbackFn - The function with the dependencies as parameters 
                        which returns the library module when invoked.
* return : a library module (Object) if it exists or returns undefined.
****************************************************************************/
(function(root){
  var libraryStore = {};
  var librarySystem = function(name, dependencies, callbackFn) {
    if(arguments.length > 1) {
      var dependencyModules = [];
      if(Array.isArray(dependencies) && dependencies.length > 0) {
        dependencies.forEach(function(dependencyName) {
          var value = libraryStore[dependencyName];
          if(value) {
           dependencyModules.push(value);
          }
        });
      }
      libraryStore[name] = callbackFn.apply(this, dependencyModules);
    }else{
      return libraryStore[name];
    }
  } 
  root.librarySystem = librarySystem;
})(window);