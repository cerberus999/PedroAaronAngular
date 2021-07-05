export class CustomDate extends Date{

    feb: number =this.calcularBisiesto();
    mesesMax: number[] = [31,this.feb,31,30,31,30,31,31,30,31,30,31];
  
    public constructor(algo: any){
        super(algo);
    }

    public calcularEdad(date: string): string{
        var res: string = "";
        let hoy = new Date();
        let nac = new Date(date + " 01:00:00"); //00:00:00 considerado como dia anterior
        let edad = hoy.getFullYear() - nac.getFullYear();
        if(edad > 0){
            res = edad + " Años" + hoy.getFullYear() + nac.getFullYear();
        }else if(edad == 0){
            let diferenciaMeses = hoy.getMonth() - nac.getMonth();
            var max = (hoy.getMonth() - 1) == 0? 1 : hoy.getMonth()-1;
            max = this.mesesMax[max];
            var diferenciaDias =  hoy.getDate() - nac.getDate();
            if(diferenciaDias < 0){
            diferenciaMeses--;
            diferenciaDias = (max - nac.getDate()) + hoy.getDate();
            }
            res = diferenciaMeses + " Meses y " + diferenciaDias + " Dias"    
        }
        return res;
      }

    calcularEdadActual(): string{
        var res: string = "Hello";
        let hoy = new Date();
        var diffDias = hoy.getDate() - super.getDate();
        var diffMes = hoy.getMonth() - super.getMonth();
        var diffAnio = hoy.getFullYear() - super.getFullYear();
        if(diffDias < 0){
            diffMes = diffMes-1;
            diffDias = (this.mesesMax[hoy.getMonth()-1] + diffDias);
        }
        if(diffMes < 0){
            diffAnio = diffAnio - 1;
            diffMes = 12 + diffMes;
        }
        diffAnio = diffAnio < 0? 0 : diffAnio;
        res = diffAnio > 0? diffAnio + " años" : diffMes +  " meses y " + diffDias + " dias";
        return res;
    }
    
    calcularBisiesto(): number{
    var res: number = 28;
    const date: Date = new Date();
    if(date.getFullYear() % 4 && date.getFullYear() % 400){
        res = 29;
    }
    return res;
    }
}
    

