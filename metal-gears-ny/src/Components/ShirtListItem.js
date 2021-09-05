import { CardGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ShirtListItem.css";



function ShirtListItem({ shirt }) {
  return (
    <div className="shirt-details">
       <Link to={`/shirts/${shirt.id}`} className="link"> 

        
        <CardGroup /*style={{ width: '10rem', height: '14rem' }}*/>
        <Card >



          <Card.Img
            className="shirtIcon"
            src="https://www.metalsupermarkets.com/wp-content/uploads/2019/02/What-type-of-welding-is-used-for-aluminum.jpg"
            alt="icon"
            style={{ width: '13rem', height: '14rem' }}
          />
    

   
            <Card.Body>
              <Card.Title>
              {`${shirt.type_of}`}
              </Card.Title>
                <Card.Subtitle>
                {`Color: ${shirt.color}`}
                </Card.Subtitle>
                <Card.Subtitle>
                {`Price: $${shirt.price}.00`}
                </Card.Subtitle>
            </Card.Body>
          </Card>
             </CardGroup>
      </Link>
    </div>
  );
}

export default ShirtListItem;

// blue
// https://www.freeiconspng.com/thumbs/blank-t-shirt-png/blank-t-shirt-png-8.png

// pink
// https://cdn11.bigcommerce.com/s-n7dyokm269/images/stencil/1280x1280/products/291/1085/Safety_Pink_Short_Sleeve_T_Shirt_Front__12433.1529285685.png?c=2

//green
//https://www.pngkey.com/png/full/807-8075143_youth-heavy-cotton-t-shirt-mint-green-t.png
