
const fact = (n) => {
    let acum = 1;

    for(let i=1; i<=n; i++){
        acum*=i;
    }

    return acum;
}

const suma = (sumar) =>{
    sumar(2,3);
}


function sumar(n1,n2){
    console.log(n1*n2);
}

suma(sumar);