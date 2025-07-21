import styles from './styles.module.css'; // Estilos do Heading

type HeadingProps = {
  children: React.ReactNode; // Aceita qualquer conteúdo React
};

// Componente que exibe children em um <h1> estilizado
export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
