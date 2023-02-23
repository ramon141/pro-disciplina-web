const classes = {
  lblDemands: {
    fontFamily: "Comfortaa",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "36px",
  },
  item: {
    backgroundColor: "#D9D9D9",
    margin: "14px 0",
    padding: "10px 20px",
    borderRadius: 15,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
};

const Item = ({ course, discipline, institute }) => (
  <div style={classes.item}>
    <div style={classes.row}>
      <span>
        <b>Curso:</b>
      </span>
      <span>{course}</span>
    </div>

    <div style={classes.row}>
      <span>
        <b>Disciplina:</b>
      </span>
      <span>{discipline}</span>
    </div>

    <div style={classes.row}>
      <span>
        <b>Instituto:</b>
      </span>
      <span>{institute}</span>
    </div>
  </div>
);

export default function Demands() {
  return (
    <div>
      <span style={classes.lblDemands}>Demandas Recentes</span>

      <div style={{ height: 213, overflow: "auto" }}>
        <Item
          course="Ciência da Computação"
          discipline="Cálculo I"
          institute="IEG"
        />

        <Item
          course="Sistemas de Informação"
          discipline="Cálculo II"
          institute="IEG"
        />
        <Item
          course="Sistemas de Informação"
          discipline="Cálculo II"
          institute="IEG"
        />
        <Item
          course="Sistemas de Informação"
          discipline="Cálculo II"
          institute="IEG"
        />
        <Item
          course="Sistemas de Informação"
          discipline="Cálculo II"
          institute="IEG"
        />
      </div>
    </div>
  );
}
