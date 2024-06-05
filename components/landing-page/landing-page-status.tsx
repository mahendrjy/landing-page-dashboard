import Container from "../common/container";

function LandingPageStatus({ status }: { status: string }) {
  return (
    <Container className="mt-4">
      {status === "loading"
        ? "Loading..."
        : "Landing page not found with the given id"}
    </Container>
  );
}

export default LandingPageStatus;
