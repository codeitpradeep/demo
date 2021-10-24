const outputvlaue = document.querySelector('.output-value');
const histryvlaue = document.querySelector('.histry-value');



function gethistry(){
    return histryvlaue.innerText;
}

function printhistry(num){
    histryvlaue.innerText= num;
}


function getoutput(){
    return outputvlaue.innerText;
}

console.log(getoutput())

function printoutput(num){
    if(num==""){
        outputvlaue.innerText = num;
    }else{
        outputvlaue.innerText = getformtternum(num)
    }
    
}

function getformtternum(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value
}


function reversenumberformet(num){
    //console.log(num)
    return Number(num.replace(/,/g,''));
}



var operator = document.getElementsByClassName('operator');
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click' , function(){
//alert(this.id)

        if(this.id == 'clear'){
            printhistry("")
            printoutput("")
        }else if(this.id == "backspace"){
            var output = reversenumberformet(getoutput()).toString();
            if(output){
                output= output.substr(0,output.length-1);
                printoutput(output)
            }
        }
        else{
            var output = getoutput();
            var histry = gethistry();
            if(output=="" && xhistry!=""){
                if(isNaN(histry[histry.length-1])){
                    histry = histry.substr(0,histry.length-1);
                }
            }
            if(output!="" || histry!=""){
                output = output ==""?
                output:reversenumberformet(output);
                histry = histry+output;
                if(this.id=="="){
                    var result = eval(histry);
                    printoutput(result);
                    printhistry("");
                }else{
                    histry= histry+this.id;
                    printhistry(histry);
                    printoutput("")
                }
            }
        }
    })
}


var number = document.getElementsByClassName('number');
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click' , function(){
        //alert(this.id)
        var output = reversenumberformet(getoutput());
        if(output!=NaN){
            output=output+this.id;
            printoutput(output)
        }
    })
}
