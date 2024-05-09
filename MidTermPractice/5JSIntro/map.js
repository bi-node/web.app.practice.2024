var a =[
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
    ];

    const result=a.map((x)=>x.length);
    console.log(result);

    let numbers=[4,2,1,4,2,13,4];
    const sumofEvenNumberSQuares=numbers.filter((x)=>x%2==0).map((y)=>y*y).reduce((accum,curr)=>accum+curr)
  
    console.log(sumofEvenNumberSQuares);
    
    

