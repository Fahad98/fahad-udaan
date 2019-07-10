import React from "react";
import { Card, CardHeader, CardBody, CardTitle,  Row, Col, Input } from "reactstrap";
import Button from "../../components/CustomButton/CustomButton.jsx";
import Axios from 'axios';
import './NewTask.css';

class newTask extends React.Component {

   constructor(props){
       super(props);
       this.state={
            taskName: "",
            taskType: "",
            workerName: "",
            adminName: "",
       };
   }

  render() {
    return (
      <div className="content">
        <Row>
          <Col md={12} xs={12} sm={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>New Task</CardTitle>
              </CardHeader>
              <CardBody>
                <form>
                  <label className="label">Task Name</label><br></br>
                    <input  className="fields" type="text" placeholder="Enter Task Name" ncols={["col-md-12"]} value={this.state.taskName} onChange= {e => this.setState({ type: e.target.value })}></input>
                  <label className="label">Task Type</label><br></br>
                    <input  className="fields" type="text" placeholder="Enter Task Type" ncols={["col-md-12"]} value={this.state.taskType} onChange= {e => this.setState({ type: e.target.value })}></input>
                  <label className="label">Image</label><br></br>
                    <Row>
                      <Col md={6}><Input type="file"></Input></Col>
                    </Row>
                    <br></br>
                  <label className="label">Admin</label><br></br>
                    <input  className="fields" type="text" placeholder="Enter Admin's Name" ncols={["col-md-12"]} value={this.state.adminName} onChange= {e => this.setState({ type: e.target.value })}></input>
                  <label className="label">Enter Worker's Name</label><br></br>
                    <input  className="fields" type="text" placeholder="0" ncols={["col-md-12"]} value={this.state.workerName} onChange= {e => this.setState({ type: e.target.value })}></input>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button outline color="primary" size="sm">Save Task</Button>
                    </div>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default newTask;
