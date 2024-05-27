
function Card(props){
    return(
        <div className="container">
            <img classme="card-img" src={props.img}/>
            <h2 className="card-name">{props.itemName}</h2>
            <p className="card-desc">{props.itemDesc}</p>
            <p className="card-remAm">Piezas disponibles: {props.remAmount}</p>
            <p className="card-price">{props.price}</p>
        </div>
    )
}

function CreateCard(){
    return(
        <div className="card-container">
        <Card img='./img/nvidia-4090.png' itemName="Nvidia 4090" itemDesc="La tarjeta grafica mas potente de Nvidia y del mercado" />
        <Card img='./img/amd-7900xtx.png' itemName="Amd 7900xtx" itemDesc="La tarjeta grafica mas potente de AMD."/>
        <Card img='./img/intel-arc-a770.png' itemName="Intel Arc A770" itemDesc="La tarjeta grafica mas potente de Intel."/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CreateCard />);
