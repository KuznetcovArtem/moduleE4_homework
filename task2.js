let user = {
    name: 'Ted',
    city: 'Moscow',
   };

let answer = test('name', user)

function test(str, obj) {
	if (obj.hasOwnProperty(str)) {
        return true;
    }
    return false;
}

console.log(answer);
