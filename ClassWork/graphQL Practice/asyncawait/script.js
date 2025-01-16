function fetchData  (){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("Data fetched successfully");
        }, 5000);
    });
}

//Async function with await
async function getData(){
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data);
       

}

getData();