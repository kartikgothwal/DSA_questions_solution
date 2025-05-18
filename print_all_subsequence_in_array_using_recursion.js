function printSubSequence(index, ds, originalArr){
    if( index >= originalArr.length){
        console.log(ds);
        return;
    }
    ds.push(originalArr[index]);
    printSubSequence(index+1, ds, originalArr);
    ds.pop(index);
    printSubSequence(index+1, ds, originalArr);
}
 printSubSequence(0, [], [3,1,2]);