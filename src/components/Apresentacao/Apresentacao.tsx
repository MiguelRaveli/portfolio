import styles from "../../routes/Home.module.css";
import { Link } from "react-router-dom";
interface ApresentacaoProps {
  titulo: string;
  p1: string;
  p2?: string;
  p3?: string;
  link: string;
}
const Apresentacao = ({
  titulo,
  p1,
  p2 = "",
  p3 = "",
  link,
}: ApresentacaoProps) => {
  
  return (
    <div className={styles.apresentacao}>
      <h1>{titulo}</h1>
      <p>{p1}</p>
      {p2 && <p>{p2}</p>}
      {p3 && (
        <p>
          <Link to={link}>{p3}</Link>{" "}
        </p>
      )}
    </div>
  );
};
export default Apresentacao;
