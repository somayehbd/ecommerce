const AddProduct = () => {
    return (
        <>
            <div class="container">
                <form id="productForm">
                    <div class="form-group">
                        <label for="productName">Product Name:</label>
                        <input type="text" class="form-control" id="productName" required />
                    </div>
                    <div class="form-group">
                        <label for="price">Price:</label>
                        <input type="number" class="form-control" id="price" required />
                    </div>
                    <div class="form-group">
                        <label for="shortInfo">Short Info:</label>
                        <textarea class="form-control" id="shortInfo" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="productPicture">Product Picture:</label>
                        <input type="file" class="form-control-file" id="productPicture" />
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="checkbox1" />
                            <label class="form-check-label" for="checkbox1">Checkbox 1</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Save</button>
                        <button type="button" class="btn btn-secondary" id="editButton">Edit</button>
                        <button type="button" class="btn btn-danger" id="deleteButton">Delete</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default AddProduct;