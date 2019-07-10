import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Button
} from "reactstrap";
import './TaskLists.css';
import dataSet from '../../variables/data.jsx';
import {Link} from 'react-router-dom';

const thead = ["Asset","Created At", "Worker Assigned", "Action"];
class RegularTables extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      simulations:[]
    };
  }
  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h2">Tasks</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr className="tableTitle">
                      {thead.map((prop, key) => {
                        if (key === thead.length - 1)
                          return (
                            <th key={key} className="text-right">
                              {prop}
                            </th>
                          );
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {dataSet.map(data=>{
                        return(
                            <tr>
                                <td className="text-left">
                                    {data.name}
                                </td>
                                <td className="text-left">
                                {data.CreatedAt}
                                </td>
                                <td className="text-left">
                                {data.worker}
                                </td>
                                <td className="text-right">
                                    <Link to={"/Taskdetails/" + data.name}><Button outline color="primary" size="sm">Details</Button></Link>
                                </td>
                            </tr>
                        );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegularTables;
