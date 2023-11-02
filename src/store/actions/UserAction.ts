const UserAction = {
    support(payload : any){
        return{
            type : 'add',
            payload
        };
    },
    oppose(){
        return{
            type : 'dec'
        };
    }
}

export default UserAction;
