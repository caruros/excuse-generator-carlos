window.onload = function(){
    document.getElementById("excuse").innerHTML = generateExcuse();
};
function generateExcuse(){
    let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
  let action = ['ate ', 'peed ', 'crushed ', 'broke '];
  let what = ['my homework ', 'my phone ', 'the car '];
  let when = ['before the class','when I was sleeping','while I was exercising','during my lunch','while I was praying'
  ];

let azarWho = who[Math.floor(Math.random()*who.length)];
let azarAction = action[Math.floor(Math.random()*action.length)];
let azarWhat = what[Math.floor(Math.random()*what.length)];
let azarWhen = when[Math.floor(Math.random()*when.length)];

return azarWho + azarAction + azarWhat + azarWhen;
}


