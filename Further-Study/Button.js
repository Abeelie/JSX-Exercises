const Button = (props) => {
    return(
        <div className="container">
           <button type="button" className="btn btn-primary">
               {props.name}
            </button>
        </div>
    )
}