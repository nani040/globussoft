//Second Problem
//2.1
let alpha = ['a', 'b', 'c', 'd','e','f','g','h','i', 'j', 'k' ,'l', 'm', 'n', 'o' ,'p', 'q', 'r','s','t','u','v','w','x','y','z']
let encoding = ""

function Validate(char) {
    var regex = /^[A-Za-z]+$/
    var isValid = regex.test(char);
    return isValid;
}

function f(str){
    for(let i of str){
        i = i.toLowerCase()
        if(Validate(i)){
            encoding += alpha[(alpha.length - 1) - alpha.indexOf(i)]
        }else{
            encoding += i
        }
    }
    return encoding
}

console.log(f("Ap!G5"))

// 2.1
let alphaObj = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0}

function g(str){
    for(let i of str){
        i = i.toLowerCase()
        if(Validate(i)){
            alphaObj[i] = alphaObj[i]+1
        }
    }
    return alphaObj
}
console.log(g("hello WOrLd! 23P"));

