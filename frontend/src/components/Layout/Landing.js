import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Landing extends Component {
    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }


    render() {
        return (
            <div className="landing "
>
                <div className="light-overlay landing-inner  text-dark">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4 ">
                                    Добредојдовте
                                </h1>
                                <p className="lead">
                                    Креирајте ваша сметка или најавете се за да ги видите вашите работни задачи или да ги направите
                                </p>
                                <hr/>
                                <Link className="btn btn-lg bg-success text-white mr-2" to="/register">
                                    Регистрирајте се
                                </Link>
                                <Link className="btn btn-lg btn-secondary bg-primary mr-2" to="/login">
                                    Најавете се
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Landing.propTypes = {
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(mapStateToProps)(Landing);
