const sym = Symbol()

const obj1 = {
 "str": 1,
}

const obj2 = {
 "str": 2,
 [sym]: 2 
}

const obj3 = Object.assign(obj1, obj2)

if(obj1 === obj3) {
  const result = document.getElementById("result");
  result.textContent = "true"
}
