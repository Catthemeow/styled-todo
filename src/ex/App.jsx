import React, { useState } from 'react';
import { createGlobalStyle, styled } from 'styled-components';

import TodoHead from './components/TodoHead';
import TodoBody from './components/TodoBody';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
// import TodoItem from './components/TodoItem';

const GlobalStyle = createGlobalStyle`
    *{margin: 0;padding: 0;}
    ul,ol,li{list-style: none;}
    .sr-only{position: absolute;left:-9999px;}
    button{cursor: pointer;}
    body{font-size: 12px;}
`;

const TodoContainer = styled.div`
	position: relative;
	width: 400px;
	margin: 30px auto;
	border: 1px solid #ccc;
`;

const initialData = [
	{ id: 1, title: '1-오늘할일', done: false },
	{ id: 2, title: '2-오늘할일', done: false },
	{ id: 3, title: '3-오늘할일', done: false },
];

const App = () => {
	const [todos, setTodos] = useState(initialData);
	const ChkFn = (id) => {
		alert('체크함수');
		// setTodos === id;
	};
	return (
		<>
			<GlobalStyle />
			<TodoContainer>
				<TodoHead>To Do</TodoHead>
				<TodoBody>
					<TodoList todos={todos} ChkFn={ChkFn} />
					<TodoInsert />
				</TodoBody>
			</TodoContainer>
		</>
	);
};

export default App;
