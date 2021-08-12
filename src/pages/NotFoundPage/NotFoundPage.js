import { Component } from "react";

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="alert alert-warning">
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    <strong>Không Tìm Thấy Trang</strong>
                </div>
            </div>
        );
    }
}
export default NotFoundPage;