import React, { FC } from 'react';

interface ContainerProps {
	children: React.ReactNode,
}

const Container: FC<ContainerProps> = ({children}) => {
	return (
		<div className='max-w-[1140px] m-auto'>
			{children}
		</div>
	);
};

export default Container;