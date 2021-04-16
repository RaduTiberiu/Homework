function capitalizedString(sentence) {
    let separatedSentence = sentence.toLowerCase().split(' ');
    for (var i = 0; i < separatedSentence.length; i++) {
        separatedSentence[i] = separatedSentence[i].charAt(0).toUpperCase() + separatedSentence[i].substring(1);
    }
    return separatedSentence.join(' ');
}

console.log(capitalizedString('in acEAsta pRopoZitie fIeCare cuVant este sCRis cU maJuScula'));