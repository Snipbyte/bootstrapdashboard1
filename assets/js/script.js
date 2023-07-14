AOS.init({
    duration: 1000,
    delay: 400
  })
//
const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', '#0275d8', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{ 
      data: [70,90,44,60,83,90,100],
      label: "Accepted",
      borderColor: "#0275d8",
      borderWidth:2
    }, { 
      data: [10,21,60,44,17,21,17],
      label: "Pending",
      borderColor: "#f0ad4e",
      borderWidth:2,
    }, { 
      data: [6,3,2,2,7,0,16],
      label: "Rejected",
      borderColor: "#d9534f",
      borderWidth:2
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
    //
var ctx2 = document.getElementById('myChart2')
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7","8", "9", "10", "1", "2", "3", "15"],
    datasets: [ { 
      data: [0,10,0,20,75,20,35,40,45,50,55,80,65,70,75,50],
      label: "Accepted",
      borderColor: "#0275d8",
      backgroundColor: "#0275d8",
      borderWidth:2
    }, { 
      data: [15,10,0,20,0,30,35,40,45,50,55,40,65,70,75,110],
      label: "Pending",
      borderColor: "#d9534f",
      backgroundColor:"#d9534f",
      borderWidth:2,
    }, { 
      data: [0,10,45,20,0,40,35,40,45,50,55,60,65,70,75,80],
      label: "Rejected",
      borderColor: "#f0ad4e",
      backgroundColor:"#f0ad4e",
      borderWidth:2
    }
    ]
  },
  options: {
    scales: {
     xAxes: [{ 
      stacked: true    
    }],
     yAxes: [{
      stacked:true
    }],
   }
 }
});