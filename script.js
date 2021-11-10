function tabuada(){
    num = document.getElementById('txtnum');
    tab = document.getElementById('seltab');
    n = Number(num.value);

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!');
    } else {
    tab.innerHTML = '';
    for(var i = 0 ; i <= 10 ; i++){
        var mult = i * n;
        var item = document.createElement('option');
        item.text = `${i} x ${n} = ${mult} `;
        tab.appendChild(item);
    }
}
}