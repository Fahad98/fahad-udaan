import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Table,
    Row,
    Col,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
  } from "reactstrap";

class taskDetails extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            deleteModel: false,
        }
        this.toggleDeleteTask = this.toggleDeleteTask.bind(this);
    }

    toggleDeleteTask(){
        this.setState(prevState => ({
            deleteModel: !prevState.deleteModel
          }));
    }

    render(){
        const {task} = this.props.match.params;
        return(
            <div className="content">
                <Row>
                    <Col md={12}>
                        <Card>
                            <CardHeader>
                                <Row>
                                    <Col md={10}><CardTitle>{task}</CardTitle></Col>
                                    <Col md={2}><Button outline color="primary" size="sm" className="float-right" onClick={() => this.toggleDeleteTask()}>Delete</Button></Col>
                                    <Modal
                                        isOpen={this.state.deleteModel}
                                        toggle={this.toggleDeleteTask}
                                        className={this.props.className}
                                    >
                                        <ModalHeader toggle={this.toggleDeleteTask}>
                                        Delete Task?
                                        </ModalHeader>
                                        <ModalBody>
                                        <CardTitle>
                                            Are you sure to delete this Task permanently? 
                                        </CardTitle>
                                        </ModalBody>
                                        <ModalFooter>
                                        <hr></hr>
                                        <Button outline color="primary" onClick={()=>this.toggleDeleteTask()}>Confirm</Button>
                                        <Button outline color="danger" onClick={() => this.toggleDeleteTask()}>Cancel</Button>
                                        </ModalFooter>
                                    </Modal>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md={3}>
                                        <p>Number of workers: </p>
                                        <p>Admin:  </p>
                                        <p>Task Assigned: </p>
                                        <p>Frequency: </p>
                                    </Col>
                                    <Col md={6} className="float-left">
                                        <p>10</p>
                                        <p>Fahad Ahmed</p>
                                        <p>Aman, Mehul</p>
                                        <p>Yearly</p>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }

}
export default taskDetails;