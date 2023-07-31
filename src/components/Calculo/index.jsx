import { useState } from 'react'
import Resultado from '../Resultado'
import styles from './Calculo.module.css'





const Calculo = () => {
const [peso, setPeso] = useState(0)
const [altura, setAltura] = useState(0)
const [imc, setIMC] = useState(0)

const Limpar = () => {
    setPeso(0)
    setAltura(0)
    setIMC(0)
}

const CalculaIMC = () => {
    const alturaEmMetros = altura / 100
    const imcCalculado = peso / (alturaEmMetros * alturaEmMetros)
    setIMC(imcCalculado)
}
    return (
        <div className={styles.calculo}>
            <div className={`${styles.form} d-flex justify-content-center align-items-center `}>
                <div className={styles.altura}>
                    <h2>Altura</h2>
                    <input type="text" placeholder='Sua altura' value={altura} onChange={e => setAltura(parseInt(e.target.value))}/>
                </div>
                <div className={styles.peso}>
                    <h2>Peso</h2>
                    <input type="text" placeholder='Seu peso' value={peso} onChange={e => setPeso(parseInt(e.target.value))}/>
                </div>
            </div>
            <button type="submit" className='btn btn-success m-4'  onClick={CalculaIMC}>CALCULAR</button>
            <button type="submit" className='btn btn-danger m-4' onClick={Limpar}>LIMPAR</button>
            <Resultado imc={imc} />
        </div>
        
    )
}

export default Calculo