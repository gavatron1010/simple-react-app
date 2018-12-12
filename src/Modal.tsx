import * as React from "react";
import * as ReactDOM from "react-dom";
import styles from './style.css';

const modalRoot = document.getElementById('modal-root');

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export function Child(props) {
  // The click event on this button will bubble up to parent div in App
  // because there is no 'onClick' attribute defined
  return (
    props.showModal?
    <div className={styles.modal}>
      Please Login
      &nbsp;
      <button>OK</button>
    </div>
    :
    <div></div>
    
  );
}
