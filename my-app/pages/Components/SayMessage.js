

// Intro into props, here it's taking 2 props, the msg and 
export default function SayMessage(props) {
    return (
        <>
            <p>{props.msg}{props.exclamation}</p>
        </>
    )
}

// Handles the situation that occurs with missing or empty properties
SayMessage.defaultProps = {
    msg: "Hello World!",
    exclamation: "!"
}