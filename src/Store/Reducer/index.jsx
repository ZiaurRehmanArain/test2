const initalState={
    count  : 0,
    user:[
        {
            name: 'zia',
            password:'test'
        },
    ]
}

export default (state=initalState,action)=>{
    console.log(action)

    switch(action.type){
        case 'inc':
            return {
            state: state.count+1
            }

    }

}