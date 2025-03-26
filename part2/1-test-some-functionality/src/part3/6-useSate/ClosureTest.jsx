// closure programming
function setValue(value) {
    let v = value;
    function setNewValue(newValue) {
        v = newValue;
    }
    return [v, setNewValue]
    return { v, setNewValue }
}

// for return list
const v1 = setValue(10)
const {v2, setV} = setValue(20)
console.log(v1[0])
console.log(v2)

// to return object
// const v3 = setValue(30)
// console.log(v3.v)