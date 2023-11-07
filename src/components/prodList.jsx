import ProdCard from "./prodCard";

const ProdList = () => {

    const productData = [
        {
          "imageUrl": "https://equusio.vtexassets.com/arquivos/ids/231229-500-auto?v=637840763141570000&width=500&height=auto&aspect=true",
          "title": "CAMISA NAVY",
          "description": "CAMISA DE LINO SLIM FIT",
          "category": "camisa",
        },
        {
          "imageUrl": "https://equusio.vtexassets.com/arquivos/ids/210178-500-auto?v=637516981910270000&width=500&height=auto&aspect=true",
          "title": "PANTALON BRUNELLO",
          "description": "PANTALON CORTE CHINO CON BOLSILLOS",
          "category": "pantalon",
        },
        {
          "imageUrl": "https://equusio.vtexassets.com/arquivos/ids/210106-500-auto?v=637516981032430000&width=500&height=auto&aspect=true",
          "title": "PANTALON FORMALY",
          "description": "PANTALON GABARDINA CON BOLSILLOS",
          "category": "pantalon",
        },
        {
          "imageUrl": "https://equusio.vtexassets.com/arquivos/ids/244008-500-auto?v=637992852789300000&width=500&height=auto&aspect=true",
          "title": "AMBO GIORDANO",
          "description": "AMBO SLIM FIT SUPERFLEX",
          "category": "ambo",
        },
        {
          "imageUrl": "https://equusio.vtexassets.com/arquivos/ids/217045-500-auto?v=637649128787930000&width=500&height=auto&aspect=true",
          "title": "BERMUDAS GIANCARLO",
          "description": "BERMUDA COMFY STYLE",
          "category": "bermuda",
        },
        {
          "imageUrl": "https://equusio.vtexassets.com/arquivos/ids/217502-500-auto?v=637654049454500000&width=500&height=auto&aspect=true",
          "title": "CHOMBA JONYS",
          "description": "CHOMBA CUELLO DIFERENCIAL Y BOTONES",
          "category": "chomba",
        },
        {
          "imageUrl": "https://equusio.vtexassets.com/arquivos/ids/235370-500-auto?v=637921144140530000&width=500&height=auto&aspect=true",
          "title": "CAMISA WOODOLF",
          "description": "CAMISA GABARDINA RELAXED FIT",
          "category": "camisa",
        },
        {
          "imageUrl": "https://equusio.vtexassets.com/arquivos/ids/218612-500-auto?v=637654059682670000&width=500&height=auto&aspect=true",
          "title": "REMERA STRAPO",
          "description": "REMERA RELAXED FIT CON ESTAMPA SUNNY",
          "category": "remera",
        },
      ];


    return (
      <>
        <div className="bg-light mt-5 p-3 text-center">
          <h2>PRODUCTOS</h2>
        </div>
        <div className="row mt-4 p-3">
          {productData.map((product, index) => (
            <div className="col-md-3 mt-4" key={index}>
              <ProdCard
                imageUrl={product.imageUrl}
                title={product.title}
                description={product.description}
              />
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default ProdList;