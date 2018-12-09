import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            {this.props.quotes.map(q=>{
              return <QuoteCard id={q.id} key={q.id} content={q.content} author={q.author} votes={q.votes}/>
            })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateFromProps = ({quotes})=>({quotes})
//add arguments to connect as needed
export default connect(mapStateFromProps)(Quotes);
