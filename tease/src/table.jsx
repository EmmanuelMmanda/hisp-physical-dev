import propTypes from "prop-types";

const Table = (props) => {
  // method to fetch data
  const data = props.data;
  const HIvtestperformed = data.metaData.items.JSUnuftClqK.name;
  const HIVTestPositive = data.metaData.items.LV138qS9eCD.name;
  const HIVtestPositiverate = data.metaData.items.bD67D0kVEJQ.name;
  const PLHIVNewART = data.metaData.items.tsMR4m66ili.name;
  const PLHIVCurrentART = data.metaData.items.aLH7eJpIxvn.name;
  const AnimalRegion = data.metaData.items.zj9LoeErgkP.name;
  const FoodRegion = data.metaData.items.gwAcS6gaz7D.name;
  const dec22 = data.metaData.items["202212"].name;
  const jan23 = data.metaData.items["202301"].name;
  const feb23 = data.metaData.items["202302"].name;
  const mar23 = data.metaData.items["202303"].name;
  const apr23 = data.metaData.items["202304"].name;
  const may23 = data.metaData.items["202305"].name;

  console.log(
    HIvtestperformed,
    HIVTestPositive,
    HIVtestPositiverate,
    PLHIVNewART,
    AnimalRegion,
    FoodRegion,
    PLHIVCurrentART,
    dec22,
    jan23,
    feb23,
    mar23,
    apr23,
    may23
  );
  return (
    
    <table border="1">
      <thead>
        <tr>
          <th rowSpan="2"></th>
          <th colSpan="5">Animal Region</th>
          <th colSpan="5">Food Region</th>
        </tr>
        <tr>
          {/* <!-- animal sect --> */}
          <th>HIV Test Performed</th>
          <th>HIV Test Positive</th>
          <th>HIV Test Positivity rate %</th>
          <th>PLHIV current on ART</th>
          <th>PLHIV new on ART</th>
          {/* <!-- food section --> */}
          <th>HIV Test Performed</th>
          <th>HIV Test Positive</th>
          <th>HIV Test Positivity rate %</th>
          <th>PLHIV current on ART</th>
          <th>PLHIV new on ART</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>December 2022</td>
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
      </tbody>
    </table>
  );
};

Table.propTypes = {
    data: propTypes.object,
  };
export default Table;
