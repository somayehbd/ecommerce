import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const storedProducts = localStorage.getItem('products');
        let products = JSON.parse(storedProducts)

        if (products == null) {
            products = [data];
        }
        products.push(data)
        localStorage.setItem('products', JSON.stringify(products))
        
        return (
            <>
                <div className="container">
                    <form id="productForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label for="productName">Product Name:</label>
                            <input type="text" className="form-control" id="productName" required {...register("name")} />
                        </div>
                        <div className="form-group">
                            <label for="price">Price:</label>
                            <input type="number" className="form-control" id="price" required {...register("price")} />
                        </div>
                        <div className="form-group">
                            <label for="shortInfo">Short Info:</label>
                            <textarea className="form-control" id="shortInfo"  {...register("description")} required></textarea>
                        </div>
                        <div className="form-group">
                            <label for="productPicture">Product Picture:</label>
                            <input type="text" className="form-control-file" id="productPicture" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">submit</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
export default AddProduct;