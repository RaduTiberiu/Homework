function income(sentence) {
    let splitSentence = sentence.split(' ');
    let sum = 0;
    for(i = 0; i < splitSentence.length; i++) {
        let venitLeiLuna = !isNaN(splitSentence[i]) && splitSentence[i+1] === 'lei/luna';
        let venitLeiAn = !isNaN(splitSentence[i]) && splitSentence[i+1] === 'lei/an';
        let venitEuroLuna = !isNaN(splitSentence[i]) && splitSentence[i+1] === 'euro/luna';
        let venitUsdLuna = !isNaN(splitSentence[i]) && splitSentence[i+1] === 'usd/luna';
        let venitNumConv = Number(splitSentence[i]);

        if(venitLeiLuna) sum += venitNumConv * 12;
        if(venitLeiAn) sum += venitNumConv;
        if(venitEuroLuna) sum += (venitNumConv * 12) * 4.8;
        if(venitUsdLuna) sum += (venitNumConv * 12) * 4.3;
    }
    
    console.log(`Venitul total anual al lui ${splitSentence[0]} este de ${sum} lei.`);
};

income('Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing.');
income('John castiga 1000 euro/luna din salariu, 9000 lei/an bonus si 1000 usd/luna din freelancing.');