export default function Home() {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.heartWrapper}>
                    <span style={styles.heart}>❤️</span>
                </div>

                <p style={styles.message}>
                    Amor, sei que hoje não tá sendo um dia fácil. Não quero te
                    irritar, só quero que você fique bem. Te amo.
                </p>

                <div style={styles.footerDecoration}>
                    <span style={styles.sparkle}>✨</span>
                    <span style={styles.sparkle}>🌸</span>
                    <span style={styles.sparkle}>✨</span>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#faf4f5", // Tom pastel suave e acolhedor
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        padding: "20px",
        boxSizing: "border-box",
    },
    card: {
        backgroundColor: "#ffffff",
        padding: "40px 30px",
        borderRadius: "24px",
        boxShadow: "0 10px 30px rgba(224, 150, 168, 0.15)",
        maxWidth: "420px",
        width: "100%",
        textAlign: "center",
        border: "1px solid #f2e2e5",
    },
    heartWrapper: {
        marginBottom: "20px",
    },
    heart: {
        fontSize: "56px",
        display: "inline-block",
        animation: "pulse 1.8s infinite ease-in-out",
    },
    message: {
        fontSize: "18px",
        lineHeight: "1.6",
        color: "#4a3e41",
        fontWeight: "500",
        margin: "0 0 24px 0",
    },
    footerDecoration: {
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        fontSize: "16px",
        opacity: 0.8,
    },
};

// Injeta a animação do coração diretamente no documento (evita precisar de arquivo .css)
if (typeof document !== "undefined") {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.15); }
      100% { transform: scale(1); }
    }
  `;
    document.head.appendChild(styleSheet);
}
