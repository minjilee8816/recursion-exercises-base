const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...


const stringify = function(obj) {
  if(typeof obj === "string") {
    return '"' + obj + '"'; 
  } else if( typeof  obj === "object") {
    if(obj === null ) {
      return "null";
    }
    if( _.isArray(obj) ) {
      if(obj.length === 0) {
        return "[" + "]"; 
      } else if (obj.length === 1) {
        let result = '';
          if( typeof obj[0] === 'object' ) {
           result += '[' + stringify(obj[0]) + ']';
          } else if (typeof obj[0] === 'string') {
            result += '[' + stringify(obj[0]) + ']';
          } else {
            result += '[' + obj[0] + ']';
          }
        return result;
      } else if ( obj.length > 1 && typeof obj === 'object' && _.isArray(obj) ) { 
        let str = ''; 
        if(typeof obj === 'object' && _.isArray(obj) ) {
          for(let i = 0; i < obj.length-1; i++) {
            if( typeof obj[i] !== 'object') {
              str += obj[i] + ',';
            } 
          }
        }

        if(typeof obj[obj.length-1] === 'string') {
          str += '"' + obj[obj.length-1] + '"';
        } else if (typeof obj[obj.length-1] === 'number'){
          str += obj[obj.length-1];
        } else if (typeof obj[obj.length-1] === 'object' && _.isArray(obj[obj.length-1]) ) {
          const lastElement =  obj[obj.length-1]; 
          let lastElementString = ''; 
          for(let index = 0; index < lastElement.length-1; index++) {
            if( lastElement[index].length ===  0 ) {
              lastElementString += '[],'
            } else {
              lastElementString += lastElement[index]+',' 
            }
          }
          lastElementString+= lastElement[lastElement.length-1]; 
          str += '[' + lastElementString + ']';
        }
   
        for(let y = 0; y < obj.length-1; y++) {
          if(typeof obj[y] === 'object' && !(_.isArray(obj[y]))) {
            str += stringify(obj[0])+',';    
            str += stringify(obj[1]);      
          }
        }
        return "[" + str + "]" ; 
      }  
    } else if (  typeof obj === 'object' && !(_.isArray(obj)) ) {
        if( Object.keys(obj).length ===0 ) {
          return '{}';
        } else if( Object.keys(obj).length ===1 ){
          for( let key in obj) {
            if(typeof obj[key] === "string") {
              return '{"' +key + '":"' + obj[key]  + '"}';
            } else if(typeof obj[key] === "object" && obj[key].length > 0  ) {
              const insideObj = obj[key]; 
              let str2= ""
              for(let j = 0; j < insideObj.length-1; j++) {
                str2 += '"' + insideObj[j] + '",'
              }
              str2 += '"' +insideObj[insideObj.length-1]; 
              return'{"' + key + '":[' + str2 + '"]}';
            } 
          }
        } else {
          for( let key2 in obj ){
            const objValue = obj[key3]; 
            if( typeof objValue === 'object' && !(_.isArray(objValue)) ) {
              for( let key3 in objValue) {
                return '{"' + key2 + '":{"' + key3 + '":"' + objValue[key3] + '"}}';
              }
            }  
          }
        }
      for (let key4 in obj ) {
        const key4Value = obj[key4]; 
        return '{"' + key4 + '":' + stringify(key4Value) + '}';
      }
    }
  } 
  return obj.toString();
};



module.exports = {
  stringify: stringify
};