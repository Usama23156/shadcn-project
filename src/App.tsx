import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { toast } from "sonner";

export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    {
      id: 1,
      title: "First Slide",
      description: "This is the first carousel item",
    },
    {
      id: 2,
      title: "Second Slide",
      description: "This is the second carousel item",
    },
    {
      id: 3,
      title: "Third Slide",
      description: "This is the third carousel item",
    },
  ]
 
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState<{ name: string; email: string; message: string } | null>(null);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email format";
    if (!message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="max-w-2xl mx-auto p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">shadcn/ui Component Showcase</h1>
        <p className="text-muted-foreground text-sm mt-1">
          All values update live — acceptance criteria demo
        </p>
      </div>

      {/* Metric Summary */}
      <div>
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Button clicks</p>
            <p className="text-3xl font-semibold">{clickCount}</p>
          </CardContent>
        </Card>
      
      </div>

      {/* Button Counter */}
      <Card>
        <CardHeader>
          <CardTitle>Button — click counter</CardTitle>
          <CardDescription>Displays updated count on every click</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-3 items-center">
          <Button className="cursor-pointer bg-red-600" onClick={() => setClickCount((c) => c + 1)}>
            Click me — {clickCount} clicks
          </Button>
          <Button variant="outline" className="cursor-pointer" onClick={() => setClickCount(0)}>
            Reset
          </Button>
          <Input
            type="number"
            placeholder=" number ..."
            className="w-32"
            onChange={(e) => setClickCount(Number(e.target.value))}
          />
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle>Contact form</CardTitle>
          <CardDescription>Fill out the form — validation on submit</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">

          {/* Name */}
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          {/* Message */}
          <div className="space-y-1">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
          </div>

          <Button className="cursor-pointer w-full bg-red-700" onClick={handleSubmit}>
            Submit
          </Button>
        </CardContent>
      </Card>

      {/* Success Display */}
      {submitted && (
        <Card className="border-green-500">
          <CardHeader>
            <CardTitle className="text-green-600">✅ Form submitted!</CardTitle>
            <CardDescription>Here's what we received</CardDescription>
          </CardHeader>
          <CardContent className="space-y-1 text-sm">
            <p><span className="font-medium">Name:</span> {submitted.name}</p>
            <p><span className="font-medium">Email:</span> {submitted.email}</p>
            <p><span className="font-medium">Message:</span> {submitted.message}</p>
          </CardContent>
        </Card>
      )}

 {/* Calender */}
    <Card>
      <div className=" flex items-center justify-center ">
      <div className=" shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Select a Date
        </h1>
         <div className="flex  items-center gap-9">

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-56"
          />

        <div className="mt-4 text-center">
          {date ? (
            <p className="text-lg font-medium w-32">
              Selected Date: {date.toDateString()}
            </p>
          ) : (
            <p>No date selected</p>
          )}
        </div>
            </div>
      </div>
    </div>
    </Card>

     {/* Collapsible */}
    <Card>
       <div className=" flex items-center justify-center ">
      <div className="w-[350px] rounded-xl border p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          Collapsible Example
        </h1>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="w-full rounded-md bg-black px-4 py-2">
            {isOpen ? "Hide Content" : "Show Content"}
          </CollapsibleTrigger>

          <CollapsibleContent className="mt-4 border rounded-md p-4">
            <p>
              This content can be expanded and collapsed using
              the Shadcn Collapsible component.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
    </Card>

     {/* Carousel */}
    <Card>
         <div className=" flex items-center justify-center  p-4">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-6">
          Shadcn Carousel
        </h1>

        <Carousel className="w-full">
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem key={item.id}>
                <div className="p-1">
                  <div className="rounded-2xl border  p-10 shadow-md text-center">
                    <h2 className="text-2xl font-bold mb-2">
                      {item.title}
                    </h2>

                    <p className="">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
    </Card>

     {/* toast */}
    <Card>
       <div className=" flex items-center justify-center ">
      <Button className="bg-red-700"
        onClick={() =>
          toast( "Your action was completed successfully."
          )
        }
      >
        Show Toast
      </Button>
    </div>
    </Card>
    </main>
  );
}