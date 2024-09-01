//6
function faktoriyal(n){

    let baslangic=1

    for(let i=1;i<=n;i++){

        baslangic=baslangic*i
    }
    return baslangic;
}
console.log(faktoriyal(5));


//7
function eded(x,y){

    switch(true){

        case(x>0 && y<0):
        return(4*x+2*y+4)

        case(x>0 && y==0):
        return(2*x-y+3)

        case(x<0 && y>0):
        return(3*x+4*y+3)

        default:
            return("parametr duzgun daxil edilmeyib")


    }



}

console.log(eded(10,-1))

//8
function imtahanbali(bal){

    switch(true){

        case(bal>=91 && bal<=100):
        return("A")

        case(bal>=81 && bal<=90):
        return("B")

        case(bal>=71 && bal<=80):
        return("C")
        case(bal>=61 && bal<=70):
        return("D")
        case(bal>=51 && bal<=60):
        return("E")
        case(bal<51):
        return("kesildiniz")


        default:
            return("parametr duzgun daxil edilmeyib")


    }



}
console.log(imtahanbali(100))


