
let a=new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all");
a.send();
a.onload=function(){
     const data=JSON.parse(a.response);
     data.filter((value,index,array)=>{
        if(value.region=="Asia"){
            console.log(
            `
Asian Countries: ${value.name.common}

            `);
            
        }
     })
}