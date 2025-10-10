import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Mi Sitio Web — Todos los derechos reservados.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "15px 0",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  text: {
    margin: 0,
    fontSize: "14px",
  },
};

export default Footer;
 