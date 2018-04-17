let output = document.getElementById("output");
let input = document.getElementById("input");
let toOutput;

document.onkeypress = function(event){
    if (event.keyCode == 13) {
        let inputVal = input.value.trim();
        console.log(inputVal);
        switch(inputVal){
            case "!help":
                help();
                input.value = "";
                input.value = input.value.replace(/\r?\n|\r/,"");
            break;
            case "!clear":
                clearConsole();
                input.value = "";
                input.value = input.value.replace(/\r?\n|\r/,"");
            break;
            case "!time":
                time();
                input.value = "";
                input.value = input.value.replace(/\r?\n|\r/,"");
            break;
            case "!main":
                main();
                input.value = "";
                input.value = input.value.replace(/\r?\n|\r/,"");
            break;
            case "!contact":
                contact();
                input.value = "";
                input.value = input.value.replace(/\r?\n|\r/,"");
            break;
            case "!about":
                about();
                input.value = "";
                input.value = input.value.replace(/\r?\n|\r/,"");
            break;
            default:
                Output("<span>Command not found!</span><br/>");
                input.value = "";
                input.value = input.value.replace(/\r?\n|\r/,"");
        }
    }
}
function about(){
    Output("<span>Hello! I'm a consol write in JavaScript, nice to meet you!</span><br/>");
}
function contact(){
    Output("<span>CodePen: https://codepen.io/KrystianJonca/</span><br/><span>GitHub: https://github.com/KrystianJonca/</span><br/>");
}
function main(){
    clearConsole();
    Output('<span>Hello!</span><br/><span>Type "!help" to see available commands!</span><br/>');
}
function time(){
    let currentTime = new Date();

    let day = currentTime.getDate();
    let month = currentTime.getMonth()+1;
    let year = currentTime.getFullYear();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let miliSeconds = currentTime.getMilliseconds();

    Output("<span>"+day+"/"+month+"/"+year+"|"+hours+":"+minutes+":"+seconds+":"+miliSeconds+"</span><br/>");
}
function help(){
    let commandsList = ["Available commands:","!help","!clear","!time"
    ,"!main","!contact","!about"];
    for (let i = 0; i < commandsList.length; i++) {
        let out = "<span>"+ commandsList[i] + "</span><br/>";
        Output(out);
    }
}
function clearConsole(){
    output.innerText = "";
}
function Output(data){
    output.innerHTML += data;
}
