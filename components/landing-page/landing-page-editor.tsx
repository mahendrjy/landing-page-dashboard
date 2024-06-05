import { useState } from "react";
import { Separator } from "../ui/separator";
import { nanoid } from "nanoid";
import { LandingPage, OnPublish } from "@/app/interfaces";
import LandingPageForm from "./landing-page-form";
import LandingPageEditHeader from "./landing-page-editor-header";
import { Sheet } from "@/components/ui/sheet";
import LandingPageSlideOverView from "./landing-page-slideover-view";
import LandingPageComponentsEditor from "./landing-page-components-editor";

interface LandingPageEditorProps {
  landingPage: LandingPage;
  onPublish: (data: OnPublish) => void;
}

function LandingPageEditor({ landingPage, onPublish }: LandingPageEditorProps) {
  const [title, setTitle] = useState(landingPage.title);
  const [description, setDescription] = useState(landingPage.description);
  const [components, setComponents] = useState(landingPage.components || []);

  const addComponent = (component: string) => {
    setComponents((prevComponents) => [
      ...prevComponents,
      {
        id: nanoid(),
        type: component,
        content: "",
      },
    ]);
  };

  const removeComponent = (id: string) => {
    setComponents((prevComponents) =>
      prevComponents.filter((component) => id !== component.id)
    );
  };

  const updateComponent = (id: string, content: string) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id ? { ...component, content } : component
      )
    );
  };

  const handlePublish = () => {
    onPublish({
      title,
      description,
      components,
      selectedLandingPage: landingPage,
    });
  };

  return (
    <>
      <Sheet>
        {/* Slide Over Content */}
        <LandingPageSlideOverView
          landingPage={landingPage}
          title={title}
          description={description}
          components={components}
          handlePublish={handlePublish}
        />

        {/* Editor Header */}
        <LandingPageEditHeader landingPage={landingPage} />
      </Sheet>

      <Separator className="mb-4" />

      {/* Editor Form */}
      <LandingPageForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        addComponent={addComponent}
      >
        {/* Components Editor */}
        <LandingPageComponentsEditor
          components={components}
          updateComponent={updateComponent}
          removeComponent={removeComponent}
        />
      </LandingPageForm>
    </>
  );
}

export default LandingPageEditor;
