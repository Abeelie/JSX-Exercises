const Tweet = (props) => {
    return (
        <div>
          <p>Name: {props.name}</p>
          <p>Username: @{props.username}</p> 
          <p>Date: {props.date}</p>
          <p>Message: {props.message}</p>
        </div>
    );
}