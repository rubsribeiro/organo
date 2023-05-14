import "./Time.css"

const Time = (props) => {

    const background = {backgroundColor: props.corSecundaria};
    const border = {borderColor: props.corPrimaria};

    return (
        <section className="time" style={background}>
            <h3 style={border}> {props.nome} </h3>
        </section>
    )
}

export default Time;