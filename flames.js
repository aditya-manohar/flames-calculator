
function submit()
{

const flames = ['F', 'L', 'A', 'M', 'E', 'S'];

let firstname = document.getElementById('first').value.toLowerCase().replace(/\s/g,'');
let secondname = document.getElementById('second').value.toLowerCase().replace(/\s/g,'');

let first_name = Array.from(firstname);
let second_name = Array.from(secondname);

console.log(first_name);
console.log(second_name);

var count = 0;
var len1 = first_name.length;
var len2 = second_name.length;


for(var a=0;a<len1;a++)
{
for(var b=0;b<len2;b++)
{
    if(first_name[a] == second_name[b])
    {
        count ++;
        first_name.splice(a,1);
        second_name.splice(b,1);
    }
}
}
console.log(first_name.length + second_name.length)

function flame(flames)
{

var remaining = first_name.length + second_name.length;
var len = flames.length;

for(var i=0;i<6;i++){
if(len > 1){
console.log("i = ",i);
console.log("Length = ",len)
console.log("Index removed = ",remaining%len - 1)
console.log(' ')
flames.splice((remaining%len-1),1);
len--;
}
} 

return flames[0]
}


console.log(flame(flames));


    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var result = document.getElementById('result'); 

    if(flames[flames.length - 1] == 'F')
    {
    result.innerText = 'Friends';
    }

    else if(flames[0] == 'L')
    {
        result.innerText = 'Love';
    }

    else if(flames[0] == 'A')
    {
        result.innerText = 'Affection';
    }

    else if(flames[0] == 'M')
    {
        result.innerText = 'Marraige';
    }

    else if(flames[0] == 'E')
    {
        result.innerText = 'Enemies';
    }

    else if(flames[0] == 'S'){
        result.innerText = 'Siblings';
    }

    else if(document.getElementById('first')=='' && document.getElementById('second') == ''){
        result.innerText = 'Some problem occurred'
        alert('working')
    }

}