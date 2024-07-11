function Button({element}) {

    let {a,b} = element
  let x = a == "red" ? "red" : "green";
  let y = b == "rounded" ? "50px" : "20px";

  return (
    <div>
      <button style={{ color: x, borderRadius: y }} >Click Me</button>
    </div>
  );
}

export default Button;
