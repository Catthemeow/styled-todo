import React from 'react';
import { styled } from 'styled-components';

const TodoForm = styled.form`
	position: absolute;
	bottom: 0%;
	width: 100%;
	border-top: 1px solid black;
	> input {
		width: 100%;
		height: 50px;
		line-height: 50px;
		padding-left: 15px;
		font-size: 18px;
		border: none;
		outline: none;
	}
`;

const TodoInsert = () => {
	return (
		<TodoForm>
			<input type="text" placeholder="추가항목을 입력해주세요"></input>
		</TodoForm>
	);
};

export default TodoInsert;
