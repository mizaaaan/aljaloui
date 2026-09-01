import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#080b0f]">
      <Card className="w-full max-w-lg mx-4 shadow-lg border-[#5fe7ff]/20 bg-[#10151a]">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#ff7f78]/10 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-[#ff7f78]" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-[#e9f1f4] mb-2">404</h1>

          <h2 className="text-xl font-semibold text-[#dce9ed] mb-4">
            Page Not Found
          </h2>

          <p className="text-[#82919a] mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-[#5fe7ff] hover:bg-[#5fe7ff]/90 text-[#061014] px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
