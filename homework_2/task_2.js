export const openOrSenior = (informationAboutMember) => {
    const resultCategories = [];
    for(let i = 0; i < informationAboutMember.length; i++){
        if(informationAboutMember[i][0]>40 && informationAboutMember[i][1]>15){
            resultCategories.push("Senior");
            continue;
        }
        resultCategories.push("Open");
    }
    return resultCategories;
}