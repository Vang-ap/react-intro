export function AgeDisplay(props) {
  console.log("** rerender AgeDisplay");
  return (
    <>
    <p>I am {props.age} years old</p>
    </>
  )
}