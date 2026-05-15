import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export default function App() {
    const [clickCount, setClickCount] = useState(0);
    const [textValue, setTextValue] = useState("");
    const [selectValue, setSelectValue] = useState("");
    const [sliderValue, setSliderValue] = useState([50]);
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [checked, setChecked] = useState(["tailwind"]);
    const toggleCheck = (id) => setChecked((prev) => prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]);
    return (_jsxs("main", { className: "max-w-2xl mx-auto p-8 space-y-6", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-semibold", children: "shadcn/ui Component Showcase" }), _jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "All values update live \u2014 acceptance criteria demo" })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsx(Card, { children: _jsxs(CardContent, { className: "pt-4", children: [_jsx("p", { className: "text-xs text-muted-foreground", children: "Button clicks" }), _jsx("p", { className: "text-3xl font-semibold", children: clickCount })] }) }), _jsx(Card, { children: _jsxs(CardContent, { className: "pt-4", children: [_jsx("p", { className: "text-xs text-muted-foreground", children: "Slider value" }), _jsx("p", { className: "text-3xl font-semibold", children: sliderValue[0] })] }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Button \u2014 click counter" }), _jsx(CardDescription, { children: "Displays updated count on every click" })] }), _jsxs(CardContent, { className: "flex gap-3 cursor-pointer", children: [_jsxs(Button, { className: "cursor-pointer bg-red-600", onClick: () => setClickCount((c) => c + 1), children: ["Click me \u2014 ", clickCount, " clicks"] }), _jsx(Button, { variant: "outline", className: "backdrop-brightness-95", onClick: () => setClickCount(0), children: "Reset" })] })] })] }));
}
