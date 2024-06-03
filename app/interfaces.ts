export interface Component {
  id: string;
  type: string;
  content: string;
}

export interface LandingPage {
  id: string;
  title: string;
  description: string;
  status: "live" | "draft";
  components: Component[];
}

export interface OnCreate {
  title: string;
  description: string;
  status: "draft" | "live";
  components: string[];
}

export interface OnPublish {
  title: string;
  description: string;
  components: Component[];
  page: LandingPage;
}
