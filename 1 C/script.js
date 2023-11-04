let a=new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all");
a.send();
a.onload=function(){
     const data=JSON.parse(a.response);
     data.forEach((value,index,actarray)=>{
        console.log(`
        Name: ${value.name.common}
        Capital:${value.capital}
        Flag: ${value.flag}
        
        `)
     })
}