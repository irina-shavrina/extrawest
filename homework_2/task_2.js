export const openOrSenior = (informationAboutMember) => {
    const resultCategories = [];
    for(let i = 0; i < informationAboutMember.length; i++){
        for(let j = 0; j < 2; j++){
            if(informationAboutMember[i][0]<40 && informationAboutMember[i][1]<15){
                resultCategories.push("Open");
            }
                resultCategories.push("Senior");
    }
    return resultCategories;
}
}