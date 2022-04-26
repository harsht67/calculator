function Key(props) {
  
    const inputFunc = (e) => {
        let val = e.target.getAttribute('data-val')

        if(val=='0'||val=='1'||val=='2'||val=='3'||val=='4'||val=='5'||val=='6'||val=='7'||val=='8'||val=='9') {
            val = parseInt(val)
        }
        
        props.inputFunc(val)
    }

    return(
        <button
        data-val={props.n}
        onClick={inputFunc}
        >
        {props.n}
        </button>
    )
}

export default Key