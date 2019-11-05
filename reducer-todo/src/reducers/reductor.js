import React, { useReducer, useState } from "react";

export const initState = [
	{
		item: "Learn about reducers",
		completed: false,
		id: 1
	},
	{
		item: "Second",
		completed: false,
		id: 2
	}
];

export const appReducer = (state, action) => {
	console.log(state);
	switch (action.type) {
		case "ADD_ITEM":
			return {
				...state,
				item: state.item,
				completed: state.completed,
				id: state.id
			 };
		default:
			throw new Error("Problem: No action matched.");
	}
};
