import {IconType} from "react-icons"
type icone = {
    Icone: IconType
}
import styles from "./Icones.module.css"

const Icones = ({Icone} : icone) => {
  return (
    <>
      <ul className={styles.redes}>
        <li>
          <Icone/>
        </li>
      </ul>
    </>
  );
};

export default Icones;
