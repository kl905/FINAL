const Cstudy = ({company}) => {
    let st=''
    switch (company.study){
        case 0:
            st = 'Любое'
            break;
        case 1:
            st = 'Не нужно'
            break;
        case 2:
            st = 'Общее среднее'
            break;
        case 3:
            st = 'Не полное высшее'
            break;
        case 4:
            st = 'Высшее'
            break;

    }
    return (st)
};

export default Cstudy;