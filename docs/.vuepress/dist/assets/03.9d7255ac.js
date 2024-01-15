import{_ as s,o as t,c,I as n,J as o,e as r,b as a}from"./app.42ac819f.js";const _={},l=e=>(n("data-v-69abe231"),e=e(),o(),e),d={class:"main"},p=l(()=>r("pre",null,[a("      "),r("code",{class:"language-js"},`\r
const pull = (arr, ...args) => {\r
  let argState = Array.isArray(args[0]) ? args[0] : args;\r
  let pulled = arr.filter((v, i) => !argState.includes(v));\r
  arr.length = 0;\r
  pulled.forEach(v => arr.push(v));\r
};\r
let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];\r
pull(myArray, 'a', 'c');\r
console.log(myArray); // ['b', 'b']\r
      `),a(`\r
    `)],-1)),u=[p];function i(e,v){return t(),c("div",d,u)}var y=s(_,[["render",i],["__scopeId","data-v-69abe231"],["__file","03.vue"]]);export{y as default};
