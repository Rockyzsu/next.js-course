function aboutPage2({ params, searchParams }) {
  return (
    <h1>
      About page - {params.id}, query -- {searchParams.name}
    </h1>
  );
}

export async function generateMetadata({ params, searchParams }) {
  return {
    title: " - " + params.id + " - " + searchParams.name,
    description: "About page " + params.id + " - " + searchParams.name,
  };
}

export default aboutPage2;
