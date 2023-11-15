export default function InputPrice({ onChange, value }) {
  return (
    <input
      className="w-16 p-2 outline-none rounded-lg border border-gray"
      type="text"
      placeholder="USD"
      inputMode="numeric"
      pattern="[0-9]+"
      onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
      value={value}
      onChange={(event) => onChange(event)}
      title="Please enter only numbers"
    />
  );
}
