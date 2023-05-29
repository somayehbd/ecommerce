import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    //function for create generateID
    function unicid() {
        let count = 0;
        return function () {
            count++;
            return count;
        }
    }
    const generateID = unicid()

    const onSubmit = (data) => {
        const storedProducts = localStorage.getItem('managementproducts');
        let managementproducts = JSON.parse(storedProducts)

        if (managementproducts == null) {
            managementproducts = [];
        }

        else {
            managementproducts.push({ id: generateID(), ...data })
        }

        localStorage.setItem('managementproducts', JSON.stringify(managementproducts))
    }

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

export default AddProduct;