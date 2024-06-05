import {
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import LandingPageView from "./landing-page-view";
import { Button } from "../ui/button";
import { LandingPage } from "@/app/interfaces";

function LandingPageSlideOverView({
  landingPage,
  title,
  description,
  components,
  handlePublish,
}: {
  landingPage: LandingPage;
  title: string;
  description: string;
  components: any[];
  handlePublish: () => void;
}) {
  return (
    <SheetContent className="min-w-[800px] overflow-y-scroll">
      <SheetHeader>
        <SheetTitle>Preview</SheetTitle>
      </SheetHeader>
      <div className="border rounded-md mt-4">
        <LandingPageView
          landingPage={{
            id: landingPage.id,
            status: landingPage.status,
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
  );
}

export default LandingPageSlideOverView;
