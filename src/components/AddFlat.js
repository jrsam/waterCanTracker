import Display from "./Display";

function AddFlat(props) {
    return (
        <div>
            <label>
                Flat number 
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </div>
    )
}

export default AddFlat;