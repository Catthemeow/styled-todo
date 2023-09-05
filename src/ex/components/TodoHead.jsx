import React from 'react';
import { styled } from 'styled-components';

const Title = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 100px;
	margin: 0 auto;
	color: #fff;
	background-color: #2e2e2e;
	border: 1px solid black;
	> div {
		display: flex;
		flex-direction: column;
		align-items: end;
		> h2 {
			margin-bottom: 5px;
		}
	}
`;

const TodoHead = ({ children }) => {
	return (
		<Title>
			<h1>{children}</h1>
			<div>
				<h2>23.08.30</h2>
				<p>수요일</p>
			</div>
		</Title>
	);
};

export default TodoHead;
