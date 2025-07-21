import styles from './styles.module.css'; // Importa os estilos CSS específicos para o componente Container

type Containerprops = {
  children: React.ReactNode; // Permite que qualquer conteúdo React seja passado como filho para o componente
};

export function Container({ children }: Containerprops) {
  // Renderiza um elemento <div> estilizado, exibindo o conteúdo passado como filho
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
