import storeItems from '../data/db.json';
import { Row, Col } from 'react-bootstrap';

export const Store = () => {
    return (
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className='g-3'>
                {storeItems.map(item => (
                    <Col key={item.id}>{JSON.stringify(item)}</Col>
                ))}
            </Row>
        </>
    )
}
