function GetTotalPrice(items) {
    let totalPrice = 0;
    items.forEach(item => {
      totalPrice += item.price * item.boughtNum;
    });
    return totalPrice;
  }
  
  function AddItems() {
    const [items, setItems] = React.useState([
      {
        img: './img/nvidia-4090.png',
        boughtNum: 0,
        itemName: "Nvidia 4090",
        itemDesc: "La tarjeta grafica mas potente de Nvidia y del mercado",
        remAmount: 15,
        price: 1499,
        alertYes: 'No hay mas existencias',
        alertNo: 'Debes escoger al menos uno'
      },
      {
        img: './img/amd-7900xtx.png',
        boughtNum: 0,
        itemName: 'Amd 7900xtx',
        itemDesc: 'La tarjeta grafica mas potente de AMD.',
        remAmount: 10,
        price: 999
      },
      {
        img: './img/intel-arc-a770.png',
        boughtNum: 0,
        itemName: 'Intel Arc A770',
        itemDesc: 'La tarjeta grafica mas potente de Intel.',
        remAmount: 5,
        price: 499
      }
    ]);
  
    const onClickPlus = (itemIndex) => {
      const updatedItems = [...items];
      const actualNum = updatedItems[itemIndex].boughtNum + 1;
      const remAmount = updatedItems[itemIndex].remAmount - 1;
      const price = updatedItems[itemIndex].price * actualNum;
      if (updatedItems[itemIndex].remAmount <= 0) {
        return (
          alert('No hay mas existencias de ' + updatedItems[itemIndex].itemName)
        );
      }
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        boughtNum: actualNum,
        remAmount: remAmount
      };
      setItems(updatedItems);
      console.log(price);
    };
  
    const onClickLess = (itemIndex) => {
      const updatedItems = [...items];
      const actualNum = updatedItems[itemIndex].boughtNum - 1;
      const remAmount = updatedItems[itemIndex].remAmount + 1;
      const price = updatedItems[itemIndex].price * actualNum;
      if (updatedItems[itemIndex].boughtNum <= 0) {
        return (
          alert('Debe escoger al menos un producto')
        );
      }
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        boughtNum: actualNum,
        remAmount: remAmount
      };
      setItems(updatedItems);
      console.log(price);
    };
  
    const totalPrice = GetTotalPrice(items);
  
    return (
      <div>
        <div className="card-container">
          {items.map((item, itemIndex) => (
            <React.Fragment key={item.itemName}>
              <div className="container">
                <img className="card-img" src={item.img} alt={item.itemName} title={item.itemName} />
                <h2 className="card-name">{item.itemName}</h2>
                <p className="card-desc">{item.itemDesc}</p>
                <p className="card-remAm">Piezas disponibles: <strong>{item.remAmount}</strong></p>
                <p className="card-price"><strong>${item.price}</strong></p>
                <div className="bought-items">
                  <button className="card-button-plus" onClick={() => { onClickLess(itemIndex) }}>-</button>
                  <p className="bought-num"><strong>{item.boughtNum}</strong></p>
                  <button className="card-button-less" onClick={() => { onClickPlus(itemIndex) }}>+</button>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <h2 className="total">Total: ${totalPrice}</h2>
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<AddItems />);
  