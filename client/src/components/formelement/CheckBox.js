const CheckBox = ({ name, label, value, onChange }) => {
    return (
        <div className="checkbox">
            <input
                value={value}
                onChange={onChange}
                name={name}
                id={name}
                type="checkbox"
            />
            <label htmlFor="">{label}</label>
        </div>
    );
}

export default CheckBox;