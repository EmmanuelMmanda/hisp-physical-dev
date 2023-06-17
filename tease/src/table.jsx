import propTypes from "prop-types";

const Table = (props) => {
  // method to fetch data
  const data = props.data;
  const dimensions = props.data.metaData.dimensions;
  const pe = dimensions["pe"];
  const ou = dimensions["ou"];
  const dx = dimensions["dx"];
  const rows = props.data.metaData.dimensions;

  console.log(rows);

  const getActualName = (id) => {
    const name = data.metaData.items;
    return name[id].name;
  };

  //   console.log(
  //     HIvtestperformed,
  //     HIVTestPositive,
  //     HIVtestPositiverate,
  //     PLHIVNewART,
  //     AnimalRegion,
  //     FoodRegion,
  //     PLHIVCurrentART,
  //     dec22,
  //     jan23,
  //     feb23,
  //     mar23,
  //     apr23,
  //     may23
  //   );
  return (
    <table border="1">
      <thead>
        <tr>
          <th rowSpan="2"></th>
          {ou.map((dim, index) => {
            return (
              <th colSpan="5" key={index}>
                {getActualName(dim)}
              </th>
            );
          })}
        </tr>
        <tr>
          {ou.map(() => {
            return dx.map((dx, index) => {
              return (
                <>
                  <th key={index}>{getActualName(dx)}</th>
                </>
              );
            });
          })}
        </tr>
      </thead>
      <tbody>
        {pe.map((period, index) => {
          return (
            <tr key={index}>
              <td>{getActualName(period)}</td>
              <td>84,222</td>
              <td>13,334</td>
              <td>17</td>
              <td>263,122</td>
              <td>3500</td>
              <td>4451</td>
              <td>5472</td>
              <td>12.4</td>
              <td>82047</td>
              <td>1940</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: propTypes.object,
};
export default Table;
