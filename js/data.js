
//JS File for datasetreport.html
//Data set given to graph
var dataset = [
   {
     "year": 2013, "quarter": 1, "region": "South East", "regional_manager": "John", "sales": "14013.00"
   },
   {
     "year": 2013, "quarter": 2, "region": "South East", "regional_manager": "John", "sales": "18600.00"
   },
   {
     "year": 2013, "quarter": 3, "region": "South East", "regional_manager": "Leonardo", "sales": "23353.00"
   },
   {
     "year": 2013, "quarter": 4, "region": "South East", "regional_manager": "Leonardo", "sales": "20756.00"
   },
   {
     "year": 2013, "quarter": 1, "region": "North East", "regional_manager": "Paul", "sales": "24149.00"
   },
   {
     "year": 2013, "quarter": 2, "region": "North East", "regional_manager": "Paul", "sales": "13119.00"
   },
   {
     "year": 2013, "quarter": 3, "region": "North East", "regional_manager": "Paul", "sales": "23284.00"
   },
   {
     "year": 2013, "quarter": 4, "region": "North East", "regional_manager": "Paul", "sales": "12697.00"
   },
   {
     "year": 2013, "quarter": 1, "region": "South West", "regional_manager": "George", "sales": "23409.00"
   },
   {
     "year": 2013, "quarter": 2, "region": "South West", "regional_manager": "George", "sales": "13113.00"
   },
   {
     "year": 2013, "quarter": 3, "region": "South West", "regional_manager": "George", "sales": "17097.00"
   },
   {
     "year": 2013, "quarter": 4, "region": "South West", "regional_manager": "Michelangelo", "sales": "21796.00"
   },
   {
     "year": 2013, "quarter": 1, "region": "North West", "regional_manager": "Ringo", "sales": "22486.00"
   },
   {
     "year": 2013, "quarter": 2, "region": "North West", "regional_manager": "Raphael", "sales": "18383.00"
   },
   {
     "year": 2013, "quarter": 3, "region": "North West", "regional_manager": "Raphael", "sales": "19190.00"
   },
   {
     "year": 2013, "quarter": 4, "region": "North West", "regional_manager": "Raphael", "sales": "21011.00"
   },
   {
     "year": 2014, "quarter": 1, "region": "South East", "regional_manager": "Leonardo", "sales": "18378.00"
   },
   {
     "year": 2014, "quarter": 2, "region": "South East", "regional_manager": "Leonardo", "sales": "22284.00"
   },
   {
     "year": 2014, "quarter": 3, "region": "South East", "regional_manager": "Donatello", "sales": "24473.00"
   },
   {
     "year": 2014, "quarter": 4, "region": "South East", "regional_manager": "Donatello", "sales": "16286.00"
   },
   {
     "year": 2014, "quarter": 1, "region": "North East", "regional_manager": "Paul", "sales": "21630.00"
   },
   {
     "year": 2014, "quarter": 2, "region": "North East", "regional_manager": "Paul", "sales": "19603.00"
   },
   {
     "year": 2014, "quarter": 3, "region": "North East", "regional_manager": "Paul", "sales": "23947.00"
   },
   {
     "year": 2014, "quarter": 4, "region": "North East", "regional_manager": "Paul", "sales": "22444.00"
   },
   {
     "year": 2014, "quarter": 1, "region": "South West", "regional_manager": "Michelangelo", "sales": "11436.00"
   },
   {
     "year": 2014, "quarter": 2, "region": "South West", "regional_manager": "Michelangelo", "sales": "18152.00"
   },
   {
     "year": 2014, "quarter": 3, "region": "South West", "regional_manager": "Michelangelo", "sales": "17919.00"
   },
   {
     "year": 2014, "quarter": 4, "region": "South West", "regional_manager": "Michelangelo", "sales": "12747.00"
   },
   {
     "year": 2014, "quarter": 1, "region": "North West", "regional_manager": "Raphael", "sales": "15282.00"
   },
   {
     "year": 2014, "quarter": 2, "region": "North West", "regional_manager": "Raphael", "sales": "16454.00"
   },
   {
     "year": 2014, "quarter": 3, "region": "North West", "regional_manager": "Raphael", "sales": "19653.00"
   },
   {
     "year": 2014, "quarter": 4, "region": "North West", "regional_manager": "Raphael", "sales": "10284.00"
   }
]

/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

/********************************** VARIABLES *************************************/
//for total sales for quarter
var totalSalesArray=[];
var totalSalesArray2013=[];
var totalSalesArray2014=[];
var quarterTotalSales=[];
var quarter1Total=[], quarter2Total=[], quarter3Total=[], quarter4Total=[],quarter5Total=[],quarter6Total=[],quarter7Total=[],quarter8Total=[];

//for total sales per region
var totalRegionArray=[];
var totalRegionArray2013=[];
var totalRegionArray2014=[];
var regionTotalSales=[];
var seTotal=[],swTotal=[],neTotal=[],nwTotal=[],se2Total=[],sw2Total=[],ne2Total=[],nw2Total=[];

//for total sales per manager
var totalManagerArray=[];
var totalManagerArray2013=[];
var totalManagerArray2014=[];
var managerTotalSales=[];
var johnTotal=[],leoTotal=[], paulTotal=[], georgeTotal=[], michelTotal=[], ringoTotal=[],raphaelTotal=[],donaTotal=[], john2Total=[],leo2Total=[], paul2Total=[], george2Total=[], michel2Total=[], ringo2Total=[],raphael2Total=[],dona2Total=[];;

//for labels
var label=[];

//adds all items in sales
function add(a, b) {
    return a + b;
}

/**************************************************************************************************************/
/******************************************* GRAPH FUNCTIONS **************************************************/
/*********************** Sorts the data and adds the sum for different Graphs *********************************/

for (i=0; i < dataset.length; i++){
    //For Total Sales per quarter, region, or manager
    if(dataset[i].year === 2013){
        //quarter
        if(dataset[i].quarter === 1){
            quarter1Total.push(parseInt(dataset[i].sales));
            var sum1 = quarter1Total.reduce(add, 0);
        }
        else if(dataset[i].quarter === 2){
            quarter2Total.push(parseInt(dataset[i].sales));
            var sum2 = quarter2Total.reduce(add, 0);
        }
        else if(dataset[i].quarter === 3){
            quarter3Total.push(parseInt(dataset[i].sales));
            var sum3 = quarter3Total.reduce(add, 0);
        }
        else{
            quarter4Total.push(parseInt(dataset[i].sales));
            var sum4 = quarter4Total.reduce(add, 0);
        }

        //region
        if (dataset[i].region === "South East"){
            seTotal.push(parseInt(dataset[i].sales));
            var sumr1 = seTotal.reduce(add, 0);
        }
        else if(dataset[i].region === "South West"){
            swTotal.push(parseInt(dataset[i].sales));
            var sumr2 = swTotal.reduce(add, 0);
        }
        else if(dataset[i].region === "North East"){
            neTotal.push(parseInt(dataset[i].sales));
            var sumr3 = neTotal.reduce(add, 0);
        }
        else{
            nwTotal.push(parseInt(dataset[i].sales));
            var sumr4 = nwTotal.reduce(add, 0);
        }

        //manager total: john, leo, paul, george, michaelangelo, ringo, raphael
        switch (dataset[i].regional_manager) {
            case "John":
                johnTotal.push(parseInt(dataset[i].sales));
                var sumM1 = johnTotal.reduce(add, 0);
                break;
            case "Leonardo":
                leoTotal.push(parseInt(dataset[i].sales));
                var sumM2 = leoTotal.reduce(add, 0);
                break;
            case "Paul":
                paulTotal.push(parseInt(dataset[i].sales));
                var sumM3 = paulTotal.reduce(add, 0);
                break;
            case "George":
                georgeTotal.push(parseInt(dataset[i].sales));
                var sumM4 = georgeTotal.reduce(add, 0);
                break;
            case "Michelangelo":
                michelTotal.push(parseInt(dataset[i].sales));
                var sumM5 = michelTotal.reduce(add, 0);
                break;
            case "Ringo":
                ringoTotal.push(parseInt(dataset[i].sales));
                var sumM6 = ringoTotal.reduce(add, 0);
                break;
            case "Raphael":
                raphaelTotal.push(parseInt(dataset[i].sales));
                var sumM7 = raphaelTotal.reduce(add, 0);
                break;
            case "Donatello":
                donaTotal.push(parseInt(dataset[i].sales));
                var sumM8 = donaTotal.reduce(add, 0);
                break;
        }

        //total
        totalSalesArray2013 = [sum1, sum2, sum3, sum4];
        totalRegionArray2013=[sumr1, sumr2, sumr3, sumr4];
        totalManagerArray2013 = [sumM1,sumM2,sumM3,sumM4,sumM5,sumM6,sumM7,sumM8];
        var sum2013 = totalSalesArray2013.reduce(add, 0);
        var sumRegion2013 = totalRegionArray2013.reduce(add, 0);

    //2014
    } else if (dataset[i].year === 2014){
        //quarter
        if(dataset[i].quarter === 1){
            quarter5Total.push(parseInt(dataset[i].sales));
            var sum5 = quarter5Total.reduce(add, 0);
        }
        else if(dataset[i].quarter === 2){
            quarter6Total.push(parseInt(dataset[i].sales));
            var sum6 = quarter6Total.reduce(add, 0);
        }
        else if(dataset[i].quarter === 3){
            quarter7Total.push(parseInt(dataset[i].sales));
            var sum7 = quarter7Total.reduce(add, 0);
        }
        else{
            quarter8Total.push(parseInt(dataset[i].sales));
            var sum8 = quarter8Total.reduce(add, 0);
        }

        //region
        if (dataset[i].region === "South East"){
            se2Total.push(parseInt(dataset[i].sales));
            var sumr5 = se2Total.reduce(add, 0);
        }
        else if(dataset[i].region === "South West"){
            sw2Total.push(parseInt(dataset[i].sales));
            var sumr6 = sw2Total.reduce(add, 0);
        }
        else if(dataset[i].region === "North East"){
            ne2Total.push(parseInt(dataset[i].sales));
            var sumr7 = ne2Total.reduce(add, 0);
        }
        else{
            nw2Total.push(parseInt(dataset[i].sales));
            var sumr8 = nw2Total.reduce(add, 0);
        }

        //Manager total: leo, donatello, paul, michaelangelo, raphael
        switch (dataset[i].regional_manager) {
            case "John":
                john2Total.push(parseInt(dataset[i].sales));
                var sumM1b = john2Total.reduce(add, 0);
                break;
            case "Leonardo":
                leo2Total.push(parseInt(dataset[i].sales));
                var sumM2b = leo2Total.reduce(add, 0);
                break;
            case "Paul":
                paul2Total.push(parseInt(dataset[i].sales));
                var sumM3b = paul2Total.reduce(add, 0);
                break;
            case "George":
                george2Total.push(parseInt(dataset[i].sales));
                var sumM4b = george2Total.reduce(add, 0);
                break;
            case "Michelangelo":
                michel2Total.push(parseInt(dataset[i].sales));
                var sumM5b = michel2Total.reduce(add, 0);
                break;
            case "Ringo":
                ringo2Total.push(parseInt(dataset[i].sales));
                var sumM6b = ringo2Total.reduce(add, 0);
                break;
            case "Raphael":
                raphael2Total.push(parseInt(dataset[i].sales));
                var sumM7b = raphael2Total.reduce(add, 0);
                break;
            case "Donatello":
                dona2Total.push(parseInt(dataset[i].sales));
                var sumM8b = dona2Total.reduce(add, 0);
                break;
        }

        //total
        totalSalesArray2014 = [sum5, sum6, sum7, sum8];
        totalRegionArray2014 = [sumr5, sumr6, sumr7, sumr8];
        totalManagerArray2014 = [sumM1b,sumM2b,sumM3b,sumM4b,sumM5b,sumM6b,sumM7b,sumM8b];
        var sum2014 = totalSalesArray2014.reduce(add, 0);
        var sumRegion2014 = totalRegionArray2014.reduce(add, 0);
    }
    //total sum for both years
    var totalSum = sum2013 + sum2014;
}


//update function dropdown for manager detailed chart
function updateChart() {
    var yearValue = $("#yearSelect").val();
    if (yearValue === "2014"){
      //John
        myChart6.data.datasets[0].data[0] = null;
        myChart6.data.datasets[0].data[1] = null;
      // Leonardo
        myChart6.data.datasets[1].data[0] = 18378;
        myChart6.data.datasets[1].data[1] = 22284;
        myChart6.data.datasets[1].data[2] = null;
        myChart6.data.datasets[1].data[3] = null;
      //Donatello
        myChart6.data.datasets[7].data[2] = 24473;
        myChart6.data.datasets[7].data[3] = 16286;
      //Paul
        myChart6.data.datasets[2].data[0] = 21630;
        myChart6.data.datasets[2].data[1] = 19603;
        myChart6.data.datasets[2].data[2] = 23947;
        myChart6.data.datasets[2].data[3] = 22444;
      //George
        myChart6.data.datasets[3].data[0] = null;
        myChart6.data.datasets[3].data[1] = null;
        myChart6.data.datasets[3].data[2] = null;
      //Michelangelo
        myChart6.data.datasets[4].data[0] = 11436;
        myChart6.data.datasets[4].data[1] = 18152;
        myChart6.data.datasets[4].data[2] = 17919;
        myChart6.data.datasets[4].data[3] = 12747;
      //Ringo
        myChart6.data.datasets[5].data[0] = null;
      //Raphael
        myChart6.data.datasets[6].data[0] = 15282;
        myChart6.data.datasets[6].data[1] = 16454;
        myChart6.data.datasets[6].data[2] = 19653;
        myChart6.data.datasets[6].data[3] = 10284;

        myChart6.update();
    }
    else{
      //John
        myChart6.data.datasets[0].data[0] = 14013;
        myChart6.data.datasets[0].data[1] = 18600;
      // Leonardo
        myChart6.data.datasets[1].data[0] = null;
        myChart6.data.datasets[1].data[1] = null;
        myChart6.data.datasets[1].data[2] = 23353;
        myChart6.data.datasets[1].data[3] = 20756;
      //Paul
        myChart6.data.datasets[2].data[0] = 24149;
        myChart6.data.datasets[2].data[1] = 13119;
        myChart6.data.datasets[2].data[2] = 23184;
        myChart6.data.datasets[2].data[3] = 12697;
      //George
        myChart6.data.datasets[3].data[0] = 23409;
        myChart6.data.datasets[3].data[1] = 13113;
        myChart6.data.datasets[3].data[2] = 17097;
      //Michelangelo
        myChart6.data.datasets[4].data[0] = null;
        myChart6.data.datasets[4].data[1] = null;
        myChart6.data.datasets[4].data[2] = null;
        myChart6.data.datasets[4].data[3] = 22444;
      //Ringo
        myChart6.data.datasets[5].data[0] = 22486;
      //Raphael
        myChart6.data.datasets[6].data[0] = null;
        myChart6.data.datasets[6].data[1] = 18383;
        myChart6.data.datasets[6].data[2] = 19190;
        myChart6.data.datasets[6].data[3] = 21011;
      //Donatello
        myChart6.data.datasets[7].data[2] = null;
        myChart6.data.datasets[7].data[3] = null;

        myChart6.update();
    }
}
$(document).ready(function() {
    $('#yearSelect').on('change', updateChart)
    updateChart();
});


//post the total onto the total sales panel
$(document).ready(function() {
    document.getElementById('total-year').innerHTML = sum2014;
    document.getElementById('total-quarter').innerHTML = sum8;
//toggle nav
    var body = $('body'),
        navToggleBtn = body.find('.navToggleBtn');

    navToggleBtn.on('click', function(e) {
        body.toggleClass('activeToggle');
        e.preventDefault();
    });
});

/**************************************************************************************************************/
/******************************************* TABLE FUNCTIONS **************************************************/

//Fill up table with the dataset
function printFullTable(data)
{
    var table = document.getElementById('fullDataSetTable'); //grab table
    var tableBody = document.createElement('tbody');
    for (var i = 0; i < data.length; i++)
    {
        var dataset1= data[i];
        var row = document.createElement('tr'); // create row
        var properties = ['year', 'quarter', 'region', 'regional_manager', 'sales']; //properties for the row

        for (var j = 0; j < properties.length; j++) // append each one of them
        {
            var cell = document.createElement('td'); //names for cell
            cell.innerHTML = dataset1[properties[j]];
            row.appendChild(cell); //append value to cell inthat row
        }
        table.appendChild(tableBody).append(row); //add row
    }
}
printFullTable(dataset);

//button print table data
function printTable()
{
   var printTable=document.getElementById("fullDataSetTable");
   openWin= window.open("");
   openWin.document.write(printTable.outerHTML);
   openWin.print();
   openWin.close();
}
//print button
$('.print-button').on('click',function(){
    printTable();
})
