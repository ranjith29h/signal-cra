import { signal, effect, computed, useSignal } from "@preact/signals-react";

function firstSignalHandle() {
  const firstSignal = signal(0);
  const double = computed(() => firstSignal.value * 2);
  const inputValue = signal("ranjith");

  const increment = () => {
    return (firstSignal.value += 1);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    inputValue.value += 1;
  };

  effect(() => console.log(firstSignal.value));

  return { firstSignal, double, inputValue, increment, handleInput };
}

const Simple = () => {
  const { firstSignal, inputValue, increment, double, handleInput } =
    firstSignalHandle();

  const input = useSignal(inputValue);

  console.log(input);

  return (
    <div>
      <p>Hello</p>
      <input value={inputValue.value} onInput={handleInput} />
      <p>
        hello {firstSignal} - {double}
      </p>
      <button onClick={increment}>Clickup</button>
    </div>
  );
};

export default Simple;
