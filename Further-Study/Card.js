const Card = (props) => {
    return (
        <div className="card">
          <img src={props.src} 
               className="card-img-top" 
               alt="image">  
          </img>
           <div className="card-body text-center">
              <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                  {props.content}
                </p>
                <a href="/" className="btn btn-primary">{props.name}</a>
            </div>
        </div>
    )
}