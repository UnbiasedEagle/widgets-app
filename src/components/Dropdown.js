import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, heading }) => {
	const [ showList, setShowList ] = useState(false);
	const ref = useRef();
	const renderOptions = options.map((option) => {
		if (selected.label !== option.label) {
			return (
				<div onClick={() => onSelectedChange(option)} className='item' key={option.value}>
					{option.label}
				</div>
			);
		}
		return null;
	});

	useEffect(() => {
		const onBodyClick = (event) => {
			if (!ref.current.contains(event.target)) {
				setShowList(false);
			}
		};

		document.body.addEventListener('click', onBodyClick);
		return () => {
			document.body.removeEventListener('click', onBodyClick);
		};
	}, []);

	return (
		<div ref={ref} className='ui form'>
			<div className='field'>
				<label className='label'>{heading}</label>
				<div
					onClick={() => {
						setShowList(!showList);
					}}
					className='ui selection visible dropdown active'
				>
					<i className='dropdown icon' />
					<div className='text' style={{ color: `${selected.value}` }}>
						{selected.label}
					</div>
					<div className={`menu ${showList === true ? 'visible' : ''} transition`}>{renderOptions}</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
