let userMap = new Map();

// use map to set key values
userMap.set("id", 123123);  // key is string & values is number.
userMap.set("email", "john.smith@mail.com");  // key is string & values is string.
userMap.set(123123, "John Smith");  // key is number & values is string.
userMap.set(true, "Married");  // key is boolean & values is string.
userMap.set(null, "empty data");  // key is null & values is string.
userMap.set({id:120}, {id:120,name:'Mike',email:'mike@gmail.com'});  // key is object & values is object.

console.log(userMap);

// access / fetch values from map
console.log(userMap.get("id"));
console.log(userMap.get(123123));
console.log(userMap.get(true));

// get keys from map
console.log("Keys : ", userMap.keys());

// get values from a amp
console.log("Values :", userMap.values());

// iterate over a mao
for(let key of userMap.keys()){
    console.log("Key : ", key  ,"  Values : ", userMap.get(key));
}
