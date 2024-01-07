const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//declare a variable 'totalBatteries' that gives the sum of the batteries
const totalBatteries=batteryBatches.reduce(function(total, batteryBatch){
    return total+ batteryBatch;
}, 0);