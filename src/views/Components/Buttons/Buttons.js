import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBlock,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from "reactstrap";

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6"  style={{'float': 'none', 'margin': '0 auto'}}>
            <Card>
              <CardHeader>
                <strong>Create Shop</strong>
              </CardHeader>
              <CardBlock className="card-body">
                <Form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="ccmall">Mall</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="ccmall" id="ccmall">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="NAME"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Shop Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Shop Name"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="password"
                        id="text-input"
                        name="text-input"
                        placeholder="Password"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Shop No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        placeholder="Shop No"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Floor No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        placeholder="Floor No"
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">Pick Image</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                <FormGroup row>
                  <Col md="3"><Label>Categories</Label></Col>
                  <Col md="9">
                    <FormGroup check>
                      <div className="checkbox">
                        <Label check htmlFor="checkbox1">
                          <Input type="checkbox" id="checkbox1" name="checkbox1" value="option1" /> Beauty & health Care
                          </Label>
                      </div>
                      <div className="checkbox">
                        <Label check htmlFor="checkbox2">
                          <Input type="checkbox" id="checkbox2" name="checkbox2" value="option2" /> Beauty & health Care
                          </Label>
                      </div>
                      <div className="checkbox">
                        <Label check htmlFor="checkbox3">
                          <Input type="checkbox" id="checkbox3" name="checkbox3" value="option3" /> Fashin Accessories
                          </Label>
                      </div>
                      <div className="checkbox">
                        <Label check htmlFor="checkbox3">
                          <Input type="checkbox" id="checkbox3" name="checkbox3" value="option3" /> Fast Food
                          </Label>
                      </div>
                    </FormGroup>
                  </Col>
                </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Sub Category</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Sub Category"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Google Map</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Google Map"
                      />
                    </Col>
                  </FormGroup>
             
                </Form>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="primary">
                  <i className="fa fa-dot-circle-o" /> Submit
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Buttons;