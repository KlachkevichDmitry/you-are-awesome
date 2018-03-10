// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (p) => {p};




const createNotEnumerableProperty = () => {
    return Symbol(); // es6

    /*Object.defineProperty(Object.prototype, propertyName, {
        get: function() { return propertyName; },
        set: function(value) {propertyName=value}
    })
    return propertyName;
    +передать propertyName
    */
};


const createProtoMagicObject = (num) => {

};


let count=0;
const incrementor = () => {
count += 1;
incrementor.toString = ()=> {return count};
return incrementor;
};


let counterForAsync=0;
const asyncIncrementor = () => {
    return new Promise((resolve,reject) => {
        resolve(counterForAsync+=1);})
};


const createIncrementer = function* gen() {
    i=1;
    while (true) {
        yield i++;
    }
};


// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve(data);
        }, 1000);
    });
};




const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};

const sortByProto = (arr) => {
    return arr.sort((a,b)=>a.proto-b.proto);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;