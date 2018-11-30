
let N=prompt('Введите число');
var arr=[];
for (let i = 2; i < (+N+1); i++) {
   
    if (parseInt(N) > 1)
    {
        var isSimple = true;
        for (let j = 2; j < i; j++) {
            if ((i%j)===0){
                isSimple=false
            }
            
        }
        if (isSimple){
            arr.push(i);
            console.info(i);   
        }
    }
}

alert('простые числа '+arr);