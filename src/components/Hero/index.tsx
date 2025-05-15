// import styles from './Hero.module.css'

// const Hero = () => (
//   <form className={styles.form}>
//     <div className="container">
//       <h2 className={styles.heroTitle}>
//         As melhores vagas para tecnologia, design e artes visuais.
//       </h2>
//     </div>
//   </form>
// )

import { FORM, H2 } from './styles'

const Hero = () => (
  <FORM>
    <div className="container">
      <H2>As melhores vagas para tecnologia, design e artes visuais.</H2>
    </div>
  </FORM>
)

export default Hero
