/* eslint-disable react/prop-types */
export function Tel(props) {
  //   console.log(props);
  return <a href={"tel:" + props.tel}>{props.tel}</a>;
}
