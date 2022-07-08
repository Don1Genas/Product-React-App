

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            value={props.productName}
            onChange={props.handleChange}
            id="productName"
          />

          <label htmlFor="productPrice">Price</label>
          <input
            type="number"
            value={props.productPrice}
            onChange={props.handleChange}
            id="productPrice"
          />

          <label htmlFor="productDescription">Description</label>
          <input
            type="text"
            value={props.productDescription}
            onChange={props.handleChange}
            id="productDescription"
          />

          <input type="submit" />
        </form>
    )
}
 export default Form;