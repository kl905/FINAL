const CWfind = ({worker}) => {
    let fi=''

    switch (worker.statusF) {
        case 0:
            fi = ' Без статуса'
            break;
        case 1:
            fi = ' Активно ищет работу'
            break;
        case 2:
            fi = ' Рассматривает предложения'
            break;
        case 3:
            fi = ' Не ищет работу'
            break;
        case 4:
            fi = ' Вышел на новое место'
            break;

    }
    return (fi);
};

export default CWfind;