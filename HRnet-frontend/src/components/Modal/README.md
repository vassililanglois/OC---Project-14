# React Simple Modal

A customizable React modal component.

## Installation

```bash
npm install react-simple-modal
```

## Usage

```jsx
import Modal from "@vassili/modal";
import "@vassili/modal/dist/modal.css";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal show={open} onClose={() => setOpen(false)}>
        <div>Your content here</div>
      </Modal>
    </>
  );
}
```

## Props

| Prop     | Type     | Description                     |
| -------- | -------- | ------------------------------- |
| show     | boolean  | Show or hide the modal          |
| onClose  | function | Callback when closing the modal |
| children | node     | Modal content                   |

## License

MIT
