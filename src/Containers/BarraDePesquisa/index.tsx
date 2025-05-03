import FiltroCard from '../../components/FiltroCard'
import { Campo } from '../../styles'
import { Div, Filtros } from './styles'

const BarraDePesquisa = () => {
  return (
    <aside>
      <Div>
        <Campo type="text" placeholder="Buscar Contato" />
        <Filtros>
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
        </Filtros>
      </Div>
    </aside>
  )
}

export default BarraDePesquisa
