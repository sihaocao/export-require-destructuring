/*************
 * require the calculator module and unpack the properties using ES6 object destructuring
 *************/

// In the app.js require the calculator module. 
// Using ES6 Object destructuring, declare add, subtract, multiply, divide and assign them the properties of the calculator module.

const calculator = require('./modules/calculator');
const { add, subtract, multiply, divide } = calculator;

/************** DO NOT EDIT BELOW THIS LINE *************/
eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1.0={2,3,4,5};',6,6,'exports|module|add|subtract|multiply|divide'.split('|'),0,{}))