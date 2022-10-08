function solve(object){
    let validMethods=['GET', `POST`, 'DELETE', 'CONNECT'];
    let validProtocols=['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0'];
    let invalidMessageChars=[`<`, `>`,`\\`, `&`, `'`, `"`];
    let uriIsAlphaNumeric=/^[A-Za-z0-9.]+$/g.test(object.uri);
    if (object.uri==='*'){
        uriIsAlphaNumeric=true;
    }
    console.log(uriIsAlphaNumeric)
    //let arrayOfNonAlphaNumeric=object.uri.match(/^[A-Za-z0-9.]+$/g)
    
    if (!object.hasOwnProperty('method')||validMethods.indexOf(object.method)===-1){
        throw new Error('Invalid request header: Invalid Method');
    }
    if(!object.hasOwnProperty('uri')||!uriIsAlphaNumeric){
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!object.hasOwnProperty('version')||validProtocols.indexOf(object.version)===-1){
        throw new Error('Invalid request header: Invalid Version');
    }

    invalidMessageChars.forEach((character)=>{
        if (!object.hasOwnProperty('message')||object.message.includes(character)){
            throw new Error('Invalid request header: Invalid Message');
        }
    })
    return object

}
let object={
    method:'POST',
    uri:'www.abv.bg',
    version:'HTTP/0.9' ,
    message:'Hello!' 
}
solve(object)
module.exports={solve}