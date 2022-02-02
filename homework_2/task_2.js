const workExperienceForSenior = 15;
const yearsOldForSenior = 40;
export const openOrSenior = (informationAboutMember) => {
    const resultCategories = [];
    for(let i = 0; i < informationAboutMember.length; i++){
        if(informationAboutMember[i][0] > yearsOldForSenior && informationAboutMember[i][1] > workExperienceForSenior){
            resultCategories.push("Senior");
            continue;
        }
            resultCategories.push("Open");
    }
    return resultCategories;
}