const Resultado = ({ imc }) => {
    return (
        <div className="bg-warning p-4 rounded mt-5 text-center text-light">
            <h1>SEU IMC É: {imc.toFixed(1)}</h1>
        </div>
    )
}

export default Resultado