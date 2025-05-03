import { useDispatch } from 'react-redux'
import { Campo } from '../../styles'
import { Div } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const BarraDePesquisa = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <aside>
      <Div>
        <Campo
          type="text"
          placeholder="Buscar Contato"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
      </Div>
    </aside>
  )
}

export default BarraDePesquisa
