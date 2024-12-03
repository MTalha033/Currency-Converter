


let selects=document.querySelectorAll(".box2 select");
for(let select of selects){
    for(let code in countryList){
        let newop=document.createElement("option");
        newop.value=code;
        newop.innerText=code;
        if(select.id=="from" && code=="USD"){
            newop.selected="selected";
        }

        else  if(select.id=="to" && code=="PKR"){
            newop.selected="selected";
        }
        select.append(newop);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

function updateFlag(element){
    // console.log(element.value);
    let concode=countryList[element.value];
    let newsrc=`https://flagsapi.com/${concode}/flat/64.png`;
   let image= element.parentElement.querySelector("img");
   image.src=newsrc; 
}



let btn=document.querySelector("#ex");
let fres;

btn.addEventListener('click',async ()=>{
   
    let amount=document.querySelector("#amount");
    if(amount.value==0 || amount.value<0){
        amount.value="1";
    }
    // console.log(amount.value);

    let murl=`https://latest.currency-api.pages.dev/v1/currencies/${selects[0].value.toLowerCase()}.json`;
    let res=await fetch(murl);
     resjson=await res.json();
     let exchageamount=resjson[selects[0].value.toLowerCase()][selects[1].value.toLowerCase()];
    // console.log(exchageamount);
    let totalam=((exchageamount)*(amount.value));
    // console.log(totalam);
   

    let printresult=document.querySelector("#result");
    printresult.innerHTML=("1"+selects[0].value+" = "+exchageamount+" "+selects[1].value+"<br> Total Exchange:"
                           +"<br>"+amount.value+" "+selects[0].value+" = "+totalam+" "+selects[1].value);
    
    
    btn.style="margin-top:30px";
})
