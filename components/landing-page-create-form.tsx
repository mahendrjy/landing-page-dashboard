"use client";
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
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Separator } from "./ui/separator";
import { OnCreate } from "@/app/interfaces";

const predefinedComponents = ["Header", "Text Block", "Image", "Footer"];

function LandingPageCreateForm({
  onCreate,
}: {
  onCreate: (data: OnCreate) => void;
}) {
  const router = useRouter();
  const [title, setTitle] = useState("Untitled Landing Page");
  const [description, setDescription] = useState("");
  const [components, setComponents] = useState<string[]>([]);

  const handleComponentChange = (component: string) => {
    setComponents((prev) => {
      if (prev.includes(component)) {
        return prev.filter((c) => c !== component);
      } else {
        return [...prev, component];
      }
    });
  };

  const handleSave = () => {
    onCreate({
      title,
      description,
      status: "draft",
      components,
    });
  };

  const handlePublish = () => {
    onCreate({
      title,
      description,
      status: "live",
      components,
    });
  };

  return (
    <>
      <Container>
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={router.back}>
              <ArrowLeft />
            </Button>
            {title}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={handleSave}>
              Save
            </Button>
            <Button onClick={handlePublish}>Publish</Button>
          </div>
        </div>
      </Container>
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
                    placeholder="Title"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    rows={7}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="step2">
            <Card>
              <CardHeader>
                <CardTitle>Select Components</CardTitle>
                <CardDescription>
                  Select components to be displayed on the landing page.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-x-4 space-y-2">
                {predefinedComponents.map((component) => (
                  <Button
                    key={component}
                    onClick={() => handleComponentChange(component)}
                    variant={
                      components.includes(component) ? "secondary" : "outline"
                    }
                  >
                    {component}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Container>
    </>
  );
}

export default LandingPageCreateForm;
