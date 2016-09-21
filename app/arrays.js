exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === item){
        return i;
      }
    };
    return -1;
  },

  sum: function(arr) {
    var results = 0;
    arr.forEach( function(element, index) {
      results += element;
    });
    return results;
  },

  remove: function(arr, item) {
    return arr.filter(function(element){return element !== item});
  },
// [ 1, 2, 3, 4, 2 ]
  removeWithoutCopy: function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
       if(arr[i] === item){
          arr.splice(i, 2);
       }
     }
     return arr;
  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
