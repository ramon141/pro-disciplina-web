const classes = {
  areaNotification: {
    background: "#D9D9D9",
    borderRadius: "30px",
    padding: "12px 20px 20px 20px ",
    minHeight: 430,
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "33px",
    marginBottom: 15,
  },
  item: {
    backgroundColor: "#494B58",
    borderRadius: "12px",
    margin: "16px 0",
    minHeight: "76px",
    padding: "15px 10px 10px 20px",
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "13px",
    color: "#FFFFFF",
    lineHeight: "16px",
  },
};

export default function AreaNotifications() {
  return (
    <div style={classes.areaNotification}>
      <div style={classes.title}>Solicitações Respondidas</div>

      <div style={classes.item}>
        <div>Docente: Dennison Celio de Oliveira Carvalho - CFI</div>
        <div>Situação: Solicitação aceita</div>
      </div>
      <div style={classes.item}>
        <div>Docente: Savio Godinho - IEG</div>
        <div>Situação: Indicação Aceita</div>
      </div>
      <div style={classes.item}>
        <div>Docente: Socorro Vania - IEG</div>
        <div>Situação: Indicação Aceita</div>
      </div>
    </div>
  );
}
