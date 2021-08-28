const Person = (props) => {
    const voteText = props.age >= 18 ? "please go vote!" : "you must be 18!";
  
    const hobbies = props.hobbies.map(h => <li key={h}>{h}</li>);
  
    return (
      <div>
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {props.name.slice(0, 6)}</li>
          <li>Age: {props.age}</li>
          <li>Hobbies:</li>
          <ul>
            {hobbies}
          </ul>
        </ul>
        <h3>{voteText}</h3>
      </div>
    );
  }