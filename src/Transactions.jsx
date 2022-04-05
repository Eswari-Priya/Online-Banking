import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DataTable from 'react-data-table-component';
class Transactions extends Component {
    state = { 
        transactions:[
            {acctNum:1,Name:"cscs",sent:[{toName:"hjbchb",toAcct:2,date:'2/2/22',time:"23:10",amount:20000},{toName:"hjbchb",toAcct:2,date:'2/2/22',time:"23:10",amount:20000},{toName:"hjbchb",toAcct:2,date:'2/2/22',time:"23:10",amount:20000}]},
            // {acctNum:2,sent:[{toName:"hjbchb",toAcct:2,date:'2/2/22',time:"23:10",amount:20000},{toName:"hjbchb",toAcct:2,date:'2/2/22',time:"23:10",amount:20000},{toName:"hjbchb",toAcct:2,date:'2/2/22',time:"23:10",amount:20000}]},
            // {acctNum:3,sent:[{toName:"hjbchb",toAcct:2,date:'2/2/22',time:"23:10",amount:20000},{toName:"hjbchb",toAcct:2,date:'2/2/22',time:"23:10",amount:20000},{toName:"hjbchb",toAcct:2,date:'2/2/22',time:"23:10",amount:20000}]},
        ],
        columns:[
            {
                name:"Name",
                selector:row =>row.toName
            },
            {
                name:"Account Number",
                selector:row =>row.toAcct
            },
            {
                name:"Date",
                selector:row =>row.date
            },
            {
                name:"Time",
                selector:row =>row.time
            },
            {
                name:"Amount",
                selector:row =>row.amount
            },
        ]
     } 
    render() { 
        return (
            <div className='col-8 offset-2 '>
                <h1 style={{textAlign:'center'}}>Transaction History</h1>
                <h2>Name of the Account Holder</h2>
                <div className='border-dark'>
                <DataTable
                    columns={this.state.columns}
                    data={this.state.transactions[0].sent}
                />
                </div>
            </div>
        );
    }
}
 
export default Transactions;