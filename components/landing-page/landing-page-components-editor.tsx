import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";

interface LandingPageComponentsEditorProps {
  components: any[];
  updateComponent: (id: string, content: string) => void;
  removeComponent: (id: string) => void;
}

function LandingPageComponentsEditor({
  components,
  updateComponent,
  removeComponent,
}: LandingPageComponentsEditorProps) {
  return (
    <>
      {components.length > 0 && (
        <Card className="mt-4 pt-6">
          <CardHeader>
            <CardTitle>Edit Components</CardTitle>
            <CardDescription>
              Edit the components to be displayed on the landing landingPage.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {components.map((component) => (
                <div key={component.id}>
                  <Label htmlFor={component.type} className="w-24 font-medium">
                    {component.type}
                  </Label>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      {/* Text Block */}
                      {component.type === "Text Block" && (
                        <Textarea
                          id={component.type}
                          value={component.content}
                          onChange={(e) =>
                            updateComponent(component.id, e.target.value)
                          }
                        />
                      )}

                      {/* Image */}
                      {component.type === "Image" && (
                        <Input
                          id={component.type}
                          type="text"
                          placeholder="Image URL"
                          value={component.content}
                          onChange={(e) =>
                            updateComponent(component.id, e.target.value)
                          }
                        />
                      )}

                      {/* Header and Footer */}
                      {(component.type === "Header" ||
                        component.type === "Footer") && (
                        <Input
                          id={component.type}
                          type="text"
                          placeholder={`${component.type} Content`}
                          value={component.content}
                          onChange={(e) =>
                            updateComponent(component.id, e.target.value)
                          }
                        />
                      )}
                    </div>

                    {/* Remove Component */}
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
    </>
  );
}

export default LandingPageComponentsEditor;
