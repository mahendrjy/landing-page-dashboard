import React from "react";
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
import { Button } from "../ui/button";
import Container from "../common/container";

const predefinedComponents = ["Header", "Footer", "Text Block", "Image"];

interface LandingPageFormProps {
  children?: React.ReactNode;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  addComponent: (component: string) => void;
  components?: string[];
}

function LandingPageForm({
  children,
  title,
  setTitle,
  description,
  setDescription,
  addComponent,
  components = [],
}: LandingPageFormProps) {
  return (
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
                Landing landingPage details to be displayed on the dashboard.
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
                Add components to be displayed on the landing landingPage.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 space-x-4">
              {predefinedComponents.map((component) => (
                <Button
                  key={component}
                  variant={
                    components.includes(component) ? "secondary" : "outline"
                  }
                  onClick={() => addComponent(component)}
                >
                  Add {component}
                </Button>
              ))}
            </CardContent>
          </Card>
          {children}
        </TabsContent>
      </Tabs>
    </Container>
  );
}

export default LandingPageForm;
