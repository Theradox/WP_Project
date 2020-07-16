import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteProject} from "../../actions/projectActions";
import BootBox from 'react-bootbox';


class ProjectItem extends Component {
    onDeleteClick = id => {
        this.props.deleteProject(id);
    };

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleClose = () => {
        this.setState({show: false})
    };

    render() {
        const {project} = this.props;
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">Project ID: {project.projectIdentifier}</span>


                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{project.projectName}</h3>
                            <p>{project.description}</p>
                            <br/>
                                <div className="alert alert-dark "><i >Start date: </i>{project.start_date}</div>
                            <div className="alert alert-warning"><i>Due date: </i>{project.end_date}</div>

                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <Link to={`/projectBoard/${project.projectIdentifier}`}>
                                    <li className="list-group-item board  ">
                                        <i className="fa fa-flag-checkered pr-1 text-success"> Project Board </i>
                                    </li>
                                </Link>
                                <Link to={`/updateProject/${project.projectIdentifier}`}>
                                    <li className="list-group-item update">
                                        <i className="fa fa-edit pr-1 text-success"> Update Project Info</i>
                                    </li>
                                </Link>

                                {/*<li*/}
                                {/*  className="list-group-item delete"*/}
                                {/*  onClick={this.onDeleteClick.bind(*/}
                                {/*    this,*/}
                                {/*    project.projectIdentifier*/}
                                {/*  )}*/}
                                {/*>*/}

                                <li
                                    className="list-group-item delete"
                                    onClick={() => {
                                        this.setState({show: true})
                                    }}
                                >
                                    <i className="fa fa-minus-circle pr-1"> Delete Project</i>
                                </li>

                                <BootBox
                                    message="Are you sure you want to delete this project?"
                                    onYesClick={this.onDeleteClick.bind(this, project.projectIdentifier)}
                                    show={this.state.show}
                                    onNoClick={this.handleClose}
                                    onClose={this.handleClose}
                                />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProjectItem.propTypes = {
    deleteProject: PropTypes.func.isRequired
};

export default connect(
    null,
    {deleteProject}
)(ProjectItem);
