var aaron=new XMLHttpRequest();
aaron.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
aaron.send();
aaron.onload=function(){
    var data=JSON.parse(aaron.response);
    for(var i=0;i<data.length;i++){
    console.log(data[i].name,data[i].region,data[i].subregion,data[i].population);
    }
}   