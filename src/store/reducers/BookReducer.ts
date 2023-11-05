const InitBook = {
    bookName: 'mysql优化',
    useDate: 16
}

const BookReducer = (state = InitBook,action:{type:string,val:number}) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type){
        case "add":
            newState.useDate += 1;
            break;
        case "add2":
            newState.useDate += action.val;
            break;
        default:
    }
    return newState;
}

export default BookReducer
