import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [textValue, setTextValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [sliderValue, setSliderValue] = useState([50]);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [checked, setChecked] = useState<string[]>(["tailwind"]);

  const toggleCheck = (id: string) =>
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );

  return (
    <main className="max-w-2xl mx-auto p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">shadcn/ui Component Showcase</h1>
        <p className="text-muted-foreground text-sm mt-1">
          All values update live — acceptance criteria demo
        </p>
      </div>

      {/* Metric Summary */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Button clicks</p>
            <p className="text-3xl font-semibold">{clickCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Slider value</p>
            <p className="text-3xl font-semibold">{sliderValue[0]}</p>
          </CardContent>
        </Card>
      </div>

      {/* Button Counter */}
      <Card>
        <CardHeader>
          <CardTitle>Button — click counter</CardTitle>
          <CardDescription>Displays updated count on every click</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-3 cursor-pointer">
          <Button className="cursor-pointer bg-red-600" onClick={() => setClickCount((c) => c + 1)}>
            Click me — {clickCount} clicks
          </Button>
          <Button variant="outline" className="backdrop-brightness-95" onClick={() => setClickCount(0)}>
            Reset
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}