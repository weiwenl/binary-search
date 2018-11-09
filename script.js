const list = [
    'Aaron',
    'Andy',
    'Batman',
    'Betsy',
    'Boba',
    'Bonnie',
    'Clarence',
    'Daisy',
    'Elektra',
    'Flash'
];

// function binarySearch(list, name) {
//      let indexHalf = Math.floor(list.length / 2);
//      if (list.length === 1 && list[0] != name) {
//         console.log("false");
//         return false;
//     } else if (list[indexHalf] === name) {
//         console.log("true");
//         return true;
//         //list[5] > 'Daisy'
//     } else if ( list[indexHalf] > name ) {
//         list = list.splice(0, indexHalf);
//         console.log("front", list)
//         //list[5] < 'Daisy'
//     } else if ( list[indexHalf] < name ) {
//         list = list.splice(indexHalf + 1, list.length - indexHalf - 1);
//         console.log("back", list)
//     };
//      binarySearch(list, name);
// };

function binarySearch(list, searchValue){
    //initial search:
    let sortedList = list.sort();
    let startingPoint = 0;
    let endPoint = sortedList.length -1;
    let middle = Math.floor((startingPoint + endPoint) / 2);
    while (sortedList[middle] !== searchValue && startingPoint < endPoint){
      //const list = ['Aaron','Andy','Batman','Betsy','Boba'];
      //And I want to find 'Betsy' and in this case list[middle] refers to a name
        if (searchValue < list[middle]){
            endPoint = middle - 1;
        }
        else{
            startingPoint = middle + 1;
        }
        //updating middle at every iteration
        middle = Math.floor((startingPoint + endPoint) / 2);
    }
    //build the boolean condition
    if(sortedList[middle] != searchValue){
        return false;
    }
    else{
        return true;
    }
}

binarySearch(list, 'Daisy');
