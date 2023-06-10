import './App.css';
import Format from './Components/Format/Format';
import NavbarP from './Components/NavbarP/NavbarP';
import List from './Components/List/List';
import { BaseColaboradores } from './data/base';
import { useState } from 'react';

function App() {
	const [listCoworker, setListCoworker] = useState(BaseColaboradores);
	const [savedList, setSavedList] = useState();
	const handlerClickAdd = (e) => {
		setListCoworker([...listCoworker, { id: listCoworker.length + 1, ...e }]);
		saved();
	};
	const saved = () => {
		setSavedList([...listCoworker]);
	};
	const handlerSearch = (filteredSearch) => {
		const onRender =
			filteredSearch.length === 0 ? listCoworker : filteredSearch;
		setListCoworker([...onRender]);
	};
	return (
		<div className='App'>
			<NavbarP
				onChangeSearch={(e) => handlerSearch(e)}
				list={listCoworker}
			/>
			<article>
				<Format onClickAddCoworker={(e) => handlerClickAdd(e)} />
				<hr></hr>
				<h2 className='h2'>Listado de Colaboradores</h2>
				<List list={listCoworker} />
			</article>
		</div>
	);
}

export default App;
