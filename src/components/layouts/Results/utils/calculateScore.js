const calculateScore = (firstCollection=[], secondCollection=[]) => {
    let score = 0;
    
    if(!(firstCollection.length === secondCollection.length)) return undefined;

    for(let i=0; i<firstCollection.length;i++){
        if(firstCollection[i]===secondCollection[i]){
            score = score+1;
        }
    }

    return score;
}

export default calculateScore;