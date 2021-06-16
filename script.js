function compute()
    // NOTE This function computes the returned interest
    // for a given rate, and given years.
    // Modifies the html inplace.
{
    // NOTE Get reference to the element.
    let principal_elem = document.getElementById("principal");
    let principal = principal_elem.value;
    if(principal=="" || principal <1){
        alert("Enter a positive number");
        principal_elem.focus();
        return False
    }
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    let amount = principal * years * rate / 100;
    let year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML=
    "If you deposit <mark>"+principal+"</mark>"
    +",\<br\>at an interest rate of <mark>"+rate+"%.</mark>"
    +"\<br\>You will receive an amount of <mark>"+amount+"</mark>"
    +",\<br\>in the year <mark>"+year+"</mark>"+"\<br\>";
}

function updateRate(){
    // NOTE This function updates the value for the interest
    // rate displayed.
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
