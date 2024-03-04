const textarea = document.querySelector('#textarea');
const button = document.querySelector('#count');
const output = document.querySelector('.output');

button.addEventListener('click', () => {
    if(textarea.value === ''){
        output.innerHTML = 'Please enter some text';
    }
    else{
        //FOE VOWELS: {a,e,i,o,u}
        const val = textarea.value;
        let c=0;
        for(let i=0;i<val.length;i++){
            if(val[i] === 'a' || val[i] === 'e' || val[i] === 'i' || val[i] === 'o' || val[i] === 'u'){
                c++;
            }
        }
        output.innerHTML = `The number of Vowels are: ${c}`;
    }
});