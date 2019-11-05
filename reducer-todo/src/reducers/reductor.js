import React, { useReducer, useState } from "react";

export const initState = {
	item: "Learn about reducers",
	completed: false,
	id: 3892987589
};

export const appReducer = (state, action) => {
	switch (action.type) {
		case "TEMP":
			return { ...state };
		default:
			throw new Error("Problem: No action matched.");
	}
};

