const CWworkE = (work_e) => {
    let wo=''

    switch (work_e) {
        case 0:
            wo = 'Не имеет значения'
            break;
        case 1:
            wo = 'До 1 года'
            break;
        case 2:
            wo = 'От 1 года'
            break;
        case 3:
            wo = 'От 2 лет'
            break;
        case 4:
            wo = 'От 3 лет'
            break;
        case 5:
            wo = 'От 5 лет'
            break;
    }
    return (wo);
};

export default CWworkE;