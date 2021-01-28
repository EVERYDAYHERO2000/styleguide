//first opportunity
const needWater = function () {
    if (document.getElementById("needWater")) {
        const a = document.getElementById("glueWeightId").value;
        const b = document.getElementById("concentrationId").value;
        const volumeOfLiquid = (+a*100)/ +b;
        console.log(volumeOfLiquid)
        let weightOfWater= volumeOfLiquid - +a;
        weightOfWater=weightOfWater.toFixed(2);
        console.log(weightOfWater);
        document.getElementById(" ").innerText= `You need to take ${weightOfWater} grams of water`
    } else {
        alert('Something goes wrong');
    }
};

//second opportunity
function needWater () {
//same like the first inside the {}
};

//third opportynity
const needWater = () => {
//same like the first inside the {}    
};

//fourth opportunity  
/* а как здесь? это вот вообще не понятно. Есть два аргумента, но с ними, получается, нельзя больше,
чем одну математическую операцию проводить? */
const needWater = new Function ('a','b'), {
    return  (+a*100) / +b - +a ;
};

needWater (document.getElementById("glueWeightId").value, document.getElementById("concentrationId").value);

console.log (needWater)
