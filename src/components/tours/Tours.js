import './Tours.css';

function Tours(props) {
    return (
        <>
            {
                props.data.map(m => {

                return(
                    <>
                        <h1> Name : {m.name} </h1>
                        <h1> Id : {m.id}</h1>
                        <p> Info : {m.info}</p>
                        <h2> Average :{m.price}</h2>
                        <img src={m.image} />

                    </>
                )
                })
            }
        </>
    );
}

export default Tours;