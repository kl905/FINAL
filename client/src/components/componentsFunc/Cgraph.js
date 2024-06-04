
const Cgraph = (graph) => {
    let gr=''
    switch (graph){
        case 0:
            gr = 'Не указан'
            break;
        case 1:
            gr = 'Удалённая работа'
            break;
        case 2:
            gr = 'Полный день'
            break;
        case 3:
            gr = 'Сменный график'
            break;
        case 4:
            gr = 'Вахтовый метод'
            break;
        case 5:
            gr = 'Гибкий график'
            break;
    }
    return (gr)
};

export default Cgraph;