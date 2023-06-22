export default function Heading(props) {
  return (
    <figure class="text-center">
    <blockquote class="blockquote">
        <p style={{fontSize:'35px'}}>{props.title}</p>
      </blockquote>
      <figcaption class="blockquote-footer">
      {props.subheader}
  </figcaption>
</figure>
  );
}
