import "./index.less";

import React from "react";

class Thead extends React.Component {
    render() {
        return (
            <div className="scrollable-table-head">
                <table>
                    <thead ref="thead">
                        {this.props.children}
                    </thead>
                </table>
            </div>
        )
    }
}

class Tbody extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (Number.isInteger(this.props.scrollTop)) {
            this.refs["table"].scrollTop = this.props.scrollTop;
        }
    }

    render() {
        return (
            <div className="scrollable-table-body" ref="table" onScroll={this.props.onBodyScroll}>
                <table>
                    <tbody ref="tbody">
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        )
    }
}

class BodyScrollTable extends React.Component {
    constructor(props) {
        super(props);
        this._reflow = this.reflow.bind(this);
    }

    componentDidMount() {
        this.reflow();
        window.addEventListener("resize", this._reflow);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._reflow);
    }

    componentDidUpdate(prevProps, prevState) {
        this.reflow();
    }

    reflow() {
        var _thead = this.refs["__scrollableTable__Thead"];
        var _tbody = this.refs["__scrollableTable__Tbody"];

        if (!_thead || !_tbody) return;

        var thead = _thead.refs["thead"];
        var tbody = _tbody.refs["tbody"];
        var td_tr = tbody.querySelector("tr");
        var th_tr = thead.querySelector("tr");

        if (!td_tr || !th_tr) return;

        var ths = th_tr.querySelectorAll("th");
        var tds = td_tr.querySelectorAll("td");

        if (ths.length === tds.length) {
            for (var i = 0; i < ths.length; i++) {
                ths[i].style.width = tds[i].clientWidth + "px";
            }
        } else {
            for (var i = 0; i < ths.length; i++) {
                ths[i].style.width = th_tr.clientWidth / ths.length + "px";
            }
        }
    }

    onBodyScroll() {

    }

    render() {
        return (
            <div className="scrollable-table">
                {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, { ref: `__scrollableTable__${child.type.name}` });
                })}
            </div>
        )
    }
}

BodyScrollTable.Thead = Thead;
BodyScrollTable.Tbody = Tbody;

export default BodyScrollTable;
