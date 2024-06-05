import { Component, LandingPage } from "@/app/interfaces";
import Container from "../common/container";

interface LandingPageViewProps {
  landingPage: LandingPage;
}

function LandingPageView({ landingPage }: LandingPageViewProps) {
  if (!landingPage) {
    return <Container className="mt-4">pika Loading...</Container>;
  }

  return (
    <Container>
      <div className="py-10">
        {landingPage.components.map((component: Component) => (
          <div key={component.id} className="mb-6">
            {component.type === "Header" && (
              <h2 className="text-2xl font-bold">{component.content}</h2>
            )}
            {component.type === "Footer" && (
              <footer className="text-sm text-gray-500">
                {component.content}
              </footer>
            )}
            {component.type === "Text Block" && <p>{component.content}</p>}
            {component.type === "Image" && (
              <img src={component.content} alt="" className="w-full" />
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default LandingPageView;
