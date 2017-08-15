/**
 * Created by cyz on 2017/8/15.
 */
'use strict';

let arr = [1, 3, 7, 1 ,4];
main(arr,1);


function main(collection,element){
    let count = 0;
    collection.map(function(item){
        if(item==element){
            count++;
        }
        })
    console.log(collection);
    console.log(element +'出现的次数为：'+count);
}


