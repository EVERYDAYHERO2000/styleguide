
const Calculator = class {

    options = {
        period    : 12,      //период (количество месяцев)
        ndfl      : 13,      //НДФЛ (%)   
        ops       : 22,      //Пенсионное страхование (%)
        opsMax    : 1150000, //Предельная величина дохода для пенсионного страхования (руб)
        ops2      : 10,      //Пенсионное страхование свыше предельной величины (%)  
        oms       : 5.1,     //Медицинское страхование (%)
        omsMax    : 865000,  //Предельная величина дохода для медицинского страхования (руб)   
        oms2      : 5.1,     //Медицинское страхование свыше предельной величины (%)  
        fss       : 2.9,     //Социальное страхование (%)     
        insurance : 0.2,     //Страховка (%)
        dollar    : 74       //Курс доллара (руб)
    }

    result = {
        gross              : null, //до вычета налогов
        grossPerPeriod     : null, //до вычета налогов за период
        net                : null, //после вычета налогов
        netPerPeriod       : null, //после вычета налогов за период
        ops                : null, //пенсионное страхование
        opsPerPeriod       : null, //пенсионное за период
        oms                : null, //медицинское страхование
        omsPerPeriod       : null, //медицинское страхование за период
        fss                : null, //социальное страхование 
        fssPerPeriod       : null, //социальное страхование за период
        insurance          : null, //страховка
        insurancePerPeriod : null, //страховка за период
        ndfl               : null, //НДФЛ
        ndflPerPeriod      : null, //НДФЛ за период
        fot                : null, //страховая часть
        fotPerPeriod       : null, //страховая часть за период
        nalogAll           : null, //все налоги
        nalogAllPerPeriod  : null, //все налоги за период
        fullCost           : null, //вся стоимость
        fullCostPerPeriod  : null  //вся стоимость за период
    }

    /*
      value - значение (руб.)
      type - [gross - до налогов, net - на руки]
      period - количество месяцев
    */
    constructor ( value, type, period ){

        this.calc( value, type, period );

        return this;

    }

    calc ( value, type, period ){ 

        value = value || 0;
        type = type || 'gross';

        this.options.period = period || this.options.period;

        if ( type == 'gross' ) {
            this.result.gross = value;
            this.result.net = Unit( value - ( Percentage( value, this.options.ndfl ) ) );

        } else if ( type == 'net' ) {
            this.result.net = value;
            this.result.gross = Unit( value + ( Percentage( value, this.options.ndfl ) ) );

        }
            
        this.result.netPerPeriod       = Unit( this.result.net * this.options.period );
        this.result.grossPerPeriod     = Unit( this.result.gross * this.options.period );
            
        this.result.ops                = Unit( Percentage( value, this.options.ops ) );
        this.result.opsPerPeriod       = Unit( maxOnPeriod( this.result.grossPerPeriod, this.options.opsMax, this.options.ops, this.options.ops2 ) );
            
        this.result.oms                = Unit( Percentage( value, this.options.oms ) );
        this.result.omsPerPeriod       = Unit( maxOnPeriod( this.result.grossPerPeriod, this.options.omsMax, this.options.oms, this.options.oms2 ) );
            
        this.result.fss                = Unit( Percentage( value, this.options.fss ) );
        this.result.fssPerPeriod       = Unit( this.result.fss * this.options.period );
            
        this.result.insurance          = Unit( Percentage( value, this.options.insurance ) );
        this.result.insurancePerPeriod = Unit( this.result.insurance * this.options.period );
            
        this.result.ndfl               = Unit( Percentage( value, this.options.ndfl ) );
        this.result.ndflPerPeriod      = Unit( this.result.ndfl * this.options.period );
            
        this.result.fot                = Unit( this.result.ops + this.result.oms + this.result.fss + this.result.insurance );
        this.result.fotPerPeriod       = Unit( this.result.fot * this.options.period );
            
        this.result.nalogAll           = Unit( this.result.ops + this.result.oms + this.result.fss + this.result.insurance + this.result.ndfl );
        this.result.nalogAllPerPeriod  = Unit( this.result.opsPerPeriod + this.result.omsPerPeriod + this.result.fssPerPeriod + this.result.insurancePerPeriod + this.result.ndflPerPeriod );
        
        this.result.fullCost           = Unit( this.result.nalogAll + this.result.net );
        this.result.fullCostPerPeriod  = Unit( this.result.opsPerPeriod + this.result.omsPerPeriod + this.result.fssPerPeriod + this.result.insurancePerPeriod + this.result.ndflPerPeriod + this.result.netPerPeriod );
            

        function maxOnPeriod( grossPerPeriod, max, percentageOnMin, percentageOnMax ){
            return ( grossPerPeriod < max ) ? Percentage( grossPerPeriod, percentageOnMin ) : Percentage( max, percentageOnMin ) + Percentage( ( grossPerPeriod - max ), percentageOnMax );
        }
        
        function onePercent( value ){
            return value / 100;  
        }
          
        function Percentage( from, percentage ){
            return onePercent( from ) * percentage;
        }

        function Unit(value){
            return +( value ).toFixed(2);
        }

        return this;

    }    

    convert () {

        let result = JSON.parse( JSON.stringify( this.result ) );

        for ( let value in result ) {

            result[value] = +( result[value] / this.options.dollar ).toFixed(2);

        }

        return result;

    }


} 

export default Calculator;
