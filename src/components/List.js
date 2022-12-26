import React, { Component } from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class List extends Component {
  render() {
	 return (
		 <ul>
			 {this.props.list.map(item => { 
				 const { id, value } = item;
				 return (
					 <li key={id}>
						 {value}
						 <button onClick={()=> this.props.onDelete(id)}>
							 <FontAwesomeIcon icon={faTrash}/>
						 </button>
					 </li>
				 )
				})}
		</ul>
	 )
  }
}


