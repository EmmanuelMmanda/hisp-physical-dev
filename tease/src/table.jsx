import propTypes from "prop-types";

const Table = (props) => {
  // method to fetch data
  const data = props.data;
  const dimensions = data.metaData.dimensions;
  const pe = dimensions["pe"];
  const ou = dimensions["ou"];
  const dx = dimensions["dx"];
  const rowsData = data.rows;

  const getActualName = (id) => {
    const name = data.metaData.items;
    return name[id].name;
  };

  const getActualValue = (iData, data, period, organizationunit) => {
    iData.map((row) => {
      row.map((items) => {});
    });
    return (
      <>
        {
          <>
            <td>5544</td>
            <td>13,334</td>
            <td>17</td>
            <td>263,122</td>
            <td>3500</td>
            <td>5544</td>
            <td>13,334</td>
            <td>17</td>
            <td>263,122</td>
            <td>3500</td>
          </>
        }
      </>
    );
  };

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
              return <th key={index}>{getActualName(dx)}</th>;
            });
          })}
        </tr>
      </thead>
      <tbody>
        {pe.map((period, index) => {
          return (
            <tr key={index}>
              <td>{getActualName(period)}</td>
              {/* actual data */}
              {getActualValue(rowsData, period, "")}
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
