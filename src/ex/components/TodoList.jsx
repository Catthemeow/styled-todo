import React from 'react';
import { styled } from 'styled-components';

import TodoItem from './TodoItem';

const ItemContainer = styled.ul`
	overflow-y: scroll;
	position: absolute;
	right: -17px;
	height: 500px;
	width: calc(100% + 17px);
`;

const TodoList = ({ todos, ChkFn }) => {
	return (
		<ItemContainer>
			{todos.map((todo) => (
				<TodoItem todo={todo} ChkFn={ChkFn} key={todo.id} />
			))}
		</ItemContainer>
	);
};

export default TodoList;
