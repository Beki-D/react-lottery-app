import React, { Component } from 'react'

class Counter extends Component {
    render() {
        console.log("Counter - Rendered");
        let imgIndex = this.props.id - 1;

        return (
            <>
                {this.props.children}
                
                {/* <img 
                    src={this.props.pics}
                    alt="item_image"
                    style={{ height: "70px", paddingRight: "10px" }} 
                /> */}

                <div className="card col-2 bg-dark" style={{width: "14rem"}}>
                        <img 
                            className="p-3"
                            src={this.props.pics[imgIndex]}
                            alt="item_image"
                            style={{ height: "10rem", width: "13rem", paddingRight: "10px" }} 
                        />
                    <div className="card-body">
                        <div className="col-1 me-2">
                            <span style={this.styles} className={ this.getBadgeClasses() }>
                                { this.formatCount()} {(this.formatCount()) > 1 ? "Tickets" : "Ticket"}
                            </span>
                        </div>
                        <div className="col">
                        <button 
                            onClick={() => this.props.onIncrement(this.props.counter)} 
                            className="btn btn-info btn-sm">
                            +
                        </button>

                        <button 
                            onClick={() => this.props.onDecrement(this.props.counter)} 
                            className={ this.getButtonClasses() } 
                            disabled={this.props.counter.value === 0 ? 'disabled' : ''} >
                            -
                        </button>

                        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                            Delete
                        </button>
                    </div>
                    </div>
                </div> 
            </>
        );
    }

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    getButtonClasses() {
        let classes = "btn btn-sm ms-2 btn-secondary";
        classes += (this.props.counter.value === 0) ? " disabled" : "";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        //const zero = <h1>Nothing to display</h1>

        return value === 0 ? 'zero' : value;
    }
}
 
export default Counter;