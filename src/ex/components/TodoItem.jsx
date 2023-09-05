import React from 'react';
import { styled } from 'styled-components';

const Item = styled.li`
	display: flex;
	align-items: center;
	padding: 20px;
	border-bottom: 1px solid #ddd;

	/* &:hover {
		background-color: #dedede;
		cursor: pointer;
	} */
`;

const Form = styled.input`
	width: 15px;
	height: 15px;
`;

const Title = styled.h2`
	flex: 1 1 0;
	order: 200;
	text-indent: 20px;
`;

const Button = styled.button`
	order: 300;
	width: 20px;
	height: 7px;
	background-color: #000;
`;

const TodoItem = ({ todo, ChkFn }) => {
	const { id, title, done } = todo;
	return (
		<Item>
			<Form type="checkbox" onClick={ChkFn} />
			<Title done={`${done}`}>{title}</Title>
			<Button />
		</Item>
	);
};

export default TodoItem;
