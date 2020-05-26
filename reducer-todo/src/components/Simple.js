import React, { useReducer, useState } from "react";
import { appReducer, initState } from "../reducers/reductor";

export const Simple = () => {
	const [todo, setTodo] = useState(initState);
	const [state, dispatch] = useReducer(appReducer, initState);

	const handleChange = event => {
		// console.log(todo);
		setTodo(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		dispatch({
			type: "ADD_ITEM",
			payload: {
				item: event.target.value,
				completed: false,
				id: 7
			}
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} value={todo} />
			</form>
			<div>
				{state.map(item => (
					<div key={item.id}>
						<p>{item.item}</p>
					</div>
				))}
			</div>
		</div>
	);
};
