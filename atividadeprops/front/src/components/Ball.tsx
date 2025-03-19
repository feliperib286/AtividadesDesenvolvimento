// 🔹 Componente Ball - Exibe cada número dentro de um círculo azul
const Ball: React.FC<{ number: number; onContextMenu?: (e: React.MouseEvent) => void }> = ({
    number,
    onContextMenu,
  }) => {
    const ballStyle: React.CSSProperties = {
      display: "inline-block",
      margin: "5px",
      padding: "10px",
      borderRadius: "50%", // Formato de bola
      backgroundColor: "#3498db", // Azul
      color: "#fff", // Texto branco
      fontSize: "18px",
      width: "40px",
      height: "40px",
      lineHeight: "40px",
      textAlign: "center",
      cursor: onContextMenu ? "pointer" : "default", // Cursor muda se houver evento de clique
    };
  
    return (
      <span style={ballStyle} onContextMenu={onContextMenu}>
        {number}
      </span>
    );
  };
  export default Ball