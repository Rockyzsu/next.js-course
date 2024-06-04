function showPage({ params }) {
  console.log(params.id);
  return <h3>Content of id {params.id}</h3>;
}

export default showPage;
