      case(x>0 &&y<0):
        return(4*x+2*y+4)

        case(x>0 && y==0):
        return(2*x-y+3)

        case(x<0 &&y>0):
        return(3*x+4*y+3)

        default:
            return("parametr duzgun daxil edilmeyib")


    }



}
console.log(faktoriyal(5,3))

