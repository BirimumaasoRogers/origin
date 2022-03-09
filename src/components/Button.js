const Button = () => {
    const onClick = () => {
        console.log('Click')
    }
    return ( < button onClick = { onClick }
        className = 'btn' > Add < /button>
    )
}

export default Button