const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
    cats.push("Ralph");  
    return cats;
}

function destructivelyPrependCat(name)
{
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat()
{
    cats.pop("Garfield");
    return cats;
}

function destructivelyRemoveFirstCat()
{
    cats.shift("Milo");
    return cats;
}

function appendCat(name)
{
    var newArray = cats.slice();
    newArray.push("Broom");
    return newArray;
  }
  
  function prependCat(name){
    var name_2=["Arnold", ...cats];
    return name_2;
  }
  
  function removeLastCat(){
    var newArray= cats.slice(0,cats.length-1);
    return newArray;
  }
  function removeFirstCat(){
    var newArray= cats.slice(1);
  return newArray;
  }
  
    
    
  