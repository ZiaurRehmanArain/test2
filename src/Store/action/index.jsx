const inc=()=>{
    return (dispatch)=>{
        dispatch({
            type:'inc'
        })
    }
}

export {increment}