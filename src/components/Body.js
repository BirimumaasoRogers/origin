const Body = ({tasks}) => {
    return ( 
    <div className = 'task' >
        <h3>{tasks.name}</h3>
        <h3>{tasks.task}</h3>
        <h3>{tasks.day}</h3>
    </div>
    )
}

export default Body