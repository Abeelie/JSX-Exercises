const App = () => {
  return (
    <div>
        <Tweet
        name = "Kayne West"
        username = "K-west"
        date = {new Date().toDateString()}
        message = "Buy my album"
        />
        <Tweet
        name = "Jay-Z"
        username = "Jazzy"
        date = {new Date().toDateString()}
        message = "Buy my album"
        />
        <Tweet
        name = "Beyonce"
        username = "B"
        date = {new Date().toDateString()}
        message = "Buy my album"
        />
    </div>
    )
}