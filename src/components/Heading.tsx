import styles from './Heading.module.css'; // Importa os estilos CSS específicos para o componente Heading

// Define o tipo das props do componente Heading.
// Aqui, 'children' é tipado como React.ReactNode, permitindo qualquer conteúdo React (texto, elementos, fragmentos, etc).
type HeadingProps = {
  children: React.ReactNode; // Tipagem flexível para aceitar qualquer tipo de filho React
};

// Componente funcional Heading, que recebe 'children' como propriedade tipada.
// Retorna um elemento <h1> estilizado, exibindo o conteúdo passado como filho.
export function Heading({ children }: HeadingProps) {
  // Renderiza o <h1> com a classe CSS definida e o conteúdo recebido via props
  return <h1 className={styles.heading}>{children}</h1>;
}
