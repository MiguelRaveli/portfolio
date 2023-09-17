import styles from "./Projetos.module.css";
type projetos = {
  titulo?: string;
  projetos: string
};
const Projetos = ({ titulo, projetos }: projetos) => {
  return (
    <div className={styles.projetos}>
      <h2>{titulo}</h2>
      <div className={styles.nome_projetos}>
        <h3>
          {projetos}
        </h3>
      </div>
    </div>
  );
};

export default Projetos;
