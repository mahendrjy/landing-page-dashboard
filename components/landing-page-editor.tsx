import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import Container from "./container";
import { Separator } from "./ui/separator";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LandingPageView from "./landing-page-view";
import { LandingPage, OnPublish } from "@/app/interfaces";

const predefinedComponents = ["Header", "Footer", "Text Block", "Image"];
function LandingPageEditor({
  page,
  onPublish,
}: {
  page: LandingPage;
  onPublish: (data: OnPublish) => void;
}) {
  const router = useRouter();
  const [title, setTitle] = useState(page.title);
  const [description, setDescription] = useState(page.description);
  const [components, setComponents] = useState(page.components || []);

  const addComponent = (component: string) => {
    setComponents([
      ...components,
      {
        id: nanoid(),
        type: component,
        content: "",
      },
    ]);
  };

  const removeComponent = (id: string) => {
    setComponents(components.filter((componenet) => id !== componenet.id));
  };

  const updateComponent = (index: number, content: string) => {
    const newComponents = [...components];
    newComponents[index].content = content;
    setComponents(newComponents);
  };

  const handlePublish = () => {
    onPublish({
      title,
      description,
      components,
      page,
    });
  };

  return (
    <>
      <Sheet>
        <SheetContent className="min-w-[800px] overflow-y-scroll">
          <SheetHeader>
            <SheetTitle>Preview</SheetTitle>
          </SheetHeader>
          <div className="border rounded-md mt-4">
            <LandingPageView
              page={{
                id: page.id,
                status: page.status,
                title,
                description,
                components,
              }}
            />
          </div>
          <SheetFooter className="mt-4">
            <Button onClick={handlePublish}>Publish</Button>
          </SheetFooter>
        </SheetContent>

        <Container>
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => router.push("/")}>
                <ArrowLeft />
              </Button>
              {page.title}
            </div>

            <div className="flex items-center gap-4">
              <SheetTrigger asChild>
                <Button variant="outline">Preview</Button>
              </SheetTrigger>
            </div>
          </div>
        </Container>
      </Sheet>
      <Separator className="mb-4" />
      <Container>
        <Tabs defaultValue="step1" className="mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="step1">Step 1</TabsTrigger>
            <TabsTrigger value="step2">Step 2</TabsTrigger>
          </TabsList>
          <TabsContent value="step1">
            <Card>
              <CardHeader>
                <CardTitle>Basic Details</CardTitle>
                <CardDescription>
                  Landing page details to be displayed on the dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="step2">
            <Card>
              <CardHeader>
                <CardTitle>Add Components</CardTitle>
                <CardDescription>
                  Add components to be displayed on the landing page.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 space-x-4">
                {predefinedComponents.map((component) => (
                  <Button
                    key={component}
                    variant="outline"
                    onClick={() => addComponent(component)}
                  >
                    Add {component}
                  </Button>
                ))}
              </CardContent>
            </Card>
            {components.length > 0 && (
              <Card className="mt-4 pt-6">
                <CardHeader>
                  <CardTitle>Edit Components</CardTitle>
                  <CardDescription>
                    Edit the components to be displayed on the landing page.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {components.map((component, index) => (
                      <div key={component.id}>
                        <Label
                          htmlFor={component.type}
                          className="w-24 font-medium"
                        >
                          {component.type}
                        </Label>
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            {component.type === "Text Block" && (
                              <Textarea
                                id={component.type}
                                value={component.content}
                                onChange={(e) =>
                                  updateComponent(index, e.target.value)
                                }
                              />
                            )}
                            {component.type === "Image" && (
                              <Input
                                id={component.type}
                                type="text"
                                placeholder="Image URL"
                                value={component.content}
                                onChange={(e) =>
                                  updateComponent(index, e.target.value)
                                }
                              />
                            )}
                            {(component.type === "Header" ||
                              component.type === "Footer") && (
                              <Input
                                id={component.type}
                                type="text"
                                placeholder={`${component.type} Content`}
                                value={component.content}
                                onChange={(e) =>
                                  updateComponent(index, e.target.value)
                                }
                              />
                            )}
                          </div>
                          <Button
                            variant="destructive"
                            onClick={() => removeComponent(component.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </Container>
    </>
  );
}

export default LandingPageEditor;
