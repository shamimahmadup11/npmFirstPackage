
const Add = (Arr)=>{
    let sum = 0;
    Arr.forEach(element => {
        sum+=element;
    });
    console.log("Sum is :",sum);
}

const Maximun_number = (Arr)=>{
    let maxi = -1e9;
    Arr.forEach((ele)=>{
        if(maxi<ele){
            maxi=ele;
        }
    });
    console.log("Maimum Number : ",maxi);
}
const Minimum_number = (Arr)=>{
    let mini = 1e9;
    Arr.forEach((ele)=>{
        if(mini>ele){
            mini=ele;
        }
    });
    console.log("Minimum Number : ",mini);
}

const product =(Arr)=>{
    let pro = 1;
    Arr.forEach(element => {
        pro*=element
    });
    console.log("Product of Array is :",pro);
}

module.exports = {Add,product,Minimum_number,Maximun_number};



