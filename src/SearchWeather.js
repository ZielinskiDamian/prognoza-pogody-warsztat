const SearchWeather = (props) => {
	return (
		<div className='serchWeather'>
			<form>
				<label htmlFor='serchWeather'>Szukaj : </label>
				<input
					type='text'
					id='serchWeather'
					onChange={(e) => props.filterWeather(e.target.value)}
				></input>
			</form>
		</div>
	);
};
export default SearchWeather;
