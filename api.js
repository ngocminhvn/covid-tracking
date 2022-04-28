function Number(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}
function Country() {
var country = document.getElementById("country-select").value;
    $.getJSON('https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=' + country, function(data) {
        if(data[0] == null){
            alert("NULL DATA");
        }
        document.getElementById("country").innerHTML = data[0].country;
        document.getElementById("totalConfirmed").innerHTML = Number(data[0].totalConfirmed);
        document.getElementById("totalRecovered").innerHTML = Number(data[0].totalRecovered);
        document.getElementById("totalDeaths").innerHTML = Number(data[0].totalDeaths);
    });
}