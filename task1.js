const someThing = {a:123, b: "word"};

function keysValues(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            console.log(key, obj[key]);
        }
    }
}

keysValues(someThing);
