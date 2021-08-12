import { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
    onDelete = (id) => {
        if (window.confirm('Bạn có chắc chắn xóa sản phẩm này không ?') ){
            this.props.onDelete(id);
        }
    }
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'danger';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`badge bg-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link 
                        to={`/product/${product.id}/edit`} 
                        className="btn btn-success mr-10"
                    >
                        Sửa
                    </Link>
                    <button type="button" className="btn btn-danger" onClick={()=> this.onDelete(product.id)}>Xóa</button>
                </td>
            </tr>
        );
    }
}
export default ProductItem;