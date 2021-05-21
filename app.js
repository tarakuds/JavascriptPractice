const convertFahrToCelsius = (fahr)=>{
        if(typeof(n)== "number"){
        const conversion = (fahr - 32) * (5/9)
        console.log(conversion.toFixed(4))
        return conversion}
        else{
                console.log(`${fahr} is not a valid number but a ${typeof(fahr)}`)   
        }
}

convertFahrToCelsius([1,2,3])

const inputValue = document.querySelector("#fahrV").value


const checkYuGiOh = (n)=>{
        if(typeof(n)== "number"){
                for(var i=0; i<n; i++ ){
                        //console.log(i);
                        switch (i) {
                                case i/2:
                                        console.log("yu")
                                        break;
        
                                case i/3:
                                        console.log("gi")
                                        break;
                                case i/5:
                                        console.log("oh")
                                        break;
                                case (i/2 && i/5):
                                        console.log("yu-oh")
                                        break;
                                case (i/2 && i/3 && i/5):
                                        console.log("yu-gi-oh")
                                        break;
                                default:
                                        console.log(i)
                                        break;
                        }                
                }
        }else{
                console.log(`invalid parameter: ${n}`)
        }

    
}
checkYuGiOh(20)