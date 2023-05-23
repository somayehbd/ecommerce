const AddProduct = () => {

    return (
        <>
            <div className="container">
                <form id="productForm">
                    <div className="form-group">
                        <label for="productName">Product Name:</label>
                        <input type="text" className="form-control" id="productName" required />
                    </div>
                    <div className="form-group">
                        <label for="price">Price:</label>
                        <input type="number" className="form-control" id="price" required />
                    </div>
                    <div className="form-group">
                        <label for="shortInfo">Short Info:</label>
                        <textarea className="form-control" id="shortInfo" required></textarea>
                    </div>
                    <div className="form-group">
                        <label for="productPicture">Product Picture:</label>
                        <input type="file" className="form-control-file" id="productPicture" />
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox1" />
                            <label className="form-check-label" for="checkbox1">Checkbox 1</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Save</button>
                        <button type="button" className="btn btn-secondary" id="editButton">Edit</button>
                        <button type="button" className="btn btn-danger" id="deleteButton">Delete</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default AddProduct;