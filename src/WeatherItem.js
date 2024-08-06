    const WeatherItem=(props)=>{
        return(<div className='weatherItem' >
        <h2>{props.weatherItem.stacja}</h2>
        <p>Temperatura: {props.weatherItem.temperatura} st.C.</p>
        <p>
            Ciśnienie:{' '}
            {props.weatherItem.cisnienie
                ? props.weatherItem.cisnienie + 'hPa'
                : 'brak dancyh '}{' '}
        </p>
        <p>Godzina pomiaru: {props.weatherItem.godzina_pomiaru + ':00'} </p>
    </div>)
    }
    export default WeatherItem