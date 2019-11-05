import React, { useReducer, useState } from "react";
import { appReducer, initState } from "../reducers/reductor";

export const Simple = () => {
	const [todo, setTodo] = useState([]);
	const [state, dispatch] = useReducer(appReducer, initState);

	const handleChange = event => {
		console.log(todo);
		setTodo(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		setTodo(event.target.value);
		// dispatch
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} value={todo} />
				{todo.map(item => (
					<div key={item.id}>
						<p>{item.item}</p>
					</div>
				))}
			</form>
		</div>
	);
};
