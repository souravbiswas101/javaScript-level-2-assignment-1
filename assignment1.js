function describeValue(value){
    return `${typeof value} | ${value ? "truthy" : "falsy"}`;
}

console.log(describeValue(""));