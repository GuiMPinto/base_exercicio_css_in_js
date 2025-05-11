// ----  Sem Styled Component ---- //
// import styles from './Cabecalho.module.css'

// const Cabecalho = () => (
//   <header className={styles.Cabecao}>
//     <h1>EBAC Jobs</h1>
//   </header>
// )

//export default Cabecalho

// ----  Com Styled Component ---- //

import { Cabeca } from './styles'

const Cabecalho = () => (
  <Cabeca>
    {' '}
    <h1>EBAC Jobs</h1>{' '}
  </Cabeca>
)

export default Cabecalho
