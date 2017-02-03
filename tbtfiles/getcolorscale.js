function getMax(myArray, prop) {
    var max;
    for (var i=0 ; i<myArray.features.length ; i++) {
        if (!max || parseInt(myArray.features[i].properties[prop]) > parseInt(max.properties[prop]))
            max = myArray.features[i];
    };
    return max;
};
function doIt (seriesJ) {
    var maxVal = getMax(tbtmapdata, seriesJ);
    //console.log(maxVal.properties.name + " - " + maxVal.properties[seriesJ]);
    return maxVal.properties[seriesJ];
};


//Create color scale baed on maximum value - into 9 baskets
function getColor(d, seriesName) {
  var max = doIt(seriesName);
  if(max > 50) {
    return d > Math.floor(max*(7/9)) ? '#800026' :
            d >= Math.floor(max*(5/9))  ? '#BD0026' :
            d >= Math.floor(max*(4/9))  ? '#E31A1C' :
            d >= Math.floor(max*(3/9))  ? '#FC4E2A' :
            d >= Math.floor(max*(2/9))   ? '#FD8D3C' :
            d >= Math.floor(max*(1/9))   ? '#FEB24C' :
            d >= Math.floor(max*(0.5/9))   ? '#FED976' :
            d >= 1 ? '#FFEDD0':
                      '#FFFFFF';
    }
  else if (max > 10 ){
    return d >= Math.floor(max*(4/5))   ? '#FD8D3C' :
            d >= Math.floor(max*(2/5))   ? '#FEB24C' :
            d >= Math.floor(max/5) ? '#FED976':
            d >=1 ? '#FFEDD0':
                      '#FFFFFF';
  }
  else {
    return d > 5   ? '#FEB24C' :
            d > 2   ? '#FED976' :
            d >=1  ? '#FFEDD0':
                      '#FFFFFF';
  }
};


function getColorGrades(seriesName) {
  var max = doIt(seriesName);
  if(max>50) {
    grades = [0, 1, Math.floor(max*(0.5/9)),
      Math.floor(max*(1/9)), Math.floor(max*(2/9)), Math.floor(max*(3/9)),
      Math.floor(max*(4/9)), Math.floor(max*(5/9)), Math.floor(max*(7/9)) ]
  }
  else if(max > 10) {
    grades = [0, 1, Math.floor(max/5), Math.floor(max*(2/5)), Math.floor(max*(4/5)) ]
  }
  else {
    grades = [0, 1, 3, 5]
  }
  return grades;
};
