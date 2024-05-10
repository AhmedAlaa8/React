
type Heder = {
    text: string;
}

function Pub(props: Heder) {
    return (
        <div>{props.text}</div>
    )
}

export default Pub;