import React from "react";
import Header from "./Header.js";
import List from "./List.js";
import SubmitForm from "./SubmitForm.js";

class TodoList extends React.Component { 
	constructor(props) { 
		super(props);

		this.handleAdd = this.handleAdd.bind(this);
		this.handleDele = this.handleDele.bind(this);
	}

	state = {
		list: [],
	}

	// к заданию todo прилетают новые и мы их concat, т.е. объединяем
	handleAdd(todo) { 
		this.setState({
			// list: [...this.state.list, todo],
			list: this.state.list.concat(todo)
		})

	}

	handleDele(id) { 
		this.setState({
			list: this.state.list.filter(item => item.id !== id)
		});
	}
	render() { 
		return (
			<div>
				<h2>TodoList</h2>
				<Header todosCount={this.state.list.length} />
				<SubmitForm handleAdd={this.handleAdd} />
				<List list={this.state.list} onDelete = {this.handleDele} />
			</div>
		)
	}
}

export default TodoList;