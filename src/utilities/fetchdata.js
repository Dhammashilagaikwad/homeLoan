async function fetchdata(apipath,extra={}) {
    var res = await fetch(apipath,extra);
    var result = await res.json();
      console.log(result)
    return result;
  
}

export default fetchdata;