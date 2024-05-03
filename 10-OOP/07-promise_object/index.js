
const promiseRequest = () => {
    return new Promise((resolve, reject)=>{

            if (true){
                resolve("Yay!")
            }
            else{
                reject("Nah!")
            }
     
    })
}
promiseRequest()
.then((res) => console.log(res))
.catch((err) => console.log(err));
