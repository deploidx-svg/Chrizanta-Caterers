import { Switch, Route } from "wouter";
import { Suspense, lazy } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Spinner } from "@/components/ui/spinner";

const NotFound = lazy(() => import("@/pages/not-found"));
const Home = lazy(() => import("@/pages/Home"));
const WhyChrizanta = lazy(() => import("@/pages/WhyChrizanta"));
const MuttonBiryaniAward = lazy(() => import("@/pages/MuttonBiryaniAward"));

function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="inline-flex items-center gap-2 text-muted-foreground">
        <Spinner className="size-5" />
        <span className="text-sm font-medium">Loading page...</span>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/why-chrizanta" component={WhyChrizanta} />
        <Route path="/mutton-biryani-award" component={MuttonBiryaniAward} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
