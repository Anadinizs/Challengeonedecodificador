var Textarea = document.getElementById ("input");
var criptbtn = document.getElementById ("Cript");
var descriptbtn = document.getElementById ("Descript");
var retornoMsg = document.getElementById ("retorno_msg")
var copybtn = document.getElementById ("Copy")
console.log(retornoMsg)

function Criptografar(Text) {
    var cript = Text.replace (/e/g, "enter")
    .replace (/i/g, "imes")
    .replace (/a/g, "ai")
    .replace (/o/, "ober")
    .replace (/u/g, "ufat");
    console.log (cript)
    retornoMsg.value = cript
   }
function Descriptografar (Text) {
    var descript = Text.replace (/enter/g, "e")
    .replace (/imes/g, "i")
    .replace (/ai/g, "a")
    .replace (/ober/, "o")
    .replace (/ufat/g, "u");
    retornoMsg.value = descript
}
criptbtn.addEventListener("click",()=>Criptografar(Textarea.value));
descriptbtn.addEventListener("click",()=>Descriptografar(Textarea.value));

function copy () {
    navigator.clipboard.writeText(retornoMsg.value)
    .then(()=>{console.log("dentro do navegator")})
    .catch(erro=>console.error("Erro ao copiar o texto"))
    console.log ("depois do navegator")
}
copybtn.addEventListener("click", ()=>copy())

document.getElementById('input').style.fontFamily = 'Montserrat';
document.getElementById('input').style.fontSize = '20px';

document.getElementById('retorno_msg').style.fontFamily = 'Montserrat';
document.getElementById('retorno_msg').style.fontSize = '20px';
