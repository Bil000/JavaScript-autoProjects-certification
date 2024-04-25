const getDataFromApi = () => {
    fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
       .then(response => response.json)
       .then(data => barChart(data))
}

const barChart = (information) => {
   const {data} = information;
   console.log(data)
}

getDataFromApi()
