import { FormEvent, useState } from 'react'

// import styles from './FormVagas.module.css'




// ------ CODIGO INSERIDO -------- //
import { Form, CAMPO, FORM, BOTAO } from './styles'
// ------------------------------- //





type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  // ------ CODIGO MODIFICADO -------- //
  return (
    <FORM> className={styles.form} onSubmit={aoEnviarForm}>
      <CAMPO
        className={styles.campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BOTAO className={styles.btnPesquisar} type="submit">
        Pesquisar
      </BOTAO>
    </FORM>
  )

  // ------------------------------- //
}
export default FormVagas
