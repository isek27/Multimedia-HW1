import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
            return [
                <li key="2" style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
                <li key="3"><a href="/api/logout">Logout</a></li>
            ];
        }
    }

    renderHomeworks() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={"/"}
                        className="left brand-logo"
                        style={{marginLeft: '10px'}}
                    >
                        CSS 490: Multimedia
                    </Link>
                    <ul className="right">
                        <li key="1"><Link to={"/homework1"}>Homework 1</Link></li>,
                    </ul>
                </div>
            </nav>
        );
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper blue darken-3">
                    <Link to={this.props.auth ? "/surveys" : "/"}
                        className="left brand-logo"
                        style={{marginLeft: '10px'}}
                    >
                        CSS 490: Multimedia
                    </Link>
                    <ul className="right">
                        <ul className="right">
                            <li key="1"><Link to={"/homework1"}>CBIR 1</Link></li>
                            <li key="2"><Link to={"/homework2"}>CBIR 2</Link></li>
                        </ul>
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        // look at combined reducers, we called this piece of state - auth
        auth : state.auth
    };
}

export default connect(mapStateToProps)(Header);
