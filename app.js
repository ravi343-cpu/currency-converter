console.log("hello ");

const populate = async (value , currency) =>{
    let myStr = "";
    const url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_H5tntbOs72mD1k3oTzjo7Nl5FER5nrgSx1uJQIrT&base_currency="
    let response = await fetch(url);
    let rJson = await response.json();
    document.querySelector(".output").style.display = "block";
    

    for(let key of Object.keys(rJson["data"])){
       myStr += `
        <tr>
            <td>${key}</td>
            <td>${rJson["data"][key]["code"]}</td>
            <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
        </tr>
    `

    }
    const tBody = document.querySelector("tbody");
        tBody.innerHTML = myStr ;
        let btn = document.querySelector("#btn");
   


}


 

    btn.addEventListener("click", (e)=>{
        e.preventDefault();
        const value = parseInt(document.querySelector("input[type='quantity']").value);
        const currency = document.querySelector("select[name='currency']").value;

        populate(value , currency);
    });

