
   
        //ham tinh nam nhuan
        let laNamNhuan = (n)=>{
            
            if((n % 4 == 0 &&  n % 100 != 0) || n%400 == 0){
                return true;
            }
            return false;
        }

    //in nam nhuan giua 2 mov thoi gian
    let inNamNhuan = (a,b)=>{
        console.log('Cac nam nhuan giua ${a} va ${b} la:')
        for(let i = a; i <= b; i++){
            if(laNamNhuan(i)){
                console.log(i);
            }
        }
    }
    //Goi ham in nam nhuan 

    inNamNhuan(2001,2020);

    