showNumber(10);

function showNumber(limit){
    for (let i=0;i<=limit;i++){
        const msh=(i%2===0)?'EVEN':'ODD'
        console.log(i,msh);
    }
}