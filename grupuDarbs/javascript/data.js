
currData = {
    "roomid": 1,
    "temp": 16.9,
    "co2": 400,
    "mist": 43,
    "time": "10:45:29",
    "date": "17-01-20"
}

currData[1] = {
    "roomid": 1,
    "temp": 16.9,
    "co2": 400,
    "mist": 43,
    "time": "10:45:29",
    "date": "17-01-20"
}

document.getElementById('temp_poic_1').innerHTML = currData[1].temp;

console.log(currData[1].temp);