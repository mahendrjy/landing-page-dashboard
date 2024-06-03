import React from "react";
import Container from "./container";
import { Component, LandingPage } from "@/app/interfaces";

function LandingPageView({ page }: { page: LandingPage }) {
  if (!page) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div className="py-10">
        {page.components.map((component: Component) => (
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
