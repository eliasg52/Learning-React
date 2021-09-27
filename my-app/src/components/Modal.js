function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button onClick={props.propParaCerrar} className="btn btn--alt">
        Cancel
      </button>
      <button onClick={props.propParaCerrar} className="btn">
        Confirm
      </button>
    </div>
  );
}

export default Modal;
