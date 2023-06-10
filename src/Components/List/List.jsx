import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

//La lista se le entrega desde el componente padre, simplifica la logica y vuelve el componente reutilizable.
function List({ list }) {
	return (
		<ListGroup variant='flush'>
			{list.map((coworker) => (
				<ListGroup.Item key={coworker.id}>
					{coworker.nombre} - {coworker.correo}
				</ListGroup.Item>
			))}
		</ListGroup>
	);
}

export default List;
