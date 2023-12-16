export function chooseAvatar(gender) {

    let path = ''
    switch (gender) {
        case 'male':
            path = 'images/maleAvatar.jpg'
            break;
            case 'female':
            path = 'images/femaleAvatar.jpg'
            break;
            case 'gender':
                path = 'images/noneAvatar.jpg'
            break;
    
    }
    return path;
}