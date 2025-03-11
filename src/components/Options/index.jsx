import './style.css'


const optList = ['CATEGORIAS', 'FAVORITOS', 'MINHAS ESTANTE']

const Options = () => {
    return (

        <ul className='options'>
            {optList.map((option) => (
                <li className='option'><p>{option}</p></li>
            ))}
        </ul>

    )
}

export default Options