let a=new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all");
a.send();
a.onload=function(){
      const data=JSON.parse(a.response);
    const countriesUsingUSD = data.filter(value => {
      if(value.currencies?.hasOwnProperty('USD')){
                return value;
      }
      
    });
    // console.log(countriesUsingUSD);
    console.log("Countries Using USD:")
    countriesUsingUSD.forEach(output => {
      console.log("Name :"+output.name.common);
    });
  }