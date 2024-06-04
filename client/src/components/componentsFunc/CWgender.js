const CWgender = ({worker}) => {
    let ge=''
    switch (worker.gender){
        case 0:
            ge = 'Не указан'
            break;
        case 1:
            ge = 'Мужской'
            break;
        case 2:
            ge = 'Женский'
            break;

    }
    return (ge)
};

export default CWgender;