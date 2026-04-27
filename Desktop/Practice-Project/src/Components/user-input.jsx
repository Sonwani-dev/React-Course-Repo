import InputGroup from "./input-group";

export default function UserInput() {
  return (
    <div id="user-input">
      <div id="input-group">
        <InputGroup heading="Initial Investment" />
        <InputGroup heading="Annual Investment" />
        <InputGroup heading="Expected Return" />
        <InputGroup heading="Duration" />
      </div>
    </div>
  );
}
